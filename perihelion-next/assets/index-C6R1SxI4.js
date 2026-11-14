var $m=i=>{throw TypeError(i)};var Eo=(i,e,t)=>e.has(i)?$m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function Xm(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const qm="modulepreload",Ym=function(i,e){return new URL(i,e).href},Mf={},Km=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(t.map(u=>{if(u=Ym(u,n),u in Mf)return;Mf[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const v=o[p];if(v.href===u&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":qm,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((p,v)=>{f.addEventListener("load",p),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},su={pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",menu:"M3 4.5h10M3 8h10M3 11.5h10",back:"M10 3.5L5.5 8l4.5 4.5",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",sound:"M3 6.5v3h2.5L9 12.5v-9L5.5 6.5zM11 6a3 3 0 0 1 0 4M12.5 4.5a5 5 0 0 1 0 7",mute:"M3 6.5v3h2.5L9 12.5v-9L5.5 6.5zM11.5 6.5l3 3M14.5 6.5l-3 3",hard:"M2.5 4l4 4-4 4M6.5 4l4 4-4 4M10.5 4l4 4-4 4",cruise:"M5.5 4l4 4-4 4",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",sling:"M2.5 12.5c1-5 4-8 7-8a3 3 0 0 1 0 6c-1.5 0-2.5-1-2.5-2.2M11 12l2.5.5.5-2.5",strike:"M2 8h12M10.5 4.5L14 8l-3.5 3.5M5 5.5a3.5 3.5 0 0 0 0 5",match:"M3 5.5h7M3 10.5h7M10 3l3 2.5L10 8M10 8l3 2.5L10 13",torp:"M2.5 8h7.5l3.5-2v4l-3.5-2M2.5 6.5v3M5 8",salvo:"M2 5h6l3-1.5v3L8 5M2 11h6l3-1.5v3L8 11M13.5 5v6",fire:"M8 2v3M8 11v3M2 8h3M11 8h3M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0",evade:"M2.5 11l3-6 3 6 3-6 2 4",cut:"M4.5 4.5h7v7h-7z",plot:"M3 13L13 3M13 3H8.5M13 3v4.5M3 13m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",retreat:"M12.5 12.5v-5a3.5 3.5 0 0 0-7 0v3M3 8l2.5 2.5L8 8",yard:"M2.5 13.5h11M4 13.5v-8l4-2.5 4 2.5v8M6.5 13.5V9h3v4.5",mine:"M3 13l7.5-7.5M8 3c2.5 0 5 2 5 5M9 4l3 3",refinery:"M8 2.5c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7z",battery:"M3 13h10M5 13V9.5h6V13M8 9.5L12 4",add:"M8 3.5v9M3.5 8h9",lab:"M6 2.5h4M6.5 2.5v4L3 12.5a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6.5v-4M5 10.5h6",exchange:"M2.5 5.5h9M9 3l2.5 2.5L9 8M13.5 10.5h-9M7 8l-2.5 2.5L7 13",industry:"M2.5 13.5v-6l4 2.5v-2.5l4 2.5V4.5h3v9z",intel:"M1.5 8c2-3.5 4.2-5 6.5-5s4.500 1.500 6.500 5c-2 3.500-4.200 5-6.500 5s-4.500-1.500-6.500-5zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",agent:"M2.500 7.500h11M4.500 7.500l1.200-4h4.600l1.200 4M5.500 11m-1.800 0a1.800 1.800 0 1 0 3.600 0a1.800 1.800 0 1 0-3.600 0M10.500 11m-1.800 0a1.800 1.800 0 1 0 3.600 0a1.800 1.800 0 1 0-3.600 0M7.300 11h1.400",star:"M8 2l1.800 3.900 4.200.500-3.100 2.900.800 4.200L8 11.400 4.300 13.500l.800-4.200L2 6.400l4.200-.500z",habitat:"M2.5 13.5h11M3.5 13.5V8a4.5 4.5 0 0 1 9 0v5.5M6.5 13.5v-3h3v3",array:"M8 13.5V9M8 9a5 5 0 0 1-5-5M8 9a5 5 0 0 0 5-5M8 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 13.5h6",depot:"M4 13.5V5.5a4 4 0 0 1 8 0v8zM4 9h8M2.5 13.5h11",up:"M4 10l4-4 4 4",research:"M6 2.5h4M6.5 2.5v4L3 12.5a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6.5v-4M5 10.5h6",drives:"M5 2.5h6l1.5 5h-9zM5.5 9.5L4 13.5M8 9.5v4M10.5 9.5l1.5 4",weapons:"M2.5 8h8M10.5 5.5v5M13.5 6.5v3M5 6v4",sensors:"M8 13.5V9M8 9a5 5 0 0 1-5-5M8 9a5 5 0 0 0 5-5M8 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 13.5h6",contact:"M8 2.5l5.5 5.5L8 13.5 2.5 8z",lost:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M5.5 5.5l5 5M10.5 5.5l-5 5",captured:"M4 14V2.5M4 3h8l-2 2.5 2 2.5H4",fuel:"M8 2.5c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7zM6 10.5h4",bolt:"M9 1.5L4 9h3.5L6.5 14.5 12 7H8.5z",freight:"M2.5 5.5h11v6h-11zM6 5.5v6M10 5.5v6",raided:"M2.5 5.5h11v6h-11zM3 13L13 3.5",arrived:"M8 2.5v8M4.5 7L8 10.5 11.5 7M3.5 13.5h9",wrench:"M10.5 2.5a3 3 0 0 0-2.7 4.2L2.5 12l1.5 1.5 5.3-5.3A3 3 0 0 0 13.5 5.5L11.5 7.5 9.5 5.5z",crown:"M2.5 12.5h11M3 12.5L2.5 5l3 3L8 3.5 10.5 8l3-3-.5 7.5",skull:"M8 2.5a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9zM6.2 8m-.9 0a.9.9 0 1 0 1.8 0a.9.9 0 1 0-1.8 0M9.8 8m-.9 0a.9.9 0 1 0 1.8 0a.9.9 0 1 0-1.8 0",credits:"M11.5 4.8A4.5 4.5 0 1 0 11.5 11.2M8 1.5v13",flag:"M4 14V2.5M4 3h8l-2 2.5 2 2.5H4",people:"M5.5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 13c0-2 1.5-3.5 3.5-3.5S9 11 9 13M11 7m-1.6 0a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0-3.2 0M10.5 10c2 0 3.5 1.2 3.5 3",book:"M3 3h4.5a1.5 1.5 0 0 1 1.5 1.5V13a1.5 1.5 0 0 0-1.5-1.5H3zM13 3H8.5M13 3v8.5H9",sun:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",check:"M3.5 8.5l3 3 6-7"},et=(i,e="")=>`<svg class="ic ${e}" viewBox="0 0 16 16" aria-hidden="true"><path d="${su[i]||su.contact}"/></svg>`,Zm={corvette:"M13 8L4 11.5v-7z",frigate:"M14 8L3 12.5 6 8 3 3.5z",escort:"M14 8L8 12.5 2 8l6-4.5z",battleship:"M15 8l-4 4H2V4h9z",tender:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0",freighter:"M3 5h10v6H3z"},ul=(i,e="currentColor")=>`<svg class="gl" viewBox="0 0 16 16" aria-hidden="true"><path d="${Zm[i]||su.contact}" fill="${e}"/></svg>`,jm=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],Jm=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],Qm=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],eg=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],Sf={concord:["Resolute","Tenacity","Undaunted","Clemency","Forbearance","Adamant","Candour","Diligence","Endeavour","Fortitude","Gallantry","Vigilant","Warspite","Dauntless","Inflexible","Lionheart","Relentless","Stalwart","Thunderer","Vanguard","Bulwark","Defiance","Invictus","Redoubt","Upholder","Ironside","Stoic","Hearthguard","Paladin","Unbowed","Zealous","Temerity","Valiance","Hardihood"],boreal:["Tramontane","Mistral","Sirocco","Zephyr","Bora","Levanter","Gregale","Khamsin","Harmattan","Squall","Northwind","Monsoon","Whirlwind","Tempest","Hurricane","Williwaw","Chinook","Simoom","Ostro","Libeccio","Etesian","Polar Front","Haboob","Katabatic","Foehn","Pampero","Brickfielder","Shamal","Meltemi","Aurora","Hoarfrost","Graupel","Virga","Derecho"],holds:["Second Wind","Borrowed Time","Long Odds","Last Lamp","Paid in Full","Patchwork","Honest Mistake","Rust and Prayer","Nickel Jack","Slow Dawn","Hard Bargain","Thin Margin","Old Habit","Kindling","Spare Parts","No Refunds","Wick","Tallow","Flint and Steel","Third Shift","Good Enough","Cold Supper","Ask Nicely","Loose Change","Night Soil","Coalscuttle","Tinderbox","Low Tide","Make Do","Stray","Mend and Mind","Short Straw","Lamplighter","Quiet Word"]},at=-1,Ri=.2,ss=100,m0=5,zr=18,_a=8,Ee={startCredits:300,homeIncome:2,income:{planet:.8,giant:1,moon:.4,station:.5,asteroid:.3},load:120,stockCap:400,structures:{yard:{name:"Yard",cost:350,time:60,where:["planet","station"],maxLevel:2},mine:{name:"Mine",cost:200,time:40,where:["planet","moon","asteroid"],rocky:!0,maxLevel:2,income:1},refinery:{name:"Refinery",cost:300,time:50,where:["planet"],giant:!0,maxLevel:2,income:1.5},battery:{name:"Battery",cost:250,time:45,where:["planet","moon","station","asteroid"],maxLevel:3},habitat:{name:"Habitat",cost:300,time:60,where:["planet","station"],rocky:!0,maxLevel:2},lab:{name:"Lab",cost:300,time:60,where:["planet","station"],rocky:!0,maxLevel:2},exchange:{name:"Exchange",cost:400,time:70,where:["station"],home:!0,maxLevel:2,income:1.5},array:{name:"Sensor array",cost:250,time:45,where:["moon","station","asteroid"],maxLevel:1},depot:{name:"Fuel depot",cost:250,time:45,where:["moon","station","asteroid"],maxLevel:1}},batteryHp:140,batteryRegen:1.5,yield:{asteroid:18,moon:20,station:22,planet:30,giant:36,home:50},refuel:.5,repair:1.5,rearm:4,selfRepair:50,pdcRange:3,railRange:7,railCool:4,torpRange:20,torp:{accel:.4,dv:8,dmg:28,life:150,reload:14,hit:.55},cold:14,ident:60,worldSensor:1.4,board:{freighter:6,warship:20,range:2.4,speed:.5},scrapTime:30,turnaround:20,upkeep:{corvette:.05,frigate:.1,escort:.1,tender:.08,battleship:.35},capBase:4,capMax:12,arraySensor:2.5},bn={corvette:{name:"Corvette",cost:260,time:50,hull:60,armour:0,accel:.065,dv:26,size:.6,sig:.55,sensor:1.4,rails:[5],pdc:1,tubes:2,mag:4,power:1},frigate:{name:"Frigate",cost:450,time:75,hull:110,armour:2,accel:.05,dv:20,size:.9,sig:1,sensor:1,rails:[9],pdc:2,tubes:4,mag:12,power:2.2},escort:{name:"Escort",cost:420,time:75,hull:100,armour:2,accel:.045,dv:20,size:.9,sig:1,sensor:1.1,rails:[5],pdc:6,tubes:0,mag:0,power:1.8},battleship:{name:"Battleship",cost:1100,time:150,hull:300,armour:8,accel:.035,dv:18,size:1.6,sig:1.5,sensor:1,rails:[16,16],pdc:4,tubes:4,mag:8,power:6,needs:"spinal"},tender:{name:"Tender",cost:320,time:60,hull:90,armour:0,accel:.04,dv:70,size:1.2,sig:1.2,sensor:.8,rails:[],pdc:1,tubes:0,mag:0,power:0,stores:24},freighter:{name:"Freighter",cost:0,time:0,hull:55,armour:0,accel:.03,dv:1e6,size:1.3,sig:1.3,sensor:.5,rails:[],pdc:0,tubes:0,mag:0,power:0,civil:!0}},g0=["corvette","frigate","escort","battleship","tender"],la={dup:!0,holdsMoons:0},tg=["mine","refinery","yard","lab","habitat","exchange"],ei={concord:{name:"Meridian Concord",short:"Concord",text:"Tough ships. The capital earns more.",hull:1.4,armour:4,cost:1,accel:.95,income:1.4,start:["frigate","escort","corvette"]},boreal:{name:"Boreal Republic",short:"Republic",text:"Fast ships, strong rails. Starts with four ships.",accel:1.2,rail:1.3,hull:1,dv:1.1,start:["frigate","frigate","corvette","corvette"]},holds:{name:"Lantern Holds",short:"Holds",text:"Cheap ships, hard to see. Starts on a station with moons nearby. The capital earns less.",cost:.95,time:.9,sig:.6,hull:.75,cap:1,income:.9,start:["frigate","frigate","corvette","corvette"]}},ya=Object.keys(ei),ri={drives:{name:"Drives",tiers:[[{key:"nozzles",name:"High-thrust nozzles",text:"+20% thrust."}],[{key:"tanks",name:"Drop tanks",text:"+35% fuel."},{key:"flash",name:"Flash burn",text:"Hard burn has 40% more thrust."}],[{key:"cruise",name:"Efficient cruise",text:"Cruise is 33% faster."}],[{key:"coldjets",name:"Cold thrusters",text:"Dark runs show no drive plume."},{key:"torch",name:"Torch drive",text:"+25% thrust."}]]},weapons:{name:"Weapons",tiers:[[{key:"guided",name:"Guided slugs",text:"Rails hit 25% more often."}],[{key:"spinal",name:"Spinal mounts",text:"Lets you build battleships."}],[{key:"wolfpack",name:"Wolfpack tubes",text:"Corvettes and frigates carry 50% more torpedoes and reload faster."},{key:"plate",name:"Layered plate",text:"+25% hull."}],[{key:"swarm",name:"Swarm warheads",text:"Point defence stops half as many of your torpedoes."},{key:"flak",name:"Flak curtain",text:"Your point defence is twice as strong."}]]},sensors:{name:"Sensors",tiers:[[{key:"passive",name:"Passive arrays",text:"See coasting ships 40% further away."}],[{key:"coldrun",name:"Cold running",text:"Your ships are 40% harder to see."},{key:"network",name:"Deep-space network",text:"Your worlds see twice as far."}],[{key:"firecon",name:"Fire-control link",text:"Rails reach 25% further."}],[{key:"jammers",name:"Jammers",text:"30% of torpedoes fired at your ships miss."},{key:"longwatch",name:"Long watch",text:"Identify ships 60% further away."}]]},industry:{name:"Industry",tiers:[[{key:"fabs",name:"Orbital fabricators",text:"Build 20% faster."}],[{key:"deepmine",name:"Deep mining",text:"Mines earn 50% more."},{key:"bulk",name:"Bulk freight",text:"Freighters are faster and twice as tough."}],[{key:"modular",name:"Modular yards",text:"Ships cost 15% less."}],[{key:"arcology",name:"Arcologies",text:"Habitats give twice as many ships."},{key:"wareco",name:"War economy",text:"Your capital earns twice as much."}]]},intel:{name:"Intelligence",tiers:[[{key:"signals",name:"Signals intercept",text:"Lets you use agents. Shows where enemy ships are going."}],[{key:"sabot",name:"Saboteurs",text:"Agents can turn off a battery or delay a yard."},{key:"rings",name:"Spy rings",text:"Agents can take a third of a world's income."}],[{key:"counter",name:"Counter-intelligence",text:"Catch enemy agents twice as fast."}],[{key:"fifth",name:"Fifth column",text:"Worlds with your agent yield twice as fast."},{key:"cipher",name:"Broken cipher",text:"Identify any enemy ship while its drive burns."}]]}},to=Object.keys(ri),lo=[250,450,750,1200],ou=[50,80,120,170],Yl=i=>{for(const e of to)for(const t of ri[e].tiers)for(const n of t)if(n.key===i)return n;return null},Vt=(i,e,t)=>e>=0&&!!i.tech[e].picks[t],os={seam:{name:"Rich seam",text:"Mines earn double.",kinds:["asteroid","moon"],boost:"mine"},relay:{name:"Old relay",text:"Sees four times as far.",kinds:["asteroid","moon","station"]},deut:{name:"Deuterium sea",text:"Fast refuelling. A refinery earns 50% more.",kinds:["giant"],boost:"refinery"},fortress:{name:"Fortress rock",text:"A battery here is twice as strong.",kinds:["asteroid","moon"],boost:"battery"},archive:{name:"Ancient archive",text:"Research is 30% faster. A lab here counts double.",kinds:["planet","moon"],boost:"lab"},hulk:{name:"Drydock hulk",text:"Has a yard that builds 50% faster. Its ships start with a rank.",kinds:["station","moon"],boost:"yard"},forge:{name:"Tidal forge",text:"Everything builds twice as fast. No labs.",kinds:["moon"],no:["lab"]},garden:{name:"Garden world",text:"Earns 4.8 more a day. A habitat here gives 2 ships a level. No mines.",kinds:["planet"],boost:"habitat",no:["mine"]},listening:{name:"Listening post",text:"Identifies ships far away while their drives burn. A sensor array here sees twice as far again.",kinds:["asteroid","moon","station"],boost:"array"}},kn={cost:200,travel:45,caught:1/360,opCost:150,opRisk:.3,skim:.33},co={hard:{name:"Hard burn",a:1,cap:1/0,lat:.03},cruise:{name:"Cruise",a:.7,cap:2,lat:.1},dark:{name:"Dark",a:.5,cap:1.2,lat:.35}};function Oi(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const ng=(i,e)=>Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z),Ui=(i,e,t)=>i<e?e:i>t?t:i,vd=(i,e)=>2*Math.PI*Math.sqrt(i*i*i/e),wf=i=>vd(i,ss),Tf=(i,e)=>Math.max(vd(i,e),2*Math.PI*Math.sqrt(i/.012)),Ef={rock:.06,gas:.07},ig=.5;function Kt(i,e){e.t=i.time,i.events.push(e),i.events.length>240&&i.events.splice(0,60)}function Pi(i,e){i.fx.length<400&&i.fx.push(e)}function ki(i,e,t,n=1){e>=0&&(i.stats[e][t]=(i.stats[e][t]||0)+n)}function ca(i=new Date){const e=i.toISOString().slice(0,10);let t=2166136261;for(const n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return{seed:t>>>0,key:e}}function xd(i,e){const t=e-(i.node||0);let n,r;if(i.e){let u=t;for(let c=0;c<4;c++)u-=(u-i.e*Math.sin(u)-t)/(1-i.e*Math.cos(u));n=(Math.cos(u)-i.e)*i.r,r=Math.sqrt(1-i.e*i.e)*Math.sin(u)*i.r}else n=Math.cos(t)*i.r,r=Math.sin(t)*i.r;const s=Math.cos(i.node||0),o=Math.sin(i.node||0),a=Math.cos(i.incl),l=Math.sin(i.incl);return{x:n*s-r*o*a,y:r*l,z:n*o+r*s*a}}function on(i,e,t){const n=xd(e,e.phase+2*Math.PI*t/e.period);if(e.parent!==null){const r=on(i,i.bodies[e.parent],t);n.x+=r.x,n.y+=r.y,n.z+=r.z}return n}function uo(i,e,t){const r=on(i,e,t-.5),s=on(i,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const rg=()=>({x:0,y:0,z:0}),pr=i=>i.size*1.8+.5,v0=i=>i.gm?Math.sqrt(i.gm/pr(i))/pr(i):.1;function hs({seed:i=Date.now(),players:e=[{faction:"concord"},{faction:"boreal",ai:"normal"}],mp:t=!1,empty:n=!1,conquest:r=!1}={}){const s=Oi(i),o=e.length,a=(P,L)=>{const F=P.filter(K=>!L.has(K)),O=F[Math.floor(s()*F.length)]??`${P[0]} ${L.size}`;return L.add(O),O},l=P=>{for(let L=P.length-1;L>0;L--){const F=Math.floor(s()*(L+1));[P[L],P[F]]=[P[F],P[L]]}return P},u=new Set,c=[],h=P=>(P.id=c.length,P.owner=at,P.structures=[],P.queue=[],P.stock=0,P.bhp=0,P.yt=0,P.yo=at,P.node=P.id*2.39996%(Math.PI*2),c.push(P),P),d=e.map(P=>P.faction||"concord"),f=d.map((P,L)=>P==="holds"?L:-1).filter(P=>P>=0),p=d.map((P,L)=>P!=="holds"?L:-1).filter(P=>P>=0),v=Math.max(2,Math.min(4,p.length+1+Math.floor(s()*2))),g=Math.max(f.length,1+Math.floor(s()*2)),m=s()<.3,_=[],w=(P,L)=>Array.from({length:L},(F,O)=>({r:P*4+9+O*10+s()*2,size:.5+s()*.5})),x=l(Array.from({length:v-1},(P,L)=>L+1));for(let P=0;P<v;P++){const L=x.indexOf(P),F=L>=0&&L<p.length?p[L]:at,O=P===0?1.2+s()*.6:1.7+s()*.9;_.push({owner:F,giant:!1,size:O,moons:w(O,F!==at?1:P===0?0:Math.floor(s()*2)),station:!1,e:P===0?.12+s()*.08:.02+s()*.07,incl:(s()-.5)*(P===0?.1:.04)})}for(let P=0;P<g;P++){const L=P<f.length?f[P]:at,F=m&&P===0,O=F?5.2:3.4+s()*1.2;_.push({owner:L,giant:!0,size:O,moons:w(O,L!==at&&la.holdsMoons?la.holdsMoons+(s()*0|0):F?4:2+Math.floor(s()*2)),station:L!==at,stationHome:L!==at,e:.02+s()*.04,incl:(s()-.5)*.04})}if(s()<.4){const P=1.2+s()*.5;_.push({owner:at,giant:!1,size:P,moons:w(P,Math.floor(s()*2)),station:!1,e:.14+s()*.1,incl:(s()-.5)*.14,dwarf:!0})}const b=l(_.filter(P=>P.owner===at&&!P.dwarf)).slice(0,1+Math.floor(s()*2));for(const P of b)P.station=!0;for(const P of _)P.stationR=P.size*3+3,P.reach=Math.max(P.size*1.6,P.station?P.stationR+1:0,...P.moons.map(L=>L.r+L.size));let S=null,C=0;const y=(8+s()*12)*3;_.forEach((P,L)=>{S?L===v?(C=S.r*(1.25+s()*.15),P.r=(C+y)*(1.25+s()*.15)):P.r=Math.max(S.r*((P.giant?1.45:P.dwarf?1.35:1.38)+s()*.25),S.r+S.reach+P.reach+20):P.r=(28+s()*6)*m0,S=P}),_[_.length-1].dwarf&&_[_.length-1].r>1900&&_.pop();for(const P of _){P.gm=Ef[P.giant?"gas":"rock"]*P.size**3;const L=Math.max(0,...P.moons.map(F=>F.r),P.station?P.stationR:0);L&&(P.gm=Math.max(P.gm,3*ss*(L/(ig*P.r))**3))}const T=[];for(const P of _){const L=h({kind:"planet",name:a(jm,u),parent:null,r:P.r,e:P.e,period:wf(P.r),phase:s()*Math.PI*2,incl:P.incl,size:P.size,baseSize:P.size,giant:P.giant,gm:P.gm,hue:s()});P.owner!==at&&!P.stationHome&&(T[P.owner]={body:L,planet:L},L.biome=d[P.owner]==="boreal"?"desert":s()<.5?"temperate":"ocean");for(const F of P.moons)h({kind:"moon",name:a(Jm,u),parent:L.id,r:F.r,period:Tf(F.r,P.gm),phase:s()*Math.PI*2,incl:(s()-.5)*.25,size:F.size,baseSize:F.size,gm:Ef.rock*F.size**3,hue:s()});if(P.station){const F=h({kind:"station",name:a(Qm,u),parent:L.id,r:P.stationR,period:Tf(P.stationR,P.gm),phase:s()*Math.PI*2,incl:.2,size:P.stationHome?1.8:.45,baseSize:.45,hue:0});P.stationHome&&(T[P.owner]={body:F,planet:L})}}const R=3+Math.floor(s()*4);for(let P=0;P<R;P++){const L=C+s()*y,F=.5+s()*.4;h({kind:"asteroid",name:a(eg,u),parent:null,r:L,e:s()*.05,period:wf(L),phase:P/R*Math.PI*2+s()*.8,incl:(s()-.5)*.06,size:F,baseSize:F,gm:.04*F**3,hue:s()})}const U={seed:i,mp:t,conquest:r,time:0,acc:0,players:o,bodies:c,ships:[],torps:[],events:[],fx:[],nextId:1,stars:[{r:0,period:1,phase:0,size:zr/6,gm:ss}],belt:{r:C,w:y},factions:d,names:e.map((P,L)=>P.name||ei[P.faction||"concord"].short||`Player ${L+1}`),credits:e.map(()=>Ee.startCredits),tech:e.map(()=>({drives:0,weapons:0,sensors:0,industry:0,intel:0,picks:{},project:null})),agents:[],alive:e.map(()=>!0),eco:e.map(()=>1),stats:e.map(()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,hauled:0,raided:0,earned:0})),over:null,usedNames:[]},k=s()*Math.PI*2;T.forEach((P,L)=>{const F=P.body;if(P.planet.phase=k+L*Math.PI*2/o,F.owner=L,F.home=!0,F.structures.push({type:"yard",level:1,left:0},{type:"battery",level:2,left:0}),F.bhp=Hn(F),!n)for(const O of ei[U.factions[L]].start)qt(U,L,O,F)});for(const P of c){if(P.owner!==at)continue;(P.kind==="planet"?P.giant?!0:s()<.5:P.kind==="station"?s()<.5:!1)&&(P.structures.push({type:"battery",level:1,left:0}),P.bhp=Hn(P))}{const P=T.find(O=>O&&O.body.kind==="planet"&&O.body.biome!=="desert"),L=T.find(O=>O&&O.body.kind==="planet"),F=P?P.planet.r:L?L.planet.r/1.3:250;for(const O of c)O.kind==="planet"&&(O.zone=O.r<F*.7?"hot":O.r>F*1.6?"cold":"mild")}for(const P of l(Object.keys(os))){const L=os[P],F=c.filter(K=>K.owner===at&&!K.trait&&L.kinds.includes(K.giant?"giant":K.kind)&&!(K.kind==="planet"&&!K.giant&&L.kinds.includes("giant")&&!L.kinds.includes("planet"))&&(P!=="forge"&&P!=="deut"||K.giant||K.parent!==null&&c[K.parent].giant));if(!F.length)continue;const O=F[Math.floor(s()*F.length)];O.trait=P,P==="garden"&&(O.biome=O.zone==="hot"?"jungle":O.zone==="cold"?"ice":"temperate"),P==="fortress"&&!Mi(O,"battery")&&O.structures.push({type:"battery",level:1,left:0}),P==="fortress"&&(O.bhp=Hn(O)),P==="hulk"&&O.structures.push({type:"yard",level:1,left:0})}return Nd(U),U}const Or=i=>i.left<=0&&!i.scrap,Mi=(i,e,t=null)=>t!=null&&i.structures[t]&&i.structures[t].type===e?i.structures[t]:i.structures.find(n=>n.type===e),qi=(i,e)=>i.structures.some(t=>t.type===e&&Or(t)),Ni=(i,e)=>{let t=0;for(const n of i.structures)n.type===e&&Or(n)&&(t+=n.level);return t},Tl=(i,e=null)=>Ee.worldSensor*(Ni(i,"array")?Ee.arraySensor:1)*(i.trait==="relay"?4:1)*(i.trait==="listening"&&Ni(i,"array")?2:1)*(e&&Vt(e,i.owner,"network")?2:1),Hn=i=>Ee.batteryHp*Ni(i,"battery")*(i.trait==="fortress"?2:1)*(i.home?2:1),Kl=i=>Ni(i,"battery")?Ni(i,"battery")+(i.home?1:0):0,x0=10,_d=3,fo=(i,e,t)=>(Vt(i,e,"fabs")?1.2:1)*(t&&t.trait==="forge"?2:1),yd=(i,e)=>(1+.5*i.bodies.reduce((t,n)=>t+(n.owner===e?Ni(n,"lab")*(n.trait==="archive"?2:1):0),0))*(i.bodies.some(t=>t.owner===e&&t.trait==="archive")?1.3:1);function bd(i){return i.home?5:i.kind==="planet"?3:i.kind==="station"||i.kind==="moon"?2:1}const _0=i=>i.home?"home":i.giant?"giant":i.kind;function Br(i,e=null){const t=i.owner,n=s=>!!e&&Vt(e,t,s);return(i.home?Ee.homeIncome*(t>=0&&e&&ei[e.factions[t]].income||1)*(n("wareco")?2:1):Ee.income[i.giant?"giant":i.kind]+(i.trait==="garden"?.6:0))+Ni(i,"mine")*Ee.structures.mine.income*(i.trait==="seam"?2:1)*(n("deepmine")?1.5:1)+Ni(i,"refinery")*Ee.structures.refinery.income*(i.trait==="deut"?1.5:1)+Ni(i,"exchange")*Ee.structures.exchange.income}function Zl(i,e){const t=i.homes[e.owner];if(!t||e.home||e===t)return 1;const n=on(i,e,i.time),r=on(i,t,i.time);return 1+Math.min(1,Math.hypot(n.x-r.x,n.y-r.y,n.z-r.z)/1200)}const Md=(i,e)=>i.ships.reduce((t,n)=>t+(n.owner===e&&Ee.upkeep[n.cls]||0),0);function jl(i,e){const t=i.bodies.filter(s=>s.owner===e).map(s=>({body:s.id,rate:Br(s,i)*Zl(i,s)*(w0(i,s)?1-kn.skim:1),how:s.blockaded?"blockaded":s.home?"capital":"freight"})),n=t.reduce((s,o)=>s+(o.how==="blockaded"?0:o.rate),0)*(i.eco[e]||1),r=Md(i,e);return{lines:t,gross:n,upkeep:r,total:n-r}}const sg=(i,e)=>i.homes[e],Yo=(i,e)=>i.bodies.filter(t=>t.owner===e),Jl=(i,e)=>i.ships.filter(t=>t.owner===e&&!bn[t.cls].civil);function ba(i,e){const t=ei[i.factions[e]];return Math.min(Ee.capMax,Ee.capBase+(t.cap||0)+Yo(i,e).reduce((n,r)=>n+Ni(r,"habitat")*(r.trait==="garden"?2:1)*(Vt(i,e,"arcology")?2:1),0))}const Ma=(i,e)=>Jl(i,e).length+i.bodies.reduce((t,n)=>t+(n.owner===e?n.queue.length:0),0),cr=(i,e,t)=>Math.round(bn[t].cost*(ei[i.factions[e]].cost||1)*(Vt(i,e,"modular")?.85:1)/10)*10,Sd=(i,e,t,n=null)=>bn[t].time*(ei[i.factions[e]].time||1)/((n&&n.structures.some(r=>r.type==="yard"&&Or(r)&&r.level>=2)?1.5:1)*(n&&n.trait==="hulk"?1.5:1)*fo(i,e,n)),El=i=>la.dup?Math.max(1,i.structures.filter(e=>e.type==="yard"&&Or(e)).length):1;function Wi(i,e,t){const n=Ee.structures[t];return n?!n.where.includes(e.kind)&&!(n.home&&e.home)||e.trait&&(os[e.trait].no||[]).includes(t)?"Not here":n.giant&&!e.giant?"Gas giants only":n.rocky&&e.giant?"Not on a gas giant":Mi(e,t)&&!(la.dup&&tg.includes(t))?"Already built":e.structures.length>=bd(e)?"No room":i.credits[e.owner]<n.cost?"Not enough credits":null:"Unknown"}function Cr(i,e,t){if(Wi(i,e,t))return!1;const n=Ee.structures[t];i.credits[e.owner]-=n.cost;const r=n.time/fo(i,e.owner,e);return e.structures.push({type:t,level:1,left:r,total:r}),!0}const Ql=i=>Math.round((Ee.structures[i.type].cost+(i.level-1)*bo(i))*.4/10)*10;function ec(i,e,t,n=null){const r=Mi(e,t,n);return r?e.blockaded?"Under blockade":r.scrap?"Being removed":null:"Not built"}function y0(i,e,t,n=null){if(ec(i,e,t,n))return!1;const r=Mi(e,t,n);if(t==="yard"&&!e.structures.some(s=>s!==r&&s.type==="yard"&&!s.scrap))for(;e.queue.length;)wd(i,e);return r.left>0&&!r.next?(i.credits[e.owner]+=Ee.structures[t].cost,e.structures=e.structures.filter(s=>s!==r),!0):(r.next&&(delete r.next,r.left=0),r.scrap=Ee.scrapTime,t==="battery"&&(e.bhp=0),!0)}const bo=i=>Math.round(Ee.structures[i.type].cost*.8);function Qr(i,e,t){const n=Ee.structures[t.type];return Or(t)?t.level>=n.maxLevel?"Fully upgraded":i.credits[e.owner]<bo(t)?"Not enough credits":null:"Still building"}function Ko(i,e,t){return Qr(i,e,t)?!1:(i.credits[e.owner]-=bo(t),t.left=t.total=Ee.structures[t.type].time/fo(i,e.owner,e),t.next=!0,!0)}function Sa(i,e,t){const n=bn[t];return!n||n.civil?"Unknown":qi(e,"yard")?n.needs&&!Vt(i,e.owner,n.needs)?`Needs ${Yl(n.needs).name}`:Ma(i,e.owner)>=ba(i,e.owner)?"Fleet at its limit":i.credits[e.owner]<cr(i,e.owner,t)?"Not enough credits":null:"Needs a yard"}function Al(i,e,t){if(Sa(i,e,t))return!1;i.credits[e.owner]-=cr(i,e.owner,t);const n=Sd(i,e.owner,t,e);return e.queue.push({cls:t,left:n,total:n}),!0}function wd(i,e,t=e.queue.length-1){const n=e.queue[t];return n?(i.credits[e.owner]+=Math.round(cr(i,e.owner,n.cls)*.8),e.queue.splice(t,1),!0):!1}function Mo(i,e,t,n){const r=ri[t],s=i.tech[e];return r?s.project?"Already researching":s[t]>=r.tiers.length?"Complete":r.tiers[s[t]].some(o=>o.key===n)?i.credits[e]<lo[s[t]]?"Not enough credits":null:"Not yet":"Unknown"}function Td(i,e,t,n){if(Mo(i,e,t,n))return!1;const r=i.tech[e][t];return i.credits[e]-=lo[r],i.tech[e].project={line:t,key:n,left:ou[r],total:ou[r]},!0}const b0=(i,e)=>Vt(i,e,"signals")?1+i.tech[e].intel:0,wa=(i,e,t)=>i.agents.find(n=>n.owner===e&&n.body===t.id)||null,Ta=(i,e,t)=>{const n=wa(i,e,t);return n&&n.at<=i.time?n:null};function ho(i,e,t){return Vt(i,e,"signals")?t.owner===e?"Your own world":wa(i,e,t)?"Already there":i.agents.filter(n=>n.owner===e).length>=b0(i,e)?"No agents free":i.credits[e]<kn.cost?"Not enough credits":null:"Needs Signals intercept"}function Cl(i,e,t){return ho(i,e,t)?!1:(i.credits[e]-=kn.cost,i.agents.push({owner:e,body:t.id,at:i.time+kn.travel,op:"watch",cool:0}),!0)}function M0(i,e,t){const n=i.agents.length;return i.agents=i.agents.filter(r=>!(r.owner===e&&r.body===t.id)),i.agents.length<n}function Ed(i,e,t,n){const r=Ta(i,e,t);return!r||t.owner===at||n==="steal"&&!Vt(i,e,"rings")||n==="incite"&&!Vt(i,e,"fifth")||!["watch","steal","incite"].includes(n)?!1:(r.op=n,!0)}function po(i,e,t,n){const r=Ta(i,e,t);return r?Vt(i,e,"sabot")?r.cool>i.time?"Lying low":(n==="battery"?t.bhp<=0:!t.queue.length)?"Nothing to hit":i.credits[e]<kn.opCost?"Not enough credits":null:"Needs Saboteurs":"No agent in place"}function Ad(i,e,t,n){if(po(i,e,t,n))return!1;const r=Ta(i,e,t);return i.credits[e]-=kn.opCost,r.cool=i.time+120,n==="battery"?(t.bhp=0,t.bquiet=i.time+90):t.queue[0].left+=60,Kt(i,{type:"sabotage",owner:t.owner,by:e,at:t.id,what:n}),i.rand()<kn.opRisk*(Vt(i,t.owner,"counter")?2:1)&&S0(i,r,t),!0}const Pr=(i,e)=>Math.round((300+Br(e,i)*260+(e.trait?250:0)+Hn(e)*1.5)/10)*10;function Ea(i,e,t){return t.owner!==at?"Not independent":Ta(i,e,t)?i.ships.some(n=>n.at===t.id&&n.owner!==e&&Gr(n))?"Another fleet holds the orbit":i.credits[e]<Pr(i,t)?"Not enough credits":null:"No agent in place"}function Cd(i,e,t){if(Ea(i,e,t))return!1;i.credits[e]-=Pr(i,t);const n=t.bhp;return kd(i,t,e),t.bhp=n,i.agents=i.agents.filter(r=>r.body!==t.id||r.owner!==e),Kt(i,{type:"bought",owner:e,at:t.id}),!0}function S0(i,e,t){i.agents=i.agents.filter(n=>n!==e),Kt(i,{type:"agentCaught",owner:e.owner,by:t.owner,at:t.id})}function og(i,e){for(const t of i.agents.slice()){const n=i.bodies[t.body];if(!i.alive[t.owner]||n.owner===t.owner){i.agents=i.agents.filter(s=>s!==t);continue}if(t.at>i.time)continue;if(n.owner===at){t.op="watch";continue}const r=kn.caught*(t.op==="watch"?1:2)*(Vt(i,n.owner,"counter")?2:1)*(n.trait==="listening"?3:1);i.rand()<r*e&&S0(i,t,n)}}const ag=(i,e,t)=>{const n=Ta(i,e,t);return!!n&&n.op==="incite"},w0=(i,e)=>i.agents.find(t=>t.body===e.id&&t.op==="steal"&&t.at<=i.time&&t.owner!==e.owner)||null;function Rd(i,e){const t=e.reduce((r,s)=>r+s.st.size*(1+.3*Si(s)),0),n=i.st.size*(1+.3*Si(i))*(.3+.7*Math.max(0,i.hull/i.st.hull))*(es(i)||i.out.weapons>0?.5:1);return Ui(t/(t+n)-.25,.05,.85)}const Si=i=>(i.xp||0)>=40?3:(i.xp||0)>=18?2:(i.xp||0)>=6?1:0;function T0(i,e,t){const n=Si(e);e.xp=(e.xp||0)+t,Si(e)>n&&Kt(i,{type:"promoted",owner:e.owner,ship:e.id,rank:Si(e)})}function Vr(i,e,t){const n=bn[t],r=e>=0?ei[i.factions[e]]:{},s=l=>Vt(i,e,l),o=!n.civil&&n.power>0,a=t==="corvette"||t==="frigate";return{hull:Math.round(n.hull*(r.hull||1)*(o&&s("plate")?1.25:1)*(n.civil&&s("bulk")?2:1)),armour:n.armour+(o&&r.armour||0),accel:n.accel*(r.accel||1)*(s("nozzles")?1.2:1)*(s("torch")?1.25:1)*(n.civil&&s("bulk")?1.5:1),flash:s("flash")?1.4:1,cruise:s("cruise")?1.33:1,coldDark:s("coldjets"),dv:n.dv*(r.dv||1)*(s("tanks")?1.35:1),size:n.size,sig:n.sig*(r.sig||1)*(s("coldrun")?.6:1),cold:Ee.cold*n.sensor*(s("passive")?1.4:1),ident:Ee.ident*n.sensor*(s("longwatch")?1.6:1),rails:n.rails.map(l=>l*(r.rail||1)),railHit:s("guided")?1.25:1,railRange:Ee.railRange*(s("firecon")?1.25:1),pdc:n.pdc,flak:s("flak")?2:1,tubes:n.tubes,mag:Math.round(n.mag*(a&&s("wolfpack")?1.5:1)),reload:a&&s("wolfpack")?.7:1,swarm:s("swarm"),jam:s("jammers"),power:n.power,stores:n.stores||0,civil:!!n.civil}}function lg(i,e){for(const t of i.ships)t.owner===e&&(t.st=Vr(i,e,t.cls))}function E0(i,e){const t=Sf[i.factions[e]]||Sf.concord,n=t.filter(s=>!i.usedNames.includes(s)),r=n.length?n[(i.nextId*7+i.usedNames.length*3)%n.length]:`${t[i.nextId%t.length]} ${i.nextId}`;return i.usedNames.push(r),r}function qt(i,e,t,n,r={}){const s=Vr(i,e,t),o={id:i.nextId++,owner:e,cls:t,name:s.civil?"Freighter":E0(i,e),x:0,y:0,z:0,vx:0,vy:0,vz:0,tx:0,ty:0,tz:0,burn:0,lit:0,at:n?n.id:null,ph:i.nextId*2.39996%(Math.PI*2),hull:s.hull,out:{drive:0,reactor:0,weapons:0,sensors:0},dv:s.dv,torps:s.mag,stores:s.stores,order:null,grp:0,torpsFree:!0,fireFree:!0,evade:!1,cd:s.rails.map(()=>0),tcd:0,seen:Array(i.players).fill(0),kills:0,phase:"orbit",board:0,boardBy:at,st:s,...r};return n&&C0(i,o,i.time),i.ships.push(o),o}function A0(i){const e=s=>{const o=Math.sin(i.id*12.9898+s*78.233)*43758.5453;return o-Math.floor(o)},t=1+e(1)*.3,n=(e(2)-.5)*.9,r=e(3)*Math.PI*2;return{k:t,ux:Math.cos(r),uz:Math.sin(r),vx:-Math.sin(r)*Math.cos(n),vy:Math.sin(n),vz:Math.cos(r)*Math.cos(n)}}function C0(i,e,t){const n=i.bodies[e.at],{k:r,ux:s,uz:o,vx:a,vy:l,vz:u}=A0(e),c=on(i,n,t),h=uo(i,n,t),d=pr(n)*r,f=v0(n)/r**1.5,p=Math.cos(e.ph),v=Math.sin(e.ph);e.x=c.x+(p*s+v*a)*d,e.y=c.y+v*l*d,e.z=c.z+(p*o+v*u)*d,e.vx=h.x+(-v*s+p*a)*d*f,e.vy=h.y+p*l*d*f,e.vz=h.z+(-v*o+p*u)*d*f}const Dt=(i,e)=>i.ships.find(t=>t.id===e),es=i=>i.out.drive>0||i.out.reactor>0||i.dv<=0,Gr=i=>i.st.power>0&&i.out.reactor<=0,R0=(i,e,t)=>i.ships.filter(n=>n.at===e.id&&(t===void 0||n.owner===t)),js=i=>i.out.reactor>0?0:i.st.power*(.4+.6*(i.hull/i.st.hull))*(i.out.weapons>0?.3:1);function P0(i,e,t,n){e.order=t,e.grp=n,e.tau=0,e.coast=!1,e.inSoi=!1,e.term=!1,e.av=0,e.at!==null&&t&&(e.depart=as(i,i.bodies[e.at]).id,e.at=null)}function nn(i,e,t,n){const r=i.ships.filter(d=>t.includes(d.id)&&d.owner===e&&!d.st.civil);if(!r.length||n&&n.type==="orbit"&&!i.bodies[n.body]||n&&n.type==="attack"&&!Dt(i,n.ship))return!1;const s=i.nextId++,o=co[n&&n.profile||"cruise"],a=Math.min(...r.map(d=>d.st.accel*o.a*(n&&n.profile==="hard"?d.st.flash:1))),l=(d,f,p=s)=>{if(d.at!==null&&f&&i.time<(d.ready||0)){d.pending={o:f,g:p};return}d.pending=null,P0(i,d,f,p)},u=n&&n.shape==="column",c=(d,f=!1)=>{const p=Math.floor(d/2)+1,v=u?{side:0,back:(d+1)*1.4}:{side:(d%2?1:-1)*p*1.3,back:p*.9};return f&&(v.back=-v.back),v};for(const d of r){const f=i.ships.filter(g=>g.order&&g.order.type==="form"&&g.order.lead===d.id&&!r.includes(g));if(!f.length)continue;const p=f.reduce((g,m)=>m.st.accel<g.st.accel?m:g),v=p.order;p.order=d.order&&d.order.type!=="form"?{...d.order}:d.order?{...d.order}:v.then?{...v.then}:null,p.tau=0,p.coast=!1,p.term=!1;for(const g of f)g!==p&&(g.order.lead=p.id)}const h=(d,f)=>f.st.pdc-d.st.pdc||d.id-f.id;if(n&&n.type==="form"){const d=Dt(i,n.lead);if(!d||d.owner!==e)return!1;const f=i.ships.filter(p=>p.order&&p.order.type==="form"&&p.order.lead===d.id&&!r.includes(p)).length;return r.filter(p=>p!==d).sort(h).forEach((p,v)=>l(p,{type:"form",lead:d.id,profile:"hard",...c(f+v)},d.grp)),!0}if(n&&!n.loose&&r.length>1&&n.type!=="burn"){const d=r.reduce((f,p)=>p.st.accel<f.st.accel?p:f);return l(d,{...n,amax:a*.85}),r.filter(f=>f!==d).sort(h).forEach((f,p)=>l(f,{type:"form",lead:d.id,profile:"hard",then:{...n,amax:a},...c(p,!d.st.power)})),!0}for(const d of r)l(d,n?{...n,amax:n.loose?void 0:a}:null);return!0}function L0(i,e,t,n){for(const r of i.ships)!t.includes(r.id)||r.owner!==e||("torpsFree"in n&&(r.torpsFree=!!n.torpsFree),"fireFree"in n&&(r.fireFree=!!n.fireFree),"evade"in n&&(r.evade=!!n.evade));return!0}function au(i,e,t,n){let r=!1;for(const s of i.ships)!t.includes(s.id)||s.owner!==e||cu(i,s,n)&&(r=!0);return r}function Pd(i,e,t){for(const n of i.ships)!t.includes(n.id)||n.owner!==e||n.st.civil||(n.dead=!0,Kt(i,{type:"scuttled",owner:e,ship:n.id,name:n.name}));return i.ships=i.ships.filter(n=>!n.dead),!0}const as=(i,e)=>e.parent===null?e:i.bodies[e.parent];function Ld(i,e){const t=[{x:0,y:0,z:0,gm:ss,soft:zr*1.5,clear:zr*2.8,id:-1}];for(const n of i.planets){const r=on(i,n,e);t.push({x:r.x,y:r.y,z:r.z,gm:n.gm,soft:n.size*1.3,clear:n.size*1.25+.6,hollow:n.size*1.6+1,size:n.size,id:n.id})}for(const n of i.moons){const r=on(i,n,e);t.push({x:r.x,y:r.y,z:r.z,gm:0,soft:1,clear:n.size*1.3+.5,hollow:0,size:n.size,id:n.id})}return t}function cg(i){i.planets=i.bodies.filter(e=>e.kind==="planet"),i.moons=i.bodies.filter(e=>e.kind==="moon"),i.blockers=i.bodies.filter(e=>e.kind==="planet"||e.kind==="moon")}function ug(i,e,t,n,r,s){const o=Math.max(0,e);if(!s)return i/Math.max(.4,o+.5*t*Math.min(30,i/Math.max(o,.4)));let a=Math.sqrt((2*t*n*i+n*o*o)/(t+n));if(r<a&&(a=r),o>=a)return Math.max(0,i-o*o/(2*n))/Math.max(o,.05)+o/n;const l=(a*a-o*o)/(2*t),u=a*a/(2*n);return(a-o)/t+a/n+Math.max(0,i-l-u)/Math.max(a,.05)}function D0(i,e,t,n,r){e.tx=e.ty=e.tz=0;const s=e.order;if(e.out.drive>0||e.out.reactor>0||e.dv<=0){e.phase="adrift";return}if(!s){e.phase="coast";return}const o=e.st;if(s.type==="burn"){if(s.left<=0){e.order=null,e.phase="coast";return}const ae=o.accel*o.flash;e.tx=s.x*ae,e.ty=s.y*ae,e.tz=s.z*ae,e.phase="burn";return}const a=co[s.profile]||co.cruise,l=Math.min(s.amax||1,o.accel*a.a*(s.profile==="hard"?o.flash:1)),u=.7*l;let c=a.cap*(s.profile==="cruise"&&o.cruise||1),h=!0,d=0,f=-2,p=e.tau>0?e.tau:0,v,g,m=null;const _=ae=>{const ge=as(i,ae),$e=n.find(vt=>vt.id===ge.id),ft=$e?{x:$e.x,y:$e.y,z:$e.z}:on(i,ge,t),je=uo(i,ge,t);if(ge===ae){v=ft,g=je;return}const Ve=on(i,ae,t);if(!e.term&&(p<30||Math.hypot(Ve.x-e.x,Ve.y-e.y,Ve.z-e.z)<20)&&(e.term=!0),e.term){v=Ve,g=uo(i,ae,t);return}const ct=on(i,ae,t+p),Xe=on(i,ge,t+p);v={x:ft.x+ct.x-Xe.x,y:ft.y+ct.y-Xe.y,z:ft.z+ct.z-Xe.z},g=je},w=(ae,ge)=>{const $e=v.x-e.x,ft=v.z-e.z,je=Math.hypot($e,ft)||1;v={x:v.x+-ft/je*ae*ge,y:v.y,z:v.z+$e/je*ae*ge}};if(s.type==="orbit"&&s.via!=null&&!s.done){const ae=i.bodies[s.via],ge=n.find(ft=>ft.id===ae.id);if(Math.hypot(ge.x-e.x,ge.y-e.y,ge.z-e.z)<ae.size*4.5){e.inSoi=!0,e.phase="coast";return}if(e.inSoi)return s.done=!0,e.inSoi=!1,e.tau=0,e.coast=!1,e.term=!1,D0(i,e,t,n,r);_(ae),w(ae.size*1.7+.8,s.side),h=!1,f=ae.id,c===1/0&&(c=1e9)}else if(s.type==="orbit"||s.type==="strike"){const ae=i.bodies[s.body];if(!p){const ge=on(i,ae,t);p=Math.hypot(ge.x-e.x,ge.y-e.y,ge.z-e.z)/1.2+5}_(ae),f=ae.id,s.type==="orbit"?d=pr(ae):(h=!1,w(pr(ae)+2,1),c===1/0&&(c=1e9))}else if(s.type==="attack"){const ae=r(s.ship);if(!ae){e.order=null,e.phase="coast";return}if(ae.owner!==e.owner&&!ae.seen[e.owner]){s.blind=(s.blind||0)+1,s.blind>150&&(e.order=null),e.phase="coast";return}s.blind=0,v={x:ae.x,y:ae.y,z:ae.z},g={x:ae.vx,y:ae.vy,z:ae.vz},s.mode==="pass"?(h=!1,c===1/0&&(c=1e9)):(d=s.mode==="board"?1.2:s.d0||3,ae.at===null&&(m=ae))}else if(s.type==="form"){const ae=r(s.lead);if(!ae||ae.owner!==e.owner){e.order=s.then||null,e.tau=0,e.phase="coast";return}const ge=Math.hypot(ae.vx,ae.vz)||1,$e=ae.vx/ge,ft=ae.vz/ge;v={x:ae.x-ft*s.side-$e*s.back,y:ae.y,z:ae.z+$e*s.side-ft*s.back},g={x:ae.vx,y:ae.vy,z:ae.vz},ae.at===null&&(m=ae),c===1/0&&(c=1e9)}else{e.order=null;return}let x=v.x-e.x,b=v.y-e.y,S=v.z-e.z;const C=e.vx-g.x,y=e.vy-g.y,T=e.vz-g.z,R=Math.hypot(x,b,S)||1e-6,U=Math.max(0,R-d);let k=null,P=2,L=0,F=0,O=0;for(const ae of n){if(ae.id===f)continue;const ge=ae.x-e.x,$e=ae.y-e.y,ft=ae.z-e.z,je=Ui((ge*x+$e*b+ft*S)/(R*R),0,1);if(je<.02||je>=P)continue;const Ve=x*je-ge,ct=b*je-$e,Xe=S*je-ft,vt=ae.id===-1?Math.max(ae.clear,Math.sqrt(ss/(.55*l))):ae.clear;Math.hypot(Ve,ct,Xe)>=vt||(k=ae,P=je,L=vt,F=Ve,O=Xe)}if(k){const ae=-S/R,ge=x/R;(!e.av||e.avId!==k.id)&&(e.avId=k.id,e.av=F*ae+O*ge>=0?1:-1);const $e=L*1.3*e.av;x=k.x-e.x+ae*$e,b=k.y-e.y,S=k.z-e.z+ge*$e}else e.av=0;const K=Math.hypot(x,b,S)||1e-6,he=x/K,Q=b/K,oe=S/K,D=C*he+y*Q+T*oe,le=h?Math.min(c,Math.sqrt(2*u*U)):Math.min(c,D+l*4),te=he*le-C,Me=Q*le-y,_e=oe*le-T,Se=Math.hypot(te,Me,_e),Y=Math.hypot(C-he*D,y-Q*D,T-oe*D),ne=D-le;if(ne<=.02?e.coast?(le-D>.3*Math.min(le,2)+.08||Y>a.lat)&&(e.coast=!1):le-D<.04&&Y<a.lat*.3&&(e.coast=!0):e.coast=!1,e.tau=Ui(ug(U,D,l,u,c,h),.4,900),e.coast&&!(m&&m.burn)){e.phase="coast";return}const ye=Math.min(l,Se/1.2);if(Se>1e-6&&(e.tx=te/Se*ye,e.ty=Me/Se*ye,e.tz=_e/Se*ye),m&&m.burn){e.tx+=m.tx,e.ty+=m.ty,e.tz+=m.tz;const ae=Math.hypot(e.tx,e.ty,e.tz),ge=o.accel*o.flash;ae>ge&&(e.tx*=ge/ae,e.ty*=ge/ae,e.tz*=ge/ae)}e.phase=ne>.02?"brake":"burn"}function Dd(i,e,t,n,r,s){D0(i,e,t,r,s);let o=Math.hypot(e.tx,e.ty,e.tz);if(e.order&&e.order.type==="burn"&&(e.order.left-=n),o*n>e.dv){const f=e.dv/(o*n);e.tx*=f,e.ty*=f,e.tz*=f,o*=f}e.dv-=o*n,e.dv<1e-6&&(e.dv=0),e.burn=o>.004?1:0;let a=0,l=0,u=0;const c=e.order,h=c&&(c.type==="orbit"||c.type==="strike")&&(c.via==null||c.done)?as(i,i.bodies[c.body]).id:-2;for(const f of r){if(f.id===h||f.id===e.depart){f.id===e.depart&&Math.hypot(f.x-e.x,f.y-e.y,f.z-e.z)>(f.hollow||1)*2&&(e.depart=void 0);continue}const p=f.x-e.x,v=f.y-e.y,g=f.z-e.z,m=Math.hypot(p,v,g);if(f.id>=0&&m<f.hollow&&!(c&&c.via===f.id&&!c.done))continue;const _=Math.max(f.soft,m),w=f.gm/(_*_*_);a+=p*w,l+=v*w,u+=g*w}e.vx+=(e.tx+a)*n,e.vy+=(e.ty+l)*n,e.vz+=(e.tz+u)*n,e.x+=e.vx*n,e.y+=e.vy*n,e.z+=e.vz*n;for(const f of r){if(f.id<0||!f.size)continue;const p=e.x-f.x,v=e.y-f.y,g=e.z-f.z,m=Math.hypot(p,v,g);if(m<f.size*1.05){const _=f.size*1.05/(m||1);e.x=f.x+p*_,e.y=f.y+v*_,e.z=f.z+g*_}}const d=Math.hypot(e.x,e.y,e.z);if(d<zr*1.3){const f=zr*1.3/(d||1);e.x*=f,e.y*=f,e.z*=f}if(c&&c.type==="orbit"&&(c.via==null||c.done)){const f=i.bodies[c.body],p=on(i,f,t+n),v=uo(i,f,t+n),g=Math.hypot(p.x-e.x,p.y-e.y,p.z-e.z),m=pr(f),_=Math.hypot(v.x-e.vx,v.y-e.vy,v.z-e.vz);if(g<m+.7&&_<.45){e.at=f.id;{const w=A0(e),x=e.x-p.x,b=e.y-p.y,S=e.z-p.z;e.ph=Math.atan2(x*w.vx+b*w.vy+S*w.vz,x*w.ux+S*w.uz)}e.ready=i.time+Ee.turnaround,e.order=null,e.depart=void 0,e.burn=0,e.tx=e.ty=e.tz=0,e.phase="orbit",e.arrived=!0}}else if(c&&c.type==="strike"){const f=on(i,i.bodies[c.body],t+n),p=Math.hypot(f.x-e.x,f.y-e.y,f.z-e.z);c.near===void 0||p<c.near?c.near=p:p>c.near+25&&(e.order=null,e.coast=!1)}else if(c&&c.type==="attack"&&c.mode==="pass"){const f=s(c.ship);if(f){const p=Math.hypot(f.x-e.x,f.y-e.y,f.z-e.z);c.near===void 0||p<c.near?c.near=p:p>c.near+12&&(e.order=null,e.coast=!1)}}}function mo(i,e,t,{maxT:n=2400,h:r=1.5,every:s=4,coast:o=0}={}){const a={id:e.id,owner:e.owner,x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,tx:0,ty:0,tz:0,st:e.st,out:{drive:0,reactor:0},dv:1e9,order:{...t},at:null,tau:0,coast:!1,inSoi:!1,term:!1,av:0,depart:e.at!==null?as(i,i.bodies[e.at]).id:e.depart},l=f=>Dt(i,f),u=[{x:a.x,y:a.y,z:a.z}];let c=i.time,h=0,d=0;for(;c-i.time<n;){const f=Ld(i,c),p=a.dv;if(Dd(i,a,c,r,f,l),h+=p-a.dv,c+=r,++d%s===0&&u.push({x:a.x,y:a.y,z:a.z}),a.at!==null||!a.order&&(o-=r)<=0)break}return u.push({x:a.x,y:a.y,z:a.z}),{time:c-i.time,dv:h,ok:a.at!==null||t.type!=="orbit",path:u,end:{x:a.x,y:a.y,z:a.z}}}function no(i,e,t){const n=i.ships.filter(f=>e.includes(f.id));if(!n.length)return[];const r=n.reduce((f,p)=>p.st.accel<f.st.accel?p:f),s=Math.min(...n.map(f=>f.dv)),o=[],a=f=>Math.min(...n.map(p=>p.st.accel*co[f].a*(f==="hard"?p.st.flash:1)));for(const f of["hard","cruise","dark"]){const p=mo(i,r,{type:"orbit",body:t,profile:f,amax:a(f)});o.push({key:f,profile:f,time:p.time,dv:p.dv,ok:p.ok&&p.dv<=s,reach:p.ok,path:p.path})}const l=i.bodies[t],u=r,c=on(i,l,i.time+o[1].time),h=Math.hypot(c.x-u.x,c.z-u.z);let d=null;for(const f of i.planets){if(f.gm<1.5||f.id===as(i,l).id||r.at!==null&&as(i,i.bodies[r.at]).id===f.id)continue;const p=on(i,f,i.time+o[1].time*.5);if(!(Math.hypot(p.x-u.x,p.z-u.z)+Math.hypot(p.x-c.x,p.z-c.z)>h*1.9+60))for(const v of[1,-1]){const g=mo(i,r,{type:"orbit",body:t,profile:"cruise",via:f.id,side:v,amax:a("cruise")},{maxT:3e3});g.ok&&(!d||g.dv<d.dv)&&(d={key:"sling",profile:"cruise",via:f.id,side:v,time:g.time,dv:g.dv,ok:g.dv<=s,reach:!0,path:g.path})}}return d&&d.dv<o[1].dv*.93&&o.push(d),o[2].reach&&o[1].reach&&o[2].time<o[1].time&&o.splice(1,1),o}function Rl(i,e,t,n=-1,r=-1){const s=t.x-e.x,o=t.y-e.y,a=t.z-e.z,l=s*s+o*o+a*a;if(l<1e-6)return!1;const u=(c,h,d,f)=>{const p=Ui(((c-e.x)*s+(h-e.y)*o+(d-e.z)*a)/l,0,1),v=e.x+s*p-c,g=e.y+o*p-h,m=e.z+a*p-d;return v*v+g*g+m*m<f*f};if(u(0,0,0,zr))return!0;for(const c of i.blockers){if(c.id===n||c.id===r)continue;const h=i.bp[c.id];if(u(h.x,h.y,h.z,c.size))return!0}return!1}function dg(i){const e=Array.from({length:i.players},()=>[]);for(const n of i.ships)n.owner<0||n.out.sensors>0||n.out.reactor>0||e[n.owner].push({x:n.x,y:n.y,z:n.z,cold:n.st.cold,ident:n.st.ident,skip:n.at??-1});for(const n of i.bodies){if(n.owner<0)continue;const r=i.bp[n.id];e[n.owner].push({x:r.x,y:r.y,z:r.z,cold:Ee.cold*Tl(n,i),ident:Ee.ident*Tl(n,i)*(n.trait==="listening"?6:1),skip:n.id})}for(const n of i.agents){if(n.at>i.time)continue;const r=i.bp[n.body];e[n.owner].push({x:r.x,y:r.y,z:r.z,cold:Ee.cold*Ee.worldSensor,ident:Ee.ident*Ee.worldSensor,skip:n.body})}const t=Array.from({length:i.players},(n,r)=>Vt(i,r,"cipher"));for(const n of i.ships){const r=n.lit>i.time||n.burn&&!(n.st.coldDark&&n.order&&n.order.profile==="dark"),s=r;for(let o=0;o<i.players;o++){if(o===n.owner||n.beacon&&i.alive[o]){n.seen[o]=2;continue}if(!i.alive[o]){n.seen[o]=0;continue}let a=0;for(const u of e[o]){const c=Math.hypot(u.x-n.x,u.y-n.y,u.z-n.z),h=s?c<u.ident:c<u.cold*n.st.sig;if(!(!s&&!h)&&!Rl(i,u,n,u.skip,n.at??-1)){if(h&&(s||c<u.cold*n.st.sig*.6)){a=2;break}a=1}}const l=n.seen[o];a&&l===2&&(a=2),r&&t[o]&&!n.st.civil&&(a=2),a&&((n.lastSeen||(n.lastSeen={}))[o]=i.time),a&&!l&&!n.st.civil&&!n.beacon&&(n.told?.[o]===void 0||i.time-(n.gone?.[o]??i.time)>120)&&((n.told||(n.told={}))[o]=i.time,Kt(i,{type:"contact",owner:o,ship:n.id})),!a&&l?(n.gone||(n.gone={}))[o]=i.time:a&&!l&&n.gone,a&&n.gone&&l&&(n.gone[o]=void 0),n.seen[o]=a}}}function I0(i,e,t,n){const r=Math.max(1,t*.4,t-e.st.armour);if(e.hull-=r,e.lit=i.time+3,i.rand()<Ui(r/e.st.hull*1.3,0,.8)){const o=["drive","reactor","weapons","sensors"][Math.floor(i.rand()*4)];e.out[o]<=0&&Kt(i,{type:"system",owner:e.owner,ship:e.id,sys:o}),e.out[o]=e.hull<e.st.hull*.25?1e9:Ee.selfRepair}e.hull<=0&&Id(i,e,n)}function Id(i,e,t){e.dead||(e.dead=!0,Pi(i,{type:"boom",x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,size:e.st.size,owner:e.owner}),Kt(i,{type:e.st.civil?"raided":"lost",owner:e.owner,by:t,ship:e.id,name:e.name,cls:e.cls,x:e.x,y:e.y,z:e.z}),e.st.civil?(ki(i,t,"raided"),lu(i,e)):(ki(i,e.owner,"lost"),ki(i,t,"killed")))}function lu(i,e){e.src!=null&&i.bodies[e.src].hauler===e.id&&(i.bodies[e.src].hauler=0)}function cu(i,e,t){if(e.out.weapons>0||e.out.reactor>0||e.torps<=0||e.tcd>i.time)return!1;const n=Math.min(e.st.tubes,e.torps);if(!n)return!1;const r=t.ship!=null?Dt(i,t.ship):null,s=!!r&&r.st.jam;e.torps-=n,e.tcd=i.time+Ee.torp.reload*(e.st.reload||1),e.lit=i.time+4;for(let o=0;o<n;o++){const a=o/n*Math.PI*2;i.torps.push({id:i.nextId++,owner:e.owner,x:e.x,y:e.y,z:e.z,vx:e.vx+Math.cos(a)*.12,vy:e.vy+(o%2?.06:-.06),vz:e.vz+Math.sin(a)*.12,ship:t.ship??null,body:t.body??null,dv:s&&i.rand()<.3?0:Ee.torp.dv,born:i.time,swarm:e.st.swarm,from:e.id,burn:1})}return Pi(i,{type:"launch",x:e.x,y:e.y,z:e.z,n,owner:e.owner}),Kt(i,{type:"salvo",owner:e.owner,ship:e.id,n,to:t.ship!=null?Dt(i,t.ship)?.owner??null:t.body!=null?i.bodies[t.body].owner:null}),!0}function fg(i,e){const t=Ee.torp;for(const n of i.torps){let r=null,s,o,a,l,u,c,h=.6;if(n.ship!=null){if(r=Dt(i,n.ship),!r||r.dead){n.dead=!0;continue}s=r.x,o=r.y,a=r.z,l=r.vx,u=r.vy,c=r.vz}else{const T=i.bodies[n.body],R=i.bp[T.id],U=i.bv[T.id];s=R.x,o=R.y,a=R.z,l=U.x,u=U.y,c=U.z,h=T.size+.3}const d=s-n.x,f=o-n.y,p=a-n.z,v=Math.hypot(d,f,p)||1e-6,g=l-n.vx,m=u-n.vy,_=c-n.vz,w=-(d*g+f*m+p*_)/v,x=g*g+m*m+_*_,b=x>1e-9?Ui(-(d*g+f*m+p*_)/x,0,e):0,S=d+g*b,C=f+m*b,y=p+_*b;if(Math.hypot(S,C,y)<h){n.dead=!0;const T=Math.sqrt(x),R=t.dmg*Ui((T/3)**2,.25,3.5);if(Pi(i,{type:"torpHit",x:s,y:o,z:a,owner:n.owner}),r){I0(i,r,R,n.owner);const U=Dt(i,n.from);U&&U.owner===n.owner&&T0(i,U,2.5)}else U0(i,i.bodies[n.body],R,n.owner);continue}if(i.time-n.born>t.life){n.dead=!0;continue}if(n.burn=0,n.dv>0){const T=Ui(v/Math.max(.5,w),.5,40);let R=(d+g*T)/T+d/v*.6,U=(f+m*T)/T+f/v*.6,k=(p+_*T)/T+p/v*.6;const P=Math.hypot(R,U,k)||1;R*=t.accel/P,U*=t.accel/P,k*=t.accel/P,n.vx+=R*e,n.vy+=U*e,n.vz+=k*e,n.dv-=t.accel*e,n.burn=1}n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e;for(const T of i.blockers){if(T.id===n.body)continue;const R=i.bp[T.id];if(Math.hypot(R.x-n.x,R.y-n.y,R.z-n.z)<T.size){n.dead=!0;break}}Math.hypot(n.x,n.y,n.z)<zr&&(n.dead=!0)}i.torps.some(n=>n.dead)&&(i.torps=i.torps.filter(n=>!n.dead))}function U0(i,e,t,n){e.bhp<=0||(e.bhp=Math.max(0,e.bhp-t),e.bquiet=i.time+20,e.bhp<=0&&(Pi(i,{type:"boom",x:i.bp[e.id].x,y:i.bp[e.id].y,z:i.bp[e.id].z,vx:0,vy:0,vz:0,size:1.2,owner:e.owner}),Kt(i,{type:"silenced",owner:e.owner,by:n,at:e.id})))}function hg(i,e,t){return t.owner===e.owner?!1:e.owner!==at?!0:!t.st.civil&&(t.at===e.id||t.order&&t.order.body===e.id||t.hitWorld===e.id)}function Af(i,e,t,n,r,s,o,a,l,u=0){const c=n.x-e.x,h=n.y-e.y,d=n.z-e.z,f=Math.hypot(c,h,d)||1e-6,p=n.vx-t.x,v=n.vy-t.y,g=n.vz-t.z,m=(c*p+h*v+d*g)/f,_=Math.sqrt(Math.max(0,p*p+v*v+g*g-m*m))/f;let w=.75*(1-.6*f/o)*n.st.size*s*(1-.06*Si(n))/(1+_*6);n.evade&&!es(n)&&(w*=.5),l&&(w*=.7);const x=i.rand()<Ui(w,.03,.95);return Pi(i,{type:"rail",x:e.x,y:e.y,z:e.z,tx:n.x,ty:n.y,tz:n.z,hit:x,owner:a}),x&&I0(i,n,r*(u||Ui(.5+(Math.max(0,-m)/1.6)**2,.5,5)),a),x}function pg(i,e){const t=i.ships,n=i.time;for(const r of t){if(r.dead||r.st.civil||r.out.reactor>0)continue;const s=r.st,o=r.out.weapons<=0,a=r.at??-1;if(s.pdc){let d=s.pdc*(o?1:.5);for(const f of i.torps){if(d<=0)break;if(f.dead||f.owner===r.owner||Math.hypot(f.x-r.x,f.y-r.y,f.z-r.z)>Ee.pdcRange)continue;const v=Math.hypot(f.vx-r.vx,f.vy-r.vy,f.vz-r.vz),g=Math.min(d,2);d-=g,i.rand()<1-Math.exp(-g*s.flak*(1.7/(1+v/6))*(f.swarm?.5:1)*e)?(f.dead=!0,Pi(i,{type:"pdcKill",x:f.x,y:f.y,z:f.z,fx:r.x,fy:r.y,fz:r.z,owner:r.owner})):i.rand()<.5&&Pi(i,{type:"pdc",x:r.x,y:r.y,z:r.z,tx:f.x,ty:f.y,tz:f.z,owner:r.owner}),r.lit=n+2}if(d>0&&r.fireFree&&o){for(const f of t)if(!(f.dead||f.derelict||f.owner===r.owner||!f.seen[r.owner]||f.st.civil&&!(r.order&&r.order.ship===f.id&&r.order.mode==="pass")||Math.hypot(f.x-r.x,f.y-r.y,f.z-r.z)>Ee.pdcRange*.6)){f.hull-=Math.max(0,d*.6-f.st.armour*.1)*e,f.lit=n+3,f.hull<=0&&Id(i,f,r.owner),i.rand()<.3&&Pi(i,{type:"pdc",x:r.x,y:r.y,z:r.z,tx:f.x,ty:f.y,tz:f.z,owner:r.owner}),r.lit=n+2;break}}}if(!o||!r.fireFree)continue;let l=null,u=0,c=null;for(const d of t){if(d.dead||d.derelict||d.owner===r.owner||!d.seen[r.owner]||d.st.civil&&!(r.order&&r.order.type==="attack"&&r.order.ship===d.id&&r.order.mode==="pass"))continue;let f=Math.hypot(d.x-r.x,d.y-r.y,d.z-r.z);if(r.at!==null&&d.at===r.at&&(f=Math.min(f,s.railRange*.8)),f>Math.max(s.railRange,Ee.torpRange)||Rl(i,r,d,a,d.at??-1))continue;const p=(d.st.power+.3)/(f+4)*(r.order&&r.order.ship===d.id?3:1);p>u&&(u=p,l=d)}const h=r.at!==null?i.bodies[r.at]:r.order&&r.order.body!=null?i.bodies[r.order.body]:null;if(h&&h.owner!==r.owner&&h.bhp>0){const d=i.bp[h.id];Math.hypot(d.x-r.x,d.y-r.y,d.z-r.z)<s.railRange+h.size&&(c=h)}if(l){let d=Math.hypot(l.x-r.x,l.y-r.y,l.z-r.z);if(r.at!==null&&l.at===r.at&&(d=Math.min(d,s.railRange*.8)),d<s.railRange)for(let f=0;f<s.rails.length;f++)r.cd[f]>n||l.dead||(r.cd[f]=n+Ee.railCool*(.9+i.rand()*.2),r.lit=n+3,Af(i,r,{x:r.vx,y:r.vy,z:r.vz},l,s.rails[f],s.railHit*(1+.08*Si(r))*(r.out.sensors>0?.5:1),s.railRange,r.owner,r.evade)&&T0(i,r,l.st.civil?.3:1));r.torpsFree&&!l.dead&&l.st.power>0&&l.seen[r.owner]===2&&d<Ee.torpRange&&s.tubes&&cu(i,r,{ship:l.id})}else if(c){const d=i.bp[c.id],f=i.bv[c.id],p=d.x-r.x,v=d.y-r.y,g=d.z-r.z,m=Math.hypot(p,v,g)||1,_=(p*(f.x-r.vx)+v*(f.y-r.vy)+g*(f.z-r.vz))/m;for(let w=0;w<s.rails.length;w++)r.cd[w]>n||(r.cd[w]=n+Ee.railCool*(.9+i.rand()*.2),r.lit=n+3,r.hitWorld=c.id,Pi(i,{type:"rail",x:r.x,y:r.y,z:r.z,tx:d.x,ty:d.y,tz:d.z,hit:!0,owner:r.owner}),U0(i,c,s.rails[w]*Ui(1+(Math.max(0,-_)/1.6)**2,1,5),r.owner));r.torpsFree&&s.tubes&&c.bhp>60&&cu(i,r,{body:c.id})}r.evade&&r.at===null&&r.dv>0&&(l||c)&&(r.dv=Math.max(0,r.dv-s.accel*.3*e))}for(const r of i.bodies){if(r.bhp<=0){Hn(r)>0&&(r.bquiet||0)<n&&!t.some(c=>c.at===r.id&&c.owner!==r.owner&&Gr(c))&&(r.bhp=Math.min(Hn(r),r.bhp+Ee.batteryRegen*e));continue}const s=i.bp[r.id],o=i.bv[r.id];Ni(r,"battery"),(r.bquiet||0)<n&&(r.bhp=Math.min(Hn(r),r.bhp+Ee.batteryRegen*e));let a=3;for(const c of i.torps){if(a<=0)break;if(c.dead||c.owner===r.owner||r.owner===at&&c.body!==r.id||Math.hypot(c.x-s.x,c.y-s.y,c.z-s.z)>Ee.pdcRange+r.size)continue;a-=1;const h=Math.hypot(c.vx-o.x,c.vy-o.y,c.vz-o.z);i.rand()<1-Math.exp(-(1.7/(1+h/6))*(c.swarm?.5:1)*e)&&(c.dead=!0,Pi(i,{type:"pdcKill",x:c.x,y:c.y,z:c.z,fx:s.x,fy:s.y,fz:s.z,owner:r.owner}))}r.bcd||(r.bcd=[0,0,0,0]);let l=null,u=1e9;for(const c of t){if(c.dead||c.derelict||!hg(i,r,c)||c.st.civil)continue;const h=Math.hypot(c.x-s.x,c.y-s.y,c.z-s.z);h<Ee.railRange+r.size&&h<u&&!Rl(i,s,c,r.id,c.at??-1)&&(l=c,u=h)}if(l)for(let c=0;c<Kl(r);c++)r.bcd[c]>n||l.dead||(r.bcd[c]=n+Ee.railCool*(.9+i.rand()*.2),Af(i,s,o,l,x0,1,Ee.railRange+r.size,r.owner,!1,1))}t.some(r=>r.dead)&&(i.ships=t.filter(r=>!r.dead))}const Ud=i=>Ee.yield[_0(i)]*(i.owner===at?.5:1);function mg(i,e,t){if(!i.alive[e])return;i.alive[e]=!1;for(const r of i.bodies)r.owner===e&&(r.owner=at,r.queue=[],r.yt=0);i.ships=i.ships.filter(r=>r.owner!==e),i.torps=i.torps.filter(r=>r.owner!==e),Kt(i,{type:"eliminated",owner:e,by:t});const n=i.alive.map((r,s)=>r?s:-1).filter(r=>r>=0);n.length===1&&(i.over={winner:n[0],t:i.time},Kt(i,{type:"won",owner:n[0]}))}function gg(i,e){for(const t of i.bodies){for(const l of t.structures){if(l.scrap){l.scrap-=e,l.scrap<=0&&(t.owner>=0&&(i.credits[t.owner]+=Ql(l)),l.gone=!0);continue}l.left>0&&(l.left-=e,l.left<=0&&(l.left=0,l.next&&(l.level+=1,delete l.next),l.type==="battery"&&(t.bhp=Math.max(t.bhp,Hn(t)*.5)),Kt(i,{type:"built",owner:t.owner,at:t.id,what:l.type})))}t.structures.some(l=>l.gone)&&(t.structures=t.structures.filter(l=>!l.gone));let n=at,r=!1,s=!1,o=!1,a=0;for(const l of i.ships)l.at!==t.id||!Gr(l)||(l.owner===t.owner?s=!0:(o=!0,a++,n===at?n=l.owner:n!==l.owner&&(r=!0)));if(t.blockaded=o,t.owner!==at){const l=t.owner;if(t.queue.length&&qi(t,"yard")&&!o)for(const f of t.queue.slice(0,El(t))){if(f.left-=e,f.left>0)continue;t.queue.splice(t.queue.indexOf(f),1);const p=qt(i,l,f.cls,t);t.trait==="hulk"&&(p.xp=6),ki(i,l,"built"),Kt(i,{type:"launched",owner:l,ship:p.id,at:t.id})}let u=Br(t,i)*e*(o?0:1);const c=w0(i,t);if(c&&(i.credits[c.owner]+=u*kn.skim,u*=1-kn.skim),t.home)i.credits[l]+=u*i.eco[l],i.stats[l].earned+=u*i.eco[l];else{t.stock=Math.min(Ee.stockCap,t.stock+u);const f=i.homes[l];if(t.stock>=Ee.load&&!t.hauler&&!o&&f){const p=qt(i,l,"freighter",t,{cargo:t.stock*Zl(i,t),src:t.id});t.stock=0,t.hauler=p.id,p.order={type:"orbit",body:f.id,profile:"cruise",amax:p.st.accel},p.depart=as(i,t).id,p.at=null}}const h=t.home||qi(t,"refinery")||qi(t,"depot")||t.trait==="deut"?3:1,d=qi(t,"yard");if(!o)for(const f of i.ships)f.at!==t.id||f.owner!==l||vg(i,f,e,Ee.refuel*h,Ee.repair*(d?1:.33),d||t.home?1/Ee.rearm:0,d)}n!==at&&!r&&!s&&t.bhp<=0&&(!t.home||a>=_d)?(t.yo!==n&&(t.yo=n,t.yt=0),t.yt+=e*(ag(i,n,t)?2:1),t.yt>=Ud(t)&&kd(i,t,n)):t.yt>0&&(t.yt=Math.max(0,t.yt-e*.5))}}function vg(i,e,t,n,r,s,o){e.dv=Math.min(e.st.dv,e.dv+n*t),e.hull=Math.min(e.st.hull,e.hull+r*t),s&&e.torps<e.st.mag&&(e.rearm=(e.rearm||0)+s*t,e.rearm>=1&&(e.rearm-=1,e.torps+=1)),e.st.stores&&o&&(e.stores=Math.min(e.st.stores,e.stores+s*t));for(const a in e.out)e.out[a]>0&&(o||e.out[a]<1e8)&&(e.out[a]=Math.min(e.out[a],o?8:Ee.selfRepair))}function kd(i,e,t){const n=e.owner;ki(i,n,"worldsLost"),ki(i,t,"captured"),i.credits[t]+=e.stock,e.stock=0,e.owner=t,e.yt=0,e.yo=at,e.queue=[],e.bhp=0,e.bquiet=i.time+30,e.structures=e.structures.filter(r=>r.left<=0||r.next);for(const r of e.structures)r.next&&(delete r.next,r.left=0),delete r.scrap;if(Kt(i,{type:"captured",owner:t,from:n,at:e.id}),e.home&&n!==at&&i.homes[n]===e){e.home=!1,e.fallen=!0,i.homes[n]=null;const r=i.conquest?i.bodies.filter(s=>s.owner===n).sort((s,o)=>(o.kind==="planet")-(s.kind==="planet")||Br(o)-Br(s))[0]:null;r?(r.home=!0,i.homes[n]=r,Mi(r,"yard")||r.structures.push({type:"yard",level:1,left:0}),Kt(i,{type:"moved",owner:n,at:r.id})):mg(i,n,t)}}function xg(i,e){const t=Ld(i,i.time),n=s=>Dt(i,s);for(const s of i.ships){for(const o in s.out)s.out[o]>0&&s.out[o]<1e8&&(s.out[o]-=e,s.out[o]<=0&&(s.out[o]=0,Kt(i,{type:"repaired",owner:s.owner,ship:s.id,sys:o})));if(s.at!==null){s.ph+=v0(i.bodies[s.at])*e,C0(i,s,i.time+e),s.burn=0,s.tx=s.ty=s.tz=0,s.phase="orbit";continue}if(s.order&&s.order.type==="form"){const o=n(s.order.lead);!o||o.owner!==s.owner?(s.order=s.order.then||null,s.tau=0):o.at!==null&&(s.order={type:"orbit",body:o.at,profile:"cruise",amax:s.st.accel*.7},s.tau=0,s.term=!1)}if(Dd(i,s,i.time,e,t,n),s.arrived){s.arrived=!1;const o=i.bodies[s.at];s.owner<0?s.dead=!0:s.st.civil&&o.owner===s.owner?(i.credits[s.owner]+=s.cargo*i.eco[s.owner],i.stats[s.owner].earned+=s.cargo,ki(i,s.owner,"hauled"),Kt(i,{type:"freight",owner:s.owner,at:o.id,n:Math.round(s.cargo)}),lu(i,s),s.dead=!0):s.st.civil||Kt(i,{type:"arrived",owner:s.owner,ship:s.id,at:o.id})}!s.order&&!s.warned&&s.dv<s.st.dv*.2&&!s.st.civil&&(s.warned=!0,Kt(i,{type:"fuel",owner:s.owner,ship:s.id})),s.dv>s.st.dv*.4&&(s.warned=!1)}for(let s=0;s<i.ships.length;s++){const o=i.ships[s];for(let a=s+1;a<i.ships.length;a++){const l=i.ships[a];if(o.at!==null&&o.at===l.at){const u=1.6/pr(i.bodies[o.at]);let c=((l.ph-o.ph)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI;if(Math.abs(c)<u){const h=(u-Math.abs(c))*.5*Math.min(1,e*2)*(c>=0?1:-1);o.ph-=h,l.ph+=h}}else if(o.at===null&&l.at===null){const u=l.x-o.x,c=l.y-o.y,h=l.z-o.z,d=Math.hypot(u,c,h);if(d<1.2&&Math.hypot(l.vx-o.vx,l.vy-o.vy,l.vz-o.vz)<.6){const f=(1.2-d)*.5*Math.min(1,e*1.5)/(d||1),p=d>.001?u:o.id%2?1:-1,v=d>.001?h:.5;o.x-=p*f,o.y-=c*f,o.z-=v*f,l.x+=p*f,l.y+=c*f,l.z+=v*f}}}}const r=Ee.board;for(const s of i.ships){if(s.dead)continue;if(s.st.stores&&s.out.reactor<=0)for(const u of i.ships){if(u===s||u.owner!==s.owner||u.st.civil||u.st.stores||Math.hypot(u.x-s.x,u.y-s.y,u.z-s.z)>3||Math.hypot(u.vx-s.vx,u.vy-s.vy,u.vz-s.vz)>.5)continue;const c=Math.min(.6*e,s.dv-8,u.st.dv-u.dv);c>0&&(s.dv-=c,u.dv+=c),u.torps<u.st.mag&&s.stores>=1&&(u.rearm=(u.rearm||0)+e/6,u.rearm>=1&&(u.rearm-=1,u.torps+=1,s.stores-=1)),u.hull=Math.min(u.st.hull,u.hull+Ee.repair*.33*e);for(const h in u.out)u.out[h]>Ee.selfRepair&&(u.out[h]=Ee.selfRepair)}const o=s.st.civil||s.out.reactor>0||s.out.drive>0&&s.out.weapons>0,a=i.ships.filter(u=>u.owner!==s.owner&&u.owner>=0&&Gr(u)&&!u.dead&&Math.hypot(u.x-s.x,u.y-s.y,u.z-s.z)<r.range&&Math.hypot(u.vx-s.vx,u.vy-s.vy,u.vz-s.vz)<r.speed&&(o||u.order&&u.order.type==="attack"&&u.order.ship===s.id&&u.order.mode==="board"));if(!a.length||s.derelict&&!o){s.board=Math.max(0,s.board-e);continue}const l=a[0].owner;if(s.boardBy!==l&&(s.boardBy=l,s.board=0),s.board+=e,!(s.board<(s.st.civil?r.freighter:r.warship))){if(s.st.civil){i.credits[l]+=s.cargo,ki(i,l,"raided"),Kt(i,{type:"seized",owner:l,from:s.owner,n:Math.round(s.cargo),x:s.x,y:s.y,z:s.z}),lu(i,s),s.dead=!0;continue}if(!o&&i.rand()>Rd(s,a.filter(u=>u.owner===l))){s.board=0;for(const u of a)u.owner===l&&(u.hull-=u.st.hull*.12,u.hull<=0&&Id(i,u,s.owner));Kt(i,{type:"repelled",owner:l,from:s.owner,ship:s.id,name:s.name});continue}Kt(i,{type:"boarded",owner:l,from:s.owner,ship:s.id,name:s.name}),ki(i,s.owner,"lost"),s.derelict&&(s.derelict=!1,s.beacon=!1,s.xp=Math.max(s.xp||0,18),s.name=E0(i,l)),s.owner=l,s.st=Vr(i,l,s.cls),s.order=null,s.board=0;for(const u in s.out)s.out[u]>30&&(s.out[u]=30);s.seen=s.seen.map(()=>0)}}i.ships.some(s=>s.dead)&&(i.ships=i.ships.filter(s=>!s.dead))}function _g(i,e){for(let t=0;t<i.players;t++){const n=i.tech[t].project;!n||!i.alive[t]||(n.left-=e*yd(i,t),n.left<=0&&(i.tech[t][n.line]+=1,i.tech[t].picks[n.key]=!0,i.tech[t].project=null,ki(i,t,"research"),lg(i,t),Kt(i,{type:"research",owner:t,line:n.line,key:n.key})))}}function k0(i,e){i.rand||Nd(i),i.acc+=e;let t=0;for(;i.acc>=Ri&&!i.over&&t++<80;)i.acc-=Ri,yg(i);i.over&&(i.acc=0)}function Nd(i){i.rand=Oi((i.seed^2654435769)+Math.floor(i.time*5)),cg(i),i.homes=Array.from({length:i.players},(e,t)=>i.bodies.find(n=>n.home&&n.owner===t)||null),i.bp=[],i.bv=[],uu(i);for(const e of i.ships)e.st||(e.st=Vr(i,e.owner,e.cls))}function uu(i){for(const e of i.bodies)i.bp[e.id]=on(i,e,i.time),i.bv[e.id]=uo(i,e,i.time);i.placedAt=i.time}function yg(i){i.placedAt!==i.time&&uu(i),xg(i,Ri),fg(i,Ri),i.time+=Ri,uu(i),i.k=(i.k||0)+1,i.k%2===0&&dg(i),pg(i,Ri),gg(i,Ri),_g(i,Ri);for(const e of i.ships)if(e.pending&&i.time>=(e.ready||0)){const t=e.pending;e.pending=null,e.at!==null&&P0(i,e,t.o,t.g)}for(let e=0;e<i.players;e++)i.alive[e]&&(i.credits[e]=Math.max(0,i.credits[e]-Md(i,e)*Ri));if(og(i,Ri),i.k%100===0){i.series||(i.series=[]);const e=t=>Array.from({length:i.players},(n,r)=>Math.round(t(r)*10)/10);i.series.push({t:Math.round(i.time),pow:e(t=>i.ships.reduce((n,r)=>n+(r.owner===t?js(r):0),0)),worlds:e(t=>i.bodies.filter(n=>n.owner===t).length),inc:e(t=>jl(i,t).total)}),i.series.length>600&&i.series.splice(0,1)}bg(i)}function bg(i){if(i.noEvents||(i.evT===void 0&&(i.evT=260+i.rand()*120),i.time<i.evT))return;i.evT=i.time+420+i.rand()*200,i.evN=(i.evN||0)+1;const e=i.planets.map(r=>r.r),t=Math.min(...e),n=Math.max(...e);if(i.evN%2&&i.ships.filter(r=>r.derelict).length<2){const r=t+(n-t)*(.15+i.rand()*.6),s=i.rand()*Math.PI*2,o=Math.sqrt(ss/r),a=qt(i,at,i.rand()<.25?"battleship":i.rand()<.5?"escort":"frigate",null);Object.assign(a,{x:Math.cos(s)*r,y:0,z:Math.sin(s)*r,vx:-Math.sin(s)*o,vy:0,vz:Math.cos(s)*o,derelict:!0,beacon:!0,torps:0}),a.hull=a.st.hull*.5,a.dv=a.st.dv*.3,a.out.reactor=1e9,Kt(i,{type:"event",kind:"derelict",ship:a.id})}else{const r=i.bodies.filter(l=>l.owner===at&&l.parent===null);if(r.length<2)return;const s=r[Math.floor(i.rand()*r.length)],o=r.filter(l=>l!==s).sort((l,u)=>Math.abs(u.r-s.r)-Math.abs(l.r-s.r))[0],a=qt(i,at,"freighter",s,{cargo:300+Math.round(i.rand()*20)*10,src:null,beacon:!0});a.name="Convoy",a.order={type:"orbit",body:o.id,profile:"cruise",amax:a.st.accel},a.depart=s.id,a.at=null,Kt(i,{type:"event",kind:"convoy",ship:a.id})}}function N0(i,e){const t=n=>Math.round(n*100)/100;return{time:i.time,over:i.over,credits:i.credits[e],tech:i.tech[e],alive:i.alive,stats:i.stats,series:i.over?i.series:void 0,agents:i.agents.filter(n=>n.owner===e),bodies:i.bodies.map(n=>({owner:n.owner,structures:n.structures,queue:n.owner===e?n.queue:[],stock:n.owner===e?t(n.stock):0,bhp:t(n.bhp),yt:t(n.yt),yo:n.yo,home:!!n.home,blockaded:!!n.blockaded})),ships:i.ships.filter(n=>n.seen[e]).map(n=>{const r=n.owner===e,s=n.seen[e]===2;return{id:n.id,owner:n.owner,cls:s?n.cls:null,name:s?n.name:null,x:t(n.x),y:t(n.y),z:t(n.z),vx:t(n.vx),vy:t(n.vy),vz:t(n.vz),tx:n.tx,ty:n.ty,tz:n.tz,burn:n.burn,at:n.at,ph:n.ph,hull:s?t(n.hull):0,derelict:!!n.derelict,cargo:n.owner<0?n.cargo:void 0,xp:s&&n.xp||0,dest:s&&!r&&n.order&&n.order.body!=null&&Vt(i,e,"signals")?n.order.body:null,out:s?n.out:null,seen:n.seen[e],phase:n.phase,...r?{cargo:n.cargo,src:n.src,dv:t(n.dv),torps:n.torps,stores:n.stores,order:n.order,ready:n.ready,pend:n.pending?n.pending.o.body??-1:void 0,grp:n.grp,torpsFree:n.torpsFree,fireFree:n.fireFree,evade:n.evade,board:n.board,tau:n.tau}:{}}}),torps:i.torps.map(n=>({id:n.id,owner:n.owner,x:t(n.x),y:t(n.y),z:t(n.z),vx:t(n.vx),vy:t(n.vy),vz:t(n.vz),burn:n.burn})),events:i.events.filter(n=>n.t>i.time-1.5),fx:i.fx.slice()}}function F0(i,e,t){i.time=e.time,i.over=e.over,i.credits[t]=e.credits,i.tech[t]=e.tech,i.agents=e.agents||[],e.series&&(i.series=e.series),i.alive=e.alive,i.stats=e.stats,e.bodies.forEach((s,o)=>Object.assign(i.bodies[o],s));for(const s of i.bodies)s.home&&s.owner>=0&&(i.homes[s.owner]=s);const n=new Map(i.ships.map(s=>[s.id,s]));i.ships=e.ships.map(s=>{const o=n.get(s.id)||{seen:Array(i.players).fill(0),out:{drive:0,reactor:0,weapons:0,sensors:0},cd:[],kills:0};return Object.assign(o,s),s.out||(o.out={drive:0,reactor:0,weapons:0,sensors:0}),o.seen=Array(i.players).fill(0),o.seen[t]=s.seen,o.seen[o.owner]=2,o.cls=s.cls||"frigate",o.unknown=!s.cls,o.st=Vr(i,o.owner,o.cls),o}),i.torps=e.torps;const r=i.lastEvT||-1;for(const s of e.events)s.t>r&&i.events.push(s);e.events.length&&(i.lastEvT=Math.max(r,...e.events.map(s=>s.t)));for(const s of e.fx)Pi(i,s);i.homes=Array.from({length:i.players},(s,o)=>i.bodies.find(a=>a.home&&a.owner===o)||null)}const Mg=Object.freeze(Object.defineProperty({__proto__:null,AGENT:kn,BATTERY_DMG:x0,BUILDABLE:g0,CAPITAL_SHIPS:_d,CLASSES:bn,DAY:_a,DT:Ri,FACTIONS:ei,FACTION_KEYS:ya,GM_SUN:ss,NEUTRAL:at,PROFILES:co,RULES:Ee,SPREAD:m0,SUN_R:zr,TECH:ri,TECH_COST:lo,TECH_KEYS:to,TECH_TIME:ou,TRAITS:os,TUNE:la,advance:Dd,agentAt:wa,agentCap:b0,applySnapshot:F0,armed:Gr,batteryGuns:Kl,batteryMax:Hn,blocked:Rl,boardChance:Rd,buildSpeed:fo,buildStructure:Cr,buyWorld:Cd,cancelShip:wd,cantBuild:Wi,cantBuyWorld:Ea,cantDemolish:ec,cantOrderShip:Sa,cantResearch:Mo,cantSabotage:po,cantSendAgent:ho,cantUpgrade:Qr,capture:kd,createGame:hs,crippled:es,dailySeed:ca,demolish:y0,dist:ng,dryRun:mo,fleetCap:ba,fleetSize:Ma,has:qi,haulBonus:Zl,homeOf:sg,incomeBreakdown:jl,incomeOf:Br,kepler:vd,kindOf:_0,knows:Vt,note:Kt,orbitOffset:xd,orderShip:Al,parkRadius:pr,posAt:on,prepare:Nd,rankOf:Si,recallAgent:M0,research:Td,researchSpeed:yd,rng:Oi,routes:no,sabotage:Ad,salvo:au,scrapValue:Ql,scuttle:Pd,sendAgent:Cl,setAgentOp:Ed,setOrder:nn,setStance:L0,shipById:Dt,shipCost:cr,shipTime:Sd,shipsAt:R0,slipsOf:El,slotsOf:bd,snapshot:N0,spawnShip:qt,starPos:rg,statsFor:Vr,step:k0,strength:js,structure:Mi,tally:ki,techOption:Yl,upgrade:Ko,upgradeCost:bo,upkeepOf:Md,velAt:uo,warshipsOf:Jl,wells:Ld,working:Or,worldPrice:Pr,worldSight:Tl,worldsOf:Yo,yieldTime:Ud},Symbol.toStringTag,{value:"Module"})),ua={cadet:{name:"Cadet",think:9,skill:.35,eco:.6,calm:720,margin:1.6},easy:{name:"Easy",think:6,skill:.6,eco:.8,calm:400,margin:1.4},normal:{name:"Normal",think:3.5,skill:.8,eco:1,calm:180,margin:1.25},hard:{name:"Hard",think:2,skill:.95,eco:1.3,calm:0,margin:1.15,smart:!0},brutal:{name:"Brutal",think:1.2,skill:1,eco:1.7,calm:0,margin:1.1,smart:!0}},Fd=Object.keys(ua),Sg={concord:["plate","flak","tanks","torch","network","longwatch","deepmine","wareco","sabot","fifth"],boreal:["flash","torch","plate","swarm","coldrun","longwatch","bulk","wareco","rings","cipher"],holds:["wolfpack","swarm","tanks","coldjets","coldrun","jammers","deepmine","arcology","rings","cipher"]},Cf={tanks:"range",flash:"speed",coldjets:"stealth",torch:"speed",wolfpack:"small",plate:"tough",swarm:"small",flak:"tough",coldrun:"stealth",network:"worlds",jammers:"stealth",longwatch:"guns",deepmine:"worlds",bulk:"worlds",arcology:"numbers",wareco:"capital",sabot:"spy",rings:"worlds",fifth:"spy",cipher:"guns"};function wg(i,e,t,n){const r=ei[i.factions[e]],s=Math.max(1,t.length);return{speed:r.accel||1,range:1/(r.dv||1),tough:(r.hull||1)+(r.armour||0)/10,stealth:1/(r.sig||1),guns:r.rail||1,small:.6+t.filter(o=>o.cls==="corvette"||o.cls==="frigate").length/s,numbers:1/((r.cost||1)*(r.time||1))+(r.cap||0)*.2,capital:r.income||1,worlds:.7+n.length/10,spy:.9}}function Tg(i,e){const t=ei[i.factions[e]],n={drives:(t.accel||1)*(t.dv||1),weapons:(t.rail||1)*((t.hull||1)+(t.armour||0)/10),sensors:1/(t.sig||1),industry:1/((t.cost||1)*(t.time||1)),intel:.9};return Object.keys(n).sort((r,s)=>n[s]-n[r])}function Wr(i,e,t){const n=Vr(i,e,t);return(n.rails.reduce((s,o)=>s+o,0)*n.railHit+n.tubes*2.5+n.pdc*.8*n.flak)*Math.sqrt((n.hull+n.armour*12)/100)}function Eg(i,e,t="normal",n=1){const r=ua[t]||ua.normal;return i.eco[e]=r.eco,{owner:e,level:t,d:r,clock:2+e,rand:Oi(n*31+e*977),known:new Map}}const gi=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function Ag(i,e,t){!i.alive[e.owner]||i.over||(e.clock-=t,!(e.clock>0)&&(e.clock=e.d.think*(.8+e.rand()*.4),Cg(i,e)))}function Cg(i,e){const t=e.owner,n=e.d,r=()=>e.rand()<n.skill,s=i.homes[t];if(!s)return;const o=Yo(i,t),a=Jl(i,t),l=i.time;for(const D of i.ships)D.owner===t||D.st.civil||!D.seen[t]||e.known.set(D.id,{owner:D.owner,str:D.seen[t]===2?js(D):2,t:l,x:D.x,y:D.y,z:D.z,at:D.at});for(const[D,le]of e.known)(l-le.t>300||!i.ships.some(te=>te.id===D))&&e.known.delete(D);const u=D=>{let le=0;for(const te of e.known.values())(D===void 0||te.owner===D)&&(le+=te.str);return le};Rg(i,e,s,o,a,r);const c=D=>D.dv<Math.max(D.st.dv*.3,6)||D.hull<D.st.hull*.45||D.st.mag>0&&D.torps===0&&D.st.mag>=8||Object.values(D.out).some(le=>le>1e8),h=D=>{let le=s,te=1e9;for(const Me of o){if(Me.blockaded)continue;const _e=i.bp[Me.id],Se=gi(_e,D)+(qi(Me,"yard")||Me.home?0:200);Se<te&&(te=Se,le=Me)}return le},d=[],f=a.filter(D=>D.at===null&&(D.dv<=.01||D.out.drive>1e8||D.out.reactor>1e8)),p=a.filter(D=>D.st.stores&&D.out.drive<=0&&D.out.reactor<=0);for(const D of f){D.dry=D.dry||l;const le=p.find(te=>te.dv>20&&(!te.order||te.order.ship===D.id));le?le.order||nn(i,t,[le.id],{type:"attack",ship:D.id,mode:"match",d0:1.5,profile:"cruise"}):l-D.dry>180&&Pd(i,t,[D.id])}for(const D of a){if(f.includes(D))continue;if(D.dry=0,D.at!==null&&i.bodies[D.at].owner!==t||e.siege!=null&&D.order&&(D.order.body??D.order.then?.body)===e.siege?D.hull<D.st.hull*.3:c(D)){const Me=h(D);if(D.at===Me.id)continue;if(!D.order||D.order.body!==Me.id){const _e=no(i,[D.id],Me.id).filter(Y=>Y.reach).sort((Y,ne)=>Y.dv-ne.dv),Se=_e.find(Y=>Y.ok)||_e[0];Se&&nn(i,t,[D.id],{type:"orbit",body:Me.id,profile:Se.profile,via:Se.via,side:Se.side})}continue}if(D.st.stores){D.order&&D.order.type==="attack"&&!f.some(Me=>Me.id===D.order.ship)&&nn(i,t,[D.id],{type:"orbit",body:s.id,profile:"cruise"});continue}d.push(D)}if(!d.length)return;const v=i.homes.filter((D,le)=>D&&le!==t&&i.alive[le]).sort((D,le)=>gi(i.bp[D.id],i.bp[s.id])-gi(i.bp[le.id],i.bp[s.id]))[0],g=l>900&&!!v&&(o.length>=2*Yo(i,v.owner).length||Ma(i,t)>=ba(i,t)-1&&i.credits[t]>3e3),m=g||e.siege!=null?[]:d.filter(D=>D.cls==="corvette"),_=d.filter(D=>!m.includes(D)||m.length===d.length);if(r())for(const D of m){if(D.order&&D.order.type==="attack")continue;let le=null,te=320;for(const Me of i.ships){if(Me.owner===t||!Me.st.civil||!Me.seen[t])continue;const _e=gi(Me,D)*(Me.owner<0?3:1);_e<te&&(te=_e,le=Me)}if(le&&l>n.calm){nn(i,t,[D.id],{type:"attack",ship:le.id,mode:"match",d0:1.2,profile:"hard"});continue}if(!D.order&&(D.at===null||i.bodies[D.at].owner===t)){let Me=null,_e=1e9;for(const Se of i.bodies){if(Se.owner!==at||Hn(Se)>0||i.ships.some(ne=>ne.owner===t&&(ne.at===Se.id||ne.order&&ne.order.body===Se.id)))continue;const Y=gi(i.bp[Se.id],D);Y<_e&&(_e=Y,Me=Se)}if(Me){const Se=no(i,[D.id],Me.id).filter(Y=>Y.ok&&Y.dv<D.dv*.5).sort((Y,ne)=>Y.time-ne.time)[0];Se&&nn(i,t,[D.id],{type:"orbit",body:Me.id,profile:Se.profile,via:Se.via,side:Se.side})}}}let w=null,x=0;for(const[D,le]of e.known)if(!(l-le.t>12))for(const te of o){const Me=i.bp[te.id];if(gi(Me,le)<(te.home?200:110)){const _e=[...e.known.values()].filter(Se=>l-Se.t<12&&gi(Se,le)<40).reduce((Se,Y)=>Se+Y.str,0);_e>x&&(x=_e,w={id:D,k:le,b:te})}}const b=D=>D.reduce((le,te)=>le+js(te),0);if(w&&r()&&(!g||w.b.home)){const D=i.ships.find(_e=>_e.id===w.id),le=_.filter(_e=>gi(_e,w.k)<600&&!(_e.order&&_e.order.type==="attack")&&!(_e.at!==null&&i.bodies[_e.at].owner!==t)&&!(_e.order&&(_e.order.body===e.siege||_e.order.type==="form"))&&!(e.siege!=null&&_e.grp===e.siegeGrp)).sort((_e,Se)=>gi(_e,w.k)-gi(Se,w.k)),te=[];let Me=0;for(const _e of le){if(Me>=x*1.5+.5)break;te.push(_e),Me+=js(_e)}D&&te.length&&(Me>=x*.8||w.b.home)&&nn(i,t,te.map(_e=>_e.id),{type:"attack",ship:D.id,mode:"match",d0:3,profile:"hard"})}const S=new Map;for(const D of _)D.at!==null&&!D.order&&S.set(D.at,[...S.get(D.at)||[],D]);let C=null;for(const D of S.values())(!C||b(D)>b(C))&&(C=D);g&&e.siege==null&&(C=S.get(s.id)||null);const y=D=>D.order?D.order.body??D.order.then?.body??null:null;if(e.siege==null&&g&&l>(e.allInT||0)&&_.length>=4&&r()){const D=v;if(C&&i.bodies[C[0].at].owner===t&&C.length>=Math.max(4,Math.ceil(_.length*.6))){const le=[...C,...p.filter(te=>te.at===C[0].at&&!te.order)].map(te=>te.id);nn(i,t,le,{type:"orbit",body:D.id,profile:"cruise"}),e.siege=D.id,e.siegeGrp=C[0].grp,e.allIn=!0,e.allInT=l+420;return}}if(e.siege!=null){const D=i.bodies[e.siege],le=a.filter(te=>Gr(te)&&(te.at===D.id||y(te)===D.id));if(D.owner===t||le.length<(D.home?3:1)){D.owner!==t&&le.length&&nn(i,t,le.map(te=>te.id),{type:"orbit",body:s.id,profile:"hard"}),e.siege=null,e.allIn=!1,e.allInT=l+240;return}}const T=!g&&C&&i.bodies[C[0].at].owner===t?i.bodies[C[0].at]:s;for(const D of _)D.order||C&&C.includes(D)||D.at===T.id||D.at!==null&&i.bodies[D.at].owner!==t||nn(i,t,[D.id],{type:"orbit",body:T.id,profile:"cruise"});if(!C||!r())return;const R=i.bodies[C[0].at];if(R.owner!==t){const D=R0(i,R).filter(te=>te.owner!==t&&Gr(te)).reduce((te,Me)=>te+js(Me),0)+R.bhp/60,le=_.filter(te=>te.at===R.id||te.order&&te.order.body===R.id);D>b(le)*1.6&&!(e.allIn&&R.id===e.siege)&&nn(i,t,le.map(te=>te.id),{type:"orbit",body:s.id,profile:"hard"});return}const U=b(C);if(e.siege!=null&&R.id!==e.siege&&i.bodies[e.siege].owner!==t){C.length>=3&&nn(i,t,[...C,...p.filter(D=>D.at===R.id&&!D.order)].map(D=>D.id),{type:"orbit",body:e.siege,profile:"cruise"});return}const k=l>3e3?.25:l>2100?.4:l>1500?.6:l>900?.85:1,P=n.margin*k;if(U<b(_)*.7)return;const L=p.filter(D=>D.at===R.id&&!D.order);let F=null,O=0;const K=i.bp[R.id];for(const D of i.bodies){if(D.owner===t)continue;const le=D.owner!==at;if(le&&l<n.calm)continue;const te=i.bp[D.id],Me=D.bhp/60+[...e.known.values()].filter(Y=>Y.at===D.id&&l-Y.t<60).reduce((Y,ne)=>Y+ne.str,0);if(le&&U<u(D.owner)*.7*k||D.home&&le&&C.length<4)continue;if(D.home&&le){const Y=o.length>=2*Yo(i,D.owner).length&&l>1200,ne=(D.bhp/150+Kl(D)*.9+Math.max(2,u(D.owner)))*P*(Y?.7:1);if(U<ne)continue;const ye=(Y?500:50)/(1+gi(te,K)/800);ye>O&&(O=ye,F=D);continue}if(U<Me*P+.5)continue;const Se=(Br(D)+(D.kind==="planet"?1.2:D.kind==="station"?.8:.3)+(le?.4:0)+(Mi(D,"yard")?1:0))/(1+gi(te,K)/220+Me*.6);Se>O&&(O=Se,F=D)}if(!F)return;const he=[...C,...L].map(D=>D.id),Q=no(i,he,F.id).filter(D=>D.ok&&D.dv<Math.min(...C.map(le=>le.dv))*(F.home?.8:.6));if(!Q.length)return;const oe=n.smart&&Q.find(D=>D.key==="sling")||Q.find(D=>D.key===(F.home?"hard":"cruise"))||Q[0];nn(i,t,he,{type:"orbit",body:F.id,profile:oe.profile,via:oe.via,side:oe.side}),F.home&&F.owner!==at&&(e.siege=F.id,e.siegeGrp=C[0].grp)}function Rg(i,e,t,n,r,s){const o=e.owner,a=i.factions[o],l=()=>i.credits[o],u=n.filter(p=>qi(p,"yard")&&!p.blockaded),c=ba(i,o),h=Ma(i,o),d=()=>{{const p={};for(const _ of r)p[_.cls]=(p[_.cls]||0)+1;for(const _ of n)for(const w of _.queue)p[w.cls]=(p[w.cls]||0)+1;if(h>=4&&!p.tender&&e.d.skill>.7)return"tender";if(h>=5&&(p.escort||0)<h/6)return"escort";const v=h>=c-2||l()>2500?1:0;let g="frigate",m=-1e9;for(const _ of["corvette","frigate","escort","battleship"]){const w=bn[_];if(w.needs&&!Vt(i,o,w.needs))continue;const x=(p[_]||0)/Math.max(1,h),b=Wr(i,o,_),S=(v?b:b/cr(i,o,_)*300)*(x>.45?.2:1-x*.8);S>m&&(m=S,g=_)}return g}};if(h<c&&u.length){const p=d(),v=u.reduce((g,m)=>m.queue.length<g.queue.length?m:g);if(v.queue.length<2&&!Sa(i,v,p)&&(h<4||l()>cr(i,o,p)+100)){Al(i,v,p);return}}if(!s())return;if(h>=c&&l()>2500&&u.length&&!u.some(p=>p.queue.length)){const p=["battleship","frigate","escort"].filter(g=>!bn[g].needs||Vt(i,o,bn[g].needs)).sort((g,m)=>Wr(i,o,m)-Wr(i,o,g))[0],v=r.filter(g=>Gr(g)&&g.at!==null&&!g.order&&i.bodies[g.at].owner===o).sort((g,m)=>Wr(i,o,g.cls)-Wr(i,o,m.cls))[0];if(p&&v&&Wr(i,o,p)>Wr(i,o,v.cls)*1.8&&l()>cr(i,o,p)+500){Pd(i,o,[v.id]),Al(i,u[0],p);return}}if(h>=c&&l()>450)for(const p of n){if(p.blockaded)continue;if(!Wi(i,p,"habitat")){Cr(i,p,"habitat");return}const v=Mi(p,"habitat");if(v&&!Qr(i,p,v)){Ko(i,p,v);return}}for(const p of n)if(!p.blockaded)for(const v of["mine","refinery"]){if(!Wi(i,p,v)){Cr(i,p,v);return}const g=Mi(p,v);if(g&&h>=3&&!Qr(i,p,g)&&l()>bo(g)+150){Ko(i,p,g);return}}const f=i.tech[o];if(!f.project&&h>=3){const p=Tg(i,o).filter(v=>f[v]<ri[v].tiers.length).sort((v,g)=>f[v]-f[g])[0];if(p){const v=ri[p].tiers[f[p]],g=wg(i,o,r,n),m=g?[...v].sort((_,w)=>(g[Cf[w.key]]||1)-(g[Cf[_.key]]||1))[0]:v.find(_=>Sg[a].includes(_.key))||v[0];if(!Mo(i,o,p,m.key)&&l()>lo[f[p]]+120){Td(i,o,p,m.key);return}}}if(l()>500&&h>=3){for(const p of n)if(!p.blockaded){for(const v of["lab","exchange"])if(!Wi(i,p,v)&&p.structures.length<4){Cr(i,p,v);return}}}if(e.d.skill>.5){for(const p of i.agents){if(p.owner!==o||p.at>i.time)continue;const v=i.bodies[p.body];if(v.owner===at){if(!Ea(i,o,v)&&l()>Pr(i,v)+250){Cd(i,o,v);return}continue}const g=i.ships.some(_=>_.at===v.id&&_.owner===o);if(g&&v.bhp>0&&!po(i,o,v,"battery")){Ad(i,o,v,"battery");return}const m=g&&Vt(i,o,"fifth")?"incite":Vt(i,o,"rings")?"steal":"watch";p.op!==m&&Ed(i,o,v,m)}if(l()>600){const p=i.homes.find((g,m)=>g&&m!==o&&i.alive[m]&&!wa(i,o,g));if(p&&!ho(i,o,p)&&!i.agents.some(g=>g.owner===o&&i.bodies[g.body].owner!==at)){Cl(i,o,p);return}const v=i.bodies.filter(g=>g.owner===at&&!ho(i,o,g)&&l()>Pr(i,g)+400).sort((g,m)=>Pr(i,g)-Pr(i,m));if(v.length){Cl(i,o,v[0]);return}}}if(l()>700&&h>=c-1)for(const p of n){if(!p.home&&p.kind==="planet"&&!Wi(i,p,"yard")&&u.length<2){Cr(i,p,"yard");return}if(!Wi(i,p,"battery")&&(p.kind==="planet"||p.kind==="station")){Cr(i,p,"battery");return}const v=Mi(p,"yard");if(v&&!Qr(i,p,v)){Ko(i,p,v);return}if(p.home&&!Wi(i,p,"array")){Cr(i,p,"array");return}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="186",Pg=0,Rf=1,Lg=2,dl=1,Dg=2,Wo=3,ls=0,Jn=1,si=2,ur=0,Zo=1,hi=2,Pf=3,Lf=4,Ig=5,Ks=100,Ug=101,kg=102,Ng=103,Fg=104,zg=200,Og=201,Bg=202,Gg=203,z0=204,O0=205,Hg=206,Vg=207,Wg=208,$g=209,Xg=210,qg=211,Yg=212,Kg=213,Zg=214,du=0,fu=1,hu=2,da=3,pu=4,mu=5,gu=6,vu=7,B0=0,jg=1,Jg=2,Zi=0,G0=1,H0=2,V0=3,W0=4,$0=5,X0=6,q0=7,Y0=300,cs=301,go=302,hc=303,pc=304,tc=306,fa=1e3,Yi=1001,xu=1002,In=1003,Qg=1004,Pa=1005,un=1006,mc=1007,Lr=1008,Zn=1009,K0=1010,Z0=1011,ha=1012,Od=1013,Fi=1014,Di=1015,wi=1016,Bd=1017,Gd=1018,pa=1020,j0=35902,J0=35899,Q0=1021,ep=1022,bi=1023,mr=1026,Jr=1027,Hd=1028,Vd=1029,us=1030,Wd=1031,$d=1033,fl=33776,hl=33777,pl=33778,ml=33779,_u=35840,yu=35841,bu=35842,Mu=35843,Su=36196,wu=37492,Tu=37496,Eu=37488,Au=37489,Pl=37490,Cu=37491,Ru=37808,Pu=37809,Lu=37810,Du=37811,Iu=37812,Uu=37813,ku=37814,Nu=37815,Fu=37816,zu=37817,Ou=37818,Bu=37819,Gu=37820,Hu=37821,Vu=36492,Wu=36494,$u=36495,Xu=36283,qu=36284,Ll=36285,Yu=36286,ev=3200,Ku=0,tv=1,Rr="",Kn="srgb",Dl="srgb-linear",Il="linear",Ot="srgb",gc=7680,nv=519,iv=512,rv=513,sv=514,Xd=515,ov=516,av=517,qd=518,lv=519,tp=35044,Ar=35048,Df="300 es",Ki=2e3,ma=2001;function cv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ul(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uv(){const i=Ul("canvas");return i.style.display="block",i}const If={};function kl(...i){const e="THREE."+i.shift();console.log(e,...i)}function np(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function dt(...i){i=np(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Rt(...i){i=np(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function io(...i){const e=i.join(" ");e in If||(If[e]=!0,dt(...i))}function dv(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const fv={[du]:fu,[hu]:gu,[pu]:vu,[da]:mu,[fu]:du,[gu]:hu,[vu]:pu,[mu]:da};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uf=1234567;const jo=Math.PI/180,ga=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function hv(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pv(i,e,t){return i!==e?(t-i)/(e-i):0}function Jo(i,e,t){return(1-t)*i+t*e}function mv(i,e,t,n){return Jo(i,e,1-Math.exp(-t*n))}function gv(i,e=1){return e-Math.abs(Yd(i,e*2)-e)}function vv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _v(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yv(i,e){return i+Math.random()*(e-i)}function bv(i){return i*(.5-Math.random())}function Mv(i){i!==void 0&&(Uf=i);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sv(i){return i*jo}function wv(i){return i*ga}function Tv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ev(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Av(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cv(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+n)/2),c=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*c,l*h,l*d,a*u);break;case"YZY":i.set(l*d,a*c,l*h,a*u);break;case"ZXZ":i.set(l*h,l*d,a*c,a*u);break;case"XZX":i.set(a*c,l*p,l*f,a*u);break;case"YXY":i.set(l*f,a*c,l*p,a*u);break;case"ZYZ":i.set(l*p,l*f,a*c,a*u);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fn={DEG2RAD:jo,RAD2DEG:ga,generateUUID:dr,clamp:bt,euclideanModulo:Yd,mapLinear:hv,inverseLerp:pv,lerp:Jo,damp:mv,pingpong:gv,smoothstep:vv,smootherstep:xv,randInt:_v,randFloat:yv,randFloatSpread:bv,seededRandom:Mv,degToRad:Sv,radToDeg:wv,isPowerOfTwo:Tv,ceilPowerOfTwo:Ev,floorPowerOfTwo:Av,setQuaternionFromProperEuler:Cv,normalize:Bt,denormalize:Li},gf=class gf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gf.prototype.isVector2=!0;let tt=gf;class jn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],c=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(h!==v||l!==d||u!==f||c!==p){let g=l*d+u*f+c*p+h*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){const _=Math.acos(g),w=Math.sin(_);m=Math.sin(m*_)/w,a=Math.sin(a*_)/w,l=l*m+d*a,u=u*m+f*a,c=c*m+p*a,h=h*m+v*a}else{l=l*m+d*a,u=u*m+f*a,c=c*m+p*a,h=h*m+v*a;const _=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=_,u*=_,c*=_,h*=_}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],c=n[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+c*h+l*f-u*d,e[t+1]=l*p+c*d+u*h-a*f,e[t+2]=u*p+c*f+a*d-l*h,e[t+3]=c*p-a*h-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*f*p,this._y=u*f*h-d*c*p,this._z=u*c*p+d*f*h,this._w=u*c*h-d*f*p;break;case"YXZ":this._x=d*c*h+u*f*p,this._y=u*f*h-d*c*p,this._z=u*c*p-d*f*h,this._w=u*c*h+d*f*p;break;case"ZXY":this._x=d*c*h-u*f*p,this._y=u*f*h+d*c*p,this._z=u*c*p+d*f*h,this._w=u*c*h-d*f*p;break;case"ZYX":this._x=d*c*h-u*f*p,this._y=u*f*h+d*c*p,this._z=u*c*p-d*f*h,this._w=u*c*h+d*f*p;break;case"YZX":this._x=d*c*h+u*f*p,this._y=u*f*h+d*c*p,this._z=u*c*p-d*f*h,this._w=u*c*h-d*f*p;break;case"XZY":this._x=d*c*h-u*f*p,this._y=u*f*h-d*c*p,this._z=u*c*p+d*f*h,this._w=u*c*h+d*f*p;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-u)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(c-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+u)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-r*a,this._w=o*c-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vf=class vf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*n),c=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*u+o*h-a*c,this.y=n+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vf.prototype.isVector3=!0;let N=vf;const vc=new N,kf=new jn,xf=class xf{constructor(e,t,n,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],d=n[2],f=n[5],p=n[8],v=r[0],g=r[3],m=r[6],_=r[1],w=r[4],x=r[7],b=r[2],S=r[5],C=r[8];return s[0]=o*v+a*_+l*b,s[3]=o*g+a*w+l*S,s[6]=o*m+a*x+l*C,s[1]=u*v+c*_+h*b,s[4]=u*g+c*w+h*S,s[7]=u*m+c*x+h*C,s[2]=d*v+f*_+p*b,s[5]=d*g+f*w+p*S,s[8]=d*m+f*x+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,f=u*s-o*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=h*v,e[1]=(r*u-c*n)*v,e[2]=(a*n-r*o)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(n*l-u*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(e,t)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xf.prototype.isMatrix3=!0;let pt=xf;const xc=new pt,Nf=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rv(){const i={enabled:!0,workingColorSpace:Dl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ot&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?Il:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dl]:{primaries:e,whitePoint:n,transfer:Il,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:Nf,fromXYZ:Ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),i}const Et=Rv();function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ws;class Pv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Ul("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lv=0;class Kd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_c(r[o].image)):s.push(_c(r[o]))}else s=_c(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function _c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let Dv=0;const yc=new N;class Vn extends ps{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=Yi,r=Yi,s=un,o=Lr,a=bi,l=Zn,u=Vn.DEFAULT_ANISOTROPY,c=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=dr(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Y0;Vn.DEFAULT_ANISOTROPY=1;const _f=class _f{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(u+1)/2,x=(f+1)/2,b=(m+1)/2,S=(c+d)/4,C=(h+v)/4,y=(p+g)/4;return w>x&&w>b?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=S/n,s=C/n):x>b?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=S/r,s=y/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=C/s,r=y/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-v)/_,this.z=(d-c)/_,this.w=Math.acos((u+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_f.prototype.isVector4=!0;let Wt=_f;class Iv extends ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Vn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Iv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ip extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ql=class ql{constructor(e,t,n,r,s,o,a,l,u,c,h,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,c,h,d,f,p,v,g)}set(e,t,n,r,s,o,a,l,u,c,h,d,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,f=o*h,p=a*c,v=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=f+p*u,t[5]=d-v*u,t[9]=-a*l,t[2]=v-d*u,t[6]=p+f*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,f=l*h,p=u*c,v=u*h;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,f=l*h,p=u*c,v=u*h;t[0]=d-v*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,f=o*h,p=a*c,v=a*h;t[0]=l*c,t[4]=p*u-f,t[8]=d*u+v,t[1]=l*h,t[5]=v*u+d,t[9]=f*u-p,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*u,p=a*l,v=a*u;t[0]=l*c,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*u,p=a*l,v=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+v,t[5]=o*c,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*c,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kv,e,Nv)}lookAt(e,t,n){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),br.crossVectors(n,ci),br.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),br.crossVectors(n,ci)),br.normalize(),La.crossVectors(ci,br),r[0]=br.x,r[4]=La.x,r[8]=ci.x,r[1]=br.y,r[5]=La.y,r[9]=ci.y,r[2]=br.z,r[6]=La.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],w=n[7],x=n[11],b=n[15],S=r[0],C=r[4],y=r[8],T=r[12],R=r[1],U=r[5],k=r[9],P=r[13],L=r[2],F=r[6],O=r[10],K=r[14],he=r[3],Q=r[7],oe=r[11],D=r[15];return s[0]=o*S+a*R+l*L+u*he,s[4]=o*C+a*U+l*F+u*Q,s[8]=o*y+a*k+l*O+u*oe,s[12]=o*T+a*P+l*K+u*D,s[1]=c*S+h*R+d*L+f*he,s[5]=c*C+h*U+d*F+f*Q,s[9]=c*y+h*k+d*O+f*oe,s[13]=c*T+h*P+d*K+f*D,s[2]=p*S+v*R+g*L+m*he,s[6]=p*C+v*U+g*F+m*Q,s[10]=p*y+v*k+g*O+m*oe,s[14]=p*T+v*P+g*K+m*D,s[3]=_*S+w*R+x*L+b*he,s[7]=_*C+w*U+x*F+b*Q,s[11]=_*y+w*k+x*O+b*oe,s[15]=_*T+w*P+x*K+b*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*f-u*d,w=a*f-u*h,x=a*d-l*h,b=o*f-u*c,S=o*d-l*c,C=o*h-a*c;return t*(v*_-g*w+m*x)-n*(p*_-g*b+m*S)+r*(p*w-v*b+m*C)-s*(p*x-v*S+g*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],u=e[6],c=e[10];return t*(o*c-a*u)-n*(s*c-a*l)+r*(s*u-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*a-n*o,w=t*l-r*o,x=t*u-s*o,b=n*l-r*a,S=n*u-s*a,C=r*u-s*l,y=c*v-h*p,T=c*g-d*p,R=c*m-f*p,U=h*g-d*v,k=h*m-f*v,P=d*m-f*g,L=_*P-w*k+x*U+b*R-S*T+C*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=(a*P-l*k+u*U)*F,e[1]=(r*k-n*P-s*U)*F,e[2]=(v*C-g*S+m*b)*F,e[3]=(d*S-h*C-f*b)*F,e[4]=(l*R-o*P-u*T)*F,e[5]=(t*P-r*R+s*T)*F,e[6]=(g*x-p*C-m*w)*F,e[7]=(c*C-d*x+f*w)*F,e[8]=(o*k-a*R+u*y)*F,e[9]=(n*R-t*k-s*y)*F,e[10]=(p*S-v*x+m*_)*F,e[11]=(h*x-c*S-f*_)*F,e[12]=(a*T-o*U-l*y)*F,e[13]=(t*U-n*T+r*y)*F,e[14]=(v*w-p*b-g*_)*F,e[15]=(c*b-h*w+d*_)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+n,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,f=s*c,p=s*h,v=o*c,g=o*h,m=a*h,_=l*u,w=l*c,x=l*h,b=n.x,S=n.y,C=n.z;return r[0]=(1-(v+m))*b,r[1]=(f+x)*b,r[2]=(p-w)*b,r[3]=0,r[4]=(f-x)*S,r[5]=(1-(d+m))*S,r[6]=(g+_)*S,r[7]=0,r[8]=(p+w)*C,r[9]=(g-_)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ts.set(r[0],r[1],r[2]).length();const a=Ts.set(r[4],r[5],r[6]).length(),l=Ts.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ei.copy(this);const u=1/o,c=1/a,h=1/l;return Ei.elements[0]*=u,Ei.elements[1]*=u,Ei.elements[2]*=u,Ei.elements[4]*=c,Ei.elements[5]*=c,Ei.elements[6]*=c,Ei.elements[8]*=h,Ei.elements[9]*=h,Ei.elements[10]*=h,t.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Ki,l=!1){const u=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let p,v;if(l)p=s/(o-s),v=o*s/(o-s);else if(a===Ki)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ma)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ki,l=!1){const u=this.elements,c=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let p,v;if(l)p=1/(o-s),v=o/(o-s);else if(a===Ki)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===ma)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=p,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ql.prototype.isMatrix4=!0;let It=ql;const Ts=new N,Ei=new It,kv=new N(0,0,0),Nv=new N(1,1,1),br=new N,La=new N,ci=new N,zf=new It,Of=new jn;class gr{constructor(e=0,t=0,n=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fv=0;const Bf=new N,Es=new jn,nr=new It,Da=new N,Ao=new N,zv=new N,Ov=new jn,Gf=new N(1,0,0),Hf=new N(0,1,0),Vf=new N(0,0,1),Wf={type:"added"},Bv={type:"removed"},As={type:"childadded",child:null},bc={type:"childremoved",child:null};class Wn extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new N,t=new gr,n=new jn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new pt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Ao,Da,this.up):nr.lookAt(Da,Ao,this.up),this.quaternion.setFromRotationMatrix(nr),r&&(nr.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(nr),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),As.child=e,this.dispatchEvent(As),As.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bv),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Wn.DEFAULT_UP=new N(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ii extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(u,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),f=.02,p=.005;u.inputState.pinching&&d>f+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Et.workingColorSpace){if(e=Yd(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sc(o,s,e+1/3),this.g=Sc(o,s,e),this.b=Sc(o,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,t=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const n=sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Et.workingToColorSpace(zn.copy(this),e),Math.round(bt(zn.r*255,0,255))*65536+Math.round(bt(zn.g*255,0,255))*256+Math.round(bt(zn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(zn.copy(this),t);const n=zn.r,r=zn.g,s=zn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Kn){Et.workingToColorSpace(zn.copy(this),e);const t=zn.r,n=zn.g,r=zn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Ia);const n=Jo(Mr.h,Ia.h,t),r=Jo(Mr.s,Ia.s,t),s=Jo(Mr.l,Ia.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new mt;mt.NAMES=sp;class nc extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new N,ir=new N,wc=new N,rr=new N,Cs=new N,Rs=new N,$f=new N,Tc=new N,Ec=new N,Ac=new N,Cc=new Wt,Rc=new Wt,Pc=new Wt;class yi{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ai.subVectors(e,t),r.cross(Ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ai.subVectors(r,t),ir.subVectors(n,t),wc.subVectors(e,t);const o=Ai.dot(Ai),a=Ai.dot(ir),l=Ai.dot(wc),u=ir.dot(ir),c=ir.dot(wc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(u*l-a*c)*d,p=(o*c-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(o,rr.y),l.addScaledVector(a,rr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Cc.setScalar(0),Rc.setScalar(0),Pc.setScalar(0),Cc.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cc,s.x),o.addScaledVector(Rc,s.y),o.addScaledVector(Pc,s.z),o}static isFrontFacing(e,t,n,r){return Ai.subVectors(n,t),ir.subVectors(e,t),Ai.cross(ir).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ai.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Cs.subVectors(r,n),Rs.subVectors(s,n),Tc.subVectors(e,n);const l=Cs.dot(Tc),u=Rs.dot(Tc);if(l<=0&&u<=0)return t.copy(n);Ec.subVectors(e,r);const c=Cs.dot(Ec),h=Rs.dot(Ec);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Cs,o);Ac.subVectors(e,s);const f=Cs.dot(Ac),p=Rs.dot(Ac);if(p>=0&&f<=p)return t.copy(s);const v=f*u-l*p;if(v<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(n).addScaledVector(Rs,a);const g=c*p-f*h;if(g<=0&&h-c>=0&&f-p>=0)return $f.subVectors(s,r),a=(h-c)/(h-c+(f-p)),t.copy(r).addScaledVector($f,a);const m=1/(g+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ms{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),ka.subVectors(this.max,Co),Ps.subVectors(e.a,Co),Ls.subVectors(e.b,Co),Ds.subVectors(e.c,Co),Sr.subVectors(Ls,Ps),wr.subVectors(Ds,Ls),$r.subVectors(Ps,Ds);let t=[0,-Sr.z,Sr.y,0,-wr.z,wr.y,0,-$r.z,$r.y,Sr.z,0,-Sr.x,wr.z,0,-wr.x,$r.z,0,-$r.x,-Sr.y,Sr.x,0,-wr.y,wr.x,0,-$r.y,$r.x,0];return!Lc(t,Ps,Ls,Ds,ka)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,Ps,Ls,Ds,ka))?!1:(Na.crossVectors(Sr,wr),t=[Na.x,Na.y,Na.z],Lc(t,Ps,Ls,Ds,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new N,new N,new N,new N,new N,new N,new N,new N],Ci=new N,Ua=new ms,Ps=new N,Ls=new N,Ds=new N,Sr=new N,wr=new N,$r=new N,Co=new N,ka=new N,Na=new N,Xr=new N;function Lc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xr.fromArray(i,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),u=t.dot(Xr),c=n.dot(Xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Mn=new N,Fa=new tt;let Hv=0;class gn extends ps{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tp,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class op extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ap extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vv=new ms,Ro=new N,Dc=new N;class So{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ro,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Dc)),this.expandByPoint(Ro.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wv=0;const vi=new It,Ic=new Wn,Is=new N,ui=new ms,Po=new ms,Pn=new N;class jt extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?ap:op)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(ui.min,Po.min),ui.expandByPoint(Pn),Pn.addVectors(ui.max,Po.max),ui.expandByPoint(Pn)):(ui.expandByPoint(Po.min),ui.expandByPoint(Po.max))}ui.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Pn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pn.fromBufferAttribute(a,u),l&&(Is.fromBufferAttribute(e,u),Pn.add(Is)),r=Math.max(r,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new N,l[y]=new N;const u=new N,c=new N,h=new N,d=new tt,f=new tt,p=new tt,v=new N,g=new N;function m(y,T,R){u.fromBufferAttribute(n,y),c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,R),d.fromBufferAttribute(s,y),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,R),c.sub(u),h.sub(u),f.sub(d),p.sub(d);const U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(v.copy(c).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(U),g.copy(h).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(U),a[y].add(v),a[T].add(v),a[R].add(v),l[y].add(g),l[T].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,T=_.length;y<T;++y){const R=_[y],U=R.start,k=R.count;for(let P=U,L=U+k;P<L;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const w=new N,x=new N,b=new N,S=new N;function C(y){b.fromBufferAttribute(r,y),S.copy(b);const T=a[y];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(S,T);const U=x.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,U)}for(let y=0,T=_.length;y<T;++y){const R=_[y],U=R.start,k=R.count;for(let P=U,L=U+k;P<L;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),a.add(c),l.add(c),u.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let m=0;m<c;m++)d[p++]=u[f++]}return new gn(d,c,h)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,f=h.length;d<f;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $v{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tp,this.updateRanges=[],this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Xn=new N;class Nl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){kl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uc=new N,Xv=new N,qv=new pt;class $i{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Uc.subVectors(n,t).cross(Xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Uc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qv.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Yv=0;class gs extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Zo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=z0,this.blendDst=O0,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $i().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lp extends gs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const Lo=new N,ks=new N,Ns=new N,Fs=new tt,Do=new tt,cp=new It,za=new N,Io=new N,Oa=new N,Xf=new tt,kc=new tt,qf=new tt;class Kv extends Wn{constructor(e=new lp){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $v(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Nl(n,3,0,!1)),Us.setAttribute("uv",new Nl(n,2,3,!1))}this.geometry=Us,this.material=e,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Ns.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Ba(za.set(-.5,-.5,0),Ns,o,ks,r,s),Ba(Io.set(.5,-.5,0),Ns,o,ks,r,s),Ba(Oa.set(.5,.5,0),Ns,o,ks,r,s),Xf.set(0,0),kc.set(1,0),qf.set(1,1);let a=e.ray.intersectTriangle(za,Io,Oa,!1,Lo);if(a===null&&(Ba(Io.set(-.5,.5,0),Ns,o,ks,r,s),kc.set(0,1),a=e.ray.intersectTriangle(za,Oa,Io,!1,Lo),a===null))return;const l=e.ray.origin.distanceTo(Lo);l<e.near||l>e.far||t.push({distance:l,point:Lo.clone(),uv:yi.getInterpolation(Lo,za,Io,Oa,Xf,kc,qf,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(i,e,t,n,r,s){Fs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Do.x=s*Fs.x-r*Fs.y,Do.y=r*Fs.x+s*Fs.y):Do.copy(Fs),i.copy(e),i.x+=Do.x,i.y+=Do.y,i.applyMatrix4(cp)}const or=new N,Nc=new N,Ga=new N,Ha=new N;class Zd{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nc.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Ha.copy(this.origin).sub(Nc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=Ha.dot(this.direction),l=-Ha.dot(Ga),u=Ha.lengthSq(),c=Math.abs(1-o*o);let h,d,f,p;if(c>0)if(h=o*l-a,d=o*a-l,p=s*c,h>=0)if(d>=-p)if(d<=p){const v=1/c;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nc).addScaledVector(Ga,d),f}intersectSphere(e,t){if(e.radius<0)return null;or.subVectors(e.center,this.origin);const n=or.dot(this.direction),r=or.dot(or)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,r,s){const o=this.origin,a=this.direction,l=a.x,u=a.y,c=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,g=t.z-o.z,m=n.x-o.x,_=n.y-o.y,w=n.z-o.z,x=Math.abs(l),b=Math.abs(u),S=Math.abs(c);let C,y,T,R,U,k,P,L,F,O,K,he;if(x>=b&&x>=S?(T=l,k=h,F=p,he=m,l>=0?(C=u,y=c,R=d,U=f,P=v,L=g,O=_,K=w):(C=c,y=u,R=f,U=d,P=g,L=v,O=w,K=_)):b>=S?(T=u,k=d,F=v,he=_,u>=0?(C=c,y=l,R=f,U=h,P=g,L=p,O=w,K=m):(C=l,y=c,R=h,U=f,P=p,L=g,O=m,K=w)):(T=c,k=f,F=g,he=w,c>=0?(C=l,y=u,R=h,U=d,P=p,L=v,O=m,K=_):(C=u,y=l,R=d,U=h,P=v,L=p,O=_,K=m)),T===0)return null;const Q=C/T,oe=y/T,D=1/T,le=R-Q*k,te=U-oe*k,Me=P-Q*F,_e=L-oe*F,Se=O-Q*he,Y=K-oe*he,ne=Se*_e-Y*Me,ye=le*Y-te*Se,ae=Me*te-_e*le;if(r){if(ne<0||ye<0||ae<0)return null}else if((ne<0||ye<0||ae<0)&&(ne>0||ye>0||ae>0))return null;const ge=ne+ye+ae;if(ge===0)return null;const $e=D*(ne*k+ye*F+ae*he);return(ge>0?$e<0:$e>0)?null:this.at($e/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class up extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=B0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yf=new It,qr=new Zd,Va=new So,Kf=new N,Wa=new N,$a=new N,Xa=new N,Fc=new N,qa=new N,Zf=new N,Ya=new N;class Qt extends Wn{constructor(e=new jt,t=new up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Fc.fromBufferAttribute(h,e),o?qa.addScaledVector(Fc,c):qa.addScaledVector(Fc.sub(t),c))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Va.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Va,Kf)===null||qr.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Yf.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,b=w;x<b;x+=3){const S=a.getX(x),C=a.getX(x+1),y=a.getX(x+2);r=Ka(this,m,e,n,u,c,h,S,C,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=a.getX(g),w=a.getX(g+1),x=a.getX(g+2);r=Ka(this,o,e,n,u,c,h,_,w,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,b=w;x<b;x+=3){const S=x,C=x+1,y=x+2;r=Ka(this,m,e,n,u,c,h,S,C,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,w=g+1,x=g+2;r=Ka(this,o,e,n,u,c,h,_,w,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Zv(i,e,t,n,r,s,o,a){let l;if(e.side===Jn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ls,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ya);return u<t.near||u>t.far?null:{distance:u,point:Ya.clone(),object:i}}function Ka(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,Wa),i.getVertexPosition(l,$a),i.getVertexPosition(u,Xa);const c=Zv(i,e,t,n,Wa,$a,Xa,Zf);if(c){const h=new N;yi.getBarycoord(Zf,Wa,$a,Xa,h),r&&(c.uv=yi.getInterpolatedAttribute(r,a,l,u,h,new tt)),s&&(c.uv1=yi.getInterpolatedAttribute(s,a,l,u,h,new tt)),o&&(c.normal=yi.getInterpolatedAttribute(o,a,l,u,h,new N),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new N,materialIndex:0};yi.getNormal(Wa,$a,Xa,d.normal),c.face=d,c.barycoord=h}return c}class ic extends Vn{constructor(e=null,t=1,n=1,r,s,o,a,l,u=In,c=In,h,d){super(null,o,a,l,u,c,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo extends gn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zs=new It,jf=new It,Za=[],Jf=new ms,jv=new It,Uo=new Qt,ko=new So;class Fl extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,jv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ms),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Jf.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(Jf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),ko.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zs),jf.multiplyMatrices(n,zs),Uo.matrixWorld=jf,Uo.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){const l=Za[o];l.instanceId=s,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ic(new Float32Array(r*this.count),r,this.count,Hd,Di));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yr=new So,Jv=new tt(.5,.5),ja=new N;class jd{constructor(e=new $i,t=new $i,n=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],_=s[12],w=s[13],x=s[14],b=s[15];if(r[0].setComponents(u-o,f-c,m-p,b-_).normalize(),r[1].setComponents(u+o,f+c,m+p,b+_).normalize(),r[2].setComponents(u+a,f+h,m+v,b+w).normalize(),r[3].setComponents(u-a,f-h,m-v,b-w).normalize(),n)r[4].setComponents(l,d,g,x).normalize(),r[5].setComponents(u-l,f-d,m-g,b-x).normalize();else if(r[4].setComponents(u-l,f-d,m-g,b-x).normalize(),t===Ki)r[5].setComponents(u+l,f+d,m+g,b+x).normalize();else if(t===ma)r[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const t=Jv.distanceTo(e.center);return Yr.radius=.7071067811865476+t,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qv extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qf=new It,Zu=new Zd,Ja=new So,Qa=new N;class Jd extends Wn{constructor(e=new jt,t=new Qv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Qf.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(Qf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,v=f;p<v;p++){const g=u.getX(p);Qa.fromBufferAttribute(h,g),eh(Qa,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,v=f;p<v;p++)Qa.fromBufferAttribute(h,p),eh(Qa,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eh(i,e,t,n,r,s,o){const a=Zu.distanceSqToPoint(i);if(a<t){const l=new N;Zu.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dp extends Vn{constructor(e=[],t=cs,n,r,s,o,a,l,u,c){super(e,t,n,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fp extends Vn{constructor(e,t,n,r,s,o,a,l,u){super(e,t,n,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xo extends Vn{constructor(e,t,n=Fi,r,s,o,a=In,l=In,u,c=mr,h=1){if(c!==mr&&c!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ex extends xo{constructor(e,t=Fi,n=cs,r,s,o=In,a=In,l,u=mr){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,r,s,o,a,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hp extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class On extends jt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2));function p(v,g,m,_,w,x,b,S,C,y,T){const R=x/C,U=b/y,k=x/2,P=b/2,L=S/2,F=C+1,O=y+1;let K=0,he=0;const Q=new N;for(let oe=0;oe<O;oe++){const D=oe*U-P;for(let le=0;le<F;le++){const te=le*R-k;Q[v]=te*_,Q[g]=D*w,Q[m]=L,u.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[m]=S>0?1:-1,c.push(Q.x,Q.y,Q.z),h.push(le/C),h.push(1-oe/y),K+=1}}for(let oe=0;oe<y;oe++)for(let D=0;D<C;D++){const le=d+D+F*oe,te=d+D+F*(oe+1),Me=d+(D+1)+F*(oe+1),_e=d+(D+1)+F*oe;l.push(le,te,_e),l.push(te,Me,_e),he+=6}a.addGroup(f,he,T),f+=he,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zl extends jt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],c=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=n*2+s,v=r+1,g=new N,m=new N;for(let _=0;_<=p;_++){let w=0,x=0,b=0,S=0;if(_<=n){const T=_/n,R=T*Math.PI/2;x=-c-e*Math.cos(R),b=e*Math.sin(R),S=-e*Math.cos(R),w=T*h}else if(_<=n+s){const T=(_-n)/s;x=-c+T*t,b=e,S=0,w=h+T*d}else{const T=(_-n-s)/n,R=T*Math.PI/2;x=c+e*Math.sin(R),b=e*Math.cos(R),S=e*Math.sin(R),w=h+d+T*h}const C=Math.max(0,Math.min(1,w/f));let y=0;_===0?y=.5/r:_===p&&(y=-.5/r);for(let T=0;T<=r;T++){const R=T/r,U=R*Math.PI*2,k=Math.sin(U),P=Math.cos(U);m.x=-b*P,m.y=x,m.z=b*k,a.push(m.x,m.y,m.z),g.set(-b*P,S,b*k),g.normalize(),l.push(g.x,g.y,g.z),u.push(R+y,C)}if(_>0){const T=(_-1)*v;for(let R=0;R<r;R++){const U=T+R,k=T+R+1,P=_*v+R,L=_*v+R+1;o.push(U,k,P),o.push(k,L,P)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Yn extends jt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;_(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function _(){const x=new N,b=new N;let S=0;const C=(t-e)/n;for(let y=0;y<=s;y++){const T=[],R=y/s,U=R*(t-e)+e;for(let k=0;k<=r;k++){const P=k/r,L=P*l+a,F=Math.sin(L),O=Math.cos(L);b.x=U*F,b.y=-R*n+g,b.z=U*O,h.push(b.x,b.y,b.z),x.set(F,C,O).normalize(),d.push(x.x,x.y,x.z),f.push(P,1-R),T.push(p++)}v.push(T)}for(let y=0;y<r;y++)for(let T=0;T<s;T++){const R=v[T][y],U=v[T+1][y],k=v[T+1][y+1],P=v[T][y+1];(e>0||T!==0)&&(c.push(R,U,P),S+=3),(t>0||T!==s-1)&&(c.push(U,k,P),S+=3)}u.addGroup(m,S,0),m+=S}function w(x){const b=p,S=new tt,C=new N;let y=0;const T=x===!0?e:t,R=x===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;const U=p;for(let k=0;k<=r;k++){const L=k/r*l+a,F=Math.cos(L),O=Math.sin(L);C.x=T*O,C.y=g*R,C.z=T*F,h.push(C.x,C.y,C.z),d.push(0,R,0),S.x=F*.5+.5,S.y=O*.5*R+.5,f.push(S.x,S.y),p++}for(let k=0;k<r;k++){const P=b+k,L=U+k;x===!0?c.push(L,L+1,P):c.push(L+1,L,P),y+=3}u.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qd extends jt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),u(n),c(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const w=new N,x=new N,b=new N;for(let S=0;S<t.length;S+=3)f(t[S+0],w),f(t[S+1],x),f(t[S+2],b),l(w,x,b,_)}function l(_,w,x,b){const S=b+1,C=[];for(let y=0;y<=S;y++){C[y]=[];const T=_.clone().lerp(x,y/S),R=w.clone().lerp(x,y/S),U=S-y;for(let k=0;k<=U;k++)k===0&&y===S?C[y][k]=T:C[y][k]=T.clone().lerp(R,k/U)}for(let y=0;y<S;y++)for(let T=0;T<2*(S-y)-1;T++){const R=Math.floor(T/2);T%2===0?(d(C[y][R+1]),d(C[y+1][R]),d(C[y][R])):(d(C[y][R+1]),d(C[y+1][R+1]),d(C[y+1][R]))}}function u(_){const w=new N;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(_),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function c(){const _=new N;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];const x=g(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;o.push(x,1-b)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){const w=o[_+0],x=o[_+2],b=o[_+4],S=Math.max(w,x,b),C=Math.min(w,x,b);S>.9&&C<.1&&(w<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,w){const x=_*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function p(){const _=new N,w=new N,x=new N,b=new N,S=new tt,C=new tt,y=new tt;for(let T=0,R=0;T<s.length;T+=9,R+=6){_.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),S.set(o[R+0],o[R+1]),C.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),b.copy(_).add(w).add(x).divideScalar(3);const U=g(b);v(S,R+0,_,U),v(C,R+2,w,U),v(y,R+4,x,U)}}function v(_,w,x,b){b<0&&_.x===1&&(o[w]=_.x-1),x.x===0&&x.z===0&&(o[w]=b/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.vertices,e.indices,e.radius,e.detail)}}class ef extends Qd{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ef(e.radius,e.detail)}}class Js extends jt{constructor(e=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=bt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],u=[],c=1/t,h=new N,d=new tt,f=new N,p=new N,v=new N;let g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){const w=n+_*c*r,x=Math.sin(w),b=Math.cos(w);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*x,h.y=e[S].y,h.z=e[S].x*b,o.push(h.x,h.y,h.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);const C=l[3*S+0]*x,y=l[3*S+1],T=l[3*S+0]*b;u.push(C,y,T)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){const x=w+_*e.length,b=x,S=x+e.length,C=x+e.length+1,y=x+1;s.push(b,S,y),s.push(C,y,S)}this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.points,e.segments,e.phiStart,e.phiLength)}}class Aa extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<c;m++){const _=m*d-o;for(let w=0;w<u;w++){const x=w*h-s;p.push(x,-_,0),v.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const w=_+u*m,x=_+u*(m+1),b=_+1+u*(m+1),S=_+1+u*m;f.push(w,x,S),f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class rc extends jt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let h=e;const d=(t-e)/r,f=new N,p=new tt;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){const m=s+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,c.push(p.x,p.y)}h+=d}for(let v=0;v<r;v++){const g=v*(n+1);for(let m=0;m<n;m++){const _=m+g,w=_,x=_+n+1,b=_+n+2,S=_+1;a.push(w,x,S),a.push(x,b,S)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hr extends jt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new N,d=new N,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const _=[],w=m/n,x=o+w*a,b=e*Math.cos(x),S=Math.sqrt(e*e-b*b);let C=0;m===0&&o===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){const T=y/t,R=r+T*s;h.x=-S*Math.cos(R),h.y=b,h.z=S*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+C,1-w),_.push(u++)}c.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const w=c[m][_+1],x=c[m][_],b=c[m+1][_],S=c[m+1][_+1];(m!==0||o>0)&&f.push(w,x,S),(m!==n-1||l<Math.PI)&&f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tf extends jt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);const l=[],u=[],c=[],h=[],d=new N,f=new N,p=new N;for(let v=0;v<=n;v++){const g=o+v/n*a;for(let m=0;m<=r;m++){const _=m/r*s;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),u.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),c.push(p.x,p.y,p.z),h.push(m/r),h.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=r;g++){const m=(r+1)*v+g-1,_=(r+1)*(v-1)+g-1,w=(r+1)*(v-1)+g,x=(r+1)*v+g;l.push(m,_,x),l.push(_,w,x)}this.setIndex(l),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function _o(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(th(r))r.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(th(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function qn(i){const e={};for(let t=0;t<i.length;t++){const n=_o(i[t]);for(const r in n)e[r]=n[r]}return e}function th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const nx={clone:_o,merge:qn};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new mt().setHex(r.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new It().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sx extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mp extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ox extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gp extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const zc=new It,nh=new N,ih=new N;class lx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===ma||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const el=new N,tl=new jn,Hi=new N;class sc extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(el,tl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(el,tl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new N,rh=new tt,sh=new tt;class di extends sc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,rh,sh),t.subVectors(sh,rh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class cx extends lx{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class ux extends gp{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new cx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class vp extends sc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dx extends gp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xp extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Os=-90,Bs=1;class _p extends Wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new di(Os,Bs,e,t);r.layers=this.layers,this.add(r);const s=new di(Os,Bs,e,t);s.layers=this.layers,this.add(s);const o=new di(Os,Bs,e,t);o.layers=this.layers,this.add(o);const a=new di(Os,Bs,e,t);a.layers=this.layers,this.add(a);const l=new di(Os,Bs,e,t);l.layers=this.layers,this.add(l);const u=new di(Os,Bs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class fx extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hx{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yf=class yf{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};yf.prototype.isMatrix2=!0;let oh=yf;function ah(i,e,t,n){const r=px(n);switch(t){case Q0:return i*e;case Hd:return i*e/r.components*r.byteLength;case Vd:return i*e/r.components*r.byteLength;case us:return i*e*2/r.components*r.byteLength;case Wd:return i*e*2/r.components*r.byteLength;case ep:return i*e*3/r.components*r.byteLength;case bi:return i*e*4/r.components*r.byteLength;case $d:return i*e*4/r.components*r.byteLength;case fl:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yu:case Mu:return Math.max(i,16)*Math.max(e,8)/4;case _u:case bu:return Math.max(i,8)*Math.max(e,8)/2;case Su:case wu:case Eu:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Pl:case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vu:case Wu:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xu:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ll:case Yu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function px(i){switch(i){case Zn:case K0:return{byteLength:1,components:1};case ha:case Z0:case wi:return{byteLength:2,components:1};case Bd:case Gd:return{byteLength:2,components:4};case Fi:case Od:case Di:return{byteLength:4,components:1};case j0:case J0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yp(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function mx(i){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,c),a.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,u){const c=l.array,h=l.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,c);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const v=h[f];i.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wx=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#endif`,p_=`uniform sampler2D dfgLUT;
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
}`,m_=`
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
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
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ty=`float getShadowMask() {
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
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vy=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
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
}`,Sy=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`uniform float scale;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#define LAMBERT
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
}`,Iy=`#define LAMBERT
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
}`,Uy=`#define MATCAP
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
}`,ky=`#define MATCAP
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
}`,Ny=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,zy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,Gy=`#define STANDARD
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
}`,Hy=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Wy=`uniform float size;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:xx,alphamap_pars_fragment:_x,alphatest_fragment:yx,alphatest_pars_fragment:bx,aomap_fragment:Mx,aomap_pars_fragment:Sx,batching_pars_vertex:wx,batching_vertex:Tx,begin_vertex:Ex,beginnormal_vertex:Ax,bsdfs:Cx,iridescence_fragment:Rx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Ux,color_fragment:kx,color_pars_fragment:Nx,color_pars_vertex:Fx,color_vertex:zx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Wx,emissivemap_pars_fragment:$x,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Zx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:l_,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:r_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:d_,lights_phong_pars_fragment:f_,lights_physical_fragment:h_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:v_,lightprobes_pars_fragment:x_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:M_,map_fragment:S_,map_pars_fragment:w_,map_particle_fragment:T_,map_particle_pars_fragment:E_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:C_,morphinstance_vertex:R_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:D_,morphtarget_vertex:I_,normal_fragment_begin:U_,normal_fragment_maps:k_,normal_pars_fragment:N_,normal_pars_vertex:F_,normal_vertex:z_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:V_,opaque_fragment:W_,packing:$_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:K_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Q_,shadowmap_vertex:ey,shadowmask_pars_fragment:ty,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:ry,skinnormal_vertex:sy,specularmap_fragment:oy,specularmap_pars_fragment:ay,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:uy,transmission_pars_fragment:dy,uv_pars_fragment:fy,uv_pars_vertex:hy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:vy,backgroundCube_vert:xy,backgroundCube_frag:_y,cube_vert:yy,cube_frag:by,depth_vert:My,depth_frag:Sy,distance_vert:wy,distance_frag:Ty,equirect_vert:Ey,equirect_frag:Ay,linedashed_vert:Cy,linedashed_frag:Ry,meshbasic_vert:Py,meshbasic_frag:Ly,meshlambert_vert:Dy,meshlambert_frag:Iy,meshmatcap_vert:Uy,meshmatcap_frag:ky,meshnormal_vert:Ny,meshnormal_frag:Fy,meshphong_vert:zy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:Gy,meshtoon_vert:Hy,meshtoon_frag:Vy,points_vert:Wy,points_frag:$y,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:Ky},ze={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Xi={basic:{uniforms:qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:qn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:qn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:qn([ze.points,ze.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:qn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:qn([ze.common,ze.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:qn([ze.sprite,ze.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:qn([ze.common,ze.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:qn([ze.lights,ze.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Xi.physical={uniforms:qn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const nl={r:0,b:0,g:0},Zy=new It,bp=new pt;bp.set(-1,0,0,0,1,0,0,0,1);function jy(i,e,t,n,r,s){const o=new mt(0);let a=r===!0?0:1,l,u,c=null,h=0,d=null;function f(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){const x=_.backgroundBlurriness>0;w=e.get(w,x)}return w}function p(_){let w=!1;const x=f(_);x===null?g(o,a):x&&x.isColor&&(g(x,1),w=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,w){const x=f(w);x&&(x.isCubeTexture||x.mapping===tc)?(u===void 0&&(u=new Qt(new On(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:_o(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(bp),u.material.toneMapped=Et.getTransfer(x.colorSpace)!==Ot,(c!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,c=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Qt(new Aa(2,2),new zt({name:"BackgroundMaterial",uniforms:_o(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Et.getTransfer(x.colorSpace)!==Ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,c=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,w){_.getRGB(nl,pp(i)),t.buffers.color.setClear(nl.r,nl.g,nl.b,w,s)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:v,dispose:m}}function Jy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(U,k,P,L,F){let O=!1;const K=h(U,L,P,k);s!==K&&(s=K,u(s.object)),O=f(U,L,P,F),O&&p(U,L,P,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(U,k,P,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function u(U){return i.bindVertexArray(U)}function c(U){return i.deleteVertexArray(U)}function h(U,k,P,L){const F=L.wireframe===!0;let O=n[k.id];O===void 0&&(O={},n[k.id]=O);const K=U.isInstancedMesh===!0?U.id:0;let he=O[K];he===void 0&&(he={},O[K]=he);let Q=he[P.id];Q===void 0&&(Q={},he[P.id]=Q);let oe=Q[F];return oe===void 0&&(oe=d(l()),Q[F]=oe),oe}function d(U){const k=[],P=[],L=[];for(let F=0;F<t;F++)k[F]=0,P[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:P,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,k,P,L){const F=s.attributes,O=k.attributes;let K=0;const he=P.getAttributes();for(const Q in he)if(he[Q].location>=0){const D=F[Q];let le=O[Q];if(le===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),D===void 0||D.attribute!==le||le&&D.data!==le.data)return!0;K++}return s.attributesNum!==K||s.index!==L}function p(U,k,P,L){const F={},O=k.attributes;let K=0;const he=P.getAttributes();for(const Q in he)if(he[Q].location>=0){let D=O[Q];D===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(D=U.instanceColor));const le={};le.attribute=D,D&&D.data&&(le.data=D.data),F[Q]=le,K++}s.attributes=F,s.attributesNum=K,s.index=L}function v(){const U=s.newAttributes;for(let k=0,P=U.length;k<P;k++)U[k]=0}function g(U){m(U,0)}function m(U,k){const P=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;P[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),F[U]!==k&&(i.vertexAttribDivisor(U,k),F[U]=k)}function _(){const U=s.newAttributes,k=s.enabledAttributes;for(let P=0,L=k.length;P<L;P++)k[P]!==U[P]&&(i.disableVertexAttribArray(P),k[P]=0)}function w(U,k,P,L,F,O,K){K===!0?i.vertexAttribIPointer(U,k,P,F,O):i.vertexAttribPointer(U,k,P,L,F,O)}function x(U,k,P,L){v();const F=L.attributes,O=P.getAttributes(),K=k.defaultAttributeValues;for(const he in O){const Q=O[he];if(Q.location>=0){let oe=F[he];if(oe===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),oe!==void 0){const D=oe.normalized,le=oe.itemSize,te=e.get(oe);if(te===void 0)continue;const Me=te.buffer,_e=te.type,Se=te.bytesPerElement,Y=_e===i.INT||_e===i.UNSIGNED_INT||oe.gpuType===Od;if(oe.isInterleavedBufferAttribute){const ne=oe.data,ye=ne.stride,ae=oe.offset;if(ne.isInstancedInterleavedBuffer){for(let ge=0;ge<Q.locationSize;ge++)m(Q.location+ge,ne.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<Q.locationSize;ge++)g(Q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ge=0;ge<Q.locationSize;ge++)w(Q.location+ge,le/Q.locationSize,_e,D,ye*Se,(ae+le/Q.locationSize*ge)*Se,Y)}else{if(oe.isInstancedBufferAttribute){for(let ne=0;ne<Q.locationSize;ne++)m(Q.location+ne,oe.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ne=0;ne<Q.locationSize;ne++)g(Q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ne=0;ne<Q.locationSize;ne++)w(Q.location+ne,le/Q.locationSize,_e,D,le*Se,le/Q.locationSize*ne*Se,Y)}}else if(K!==void 0){const D=K[he];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(Q.location,D);break;case 3:i.vertexAttrib3fv(Q.location,D);break;case 4:i.vertexAttrib4fv(Q.location,D);break;default:i.vertexAttrib1fv(Q.location,D)}}}}_()}function b(){T();for(const U in n){const k=n[U];for(const P in k){const L=k[P];for(const F in L){const O=L[F];for(const K in O)c(O[K].object),delete O[K];delete L[F]}}delete n[U]}}function S(U){if(n[U.id]===void 0)return;const k=n[U.id];for(const P in k){const L=k[P];for(const F in L){const O=L[F];for(const K in O)c(O[K].object),delete O[K];delete L[F]}}delete n[U.id]}function C(U){for(const k in n){const P=n[k];for(const L in P){const F=P[L];if(F[U.id]===void 0)continue;const O=F[U.id];for(const K in O)c(O[K].object),delete O[K];delete F[U.id]}}}function y(U){for(const k in n){const P=n[k],L=U.isInstancedMesh===!0?U.id:0,F=P[L];if(F!==void 0){for(const O in F){const K=F[O];for(const he in K)c(K[he].object),delete K[he];delete F[O]}delete P[L],Object.keys(P).length===0&&delete n[k]}}}function T(){R(),o=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Qy(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,c){c!==0&&(i.drawArraysInstanced(n,l,u,c),t.update(u,n,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,c);let d=0;for(let f=0;f<c;f++)d+=u[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function e1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==bi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zn&&C!==Di&&!y&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(dt("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:x,maxSamples:b,samples:S}}function t1(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new $i,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?c(null):u();else{const _=s?0:n,w=_*4;let x=m.clippingState||null;l.value=x,x=c(p,d,w,f);for(let b=0;b!==w;++b)x[b]=t[b];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,d,f,p){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,x=f;w!==v;++w,x+=4)o.copy(h[w]).applyMatrix4(_,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Qs=4,n1=6,i1=20,r1=256,No=new vp,lh=new mt;let Oc=null,Bc=0,Gc=0,Hc=!1;const s1=new N,Kr=new N;class ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=s1}=s;Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Bc,Gc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:wi,format:bi,colorSpace:Dl,depthBuffer:!1},r=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o1(s)),this._blurMaterial=l1(s,e,t),this._ggxMaterial=a1(s,e,t)}return r}_compileMaterial(e){const t=new Qt(new jt,e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,r,s){const l=new di(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lh),h.toneMapping=Zi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new On,new up({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(lh),m=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,u[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[w],s.y,s.z)):x===1?(l.up.set(0,0,u[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[w],s.z)):(l.up.set(0,u[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[w]));const b=this._cubeSize;Gs(r,x*b,w>2?b:0,b,b),h.setRenderTarget(r),m&&h.render(v,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===cs||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,No)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,u=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),d=u*1.25,f=h*d,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Qs?n-p+Qs:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Gs(s,g,m,3*v,2*v),r.setRenderTarget(s),r.render(a,No),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Gs(e,g,m,3*v,2*v),r.setRenderTarget(e),r.render(a,No)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;const c=this._sizeLods[r],h=3*c*(r>this._lodMax-Qs?r-this._lodMax+Qs:0),d=4*(this._cubeSize-c);Gs(t,h,d,3*c,2*c),o.setRenderTarget(t),o.render(l,No)}}function o1(i){const e=[],t=[];let n=i;const r=i-Qs+1+n1;for(let s=0;s<r;s++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),l=-a,u=1+a,c=[l,l,u,l,u,u,l,l,u,u,l,u],h=6,d=6,f=3,p=new Float32Array(f*d*h),v=new Float32Array(f*d*h);for(let m=0;m<h;m++){const _=m%3*2/3-1,w=m>2?0:-1,x=[_,w,0,_+2/3,w,0,_+2/3,w+1,0,_,w,0,_+2/3,w+1,0,_,w+1,0];p.set(x,f*d*m);for(let b=0;b<d;b++){const S=c[b*2]*2-1,C=c[b*2+1]*2-1;m===0?Kr.set(1,C,S):m===1?Kr.set(-S,1,-C):m===2?Kr.set(-S,C,1):m===3?Kr.set(-1,C,-S):m===4?Kr.set(-S,-1,C):Kr.set(S,C,-1),Kr.toArray(v,(m*d+b)*f)}}const g=new jt;g.setAttribute("position",new gn(p,f)),g.setAttribute("outputDirection",new gn(v,f)),t.push(new Qt(g,null)),n>Qs&&n--}return{lodMeshes:t,sizeLods:e}}function ch(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function a1(i,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function l1(i,e,t){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:i1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function uh(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function dh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class nf extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new On(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:ur});s.uniforms.tEquirect.value=t;const o=new Qt(r,s),a=t.minFilter;return t.minFilter===Lr&&(t.minFilter=un),new _p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function c1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===hc||f===pc)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new nf(p.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",u),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===hc||f===pc,v=f===cs||f===go;if(p||v){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ju(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const _=d.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new ju(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function a(d,f){return f===hc?d.mapping=cs:f===pc&&(d.mapping=go),d}function l(d){let f=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function u1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&io("WebGLRenderer: "+n+" extension not supported."),r}}}function d1(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function u(h){const d=[],f=h.index,p=h.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let w=0,x=_.length;w<x;w+=3){const b=_[w+0],S=_[w+1],C=_[w+2];d.push(b,S,S,C,C,b)}}else{const _=p.array;v=p.version;for(let w=0,x=_.length/3-1;w<x;w+=3){const b=w+0,S=w+1,C=w+2;d.push(b,S,S,C,C,b)}}const g=new(p.count>=65535?ap:op)(d,1);g.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function c(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function f1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function u(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,h*o,f),t.update(d,n,f))}function c(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function h1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function p1(i,e,t){const n=new WeakMap,r=new Wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),p===!0&&(w=2),v===!0&&(w=3);let x=a.attributes.position.count*w,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*b*4*h),C=new ip(S,x,b,h);C.type=Di,C.needsUpdate=!0;const y=w*4;for(let R=0;R<h;R++){const U=g[R],k=m[R],P=_[R],L=x*b*4*R;for(let F=0;F<U.count;F++){const O=F*y;f===!0&&(r.fromBufferAttribute(U,F),S[L+O+0]=r.x,S[L+O+1]=r.y,S[L+O+2]=r.z,S[L+O+3]=0),p===!0&&(r.fromBufferAttribute(k,F),S[L+O+4]=r.x,S[L+O+5]=r.y,S[L+O+6]=r.z,S[L+O+7]=0),v===!0&&(r.fromBufferAttribute(P,F),S[L+O+8]=r.x,S[L+O+9]=r.y,S[L+O+10]=r.z,S[L+O+11]=P.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new tt(x,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<u.length;v++)f+=u[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function m1(i,e,t,n,r){let s=new WeakMap;function o(u){const c=r.render.frame,h=u.geometry,d=e.get(u,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const g1={[G0]:"LINEAR_TONE_MAPPING",[H0]:"REINHARD_TONE_MAPPING",[V0]:"CINEON_TONE_MAPPING",[W0]:"ACES_FILMIC_TONE_MAPPING",[X0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[$0]:"CUSTOM_TONE_MAPPING"};function v1(i,e,t,n,r,s){const o=new oi(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const u=new jt;u.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new yt([0,2,0,0,2,0],2));const c=new sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Qt(u,c),d=new vp(-1,1,1,-1,0,1);let f=null,p=null,v=!1,g,m=null,_=[],w=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let S=0;S<_.length;S++){const C=_[S];C.setSize&&C.setSize(x,b)}},this.setEffects=function(x){_=x,w=_.length>0&&_[0].isRenderPass===!0;const b=o.width,S=o.height;_.length>0&&a===null&&(a=new oi(b,S,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(b,S,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){const y=_[C];y.setSize&&y.setSize(b,S)}},this.begin=function(x,b){if(v||x.toneMapping===Zi&&_.length===0)return!1;if(m=b,b!==null){const S=b.width,C=b.height;(o.width!==S||o.height!==C)&&this.setSize(S,C)}return w===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Zi,!0},this.hasRenderPass=function(){return w},this.end=function(x,b){x.toneMapping=g,v=!0;let S=o,C=a;for(let y=0;y<_.length;y++){const T=_[y];T.enabled!==!1&&(T.render(x,C,S,b),T.needsSwap!==!1&&(S=C,C=C===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,c.defines={},Et.getTransfer(f)===Ot&&(c.defines.SRGB_TRANSFER="");const y=g1[p];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(m),x.render(h,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),c.dispose()}}const Mp=new Vn,Ju=new xo(1,1),Sp=new ip,wp=new Uv,Tp=new dp,fh=[],hh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function wo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=fh[r];if(s===void 0&&(s=new Float32Array(r),fh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2fv(this.addr,e),Rn(t,e)}}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;i.uniform3fv(this.addr,e),Rn(t,e)}}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4fv(this.addr,e),Rn(t,e)}}function M1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),Rn(t,n)}}function S1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),Rn(t,n)}}function w1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(Cn(t,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),Rn(t,n)}}function T1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2iv(this.addr,e),Rn(t,e)}}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3iv(this.addr,e),Rn(t,e)}}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4iv(this.addr,e),Rn(t,e)}}function R1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2uiv(this.addr,e),Rn(t,e)}}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3uiv(this.addr,e),Rn(t,e)}}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4uiv(this.addr,e),Rn(t,e)}}function I1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?qd:Xd,s=Ju):s=Mp,t.setTexture2D(e||s,r)}function U1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||wp,r)}function k1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tp,r)}function N1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sp,r)}function F1(i){switch(i){case 5126:return x1;case 35664:return _1;case 35665:return y1;case 35666:return b1;case 35674:return M1;case 35675:return S1;case 35676:return w1;case 5124:case 35670:return T1;case 35667:case 35671:return E1;case 35668:case 35672:return A1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return P1;case 36295:return L1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return N1}}function z1(i,e){i.uniform1fv(this.addr,e)}function O1(i,e){const t=wo(e,this.size,2);i.uniform2fv(this.addr,t)}function B1(i,e){const t=wo(e,this.size,3);i.uniform3fv(this.addr,t)}function G1(i,e){const t=wo(e,this.size,4);i.uniform4fv(this.addr,t)}function H1(i,e){const t=wo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V1(i,e){const t=wo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function W1(i,e){const t=wo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $1(i,e){i.uniform1iv(this.addr,e)}function X1(i,e){i.uniform2iv(this.addr,e)}function q1(i,e){i.uniform3iv(this.addr,e)}function Y1(i,e){i.uniform4iv(this.addr,e)}function K1(i,e){i.uniform1uiv(this.addr,e)}function Z1(i,e){i.uniform2uiv(this.addr,e)}function j1(i,e){i.uniform3uiv(this.addr,e)}function J1(i,e){i.uniform4uiv(this.addr,e)}function Q1(i,e,t){const n=this.cache,r=e.length,s=ac(t,r);Cn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ju:o=Mp;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function eb(i,e,t){const n=this.cache,r=e.length,s=ac(t,r);Cn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wp,s[o])}function tb(i,e,t){const n=this.cache,r=e.length,s=ac(t,r);Cn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tp,s[o])}function nb(i,e,t){const n=this.cache,r=e.length,s=ac(t,r);Cn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sp,s[o])}function ib(i){switch(i){case 5126:return z1;case 35664:return O1;case 35665:return B1;case 35666:return G1;case 35674:return H1;case 35675:return V1;case 35676:return W1;case 5124:case 35670:return $1;case 35667:case 35671:return X1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return K1;case 36294:return Z1;case 36295:return j1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}class rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F1(t.type)}}class sb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ib(t.type)}}class ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function vh(i,e){i.seq.push(e),i.map[e.id]=e}function ab(i,e,t){const n=i.name,r=n.length;for(Vc.lastIndex=0;;){const s=Vc.exec(n),o=Vc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vh(t,u===void 0?new rb(a,i,e):new sb(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ob(a),vh(t,h)),t=h}}}class gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ab(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function xh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lb=37297;let cb=0;function ub(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _h=new pt;function db(i){Et._getMatrix(_h,Et.workingColorSpace,i);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case Il:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ub(i.getShaderSource(e),a)}else return s}function fb(i,e){const t=db(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hb={[G0]:"Linear",[H0]:"Reinhard",[V0]:"Cineon",[W0]:"ACESFilmic",[X0]:"AgX",[q0]:"Neutral",[$0]:"Custom"};function pb(i,e){const t=hb[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const il=new N;function mb(){Et.getLuminanceCoefficients(il);const i=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function vb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $o(i){return i!==""}function bh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(i){return i.replace(_b,bb)}const yb=new Map;function bb(i,e){let t=_t[e];if(t===void 0){const n=yb.get(e);if(n!==void 0)t=_t[n],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qu(t)}const Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(Mb,Sb)}function Sb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const wb={[dl]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function Tb(i){return wb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Eb={[cs]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function Ab(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Eb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cb={[go]:"ENVMAP_MODE_REFRACTION"};function Rb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pb={[B0]:"ENVMAP_BLENDING_MULTIPLY",[jg]:"ENVMAP_BLENDING_MIX",[Jg]:"ENVMAP_BLENDING_ADD"};function Lb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[i.combine]||"ENVMAP_BLENDING_NONE"}function Db(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ib(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Tb(t),u=Ab(t),c=Rb(t),h=Lb(t),d=Db(t),f=gb(t),p=vb(s),v=r.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($o).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($o).join(`
`),m.length>0&&(m+=`
`)):(g=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Zi?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,fb("linearToOutputTexel",t.outputColorSpace),mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=Qu(o),o=bh(o,t),o=Mh(o,t),a=Qu(a),a=bh(a,t),a=Mh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=_+g+o,x=_+m+a,b=xh(r,r.VERTEX_SHADER,w),S=xh(r,r.FRAGMENT_SHADER,x);r.attachShader(v,b),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(U){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(b)||"",L=r.getShaderInfoLog(S)||"",F=k.trim(),O=P.trim(),K=L.trim();let he=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,b,S);else{const oe=yh(r,b,"vertex"),D=yh(r,S,"fragment");Rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+oe+`
`+D)}else F!==""?dt("WebGLProgram: Program Info Log:",F):(O===""||K==="")&&(Q=!1);Q&&(U.diagnostics={runnable:he,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:K,prefix:m}})}r.deleteShader(b),r.deleteShader(S),y=new gl(r,v),T=xb(r,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,lb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=S,this}let Ub=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nb(e),t.set(e,n)),n}}class Nb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Fb(i){return i===us||i===Pl||i===Ll}function zb(i,e,t,n,r,s){const o=new rp,a=new kb,l=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,R,U,k,P){const L=U.fog,F=k.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,he=e.get(y.envMap||O,K),Q=he&&he.mapping===tc?he.image.height:null,oe=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&dt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const D=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=D!==void 0?D.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let Me,_e,Se,Y;if(oe){const Nt=Xi[oe];Me=Nt.vertexShader,_e=Nt.fragmentShader}else{Me=y.vertexShader,_e=y.fragmentShader;const Nt=a.getVertexShaderStage(y),Ct=a.getFragmentShaderStage(y);a.update(y,Nt,Ct),Se=Nt.id,Y=Ct.id}const ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),ae=k.isInstancedMesh===!0,ge=k.isBatchedMesh===!0,$e=!!y.map,ft=!!y.matcap,je=!!he,Ve=!!y.aoMap,ct=!!y.lightMap,Xe=!!y.bumpMap&&y.wireframe===!1,vt=!!y.normalMap,vn=!!y.displacementMap,$t=!!y.emissiveMap,Jt=!!y.metalnessMap,kt=!!y.roughnessMap,H=y.anisotropy>0,dn=y.clearcoat>0,At=y.dispersion>0,I=y.retroreflectivity>0,M=y.iridescence>0,X=y.sheen>0,j=y.transmission>0,ee=H&&!!y.anisotropyMap,be=dn&&!!y.clearcoatMap,Pe=dn&&!!y.clearcoatNormalMap,re=dn&&!!y.clearcoatRoughnessMap,ue=M&&!!y.iridescenceMap,Ce=M&&!!y.iridescenceThicknessMap,Ze=X&&!!y.sheenColorMap,Ue=X&&!!y.sheenRoughnessMap,De=!!y.specularMap,Je=!!y.specularColorMap,st=!!y.specularIntensityMap,ht=j&&!!y.transmissionMap,W=j&&!!y.thicknessMap,Le=!!y.gradientMap,ce=!!y.alphaMap,Ie=y.alphaTest>0,Ge=!!y.alphaHash,me=!!y.extensions;let Qe=Zi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const We={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:_e,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ge,batchingColor:ge&&k._colorsTexture!==null,instancing:ae,instancingColor:ae&&k.instanceColor!==null,instancingMorph:ae&&k.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:ft,envMap:je,envMapMode:je&&he.mapping,envMapCubeUVHeight:Q,aoMap:Ve,lightMap:ct,bumpMap:Xe,normalMap:vt,displacementMap:vn,emissiveMap:$t,normalMapObjectSpace:vt&&y.normalMapType===tv,normalMapTangentSpace:vt&&y.normalMapType===Ku,packedNormalMap:vt&&y.normalMapType===Ku&&Fb(y.normalMap.format),metalnessMap:Jt,roughnessMap:kt,anisotropy:H,anisotropyMap:ee,clearcoat:dn,clearcoatMap:be,clearcoatNormalMap:Pe,clearcoatRoughnessMap:re,dispersion:At,retroreflection:I,iridescence:M,iridescenceMap:ue,iridescenceThicknessMap:Ce,sheen:X,sheenColorMap:Ze,sheenRoughnessMap:Ue,specularMap:De,specularColorMap:Je,specularIntensityMap:st,transmission:j,transmissionMap:ht,thicknessMap:W,gradientMap:Le,opaque:y.transparent===!1&&y.blending===Zo&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ie,alphaHash:Ge,combine:y.combine,mapUv:$e&&p(y.map.channel),aoMapUv:Ve&&p(y.aoMap.channel),lightMapUv:ct&&p(y.lightMap.channel),bumpMapUv:Xe&&p(y.bumpMap.channel),normalMapUv:vt&&p(y.normalMap.channel),displacementMapUv:vn&&p(y.displacementMap.channel),emissiveMapUv:$t&&p(y.emissiveMap.channel),metalnessMapUv:Jt&&p(y.metalnessMap.channel),roughnessMapUv:kt&&p(y.roughnessMap.channel),anisotropyMapUv:ee&&p(y.anisotropyMap.channel),clearcoatMapUv:be&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&p(y.sheenRoughnessMap.channel),specularMapUv:De&&p(y.specularMap.channel),specularColorMapUv:Je&&p(y.specularColorMap.channel),specularIntensityMapUv:st&&p(y.specularIntensityMap.channel),transmissionMapUv:ht&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:ce&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(vt||H),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&($e||ce),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:te,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&Et.getTransfer(y.map.colorSpace)===Ot,decodeVideoTextureEmissive:$t&&y.emissiveMap.isVideoTexture===!0&&Et.getTransfer(y.emissiveMap.colorSpace)===Ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===Jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function g(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(T,y),_(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){const T=f[y.type];let R;if(T){const U=Xi[T];R=nx.clone(U.uniforms)}else R=y.uniforms;return R}function x(y,T){let R=c.get(T);return R!==void 0?++R.usedTimes:(R=new Ib(i,T,y,r),u.push(R),c.set(T,R)),R}function b(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:x,releaseProgram:b,releaseShaderCache:S,programs:u,dispose:C}}function Ob(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Bb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,v,g,m){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=g,_.group=m),e++,_}function l(d,f,p,v,g,m,_){_.reversedDepth===!0&&(g=-g);const w=a(d,f,p,v,g,m);p.transmission>0?n.push(w):p.transparent===!0?r.push(w):t.push(w)}function u(d,f,p,v,g,m){const _=a(d,f,p,v,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(d,f){t.length>1&&t.sort(d||Bb),n.length>1&&n.sort(f||Th),r.length>1&&r.sort(f||Th)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:h,sort:c}}function Gb(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Eh,i.set(n,[o])):r>=s.length?(o=new Eh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new mt};break;case"SpotLight":t={position:new N,direction:new N,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Vb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wb=0;function $b(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xb(i){const e=new Hb,t=Vb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);const r=new N,s=new It,o=new It;function a(u){let c=0,h=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,w=0,x=0,b=0,S=0,C=0,y=0,T=0,R=0;u.sort($b);for(let k=0,P=u.length;k<P;k++){const L=u[k],F=L.color,O=L.intensity,K=L.distance;let he=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===us?he=L.shadow.map.texture:he=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=F.r*O,h+=F.g*O,d+=F.b*O;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(L.sh.coefficients[Q],O);R++}else if(L.isSunLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,D=t.get(L);D.shadowIntensity=oe.intensity,D.shadowBias=oe.bias,D.shadowNormalBias=oe.normalBias,D.shadowRadius=oe.radius,D.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[p]=D,n.sunShadowMap[p]=he;const le=oe.getViewportCount();for(let te=0;te<le;te++)n.sunShadowMatrix[v+te]=oe.getMatrix(te),n.sunShadowCascade[v+te]=oe._cascadeData[te];v+=le,p++}n.sun[f]=Q,f++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,D=t.get(L);D.shadowIntensity=oe.intensity,D.shadowBias=oe.bias,D.shadowNormalBias=oe.normalBias,D.shadowRadius=oe.radius,D.shadowMapSize=oe.mapSize,n.directionalShadow[g]=D,n.directionalShadowMap[g]=he,n.directionalShadowMatrix[g]=L.shadow.matrix,b++}n.directional[g]=Q,g++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(F).multiplyScalar(O),Q.distance=K,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,n.spot[_]=Q;const oe=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,oe.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=oe.matrix,L.castShadow){const D=t.get(L);D.shadowIntensity=oe.intensity,D.shadowBias=oe.bias,D.shadowNormalBias=oe.normalBias,D.shadowRadius=oe.radius,D.shadowMapSize=oe.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=he,C++}_++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(F).multiplyScalar(O),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Q,w++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const oe=L.shadow,D=t.get(L);D.shadowIntensity=oe.intensity,D.shadowBias=oe.bias,D.shadowNormalBias=oe.normalBias,D.shadowRadius=oe.radius,D.shadowMapSize=oe.mapSize,D.shadowCameraNear=oe.camera.near,D.shadowCameraFar=oe.camera.far,n.pointShadow[m]=D,n.pointShadowMap[m]=he,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=Q,m++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(O),Q.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[x]=Q,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==w||U.hemiLength!==x||U.numSunShadows!==p||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==C||U.numSpotMaps!==y||U.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=w,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=_,U.rectAreaLength=w,U.hemiLength=x,U.numSunShadows=p,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=C,U.numSpotMaps=y,U.numLightProbes=R,n.version=Wb++)}function l(u,c){let h=0,d=0,f=0,p=0,v=0,g=0;const m=c.matrixWorldInverse;for(let _=0,w=u.length;_<w;_++){const x=u[_];if(x.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),h++}else if(x.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(x.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Ah(i){const e=new Xb(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function u(){e.setup(t)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function qb(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ah(i),e.set(r,[a])):s>=o.length?(a=new Ah(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`,Zb=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],jb=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ch=new It,Fo=new N,Wc=new N;function Jb(i,e,t){let n=new jd;const r=new tt,s=new tt,o=new Wt,a=new ox,l=new ax,u={},c=t.maxTextureSize,h={[ls]:Jn,[Jn]:ls,[si]:si},d=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Yb,fragmentShader:Kb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new jt;p.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let m=this.type;this.render=function(S,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Dg&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dl);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ur),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const P=m!==this.type;P&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=S.length;L<F;L++){const O=S[L],K=O.shadow;if(K===void 0){dt("WebGLShadowMap:",O,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const he=K.getFrameExtents();r.multiply(he),s.copy(K.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/he.x),r.x=s.x*he.x,K.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/he.y),r.y=s.y*he.y,K.mapSize.y=s.y));const Q=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Q,K.map===null||P===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Wo){if(O.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new oi(r.x,r.y,{format:us,type:wi,minFilter:un,magFilter:un,generateMipmaps:!1}),K.map.texture.name=O.name+".shadowMap",K.map.depthTexture=new xo(r.x,r.y,Di),K.map.depthTexture.name=O.name+".shadowMapDepth",K.map.depthTexture.format=mr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In}else O.isPointLight?(K.map=new nf(r.x),K.map.depthTexture=new ex(r.x,Fi)):(K.map=new oi(r.x,r.y),K.map.depthTexture=new xo(r.x,r.y,Fi)),K.map.depthTexture.name=O.name+".shadowMap",K.map.depthTexture.format=mr,this.type===dl?(K.map.depthTexture.compareFunction=Q?qd:Xd,K.map.depthTexture.minFilter=un,K.map.depthTexture.magFilter=un):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const oe=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();O.isPointLight!==!0&&K.updateMatrices(O,y);for(let D=0;D<oe;D++){const le=K.getCamera(D);if(O.isPointLight){const te=K.camera,Me=K.matrix,_e=O.distance||te.far;_e!==te.far&&(te.far=_e,te.updateProjectionMatrix()),Fo.setFromMatrixPosition(O.matrixWorld),te.position.copy(Fo),Wc.copy(te.position),Wc.add(Zb[D]),te.up.copy(jb[D]),te.lookAt(Wc),te.updateMatrixWorld(),Me.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Ch.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ch,te.coordinateSystem,te.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,D),i.clear();else{D===0&&(i.setRenderTarget(K.map),i.clear());const te=K.getViewport(D);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),k.viewport(o)}n=K.getFrustum(D),x(C,y,le,O,this.type)}K.isPointLightShadow!==!0&&this.type===Wo&&_(K,y),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,U)};function _(S,C){const y=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new oi(r.x,r.y,{format:us,type:wi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,y,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,y,f,v,null)}function w(S,C,y,T){let R=null;const U=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)R=U;else if(R=y.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=R.uuid,P=C.uuid;let L=u[k];L===void 0&&(L={},u[k]=L);let F=L[P];F===void 0&&(F=R.clone(),L[P]=F,C.addEventListener("dispose",b)),R=F}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Wo?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const k=i.properties.get(R);k.light=y}return R}function x(S,C,y,T,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Wo)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);const P=e.update(S),L=S.material;if(Array.isArray(L)){const F=P.groups;for(let O=0,K=F.length;O<K;O++){const he=F[O],Q=L[he.materialIndex];if(Q&&Q.visible){const oe=w(S,Q,T,R);S.onBeforeShadow(i,S,C,y,P,oe,he),i.renderBufferDirect(y,null,P,oe,S,he),S.onAfterShadow(i,S,C,y,P,oe,he)}}}else if(L.visible){const F=w(S,L,T,R);S.onBeforeShadow(i,S,C,y,P,F,null),i.renderBufferDirect(y,null,P,F,S,null),S.onAfterShadow(i,S,C,y,P,F,null)}}const k=S.children;for(let P=0,L=k.length;P<L;P++)x(k[P],C,y,T,R)}function b(S){S.target.removeEventListener("dispose",b);for(const y in u){const T=u[y],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Qb(i,e){function t(){let W=!1;const Le=new Wt;let ce=null;const Ie=new Wt(0,0,0,0);return{setMask:function(Ge){ce!==Ge&&!W&&(i.colorMask(Ge,Ge,Ge,Ge),ce=Ge)},setLocked:function(Ge){W=Ge},setClear:function(Ge,me,Qe,We,Nt){Nt===!0&&(Ge*=We,me*=We,Qe*=We),Le.set(Ge,me,Qe,We),Ie.equals(Le)===!1&&(i.clearColor(Ge,me,Qe,We),Ie.copy(Le))},reset:function(){W=!1,ce=null,Ie.set(-1,0,0,0)}}}function n(){let W=!1,Le=!1,ce=null,Ie=null,Ge=null;return{setReversed:function(me){if(Le!==me){const Qe=e.get("EXT_clip_control");me?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Le=me;const We=Ge;Ge=null,this.setClear(We)}},getReversed:function(){return Le},setTest:function(me){me?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(me){ce!==me&&!W&&(i.depthMask(me),ce=me)},setFunc:function(me){if(Le&&(me=fv[me]),Ie!==me){switch(me){case du:i.depthFunc(i.NEVER);break;case fu:i.depthFunc(i.ALWAYS);break;case hu:i.depthFunc(i.LESS);break;case da:i.depthFunc(i.LEQUAL);break;case pu:i.depthFunc(i.EQUAL);break;case mu:i.depthFunc(i.GEQUAL);break;case gu:i.depthFunc(i.GREATER);break;case vu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=me}},setLocked:function(me){W=me},setClear:function(me){Ge!==me&&(Ge=me,Le&&(me=1-me),i.clearDepth(me))},reset:function(){W=!1,ce=null,Ie=null,Ge=null,Le=!1}}}function r(){let W=!1,Le=null,ce=null,Ie=null,Ge=null,me=null,Qe=null,We=null,Nt=null;return{setTest:function(Ct){W||(Ct?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!W&&(i.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,ni,Nn){(ce!==Ct||Ie!==ni||Ge!==Nn)&&(i.stencilFunc(Ct,ni,Nn),ce=Ct,Ie=ni,Ge=Nn)},setOp:function(Ct,ni,Nn){(me!==Ct||Qe!==ni||We!==Nn)&&(i.stencilOp(Ct,ni,Nn),me=Ct,Qe=ni,We=Nn)},setLocked:function(Ct){W=Ct},setClear:function(Ct){Nt!==Ct&&(i.clearStencil(Ct),Nt=Ct)},reset:function(){W=!1,Le=null,ce=null,Ie=null,Ge=null,me=null,Qe=null,We=null,Nt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,w=null,x=null,b=null,S=null,C=null,y=new mt(0,0,0),T=0,R=!1,U=null,k=null,P=null,L=null,F=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,he=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=he>=1):Q.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=he>=2);let oe=null,D={};const le=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Me=new Wt().fromArray(le),_e=new Wt().fromArray(te);function Se(W,Le,ce,Ie){const Ge=new Uint8Array(4),me=i.createTexture();i.bindTexture(W,me),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ce;Qe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Le+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return me}const Y={};Y[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(da),Xe(!1),vt(Rf),ne(i.CULL_FACE),Ve(ur);function ne(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function ye(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function ae(W,Le){return d[W]!==Le?(i.bindFramebuffer(W,Le),d[W]=Le,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Le),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function ge(W,Le){let ce=p,Ie=!1;if(W){ce=f.get(Le),ce===void 0&&(ce=[],f.set(Le,ce));const Ge=W.textures;if(ce.length!==Ge.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Qe=Ge.length;me<Qe;me++)ce[me]=i.COLOR_ATTACHMENT0+me;ce.length=Ge.length,Ie=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ce)}function $e(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const ft={[Ks]:i.FUNC_ADD,[Ug]:i.FUNC_SUBTRACT,[kg]:i.FUNC_REVERSE_SUBTRACT};ft[Ng]=i.MIN,ft[Fg]=i.MAX;const je={[zg]:i.ZERO,[Og]:i.ONE,[Bg]:i.SRC_COLOR,[z0]:i.SRC_ALPHA,[Xg]:i.SRC_ALPHA_SATURATE,[Wg]:i.DST_COLOR,[Hg]:i.DST_ALPHA,[Gg]:i.ONE_MINUS_SRC_COLOR,[O0]:i.ONE_MINUS_SRC_ALPHA,[$g]:i.ONE_MINUS_DST_COLOR,[Vg]:i.ONE_MINUS_DST_ALPHA,[qg]:i.CONSTANT_COLOR,[Yg]:i.ONE_MINUS_CONSTANT_COLOR,[Kg]:i.CONSTANT_ALPHA,[Zg]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(W,Le,ce,Ie,Ge,me,Qe,We,Nt,Ct){if(W===ur){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),W!==Ig){if(W!==m||Ct!==R){if((_!==Ks||b!==Ks)&&(i.blendEquation(i.FUNC_ADD),_=Ks,b=Ks),Ct)switch(W){case Zo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFunc(i.ONE,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pf:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lf:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}w=null,x=null,S=null,C=null,y.set(0,0,0),T=0,m=W,R=Ct}return}Ge=Ge||Le,me=me||ce,Qe=Qe||Ie,(Le!==_||Ge!==b)&&(i.blendEquationSeparate(ft[Le],ft[Ge]),_=Le,b=Ge),(ce!==w||Ie!==x||me!==S||Qe!==C)&&(i.blendFuncSeparate(je[ce],je[Ie],je[me],je[Qe]),w=ce,x=Ie,S=me,C=Qe),(We.equals(y)===!1||Nt!==T)&&(i.blendColor(We.r,We.g,We.b,Nt),y.copy(We),T=Nt),m=W,R=!1}function ct(W,Le){W.side===si?ye(i.CULL_FACE):ne(i.CULL_FACE);let ce=W.side===Jn;Le&&(ce=!ce),Xe(ce),W.blending===Zo&&W.transparent===!1?Ve(ur):Ve(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Ie=W.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),$t(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(W){U!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),U=W)}function vt(W){W!==Pg?(ne(i.CULL_FACE),W!==k&&(W===Rf?i.cullFace(i.BACK):W===Lg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),k=W}function vn(W){W!==P&&(K&&i.lineWidth(W),P=W)}function $t(W,Le,ce){W?(ne(i.POLYGON_OFFSET_FILL),(L!==Le||F!==ce)&&(L=Le,F=ce,o.getReversed()&&(Le=-Le),i.polygonOffset(Le,ce))):ye(i.POLYGON_OFFSET_FILL)}function Jt(W){W?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function kt(W){W===void 0&&(W=i.TEXTURE0+O-1),oe!==W&&(i.activeTexture(W),oe=W)}function H(W,Le,ce){ce===void 0&&(oe===null?ce=i.TEXTURE0+O-1:ce=oe);let Ie=D[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},D[ce]=Ie),(Ie.type!==W||Ie.texture!==Le)&&(oe!==ce&&(i.activeTexture(ce),oe=ce),i.bindTexture(W,Le||Y[W]),Ie.type=W,Ie.texture=Le)}function dn(){const W=D[oe];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function M(){try{i.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function X(){try{i.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function be(){try{i.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Pe(){try{i.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function re(){try{i.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ue(){try{i.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ce(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Ze(W,Le){h[W]!==Le&&(i.pixelStorei(W,Le),h[W]=Le)}function Ue(W){Me.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Me.copy(W))}function De(W){_e.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),_e.copy(W))}function Je(W,Le){let ce=u.get(Le);ce===void 0&&(ce=new WeakMap,u.set(Le,ce));let Ie=ce.get(W);Ie===void 0&&(Ie=i.getUniformBlockIndex(Le,W.name),ce.set(W,Ie))}function st(W,Le){const Ie=u.get(Le).get(W);l.get(Le)!==Ie&&(i.uniformBlockBinding(Le,Ie,W.__bindingPointIndex),l.set(Le,Ie))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},oe=null,D={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,w=null,x=null,b=null,S=null,C=null,y=new mt(0,0,0),T=0,R=!1,U=null,k=null,P=null,L=null,F=null,Me.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ye,bindFramebuffer:ae,drawBuffers:ge,useProgram:$e,setBlending:Ve,setMaterial:ct,setFlipSided:Xe,setCullFace:vt,setLineWidth:vn,setPolygonOffset:$t,setScissorTest:Jt,activeTexture:kt,bindTexture:H,unbindTexture:dn,compressedTexImage2D:At,compressedTexImage3D:I,texImage2D:re,texImage3D:ue,pixelStorei:Ze,getParameter:Ce,updateUBOMapping:Je,uniformBlockBinding:st,texStorage2D:be,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:j,compressedTexSubImage3D:ee,scissor:Ue,viewport:De,reset:ht}}function eM(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,c=new WeakMap,h=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,M){return p?new OffscreenCanvas(I,M):Ul("canvas")}function g(I,M,X){let j=1;const ee=At(I);if((ee.width>X||ee.height>X)&&(j=X/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const be=Math.floor(j*ee.width),Pe=Math.floor(j*ee.height);d===void 0&&(d=v(be,Pe));const re=M?v(be,Pe):d;return re.width=be,re.height=Pe,re.getContext("2d").drawImage(I,0,0,be,Pe),dt("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+be+"x"+Pe+")."),re}else return"data"in I&&dt("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,M,X,j,ee,be=!1){if(I!==null){if(i[I]!==void 0)return i[I];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;j&&(Pe=e.get("EXT_texture_norm16"),Pe||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=M;if(M===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8),X===i.UNSIGNED_SHORT&&Pe&&(re=Pe.R16_EXT),X===i.SHORT&&Pe&&(re=Pe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),M===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8),X===i.UNSIGNED_SHORT&&Pe&&(re=Pe.RG16_EXT),X===i.SHORT&&Pe&&(re=Pe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&Pe&&(re=Pe.RGB16_EXT),X===i.SHORT&&Pe&&(re=Pe.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),M===i.RGBA){const ue=be?Il:Et.getTransfer(ee);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=ue===Ot?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Pe&&(re=Pe.RGBA16_EXT),X===i.SHORT&&Pe&&(re=Pe.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(I,M){let X;return I?M===null||M===Fi||M===pa?X=i.DEPTH24_STENCIL8:M===Di?X=i.DEPTH32F_STENCIL8:M===ha&&(X=i.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===pa?X=i.DEPTH_COMPONENT24:M===Di?X=i.DEPTH_COMPONENT32F:M===ha&&(X=i.DEPTH_COMPONENT16),X}function S(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function C(I){const M=I.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&h.delete(M)}function y(I){const M=I.target;M.removeEventListener("dispose",y),U(M)}function T(I){const M=n.get(I);if(M.__webglInit===void 0)return;const X=I.source,j=f.get(X);if(j){const ee=j[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(I),Object.keys(j).length===0&&f.delete(X)}n.remove(I)}function R(I){const M=n.get(I);i.deleteTexture(M.__webglTexture);const X=I.source,j=f.get(X);delete j[M.__cacheKey],o.memory.textures--}function U(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ee=0;ee<M.__webglFramebuffer[j].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[j][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=I.textures;for(let j=0,ee=X.length;j<ee;j++){const be=n.get(X[j]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(X[j])}n.remove(I)}let k=0;function P(){k=0}function L(){return k}function F(I){k=I}function O(){const I=k;return I>=r.maxTextures&&dt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,I}function K(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function he(I,M){const X=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const j=I.image;if(j===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(X,I,M);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function Q(I,M){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ye(X,I,M);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function oe(I,M){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ye(X,I,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function D(I,M){const X=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){ae(X,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}const le={[fa]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[xu]:i.MIRRORED_REPEAT},te={[In]:i.NEAREST,[Qg]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[mc]:i.LINEAR_MIPMAP_NEAREST,[Lr]:i.LINEAR_MIPMAP_LINEAR},Me={[iv]:i.NEVER,[lv]:i.ALWAYS,[rv]:i.LESS,[Xd]:i.LEQUAL,[sv]:i.EQUAL,[qd]:i.GEQUAL,[ov]:i.GREATER,[av]:i.NOTEQUAL};function _e(I,M){if(M.type===Di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===mc||M.magFilter===Pa||M.magFilter===Lr||M.minFilter===un||M.minFilter===mc||M.minFilter===Pa||M.minFilter===Lr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,le[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,le[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,le[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,te[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===In||M.minFilter!==Pa&&M.minFilter!==Lr||M.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Se(I,M){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",C));const j=M.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const be=K(M);if(be!==I.__cacheKey){ee[be]===void 0&&(ee[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[be].usedTimes++;const Pe=ee[I.__cacheKey];Pe!==void 0&&(ee[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(M)),I.__cacheKey=be,I.__webglTexture=ee[be].texture}return X}function Y(I,M,X){return Math.floor(Math.floor(I/X)/M)}function ne(I,M,X,j){const be=I.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,j,M.data);else{be.sort((Ze,Ue)=>Ze.start-Ue.start);let Pe=0;for(let Ze=1;Ze<be.length;Ze++){const Ue=be[Pe],De=be[Ze],Je=Ue.start+Ue.count,st=Y(De.start,M.width,4),ht=Y(Ue.start,M.width,4);De.start<=Je+1&&st===ht&&Y(De.start+De.count-1,M.width,4)===st?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Pe,be[Pe]=De)}be.length=Pe+1;const re=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ze=0,Ue=be.length;Ze<Ue;Ze++){const De=be[Ze],Je=Math.floor(De.start/4),st=Math.ceil(De.count/4),ht=Je%M.width,W=Math.floor(Je/M.width),Le=st,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ht,W,Le,ce,X,j,M.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function ye(I,M,X){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const ee=Se(I,M),be=M.source;t.bindTexture(j,I.__webglTexture,i.TEXTURE0+X);const Pe=n.get(be);if(be.version!==Pe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ce=Et.getPrimaries(Et.workingColorSpace),Ie=M.colorSpace===Rr?null:Et.getPrimaries(M.colorSpace),Ge=M.colorSpace===Rr||ce===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ue=g(M.image,!1,r.maxTextureSize);ue=dn(M,ue);const Ce=s.convert(M.format,M.colorSpace),Ze=s.convert(M.type);let Ue=x(M.internalFormat,Ce,Ze,M.normalized,M.colorSpace,M.isVideoTexture);_e(j,M);let De;const Je=M.mipmaps,st=M.isVideoTexture!==!0,ht=Pe.__version===void 0||ee===!0,W=be.dataReady,Le=S(M,ue);if(M.isDepthTexture)Ue=b(M.format===Jr,M.type),ht&&(st?t.texStorage2D(i.TEXTURE_2D,1,Ue,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Ce,Ze,null));else if(M.isDataTexture)if(Je.length>0){st&&ht&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,Je[0].width,Je[0].height);for(let ce=0,Ie=Je.length;ce<Ie;ce++)De=Je[ce],st?W&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,De.width,De.height,Ce,Ze,De.data):t.texImage2D(i.TEXTURE_2D,ce,Ue,De.width,De.height,0,Ce,Ze,De.data);M.generateMipmaps=!1}else st?(ht&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,ue.width,ue.height),W&&ne(M,ue,Ce,Ze)):t.texImage2D(i.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Ce,Ze,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){st&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,Je[0].width,Je[0].height,ue.depth);for(let ce=0,Ie=Je.length;ce<Ie;ce++)if(De=Je[ce],M.format!==bi)if(Ce!==null)if(st){if(W)if(M.layerUpdates.size>0){const Ge=ah(De.width,De.height,M.format,M.type);for(const me of M.layerUpdates){const Qe=De.data.subarray(me*Ge/De.data.BYTES_PER_ELEMENT,(me+1)*Ge/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,me,De.width,De.height,1,Ce,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,De.width,De.height,ue.depth,Ce,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ue,De.width,De.height,ue.depth,0,De.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,De.width,De.height,ue.depth,Ce,Ze,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ue,De.width,De.height,ue.depth,0,Ce,Ze,De.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{st&&ht&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,Je[0].width,Je[0].height);for(let ce=0,Ie=Je.length;ce<Ie;ce++)De=Je[ce],M.format!==bi?Ce!==null?st?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,De.width,De.height,Ce,De.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ue,De.width,De.height,0,De.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,De.width,De.height,Ce,Ze,De.data):t.texImage2D(i.TEXTURE_2D,ce,Ue,De.width,De.height,0,Ce,Ze,De.data)}else if(M.isDataArrayTexture)if(st){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,ue.width,ue.height,ue.depth),W)if(M.layerUpdates.size>0){const ce=ah(ue.width,ue.height,M.format,M.type);for(const Ie of M.layerUpdates){const Ge=ue.data.subarray(Ie*ce/ue.data.BYTES_PER_ELEMENT,(Ie+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,ue.width,ue.height,1,Ce,Ze,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ce,Ze,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ue.width,ue.height,ue.depth,0,Ce,Ze,ue.data);else if(M.isData3DTexture)st?(ht&&t.texStorage3D(i.TEXTURE_3D,Le,Ue,ue.width,ue.height,ue.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ce,Ze,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ue.width,ue.height,ue.depth,0,Ce,Ze,ue.data);else if(M.isFramebufferTexture){if(ht)if(st)t.texStorage2D(i.TEXTURE_2D,Le,Ue,ue.width,ue.height);else{let ce=ue.width,Ie=ue.height;for(let Ge=0;Ge<Le;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,Ue,ce,Ie,0,Ce,Ze,null),ce>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ue.parentNode!==ce){ce.appendChild(ue),h.add(M),ce.onpaint=Ie=>{const Ge=Ie.changedElements;for(const me of h)Ge.includes(me.image)&&(me.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{const Ge=i.RGBA,me=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,me,Qe,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Je.length>0){if(st&&ht){const ce=At(Je[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ue,ce.width,ce.height)}for(let ce=0,Ie=Je.length;ce<Ie;ce++)De=Je[ce],st?W&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ce,Ze,De):t.texImage2D(i.TEXTURE_2D,ce,Ue,Ce,Ze,De);M.generateMipmaps=!1}else if(st){if(ht){const ce=At(ue);t.texStorage2D(i.TEXTURE_2D,Le,Ue,ce.width,ce.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ze,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Ce,Ze,ue);m(M)&&_(j),Pe.__version=be.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ae(I,M,X){if(M.image.length!==6)return;const j=Se(I,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const be=n.get(ee);if(ee.version!==be.__version||j===!0){t.activeTexture(i.TEXTURE0+X);const Pe=Et.getPrimaries(Et.workingColorSpace),re=M.colorSpace===Rr?null:Et.getPrimaries(M.colorSpace),ue=M.colorSpace===Rr||Pe===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ze=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let me=0;me<6;me++)!Ce&&!Ze?Ue[me]=g(M.image[me],!0,r.maxCubemapSize):Ue[me]=Ze?M.image[me].image:M.image[me],Ue[me]=dn(M,Ue[me]);const De=Ue[0],Je=s.convert(M.format,M.colorSpace),st=s.convert(M.type),ht=x(M.internalFormat,Je,st,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,Le=be.__version===void 0||j===!0,ce=ee.dataReady;let Ie=S(M,De);_e(i.TEXTURE_CUBE_MAP,M);let Ge;if(Ce){W&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ht,De.width,De.height);for(let me=0;me<6;me++){Ge=Ue[me].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const We=Ge[Qe];M.format!==bi?Je!==null?W?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,We.width,We.height,Je,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,ht,We.width,We.height,0,We.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,We.width,We.height,Je,st,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,ht,We.width,We.height,0,Je,st,We.data)}}}else{if(Ge=M.mipmaps,W&&Le){Ge.length>0&&Ie++;const me=At(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ht,me.width,me.height)}for(let me=0;me<6;me++)if(Ze){W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ue[me].width,Ue[me].height,Je,st,Ue[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,Ue[me].width,Ue[me].height,0,Je,st,Ue[me].data);for(let Qe=0;Qe<Ge.length;Qe++){const Nt=Ge[Qe].image[me].image;W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,Nt.width,Nt.height,Je,st,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,ht,Nt.width,Nt.height,0,Je,st,Nt.data)}}else{W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,st,Ue[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ht,Je,st,Ue[me]);for(let Qe=0;Qe<Ge.length;Qe++){const We=Ge[Qe];W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,Je,st,We.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,ht,Je,st,We.image[me])}}}m(M)&&_(i.TEXTURE_CUBE_MAP),be.__version=ee.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ge(I,M,X,j,ee,be){const Pe=s.convert(X.format,X.colorSpace),re=s.convert(X.type),ue=x(X.internalFormat,Pe,re,X.normalized,X.colorSpace),Ce=n.get(M),Ze=n.get(X);if(Ze.__renderTarget=M,!Ce.__hasExternalTextures){const Ue=Math.max(1,M.width>>be),De=Math.max(1,M.height>>be);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,be,ue,Ue,De,M.depth,0,Pe,re,null):t.texImage2D(ee,be,ue,Ue,De,0,Pe,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ee,Ze.__webglTexture,0,Jt(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ee,Ze.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(I,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){const j=M.depthTexture,ee=j&&j.isDepthTexture?j.type:null,be=b(M.stencilBuffer,ee),Pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(M),be,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(M),be,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,be,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,I)}else{const j=M.textures;for(let ee=0;ee<j.length;ee++){const be=j[ee],Pe=s.convert(be.format,be.colorSpace),re=s.convert(be.type),ue=x(be.internalFormat,Pe,re,be.normalized,be.colorSpace);kt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(M),ue,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(M),ue,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ue,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(I,M,X){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),_e(i.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=s.convert(M.depthTexture.format),Ze=s.convert(M.depthTexture.type);let Ue;M.depthTexture.format===mr?Ue=i.DEPTH_COMPONENT24:M.depthTexture.format===Jr&&(Ue=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,M.width,M.height,0,Ce,Ze,null)}}else he(M.depthTexture,0);const be=ee.__webglTexture,Pe=Jt(M),re=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ue=M.depthTexture.format===Jr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===mr)kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,re,be,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ue,re,be,0);else if(M.depthTexture.format===Jr)kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,re,be,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ue,re,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(I){const M=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=j}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let j=0;j<6;j++)ft(M.__webglFramebuffer[j],I,j);else{const j=I.texture.mipmaps;j&&j.length>0?ft(M.__webglFramebuffer[0],I,0):ft(M.__webglFramebuffer,I,0)}else if(X){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),$e(M.__webglDepthbuffer[j],I,!1);else{const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,be)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$e(M.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(I,M,X){const j=n.get(I);M!==void 0&&ge(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&je(I)}function ct(I){const M=I.texture,X=n.get(I),j=n.get(M);I.addEventListener("dispose",y);const ee=I.textures,be=I.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,o.memory.textures++),be){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let ue=0;ue<M.mipmaps.length;ue++)X.__webglFramebuffer[re][ue]=i.createFramebuffer()}else X.__webglFramebuffer[re]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)X.__webglFramebuffer[re]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let re=0,ue=ee.length;re<ue;re++){const Ce=n.get(ee[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&kt(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let re=0;re<ee.length;re++){const ue=ee[re];X.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[re]);const Ce=s.convert(ue.format,ue.colorSpace),Ze=s.convert(ue.type),Ue=x(ue.internalFormat,Ce,Ze,ue.normalized,ue.colorSpace,I.isXRRenderTarget===!0),De=Jt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,X.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),_e(i.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ge(X.__webglFramebuffer[re][ue],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else ge(X.__webglFramebuffer[re],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let re=0,ue=ee.length;re<ue;re++){const Ce=ee[re],Ze=n.get(Ce);let Ue=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ze.__webglTexture),_e(Ue,Ce),ge(X.__webglFramebuffer,I,Ce,i.COLOR_ATTACHMENT0+re,Ue,0),m(Ce)&&_(Ue)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),_e(re,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ge(X.__webglFramebuffer[ue],I,M,i.COLOR_ATTACHMENT0,re,ue);else ge(X.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,re,0);m(M)&&_(re),t.unbindTexture()}I.depthBuffer&&je(I)}function Xe(I){const M=I.textures;for(let X=0,j=M.length;X<j;X++){const ee=M[X];if(m(ee)){const be=w(I),Pe=n.get(ee).__webglTexture;t.bindTexture(be,Pe),_(be),t.unbindTexture()}}}const vt=[],vn=[];function $t(I){if(I.samples>0){if(kt(I)===!1){const M=I.textures,X=I.width,j=I.height;let ee=i.COLOR_BUFFER_BIT;const be=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(I),re=M.length>1;if(re)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ue=I.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const Ze=n.get(M[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,X,j,0,0,X,j,ee,i.NEAREST),l===!0&&(vt.length=0,vn.length=0,vt.push(i.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(vt.push(be),vn.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const Ze=n.get(M[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Jt(I){return Math.min(r.maxSamples,I.samples)}function kt(I){const M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(I){const M=o.render.frame;c.get(I)!==M&&(c.set(I,M),I.update())}function dn(I,M){const X=I.colorSpace,j=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Dl&&X!==Rr&&(Et.getTransfer(X)===Ot?(j!==bi||ee!==Zn)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",X)),M}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=he,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=D,this.rebindTextures=Ve,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tM(i,e){function t(n,r=Rr){let s;const o=Et.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Bd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===j0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===J0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===K0)return i.BYTE;if(n===Z0)return i.SHORT;if(n===ha)return i.UNSIGNED_SHORT;if(n===Od)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Di)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===Q0)return i.ALPHA;if(n===ep)return i.RGB;if(n===bi)return i.RGBA;if(n===mr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===Hd)return i.RED;if(n===Vd)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Wd)return i.RG_INTEGER;if(n===$d)return i.RGBA_INTEGER;if(n===fl||n===hl||n===pl||n===ml)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_u||n===yu||n===bu||n===Mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===wu||n===Tu||n===Eu||n===Au||n===Pl||n===Cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Su||n===wu)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eu)return s.COMPRESSED_R11_EAC;if(n===Au)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Pl)return s.COMPRESSED_RG11_EAC;if(n===Cu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ru||n===Pu||n===Lu||n===Du||n===Iu||n===Uu||n===ku||n===Nu||n===Fu||n===zu||n===Ou||n===Bu||n===Gu||n===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ru)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Du)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Iu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ou)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vu||n===Wu||n===$u)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Vu)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xu||n===qu||n===Ll||n===Yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sM extends ps{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new rM,m={},_=t.getContextAttributes();let w=null,x=null;const b=[],S=[],C=new tt;let y=null,T=null;const R=new di;R.viewport=new Wt;const U=new di;U.viewport=new Wt;const k=[R,U],P=new fx;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Mc,b[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Mc,b[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=b[Y];return ne===void 0&&(ne=new Mc,b[Y]=ne),ne.getHandSpace()};function O(Y){const ne=S.indexOf(Y.inputSource);if(ne===-1)return;const ye=b[ne];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,u||o),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",he);for(let Y=0;Y<b.length;Y++){const ne=S[Y];ne!==null&&(S[Y]=null,b[Y].disconnect(ne))}L=null,F=null,g.reset();for(const Y in m)delete m[Y];if(e.setRenderTarget(w),f=null,d=null,h=null,r=null,x=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),T!==null){const Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",K),r.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ae=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?Jr:mr,ae=_.stencil?pa:Fi);const $e={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new oi(d.textureWidth,d.textureHeight,{format:bi,type:Zn,depthTexture:new xo(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new oi(f.framebufferWidth,f.framebufferHeight,{format:bi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(Y){for(let ne=0;ne<Y.removed.length;ne++){const ye=Y.removed[ne],ae=S.indexOf(ye);ae>=0&&(S[ae]=null,b[ae].disconnect(ye))}for(let ne=0;ne<Y.added.length;ne++){const ye=Y.added[ne];let ae=S.indexOf(ye);if(ae===-1){for(let $e=0;$e<b.length;$e++)if($e>=S.length){S.push(ye),ae=$e;break}else if(S[$e]===null){S[$e]=ye,ae=$e;break}if(ae===-1)break}const ge=b[ae];ge&&ge.connect(ye)}}const Q=new N,oe=new N;function D(Y,ne,ye){Q.setFromMatrixPosition(ne.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);const ae=Q.distanceTo(oe),ge=ne.projectionMatrix.elements,$e=ye.projectionMatrix.elements,ft=ge[14]/(ge[10]-1),je=ge[14]/(ge[10]+1),Ve=(ge[9]+1)/ge[5],ct=(ge[9]-1)/ge[5],Xe=(ge[8]-1)/ge[0],vt=($e[8]+1)/$e[0],vn=ft*Xe,$t=ft*vt,Jt=ae/(-Xe+vt),kt=Jt*-Xe;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(kt),Y.translateZ(Jt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const H=ft+Jt,dn=je+Jt,At=vn-kt,I=$t+(ae-kt),M=Ve*je/dn*H,X=ct*je/dn*H;Y.projectionMatrix.makePerspective(At,I,M,X,H,dn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,ye=Y.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),P.near=U.near=R.near=ne,P.far=U.far=R.far=ye,(L!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,F=P.far),P.layers.mask=Y.layers.mask|6,R.layers.mask=P.layers.mask&-5,U.layers.mask=P.layers.mask&-3;const ae=Y.parent,ge=P.cameras;le(P,ae);for(let $e=0;$e<ge.length;$e++)le(ge[$e],ae);ge.length===2?D(P,R,U):P.projectionMatrix.copy(R.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),te(Y,P,ae)};function te(Y,ne,ye){ye===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ga*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(Y){return m[Y]};let Me=null;function _e(Y,ne){if(c=ne.getViewerPose(u||o),p=ne,c!==null){const ye=c.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ae=!1;ye.length!==P.cameras.length&&(P.cameras.length=0,ae=!0);for(let je=0;je<ye.length;je++){const Ve=ye[je];let ct=null;if(f!==null)ct=f.getViewport(Ve);else{const vt=h.getViewSubImage(d,Ve);ct=vt.viewport,je===0&&(e.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(x))}let Xe=k[je];Xe===void 0&&(Xe=new di,Xe.layers.enable(je),Xe.viewport=new Wt,k[je]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ct.x,ct.y,ct.width,ct.height),je===0&&(P.matrix.copy(Xe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ae===!0&&P.cameras.push(Xe)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const je=h.getDepthInformation(ye[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let je=0;je<ye.length;je++){const Ve=ye[je].camera;if(Ve){let ct=m[Ve];ct||(ct=new hp,m[Ve]=ct);const Xe=h.getCameraImage(Ve);ct.sourceTexture=Xe}}}}for(let ye=0;ye<b.length;ye++){const ae=S[ye],ge=b[ye];ae!==null&&ge!==void 0&&ge.update(ae,ne,u||o)}Me&&Me(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const Se=new yp;Se.setAnimationLoop(_e),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}const oM=new It,Ep=new pt;Ep.set(-1,0,0,0,1,0,0,0,1);function aM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,pp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,_,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),c(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,w):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),w=_.envMap,x=_.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ep),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lM(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const S=b.program;n.uniformBlockBinding(x,S)}function u(x,b){let S=r[x.id];S===void 0&&(g(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",_));const C=b.program;n.updateUBOMapping(x,C);const y=e.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function c(x){const b=h();x.__bindingPointIndex=b;const S=i.createBuffer(),C=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=r[x.id],S=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,T=S.length;y<T;y++){const R=S[y];if(Array.isArray(R))for(let U=0,k=R.length;U<k;U++)f(R[U],y,U,C);else f(R,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,S,C){if(v(x,b,S,C)===!0){const y=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let U=0;U<T.length;U++){const k=T[U],P=m(k);p(k,x.__data,R),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,b,S){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,S)}function v(x,b,S,C){const y=x.value,T=b+"_"+S;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{const R=C[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(x){const b=x.uniforms;let S=0;const C=16;for(let T=0,R=b.length;T<R;T++){const U=Array.isArray(b[T])?b[T]:[b[T]];for(let k=0,P=U.length;k<P;k++){const L=U[k],F=Array.isArray(L.value)?L.value:[L.value];for(let O=0,K=F.length;O<K;O++){const he=F[O],Q=m(he),oe=S%C,D=oe%Q.boundary,le=oe+D;S+=D,le!==0&&C-le<Q.storage&&(S+=C-le),L.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Q.storage}}}const y=S%C;return y>0&&(S+=C-y),x.__size=S,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){const b=x.target;b.removeEventListener("dispose",_);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:w}}const cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function uM(){return Vi===null&&(Vi=new ic(cM,16,16,us,wi),Vi.name="DFG_LUT",Vi.minFilter=un,Vi.magFilter=un,Vi.wrapS=Yi,Vi.wrapT=Yi,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class dM{constructor(e={}){const{canvas:t=uv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,g=new Set([$d,Wd,Vd]),m=new Set([Zn,Fi,ha,pa,Bd,Gd]),_=new Uint32Array(4),w=new Int32Array(4),x=new N;let b=null,S=null;const C=[],y=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1,k=null,P=null,L=null,F=null;this._outputColorSpace=Kn;let O=0,K=0,he=null,Q=-1,oe=null;const D=new Wt,le=new Wt;let te=null;const Me=new mt(0);let _e=0,Se=t.width,Y=t.height,ne=1,ye=null,ae=null;const ge=new Wt(0,0,Se,Y),$e=new Wt(0,0,Se,Y);let ft=!1;const je=new jd;let Ve=!1,ct=!1;const Xe=new It,vt=new N,vn=new Wt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function kt(){return he===null?ne:1}let H=n;function dn(A,G){return t.getContext(A,G)}let At,I,M,X,j,ee,be,Pe,re,ue,Ce,Ze,Ue,De,Je,st,ht,W,Le,ce,Ie,Ge,me;try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",ni,!1),H===null){const G="webgl2";if(H=dn(G,A),H===null)throw dn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",ni,!1),Rt("WebGLRenderer: "+A.message),A}function Qe(){At=new u1(H),At.init(),Ie=new tM(H,At),I=new e1(H,At,e,Ie),M=new Qb(H,At),I.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),P=H.createFramebuffer(),L=H.createFramebuffer(),F=H.createFramebuffer(),X=new h1(H),j=new Ob,ee=new eM(H,At,M,j,I,Ie,X),be=new c1(R),Pe=new mx(H),Ge=new Jy(H,Pe),re=new d1(H,Pe,X,Ge),ue=new m1(H,re,Pe,Ge,X),W=new p1(H,I,ee),Je=new t1(j),Ce=new zb(R,be,At,I,Ge,Je),Ze=new aM(R,j),Ue=new Gb,De=new qb(At),ht=new jy(R,be,M,ue,p,l),st=new Jb(R,ue,I),me=new lM(H,X,I,M),Le=new Qy(H,At,X),ce=new f1(H,At,X),X.programs=Ce.programs,R.capabilities=I,R.extensions=At,R.properties=j,R.renderLists=Ue,R.shadowMap=st,R.state=M,R.info=X}v!==Zn&&(T=new v1(v,t.width,t.height,a,r,s));const We=new sM(R,H);this.xr=We,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(Se,Y,!1))},this.getSize=function(A){return A.set(Se,Y)},this.setSize=function(A,G,J=!0){if(We.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=A,Y=G,t.width=Math.floor(A*ne),t.height=Math.floor(G*ne),J===!0&&(t.style.width=A+"px",t.style.height=G+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Se*ne,Y*ne).floor()},this.setDrawingBufferSize=function(A,G,J){Se=A,Y=G,ne=J,t.width=Math.floor(A*J),t.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(v===Zn){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,G,J,q){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,G,J,q),M.viewport(D.copy(ge).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy($e)},this.setScissor=function(A,G,J,q){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,G,J,q),M.scissor(le.copy($e).multiplyScalar(ne).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){M.setScissorTest(ft=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,J=!0){let q=0;if(A){let Z=!1;if(he!==null){const E=he.texture.format;Z=g.has(E)}if(Z){const E=he.texture.type,V=m.has(E),$=ht.getClearColor(),se=ht.getClearAlpha(),de=$.r,He=$.g,ot=$.b;V?(_[0]=de,_[1]=He,_[2]=ot,_[3]=se,H.clearBufferuiv(H.COLOR,0,_)):(w[0]=de,w[1]=He,w[2]=ot,w[3]=se,H.clearBufferiv(H.COLOR,0,w))}else q|=H.COLOR_BUFFER_BIT}G&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",ni,!1),ht.dispose(),Ue.dispose(),De.dispose(),j.dispose(),be.dispose(),ue.dispose(),Ge.dispose(),me.dispose(),Ce.dispose(),We.dispose(),We.removeEventListener("sessionstart",ve),We.removeEventListener("sessionend",Re),Ne.stop()};function Nt(A){A.preventDefault(),kl("WebGLRenderer: Context Lost."),U=!0}function Ct(){kl("WebGLRenderer: Context Restored."),U=!1;const A=X.autoReset,G=st.enabled,J=st.autoUpdate,q=st.needsUpdate,Z=st.type;Qe(),X.autoReset=A,st.enabled=G,st.autoUpdate=J,st.needsUpdate=q,st.type=Z}function ni(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const G=A.target;G.removeEventListener("dispose",Nn),Ra(G)}function Ra(A){fc(A),j.remove(A)}function fc(A){const G=j.get(A).programs;G!==void 0&&(G.forEach(function(J){Ce.releaseProgram(J)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,J,q,Z,E){G===null&&(G=$t);const V=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,$=Dn(A,G,J,q,Z);M.setMaterial(q,V);let se=J.index,de=1;if(q.wireframe===!0){if(se=re.getWireframeAttribute(J),se===void 0)return;de=2}const He=J.drawRange,ot=J.attributes.position;let Fe=He.start*de,it=(He.start+He.count)*de;E!==null&&(Fe=Math.max(Fe,E.start*de),it=Math.min(it,(E.start+E.count)*de)),se!==null?(Fe=Math.max(Fe,0),it=Math.min(it,se.count)):ot!=null&&(Fe=Math.max(Fe,0),it=Math.min(it,ot.count));const Tt=it-Fe;if(Tt<0||Tt===1/0)return;Ge.setup(Z,q,$,J,se);let lt,gt=Le;if(se!==null&&(lt=Pe.get(se),gt=ce,gt.setIndex(lt)),Z.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*kt()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(Z.isLine){let xt=q.linewidth;xt===void 0&&(xt=1),M.setLineWidth(xt*kt()),Z.isLineSegments?gt.setMode(H.LINES):Z.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else Z.isPoints?gt.setMode(H.POINTS):Z.isSprite&&gt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(At.get("WEBGL_multi_draw"))gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const xt=Z._multiDrawStarts,ke=Z._multiDrawCounts,Gt=Z._multiDrawCount,Mt=se?Pe.get(se).bytesPerElement:1,_n=j.get(q).currentProgram.getUniforms();for(let ln=0;ln<Gt;ln++)_n.setValue(H,"_gl_DrawID",ln),gt.render(xt[ln]/Mt,ke[ln])}else if(Z.isInstancedMesh)gt.renderInstances(Fe,Tt,Z.count);else if(J.isInstancedBufferGeometry){const xt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ke=Math.min(J.instanceCount,xt);gt.renderInstances(Fe,Tt,ke)}else gt.render(Fe,Tt)};function ie(A,G,J,q){k!==null&&A.isNodeMaterial&&k.setObject(q,A),Ve===!0&&Je.setState(A,J,!1),A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Xt(A,G,q),A.side=ls,A.needsUpdate=!0,Xt(A,G,q),A.side=si):Xt(A,G,q)}this.compile=function(A,G,J=null){J===null&&(J=A),k!==null&&k.renderStart(A,G,J),S=De.get(J),S.init(G),y.push(S),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),A!==J&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),ct=this.localClippingEnabled,Ve=Je.init(this.clippingPlanes,ct),Ve===!0&&Je.setGlobalState(this.clippingPlanes,G),k!==null&&st.render(S.state.shadowsArray,J,G);const q=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const E=Z.material;if(E)if(Array.isArray(E))for(let V=0;V<E.length;V++){const $=E[V];ie($,J,G,Z),q.add($)}else ie(E,J,G,Z),q.add(E)}),S=y.pop(),k!==null&&k.renderEnd(),q},this.compileAsync=function(A,G,J=null){const q=this.compile(A,G,J);return new Promise(Z=>{function E(){if(q.forEach(function(V){const se=j.get(V).currentProgram;(se===void 0||se.isReady())&&q.delete(V)}),q.size===0){Z(A);return}setTimeout(E,10)}At.get("KHR_parallel_shader_compile")!==null?E():setTimeout(E,10)})};let fe=null;function we(A){fe&&fe(A)}function ve(){Ne.stop()}function Re(){Ne.start()}const Ne=new yp;Ne.setAnimationLoop(we),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){fe=A,We.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},We.addEventListener("sessionstart",ve),We.addEventListener("sessionend",Re),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(A,G);const J=We.enabled===!0&&We.isPresenting===!0,q=T!==null&&(he===null||J)&&T.begin(R,he);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,he),S=De.get(A,y.length),S.init(G),S.state.textureUnits=ee.getTextureUnits(),y.push(S),Xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),je.setFromProjectionMatrix(Xe,Ki,G.reversedDepth),ct=this.localClippingEnabled,Ve=Je.init(this.clippingPlanes,ct),b=Ue.get(A,C.length),b.init(),C.push(b),We.enabled===!0&&We.isPresenting===!0){const V=R.xr.getDepthSensingMesh();V!==null&&Ke(V,G,-1/0,R.sortObjects)}Ke(A,G,0,R.sortObjects),b.finish(),k!==null&&k.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(ye,ae),Jt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Jt&&ht.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Je.beginShadows();const Z=S.state.shadowsArray;if(st.render(Z,A,G),Ve===!0&&Je.endShadows(),(q&&T.hasRenderPass())===!1){const V=b.opaque,$=b.transmissive;if(S.setupLights(),G.isArrayCamera){const se=G.cameras;if($.length>0)for(let de=0,He=se.length;de<He;de++){const ot=se[de];Ye(V,$,A,ot)}Jt&&ht.render(A);for(let de=0,He=se.length;de<He;de++){const ot=se[de];nt(b,A,ot,ot.viewport)}}else $.length>0&&Ye(V,$,A,G),Jt&&ht.render(A),nt(b,A,G)}he!==null&&K===0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he)),q&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,G),Ge.resetDefaultState(),Q=-1,oe=null,y.pop(),y.length>0?(S=y[y.length-1],ee.setTextureUnits(S.state.textureUnits),Ve===!0&&Je.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,k!==null&&k.renderEnd()};function Ke(A,G,J,q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(je)){q&&vn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Xe);const V=ue.update(A),$=A.material;$.visible&&b.push(A,V,$,J,vn.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(je))){const V=ue.update(A),$=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vn.copy(A.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),vn.copy(V.boundingSphere.center)),vn.applyMatrix4(A.matrixWorld).applyMatrix4(Xe)),Array.isArray($)){const se=V.groups;for(let de=0,He=se.length;de<He;de++){const ot=se[de],Fe=$[ot.materialIndex];Fe&&Fe.visible&&b.push(A,V,Fe,J,vn.z,ot,G)}}else $.visible&&b.push(A,V,$,J,vn.z,null,G)}}const E=A.children;for(let V=0,$=E.length;V<$;V++)Ke(E[V],G,J,q)}function nt(A,G,J,q){const{opaque:Z,transmissive:E,transparent:V}=A;S.setupLightsView(J),Ve===!0&&Je.setGlobalState(R.clippingPlanes,J),q&&M.viewport(D.copy(q)),Z.length>0&&xn(Z,G,J),E.length>0&&xn(E,G,J),V.length>0&&xn(V,G,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ye(A,G,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const Fe=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new oi(1,1,{generateMipmaps:!0,type:Fe?wi:Zn,minFilter:Lr,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const E=S.state.transmissionRenderTarget[q.id],V=q.viewport||D;E.setSize(V.z*R.transmissionResolutionScale,V.w*R.transmissionResolutionScale);const $=R.getRenderTarget(),se=R.getActiveCubeFace(),de=R.getActiveMipmapLevel();R.setRenderTarget(E),R.getClearColor(Me),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),Jt&&ht.render(J);const He=R.toneMapping;R.toneMapping=Zi;const ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),Ve===!0&&Je.setGlobalState(R.clippingPlanes,q),xn(A,J,q),ee.updateMultisampleRenderTarget(E),ee.updateRenderTargetMipmap(E),At.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let it=0,Tt=G.length;it<Tt;it++){const lt=G[it],{object:gt,geometry:xt,material:ke,group:Gt}=lt;if(ke.side===si&&gt.layers.test(q.layers)){const Mt=ke.side;ke.side=Jn,ke.needsUpdate=!0,en(gt,J,q,xt,ke,Gt),ke.side=Mt,ke.needsUpdate=!0,Fe=!0}}Fe===!0&&(ee.updateMultisampleRenderTarget(E),ee.updateRenderTargetMipmap(E))}R.setRenderTarget($,se,de),R.setClearColor(Me,_e),ot!==void 0&&(q.viewport=ot),R.toneMapping=He}function xn(A,G,J){const q=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,E=A.length;Z<E;Z++){const V=A[Z],{object:$,geometry:se,group:de}=V;let He=V.material;He.allowOverride===!0&&q!==null&&(He=q),$.layers.test(J.layers)&&en($,G,J,se,He,de)}}function en(A,G,J,q,Z,E){k!==null&&Z.isNodeMaterial&&k.setObject(A,Z),A.onBeforeRender(R,G,J,q,Z,E),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,G,J,q,A,E),Z.transparent===!0&&Z.side===si&&Z.forceSinglePass===!1?(Z.side=Jn,Z.needsUpdate=!0,R.renderBufferDirect(J,G,q,Z,A,E),Z.side=ls,Z.needsUpdate=!0,R.renderBufferDirect(J,G,q,Z,A,E),Z.side=si):R.renderBufferDirect(J,G,q,Z,A,E),A.onAfterRender(R,G,J,q,Z,E)}function Xt(A,G,J){G.isScene!==!0&&(G=$t);const q=j.get(A),Z=S.state.lights,E=S.state.shadowsArray,V=Z.state.version,$=Ce.getParameters(A,Z.state,E,G,J,S.state.lightProbeGridArray),se=Ce.getProgramCacheKey($);let de=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const He=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=be.get(A.envMap||q.environment,He),q.envMapRotation=q.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,de===void 0&&(A.addEventListener("dispose",Nn),de=new Map,q.programs=de);let ot=de.get(se);if(ot!==void 0){if(q.currentProgram===ot&&q.lightsStateVersion===V)return an(A,$),ot}else $.uniforms=Ce.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,J,$),A.onBeforeCompile($,R),ot=Ce.acquireProgram($,se),de.set(se,ot),q.uniforms=$.uniforms;const Fe=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=Je.uniform),an(A,$),q.needsLights=Gi(A),q.lightsStateVersion=V,q.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.sunLights.value=Z.state.sun,Fe.sunLightShadows.value=Z.state.sunShadow,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Fe.sunShadowCascade.value=Z.state.sunShadowCascade,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=ot,q.uniformsList=null,ot}function ai(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=gl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function an(A,G){const J=j.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function li(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let J=0,q=A.length;J<q;J++){const Z=A[J];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function Dn(A,G,J,q,Z){G.isScene!==!0&&(G=$t),ee.resetTextureUnits();const E=G.fog,V=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,$=he===null?R.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Et.workingColorSpace,se=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,de=be.get(q.envMap||V,se),He=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ot=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,Tt=!!J.morphAttributes.color;let lt=Zi;q.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(lt=R.toneMapping);const gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=gt!==void 0?gt.length:0,ke=j.get(q),Gt=S.state.lights;if(Ve===!0&&(ct===!0||A!==oe)){const Zt=A===oe&&q.id===Q;Je.setState(q,A,Zt)}let Mt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Gt.state.version||ke.outputColorSpace!==$||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==de||q.fog===!0&&ke.fog!==E||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Je.numPlanes||ke.numIntersection!==Je.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==ot||ke.morphTargets!==Fe||ke.morphNormals!==it||ke.morphColors!==Tt||ke.toneMapping!==lt||ke.morphTargetsCount!==xt||!!ke.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=q.version);let _n=ke.currentProgram;Mt===!0&&(_n=Xt(q,G,Z),k&&q.isNodeMaterial&&k.onUpdateProgram(q,_n,ke));let ln=!1,Ti=!1,Ms=!1;const Ht=_n.getUniforms(),yn=ke.uniforms;if(M.useProgram(_n.program)&&(ln=!0,Ti=!0,Ms=!0),q.id!==Q&&(Q=q.id,Ti=!0),ke.needsLights){const Zt=li(S.state.lightProbeGridArray,Z);ke.lightProbeGrid!==Zt&&(ke.lightProbeGrid=Zt,Ti=!0)}if(ln||oe!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(H,"projectionMatrix",A.projectionMatrix),Ht.setValue(H,"viewMatrix",A.matrixWorldInverse);const yr=Ht.map.cameraPosition;yr!==void 0&&yr.setValue(H,vt.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),oe!==A&&(oe=A,Ti=!0,Ms=!0)}if(ke.needsLights&&(Gt.state.sunShadowMap.length>0&&Ht.setValue(H,"sunShadowMap",Gt.state.sunShadowMap,ee),Gt.state.directionalShadowMap.length>0&&Ht.setValue(H,"directionalShadowMap",Gt.state.directionalShadowMap,ee),Gt.state.spotShadowMap.length>0&&Ht.setValue(H,"spotShadowMap",Gt.state.spotShadowMap,ee),Gt.state.pointShadowMap.length>0&&Ht.setValue(H,"pointShadowMap",Gt.state.pointShadowMap,ee)),Z.isSkinnedMesh){Ht.setOptional(H,Z,"bindMatrix"),Ht.setOptional(H,Z,"bindMatrixInverse");const Zt=Z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ht.setValue(H,"boneTexture",Zt.boneTexture,ee))}Z.isBatchedMesh&&(Ht.setOptional(H,Z,"batchingTexture"),Ht.setValue(H,"batchingTexture",Z._matricesTexture,ee),Ht.setOptional(H,Z,"batchingIdTexture"),Ht.setValue(H,"batchingIdTexture",Z._indirectTexture,ee),Ht.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ht.setValue(H,"batchingColorTexture",Z._colorsTexture,ee));const _r=J.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&W.update(Z,J,_n),(Ti||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Ht.setValue(H,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(yn.envMapIntensity.value=G.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=uM()),Ti){if(Ht.setValue(H,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&Bi(yn,Ms),E&&q.fog===!0&&Ze.refreshFogUniforms(yn,E),Ze.refreshMaterialUniforms(yn,q,ne,Y,S.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Zt=ke.lightProbeGrid;yn.probesSH.value=Zt.texture,yn.probesMin.value.copy(Zt.boundingBox.min),yn.probesMax.value.copy(Zt.boundingBox.max),yn.probesResolution.value.copy(Zt.resolution)}gl.upload(H,ai(ke),yn,ee)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(gl.upload(H,ai(ke),yn,ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ht.setValue(H,"center",Z.center),Ht.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Ht.setValue(H,"normalMatrix",Z.normalMatrix),Ht.setValue(H,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){const Zt=q.uniformsGroups;for(let yr=0,Ss=Zt.length;yr<Ss;yr++){const bf=Zt[yr];me.update(bf,_n),me.bind(bf,_n)}}return _n}function Bi(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Gi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(A,G,J){const q=j.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),j.get(A.texture).__webglTexture=G,j.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const J=j.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,J=0){he=A,O=G,K=J;let q=null,Z=!1,E=!1;if(A){const $=j.get(A);if($.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(H.FRAMEBUFFER,$.__webglFramebuffer),D.copy(A.viewport),le.copy(A.scissor),te=A.scissorTest,M.viewport(D),M.scissor(le),M.setScissorTest(te),Q=-1;return}else if($.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if($.__hasExternalTextures)ee.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if($.__boundDepthTexture!==He){if(He!==null&&j.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}const se=A.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(E=!0);const de=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(de[G])?q=de[G][J]:q=de[G],Z=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?q=j.get(A).__webglMultisampledFramebuffer:Array.isArray(de)?q=de[J]:q=de,D.copy(A.viewport),le.copy(A.scissor),te=A.scissorTest}else D.copy(ge).multiplyScalar(ne).floor(),le.copy($e).multiplyScalar(ne).floor(),te=ft;if(J!==0&&(q=P),M.bindFramebuffer(H.FRAMEBUFFER,q)&&M.drawBuffers(A,q),M.viewport(D),M.scissor(le),M.setScissorTest(te),Z){const $=j.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,$.__webglTexture,J)}else if(E){const $=G;for(let se=0;se<A.textures.length;se++){const de=j.get(A.textures[se]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+se,de.__webglTexture,J,$)}}else if(A!==null&&J!==0){const $=j.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$.__webglTexture,J)}Q=-1};function xr(A){const G=j.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=I.textureFormatReadable(A.format),G.__typeReadable=I.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,J,q,Z,E,V,$=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&V!==void 0&&(se=se[V]),se){M.bindFramebuffer(H.FRAMEBUFFER,se);try{const de=A.textures[$],He=de.format,ot=de.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+$);const Fe=xr(de);if(Fe.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-q&&J>=0&&J<=A.height-Z&&H.readPixels(G,J,q,Z,Ie.convert(He),Ie.convert(ot),E)}finally{const de=he!==null?j.get(he).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(A,G,J,q,Z,E,V,$=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&V!==void 0&&(se=se[V]),se)if(G>=0&&G<=A.width-q&&J>=0&&J<=A.height-Z){M.bindFramebuffer(H.FRAMEBUFFER,se);const de=A.textures[$],He=de.format,ot=de.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+$);const Fe=xr(de);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.bufferData(H.PIXEL_PACK_BUFFER,E.byteLength,H.STREAM_READ),H.readPixels(G,J,q,Z,Ie.convert(He),Ie.convert(ot),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Tt=he!==null?j.get(he).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,Tt);const lt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await dv(H,lt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,E),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(it),H.deleteSync(lt),E}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,J=0){const q=Math.pow(2,-J),Z=Math.floor(A.image.width*q),E=Math.floor(A.image.height*q),V=G!==null?G.x:0,$=G!==null?G.y:0;ee.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,V,$,Z,E),M.unbindTexture()},this.copyTextureToTexture=function(A,G,J=null,q=null,Z=0,E=0){let V,$,se,de,He,ot,Fe,it,Tt;const lt=A.isCompressedTexture?A.mipmaps[E]:A.image;if(J!==null)V=J.max.x-J.min.x,$=J.max.y-J.min.y,se=J.isBox3?J.max.z-J.min.z:1,de=J.min.x,He=J.min.y,ot=J.isBox3?J.min.z:0;else{const yn=Math.pow(2,-Z);V=Math.floor(lt.width*yn),$=Math.floor(lt.height*yn),A.isDataArrayTexture?se=lt.depth:A.isData3DTexture?se=Math.floor(lt.depth*yn):se=1,de=0,He=0,ot=0}q!==null?(Fe=q.x,it=q.y,Tt=q.z):(Fe=0,it=0,Tt=0);const gt=Ie.convert(G.format),xt=Ie.convert(G.type);let ke;G.isData3DTexture?(ee.setTexture3D(G,0),ke=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ee.setTexture2DArray(G,0),ke=H.TEXTURE_2D_ARRAY):(ee.setTexture2D(G,0),ke=H.TEXTURE_2D),M.activeTexture(H.TEXTURE0),M.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),M.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),M.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Gt=M.getParameter(H.UNPACK_ROW_LENGTH),Mt=M.getParameter(H.UNPACK_IMAGE_HEIGHT),_n=M.getParameter(H.UNPACK_SKIP_PIXELS),ln=M.getParameter(H.UNPACK_SKIP_ROWS),Ti=M.getParameter(H.UNPACK_SKIP_IMAGES);M.pixelStorei(H.UNPACK_ROW_LENGTH,lt.width),M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt.height),M.pixelStorei(H.UNPACK_SKIP_PIXELS,de),M.pixelStorei(H.UNPACK_SKIP_ROWS,He),M.pixelStorei(H.UNPACK_SKIP_IMAGES,ot);const Ms=A.isDataArrayTexture||A.isData3DTexture,Ht=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const yn=j.get(A),_r=j.get(G),Zt=j.get(yn.__renderTarget),yr=j.get(_r.__renderTarget);M.bindFramebuffer(H.READ_FRAMEBUFFER,Zt.__webglFramebuffer),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Ss=0;Ss<se;Ss++)Ms&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,j.get(A).__webglTexture,Z,ot+Ss),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,j.get(G).__webglTexture,E,Tt+Ss)),H.blitFramebuffer(de,He,V,$,Fe,it,V,$,H.DEPTH_BUFFER_BIT,H.NEAREST);M.bindFramebuffer(H.READ_FRAMEBUFFER,null),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||j.has(A)){const yn=j.get(A),_r=j.get(G);M.bindFramebuffer(H.READ_FRAMEBUFFER,L),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,F);for(let Zt=0;Zt<se;Zt++)Ms?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,Z,ot+Zt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,Z),Ht?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_r.__webglTexture,E,Tt+Zt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_r.__webglTexture,E),Z!==0?H.blitFramebuffer(de,He,V,$,Fe,it,V,$,H.COLOR_BUFFER_BIT,H.NEAREST):Ht?H.copyTexSubImage3D(ke,E,Fe,it,Tt+Zt,de,He,V,$):H.copyTexSubImage2D(ke,E,Fe,it,de,He,V,$);M.bindFramebuffer(H.READ_FRAMEBUFFER,null),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ht?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(ke,E,Fe,it,Tt,V,$,se,gt,xt,lt.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,E,Fe,it,Tt,V,$,se,gt,lt.data):H.texSubImage3D(ke,E,Fe,it,Tt,V,$,se,gt,xt,lt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,E,Fe,it,V,$,gt,xt,lt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,E,Fe,it,lt.width,lt.height,gt,lt.data):H.texSubImage2D(H.TEXTURE_2D,E,Fe,it,V,$,gt,xt,lt);M.pixelStorei(H.UNPACK_ROW_LENGTH,Gt),M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),M.pixelStorei(H.UNPACK_SKIP_PIXELS,_n),M.pixelStorei(H.UNPACK_SKIP_ROWS,ln),M.pixelStorei(H.UNPACK_SKIP_IMAGES,Ti),E===0&&G.generateMipmaps&&H.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){O=0,K=0,he=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const ji=`#include <common>
#include <logdepthbuf_pars_vertex>`,Ji="#include <logdepthbuf_vertex>",Qi="#include <logdepthbuf_pars_fragment>",er="#include <logdepthbuf_fragment>",hr=`
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
`,Qo=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function fM(i){const e=new jt;e.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const t=new Qt(e);t.frustumCulled=!1;const n=new nc;n.add(t);const r=new sc,s=i.extensions,o=s.has("EXT_color_buffer_float")||s.has("EXT_color_buffer_half_float")?wi:Zn,a={type:o,depthBuffer:!1,minFilter:un,magFilter:un};let l=null;const u=(T,R)=>new oi(T,R,{type:o,samples:_,depthBuffer:!0,depthTexture:new xo(T,R,Fi)}),c=[],h=6,d=()=>({value:new tt}),f=new zt({uniforms:{tSrc:{value:null},uTexel:d(),uPrefilter:{value:0},uThreshold:{value:1.3},uKnee:{value:.2}},vertexShader:Qo,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1}),p=new zt({uniforms:{tSrc:{value:null},uTexel:d(),uRadius:{value:1}},vertexShader:Qo,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,blending:hi,depthTest:!1,depthWrite:!1}),v={pos:new tt(.5,.5),vis:0,color:new mt("#ffe2b0")},g=new zt({uniforms:{tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:6e3},uFocus:{value:100},uDof:{value:0},tBloom:{value:null},uBloom:{value:.17},uExposure:{value:1},uTime:{value:0},uAspect:{value:1},uSun:{value:v.pos},uSunVis:{value:0},uSunColor:{value:v.color},uTexel:d(),uCA:{value:1},uGrain:{value:1}},vertexShader:Qo,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1});let m=new tt(1,1),_=4;function w(T,R,U){const k=Math.max(1,Math.round(T*U)),P=Math.max(1,Math.round(R*U));m.set(k,P),l?l.setSize(k,P):l=u(k,P);let L=Math.max(1,k>>1),F=Math.max(1,P>>1);for(let O=0;O<h;O++)c[O]?c[O].setSize(L,F):c[O]=new oi(L,F,a),L=Math.max(1,L>>1),F=Math.max(1,F>>1);g.uniforms.uAspect.value=T/R}function x(T){T!==_&&(_=T,l&&(l.dispose(),l=u(m.x,m.y)))}function b(T,R){t.material=T,i.setRenderTarget(R),i.render(n,r)}function S(T,R,U){g.uniforms.uNear.value=R.near,g.uniforms.uFar.value=R.far,i.setRenderTarget(l),i.clear(),i.render(T,R);let k=l.texture,P=m.x,L=m.y;for(let O=0;O<C;O++)f.uniforms.tSrc.value=k,f.uniforms.uTexel.value.set(1/P,1/L),f.uniforms.uPrefilter.value=O===0?1:0,b(f,c[O]),k=c[O].texture,P=c[O].width,L=c[O].height;for(let O=C-2;O>=0;O--)p.uniforms.tSrc.value=c[O+1].texture,p.uniforms.uTexel.value.set(1/c[O+1].width,1/c[O+1].height),i.autoClear=!1,b(p,c[O]),i.autoClear=!0;const F=g.uniforms;F.tScene.value=l.texture,F.tDepth.value=l.depthTexture,F.uTexel.value.set(1/m.x,1/m.y),F.tBloom.value=c[0].texture,F.uTime.value=U,F.uSunVis.value=v.vis,b(g,null)}let C=h;function y(T){C=T==="high"?h:4}return{setSize:w,setSamples:x,setLevel:y,render:S,flare:v,uniforms:g.uniforms}}const rl=[[[.1,.45,.55],[.55,.12,.4]],[[.65,.3,.08],[.35,.06,.08]],[[.2,.3,.75],[.45,.15,.6]],[[.15,.5,.4],[.6,.45,.15]],[[.6,.2,.25],[.15,.25,.6]],[[.4,.55,.7],[.25,.1,.35]]],hM=`
${hr}
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
}`;function pM(i,e){const t=e==="high"?1024:512,n=i.extensions,r=n.has("EXT_color_buffer_float")||n.has("EXT_color_buffer_half_float")?wi:Zn,s=new nf(t,{type:r,generateMipmaps:!1,minFilter:un,magFilter:un}),o=new _p(.1,100,s),a=new nc,l={uPole:{value:new N},uNebDir:{value:[new N,new N,new N]},uNebA:{value:[new N,new N,new N]},uNebB:{value:[new N,new N,new N]},uNebSize:{value:[0,0,0]},uGal:{value:[new N,new N,new N]},uSeed:{value:0},uRes:{value:t}};a.add(new Qt(new Hr(10,64,32),new zt({uniforms:l,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:hM,side:Jn,depthWrite:!1})));const u=new ju(i);let c=null,h=null;const d=e==="high"?9e3:5e3,f=new jt,p=new Float32Array(d*3),v=new Float32Array(d*3),g=new Float32Array(d);f.setAttribute("position",new gn(p,3)),f.setAttribute("color",new gn(v,3)),f.setAttribute("size",new gn(g,1));const m=new zt({uniforms:{uT:{value:0},uPR:{value:1}},vertexShader:`
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
      }`,blending:hi,depthTest:!1,depthWrite:!1}),_=new Jd(f,m);_.frustumCulled=!1,_.renderOrder=-100;function w(x=1){if(h===x)return;h=x;const b=Oi(x*7919+13),S=()=>{const k=b()*2-1,P=b()*Math.PI*2,L=Math.sqrt(1-k*k);return new N(Math.cos(P)*L,k,Math.sin(P)*L)};l.uPole.value.set(.3+b()*.4,.75+b()*.2,.3-b()*.6).normalize();const C=rl[Math.floor(b()*rl.length)],y=rl[Math.floor(b()*rl.length)],T=1;for(let k=0;k<3;k++){const P=k===1?y:C,L=b()<.4;l.uNebDir.value[k].copy(S()),l.uNebA.value[k].fromArray(L?P[1]:P[0]),l.uNebB.value[k].fromArray(L?P[0]:P[1]),l.uNebSize.value[k]=k<T?.3+b()*.2:0,l.uGal.value[k].copy(S()).multiplyScalar(.6+b()*1.2)}l.uSeed.value=Math.floor(b()*1e3),o.update(i,a),c&&c.dispose(),c=u.fromCubemap(s.texture);const R=l.uPole.value,U=new N;for(let k=0;k<d;k++){U.copy(S()),b()<.5&&U.addScaledVector(R,-U.dot(R)*(.75+b()*.25)).normalize(),p.set([U.x,U.y,U.z],k*3);const P=b()**7,L=b(),F=L<.18?[.7,.82,1]:L<.75?[1,.97,.93]:L<.94?[1,.84,.62]:[1,.62,.48],O=.12+b()*.12+P*3.5;v.set([F[0]*O,F[1]*O,F[2]*O],k*3),g[k]=P*2.2}f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0,f.attributes.size.needsUpdate=!0}return{stars:_,bake:w,get background(){return s.texture},get env(){return c?c.texture:null},update(x,b){m.uniforms.uT.value=x,m.uniforms.uPR.value=b}}}function mM(i,e){const t=new Ii,n={value:0},r=e==="high",s=new Qt(new Hr(i,96,64),new zt({uniforms:{uT:n,uTint:{value:new mt(1,1,1)}},vertexShader:`${ji}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${Ji}
        }`,fragmentShader:`${Qi}
        ${hr}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${er}
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
        }`}));t.add(s);const o=new Qt(new Aa(2,2),new zt({uniforms:{uT:n,uR:{value:i},uTint:s.material.uniforms.uTint},vertexShader:`${ji}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 2.2;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 2.2; // in star radii
          gl_Position = projectionMatrix * mv;
          ${Ji}
        }`,fragmentShader:`${Qi}
        ${hr}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${er}
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
        }`,blending:hi,transparent:!0,depthWrite:!1}));o.frustumCulled=!1,t.add(o);const a=[],l=d=>new zt({uniforms:{uT:n,uA:{value:0},uC:{value:new mt().setHSL(d,1,.55)},uTint:s.material.uniforms.uTint},vertexShader:`${ji}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${Ji}
      }`,fragmentShader:`${Qi}
      ${hr}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${er}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,blending:hi,transparent:!0,depthWrite:!1,side:si});{const d=Oi(7),f=new N(0,1,0);for(let p=0;p<9;p++){const v=.7+d()*1.3,g=new Qt(new tf(v,.07+d()*.08,8,40,Math.PI),l(.03+d()*.05)),m=()=>{const _=new N().randomDirection();g.position.copy(_).multiplyScalar(i*.97),g.quaternion.setFromUnitVectors(f,_),g.rotateY(Math.random()*Math.PI)};m(),a.push({m:g,place:m,phase:d()*40,period:25+d()*30,peak:.5+d()*.4,lastU:0}),t.add(g)}}const u=gM(),c=[];for(const[d,f,p]of[[15,"#ffc080",.22],[28,"#ff9a50",.09],[60,"#ff7a30",.03]]){const v=new Kv(new lp({map:u,color:f,opacity:p,blending:hi,depthWrite:!1,transparent:!0}));v.scale.setScalar(d),v.userData.base=d,c.push(v),t.add(v)}function h(d){n.value=d,c.forEach((f,p)=>f.scale.setScalar(f.userData.base*(1+.03*Math.sin(d*(.5+p*.23)+p))));for(const f of a){const p=(d+f.phase)%f.period/f.period;p<f.lastU&&f.place(),f.lastU=p,f.m.material.uniforms.uA.value=Math.sin(p*Math.PI)**2*f.peak,f.m.scale.setScalar(.6+p*.6)}}return{group:t,update:h,tint:s.material.uniforms.uTint.value}}function gM(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.5)"),t.addColorStop(.5,"rgba(255,255,255,0.1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new fp(i);return n.colorSpace=Kn,n}function Rh(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new jt;let u=0;for(let c=0;c<i.length;++c){const h=i[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,f,c),u+=f}}if(t){let c=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+c);c+=i[d].attributes.position.count}l.setIndex(h)}for(const c in s){const h=Ph(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[c].length;++v)f.push(o[c][v][d]);const p=Ph(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(p)}}}return l}function Ph(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){const c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new gn(o,t,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=c.count;d<f;d++)for(let p=0;p<t;p++){const v=c.getComponent(d,p);a.setComponent(d+h,p,v)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}function vM(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},u={},c=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,w=a.length;_<w;_++){const x=a[_],b=i.attributes[x];l[x]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);const S=i.morphAttributes[x];S&&(u[x]||(u[x]=[]),S.forEach((C,y)=>{const T=new C.array.constructor(C.count*C.itemSize);u[x][y]=new C.constructor(T,C.itemSize,C.normalized)}))}const f=e*.5,p=Math.log10(1/e),v=Math.pow(10,p),g=f*v;for(let _=0;_<s;_++){const w=n?n.getX(_):_;let x="";for(let b=0,S=a.length;b<S;b++){const C=a[b],y=i.getAttribute(C),T=y.itemSize;for(let R=0;R<T;R++)x+=`${Math.trunc(y[h[R]](w)*v+g)},`}if(x in t)c.push(t[x]);else{for(let b=0,S=a.length;b<S;b++){const C=a[b],y=i.getAttribute(C),T=i.morphAttributes[C],R=y.itemSize,U=l[C],k=u[C];for(let P=0;P<R;P++){const L=h[P],F=d[P];if(U[F](o,y[L](w)),T)for(let O=0,K=T.length;O<K;O++)k[O][F](o,T[O][L](w))}}t[x]=o,c.push(o),o++}}const m=i.clone();for(const _ in i.attributes){const w=l[_];if(m.setAttribute(_,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),_ in u)for(let x=0;x<u[_].length;x++){const b=u[_][x];m.morphAttributes[_][x]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return m.setIndex(c),m}const Lh={tShadow:{value:null},uShadowMat:{value:new It},uShadowOn:{value:0},uShadowRange:{value:1},uShadowTexel:{value:1/1024}},xM=`
vec4 shPack(float v) { vec3 e = fract(v * vec3(1.0, 255.0, 65025.0)); e -= e.yzz * vec3(1.0 / 255.0, 1.0 / 255.0, 0.0); return vec4(e, 1.0); }
float shUnpack(vec4 c) { return dot(c.rgb, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0)); }`,rf=`${xM}
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
}`;function sf(i){for(const e in Lh)i[e]=Lh[e]}const Ap={value:800},xe=0,Te=1,wt=2,Tn=3,En=4,An=5,pn=6,Dh=7,ds=8,_M=9;let Er=null;function yM(){if(Er)return Er;const i=256,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=Oi(17);t.fillStyle="#d8d8d8",t.fillRect(0,0,i,i);const r=(s,o,a,l,u)=>{if(u>4||a<18||l<18||u>1&&n()<.18){const c=196+n()*52|0;t.fillStyle=`rgb(${c},${c},${c+2})`,t.fillRect(s+1,o+1,a-2,l-2),t.strokeStyle="rgba(30,34,40,0.6)",t.lineWidth=1,t.strokeRect(s+.5,o+.5,a-1,l-1),t.strokeStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(s+1.5,o+l-1.5),t.lineTo(s+1.5,o+1.5),t.lineTo(s+a-1.5,o+1.5),t.stroke();const h=n();if(h<.15)t.fillStyle="rgba(40,44,52,0.45)",t.fillRect(s+a*.3,o+l*.3,a*.3,l*.25);else if(h<.25){t.fillStyle="rgba(30,32,36,0.5)";for(let d=0;d<5;d++)t.fillRect(s+3,o+3+d*3,a*.4,1)}else if(h<.33){t.fillStyle="rgba(30,30,30,0.45)";for(let d=3;d<a-3;d+=4)t.fillRect(s+d,o+2,1,1),t.fillRect(s+d,o+l-3,1,1)}else if(h<.36){t.save(),t.beginPath(),t.rect(s+2,o+l-7,a-4,5),t.clip();for(let d=-10;d<a;d+=6)t.fillStyle="rgba(190,140,30,0.7)",t.beginPath(),t.moveTo(s+d,o+l),t.lineTo(s+d+3,o+l),t.lineTo(s+d+8,o+l-8),t.lineTo(s+d+5,o+l-8),t.fill();t.restore()}return}if(a>l){const c=a*(.3+n()*.4)|0;r(s,o,c,l,u+1),r(s+c,o,a-c,l,u+1)}else{const c=l*(.3+n()*.4)|0;r(s,o,a,c,u+1),r(s,o+c,a,l-c,u+1)}};r(0,0,i,i,0);for(let s=0;s<90;s++)t.fillStyle=`rgba(20,20,26,${.03+n()*.06})`,t.fillRect(n()*i,n()*i,1+n()*14,1);for(let s=0;s<1200;s++)t.fillStyle=n()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",t.fillRect(n()*i,n()*i,1,1);return Er=new fp(e),Er.colorSpace=Kn,Er.wrapS=Er.wrapT=fa,Er.anisotropy=4,Er}const sl=new N(0,1,0);function mn(i){const e=[],t=Oi(i),n=Math.PI/2,r=(l,u,c=1)=>(l.userData.kind=u,l.userData.tint=c,e.push(l),l),s=(l,u)=>(l.userData.lo=u,l),o=(l,u,c,h,d=.42)=>{const f=[];for(let p=0;p<=c;p++){const v=p/c;f.push(new tt(l*(d+(1-d)*Math.pow(v,h)),-v*u))}return f},a={r:t,add:(l,u=xe,c=1)=>r(l,u,c),box:(l,u,c,h=0,d=0,f=0,p=xe,v)=>r(new On(l,u,c).translate(h,d,f),p,v),cyl:(l,u,c,h,d=xe,f=12,p=0,v=0,g)=>s(r(new Yn(l,u,c,f).rotateX(n).translate(p,v,h),d,g),f>6&&(()=>new Yn(l,u,c,6).rotateX(n).translate(p,v,h))),oct:(l,u,c,h,d=1,f=0,p=0,v=xe,g)=>r(new Yn(.5*d,.5,c,8).rotateY(Math.PI/8).rotateX(n).scale(l,u,1).translate(f,p,h),v,g),wedge:(l,u,c,h=0,d=0,f=0,p=1,v=1,g=xe,m,_=0,w=0)=>{const x=new On(l,u,c),b=x.attributes.position;for(let S=0;S<b.count;S++)b.getZ(S)>0&&b.setXY(S,b.getX(S)*p+_,b.getY(S)*v+w);return r(x.translate(h,d,f),g,m)},sphere:(l,u,c,h,d=xe,f,p=10)=>s(r(new Hr(l,p,Math.max(6,p*.6|0)).translate(u,c,h),d,f),()=>new Hr(l,6,4).translate(u,c,h)),tank:(l,u,c,h,d,f=xe,p)=>s(r(new zl(l,u,2,8).rotateX(n).translate(c,h,d),f,p),()=>new zl(l,u,1,6).rotateX(n).translate(c,h,d)),boom:(l,u,c,h,d,f=.004,p=Te,v)=>{const g=new N(...h).normalize(),m=new On(f,d,f).translate(0,d/2,0);return m.applyQuaternion(new jn().setFromUnitVectors(sl,g)).translate(l,u,c),r(m,p,v),[l+g.x*d,u+g.y*d,c+g.z*d]},dish:(l,u,c,h,d,f=xe)=>{const p=new N(...d).normalize(),v=new jn().setFromUnitVectors(sl,p);r(new Yn(l,l*.14,l*.32,18).translate(0,l*.16,0).applyQuaternion(v).translate(u,c,h),f,1.05),a.boom(u,c,h,d,l*.75,Math.max(.002,l*.06))},radiator:(l,u,c,h,d,f,p=3,v=.003,g=ds)=>{const m=d*.035,_=(d-m*(p-1))/p;for(let x=0;x<p;x++){const b=c-d/2+_/2+x*(_+m);r(new On(h,v,_).translate(h/2,0,0).rotateZ(f).translate(l,u,b),g,(g===ds?.92:.55)+t()*.14),a.strut(l+Math.cos(f)*h,u+Math.sin(f)*h,b-_/2,l+Math.cos(f)*h,u+Math.sin(f)*h,b+_/2,v*1.8,Te,.7)}if(a.cyl(v*1.5,v*1.5,d*1.04,c,xe,6,l,u,.75),Math.hypot(l,u)>1e-4)for(const x of[-.42,.42])a.pipe(l,u,c+x*d,l*.55,u*.55,c+x*d*1.1,v*.9,Te);return[l+Math.cos(f)*h,u+Math.sin(f)*h]},strut:(l,u,c,h,d,f,p=.003,v=Te,g)=>{const m=new N(h-l,d-u,f-c),_=m.length();if(_<1e-6)return;const w=new Yn(p*.62,p*.62,_,3,1,!0).translate(0,_/2,0);w.applyQuaternion(new jn().setFromUnitVectors(sl,m.normalize())).translate(l,u,c),r(w,v,g)},pipe:(l,u,c,h,d,f,p=.0022,v=xe)=>{const g=new N(h-l,d-u,f-c),m=g.length();if(m<1e-6)return;const _=new Yn(p,p,m,4,1,!0).translate(0,m/2,0);_.applyQuaternion(new jn().setFromUnitVectors(sl,g.normalize())).translate(l,u,c),r(_,v,.8)},truss3:(l,u,c,h,d,f,p=.004,v=0,g=Te)=>{const m=[0,1,2].map(w=>{const x=v+Math.PI/2+w*2*Math.PI/3;return[l+Math.cos(x)*d,u+Math.sin(x)*d]});for(const[w,x]of m)a.strut(w,x,c,w,x,h,p,g);const _=(h-c)/f;for(let w=0;w<=f;w++){const x=c+w*_;for(let b=0;b<3;b++)a.strut(m[b][0],m[b][1],x,m[(b+1)%3][0],m[(b+1)%3][1],x,p*.8,g);if(w===f)break;for(let b=0;b<3;b++){const[S,C]=w%2?[m[b],m[(b+1)%3]]:[m[(b+1)%3],m[b]];a.strut(S[0],S[1],x,C[0],C[1],x+_,p*.7,g,.85)}}},frame:(l,u,c,h,d,f,p=.003,v=Te)=>{const g=h-l/2,m=h+l/2,_=d-u/2,w=d+u/2,x=f-c/2,b=f+c/2;for(const S of[_,w])for(const C of[x,b])a.strut(g,S,C,m,S,C,p,v);for(const S of[g,m])for(const C of[x,b])a.strut(S,_,C,S,w,C,p,v);for(const S of[g,m])for(const C of[_,w])a.strut(S,C,x,S,C,b,p,v)},strapped:(l,u,c,h,d,f=!1,p=1)=>{a.tank(l,u,c,h,d,xe,p);const v=(g,m,_,w,x)=>r(new Yn(g,g,m,10,1,!0).rotateX(n).translate(c,h,_),w,x);for(const g of[-.32,.32])v(l*1.06,l*.16,d+g*u,Te,.8);f&&v(l*1.04,u*.3,d,wt,1)},collar:(l,u,c=0,h=0,d=1)=>{a.cyl(l*.85,l*.85,.014,u,xe,12,c,h,.9),a.cyl(l*1.25,l*1.25,.004,u+d*.007,Te,14,c,h)},engine:(l,u,c,h,d,f=6)=>{a.bell(l,u,c);for(let p=0;p<f;p++){const v=p/f*Math.PI*2+.3;a.strut(Math.cos(v)*h,Math.sin(v)*h,d,Math.cos(v)*l*.5,Math.sin(v)*l*.5,u-c*.12,.004,Te,.8)}a.cyl(h*1.05,h*1.05,.008,d,Te,14)},solar:(l,u,c,h,d,f,p=.003)=>{r(new On(h,p,d).translate(h/2,0,0).rotateZ(f).translate(l,u,c),_M,1),r(new On(h,p*1.4,p*1.4).translate(h/2,0,0).rotateZ(f).translate(l,u,c),Te,.7),r(new On(p*1.4,p*1.4,d).translate(h,0,0).rotateZ(f).translate(l,u,c),Te,.7)},truss:(l,u,c,h,d,f,p=.004,v=Te)=>{const g=(h-c)/f;for(const m of[-1,1])for(const _ of[-1,1])a.strut(l+m*d/2,u+_*d/2,c,l+m*d/2,u+_*d/2,h,p,v);for(let m=0;m<=f;m++){const _=c+m*g;for(const x of[-1,1])a.strut(l-d/2,u+x*d/2,_,l+d/2,u+x*d/2,_,p,v),a.strut(l+x*d/2,u-d/2,_,l+x*d/2,u+d/2,_,p,v);if(m===f)break;const w=m%2?1:-1;for(const x of[-1,1])a.strut(l+x*d/2,u-w*x*d/2,_,l+x*d/2,u+w*x*d/2,_+g,p*.8,v,.85),a.strut(l-w*x*d/2,u+x*d/2,_,l+w*x*d/2,u+x*d/2,_+g,p*.8,v,.85)}},shield:(l,u)=>r(new Yn(l,l*.62,.014,18).rotateX(n).translate(0,0,u),Te,.75),turret:(l,u,c,h=1,d=1)=>{a.cyl(.017*d,.02*d,.01*d,c,Te,10,l,u),a.box(.026*d,.012*d*h,.03*d,l,u+.008*d*h,c,xe,.85);for(const f of[-.005,.005])a.box(.004*d,.004*d,.06*d,l+f*d,u+.01*d*h,c+.04*d,Te,.6)},cells:(l,u,c,h,d,f=.011)=>{for(let p=0;p<h;p++)for(let v=0;v<d;v++)a.box(f*.72,.002,f*.72,l+(p-(h-1)/2)*f,u,c+(v-(d-1)/2)*f,Te,.45+t()*.3)},rcs:(l,u,c,h,d)=>{a.box(.011,.011,.014,l,u,c,Te,.8),a.box(.004,.004,.004,l+h*.0075,u+d*.0075,c,Te,.5),a.box(.004,.004,.004,l,u,c+.009,Te,.5)},hoop:(l,u,c,h,d=0,f=0,p=0,v=.004,g=xe)=>{for(let m=0;m<h;m++){const _=m/h*Math.PI*2;a.add(new On(u,2*Math.PI*l/h*1.02,c).rotateZ(_).translate(Math.cos(_)*l,Math.sin(_)*l,d),m%9===4?wt:g,.9+t()*.2),v&&m%2===0&&a.add(new On(v*.5,2*Math.PI*l/h*.55,c*.3).rotateZ(_).translate(Math.cos(_)*(l-u/2-v*.2),Math.sin(_)*(l-u/2-v*.2),d+(t()-.5)*c*.4),Tn)}for(let m=0;m<f;m++){const _=m/f*Math.PI*2+.3;a.add(new Yn(c*.12,c*.12,l-u/2-p,8).translate(0,p+(l-u/2-p)/2,0).rotateZ(_).translate(0,0,d),Te)}},bell:(l,u,c=.16)=>{s(r(new Js(o(l,c,8,1.6),20).rotateX(n).translate(0,0,u),Te,.7),()=>new Js(o(l,c,3,1.6),10).rotateX(n).translate(0,0,u)),s(r(new Yn(l*.4,l*.4,.004,16).rotateX(n).translate(0,0,u-.012),Dh),()=>new Yn(l*.4,l*.4,.004,8).rotateX(n).translate(0,0,u-.012)),a.nozzle===void 0&&(a.nozzle=u-c-.01)},bell2:(l,u,c,h,d=.05)=>{const f=p=>o(l,d,p,1.5,.45);s(r(new Js(f(6),12).rotateX(n).translate(u,c,h),Te,.65),()=>new Js(f(2),8).rotateX(n).translate(u,c,h))},greeble:(l,u,c,h,d,f,p,v="tbs")=>{for(let g=0;g<p;g++){const m=v[Math.floor(t()*v.length)],_=(.1+t()*.25)*l,w=(.08+t()*.3)*c,x=.004+t()*.012,b=h+(t()-.5)*(l-_),S=f+(t()-.5)*(c-w),C=t()<.6?Te:xe;if(m==="t")a.box(_,x,w,b,d+u/2+x/2,S,C);else if(m==="b")a.box(_,x,w,b,d-u/2-x/2,S,C);else{const y=t()<.5?-1:1,T=d+(t()-.5)*(u-_*.6);a.box(x,Math.min(_,u*.4),w,h+y*(l/2+x/2),T,S,C)}}},pdc:(l,u,c,h=1)=>{a.cyl(.011,.013,.008,c,Te,8,l,u),a.box(.014,.01*h,.014,l,u+.006*h,c,Te,.9),a.box(.003,.003,.03,l-.003,u+.009*h,c+.016,Te,.6),a.box(.003,.003,.03,l+.003,u+.009*h,c+.016,Te,.6)},light:(l,u,c,h,d=.008)=>a.box(d,d,d,l,u,c,h),windows:(l,u,c,h,d,f=[-1,1])=>{for(let p=0;p<d;p++){const v=c+(h-c)*p/Math.max(1,d-1);for(const g of f)a.box(.002,.006,.01,g*l,u,v,Tn)}},build(l=1.35,u=7,c=0,h=!1){const d=[],f=[],p=(g,m,_)=>{const w=g.index?g.toNonIndexed():g;w.deleteAttribute("uv");const x=w.attributes.position.count;w.setAttribute("kind",new gn(new Float32Array(x).fill(m),1)),w.setAttribute("tint",new gn(new Float32Array(x).fill(_),1)),w.computeVertexNormals();const b=w.attributes.position,S=w.attributes.normal,C=new Float32Array(x*2);for(let y=0;y<x;y++){const T=Math.abs(S.getX(y)),R=Math.abs(S.getY(y)),U=Math.abs(S.getZ(y)),k=b.getX(y),P=b.getY(y),L=b.getZ(y);T>=R&&T>=U?(C[y*2]=L*u,C[y*2+1]=P*u):R>=U?(C[y*2]=k*u,C[y*2+1]=L*u):(C[y*2]=k*u,C[y*2+1]=P*u)}return w.setAttribute("uv",new gn(C,2)),w};for(const g of e){const m=g.userData.kind,_=g.userData.tint*(.9+t()*.2),w=p(g,m,_);d.push(w),c&&(w.computeBoundingSphere(),(w.boundingSphere.radius>=c||m>=Tn&&m<=Dh)&&f.push(h&&g.userData.lo?p(g.userData.lo(),m,_):w))}const v=Rh(d);if(v.scale(l,l,1),v.computeBoundingSphere(),v.userData.nozzle=a.nozzle??0,c){const g=Rh(f);g.scale(l,l,1),g.computeBoundingSphere(),v.userData.coarse=g}return v}};return a}const bM=["concord","boreal","holds"],Ih=["corvette","frigate","escort","battleship","tender","freighter"],$c=(i,e)=>{const t=Math.max(0,bM.indexOf(i)),n=Ih.indexOf(e);return t*Ih.length+(n<0?1:n)},MM=.72,SM=[.55,1,.9,1.9,1.25,1.4],wM=[.02,.034,.034,.05,.045,.04],zo=Math.PI*2;function Ol(i,e,t,n,r=1){i.sphere(.016*r,e,t,n,Te,.95,8);const s=Math.hypot(e,t)||1,o=e/s*.012*r,a=t/s*.012*r;for(const l of[-1,1])i.box(.0035*r,.0035*r,.036*r,e+o-l*a*.3,t+a+l*o*.3,n+.02*r,Te,.6)}function ea(i,e,t,n,r,s,o=.008,a=.07,l=xe){const u=o*2.5;i.box(r*u+o,s*u+o,a,e,t,n,l,.85);for(let c=0;c<r;c++)for(let h=0;h<s;h++)i.cyl(o,o,.006,n+a/2+.002,Te,8,e+(c-(r-1)/2)*u,t+(h-(s-1)/2)*u,.4)}function Hs(i,e,t,n,r,s,o,a,l=4,u=.004){const c=r-n,h=c*.03,d=(c-h*(l-1))/l,f=Math.cos(a),p=Math.sin(a);for(let v=0;v<l;v++){const g=s+(o-s)*((v+.5)/l),m=n+d/2+v*(d+h);i.add(new On(g,u,d).translate(g/2,0,0).rotateZ(a).translate(e,t,m),ds,.92+i.r()*.14)}i.strut(e+f*s,t+p*s,n,e+f*o,t+p*o,r,u*1.6,Te,.7),i.cyl(u*1.4,u*1.4,c*1.03,(n+r)/2,xe,6,e,t,.75)}function ar(i,e,t,n,r,s,o,a=3,l=-1,u=.004){const c=s*.05,h=(s-c*(a-1))/a;for(let d=0;d<a;d++){const f=n-s/2+h/2+d*(h+c);if(d===l){i.frame(r*.9,u,h,e+Math.cos(o)*r*.45,t+Math.sin(o)*r*.45,f,u*.8);continue}const p=r*(.78+i.r()*.3);i.add(new On(p,u,h).translate(p/2,0,0).rotateZ(o).translate(e,t,f),i.r()<.3?Te:ds,.7+i.r()*.35)}i.cyl(u*1.5,u*1.5,s*1.05,n,Te,6,e,t,.8)}function Vs(i,e,t,n,r,s,o=0){i.bell(r,0,s),i.box(e,t,n,0,0,n/2+.004,xe,.85),i.box(e*.8,t*.8,.012,0,0,0,Te,.7);const a=s*.34;for(const l of[-1,1])i.box(e,.008,a,0,l*(t/2-.004),-a/2+.004,xe,.8),i.box(.008,t,a,l*(e/2-.004),0,-a/2+.004,xe,.8),o&&(i.box(o,.012,n*.9,l*(e/2+o/2),0,n/2,ds,.95),i.box(.008,.02,n*.94,l*(e/2+o),0,n/2,Te,.8));return i.box(e*1.08,t*1.08,.012,0,0,n+.012,Te,.75),n+.02}function Ws(i,e,t,n,r,s,o){i.wedge(e,t,n,0,0,r+n/2,s,o,xe,.95);const a=.1,l=.86,u=t/2*(1+(o-1)*a),c=t/2*(1+(o-1)*l),h=e*(1+(s-1)*a)*.66,d=e*(1+(s-1)*l)*.66;i.wedge(h,.006,n*(l-a),0,u+.002,r+n*(a+l)/2,d/h,1,wt,1,0,c-u)}function $s(i,e,t,n,r,s=.72){const o=r+n/2;i.box(e,t,n,0,0,o),i.box(e*s,.012,n*.9,0,t/2+.004,o,wt),i.box(e*s,.012,n*.9,0,-t/2-.004,o,xe,.8);for(const a of[-1,1])i.box(.012,t*.66,n*.84,a*(e/2+.004),0,o,xe,.88)}function TM(i){const e=[];{const t=mn(101),n=Vs(t,.086,.06,.05,.034,.075);$s(t,.092,.056,.14,n,.78),Ws(t,.092,.056,.14,n+.14,.18,.3),t.box(.05,.004,.05,0,-.04,n+.04,ds,.9),t.box(.03,.012,.03,0,.042,n+.05,xe,.9),t.box(.024,.005,.003,0,.044,n+.066,Tn),t.pdc(0,.04,n+.115),t.cyl(.006,.006,.03,n+.29,Te,6);for(const r of[-1,1])t.rcs(r*.052,0,n+.125,r,0),t.rcs(r*.049,0,n+.01,r,0);t.light(-.05,.02,n+.07,En),t.light(.05,.02,n+.07,An),t.light(0,-.04,n+.1,pn),e.push(i(t,0))}{const t=mn(103),n=Vs(t,.13,.1,.09,.05,.11,.05);t.box(.06,.06,.1,0,0,n+.05,Te,.9);for(const s of[-1,1])t.tank(.026,.045,s*.054,0,n+.05,xe,1.05),t.box(.07,.012,.02,s*.04,0,n+.05,Te,.8);const r=n+.1;$s(t,.15,.09,.25,r),Ws(t,.15,.09,.14,r+.25,.28,.3);for(const s of[-1,1])ea(t,s*.105,0,r+.185,2,2,.0085,.09);t.box(.05,.022,.05,0,.066,r+.05,xe,.9),t.box(.04,.006,.003,0,.07,r+.076,Tn),t.pdc(0,.06,r+.19),t.pdc(0,-.06,r+.09,-1),t.cyl(.007,.007,.04,r+.4,Te,6);for(const s of[-1,1])t.rcs(s*.085,.03,r+.02,s,0),t.rcs(s*.07,0,n+.02-.03,s,0),t.windows(.0835,.02,r+.06,r+.12,3,[s]);t.light(-.09,0,r+.1,En),t.light(.09,0,r+.1,An),t.light(0,.082,r+.05,pn),e.push(i(t,1))}{const t=mn(107),n=Vs(t,.17,.12,.09,.052,.1,.04);$s(t,.2,.13,.3,n,.5),Ws(t,.2,.13,.1,n+.3,.6,.55);for(const r of[.05,.15,.25])for(const[s,o]of[[.075,.075],[-.075,.075],[.075,-.075],[-.075,-.075],[.115,0],[-.115,0]])t.box(.042,.042,.05,s*.94,o*.94,n+r,xe,.82),Ol(t,s*1.08,o*1.08,n+r,1.35);t.box(.012,.04,.012,0,.09,n+.2,Te),t.box(.07,.034,.006,0,.12,n+.2,xe,.9),t.box(.05,.006,.003,0,.03,n+.4,Tn);for(const r of[-1,1])t.rcs(r*.09,.05,n+.01,r,0),t.rcs(r*.07,-.03,n+.36,r,0);t.light(-.11,.03,n+.2,En),t.light(.11,.03,n+.2,An),t.light(0,.14,n+.2,pn),e.push(i(t,2))}{const t=mn(109),n=Vs(t,.28,.17,.15,.08,.17);for(const o of[-1,1])t.bell2(.04,o*.1,0,0,.08);t.box(.2,.15,.3,0,0,n+.15),t.box(.14,.012,.27,0,.079,n+.15,xe,.85);for(const o of[-1,1])for(let a=0;a<3;a++)t.box(.075,.014,.08,o*.137,0,n+.05+a*.1,ds,.95),t.box(.085,.05,.012,o*.14,0,n+.004+a*.1,xe,.82);const r=n+.3;$s(t,.3,.17,.42,r,.7),t.box(.12,.014,.26,0,.104,r+.2,xe,.9),t.box(.07,.03,.07,0,.125,r+.1,xe,.92),t.box(.06,.007,.003,0,.13,r+.136,Tn);for(const o of[-1,1])for(let a=0;a<3;a++){t.box(.05,.07,.085,o*.18,0,r+.075+a*.135,xe,.9);for(const l of[-1,1])t.box(.007,.007,.08,o*.19,l*.015,r+.14+a*.135,Te,.6)}const s=r+.42;$s(t,.2,.14,.16,s,.7),Ws(t,.2,.14,.15,s+.16,.3,.35);for(const o of[-1,1]){t.box(.046,.06,.44,o*.128,0,s+.19,xe,.8),t.box(.05,.016,.44,o*.128,0,s+.2,Te,.55);for(let a=0;a<4;a++)t.box(.058,.072,.02,o*.128,0,s+.05+a*.115,Te,.85);t.box(.06,.03,.03,o*.09,0,s+.2,Te,.8)}t.turret(0,.112,r+.3,1,1.6),t.turret(0,.085,s+.08,1,1.4),t.turret(0,-.1,r+.2,-1,1.6),t.cells(.07,.1,r+.33,3,5,.014),t.cells(-.07,.1,r+.33,3,5,.014);for(const[o,a,l]of[[.11,.09,.02],[-.11,.09,.02],[.11,-.09,.4],[-.11,-.09,.4]])t.pdc(o,a,r+l,Math.sign(a));for(const o of[-1,1])t.rcs(o*.158,.06,r+.4,o,0),t.rcs(o*.106,.05,n+.02,o,0),t.windows(.1035,.03,s+.04,s+.12,4,[o]);t.light(-.16,.07,r+.2,En),t.light(.16,.07,r+.2,An),t.light(0,.145,r+.1,pn),e.push(i(t,3))}{const t=mn(113),n=Vs(t,.15,.12,.09,.055,.11,.045),r=n+.2;for(const u of[-1,1])for(const c of[-1,1])t.tank(.064,.24,u*.068,c*.068,r,xe,1.05);t.box(.05,.05,.4,0,0,r,Te,.85),t.box(.19,.012,.26,0,.134,r,wt),t.box(.19,.012,.26,0,-.134,r,xe,.8);for(const u of[-.11,.11])t.box(.28,.28,.014,0,0,r+u,Te,.8);const s=n+.4;$s(t,.14,.1,.15,s),Ws(t,.14,.1,.07,s+.15,.55,.5),t.box(.04,.04,.04,.085,.01,s+.05,Te,.8);const[o,a,l]=t.boom(.085,.01,s+.05,[1,.12,.5],.22,.013,xe);t.box(.03,.03,.04,o,a,l,Te,.8),t.cyl(.006,.008,.07,l+.05,xe,6,o,a),t.box(.04,.006,.003,0,.03,s+.2,Tn);for(const u of[-1,1])t.rcs(u*.08,0,s+.13,u,0),t.rcs(u*.085,0,n-.01,u,0);t.light(-.14,0,r,En),t.light(.14,0,r,An),t.light(o,a+.02,l,pn),e.push(i(t,4))}{const t=mn(127),n=Vs(t,.13,.1,.08,.048,.1,.04);t.box(.045,.05,.68,0,0,n+.34,Te,.9);for(let s=0;s<6;s++)for(const o of[-1,1])t.box(.078,.1,.098,o*.064,0,n+.06+s*.111,(s+(o>0?1:0))%3===1?wt:xe,.78+t.r()*.3);t.box(.05,.008,.66,0,.056,n+.34,xe,.85);const r=n+.68;t.box(.12,.09,.1,0,0,r+.05),t.box(.09,.01,.09,0,.049,r+.05,wt),Ws(t,.12,.09,.06,r+.1,.55,.5),t.box(.04,.006,.003,0,.028,r+.16,Tn);for(const s of[-1,1])t.rcs(s*.066,0,r+.08,s,0),t.rcs(s*.07,.03,n-.01,s,0);t.light(-.105,0,n+.34,En),t.light(.105,0,n+.34,An),t.light(0,.062,n+.5,pn),e.push(i(t,5))}return e}function Xs(i,e,t,n,r){return i.engine(e,0,t,n*.9,.012,8),i.cyl(n*.85,n,r,.016+r/2,Te,12),i.shield(n*1.55,.03+r),i.cyl(n*1.62,n*1.62,.016,.046+r,wt,14),.04+r}function ol(i,e,t,n){i.tank(e,t,0,0,n,xe,1.05),i.cyl(e*1.05,e*1.05,t*.9,n,wt,14),i.box(e*1.1,.005,.004,0,e*.75,n+t/2+e*.62,Tn)}function EM(i){const e=[];{const t=mn(131),n=Xs(t,.046,.11,.02,.03);t.cyl(.008,.008,.13,n+.065,Te,6);for(const r of[-1,1])t.sphere(.028,r*.031,0,n+.035,wt,1,10),Hs(t,r*.006,0,n+.07,n+.115,.03,.014,r>0?0:Math.PI,2,.003);ol(t,.026,.04,n+.16),t.boom(0,0,n+.2,[0,0,1],.04,.004),t.box(.01,.01,.012,0,0,n+.235,Te);for(const r of[-1,1])t.boom(0,0,n+.125,[r,0,0],.03,.003),t.rcs(r*.03,0,n+.125,r,0);t.light(-.03,.008,n+.125,En),t.light(.03,.008,n+.125,An),t.light(0,.03,n+.16,pn),e.push(i(t,0))}{const t=mn(137),n=Xs(t,.075,.17,.034,.05);t.truss3(0,0,n,n+.35,.028,6,.004);for(const r of[.45,Math.PI-.45,Math.PI+.45,-.45])Hs(t,Math.cos(r)*.02,Math.sin(r)*.02,n+.01,n+.24,.15,.04,r,4);for(const r of[-1,1])t.sphere(.038,r*.05,0,n+.295,xe,1.05,12),t.cyl(.0392,.0392,.04,n+.295,wt,12,r*.05,0);t.cyl(.05,.05,.012,n+.35,Te,12);for(let r=0;r<6;r++){const s=r/6*zo,o=Math.cos(s)*.037,a=Math.sin(s)*.037;t.cyl(.012,.012,.085,n+.395,xe,8,o,a,.85),t.cyl(.009,.009,.004,n+.439,Te,8,o,a,.4)}ol(t,.032,.05,n+.485),t.boom(0,0,n+.54,[0,0,1],.05,.004),t.dish(.03,0,.03,n+.33,[.3,1,.5]),t.pdc(0,.034,n+.47);for(const r of[-1,1])t.boom(0,0,n+.44,[r,0,0],.062,.004),t.rcs(r*.062,0,n+.44,r,0),t.rcs(r*.05,0,n-.02,r,0);t.light(-.066,.008,n+.44,En),t.light(.066,.008,n+.44,An),t.light(0,.036,n+.5,pn),e.push(i(t,1))}{const t=mn(139),n=Xs(t,.07,.15,.034,.045);t.truss3(0,0,n,n+.27,.03,4,.0045);for(const r of[0,Math.PI])Hs(t,Math.cos(r)*.025,0,n+.01,n+.13,.11,.05,r,3);for(const[r,s]of[[.17,Math.PI/4],[.25,0]])for(let o=0;o<4;o++){const a=s+o/4*zo,l=Math.cos(a),u=Math.sin(a);t.boom(l*.015,u*.015,n+r,[l,u,0],.085,.006),t.box(.04,.04,.046,l*.098,u*.098,n+r,xe,.85),Ol(t,l*.122,u*.122,n+r,1.35)}t.cyl(.046,.046,.09,n+.325,xe,14),t.cyl(.048,.048,.05,n+.325,wt,14),t.cyl(.026,.046,.03,n+.385,xe,14);for(let r=0;r<4;r++){const s=Math.PI/4+r/4*zo;Ol(t,Math.cos(s)*.04,Math.sin(s)*.04,n+.385,1.2)}t.box(.04,.005,.004,0,.03,n+.4,Tn),t.boom(0,0,n+.4,[0,0,1],.03,.004);for(const r of[-1,1])t.rcs(r*.05,0,n+.3,r,0),t.rcs(r*.05,0,n-.02,r,0);t.light(-.05,.01,n+.33,En),t.light(.05,.01,n+.33,An),t.light(0,.05,n+.33,pn),e.push(i(t,2))}{const t=mn(149),n=Xs(t,.125,.25,.055,.09);t.truss3(0,0,n,n+.8,.05,10,.006);for(const r of[.5,Math.PI-.5,Math.PI+.5,-.5])Hs(t,Math.cos(r)*.04,Math.sin(r)*.04,n+.02,n+.47,.28,.07,r,6,.005);t.cyl(.021,.021,1.2,n+.6,xe,8,0,0,.62);for(let r=0;r<8;r++)t.cyl(.03,.03,.016,n+.08+r*.1,xe,10,0,0,.85);for(let r=0;r<2;r++)for(let s=0;s<3;s++){const o=Math.PI/2+Math.PI/3+s/3*zo+r*(Math.PI/3),a=Math.cos(o)*.088,l=Math.sin(o)*.088;t.sphere(.058,a,l,n+.56+r*.125,xe,1.03,12),r===0&&t.cyl(.0597,.0597,.06,n+.56,wt,12,a,l)}t.cyl(.058,.062,.12,n+.87,xe,14),t.cyl(.065,.065,.07,n+.865,wt,14),t.cyl(.03,.055,.04,n+.95,xe,14),t.cyl(.03,.03,.07,n+1.17,Te,10,0,0,.8),t.cyl(.03,.03,.02,n+1.06,Te,10,0,0,.8);for(const r of[-1,1])ea(t,r*.085,0,n+.85,2,2,.009,.09),t.boom(0,0,n+.77,[r,0,0],.11,.006),t.rcs(r*.11,0,n+.77,r,0),t.rcs(r*.085,0,n-.03,r,0);t.turret(0,.066,n+.87,1,1.3),t.turret(0,-.066,n+.87,-1,1.3);for(const r of[.5,.75])t.pdc(0,.03,n+r),t.pdc(.03,-.022,n+r,-1);t.box(.06,.006,.004,0,.04,n+.94,Tn),t.dish(.04,-.03,.04,n+.76,[-.4,1,.4]),t.light(-.115,.01,n+.77,En),t.light(.115,.01,n+.77,An),t.light(0,.075,n+.9,pn),e.push(i(t,3))}{const t=mn(151),n=Xs(t,.07,.15,.034,.045);t.truss3(0,0,n,n+.62,.03,8,.0045);for(const c of[0,Math.PI])Hs(t,Math.cos(c)*.025,0,n+.005,n+.125,.14,.07,c,3);for(let c=0;c<3;c++)t.sphere(.09,0,0,n+.225+c*.17,xe,.98+c*.04,14),t.cyl(.062,.062,.012,n+.31+c*.17,Te,12);t.cyl(.0915,.0915,.05,n+.395,wt,16),ol(t,.03,.05,n+.685);const[r,s,o]=t.boom(.03,0,n+.635,[1,.1,.3],.2,.009,xe);t.sphere(.014,r,s,o,Te,.8,8);const[a,l,u]=t.boom(r,s,o,[.15,0,1],.1,.006);t.cyl(.008,.01,.02,u,xe,8,a,l);for(const c of[-1,1])t.rcs(c*.036,0,n+.65,c,0),t.rcs(c*.05,0,n-.02,c,0);t.light(-.093,0,n+.395,En),t.light(.093,0,n+.395,An),t.light(r,s+.02,o,pn),e.push(i(t,4))}{const t=mn(157),n=Xs(t,.065,.14,.03,.04);t.truss3(0,0,n,n+.75,.026,10,.004);for(const r of[0,Math.PI])Hs(t,Math.cos(r)*.022,0,n+.01,n+.17,.1,.035,r,3);for(let r=0;r<5;r++)for(let s=0;s<3;s++){const o=Math.PI/2+Math.PI/3+s/3*zo,a=Math.cos(o)*.05,l=Math.sin(o)*.05;t.cyl(.034,.034,.098,n+.245+r*.112,(r+s)%4===1?wt:xe,10,a,l,.8+t.r()*.3)}ol(t,.026,.04,n+.795);for(const r of[-1,1])t.rcs(r*.032,0,n+.77,r,0),t.rcs(r*.046,0,n-.02,r,0);t.light(-.085,0,n+.47,En),t.light(.085,0,n+.47,An),t.light(0,.03,n+.8,pn),e.push(i(t,5))}return e}function qs(i,e,t,n,r){return i.engine(e,0,t,n,.012,5),i.cyl(n*.9,n,r,.016+r/2,Te,10),i.box(n*1.2,n*1.2,r*.6,n*.9,-n*.5,.02+r/2,xe,.8),i.shield(n*1.5,.03+r),.04+r}function Zr(i,e,t,n,r,s){i.cyl(e,e,t,s,xe,12,n,r,1.02),i.cyl(e*.7,e,e*.5,s+t/2+e*.25,xe,12,n,r,.92),i.cyl(e*1.04,e*1.04,t*.45,s-t*.1,wt,12,n,r),i.box(e,.005,.004,n,r+e*.5,s+t/2+e*.5,Tn)}function AM(i,e,t,n,r,s,o,a){i.box(e,.07,s,t,n+.012,r,o,a),i.add(new Yn(e*.7,.014,.04,4).rotateY(Math.PI/4).scale(1,1,s/e).translate(t,n-.043,r),o,a*.9)}function CM(i){const e=[];{const t=mn(163),n=qs(t,.036,.08,.02,.03);t.truss(0,0,n,n+.15,.03,3,.0035),t.strapped(.033,.06,.048,-.004,n+.07,!0),t.dish(.036,-.03,.02,n+.08,[-.7,.5,.5]),Zr(t,.031,.07,-.012,.008,n+.19),t.box(.03,.03,.05,.032,-.012,n+.175,xe,.8),ar(t,-.016,-.01,n+.04,.04,.06,Math.PI+.25,2,-1,.003),t.boom(.03,0,n+.2,[.4,.2,1],.07,.004),t.rcs(.05,0,n+.14,1,0),t.rcs(-.042,.008,n+.17,-1,0),t.light(-.04,.02,n+.19,En),t.light(.05,0,n+.19,An),t.light(0,.03,n+.07,pn),e.push(i(t,0))}{const t=mn(167),n=qs(t,.055,.12,.03,.045);t.truss(0,0,n,n+.42,.05,6,.0045),t.strapped(.044,.1,.07,0,n+.11,!0),t.strapped(.028,.07,-.03,.056,n+.08,!1,.9),t.sphere(.036,0,-.062,n+.2,xe,1.05,10),ar(t,-.028,0,n+.2,.13,.17,Math.PI+.12,3,1),t.box(.1,.085,.11,.008,.012,n+.32,wt,.95),t.frame(.11,.095,.12,.008,.012,n+.32,.004),t.strut(.03,0,n+.36,.1,-.01,n+.36,.006),t.strut(.03,0,n+.42,.1,-.01,n+.42,.006),ea(t,.108,-.012,n+.38,2,3,.0085,.13,xe),ea(t,-.072,.03,n+.33,1,2,.0085,.08,xe),Zr(t,.036,.09,-.02,.014,n+.46),t.pdc(.008,.06,n+.32),t.dish(.032,.03,.04,n+.45,[.6,.7,.4]),t.rcs(.04,-.03,n+.43,1,0),t.rcs(-.06,.014,n+.47,-1,0),t.rcs(.04,.03,n-.02,1,0),t.rcs(-.04,-.03,n-.02,-1,0),t.light(-.06,.02,n+.44,En),t.light(.13,-.01,n+.38,An),t.light(.008,.07,n+.36,pn),e.push(i(t,1))}{const t=mn(173),n=qs(t,.055,.11,.03,.04);t.truss(0,0,n,n+.1,.05,2,.0045),t.sphere(.04,.052,.01,n+.045,xe,1.05,10),t.strapped(.026,.05,-.05,-.012,n+.045,!0),t.box(.13,.11,.2,0,0,n+.2,xe,.9),t.box(.134,.06,.09,0,.02,n+.235,wt),t.frame(.19,.17,.25,0,0,n+.2,.0055);for(const[r,s,o]of[[.095,.085,.1],[-.095,.085,.13],[.095,-.085,.15],[-.095,-.085,.08],[.11,0,.22],[-.11,.02,.2],[0,.1,.22],[0,-.1,.19],[.095,.085,.31],[-.095,.06,.3],[.08,-.085,.3],[-.095,-.085,.32]])t.box(.04,.04,.046,r,s,n+o,xe,.7+t.r()*.3),Ol(t,r*1.2,s*1.2,n+o,1.3);Zr(t,.034,.07,.022,.012,n+.335),ar(t,-.03,0,n+.04,.1,.075,Math.PI-.1,2),ar(t,.06,-.03,n+.03,.05,.05,-.3,1),t.boom(-.04,.05,n+.3,[-.2,.6,1],.09,.003),t.rcs(.07,0,n+.33,1,0),t.rcs(-.07,0,n+.31,-1,0),t.light(-.1,0,n+.2,En),t.light(.1,0,n+.26,An),t.light(.022,.05,n+.34,pn),e.push(i(t,2))}{const t=mn(179),n=qs(t,.09,.18,.05,.08);t.bell2(.036,-.085,.03,.03,.08),t.cyl(.02,.026,.06,.06,Te,8,-.085,.03),t.truss(0,0,n,n+.86,.08,10,.006);const r=.02,s=-.075;t.box(.052,.06,1.14,r,s,n+.63,xe,.6);for(let o=0;o<5;o++)t.box(.07,.03,.13,r,s+.025,n+.14+o*.2,o===3?wt:xe,.75+t.r()*.3);t.box(.06,.07,.1,r,s,n+1.07,wt,.9);for(let o=0;o<4;o++)t.cyl(.03,.03,.08,n+.2+o*.19,xe,10,r-.06,s-.01,.8+t.r()*.25);t.frame(.085,.09,.035,r,s,n+1.17,.006),t.frame(.085,.09,.035,r,s,n+.95,.006),t.strapped(.072,.16,.115,.03,n+.2,!0),t.strapped(.05,.12,-.1,.035,n+.2),t.sphere(.066,-.11,.02,n+.4,xe,1.04,12),t.strapped(.04,.1,.095,.045,n+.42,!1,.9),t.box(.14,.1,.17,0,.06,n+.61,wt,.95),t.frame(.15,.11,.18,0,.06,n+.61,.005),t.box(.1,.09,.12,-.1,0,n+.57,xe,.78),t.box(.09,.085,.15,.105,.02,n+.65,xe,1.05),Zr(t,.05,.12,-.035,.03,n+.82),Zr(t,.034,.08,.065,.02,n+.79),t.turret(0,.114,n+.61,1,1.5),t.turret(-.1,.05,n+.57,1,1.2),t.turret(.105,.066,n+.65,1,1.2),ea(t,.125,0,n+.83,2,3,.009,.13),t.strut(.04,0,n+.8,.11,0,n+.8,.007),ar(t,.03,.045,n+.33,.21,.24,.75,4,2,.005),ar(t,-.03,.045,n+.3,.16,.16,Math.PI-.6,3,-1,.005),ar(t,-.04,0,n+.74,.1,.09,Math.PI+.1,2,-1,.004),t.dish(.045,-.03,.085,n+.84,[-.4,1,.3]),t.pdc(.105,.066,n+.71),t.pdc(-.035,.083,n+.82),t.pdc(r,s-.03,n+.5,-1),t.rcs(.06,-.04,n+.86,1,0),t.rcs(-.09,.03,n+.86,-1,0),t.rcs(.07,.05,n-.02,1,0),t.rcs(-.07,-.05,n-.02,-1,0),t.light(-.15,0,n+.57,En),t.light(.15,.02,n+.65,An),t.light(0,.13,n+.66,pn),e.push(i(t,3))}{const t=mn(181),n=qs(t,.06,.13,.032,.045);t.truss(0,0,n,n+.62,.05,8,.0045),t.sphere(.115,.06,0,n+.2,xe,1.02,14),t.cyl(.117,.117,.035,n+.2,wt,16,.06,0),t.strapped(.07,.2,-.09,.01,n+.3,!1,.9),t.strapped(.05,.12,.072,-.02,n+.47,!0),t.sphere(.05,-.065,.03,n+.54,xe,.9,10),t.frame(.2,.12,.012,-.01,0,n+.36,.005),Zr(t,.034,.08,.02,.02,n+.66),t.box(.03,.03,.03,-.03,.03,n+.61,Te,.8);const[r,s,o]=t.boom(-.03,.03,n+.61,[-1,.3,.25],.17,.009,xe);t.sphere(.014,r,s,o,Te,.8,8);const[a,l,u]=t.boom(r,s,o,[-.25,-.1,1],.12,.007,xe);t.box(.02,.02,.03,a,l,u,Te,.7),ar(t,-.03,0,n+.035,.09,.07,Math.PI+.1,2),t.rcs(.06,.02,n+.65,1,0),t.rcs(-.02,.02,n+.66,-1,0),t.rcs(.04,.03,n-.02,1,0),t.rcs(-.04,-.03,n-.02,-1,0),t.light(-.165,.01,n+.3,En),t.light(.18,0,n+.2,An),t.light(r,s+.02,o,pn),e.push(i(t,4))}{const t=mn(191),n=qs(t,.055,.12,.03,.04);t.truss(0,0,n,n+.76,.045,10,.0045);for(let r=0;r<6;r++)for(const s of[-1,1]){const o=n+.115+r*.113;if(r===2&&s===1){ar(t,.025,0,o,.1,.1,.08,2);continue}if(r===4&&s===-1){t.strapped(.034,.05,-.062,0,o,!1,.9);continue}if(r===1&&s===-1){t.frame(.07,.07,.095,-.062,.012,o,.004);continue}const a=.066+t.r()*.03;AM(t,a,s*(.026+a/2),0,o,.098,(r*2+(s>0?1:0))%5===3?wt:xe,.7+t.r()*.4)}Zr(t,.032,.07,-.014,.012,n+.8),t.dish(.028,.03,.03,n+.79,[.5,.8,.3]),t.rcs(.04,0,n+.78,1,0),t.rcs(-.05,.012,n+.8,-1,0),t.rcs(.04,.03,n-.02,1,0),t.rcs(-.04,-.03,n-.02,-1,0),t.light(-.11,.02,n+.45,En),t.light(.11,.02,n+.45,An),t.light(-.014,.05,n+.8,pn),e.push(i(t,5))}return e}function RM(){const i=(m,_)=>{const w=MM*SM[_],x=m.build(1,7,wM[_],!0);x.computeBoundingBox();const b=x.boundingBox,S=w/(b.max.z-b.min.z),C=(b.max.z+b.min.z)/2;for(const y of[x,x.userData.coarse])y.translate(0,0,-C).scale(S,S,S),y.computeBoundingBox(),y.computeBoundingSphere();return x.userData.nozzle=(x.userData.nozzle-C)*S,x.userData.length=w,x},e=[...TM(i),...EM(i),...CM(i)],t=mn(41);t.oct(.05,.05,.06,0,1),t.box(.05,.003,.04,0,.026,-.005,wt),t.cyl(.014,.016,.04,.05,Te,12),t.add(new Yn(.02,.018,.022,12,1,!0).rotateX(Math.PI/2).translate(0,0,.08),xe,.9),t.dish(.036,0,.026,0,[0,1,.25]),t.box(.008,.008,.008,-.025,0,-.01,Te),t.box(.008,.008,.008,.022,-.022,-.02,Te);const[n,r,s]=t.boom(-.025,0,-.01,[-1,.15,-.1],.18,.003);t.box(.012,.012,.012,n,r,s,Te,.7);const[o,a,l]=t.boom(.022,-.022,-.02,[.7,-.7,-.2],.05,.004);t.cyl(.01,.01,.04,l,Te,8,o,a);for(const m of[0,1,2,3])t.box(m%2?.004:.03,m%2?.03:.004,.032,o,a,l,Te,.6);for(const m of[-1,1])t.rcs(m*.028,.02,-.025,m,0);t.bell(.018,-.035,.028),t.light(0,.03,-.02,pn,.006);const u=t.build(),c=mn(43);c.box(.04,.04,.05,0,0,0),c.box(.042,.042,.012,0,0,-.01,wt),c.dish(.075,0,0,.026,[0,0,1]),c.boom(.02,0,0,[1,0,0],.03),c.solar(.05,0,0,.12,.05,0),c.boom(-.02,0,0,[-1,0,0],.025),c.solar(-.045,0,0,.08,.05,Math.PI+.4),c.radiator(0,-.02,-.005,.03,.03,-Math.PI/2,1),c.boom(.01,.02,-.02,[.3,1,-.4],.09,.002),c.boom(-.01,-.02,-.02,[-.2,-1,-.5],.07,.002);for(const m of[-1,1])c.rcs(m*.022,.018,-.022,m,0);c.bell(.014,-.025,.022),c.light(0,-.024,0,pn,.006);const h=c.build(),d=mn(47);d.sphere(.03,0,0,0,xe,1,14),d.cyl(.031,.031,.014,0,wt,14),d.box(.04,.03,.03,0,.03,.02,xe,.9),d.greeble(.04,.03,.03,0,.03,.02,3,"t");const[f,p,v]=d.boom(0,.02,.035,[0,-.3,1],.045,.006);d.sphere(.013,f,p,v,Te,.6,12),d.cyl(.005,.005,.004,v+.012,Tn,8,f,p);for(const m of[.785,2.356,3.927,5.498])d.boom(0,0,-.012,[Math.cos(m),Math.sin(m),0],.04,.003),d.rcs(Math.cos(m)*.04,Math.sin(m)*.04,-.012,Math.cos(m),Math.sin(m));d.solar(.02,.045,.02,.05,.035,.35),d.boom(-.012,.045,.01,[-.2,1,-.3],.06,.0018),d.engine(.022,-.045,.04,.02,-.03,4),d.light(0,.046,0,pn,.005);const g=d.build();return e.probes=[u,h,g],e}const Cp=new ic(new Uint8Array([255,255,255,255]),1,1);Cp.needsUpdate=!0;function ed(i,e=null){const t=yM(),n=new mp({color:"#d4d8de",map:t,roughnessMap:t,metalness:.35,roughness:.62,emissive:"#06070a"});return n.onBeforeCompile=r=>{r.uniforms.uT=i,r.uniforms.uPxK=Ap,r.uniforms.tGround={value:e||Cp},r.uniforms.uGroundTex={value:e?1:0},sf(r.uniforms),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit; attribute vec3 iGround; attribute vec3 gnd;
        varying vec3 vGnd;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying vec3 vGround;
        uniform float uPxK; varying float vPx; varying vec3 vLocal; varying vec3 vShW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vLocal = position;
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit; vGround = iGround; vGnd = gnd;`).replace("#include <project_vertex>",`#include <project_vertex>
        // How big the whole vessel is on screen, in pixels.
        vPx = uPxK * length((modelMatrix * instanceMatrix)[0].xyz) * 0.6 / max(-mvPosition.z, 1e-3);
        vShW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying float vPx; varying vec3 vLocal; varying vec3 vGround;
        varying vec3 vGnd; uniform sampler2D tGround; uniform float uGroundTex;
        varying vec3 vShW;
        ${rf}
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
        }`)},n}function PM(i){return new zt({uniforms:{uT:i},vertexShader:`${ji}
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
        ${Ji}
      }`,fragmentShader:`${Qi}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${er}
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
      }`,blending:hi,transparent:!0,depthWrite:!1})}function LM(){return new zt({uniforms:{uPR:{value:1}},vertexShader:`${ji}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${Ji}
      }`,fragmentShader:`${Qi}
      varying vec3 vCol;
      void main() {
        ${er}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,blending:hi,transparent:!0,depthWrite:!1})}function DM(i,e,t=null){const n=i.clone();let r=Uh||(Uh=ed(e));t&&(Xc.has(t)||Xc.set(t,ed(e,t)),r=Xc.get(t));const s=new Fl(n,r,1),o=(h,d)=>{const f=new vo(new Float32Array(d),d.length);return n.setAttribute(h,f),f},a=o("iPaint",[.6,.6,.6]),l=o("iSun",[1]),u=o("iLit",[0]),c=o("iGround",[.2,.19,.18]);return o("iSeed",[Math.random()]),o("iHull",[.95]),s.setMatrixAt(0,new It),s.frustumCulled=!1,s.userData.set=(h,d,f)=>{const p=new mt(h);a.setXYZ(0,p.r,p.g,p.b),a.needsUpdate=!0,l.setX(0,d),l.needsUpdate=!0,u.setX(0,f?1:0),u.needsUpdate=!0},s.userData.ground=h=>{c.setXYZ(0,h[0],h[1],h[2]),c.needsUpdate=!0},s}let Uh=null;const Xc=new WeakMap,IM=40;function UM(i,e){const t={value:0},n=RM(),r=[...n,...n.probes],s=n.length,o=ed(t),a=te=>{const Me=te.clone(),_e=new Fl(Me,o,e);_e.instanceMatrix.setUsage(Ar);const Se=(Y,ne)=>{const ye=new vo(new Float32Array(e*ne),ne);return ye.setUsage(Ar),Me.setAttribute(Y,ye),ye};return _e.userData={paint:Se("iPaint",3),sun:Se("iSun",1),seed:Se("iSeed",1),hull:Se("iHull",1),n:0},Se("iLit",1).array.fill(1),_e.frustumCulled=!1,_e.count=0,i.add(_e),_e},l=r.map(a),u=r.map(te=>te.userData.rotor?a(te.userData.rotor):null),c=r.map(te=>te.userData.coarse?a(te.userData.coarse):null),h=[...l,...u.filter(Boolean),...c.filter(Boolean)],d=new It,f=new xp;f.setAttribute("position",new yt([-1,-.02,0,1,-.02,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),f.setAttribute("part",new yt([0,0,0,0,1,1,1,1],1)),f.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]);const p=e*3,v=(te,Me)=>{const _e=new vo(new Float32Array(p*Me),Me);return _e.setUsage(Ar),f.setAttribute(te,_e),_e},g=v("iPow",1),m=v("iSeed",1),_=v("iTint",3),w=new Fl(f,PM(t),p);w.instanceMatrix.setUsage(Ar),w.frustumCulled=!1,w.count=0,w.renderOrder=2,i.add(w);const x=new jt,b=new Float32Array(e*3),S=new Float32Array(e*3),C=new Float32Array(e);x.setAttribute("position",new gn(b,3).setUsage(Ar)),x.setAttribute("color",new gn(S,3).setUsage(Ar)),x.setAttribute("size",new gn(C,1).setUsage(Ar));const y=LM(),T=new Jd(x,y);T.frustumCulled=!1,T.renderOrder=3,i.add(T);const R=new It,U=new jn,k=new N,P=new N,L=new N(0,1,0),F=new mt;let O=0,K=0,he=0;const Q=new mt(.35,.6,1),oe=new mt(.85,.9,1),D=new jn,le=new N(1,0,0);return{geometries:n,hulls:n.length,probeType:n.length,probes:n.probes.length,uT:t,begin(te,Me){t.value=te,y.uniforms.uPR.value=Me;for(const _e of h)_e.userData.n=0;O=K=he=0},add(te,Me,_e,Se,Y,ne,ye,ae,ge,$e,ft,je){if(!(he>=e)){if(he++,P.copy(Me).add(_e),R.lookAt(P,Me,Math.abs(_e.y)>.99?k.set(1,0,0):L),U.setFromRotationMatrix(R),ft>1.5){const Ve=ft<IM&&c[te]?c[te]:l[te],ct=Ve.userData.n++;R.compose(Me,U,k.set(Se[0],Se[1],Se[2])),Ve.setMatrixAt(ct,R),F.set(Y),Ve.userData.paint.setXYZ(ct,F.r,F.g,F.b),Ve.userData.sun.setX(ct,je),Ve.userData.seed.setX(ct,ye*.137%1),Ve.userData.hull.setX(ct,ne);const Xe=u[te];if(Xe){const vt=Xe.userData.n++;Xe.setMatrixAt(vt,R.multiply(d.makeRotationZ(t.value*r[te].userData.rotorSpin+ye))),Xe.userData.paint.setXYZ(vt,F.r,F.g,F.b),Xe.userData.sun.setX(vt,je),Xe.userData.seed.setX(vt,ye*.137%1),Xe.userData.hull.setX(vt,ne)}}if(ae&&O<p){const Ve=O++;P.set(0,0,r[te].userData.nozzle).multiply(k.set(Se[0],Se[1],Se[2])).applyQuaternion(U).add(Me);const ct=1.9*ge*Math.max(Se[2],.62);R.compose(P,U,k.set(.06*Se[0]*(te>=s?.5:1),1,ct)),w.setMatrixAt(Ve,R);const Xe=fn.smoothstep(ft,4,40);g.setX(Ve,(1-.35*fn.smoothstep(ft,120,500))*(ge<.2?Xe:.3+.7*Xe)),m.setX(Ve,ye*.371%1),_.setXYZ(Ve,Q.r,Q.g,Q.b)}if($e&&$e[0]>0){const Ve=K++;b[Ve*3]=Me.x,b[Ve*3+1]=Me.y,b[Ve*3+2]=Me.z;const ct=$e[2]??ae;F.set(ct?"#cfe8ff":Y);const Xe=$e[1]*(ct?1.5:1);S[Ve*3]=F.r*Xe,S[Ve*3+1]=F.g*Xe,S[Ve*3+2]=F.b*Xe,C[Ve]=$e[0]}}},jet(te,Me,_e,Se,Y,ne){if(O>=p)return;const ye=O++;P.copy(te).sub(Me),R.lookAt(P,te,Math.abs(Me.y)>.99?le:L),D.setFromRotationMatrix(R),R.compose(te,D,k.set(Se,1,_e)),w.setMatrixAt(ye,R),g.setX(ye,Y),m.setX(ye,ne*.613%1),_.setXYZ(ye,oe.r,oe.g,oe.b)},end(){for(const te of h)if(te.count=te.userData.n,!!te.count){te.instanceMatrix.needsUpdate=!0;for(const Me of["paint","sun","seed","hull"])te.userData[Me].needsUpdate=!0}w.count=O,O&&(w.instanceMatrix.needsUpdate=!0,g.needsUpdate=m.needsUpdate=_.needsUpdate=!0),x.setDrawRange(0,K),K&&(x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0,x.attributes.size.needsUpdate=!0)}}}const kM=3,Rp=[.785,2.356,3.927,5.498];function NM(i,e,t){const n=i,r=mn(e*31+7),s=r.r,o=(f,p,v,g=xe,m=16,_=0,w=0)=>r.cyl(f,f,p,v,g,m,_,w);if(e===0){o(n*.27,n*.44,0),r.cyl(n*.15,n*.27,n*.1,n*.27,xe,18),r.cyl(n*.27,n*.2,n*.1,-n*.27,xe,18),o(n*.28,n*.14,n*.02,wt);for(let f=0;f<10;f++){const p=f/10*Math.PI*2+.3;r.box(n*.03,n*.03,n*.06,Math.cos(p)*n*.272,Math.sin(p)*n*.272,-n*.12,Tn)}for(const f of[-.18,.12])o(n*.285,n*.025,n*f,Te);for(let f=0;f<14;f++){const p=f/14*Math.PI*2;r.box(n*.022,n*.022,n*.04,Math.cos(p)*n*.272,Math.sin(p)*n*.272,n*.06,Tn)}for(const f of[1.2,2.9,4.4])r.box(n*.1,n*.08,n*.16,Math.cos(f)*n*.31,Math.sin(f)*n*.31,n*0,Te,.75);for(const f of[-1,1])r.radiator(f*n*.27,0,n*0,n*.36,n*.2,f>0?.2:Math.PI-.2,2,n*.008)}else if(e===1){r.sphere(n*.19,0,0,0,xe,1,16),o(n*.12,n*.5,-n*.1),o(n*.2,n*.08,0,wt);for(const f of Rp){const p=Math.cos(f),v=Math.sin(f),g=-v,m=p,_=n*.15,w=n*.68,x=n*.055,b=[[g*x,m*x,x],[-g*x,-m*x,x],[0,0,-x]];for(const[S,C,y]of b)r.strut(p*_+S,v*_+C,y,p*w+S,v*w+C,y,n*.018);for(let S=0;S<=4;S++){const C=_+(w-_)*S/4;for(let y=0;y<3;y++){const T=b[y],R=b[(y+1)%3];r.strut(p*C+T[0],v*C+T[1],T[2],p*C+R[0],v*C+R[1],R[2],n*.012)}}r.pipe(p*_,v*_,0,p*w,v*w,0,n*.025,xe),r.sphere(n*.075,p*n*.72,v*n*.72,0,xe,1,12),r.cyl(n*.07,n*.07,n*.26,0,xe,12,p*n*.6,v*n*.6);for(const S of[-1,1])r.box(n*.02,n*.02,n*.05,p*n*.6+g*n*.07,v*n*.6+m*n*.07,S*n*.06,Tn)}for(const f of[-1,1])r.strapped(n*.06,n*.18,f*n*.13,f*n*.13,-n*.3,f>0)}else if(e===3){o(n*.06,n*1.9,-n*.2,Te,10);for(const[f,p,v,g,m]of[[.55,.11,.2,.01,.02],[.3,.19,.24,-.02,0],[.04,.24,.2,.03,-.02],[-.2,.14,.26,-.03,.03],[-.46,.18,.16,.02,.01],[-.7,.1,.22,0,-.02],[-.95,.13,.14,-.02,0]])r.cyl(n*p,n*p*(.9+s()*.2),n*v,n*f,xe,14,n*g,n*m,.7+s()*.45),r.cyl(n*p*1.05,n*p*1.05,n*.018,n*(f+v*.5),Te,14,n*g,n*m);o(n*.245,n*.07,n*.04,wt);for(const[f,p,v,g,m,_]of[[.32,.5,.25,.62,.05,1.3],[.05,2.3,-.2,.86,.065,-.9],[-.2,3.9,.45,.5,.045,.7],[-.46,5.3,-.35,.72,.055,-1.5],[-.72,1.4,.1,.4,.04,1]]){const w=[Math.cos(p),Math.sin(p),v],[x,b,S]=r.boom(0,0,n*f,w,n*g,n*m,xe,.75+s()*.3);r.boom(w[0]*n*g*.45,w[1]*n*g*.45,n*f+w[2]*n*g*.45,w,n*.16,n*m*2.1,xe,.7+s()*.4);const C=[Math.cos(p+_),Math.sin(p+_),-v*1.5],[y,T,R]=r.boom(x,b,S,C,n*g*.55,n*m*.8,Te);r.sphere(n*m*1.9,x,b,S,xe,1,10),r.box(n*.13,n*.1,n*.2,y,T,R,s()<.5?wt:xe,.7+s()*.4),r.box(n*.025,n*.025,n*.07,y+n*.06,T+n*.04,R,Tn),s()<.6&&r.radiator(y,T,R-n*.08,n*.26,n*.12,p+1.2,2,n*.008)}for(let f=0;f<7;f++){const p=.9+f*.36,v=Math.cos(p)*n*.62,g=Math.sin(p)*n*.62;r.box(n*.2,n*.09,n*.12,v,g,n*.06,f%3===1?Te:xe,.7+s()*.4),f%2===0&&r.strut(Math.cos(p)*n*.2,Math.sin(p)*n*.2,n*.05,v,g,n*.06,n*.014),f%3===0&&r.box(n*.03,n*.03,n*.05,v*1.06,g*1.06,n*.06,Tn)}for(let f=0;f<3;f++){const p=-n*(.28+f*.11),v=-n*.3;r.frame(n*.1,n*.1,n*.34,p,v,-n*.3,n*.008);for(let g=0;g<3;g++)(f*2+g)%4!==1&&r.box(n*.085,n*.085,n*.09,p,v,-n*(.41-g*.11),(f+g)%3===0?wt:xe,.7+s()*.4)}for(const[f,p,v]of[[.2,.16,-.85],[-.17,.2,.68],[.24,-.14,.62]])r.strapped(n*.07,n*.24,n*f,n*p,n*v,f>0)}else{o(n*.07,n*1.2,-n*.15,Te,10);for(const[f,p,v,g,m,_]of[[.28,.17,.26,0,0,xe],[0,.2,.22,.02,-.01,wt],[-.24,.15,.24,-.02,.02,xe],[-.5,.12,.18,0,0,xe]]){r.cyl(n*p,n*p,n*v,n*f,_===wt?xe:_,16,n*g,n*m,.85+s()*.25);for(const w of[-.5,.5])r.cyl(n*p*1.04,n*p*1.04,n*.02,n*(f+w*v),Te,16,n*g,n*m)}o(n*.205,n*.1,0,wt);for(let f=0;f<4;f++){const p=f/4*Math.PI*2+Math.PI/4,v=Math.cos(p)*n*.12,g=Math.sin(p)*n*.12;r.frame(n*.1,n*.1,n*.3,v,g,n*.58,n*.008);for(let m=0;m<3;m++)(f+m)%4!==3&&r.box(n*.085,n*.085,n*.085,v,g,n*(.48+m*.1),(f+m)%3===0?wt:xe,.8+s()*.3)}}o(n*.1,n*.12,n*.42,Te,12),r.greeble(n*.36,n*.36,n*.5,0,0,0,6);for(const f of OM(e)){const[p,v,g]=f.p,[m,_]=f.n;r.boom(p*n-m*n*.1,v*n-_*n*.1,g*n,[m,_,0],n*.1,n*.09,xe,.95),r.boom(p*n-m*n*.01,v*n-_*n*.01,g*n,[m,_,0],n*.02,n*.13,Te)}r.truss(0,0,-n*.75,-n*.3,n*.14,3,n*.018),o(n*.09,n*.18,-n*.68,Te,12),r.cyl(n*.16,n*.1,n*.03,-n*.56,Te,16),r.radiator(n*.08,0,-n*.66,n*.42,n*.2,.75+e*.4,3,n*.01),r.radiator(-n*.08,0,-n*.64,n*.32,n*.16,Math.PI+.9+e*.3,2,n*.01);const[a,l,u]=r.boom(-n*.07,n*.07,-n*.45,[-.6,.6,-.2],n*.4,n*.022);r.dish(n*.1,a,l,u,[-.4,.6,.5]),r.light(0,0,n*.49,pn,n*.05),r.light(n*.2,0,-n*.1,An,n*.04),r.light(-n*.2,0,-n*.1,En,n*.04);const c=zM(DM(r.build(1,FM(n)),t));c.userData.spin=.015;const h=c.userData.set,d={S:n,uT:t,parts:[],wip:[],last:["#6a7080",1,!1]};return c.userData.station=d,c.userData.set=(f,p,v)=>{d.last=[f,p,v],h(f,p,v);for(const g of d.parts)g.userData.set?.(f,p,v)},c}const FM=i=>7/Math.max(i*2.5,1),zM=i=>(i.computeBoundingSphere(),i.frustumCulled=!0,i);function OM(i){const e=[];for(const[t,n]of Rp.entries()){const r=i===1?.8:i===0?.36:[.26,.29,.26,.24][t],s=i===1?0:i===0?-.12:[.28,0,-.24,0][t];e.push({p:[Math.cos(n)*r,Math.sin(n)*r,s],n:[Math.cos(n),Math.sin(n),0]})}return e}function BM(i,e,t,n){let r=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function GM(i,e,t,n){const r=Math.floor(i),s=Math.floor(e),o=Math.floor(t),a=i-r,l=e-s,u=t-o,c=a*a*(3-2*a),h=l*l*(3-2*l),d=u*u*(3-2*u),f=(v,g,m)=>v+(g-v)*m,p=(v,g,m)=>BM(r+v,s+g,o+m,n);return f(f(f(p(0,0,0),p(1,0,0),c),f(p(0,1,0),p(1,1,0),c),h),f(f(p(0,0,1),p(1,0,1),c),f(p(0,1,1),p(1,1,1),c),h),d)}function al(i,e,t,n,r){let s=0,o=.5,a=1;for(let l=0;l<r;l++)s+=GM(i*a,e*a,t*a,n+l)*o,a*=2.03,o*=.5;return s}function Pp(i,e,t=5,n=1){const r=Oi(i*97+1);let s=new ef(e,t);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=vM(s);const o=Array.from({length:5},()=>({d:new N(r()-.5,r()-.5,r()-.5).normalize(),f:.6+r()*1.2,ph:r()*6.28,a:.05+r()*.08})),a=Array.from({length:7+Math.floor(r()*5)},()=>({d:new N(r()-.5,r()-.5,r()-.5).normalize(),size:.15+r()*.3})),l=new N(1.2+r()*.6,.75+r()*.2,.85+r()*.35),u=Math.floor(i)%1e3,c=s.attributes.position,h=new N,d=new N,f=[],p=r()<.35,v=p?[1.08,.95,.82]:[1,.98,.95],g=p?.26:.16;for(let m=0;m<c.count;m++){h.fromBufferAttribute(c,m),d.copy(h).normalize();let _=1;for(const b of o)_+=b.a*Math.sin(d.dot(b.d)*b.f*3+b.ph);_+=(Math.abs(al(d.x*2.2,d.y*2.2,d.z*2.2,u+7,3)-.5)-.15)*.25*n;let w=0;for(const b of a){const S=d.distanceTo(b.d)/b.size;if(S<1){const C=1-S*S;_-=.11*C*b.size*3,w=Math.max(w,C)}else S<1.3&&(_+=.025*(1-(S-1)/.3)*b.size*3)}_+=(al(d.x*7,d.y*7,d.z*7,u+5,3)-.5)*.09*n,h.multiplyScalar(_).multiply(l),c.setXYZ(m,h.x,h.y,h.z);let x=g+(al(d.x*2.5,d.y*2.5,d.z*2.5,u+9,4)-.5)*.18+(_-1)*.25-w*.04;x+=(al(d.x*12,d.y*12,d.z*12,u+2,2)-.5)*.08,x=Math.max(.05,Math.min(.5,x)),f.push(x*v[0],x*v[1],x*v[2])}return s.setAttribute("color",new yt(f,3)),s.computeVertexNormals(),s}function Lp(i={}){const e=new mp({vertexColors:!0,roughness:.92,metalness:.04}),t=i.scale??6,n=!!i.tumble;return e.onBeforeCompile=r=>{r.uniforms.uT=i.uT||{value:0},sf(r.uniforms),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        uniform float uT; varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz; varying vec3 vShW;
        mat3 rotAxis(vec3 a, float t) { float c = cos(t), s = sin(t); vec3 u = normalize(a); return mat3(c + u.x*u.x*(1.0-c), u.y*u.x*(1.0-c) + u.z*s, u.z*u.x*(1.0-c) - u.y*s, u.x*u.y*(1.0-c) - u.z*s, c + u.y*u.y*(1.0-c), u.z*u.y*(1.0-c) + u.x*s, u.x*u.z*(1.0-c) + u.y*s, u.y*u.z*(1.0-c) - u.x*s, c + u.z*u.z*(1.0-c)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${n?`float fid = float(gl_InstanceID);
        vec3 ax = vec3(fract(sin(fid * 12.9898) * 43758.5), fract(sin(fid * 78.233) * 43758.5), fract(sin(fid * 37.719) * 43758.5)) - 0.5;
        mat3 tum = rotAxis(ax + 1e-3, uT * (0.05 + fract(fid * 0.618) * 0.3) + fid);
        objectNormal = tum * objectNormal;`:""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        ${n?"transformed = tum * transformed;":""}
        vObj = transformed;
        vRx = normalMatrix * vec3(1.0, 0.0, 0.0); vRy = normalMatrix * vec3(0.0, 1.0, 0.0); vRz = normalMatrix * vec3(0.0, 0.0, 1.0);
        {
          vec4 sw = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            sw = instanceMatrix * sw;
          #endif
          vShW = (modelMatrix * sw).xyz;
        }`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz; varying vec3 vShW;
        ${rf}
        ${hr}
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
        { float shd = sunShadow(vShW, 0.002); reflectedLight.directDiffuse *= shd; reflectedLight.directSpecular *= shd; }`)},e}const qc={mat:null};function HM(i){const e=Pp(i.id,i.size,5);return qc.mat||(qc.mat=Lp({scale:5})),new Qt(e,qc.mat)}function VM(i,e,t,n,r){const s=new Ii,o=n==="high"?2400:900,a=[0,1,2,3].map(p=>Pp(500+p*17,1,2,1.3)),l=Lp({scale:4,tumble:!0,uT:r}),u=Oi(Math.floor(i*131)),c=[],h=3;for(let p=0;p<h;p++){const v=new Ii,g=i+(e-i)*p/h,m=i+(e-i)*(p+1)/h;v.userData.omega=Math.PI*2/t((g+m)/2),s.add(v),c.push(v);const _=Math.ceil(o/h/a.length);for(const w of a){const x=new Fl(w,l,_),b=new It,S=new jn,C=new N,y=new N;for(let T=0;T<_;T++){const R=g+u()*(m-g),U=u()*Math.PI*2,k=(u()+u()+u()-1.5)*1.6;C.set(Math.cos(U)*R,k,Math.sin(U)*R),S.setFromEuler(new gr(u()*6,u()*6,u()*6));const P=.04+Math.pow(u(),4)*.32;b.compose(C,S,y.setScalar(P)),x.setMatrixAt(T,b)}x.frustumCulled=!1,v.add(x)}}const d=new rc(i-4,e+4,256,4).rotateX(-Math.PI/2),f=new Qt(d,new zt({uniforms:{uR0:{value:i-4},uR1:{value:e+4}},vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <logdepthbuf_pars_fragment>
      ${hr}
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
      }`,blending:hi,transparent:!0,depthWrite:!1,side:si}));return s.add(f),{group:s,update(p){for(const v of c)v.rotation.y=-v.userData.omega*p},dispose(){for(const p of a)p.dispose();d.dispose()}}}const Oo=0,Bo=1,Go=2,Yc=3,kh=4,Kc=5;function WM(i,e=4096){const t={value:0},n=new xp;n.setAttribute("position",new yt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]);const r={},s=(g,m)=>{const _=new vo(new Float32Array(e*m),m);_.setUsage(Ar),n.setAttribute(g,_),r[g]=_};s("aP0",3),s("aVel",3),s("aDrift",3),s("aDir",3),s("aCol",3),s("aTime",2),s("aSize",2),s("aKind",2),r.aTime.array.fill(-1e6),n.instanceCount=e;const o=new zt({uniforms:{uT:t,uPx:{value:.002}},vertexShader:`${ji}
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
        float drag = aKind.x == ${Go}.0 ? 1.2 : aKind.x == ${Bo}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel + aDrift * t; // drift: carried along with the world it's at
        float size = mix(aSize.x, aSize.y, aKind.x == ${Bo}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${Oo}.0 || aKind.x == ${Bo}.0 || aKind.x == ${Yc}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${Go}.0 || aKind.x == ${kh}.0 || aKind.x == ${Kc}.0) size = max(size, uPx * -mv.z * (aKind.x == ${Kc}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${Go}.0) dirW = -aVel * exp(-drag * t) * 0.06;
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
        ${Ji}
      }`,fragmentShader:`${Qi}
      ${hr}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${er}
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
      }`,blending:hi,transparent:!0,depthWrite:!1,side:si}),a=new Qt(n,o);a.frustumCulled=!1,a.renderOrder=5,i.add(a);let l=0,u=!1;const c=new mt;function h(g,m,_,w,x,b,S,C,y=0,T=1){const R=l;l=(l+1)%e,r.aP0.setXYZ(R,m.x,m.y,m.z),r.aVel.setXYZ(R,_?_.x:0,_?_.y:0,_?_.z:0),r.aDrift.setXYZ(R,p.x,p.y,p.z),r.aDir.setXYZ(R,w?w.x:0,w?w.y:0,w?w.z:0),c.set(x).multiplyScalar(T),r.aCol.setXYZ(R,c.r,c.g,c.b),r.aTime.setXY(R,t.value+y,b),r.aSize.setXY(R,S,C),r.aKind.setXY(R,g,Math.random()),u=!0}const d=new N,f=new N,p=new N,v=()=>d.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{uT:t,drift:p,update(g,m){if(t.value=g,m&&(o.uniforms.uPx.value=m),u){for(const _ in r)r[_].needsUpdate=!0;u=!1}},explosion(g,m=1){h(Oo,g,null,null,"#ffffff",.16,.3*m,1.5*m,0,3.5),h(Yc,g,null,null,"#9fd4ff",.5,.15*m,1.9*m,0,1.2),h(Bo,g,v().multiplyScalar(.2),null,"#ffffff",.75+Math.random()*.2,.25*m,.95*m,.02,2.2);for(let _=0;_<2;_++)h(Bo,f.copy(g).add(v().multiplyScalar(.25*m)),v().multiplyScalar(.4),null,"#ffffff",.55,.12*m,.5*m,.08+_*.12,2);for(let _=0;_<16;_++)h(Go,g,v().multiplyScalar((1.5+Math.random()*3.5)*m),null,"#ff9a40",.5+Math.random()*.8,.025*m,.015*m,0,3);for(let _=0;_<6;_++)h(Oo,g,v().multiplyScalar(.4+Math.random()*.8),null,"#ff7a30",1.5+Math.random()*1.5,.06*m,.025*m,.05,2.5)},impact(g,m,_=!1){h(Oo,g,null,null,m,.15,.1,_?.6:.35,0,1.6);for(let w=0;w<(_?6:3);w++)h(Go,g,v().multiplyScalar(1.5+Math.random()*3),null,"#ffd090",.25+Math.random()*.3,.02,.01,0,2.5)},intercept(g){h(Oo,g,null,null,"#dff4ff",.12,.05,.3,0,3)},bolt(g,m,_,w,x,b,S=0){f.subVectors(m,g);const C=d.copy(f).divideScalar(w),y=f.clone().normalize().multiplyScalar(-x);h(kh,g,C,y,_,w,b,b,S,1.6)},beam(g,m,_,w=.3){f.subVectors(m,g),h(Kc,m,null,f.clone().negate(),_,w,.045,.02,0,1.4)},ring(g,m,_,w=1.2){h(Yc,g,null,null,m,w,_*.3,_,0,1.5)}}}const Dp=`
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`,$M=`
${hr}
${Dp}
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
}`,XM=`
${hr}
${Dp}
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
}`,qM=["temperate","desert","ice","jungle","steppe","ocean"],Nh={temperate:[.35,.6,1],desert:[1,.7,.45],ice:[.6,.8,1],jungle:[.4,.7,.85],steppe:[.55,.62,.9],ocean:[.3,.55,1]},Zc=[[[.5,.33,.18],[.82,.7,.52],[.62,.3,.15]],[[.3,.45,.6],[.7,.82,.88],[.2,.3,.55]],[[.22,.42,.4],[.55,.72,.66],[.15,.3,.32]],[[.45,.2,.12],[.78,.55,.4],[.35,.12,.08]],[[.35,.28,.45],[.7,.62,.75],[.25,.18,.4]],[[.62,.55,.4],[.88,.84,.72],[.5,.4,.28]]];function Ip(i){return Zc[Math.floor(i.hue*Zc.length)%Zc.length]}function YM(i){if(i.home||i.trait==="garden")return{kind:0,type:Math.max(0,qM.indexOf(i.biome||"temperate")),atmo:Nh[i.biome]||Nh.temperate,atmoK:1,clouds:1,relief:.06};if(i.giant)return{kind:3,type:0,atmo:Ip(i)[1].map(t=>t*.9+.1),atmoK:.55,clouds:0,relief:0};if(i.kind==="planet"){const t=i.zone==="hot"?i.hue<.5?2:1:i.zone==="cold"?3:i.zone==="mild"?0:Math.floor(i.hue*4)%4,n=[[1,.6,.4],null,[1,.85,.55],[.6,.75,1]][t];return{kind:1,type:t,atmo:n,atmoK:t===2?1.2:.45,clouds:0,relief:t===2?0:.09,airless:t===1}}return{kind:2,type:Math.floor(i.hue*4)%4,atmo:null,atmoK:0,clouds:0,relief:.12,airless:!0}}function KM(i,e){const t=new jt;t.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));const n=new Qt(t);n.frustumCulled=!1;const r=new nc;r.add(n);const s=new sc,o=new zt({uniforms:{uKind:{value:0},uType:{value:0},uSeed:{value:0},uPalA:{value:new N},uPalB:{value:new N},uPalC:{value:new N},uStorm:{value:[0,1,2,3].map(()=>new Wt)}},vertexShader:Qo,fragmentShader:$M,depthTest:!1,depthWrite:!1}),a=new zt({uniforms:{tAlb:{value:null},uTexel:{value:new tt},uRelief:{value:1},uKind:{value:0},uType:{value:0},uSeed:{value:0},uClouds:{value:0}},vertexShader:Qo,fragmentShader:XM,depthTest:!1,depthWrite:!1}),l=Math.min(8,i.capabilities.getMaxAnisotropy()),u=(c,h)=>{const d=new oi(c,h,{depthBuffer:!1,generateMipmaps:!0,minFilter:Lr,magFilter:un,wrapS:fa,wrapT:Yi});return d.texture.anisotropy=l,d};return function(h,d){const f=e()==="high",p=d.kind===0?f?2048:1024:f?1024:512,v=p/2,g=(h.id*7.31+h.hue*13.7)%97,m=o.uniforms;if(m.uKind.value=d.kind,m.uType.value=d.type,m.uSeed.value=g,d.kind===3){const S=Ip(h);m.uPalA.value.fromArray(S[0]),m.uPalB.value.fromArray(S[1]),m.uPalC.value.fromArray(S[2]);let C=Math.floor(g*1e3);const y=()=>(C=C*16807%2147483647)/2147483647;m.uStorm.value.forEach((T,R)=>{const U=(y()-.5)*(R?1.4:.9),k=y()*Math.PI*2;T.set(Math.cos(U)*Math.cos(k),Math.sin(U),Math.cos(U)*Math.sin(k),R===0?.12+y()*.06:.04+y()*.03)})}const _=u(p,v),w=u(p,v),x=i.getRenderTarget();n.material=o,i.setRenderTarget(_),i.render(r,s);const b=a.uniforms;return b.tAlb.value=_.texture,b.uTexel.value.set(1/p,1/v),b.uRelief.value=d.relief*(p/1024)*.5+d.relief*.5,b.uKind.value=d.kind,b.uType.value=d.type,b.uSeed.value=g,b.uClouds.value=d.clouds,n.material=a,i.setRenderTarget(w),i.render(r,s),i.setRenderTarget(x),{alb:_.texture,aux:w.texture,rts:[_,w]}}}const tr={pos:{value:[new N,new N]},col:{value:[new N(1.22,1.17,1.08),new N]}},of=`
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
}`;function ZM(i,e,t,n){const r=e.kind===3,s={tAlb:{value:t.alb},tAux:{value:t.aux},uStarPos:tr.pos,uStarCol:tr.col,uCity:{value:0},uCityCol:{value:new N(2.4,1.5,.7)},uCloudShift:{value:0},uCloudK:{value:e.clouds?.55:0},uOcean:{value:e.kind===0&&e.type!==1?1:0},uAirless:{value:e.airless?1:0},uAtmo:{value:new N(...e.atmo||[0,0,0])},uAtmoK:{value:e.atmoK},uT:{value:0},uFlow:{value:r?1:e.kind===1&&e.type===2?.4:0},uOcc:{value:[0,1,2,3].map(()=>new Wt(0,0,0,0))},uRingN:{value:new N(0,1,0)},uRingIn:{value:0},uRingOut:{value:0},tRing:{value:n?n.tex:null},uCenter:{value:new N},uRadius:{value:i.size}};return sf(s),new zt({uniforms:s,vertexShader:`${ji}
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
        ${Ji}
      }`,fragmentShader:`${Qi}
      ${of}
      ${rf}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
      void main() {
        ${er}
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
      }`})}function jM(i){return new zt({uniforms:{tAux:{value:i.aux},uStarPos:tr.pos,uStarCol:tr.col,uOcc:{value:[0,1,2,3].map(()=>new Wt(0,0,0,0))},uHoles:{value:Array.from({length:6},()=>new Wt(0,1,0,2))}},vertexShader:`${ji}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        vUv = uv;
        vDir = normalize(position);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ji}
      }`,fragmentShader:`${Qi}
      ${of}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2]; uniform vec4 uHoles[6];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        ${er}
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
      }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})}function JM(i,e,t="high"){const n=e.kind===3?.035:e.kind===0?.045:.035,r=i.size*(1+n),s=e.atmo,o=new N(s[0],s[1],s[2]),a=new Qt(new Hr(r,64,40),new zt({uniforms:{uCenter:{value:new N},uRp:{value:i.size*.998},uRa:{value:r},uStarPos:tr.pos,uStarCol:tr.col,uBeta:{value:o},uK:{value:e.atmoK},uOcc:{value:[0,1,2,3].map(()=>new Wt(0,0,0,0))}},vertexShader:`${ji}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${Ji}
        }`,fragmentShader:`${Qi}
        ${of}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${er}
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
        }`,defines:{STEPS:t==="high"?8:5},transparent:!0,blending:hi,depthWrite:!1}));return a.renderOrder=1,a}function QM(i){const r=new Uint8Array(2048);let s=Math.floor(i.hue*1e6)+i.id*97;const o=()=>(s=s*16807%2147483647)/2147483647,a=Array.from({length:3},()=>({at:.2+o()*.7,w:.006+o()*.025})),l=new Float32Array(512);let u=.5;for(let f=0;f<512;f++)u+=(o()-.5)*.18,u+=(.55-u)*.04,l[f]=u;for(let f=0;f<512;f++){const p=f/511;let v=(l[Math.max(0,f-1)]+l[f]+l[Math.min(511,f+1)])/3;v*=.65+.35*Math.sin(p*9+o()*.2),v*=Math.min(1,p/.1)*Math.min(1,(1-p)/.06),p>.42&&p<.72&&(v*=1.4),p<.18&&(v*=.45);for(const _ of a)Math.abs(p-_.at)<_.w&&(v*=.06);v=Math.max(0,Math.min(1,v));const g=.8+.2*l[f*7%512],m=p<.3?.6:.2;r.set([(170+m*20)*g,(163+m*5)*g,(150-m*25)*g,v*255],f*4)}const c=new ic(r,512,1,bi);c.colorSpace=Kn,c.magFilter=un,c.minFilter=un,c.needsUpdate=!0;const h=new rc(i.size*1.35,i.size*2.35,160,1),d=new Qt(h,new zt({uniforms:{tRing:{value:c},uIn:{value:1.35},uOut:{value:2.35},uR:{value:i.size},uCenter:{value:new N},uStarPos:tr.pos,uStarCol:tr.col},vertexShader:`${ji}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Ji}
      }`,fragmentShader:`${Qi}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${er}
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
      }`,transparent:!0,depthWrite:!1,side:si}));return d.userData.ring={tex:c,inner:1.35,outer:2.35},d}const hn="#e9e4d6",cn="#e0a13a",Fh="#7d7666",rn="#ff5a43",eS="#8b8776",Bl={concord:"#7fb6ff",boreal:"#ff8757",holds:"#d8d36a"},zh=["#9be0c8","#d59bff","#ffd1a1"];function Up(i){const e=new Set;return i.factions.map((t,n)=>{let r=Bl[t]||Bl.concord;return e.has(r)&&(r=zh[n%zh.length]),e.add(r),r})}const tS=6,Oh=.45,Bh=160,jc=new N(0,1,0),nS={corvette:.8,frigate:1,escort:1,battleship:1.35,tender:1.1,freighter:1},Gh={corvette:.6,frigate:1,escort:.95,battleship:1.7,tender:1.2,freighter:1.3},kp={value:new tt(1,1)};function iS(i){const e=i.parent!==null?160:400,t=[],n=[],r=[],s=[],o=[],a=h=>{const d=xd(i,h);return[d.x,d.y,d.z]};for(let h=0;h<=e;h++){const d=h/e*Math.PI*2;for(const f of[-1,1])t.push(...a(d)),n.push(...a(d+.01)),r.push(d),s.push(f);if(h<e){const f=h*2;o.push(f,f+1,f+2,f+1,f+3,f+2)}}const l=new jt;l.setAttribute("position",new yt(t,3)),l.setAttribute("nextPos",new yt(n,3)),l.setAttribute("ang",new yt(r,1)),l.setAttribute("side",new yt(s,1)),l.setIndex(o);const u=i.parent!==null,c=new Qt(l,new zt({uniforms:{uTh:{value:0},uRes:kp,uWidth:{value:u?1.4:2.2},uColor:{value:new mt(u?"#6b6452":"#8f8468")},uOpacity:{value:u?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
      uniform float uTh; uniform vec2 uRes; uniform float uWidth;
      varying float vF; varying float vSide;
      void main() {
        vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 n = projectionMatrix * modelViewMatrix * vec4(nextPos, 1.0);
        vec2 dir = normalize((n.xy / n.w - c.xy / c.w) * uRes + 1e-6);
        vF = fract((uTh - ang) / 6.2831853);
        float w = uWidth * pow(max(1.0 - vF, 0.0), 0.9);
        c.xy += vec2(-dir.y, dir.x) * side * w / uRes * c.w;
        vSide = side;
        gl_Position = c;
      }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying float vF; varying float vSide;
      void main() {
        float a = uOpacity * pow(max(1.0 - vF, 0.0), 1.3) * smoothstep(1.0, 0.35, abs(vSide));
        gl_FragColor = vec4(uColor, a);
      }`,transparent:!0,depthWrite:!1,side:si}));return c.frustumCulled=!1,c}function rS(i,e,t={}){const n=new dM({canvas:i,antialias:!1,powerPreference:"high-performance"});let r=t.quality||"high";const s=()=>Math.min(window.devicePixelRatio||1,r==="high"?2.5:1.5);let o=s();n.setPixelRatio(1);const a=new nc,l=new di(45,1,.02,2e4),u=fM(n);u.setSamples(4),u.setLevel(r);const c=e.getContext("2d"),h=pM(n,r);a.add(h.stars),a.environmentIntensity=.9,a.backgroundIntensity=.85;const d=r==="high"?900:400,f=new jt;{const ie=new Float32Array(d*3);for(let fe=0;fe<ie.length;fe++)ie[fe]=Math.random();f.setAttribute("position",new gn(ie,3))}const p=new zt({uniforms:{uBox:{value:50},uPR:{value:1}},vertexShader:`uniform float uBox, uPR; varying float vA;
      void main() {
        vec3 rel = (fract(position - cameraPosition / uBox) - 0.5) * uBox;
        vec4 mv = viewMatrix * vec4(cameraPosition + rel, 1.0);
        float d = -mv.z;
        vA = smoothstep(uBox * 0.5, uBox * 0.3, length(rel)) * smoothstep(uBox * 0.02, uBox * 0.08, d);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(uBox * 0.06 / max(d, 0.001), 1.0, 3.0) * uPR;
      }`,fragmentShader:`varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - r * r) * vA * 0.28;
        if (a <= 0.002) discard;
        gl_FragColor = vec4(vec3(0.8, 0.74, 0.62) * a, 1.0);
      }`,blending:hi,transparent:!0,depthWrite:!1}),v=new Jd(f,p);v.frustumCulled=!1,a.add(v);const g=mM(tS,r);a.add(g.group),a.add(new ux("#fff1dd",3,0,0)),a.add(new dx("#2a3040",.6));const m=new Ii;a.add(m);let _=[],w=6e3;const x={az:.4,pol:.95,dist:300,minDist:.8,maxDist:1400,target:new N,vaz:0,vpol:0,follow:null,ship:null,goalDist:null};let b=null;const S=KM(n,()=>r),C=[],y=new Map,T=(ie,fe)=>{const we=`${ie}:${fe}`;return y.has(we)||y.set(we,new Hr(ie,fe?128:96,fe?80:56)),y.get(we)},R=UM(a,Bh),U=WM(a),k=(ie,fe,we)=>$c?$c(ie,fe):we%R.hulls;function P(ie){h.bake((ie.seed||1)+1),a.background=h.background,a.environment=h.env;for(const ve of C)ve.dispose();C.length=0,m.clear(),ft.clear(),je.clear(),Ve.clear(),_=ie.bodies.map(ve=>{const Re=new Ii;let Ne,Ke=null,nt=null;if(ve.kind==="station")Ne=NM(ve.size*.8,ve.home&&ie.factions[ve.owner]==="holds"?3:ve.id%kM,R.uT);else if(ve.kind==="asteroid")Ne=HM(ve);else{const en=YM(ve),Xt=S(ve,en);C.push(...Xt.rts);const ai=.2+ve.hue*.3;if(ve.giant&&ve.hue>.4){Ke=QM(ve),Ke.rotation.x=Math.PI/2;const an=new Ii;an.rotation.z=ai,an.add(Ke),Re.add(an)}if(Ne=new Qt(T(ve.size,en.kind===0||en.kind===3?1:0),ZM(ve,en,Xt,Ke&&Ke.userData.ring)),Ne.rotation.order="ZYX",Ne.rotation.z=ai,en.atmo&&(nt=JM(ve,en,r),Re.add(nt)),en.clouds){const an=new Qt(T(ve.size*1.008,1),jM(Xt));an.name="clouds",Ne.add(an)}}Re.add(Ne),m.add(Re);const Ye=iS(ve),xn=new Ii;return xn.add(Ye),m.add(xn),{b:ve,g:Re,body:Ne,line:Ye,lineHolder:xn,ring:Ke,atmo:nt,owner:null,occ:[],sx:0,sy:0,sr:0,on:!1,show:1}}),b&&(b.group.removeFromParent(),b.dispose(),b=null);const fe=ie.bodies.filter(ve=>ve.kind==="asteroid");if(fe.length){const ve=fe[0];b=VM(ie.belt.r-2,ie.belt.r+ie.belt.w+2,Re=>ve.period*Math.pow(Re/ve.r,1.5),r,R.uT),m.add(b.group)}for(const ve of _){const Re=ve.b;if(Re.kind!=="planet"&&Re.kind!=="moon")continue;const Ne=Re.kind==="planet"?ie.bodies.filter(Ke=>Ke.parent===Re.id&&Ke.kind==="moon"):ie.bodies.filter(Ke=>Ke.id===Re.parent||Ke.parent===Re.parent&&Ke.kind==="moon"&&Ke.id!==Re.id);ve.occ=Ne.slice(0,4).map(Ke=>Ke.id)}const we=Math.max(...ie.bodies.filter(ve=>ve.kind==="planet").map(ve=>ve.r));j=we,x.maxDist=we*4,w=we*30}const L=new N,F=new N,O=new N,K=[],he=ie=>window.innerHeight/(2*Math.tan(fn.degToRad(l.fov/2))*Math.max(.001,l.position.distanceTo(ie)));let Q=0,oe=0;function D(){const ie=window.innerWidth,fe=window.innerHeight;Q=ie,oe=fe,n.setSize(Math.round(ie*o),Math.round(fe*o),!1),i.style.width=ie+"px",i.style.height=fe+"px",u.setSize(ie,fe,o),kp.value.set(ie,fe);const we=Math.min(window.devicePixelRatio||1,3);e.width=Math.round(ie*we),e.height=Math.round(fe*we),e.style.width=ie+"px",e.style.height=fe+"px",c.setTransform(we,0,0,we,0,0),l.aspect=ie/fe,l.updateProjectionMatrix()}const le=new N;function te(ie){le.set(0,0,0).project(l);let fe=le.z<1&&Math.abs(le.x)<1.1&&Math.abs(le.y)<1.1?1:0;if(fe){const ve=l.position;O.set(0,0,0).sub(ve);const Re=O.length();O.divideScalar(Re);for(const Ne of _){F.copy(Ne.g.position).sub(ve);const Ke=F.dot(O);if(!(Ke<0||Ke>Re)&&Math.sqrt(Math.max(0,F.lengthSq()-Ke*Ke))<Ne.b.size){fe=0;break}}fe*=fn.clamp((1.1-Math.max(Math.abs(le.x),Math.abs(le.y)))*4,0,1)}const we=u.flare;we.vis+=(fe*.9-we.vis)*Math.min(1,ie*8+.05),we.pos.set(le.x*.5+.5,le.y*.5+.5)}function Me(ie){let fe=1,we=-ie.x,ve=-ie.y,Re=-ie.z;const Ne=Math.hypot(we,ve,Re)||1;we/=Ne,ve/=Ne,Re/=Ne;for(const Ke of _){if(Ke.b.kind!=="planet"&&Ke.b.kind!=="moon")continue;const nt=K[Ke.b.id],Ye=nt.x-ie.x,xn=nt.y-ie.y,en=nt.z-ie.z,Xt=Ye*we+xn*ve+en*Re;if(Xt<=0||Xt>Ne)continue;const ai=Math.hypot(Ye-we*Xt,xn-ve*Xt,en-Re*Xt),an=Ke.b.size,li=an*.08+Xt*.012;ai<an+li&&(fe*=fn.smoothstep(ai,an-li,an+li))}return fe}const _e=(ie,fe)=>{let we=Math.imul(ie^2654435769,2246822507)^Math.imul(fe+1663821227,3266489909);return we^=we>>>15,we=Math.imul(we,739982445),((we^we>>>12)>>>0)/4294967296},Se=new Map,Y=new N,ne=new N,ye=new N,ae=new N,ge=new N;function $e(ie,fe,we,ve,Re,Ne,Ke){let nt=Se.get(ie);if(!nt){Se.set(ie,{n:we.clone(),w:new N,a:new N,t:Re});return}const Ye=Re-nt.t;if(Ye<=1e-4){Ye<-1&&(nt.t=Re);return}if(Ye>2){nt.n.copy(we),nt.w.set(0,0,0),nt.a.set(0,0,0),nt.t=Re;return}Y.crossVectors(nt.n,we).divideScalar(Ye);const xn=1-Math.exp(-Ye*6);if(ne.copy(Y).sub(nt.w).divideScalar(Ye),nt.w.lerp(Y,xn),nt.a.lerp(ne,xn),nt.n.copy(we),nt.t=Re,Ke<8)return;const en=nt.a.length(),Xt=5+_e(ie,17)*5,ai=Ne*Xt+_e(ie,23)*9,an=Math.floor(ai),li=_e(ie*7+an,31),Dn=_e(an,ie*3+1),Bi=ai-an;let Gi;if(en>=.04){if(Gi=Math.min(1,(en-.04)*3),li>.45+.35*Gi||Bi>.35+Dn*.6)return}else{if(li>.05||Bi>.3)return;Gi=.15+Dn*.2,ne.set(Dn-.5,_e(an,ie)-.5,_e(ie,an*5)-.5)}const xr=ve*.32;if(ae.crossVectors(en>=.04?nt.a:ne,we),ae.lengthSq()<1e-10)return;ae.normalize();const A=ve*(.06+.1*Gi)*(.75+Dn*.5),G=ve*.05,J=(.35+.5*Gi)*(.8+li*.4),q=Dn<.18?1:Dn>.86?2:3;q&1&&(ye.copy(fe).addScaledVector(we,xr).addScaledVector(ae,-ve*.06),R.jet(ye,ge.copy(ae).negate(),A,G,J,ie)),q&2&&(ye.copy(fe).addScaledVector(we,-xr*.85).addScaledVector(ae,ve*.06),R.jet(ye,ae,A*(.85+li*.3),G,J,ie+.5))}const ft=new Map,je=new Map,Ve=new Map,ct=new Map;let Xe=1,vt=1,vn=[],$t=0;const Jt={x:0,y:0,ok:!1};function kt(ie,fe,we,ve=Jt){return L.set(ie,fe,we).project(l),ve.ok=L.z<1&&L.z>-1,ve.x=(L.x*.5+.5)*Xe,ve.y=(-L.y*.5+.5)*vt,ve}const H=ie=>ie===at?eS:vn[ie]||hn;function dn(ie,fe,we,ve,Re,Ne,Ke,nt=1){c.beginPath();let Ye=!1;for(let xn=0;xn<=64;xn++){const en=xn/64*Math.PI*2,Xt=kt(ie+Math.cos(en)*ve,fe,we+Math.sin(en)*ve);if(!Xt.ok){Ye=!1;continue}Ye?c.lineTo(Xt.x,Xt.y):(c.moveTo(Xt.x,Xt.y),Ye=!0)}c.strokeStyle=Re,c.globalAlpha=Ne,c.lineWidth=nt,c.setLineDash(Ke||[]),c.stroke(),c.setLineDash([]),c.globalAlpha=1}function At(ie,fe,we,ve,Re=1){c.beginPath();let Ne=!1;for(const Ke of ie){const nt=kt(Ke.x,Ke.y,Ke.z);if(!nt.ok){Ne=!1;continue}Ne?c.lineTo(nt.x,nt.y):(c.moveTo(nt.x,nt.y),Ne=!0)}c.strokeStyle=fe,c.globalAlpha=we,c.lineWidth=Re,c.setLineDash(ve||[]),c.stroke(),c.setLineDash([]),c.globalAlpha=1}function I(ie,fe,we,ve,Re,Ne,Ke,nt=1){c.save(),c.translate(fe,we),c.rotate(ve),c.globalAlpha=nt,c.strokeStyle=Ne,c.fillStyle=Ne,c.lineWidth=1.3,c.lineJoin="miter";const Ye=Re;c.beginPath(),ie==="corvette"?(c.moveTo(Ye,0),c.lineTo(-Ye*.7,Ye*.45),c.lineTo(-Ye*.7,-Ye*.45)):ie==="frigate"?(c.moveTo(Ye*1.1,0),c.lineTo(-Ye*.8,Ye*.7),c.lineTo(-Ye*.35,0),c.lineTo(-Ye*.8,-Ye*.7)):ie==="escort"?(c.moveTo(Ye,0),c.lineTo(0,Ye*.8),c.lineTo(-Ye,0),c.lineTo(0,-Ye*.8)):ie==="battleship"?(c.moveTo(Ye*1.5,0),c.lineTo(Ye*.5,Ye*.8),c.lineTo(-Ye*1.2,Ye*.8),c.lineTo(-Ye*1.2,-Ye*.8),c.lineTo(Ye*.5,-Ye*.8)):ie==="tender"?c.arc(0,0,Ye*.85,0,Math.PI*2):ie==="freighter"?c.rect(-Ye*.7,-Ye*.45,Ye*1.4,Ye*.9):(c.moveTo(Ye,0),c.lineTo(0,Ye),c.lineTo(-Ye,0),c.lineTo(0,-Ye)),c.closePath(),Ke?c.stroke():c.fill(),ie==="tender"&&(c.strokeStyle="#05060a",c.beginPath(),c.moveTo(-Ye*.5,0),c.lineTo(Ye*.5,0),c.moveTo(0,-Ye*.5),c.lineTo(0,Ye*.5),c.stroke()),c.restore()}function M(ie,fe,we,ve,Re=1,Ne=10,Ke="center"){c.font=`600 ${Ne}px Rajdhani, system-ui, sans-serif`;try{c.letterSpacing="1.5px"}catch{}c.textAlign=Ke,c.textBaseline="middle",c.globalAlpha=Re,c.fillStyle=ve,c.fillText(ie.toUpperCase(),fe,we),c.globalAlpha=1}let X=0,j=500,ee=!1;const be={battle:0,burn:0,zoom:0};function Pe(ie,fe,we,ve){const Re=Math.min(.1,Math.max(0,ve-X));X=ve,Xe=window.innerWidth,vt=window.innerHeight,(Xe!==Q||vt!==oe)&&D(),vn=fe.colors||Up(ie);const Ne=fe.me,Ke=ie.time+(ie.acc||0),nt=ie.acc||0;tr.pos.value[0].set(0,0,0),tr.col.value[1].set(0,0,0),g.group.scale.setScalar(ie.stars[0].size),g.update(ve),b&&b.update(Ke),h.update(ve,o);for(const E of _)K[E.b.id]=on(ie,E.b,Ke);const Ye=E=>fe.dev||E.owner===Ne||E.seen[Ne]>0,xn=(E,V)=>V.set(E.x+E.vx*nt,E.y+E.vy*nt,E.z+E.vz*nt);if(x.ship!=null){const E=ie.ships.find(V=>V.id===x.ship);!E||!Ye(E)?x.ship=null:x.target.lerp(xn(E,L),Math.min(1,Re*8))}if(x.follow!==null){const E=K[x.follow];x.target.lerp(L.set(E.x,E.y,E.z),Math.min(1,Re*8))}else x.ship==null&&(x.target.y*=1-Math.min(1,Re*2));const en=x.maxDist*.35,Xt=Math.hypot(x.target.x,x.target.z);Xt>en&&(x.target.x*=en/Xt,x.target.z*=en/Xt),fe.dragging||(x.az+=x.vaz,x.pol+=x.vpol,x.vaz*=.92,x.vpol*=.92),x.goalDist&&(x.dist+=(x.goalDist-x.dist)*Math.min(1,Re*4),Math.abs(x.goalDist-x.dist)<.01*x.dist&&(x.goalDist=null)),x.pol=fn.clamp(x.pol,.12,Math.PI-.12);const ai=x.follow!==null?ie.bodies[x.follow].size*1.3+.3:.8;x.minDist+=(ai-x.minDist)*Math.min(1,Re*3),x.dist=fn.clamp(x.dist,x.minDist,x.maxDist),l.position.setFromSphericalCoords(x.dist,x.pol,x.az).add(x.target),l.lookAt(x.target);const an=fn.clamp(x.dist*.02,.01,12);Math.abs(an-l.near)>l.near*.05&&(l.near=an,l.far=w,l.updateProjectionMatrix()),l.updateMatrixWorld();for(const E of _){const V=E.b,$=K[V.id];if(E.g.position.set($.x,$.y,$.z),V.parent!==null){const de=K[V.parent];E.lineHolder.position.set(de.x,de.y,de.z)}if(E.line.material.uniforms.uTh.value=V.phase+2*Math.PI*Ke/V.period,V.kind==="station"){E.body.rotation.z+=Re*(E.body.userData.spin??.5);const de=E.body.userData.rotor;de&&(de.rotation.z+=Re*de.userData.spin),E.body.userData.set(H(V.owner),Me($),V.owner!==at)}else if(V.kind==="asteroid")E.body.rotation.x+=Re*.3,E.body.rotation.y+=Re*.2;else{E.body.rotation.y+=Re*.05;const de=E.body.getObjectByName("clouds");de&&(de.rotation.y+=Re*.012);const He=E.body.material.uniforms;He&&(He.uT.value=ve,de&&(He.uCloudShift.value=-de.rotation.y/(Math.PI*2)),He.uCenter.value.set($.x,$.y,$.z),E.occ.forEach((ot,Fe)=>{const it=K[ot];He.uOcc.value[Fe].set(it.x,it.y,it.z,ie.bodies[ot].size)}),de&&(de.material.uniforms.uOcc.value=He.uOcc.value),E.atmo&&(E.atmo.material.uniforms.uCenter.value.set($.x,$.y,$.z),E.atmo.material.uniforms.uOcc.value=He.uOcc.value),E.ring&&(E.ring.updateMatrixWorld(!0),He.uRingN.value.set(0,0,1).transformDirection(E.ring.matrixWorld),He.uRingIn.value=E.ring.userData.ring.inner,He.uRingOut.value=E.ring.userData.ring.outer,E.ring.material.uniforms.uCenter.value.set($.x,$.y,$.z)),He.uCity&&E.owner!==V.owner&&(He.uCity.value=V.owner===at?0:1))}if(E.owner=V.owner,V.parent!==null){const de=K[V.parent],He=V.r*he(F.set(de.x,de.y,de.z));E.show=fe.selBody===V.id||fe.target===V.id||x.follow===V.id?1:fn.smoothstep(He,16,34),E.lineHolder.visible=E.show>.05,E.line.material.uniforms.uOpacity.value=.55*E.show}else E.show=1;const se=kt($.x,$.y,$.z);E.on=se.ok,E.sx=se.x,E.sy=se.y,E.sr=V.size*he(F.set($.x,$.y,$.z))}const li=(E,V,$)=>{if(fe.dev)return!0;for(const se of ie.ships)if(se.owner===Ne&&Math.hypot(se.x-E,se.y-V,se.z-$)<140)return!0;for(const se of ie.bodies)if(se.owner===Ne){const de=K[se.id];if(Math.hypot(de.x-E,de.y-V,de.z-$)<160)return!0}return!1},Dn=(E,V,$,se,de=1)=>{if(!t.onSound)return;const He=kt(V,$,se),ot=l.position.distanceTo(F.set(V,$,se));t.onSound(E,fn.clamp(He.x/Xe*2-1,-1,1),fn.clamp(de*40/(ot+30),.08,1))};$t=Math.max(0,$t-Re*.35);for(const E of fe.fx||[]){if(!li(E.x,E.y,E.z))continue;const V=H(E.owner),$=L.set(E.x,E.y,E.z).clone();if(E.type==="rail"){const se=new N(E.tx,E.ty,E.tz);E.hit||se.add(F.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(1.2)).lerp($,-.6),U.beam($,se,"#eaf2ff",.35),U.bolt($,se,"#ffffff",.12,1.2,.05),E.hit&&U.impact(se,"#ffd9a0",!0),Dn("rail",E.x,E.y,E.z),E.hit&&Dn("railHit",E.tx,E.ty,E.tz,.8),$t=Math.min(1,$t+.12)}else if(E.type==="pdc"){const se=new N(E.tx,E.ty,E.tz);for(let de=0;de<5;de++)U.bolt($,F.copy(se).add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.5)),"#ffc46b",.22,.25,.016,de*.04);Dn("pdc",E.x,E.y,E.z,.7),$t=Math.min(1,$t+.04)}else if(E.type==="pdcKill"){const se=new N(E.fx,E.fy,E.fz);for(let de=0;de<6;de++)U.bolt(se,F.copy($).add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.4)),"#ffc46b",.2,.25,.016,de*.03);U.intercept($),U.explosion($,.25),Dn("pdc",E.fx,E.fy,E.fz,.7),Dn("pdcKill",E.x,E.y,E.z,.7),$t=Math.min(1,$t+.06)}else if(E.type==="torpHit")U.explosion($,1.3),U.ring($,"#ffd6a8",2.2,.9),Dn("torpHit",E.x,E.y,E.z),$t=Math.min(1,$t+.3);else if(E.type==="boom"){U.explosion($,1.2+E.size),U.ring($,V,3+E.size*2,1.6);for(let se=0;se<3;se++)U.explosion(F.copy($).add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(E.size)),.5+Math.random()*.5);Dn("boom",E.x,E.y,E.z),$t=1}else E.type==="launch"&&Dn("torpLaunch",E.x,E.y,E.z)}U.update(ve,2*Math.tan(fn.degToRad(l.fov/2))/vt),c.clearRect(0,0,Xe,vt);const Bi=fe.sel||new Set,Gi=x.dist>260;if(ee=x.dist>j*.45,fe.routes)for(const E of fe.routes){const V=E.key===fe.routeKey;At(E.path,E.ok?V?hn:cn:rn,V?.95:.35,V?[]:[3,5],V?1.6:1)}if(fe.paths)for(const[E,V]of fe.paths)Bi.has(E)&&At(V,H(Ne),.55,[6,4],1.1);for(const E of _){if(!E.on)continue;const V=E.b;if(E.show<.05)continue;if(ee&&V.kind==="asteroid"&&fe.selBody!==V.id&&fe.target!==V.id){V.owner!==at&&(c.fillStyle=H(V.owner),c.fillRect(E.sx-1.5,E.sy-1.5,3,3));continue}const $=Math.max(E.sr*1.25+4,V.kind==="planet"?9:6);if(V.kind==="planet"){const lt=_.filter(gt=>gt.b.parent===V.id);lt.length&&lt[0].show<.5&&(lt.forEach((gt,xt)=>{c.fillStyle=H(gt.b.owner),c.globalAlpha=.9*(1-lt[0].show*2),c.fillRect(E.sx-(lt.length*6-2)/2+xt*6,E.sy+$+19,4,4)}),c.globalAlpha=1)}const se=H(V.owner),de=fe.selBody===V.id,He=fe.target===V.id,ot=E.sr>60;c.lineWidth=de||He?1.8:1.1,c.strokeStyle=de?hn:se,c.globalAlpha=(V.owner===at?.45:.9)*(ot?.35:1),c.beginPath(),c.arc(E.sx,E.sy,$,0,Math.PI*2),c.stroke(),V.home&&(c.beginPath(),c.arc(E.sx,E.sy,$+3,0,Math.PI*2),c.stroke()),fe.tutWorld===V.id&&(c.setLineDash([6,5]),c.lineWidth=2,c.strokeStyle=cn,c.globalAlpha=1,c.beginPath(),c.arc(E.sx,E.sy,$+13,0,Math.PI*2),c.stroke(),c.setLineDash([])),He&&(c.setLineDash([2,4]),c.strokeStyle=cn,c.beginPath(),c.arc(E.sx,E.sy,$+7,0,Math.PI*2),c.stroke(),c.setLineDash([])),c.globalAlpha=1;const Fe=Hn(V);if(Fe>0&&!ee){const lt=Math.round(Fe/Ee.batteryHp)*3,gt=Math.ceil(V.bhp/Fe*lt);for(let xt=0;xt<lt;xt++){const ke=-Math.PI/2+(xt-(lt-1)/2)*.22;c.strokeStyle=xt<gt?se:Fh,c.globalAlpha=xt<gt?.95:.5,c.lineWidth=2,c.beginPath(),c.arc(E.sx,E.sy,$+(V.home?7:4),ke-.07,ke+.07),c.stroke()}c.globalAlpha=1}if(V.yt>0&&(c.strokeStyle=H(V.yo),c.lineWidth=3,c.beginPath(),c.arc(E.sx,E.sy,$+(V.home?11:8),-Math.PI/2,-Math.PI/2+V.yt/Ud(V)*Math.PI*2),c.stroke()),V.owner===Ne&&V.queue.length&&!ee){const lt=V.queue[0];c.strokeStyle=hn,c.globalAlpha=.8,c.lineWidth=1.5,c.beginPath(),c.arc(E.sx,E.sy,Math.max(3,$-3),Math.PI/2,Math.PI/2+(1-lt.left/lt.total)*Math.PI*2),c.stroke(),c.globalAlpha=1}V.blockaded&&V.owner===Ne&&(c.strokeStyle=rn,c.setLineDash([4,3]),c.lineWidth=1.2,c.beginPath(),c.arc(E.sx,E.sy,$+5,0,Math.PI*2),c.stroke(),c.setLineDash([])),V.trait&&!ee&&(c.fillStyle=cn,c.globalAlpha=.9,c.beginPath(),c.moveTo(E.sx+$+6,E.sy-3),c.lineTo(E.sx+$+9,E.sy),c.lineTo(E.sx+$+6,E.sy+3),c.lineTo(E.sx+$+3,E.sy),c.closePath(),c.fill(),c.globalAlpha=1),ie.agents&&ie.agents.some(lt=>lt.owner===Ne&&lt.body===V.id)&&(c.strokeStyle=hn,c.lineWidth=1,c.beginPath(),c.ellipse(E.sx-$-7,E.sy,4,2.5,0,0,Math.PI*2),c.stroke(),c.fillStyle=hn,c.fillRect(E.sx-$-8,E.sy-1,2,2));const it=V.parent!==null?_[V.parent]:null;!(it&&Math.hypot(it.sx-E.sx,it.sy-E.sy)<46)&&!(V.kind==="asteroid"&&x.dist>900)&&!ot&&M(V.name,E.sx,E.sy+$+(V.yt>0?18:11),de?hn:V.owner===at?Fh:se,de?1:.8,V.kind==="planet"?10.5:9)}R.begin(ve,o),ct.clear();let xr=0,A=0;const G=new Set,J=new Map;for(const E of ie.ships){if(!Ye(E))continue;G.add(E.id);const V=fe.dev||E.owner===Ne||E.seen[Ne]===2;E.owner!==Ne&&je.set(E.id,{x:E.x,y:E.y,z:E.z,vx:E.vx,vy:E.vy,vz:E.vz,t:Ke,owner:E.owner,cls:V&&!E.unknown?E.cls:null}),xn(E,L);const $=L.clone();let se=ft.get(E.id);se||(se=new N(E.vx,E.vy,E.vz),se.lengthSq()<1e-6&&se.set(1,0,0),se.normalize(),ft.set(E.id,se));const de=Math.hypot(E.tx,E.ty,E.tz);if(E.burn&&de>1e-4)F.set(E.tx,E.ty,E.tz).divideScalar(de),se.lerp(F,Math.min(1,Re*1.6*Math.max(1,fe.warp||1))).normalize();else if(E.at!==null){const Gt=K[E.at];F.set(-($.z-Gt.z),0,$.x-Gt.x).normalize(),se.lerp(F,Math.min(1,Re*2)).normalize()}const He=he($),ot=Oh*(Gh[E.cls]||1),Fe=ot*He,it=V?H(E.owner):cn;if(E.owner===Ne&&E.burn&&(xr+=de/E.st.accel),A<Bh&&V){A++;const Gt=1-fn.smoothstep(Fe,4,16),Mt=Gt<=0?null:[E.burn?7:4.5,(E.burn?.9:.5)*Gt,!!E.burn],_n=.85+E.id*37%20/100-(es(E)?.3:0),ln=$c?Oh*(nS[E.cls]||1):ot;R.add(k(ie.factions[E.owner],E.cls,E.id),$,se,[ln,ln,ln],it,_n,E.id,!!E.burn,(.45+.55*Math.min(1,de/(E.st.accel||.1)))*(.8+Math.sin(ve*40+E.id)*.05),Mt,Fe,Me($)),$e(E.id,$,se,ln*(Gh[E.cls]||1),Ke,ve,Fe)}else E.burn&&R.add(0,$,se,[.01,.01,.01],it,1,E.id,!0,1.4,[7,.9,!0],0,1);const Tt=kt($.x,$.y,$.z);if(!Tt.ok)continue;const lt=Tt.x,gt=Tt.y;let xt=E.at!==null?_[E.at]:null;if(xt&&xt.show<.5&&(xt=_[xt.b.parent]),xt&&xt.on&&(xt.b.id!==E.at||pr(xt.b)*He<22)){const Gt=xt.b.id;J.has(Gt)||J.set(Gt,[]),J.get(Gt).push({s:E,known:V,c:it});continue}const ke=kt($.x+se.x,$.y+se.y,$.z+se.z);q(E,lt,gt,Math.atan2(ke.y-gt,ke.x-lt),Fe,V,it)}for(const[E,V]of J){const $=_[E],He=(ee&&$.b.kind==="asteroid"&&fe.selBody!==$.b.id&&fe.target!==$.b.id?1:Math.max($.sr*1.25+4,$.b.kind==="planet"?9:6)+($.b.home?3:0))+(Hn($.b)&&!ee?($.b.home?7:4)+2:0)+6;V.sort((it,Tt)=>it.s.owner-Tt.s.owner||it.s.id-Tt.s.id);const ot=ee?10:15,Fe=$.sx-(V.length-1)*ot/2;V.forEach((it,Tt)=>q(it.s,Fe+Tt*ot,$.sy-He,-Math.PI/2,0,it.known,it.c,0,!0))}function q(E,V,$,se,de,He,ot,Fe,it=!1){const Tt=E.owner===Ne,lt=Bi.has(E.id),gt=fe.targetShip===E.id,xt=He&&!E.unknown?E.cls:null,ke=xt==="battleship"?6.5:xt==="corvette"?4.5:5.5;ct.set(E.id,{x:V,y:$,r:Math.max(16,de*.6)});const Gt=it?1:1-fn.smoothstep(de,18,40);if(ee&&xt==="freighter"&&!lt&&!gt)return;Gt>.02&&I(xt,V,$,se,ee?ke*.75:ke,ot,!Tt&&!He,Gt*(es(E)?.6:1));const Mt=He&&!ee?Si(E):0;for(let _n=0;_n<Mt;_n++)c.fillStyle=cn,c.fillRect(V-(Mt*4-1)/2+_n*4,$-ke-5,3,1.5);if(lt||gt){c.strokeStyle=gt&&!Tt?rn:hn,c.lineWidth=1.2;const _n=Math.max(11,de*.7);for(let ln=0;ln<4;ln++){const Ti=ln*Math.PI/2+Math.PI/4;c.beginPath(),c.arc(V,$,_n,Ti-.35,Ti+.35),c.stroke()}}if(Tt&&xt!=="freighter"){const ln=$+(it?-13:Math.max(10,de*.7)+3);(lt||!ee&&(E.dv<E.st.dv*.3||E.hull<E.st.hull*.6))&&(c.globalAlpha=.9,c.fillStyle="rgba(0,0,0,0.5)",c.fillRect(V-14/2,ln,14,5),c.fillStyle=E.hull<E.st.hull*.35?rn:hn,c.fillRect(V-14/2,ln,14*Math.max(0,E.hull/E.st.hull),2),c.fillStyle=cn,c.fillRect(V-14/2,ln+3,14*Math.max(0,Math.min(1,E.dv/E.st.dv)),2),c.globalAlpha=1),es(E)&&(c.strokeStyle=rn,c.lineWidth=1.5,c.beginPath(),c.moveTo(V-9,$-9),c.lineTo(V-4,$-4),c.moveTo(V-4,$-9),c.lineTo(V-9,$-4),c.stroke())}E.board>0&&(c.strokeStyle=H(E.boardBy),c.lineWidth=2,c.beginPath(),c.arc(V,$,14,-Math.PI/2,-Math.PI/2+Math.min(1,E.board/(E.st.civil?Ee.board.freighter:Ee.board.warship))*Math.PI*2),c.stroke()),(lt||gt)&&He&&xt!=="freighter"&&M(E.name||"",V,$-(it?22:Math.max(16,de*.7)+8),gt&&!Tt?rn:hn,.95,10)}be.burn=Math.min(1,xr/2);for(const[E,V]of je){if(G.has(E))continue;const $=Ke-V.t;if($>90||!ie.ships.some(de=>de.id===E)&&!ie.mp){je.delete(E);continue}if($>90){je.delete(E);continue}const se=kt(V.x+V.vx*$,V.y+V.vy*$,V.z+V.vz*$);se.ok&&(I(V.cls,se.x,se.y,0,5,H(V.owner),!0,.5*(1-$/90)),c.strokeStyle=H(V.owner),c.globalAlpha=.25*(1-$/90),c.setLineDash([2,3]),c.beginPath(),c.arc(se.x,se.y,8+$*.25,0,Math.PI*2),c.stroke(),c.setLineDash([]),c.globalAlpha=1)}const Z=new Set;for(const E of ie.torps){if(!fe.dev&&E.owner!==Ne&&!li(E.x,E.y,E.z))continue;Z.add(E.id);const V=L.set(E.x+E.vx*nt,E.y+E.vy*nt,E.z+E.vz*nt).clone(),$=Math.hypot(E.vx,E.vy,E.vz)||1;F.set(E.vx/$,E.vy/$,E.vz/$),R.add(0,V,F,[.01,.01,.01],"#ffd9b0",1,E.id,!!E.burn,.7,[E.burn?5:2.5,E.burn?1:.5,!!E.burn],0,1);const se=kt(V.x,V.y,V.z);if(!se.ok)continue;let de=Ve.get(E.id);de||(de=[],Ve.set(E.id,de)),de.push(V),de.length>14&&de.shift(),At(de,E.owner===Ne?hn:rn,.7,null,1),c.fillStyle=E.owner===Ne?hn:rn,c.fillRect(se.x-1.5,se.y-1.5,3,3)}for(const E of Ve.keys())Z.has(E)||Ve.delete(E);if(R.end(),Bi.size&&Bi.size<=4&&!Gi)for(const E of ie.ships){if(!Bi.has(E.id)||E.st.civil)continue;const V=E.x+E.vx*nt,$=E.y+E.vy*nt,se=E.z+E.vz*nt;E.st.rails.length&&dn(V,$,se,E.st.railRange,hn,.35,null),E.st.tubes&&dn(V,$,se,Ee.torpRange,cn,.3,[6,6]),dn(V,$,se,E.st.cold,hn,.2,[1,5])}if(fe.selBody!=null&&ie.bodies[fe.selBody].owner===Ne&&!Gi){const E=ie.bodies[fe.selBody],V=K[E.id];dn(V.x,V.y,V.z,Ee.cold*Tl(E,ie),hn,.2,[1,5]),Hn(E)&&dn(V.x,V.y,V.z,Ee.railRange+E.size,hn,.35,null)}if(fe.plot){const E=ie.ships.find(V=>V.id===fe.plot.ship);if(E){const V=kt(E.x,E.y,E.z),$=V.x,se=V.y;c.strokeStyle=cn,c.lineWidth=1.6,c.beginPath(),c.moveTo($,se),c.lineTo(fe.plot.x,fe.plot.y),c.stroke(),c.beginPath(),c.arc(fe.plot.x,fe.plot.y,5,0,Math.PI*2),c.stroke(),fe.plot.path&&At(fe.plot.path,cn,.8,[5,4],1.2)}}return te(Re),Ap.value=vt*o/(2*Math.tan(fn.degToRad(l.fov/2))),p.uniforms.uBox.value=x.dist*.9,p.uniforms.uPR.value=o,u.uniforms.uFocus.value=x.dist,u.uniforms.uDof.value=r==="high"?1-fn.smoothstep(x.dist,10,40):0,be.battle=$t,be.zoom=1-fn.smoothstep(x.dist,15,300),fc(ve),u.render(a,l,ve),be}function re(ie,fe,we=!0){let ve=null,Re=1/0;if(we){for(const[Ne,Ke]of ct){const nt=Math.hypot(Ke.x-ie,Ke.y-fe);nt<Math.max(20,Ke.r)&&nt<Re&&(Re=nt,ve={ship:Ne})}if(ve)return ve}for(const Ne of _){if(!Ne.on||Ne.show<.5)continue;const Ke=Math.hypot(Ne.sx-ie,Ne.sy-fe),nt=Math.max(26,Ne.sr+12);Ke<nt&&Ke<Re&&(Re=Ke,ve={body:Ne.b.id})}return ve}function ue(ie,fe){const we=new N(ie/window.innerWidth*2-1,-(fe/window.innerHeight)*2+1,.5).unproject(l),ve=new Zd(l.position,we.sub(l.position).normalize()),Re=new $i(jc.clone(),-x.target.y),Ne=ve.intersectPlane(Re,new N);if(Ne&&Ne.distanceTo(l.position)<x.dist*4)return Ne;const Ke=new $i().setFromNormalAndCoplanarPoint(l.getWorldDirection(new N),x.target);return ve.intersectPlane(Ke,new N)}const Ce=()=>{x.follow=null,x.ship=null};function Ze(ie,fe,we){Ce(),x.goalDist=null;const ve=ue(ie,fe),Re=fn.clamp(x.dist*we,x.minDist,x.maxDist),Ne=Re/x.dist;x.dist=Re,ve&&x.target.lerp(ve,1-Ne)}function Ue(ie,fe){Ce();const we=2*x.dist*Math.tan(fn.degToRad(l.fov/2))/window.innerHeight,ve=new N().setFromMatrixColumn(l.matrixWorld,0),Re=new N().crossVectors(jc,ve).normalize();x.target.addScaledVector(ve,-ie*we).addScaledVector(Re,fe*we)}function De(ie,fe,we=!0){x.ship=null,x.follow=fe,!(fe===null||!we)&&(x.goalDist=Math.max(x.minDist,ie.bodies[fe].size*9+6))}function Je(ie,fe){const we=re(ie,fe,!1);return we?_[we.body].g.position.clone():ue(ie,fe)||x.target.clone()}function st(ie,fe,we){Ce(),x.goalDist=null;const ve=new N().subVectors(l.position,x.target),Re=new hx().setFromVector3(ve);we=fn.clamp(Re.phi+we,.15,Math.PI-.15)-Re.phi;const Ke=new N().setFromMatrixColumn(l.matrixWorld,0).normalize(),nt=new jn().setFromAxisAngle(jc,fe).multiply(new jn().setFromAxisAngle(Ke,we)),Ye=l.position.clone().sub(ie).applyQuaternion(nt).add(ie);x.target.sub(ie).applyQuaternion(nt).add(ie),Re.setFromVector3(Ye.clone().sub(x.target)),x.az=Re.theta,x.pol=Re.phi,x.dist=Re.radius}function ht(ie,fe=!1){x.follow=null,x.ship=ie,fe&&(x.goalDist=9)}const W=()=>x.follow!==null||x.ship!=null;function Le(ie){x.goalDist=null,x.dist=fn.clamp(x.dist*ie,x.minDist,x.maxDist)}function ce(ie,fe,we){if(W()){Le(we);return}const ve=re(ie,fe,!1);if(x.goalDist=null,!ve){Ze(ie,fe,we);return}const Re=_[ve.body].g.position,Ne=fn.clamp(x.dist*we,x.minDist,x.maxDist);x.target.lerp(Re,1-Ne/x.dist),x.dist=Ne}function Ie(ie){const fe=_[ie];return{x:fe.sx,y:fe.sy}}function Ge(ie){return ct.get(ie)||null}function me(ie,fe){const we=ue(ie,fe);return we?{x:we.x,y:we.y,z:we.z}:null}function Qe(ie){r=ie,o=s(),u.setSamples(4),u.setLevel(ie),D()}let We=0,Nt=0,Ct=null,ni=0,Nn=null,Ra=!1;function fc(ie){if(Ct!==null){const Re=ie-Ct;Re>0&&Re<.5&&(Nt+=Re,We++)}if(Ct=ie,We<90)return;const fe=Nt/We;Nt=0,We=0;const we=s(),ve=we>=1.5?Math.max(1.25,we*.8):we*.9;if(Nn){fe>Nn.avg*.9&&(o=Nn.pr,Ra=!0,D()),Nn=null;return}!Ra&&fe>1/45&&o>ve?(Nn={pr:o,avg:fe},o=Math.max(ve,o-.25),ni=ie+20,D()):fe<1/57&&o<we&&ie>ni&&(o=Math.min(we,o+.25),D())}return{_debug:{scene:a,renderer:n,camera:l},build:P,render:Pe,resize:D,setQuality:Qe,pick:re,orbit:x,zoomAt:Ze,zoomBy:Le,pan:Ue,focus:De,followShip:ht,following:W,zoomToward:ce,screenOf:Ie,screenOfShip:Ge,worldAt:me,pivotAt:Je,rotateAround:st}}class sS{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return oS(e).buffer}}function oS(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,n),n+=r.byteLength}return t}function Np(i){return new aS(i).unpack()}function Fp(i){const e=new lS,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class aS{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,r="",s,o;for(;n<e;)s=t[n],s<160?(o=s,n++):(s^192)<32?(o=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(o=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),r+=String.fromCodePoint(o);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,r=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class lS{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>n(r+1)):n(r+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),r=e/2**n-1,s=Math.floor(r*2**52),o=2**32,a=t<<31|n+1023<<20|s/o&1048575,l=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(l)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new sS,this._textEncoder=new TextEncoder}}let zp=!0,Op=!0;function Xo(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function vs(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){af("Unable to polyfill events");return}const r=i.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(a,l){if(a!==e)return s.apply(this,arguments);const u=c=>{const h=t(c);h&&(l.handleEvent?l.handleEvent(h):l(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(l,u),s.apply(this,[a,u])};const o=r.removeEventListener;r.removeEventListener=function(a,l){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(l))return o.apply(this,arguments);const u=this._eventMap[e].get(l);return this._eventMap[e].delete(l),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,u])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function cS(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(zp=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function uS(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Op=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function af(){if(typeof window=="object"){if(zp)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function lf(i,e){Op&&console.warn(i+" is deprecated, please use "+e+" instead.")}function dS(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(n){const r=parseInt(n.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Xo(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Xo(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Xo(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Xo(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Hh(i){return Object.prototype.toString.call(i)==="[object Object]"}function Bp(i){return Hh(i)?Object.keys(i).reduce(function(e,t){const n=Hh(i[t]),r=n?Bp(i[t]):i[t],s=n&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):i}function td(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?td(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(r=>{td(i,i.get(r),t)})}))}function Vh(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&td(i,a,r)})}),r}const Wh=af;function Gp(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const l={};return Object.keys(a).forEach(u=>{if(u==="require"||u==="advanced"||u==="mediaSource")return;const c=typeof a[u]=="object"?a[u]:{ideal:a[u]};c.exact!==void 0&&typeof c.exact=="number"&&(c.min=c.max=c.exact);const h=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(c.ideal!==void 0){l.optional=l.optional||[];let d={};typeof c.ideal=="number"?(d[h("min",u)]=c.ideal,l.optional.push(d),d={},d[h("max",u)]=c.ideal,l.optional.push(d)):(d[h("",u)]=c.ideal,l.optional.push(d))}c.exact!==void 0&&typeof c.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[h("",u)]=c.exact):["min","max"].forEach(d=>{c[d]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[h(d,u)]=c[d])})}),a.advanced&&(l.optional=(l.optional||[]).concat(a.advanced)),l},r=function(a,l){if(e.version>=61)return l(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const u=function(c,h,d){h in c&&!(d in c)&&(c[d]=c[h],delete c[h])};a=JSON.parse(JSON.stringify(a)),u(a.audio,"autoGainControl","googAutoGainControl"),u(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let u=a.video.facingMode;u=u&&(typeof u=="object"?u:{ideal:u});const c=e.version<66;if(u&&(u.exact==="user"||u.exact==="environment"||u.ideal==="user"||u.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!c)){delete a.video.facingMode;let h;if(u.exact==="environment"||u.ideal==="environment"?h=["back","rear"]:(u.exact==="user"||u.ideal==="user")&&(h=["front"]),h)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(p=>p.kind==="videoinput");let f=d.find(p=>h.some(v=>p.label.toLowerCase().includes(v)));return!f&&d.length&&h.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=u.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),Wh("chrome: "+JSON.stringify(a)),l(a)})}a.video=n(a.video)}return Wh("chrome: "+JSON.stringify(a)),l(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,l,u){r(a,c=>{t.webkitGetUserMedia(c,l,h=>{u&&u(s(h))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(l){return r(l,u=>a(u).then(c=>{if(u.audio&&!c.getAudioTracks().length||u.video&&!c.getVideoTracks().length)throw c.getTracks().forEach(h=>{h.stop()}),new DOMException("","NotFoundError");return c},c=>Promise.reject(s(c))))}}}function Hp(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Vp(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(l=>l.track&&l.track.id===s.track.id):o={track:s.track};const a=new Event("track");a.track=s.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[r.stream],this.dispatchEvent(a)}),r.stream.getTracks().forEach(s=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(l=>l.track&&l.track.id===s.id):o={track:s};const a=new Event("track");a.track=s,a.receiver=o,a.transceiver={receiver:o},a.streams=[r.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else vs(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Wp(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,l){let u=r.apply(this,arguments);return u||(u=e(this,a),this._senders.push(u)),u};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const l=this._senders.indexOf(a);l!==-1&&this._senders.splice(l,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(l=>l.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function $p(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const r=i.RTCPeerConnection.prototype.addTrack;r&&(i.RTCPeerConnection.prototype.addTrack=function(){const o=r.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>Vh(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const s=n.apply(this,[]);return s.forEach(o=>o._pc=this),s}),vs(i,"track",r=>(r.receiver._pc=r.srcElement,r)),i.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>Vh(o,s.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const r=arguments[0];let s,o,a;return this.getSenders().forEach(l=>{l.track===r&&(s?a=!0:s=l)}),this.getReceivers().forEach(l=>(l.track===r&&(o?a=!0:o=l),l.track===r)),a||s&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Xp(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const l=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(l)===-1&&this._shimmedLocalStreams[a.id].push(l):this._shimmedLocalStreams[a.id]=[a,l],l};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(u=>{if(this.getSenders().find(h=>h.track===u))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const l=this.getSenders().filter(u=>a.indexOf(u)===-1);this._shimmedLocalStreams[o.id]=[o].concat(l)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const l=this._shimmedLocalStreams[a].indexOf(o);l!==-1&&this._shimmedLocalStreams[a].splice(l,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),r.apply(this,arguments)}}function qp(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Xp(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const c=t.apply(this);return this._reverseStreams=this._reverseStreams||{},c.map(h=>this._reverseStreams[h.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(c){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},c.getTracks().forEach(h=>{if(this.getSenders().find(f=>f.track===h))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[c.id]){const h=new i.MediaStream(c.getTracks());this._streams[c.id]=h,this._reverseStreams[h.id]=c,c=h}n.apply(this,[c])};const r=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(c){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[c.id]||c]),delete this._reverseStreams[this._streams[c.id]?this._streams[c.id].id:c.id],delete this._streams[c.id]},i.RTCPeerConnection.prototype.addTrack=function(c,h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(v=>v===c))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===c))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const p=this._streams[h.id];if(p)p.addTrack(c),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new i.MediaStream([c]);this._streams[h.id]=v,this._reverseStreams[v.id]=h,this.addStream(v)}return this.getSenders().find(v=>v.track===c)};function s(u,c){let h=c.sdp;return Object.keys(u._reverseStreams||[]).forEach(d=>{const f=u._reverseStreams[d],p=u._streams[f.id];h=h.replace(new RegExp(p.id,"g"),f.id)}),new RTCSessionDescription({type:c.type,sdp:h})}function o(u,c){let h=c.sdp;return Object.keys(u._reverseStreams||[]).forEach(d=>{const f=u._reverseStreams[d],p=u._streams[f.id];h=h.replace(new RegExp(f.id,"g"),p.id)}),new RTCSessionDescription({type:c.type,sdp:h})}["createOffer","createAnswer"].forEach(function(u){const c=i.RTCPeerConnection.prototype[u],h={[u](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?c.apply(this,[p=>{const v=s(this,p);d[0].apply(null,[v])},p=>{d[1]&&d[1].apply(null,p)},arguments[2]]):c.apply(this,arguments).then(p=>s(this,p))}};i.RTCPeerConnection.prototype[u]=h[u]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const l=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const u=l.get.apply(this);return u.type===""?u:s(this,u)}}),i.RTCPeerConnection.prototype.removeTrack=function(c){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!c._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(c._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(v=>c.track===v)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(c.track),this.dispatchEvent(new Event("negotiationneeded")))}}function nd(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=r[t]})}function Yp(i,e){e.version>102||vs(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const $h=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Yp,shimAddTrackRemoveTrack:qp,shimAddTrackRemoveTrackWithNative:Xp,shimGetSendersWithDtmf:Wp,shimGetUserMedia:Gp,shimMediaStream:Hp,shimOnTrack:Vp,shimPeerConnection:nd,shimSenderReceiverGetStats:$p},Symbol.toStringTag,{value:"Module"}));function Kp(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){lf("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,a,l){a in o&&!(l in o)&&(o[l]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return r(a,"mozAutoGainControl","autoGainControl"),r(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a,"autoGainControl","mozAutoGainControl"),r(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function fS(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Zp(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function id(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=r[t]}))}function jp(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[s||null]).then(l=>{if(e.version<53&&!o)try{l.forEach(u=>{u.type=t[u.type]||u.type})}catch(u){if(u.name!=="TypeError")throw u;l.forEach((c,h)=>{l.set(h,Object.assign({},c,{type:t[c.type]||c.type}))})}return l}).then(o,a)}}function Jp(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Qp(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n}),vs(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function em(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){lf("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function tm(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function nm(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(s){const{sender:a}=o,l=a.getParameters();(!("encodings"in l)||l.encodings.length===1&&Object.keys(l.encodings[0]).length===0)&&(l.encodings=r,a.sendEncodings=r,this.setParametersPromises.push(a.setParameters(l).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function im(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function rm(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function sm(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Xh=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:nm,shimCreateAnswer:sm,shimCreateOffer:rm,shimGetDisplayMedia:fS,shimGetParameters:im,shimGetStats:jp,shimGetUserMedia:Kp,shimOnTrack:Zp,shimPeerConnection:id,shimRTCDataChannel:tm,shimReceiverGetStats:Qp,shimRemoveStream:em,shimSenderGetStats:Jp},Symbol.toStringTag,{value:"Module"}));function om(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(r=>e.call(this,r,n)),n.getVideoTracks().forEach(r=>e.call(this,r,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function am(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function lm(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(u,c){const h=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[h]);return c?(d.then(u,c),Promise.resolve()):d},e.createAnswer=function(u,c){const h=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[h]);return c?(d.then(u,c),Promise.resolve()):d};let a=function(l,u,c){const h=r.apply(this,[l]);return c?(h.then(u,c),Promise.resolve()):h};e.setLocalDescription=a,a=function(l,u,c){const h=s.apply(this,[l]);return c?(h.then(u,c),Promise.resolve()):h},e.setRemoteDescription=a,a=function(l,u,c){const h=o.apply(this,[l]);return c?(h.then(u,c),Promise.resolve()):h},e.addIceCandidate=a}function cm(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>n(um(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,r,s){e.mediaDevices.getUserMedia(n).then(r,s)}.bind(e))}function um(i){return i&&i.video!==void 0?Object.assign({},i,{video:Bp(i.video)}):i}function dm(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,r){if(n&&n.iceServers){const s=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(lf("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(n.iceServers[o])}n.iceServers=s}return new e(n,r)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function fm(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function hm(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function pm(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const qh=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:pm,shimCallbacksAPI:lm,shimConstraints:um,shimCreateOfferLegacy:hm,shimGetUserMedia:cm,shimLocalStreamsAPI:om,shimRTCIceServerUrls:dm,shimRemoteStreamsAPI:am,shimTrackEventTransceiver:fm},Symbol.toStringTag,{value:"Module"}));function hS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var mm={exports:{}};(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(r=>r.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const r={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":r.relatedAddress=n[s+1];break;case"rport":r.relatedPort=parseInt(n[s+1],10);break;case"tcptype":r.tcpType=n[s+1];break;case"ufrag":r.ufrag=n[s+1],r.usernameFragment=n[s+1];break;default:r[n[s]]===void 0&&(r[n[s]]=n[s+1]);break}return r},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const r=t.component;r==="rtp"?n.push(1):r==="rtcp"?n.push(2):n.push(r),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const r={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),r.name=n[0],r.clockRate=parseInt(n[1],10),r.channels=n.length===3?parseInt(n[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)r=s[o].trim().split("="),n[r[0].trim()]=r[1];return n},e.writeFmtp=function(t){let n="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),n+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(r.attribute=t.substring(n+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(n+1),r},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(r=>parseInt(r,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let r="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const r=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let a=3;a<s.length;a++){const l=s[a],u=e.matchPrefix(t,"a=rtpmap:"+l+" ")[0];if(u){const c=e.parseRtpMap(u),h=e.matchPrefix(t,"a=fmtp:"+l+" ");switch(c.parameters=h.length?e.parseFmtp(h[0]):{},c.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+l+" ").map(e.parseRtcpFb),n.codecs.push(c),c.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(c.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(l=>{a.rtcpFeedback.find(c=>c.type===l.type&&c.parameter===l.parameter)||a.rtcpFeedback.push(l)})}),n},e.writeRtpDescription=function(t,n){let r="";r+="m="+t+" ",r+=n.codecs.length>0?"9":"0",r+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});let s=0;return n.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){const n=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),l=a.length>0&&a[0].ssrc;let u;const c=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(p=>parseInt(p,10)));c.length>0&&c[0].length>1&&c[0][0]===l&&(u=c[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:l,codecPayloadType:parseInt(d.parameters.apt,10)};l&&u&&(f.rtx={ssrc:u}),n.push(f),s&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:l,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&l&&n.push({ssrc:l});let h=e.matchPrefix(t,"b=");return h.length&&(h[0].indexOf("b=TIAS:")===0?h=parseInt(h[0].substring(7),10):h[0].indexOf("b=AS:")===0?h=parseInt(h[0].substring(5),10)*1e3*.95-50*40*8:h=void 0,n.forEach(d=>{d.maxBitrate=h})),n},e.parseRtcpParameters=function(t){const n={},r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];r&&(n.cname=r.value,n.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return n=r[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const l=a[0].substring(10).split(" ");return{port:parseInt(l[0],10),protocol:l[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&r.push("a=max-message-size:"+n.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,r){let s;const o=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let r=0;r<n.length;r++)if(n[r].length<2||n[r].charAt(1)!=="=")return!1;return!0},i.exports=e})(mm);var gm=mm.exports;const so=hS(gm),pS=Xm({__proto__:null,default:so},[gm]);function vl(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const r=new e(n),s=so.parseCandidate(n.candidate);for(const o in s)o in r||Object.defineProperty(r,o,{value:s[o]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,vs(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function rd(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||vs(i,"icecandidate",e=>{if(e.candidate){const t=so.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function xl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const l=so.splitSections(a.sdp);return l.shift(),l.some(u=>{const c=so.parseMLine(u);return c&&c.kind==="application"&&c.protocol.indexOf("SCTP")!==-1})},n=function(a){const l=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(l===null||l.length<2)return-1;const u=parseInt(l[1],10);return u!==u?-1:u},r=function(a){let l=65536;return e.browser==="firefox"&&(e.version<57?a===-1?l=16384:l=2147483637:e.version<60?l=e.version===57?65535:65536:l=2147483637),l},s=function(a,l){let u=65536;e.browser==="firefox"&&e.version===57&&(u=65535);const c=so.matchPrefix(a.sdp,"a=max-message-size:");return c.length>0?u=parseInt(c[0].substring(19),10):e.browser==="firefox"&&l!==-1&&(u=2147483637),u},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:l}=this.getConfiguration();l==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const l=n(arguments[0]),u=r(l),c=s(arguments[0],l);let h;u===0&&c===0?h=Number.POSITIVE_INFINITY:u===0||c===0?h=Math.max(u,c):h=Math.min(u,c);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return h}}),this._sctp=d}return o.apply(this,arguments)}}function _l(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const o=r.send;r.send=function(){const l=arguments[0],u=l.length||l.size||l.byteLength;if(r.readyState==="open"&&s.sctp&&u>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return o.apply(r,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const s=n.apply(this,arguments);return t(s,this),s},vs(i,"datachannel",r=>(t(r.channel,r.target),r))}function sd(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function od(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&r instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function yl(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function bl(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const mS=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:od,shimAddIceCandidateNullOrEmpty:yl,shimConnectionState:sd,shimMaxMessageSize:xl,shimParameterlessSetLocalDescription:bl,shimRTCIceCandidate:vl,shimRTCIceCandidateRelayProtocol:rd,shimSendThrowTypeError:_l},Symbol.toStringTag,{value:"Module"}));function gS({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=af,n=dS(i),r={browserDetails:n,commonShim:mS,extractVersion:Xo,disableLog:cS,disableWarnings:uS,sdp:pS};switch(n.browser){case"chrome":if(!$h||!nd||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=$h,yl(i,n),bl(i),Gp(i,n),Hp(i),nd(i,n),Vp(i,n),qp(i,n),Wp(i),$p(i,n),Yp(i,n),vl(i),rd(i),sd(i),xl(i,n),_l(i,n),od(i,n);break;case"firefox":if(!Xh||!id||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=Xh,yl(i,n),bl(i),Kp(i,n),id(i,n),jp(i,n),Zp(i),em(i),Jp(i),Qp(i),tm(i),nm(i,n),im(i,n),rm(i,n),sm(i,n),vl(i),sd(i),xl(i,n),_l(i,n);break;case"safari":if(!qh||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=qh,yl(i,n),bl(i),dm(i),hm(i),lm(i),om(i),am(i),fm(i),cm(i),pm(i),vl(i),rd(i),xl(i,n),_l(i,n),od(i,n);break;default:t("Unsupported browser!");break}return r}const Yh=gS({window:typeof window>"u"?void 0:window});function xs(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class vm{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,r=Math.ceil(n/this.chunkedMTU);let s=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),l=e.slice(o,a),u={__peerData:this._dataCount,n:s,data:l,total:r};t.push(u),o=a,s++}return this._dataCount++,t}}}function vS(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.byteLength;return t}const Jc=Yh.default||Yh,Ho=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Jc.browserDetails.browser}getVersion(){return Jc.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Jc.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},xS=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),xm=()=>Math.random().toString(36).slice(2),Kh={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class _S extends vm{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(r){r.target&&t(r.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Kh,this.browser=Ho.getBrowser(),this.browserVersion=Ho.getVersion(),this.pack=Fp,this.unpack=Np,this.supports=function(){const t={browser:Ho.isBrowserSupported(),webRTC:Ho.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Kh),t.audioVideo=!0;let r;try{r=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Ho.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=xS,this.randomToken=xm}}const ii=new _S,yS="PeerJS: ";class bS{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[yS,...t];for(const r in n)n[r]instanceof Error&&(n[r]="("+n[r].name+") "+n[r].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var qe=new bS,cf={},MS=Object.prototype.hasOwnProperty,ti="~";function va(){}Object.create&&(va.prototype=Object.create(null),new va().__proto__||(ti=!1));function SS(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function _m(i,e,t,n,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new SS(t,n||i,r),o=ti?ti+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],s]:i._events[o].push(s):(i._events[o]=s,i._eventsCount++),i}function Ml(i,e){--i._eventsCount===0?i._events=new va:delete i._events[e]}function $n(){this._events=new va,this._eventsCount=0}$n.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)MS.call(t,n)&&e.push(ti?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};$n.prototype.listeners=function(e){var t=ti?ti+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,o=new Array(s);r<s;r++)o[r]=n[r].fn;return o};$n.prototype.listenerCount=function(e){var t=ti?ti+e:e,n=this._events[t];return n?n.fn?1:n.length:0};$n.prototype.emit=function(e,t,n,r,s,o){var a=ti?ti+e:e;if(!this._events[a])return!1;var l=this._events[a],u=arguments.length,c,h;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),u){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,s),!0;case 6:return l.fn.call(l.context,t,n,r,s,o),!0}for(h=1,c=new Array(u-1);h<u;h++)c[h-1]=arguments[h];l.fn.apply(l.context,c)}else{var d=l.length,f;for(h=0;h<d;h++)switch(l[h].once&&this.removeListener(e,l[h].fn,void 0,!0),u){case 1:l[h].fn.call(l[h].context);break;case 2:l[h].fn.call(l[h].context,t);break;case 3:l[h].fn.call(l[h].context,t,n);break;case 4:l[h].fn.call(l[h].context,t,n,r);break;default:if(!c)for(f=1,c=new Array(u-1);f<u;f++)c[f-1]=arguments[f];l[h].fn.apply(l[h].context,c)}}return!0};$n.prototype.on=function(e,t,n){return _m(this,e,t,n,!1)};$n.prototype.once=function(e,t,n){return _m(this,e,t,n,!0)};$n.prototype.removeListener=function(e,t,n,r){var s=ti?ti+e:e;if(!this._events[s])return this;if(!t)return Ml(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!n||o.context===n)&&Ml(this,s);else{for(var a=0,l=[],u=o.length;a<u;a++)(o[a].fn!==t||r&&!o[a].once||n&&o[a].context!==n)&&l.push(o[a]);l.length?this._events[s]=l.length===1?l[0]:l:Ml(this,s)}return this};$n.prototype.removeAllListeners=function(e){var t;return e?(t=ti?ti+e:e,this._events[t]&&Ml(this,t)):(this._events=new va,this._eventsCount=0),this};$n.prototype.off=$n.prototype.removeListener;$n.prototype.addListener=$n.prototype.on;$n.prefixed=ti;$n.EventEmitter=$n;cf=$n;var _s={};xs(_s,"ConnectionType",()=>kr);xs(_s,"PeerErrorType",()=>Sn);xs(_s,"BaseConnectionErrorType",()=>ad);xs(_s,"DataConnectionErrorType",()=>uf);xs(_s,"SerializationType",()=>lc);xs(_s,"SocketEventType",()=>Dr);xs(_s,"ServerMessageType",()=>Bn);var kr=function(i){return i.Data="data",i.Media="media",i}({}),Sn=function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i}({}),ad=function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i}({}),uf=function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i}({}),lc=function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i}({}),Dr=function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i}({}),Bn=function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i}({});const ym="1.5.5";class wS extends cf.EventEmitter{constructor(e,t,n,r,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+r+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ym),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),qe.log("Server message received:",s)}catch{qe.log("Invalid server message",r.data);return}this.emit(Dr.Message,s)},this._socket.onclose=r=>{this._disconnected||(qe.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Dr.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),qe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){qe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Bn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Dr.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class bm{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===kr.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(n.label,r);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){qe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;qe.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(qe.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:Bn.Candidate,payload:{candidate:o.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":qe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(ad.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":qe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(ad.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":qe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},qe.log("Listening for data channel"),e.ondatachannel=o=>{qe.log("Received data channel");const a=o.channel;s.getConnection(t,n)._initializeDataChannel(a)},qe.log("Listening for remote stream"),e.ontrack=o=>{qe.log("Received remote stream");const a=o.streams[0],l=s.getConnection(t,n);if(l.type===kr.Media){const u=l;this._addStreamToMediaConnection(a,u)}}}cleanup(){qe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const r=this.connection.dataChannel;r&&(n=!!r.readyState&&r.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);qe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),qe.log("Set localDescription:",n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===kr.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Bn.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Sn.WebRTC,r),qe.log("Failed to setLocalDescription, ",r))}}catch(n){t.emitError(Sn.WebRTC,n),qe.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();qe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),qe.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Bn.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(Sn.WebRTC,r),qe.log("Failed to setLocalDescription, ",r)}}catch(n){t.emitError(Sn.WebRTC,n),qe.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,r=this.connection.provider;qe.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),qe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){r.emitError(Sn.WebRTC,o),qe.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){qe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),qe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Sn.WebRTC,t),qe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(qe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return qe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){qe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Mm extends cf.EventEmitter{emitError(e,t){qe.error("Error:",t),this.emit("error",new TS(`${e}`,t))}}class TS extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Sm extends Mm{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var hd;const oa=class oa extends Sm{get type(){return kr.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||oa.ID_PREFIX+ii.randomToken(),this._negotiator=new bm(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{qe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{qe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){qe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Bn.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Bn.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:qe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){qe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const r of n)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};hd=new WeakMap,Eo(oa,hd,oa.ID_PREFIX="mc_");let Gl=oa;class ES{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:r,path:s,key:o}=this._options,a=new URL(`${t}://${n}:${r}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",ym),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){qe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==ii.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===ii.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw qe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var pd,md;const jr=class jr extends Sm{get type(){return kr.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||jr.ID_PREFIX+xm(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new bm(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{qe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{qe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{qe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(uf.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Bn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Bn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:qe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};pd=new WeakMap,md=new WeakMap,Eo(jr,pd,jr.ID_PREFIX="dc_"),Eo(jr,md,jr.MAX_BUFFERED_AMOUNT=8388608);let Hl=jr;class df extends Hl{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Hl.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return qe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Qc extends df{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new vm,this.serialization=lc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Np(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const r=vS(n.data);this._handleDataMessage({data:r})}}_send(e,t){const n=Fp(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);qe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class AS extends df{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=lc.None}}class CS extends df{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=ii.chunkedMTU){this.emitError(uf.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=lc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var gd;const aa=class aa extends Mm{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:AS,json:CS,binary:Qc,"binary-utf8":Qc,default:Qc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:ii.CLOUD_HOST,port:ii.CLOUD_PORT,path:"/",key:aa.DEFAULT_KEY,token:ii.randomToken(),config:ii.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==ii.CLOUD_HOST?this._options.secure=ii.isSecure():this._options.host==ii.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&qe.setLogFunction(this._options.logFunction),qe.logLevel=this._options.debug||0,this._api=new ES(t),this._socket=this._createServerConnection(),!ii.supports.audioVideo&&!ii.supports.data){this._delayedAbort(Sn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!ii.validateId(n)){this._delayedAbort(Sn.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(Sn.ServerError,r))}_createServerConnection(){const e=new wS(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Dr.Message,t=>{this._handleMessage(t)}),e.on(Dr.Error,t=>{this._abort(Sn.SocketError,t)}),e.on(Dr.Disconnected,()=>{this.disconnected||(this.emitError(Sn.Network,"Lost connection to server."),this.disconnect())}),e.on(Dr.Close,()=>{this.disconnected||this._abort(Sn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,r=e.src;switch(t){case Bn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Bn.Error:this._abort(Sn.ServerError,n.msg);break;case Bn.IdTaken:this._abort(Sn.UnavailableID,`ID "${this.id}" is taken`);break;case Bn.InvalidKey:this._abort(Sn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Bn.Leave:qe.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Bn.Expire:this.emitError(Sn.PeerUnavailable,`Could not connect to peer ${r}`);break;case Bn.Offer:{const s=n.connectionId;let o=this.getConnection(r,s);if(o&&(o.close(),qe.warn(`Offer received for existing Connection ID:${s}`)),n.type===kr.Media){const l=new Gl(r,this,{connectionId:s,_payload:n,metadata:n.metadata});o=l,this._addConnection(r,o),this.emit("call",l)}else if(n.type===kr.Data){const l=new this._serializers[n.serialization](r,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=l,this._addConnection(r,o),this.emit("connection",l)}else{qe.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(s);for(const l of a)o.handleMessage(l);break}default:{if(!n){qe.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=n.connectionId,o=this.getConnection(r,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):qe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){qe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Sn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){qe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Sn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){qe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new Gl(e,this,{...n,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){qe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const r of n)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){qe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(qe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;qe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)qe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)qe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Sn.ServerError,t))}};gd=new WeakMap,Eo(aa,gd,aa.DEFAULT_KEY="peerjs");let ld=aa;var wm=ld;const Tm="perihelion-v2-",Zh="ABCDEFGHJKLMNPQRSTUVWXYZ",jh=3,eu=new URLSearchParams(location.search).get("peer"),Em=eu?{host:eu.split(":")[0],port:Number(eu.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},RS=()=>Array.from({length:5},()=>Zh[Math.random()*Zh.length|0]).join("");function PS(i,e,t="concord"){const n=RS(),r=new wm(Tm+n,Em),s=[{kind:"human",name:i,online:!0,faction:t}];let o=!1;const a=()=>s.map(c=>({kind:c.kind,name:c.name,online:c.online,difficulty:c.difficulty,faction:c.faction})),l=(c,h)=>{try{c&&c.open&&c.send(h)}catch{}},u={code:n,seats:s,get started(){return o},broadcast(c){for(const h of s)h.conn&&l(h.conn,c)},sendTo(c,h){l(s[c]?.conn,h)},lobby(){for(const[c,h]of s.entries())h.conn&&l(h.conn,{t:"lobby",seats:a(),you:c,code:n});e.seats(a())},addAI(c,h="boreal"){o||s.length>=jh||(s.push({kind:"ai",name:`AI · ${c}`,online:!0,difficulty:c,faction:h}),u.lobby())},remove(c){if(o||c===0||!s[c])return;const[h]=s.splice(c,1);h.conn&&(l(h.conn,{t:"kicked"}),setTimeout(()=>h.conn.close(),200)),u.lobby()},start(){o=!0},close(){r.destroy()}};return r.on("open",()=>e.open(n)),r.on("error",c=>e.error(c.type==="unavailable-id"?"Code clash, try again":`Connection problem (${c.type})`)),r.on("connection",c=>{c.on("data",h=>{if(h.t==="hello"){const d=cc(h.name),f=typeof h.token=="string"?h.token.slice(0,64):"";let p=f?s.findIndex((v,g)=>g!==0&&v.kind==="human"&&!v.online&&v.token===f):-1;if(p<0&&o){l(c,{t:"full",why:"Game already started"});return}if(p<0){if(s.length>=jh){l(c,{t:"full",why:"Room is full"});return}if(s.some(v=>v.online&&v.token&&v.token===f)){l(c,{t:"full",why:"Already in this room"});return}s.push({kind:"human",name:LS(s,d),token:f,faction:["concord","boreal","holds"].includes(h.faction)?h.faction:"concord"}),p=s.length-1}Object.assign(s[p],{conn:c,online:!0}),u.lobby(),o&&e.rejoin(p)}else if(h.t==="cmd"&&h.cmd&&typeof h.cmd=="object"){const d=s.findIndex(f=>f.conn===c);d>0&&e.cmd(d,h.cmd)}}),c.on("close",()=>{const h=s.findIndex(d=>d.conn===c);if(!(h<0)){if(!o){s.splice(h,1),u.lobby();return}s[h].online=!1,s[h].conn=null,u.lobby(),e.left(h)}})}),u}function cc(i){return String(i??"").replace(/[<>&"'`]/g,"").trim().slice(0,16)||"Player"}function LS(i,e){let t=e||"Player",n=2;for(;i.some(r=>r.name===t);)t=`${e} ${n++}`;return t}function DS(i,e,t,n,r="concord"){const s=new wm(Em);let o=null;const a={send(l){try{o&&o.open&&o.send(l)}catch{}},close(){s.destroy()}};return s.on("open",()=>{o=s.connect(Tm+i.toUpperCase(),{reliable:!0});const l=setTimeout(()=>{o.open||n.error("No game found with that code")},9e3);o.on("open",()=>{clearTimeout(l),a.send({t:"hello",name:e,token:t,faction:r})}),o.on("data",u=>n.message(u)),o.on("close",()=>n.closed())}),s.on("error",l=>n.error(l.type==="peer-unavailable"?"No game found with that code":`Connection problem (${l.type})`)),a}const ll=(i,e,t=0)=>{i.owner=e,t&&(i.structures=i.structures.filter(n=>n.type!=="battery"),i.structures.push({type:"battery",level:t,left:0}),i.bhp=100*t)},Vo=(i,e="concord",t="holds")=>{const n=[{faction:e,name:"You"},{faction:t,name:"Raiders"}],r=hs({seed:i,players:n,empty:!0});r.noEvents=!0;const s=r.homes[0],o=r.homes[1],a=r.bodies.find(l=>l.parent===s.id&&l.kind==="moon");return{players:n,game:r,home:s,foe:o,moon:a}},IS=(i,e)=>!!Dt(i,e),Jh=(i,e,t=at)=>i.bodies.filter(n=>n.owner===t&&n.parent===null&&n.kind!=="planet").sort((n,r)=>Math.abs(r.r-e.r)-Math.abs(n.r-e.r))[0],Vl={first:{name:"First command",text:"Tutorial",make(){const i=Vo(11);return qt(i.game,0,"frigate",i.home),qt(i.game,0,"corvette",i.home),i.game.credits[0]=500,i.moon.trait=void 0,i.moon.structures=[],i.moon.bhp=0,i.game.scn={step:0,moon:i.moon.id},i},state(i,e){const t=i.scn,n=i.bodies[t.moon];if(!i.homes[e])return{text:"The capital has fallen.",done:"lose"};const s=i.ships.filter(a=>a.owner===e&&!a.st.civil);if(t.step===0&&s.some(a=>a.order&&a.order.body===n.id||a.at===n.id)&&(t.step=1),t.step<=1&&n.owner===e&&(t.step=2),t.step===2&&n.structures.some(a=>a.type==="mine")){t.step=3;const a=qt(i,1,"corvette",i.homes[1]);nn(i,1,[a.id],{type:"orbit",body:n.id,profile:"hard"}),t.raider=a.id}return t.step===3&&!i.ships.some(a=>a.id===t.raider&&a.owner===1)&&(t.step=4),!s.length&&t.step<4?{text:"Your ships are lost.",done:"lose"}:{text:[`Tap one of your ships, then tap the moon ${n.name} and pick a course.`,`Stay in orbit until ${n.name} yields.`,`Tap ${n.name}, then Build, then Mine.`,"A raider is coming. Select your ships, tap the raider, then Pass or Match.","Well done."][t.step],done:t.step===4?"win":null,why:"First command"}}},blockade:{name:"Blockade run",text:"Get a tender past three warships",make(){const i=Vo(23,"boreal","concord"),e=Jh(i.game,i.home);ll(e,0);const t=qt(i.game,0,"tender",i.home);return qt(i.game,0,"corvette",i.home),qt(i.game,0,"corvette",i.home),qt(i.game,1,"frigate",e),qt(i.game,1,"frigate",e),qt(i.game,1,"escort",e),i.game.scn={post:e.id,tender:t.id,limit:900},i},state(i){const e=i.scn,t=i.bodies[e.post],n=Dt(i,e.tender),r=e.limit-i.time;return n?n.at===t.id?{text:"The tender is in.",done:"win",why:"Blockade run",clock:r}:r<=0||t.owner!==0?{text:"The outpost has fallen.",done:"lose",clock:0}:{text:`Get the tender ${n.name} into orbit of ${t.name}.`,clock:r}:{text:"The tender is lost.",done:"lose",clock:r}}},hunt:{name:"Raider hunt",text:"Find the ship taking your freighters",make(){const i=Vo(37,"concord","holds");for(const n of i.game.bodies)(n.kind==="asteroid"||n.parent===i.home.id)&&ll(n,0);for(const n of i.game.bodies)n.owner===0&&!n.home&&(n.stock=60+n.id*7);qt(i.game,0,"frigate",i.home),qt(i.game,0,"corvette",i.home);const e=i.game.bodies.find(n=>n.kind==="asteroid"),t=qt(i.game,1,"corvette",e);return i.game.scn={raider:t.id,limit:1200,lost:0,seen:0},i},state(i){const e=i.scn,t=Dt(i,e.raider),n=e.limit-i.time;for(const r of i.events)!r.scn&&(r.type==="raided"||r.type==="seized")&&(r.owner===0||r.from===0)&&(r.scn=!0,e.lost++);if(!t||t.owner!==1)return{text:"The raider is finished.",done:"win",why:"Raider hunt",clock:n};if(e.lost>=3||n<=0)return{text:"The raider got away with it.",done:"lose",clock:Math.max(0,n)};if(!t.order&&i.time>20){let r=null,s=1e9;for(const o of i.ships){if(o.owner!==0||!o.st.civil)continue;const a=Math.hypot(o.x-t.x,o.z-t.z);a<s&&(s=a,r=o)}r&&nn(i,1,[t.id],{type:"attack",ship:r.id,mode:"match",d0:1.2,profile:s>200?"cruise":"hard"})}return{text:`Destroy the raider. Freighters lost: ${e.lost} of 3.`,clock:n}}},hold:{name:"Hold until relief",text:"Keep your moon for twelve minutes",make(){const i=Vo(51,"concord","boreal");ll(i.moon,0,1),qt(i.game,0,"frigate",i.moon),qt(i.game,0,"escort",i.moon);const e=["frigate","frigate","corvette","corvette"].map(t=>qt(i.game,1,t,i.foe).id);return nn(i.game,1,e,{type:"orbit",body:i.moon.id,profile:"hard"}),i.game.scn={moon:i.moon.id,limit:720,foes:e},i},state(i){const e=i.scn,t=i.bodies[e.moon],n=e.limit-i.time;for(const r of e.foes){const s=Dt(i,r);s&&!s.order&&s.at!==t.id&&nn(i,1,[r],{type:"orbit",body:t.id,profile:"hard"})}return t.owner!==0?{text:`${t.name} has fallen.`,done:"lose",clock:Math.max(0,n)}:n<=0?{text:"Relief has arrived.",done:"win",why:"Hold until relief",clock:0}:{text:`Keep ${t.name} until the clock runs out.`,clock:n}}},convoy:{name:"Convoy",text:"Bring two of three freighters home",make(){const i=Vo(64,"boreal","holds"),e=Jh(i.game,i.home);ll(e,0);const t=[0,1,2].map(()=>{const r=qt(i.game,0,"freighter",e,{cargo:200,src:null});return r.order={type:"orbit",body:i.home.id,profile:"cruise",amax:r.st.accel},r.depart=e.id,r.at=null,r.id});qt(i.game,0,"frigate",e),qt(i.game,0,"escort",e);const n=[qt(i.game,1,"corvette",i.foe).id,qt(i.game,1,"corvette",i.foe).id,qt(i.game,1,"frigate",i.foe).id];return i.game.scn={fr:t,hunters:n,home:0},i},state(i){const e=i.scn;for(const n of i.events)!n.scn&&n.type==="freight"&&n.owner===0&&n.n>=150&&(n.scn=!0,e.home++);const t=e.fr.filter(n=>IS(i,n)).length;for(const n of e.hunters){const r=Dt(i,n);if(!r||r.order||i.time<15)continue;const s=e.fr.map(o=>Dt(i,o)).filter(Boolean).sort((o,a)=>Math.hypot(o.x-r.x,o.z-r.z)-Math.hypot(a.x-r.x,a.z-r.z))[0];s&&nn(i,1,[n],{type:"attack",ship:s.id,mode:"pass",profile:"hard"})}return e.home>=2?{text:"The convoy is in.",done:"win",why:"Convoy"}:e.home+t<2?{text:"Too few got through.",done:"lose"}:{text:`Freighters home: ${e.home}. Still under way: ${t}.`}}}},US=Object.keys(Vl);function Am(i,e){const t=i.homes[e];if(!t)return null;const n=on(i,t,i.time),r=o=>{const a=on(i,o,i.time);return Math.hypot(a.x-n.x,a.y-n.y,a.z-n.z)};return i.bodies.filter(o=>o.owner===at&&!Hn(o)&&o.kind!=="asteroid").sort((o,a)=>r(o)-r(a))[0]||null}const qo=[{title:"Your capital",text:i=>`${i.touch?"Tap":"Click"} <em>${i.home.name}</em>.`,world:i=>i.home.id,done:i=>i.ui.selBody===i.home.id},{title:"The view",text:i=>i.touch?"Drag to turn. Pinch to zoom. Two fingers to move.":"Drag to move. Right-drag to turn. Scroll to zoom.",done:i=>i.moved>1},{title:"Credits",text:()=>"Top left: your credits and income a day. The bars are your ships and your ship limit.",point:"#purse"},{title:"Select ships",text:i=>`${i.touch?"Tap":"Click"} one of your ships at <em>${i.home.name}</em>.`,world:i=>i.home.id,done:i=>i.ui.sel.size>0},{title:"Send them",text:i=>`${i.ui.sel.size?"":"Select your ships. "}${i.touch?"Tap":"Click"} <em>${i.target.name}</em> and pick a course.`,world:i=>i.target.id,point:'[data-a="go"]',on:"order"},{title:"Time",text:()=>"Travel takes days. This button makes time run faster.",point:"#warp",done:i=>i.warp>1},{title:"Take the world",text:i=>`<em>${i.target.name}</em> yields when your ships hold its orbit.`,world:i=>i.target.id,done:i=>i.gained>0},{title:"Build",text:i=>`Select <em>${i.home.name}</em>. ${i.touch?"Tap":"Click"} Build and pick a structure.`,world:i=>i.ui.selBody===i.home.id?null:i.home.id,point:i=>i.ui.build?'[data-a="build"]:not(.no)':'[data-a="slot"]',on:"build"},{title:"Build a ship",text:i=>`Select <em>${i.home.name}</em> and pick a ship.`,world:i=>i.ui.selBody===i.home.id?null:i.home.id,point:'[data-a="ship"]:not(.no)',on:"ship"},{title:"Research",text:()=>"Open research (the flask) and pick a box.",point:i=>i.sheet?'[data-a="research"]':"#rnd",on:"research"},{title:"Winning",text:()=>"Take the enemy capital (double ring). It needs 3 of your ships in its orbit.",last:!0}],Oe=i=>document.getElementById(i),Yt=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ln=i=>{const e=i/_a;if(e<1)return`${Math.max(1,Math.round(e*24))}h`;if(e<100)return`${Math.round(e)}d`;const t=e/30.4;return t<24?`${t<10?t.toFixed(1):Math.round(t)}mo`:`${(e/365).toFixed(1)}y`},Cm=i=>{const e=Math.floor(i/_a);return`Year ${Math.floor(e/365)+1} · Day ${e%365+1}`};let xa=null,Rm=0;const cd=new Set,eo=(i,e)=>{if(xa&&performance.now()-Rm<1500&&i.contains(xa)){i._pending=e,cd.add(i);return}i._pending=void 0,i._html!==e&&(i._html=e,i.innerHTML=e)},Pm=()=>{xa=null;for(const i of cd)cd.delete(i),i._pending!==void 0&&eo(i,i._pending)};window.addEventListener("pointerdown",i=>{xa=i.target,Rm=performance.now()},!0);window.addEventListener("pointerup",()=>setTimeout(Pm,300),!0);window.addEventListener("pointercancel",Pm,!0);const rt=(()=>{const i={faction:"concord",rivals:1,level:"normal",sound:!0,ui:1,gfx:"high",conquest:!1,dev:!1,name:"",done:{}};try{return{...i,...JSON.parse(localStorage.getItem("perihelion2")||"{}")}}catch{return i}})(),_i=()=>{try{localStorage.setItem("perihelion2",JSON.stringify(rt))}catch{}},kS=(()=>{try{let i=localStorage.getItem("perihelion2-key");return i||(i=Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("perihelion2-key",i)),i}catch{return""}})();document.documentElement.style.setProperty("--ui-mult",rt.ui);let fs={unlock(){},setEnabled(){},setVolume(){},update(){},play(){}};{const i=Object.assign({"./audio.js":()=>Km(()=>import("./audio-CJGKeWsw.js"),[],import.meta.url)});i["./audio.js"]&&i["./audio.js"]().then(e=>{fs=e.createAudio(),fs.setEnabled(rt.sound)}).catch(()=>{})}const Ae=(i,e)=>{rt.sound&&fs.play(i,e)};window.addEventListener("pointerdown",()=>fs.unlock(),{once:!1,capture:!0});window.addEventListener("touchend",()=>fs.unlock(),{capture:!0});const NS=new URLSearchParams(location.search),Lm=()=>NS.get("gfx")||(rt.gfx==="low"?"low":"high"),Be=rS(Oe("scene"),Oe("plot"),{quality:Lm(),onSound:(i,e,t)=>Ae(i,{pan:e,gain:t})});Be.resize();window.addEventListener("resize",()=>Be.resize());let Pt=null,B=null,ud=[],pe=0,St="demo",pi=!1,Nr=1,Un=null,zi=null,ts=!1,Sl=[],Qh=0;const z={me:0,sel:new Set,selBody:null,target:null,targetShip:null,routes:null,routeKey:null,paths:new Map,colors:[],fx:[],dev:!1,plot:null,warp:1,dragging:!1,build:!1,shape:"wedge",plotMode:!1},oo=()=>St==="solo"||St==="host"||St==="guest",ys=()=>oo()&&B&&!ts,lr=i=>i.owner===pe,mi=()=>B.ships.filter(i=>z.sel.has(i.id)&&i.owner===pe);function To(i,e={}){B=i,pe=e.me??0,St=e.mode||"solo",zi=e.scn||null,ud=[],(e.players||[]).forEach((n,r)=>{n.ai&&St!=="guest"&&ud.push(Eg(B,r,n.ai,B.seed))}),ts=!1,pi=!1,Nr=e.warp||1,Sl=[],z.me=pe,z.dev=St==="demo"||rt.dev&&St==="solo",z.colors=Up(B),document.documentElement.style.setProperty("--me",z.colors[pe]||hn),ns(),z.selBody=null;for(const n of B.events)n.seen=!0;Be.build(B);const t=B.homes[pe]||B.bodies.find(n=>n.owner===pe)||B.bodies[0];if(St==="demo")Be.orbit.follow=null,Be.orbit.target.set(0,0,0),Be.orbit.dist=1100,Be.orbit.pol=1.05;else if(e.look)Be.orbit.follow=null,Be.orbit.ship=null,Be.orbit.target.set(e.look.x,0,e.look.z),Be.orbit.dist=e.look.dist;else{const n=on(B,t,B.time),r=Math.max(12,...B.bodies.filter(s=>s.parent===t.id).map(s=>s.r),t.parent!==null?t.r*1.6:0);Be.focus(B,t.id,!1),Be.orbit.target.set(n.x,n.y,n.z),Be.orbit.dist=r*5.5,Be.orbit.pol=.8}Oe("hud").hidden=St==="demo",Oe("date").hidden=St==="demo",Pt=null,z.tutWorld=null,Oe("tutglow").textContent="",e.tutorial&&JS(),Oe("title").hidden=St!=="demo",Oe("panel").hidden=!0,Oe("sheet").hidden=!0,Oe("strip").hidden=!0,Oe("feed").innerHTML="",Oe("brief").hidden=!zi&&!(Pt&&!Pt.free),window.__perihelion={game:B,view:Be,ui:z,S:Mg,act:wn,get me(){return pe}}}function Wl(){const i=[...ya].sort(()=>Math.random()-.5),e=[{faction:i[0],ai:"hard"},{faction:i[1],ai:"hard"}];To(hs({seed:Math.random()*1e9|0,players:e}),{mode:"demo",players:e,me:-2,warp:3})}function wn(i){if(!(!ys()||pi&&St!=="solo")){if(St==="guest"){Un.send({t:"cmd",cmd:i});return}Dm(pe,i),Pt&&!Pt.free&&(Pt.did.add(i.t==="order"&&!i.order?"stop":i.t),dc())}}function Dm(i,e){if(!B||!B.alive[i])return;const t=e.body!=null?B.bodies[e.body]:null;if(t&&t.owner!==i)return;const n=Array.isArray(e.ids)?e.ids.filter(r=>Number.isInteger(r)).slice(0,20):[];switch(e.t){case"order":{const r=e.order;if(r===null)return nn(B,i,n,null);if(!r||typeof r!="object")return;const s=co[r.profile]?r.profile:"cruise";if(r.type==="orbit"&&B.bodies[r.body])nn(B,i,n,{type:"orbit",body:r.body,profile:s,loose:!!r.loose,shape:r.shape==="column"?"column":"wedge",...B.bodies[r.via]&&B.bodies[r.via].kind==="planet"?{via:r.via,side:r.side<0?-1:1}:{}});else if(r.type==="strike"&&B.bodies[r.body])nn(B,i,n,{type:"strike",body:r.body,profile:s,loose:!!r.loose,shape:r.shape==="column"?"column":"wedge"});else if(r.type==="attack"){const o=Dt(B,r.ship);o&&o.seen[i]&&nn(B,i,n,{type:"attack",loose:!!r.loose,shape:r.shape==="column"?"column":"wedge",ship:r.ship,mode:r.mode==="pass"||r.mode==="board"?r.mode:"match",d0:o.st.civil||es(o)?1.2:3,profile:s})}else if(r.type==="form"){const o=Dt(B,r.lead);o&&o.owner===i&&nn(B,i,n,{type:"form",lead:o.id})}else if(r.type==="burn"){const o=Math.hypot(r.x,r.y,r.z)||1;nn(B,i,n,{type:"burn",x:r.x/o,y:r.y/o,z:r.z/o,left:Math.min(60,Math.max(1,+r.left||1))})}return}case"stance":return L0(B,i,n,e.st||{});case"salvo":{const r=e.ship!=null?Dt(B,e.ship):null;r&&r.seen[i]?au(B,i,n,{ship:r.id}):B.bodies[e.at]&&au(B,i,n,{body:e.at});return}case"build":return t&&Cr(B,t,e.type);case"upgrade":{const r=t&&Mi(t,e.type,e.i??null);return r&&Ko(B,t,r)}case"ship":return t&&Al(B,t,e.cls);case"cancel":return t&&wd(B,t,e.i);case"demolish":return t&&y0(B,t,e.type,e.i??null);case"research":return Td(B,i,e.line,e.key);case"agent":{const r=B.bodies[e.at];return r&&Cl(B,i,r)}case"recall":{const r=B.bodies[e.at];return r&&M0(B,i,r)}case"op":{const r=B.bodies[e.at];return r&&Ed(B,i,r,e.op)}case"sabotage":{const r=B.bodies[e.at];return r&&Ad(B,i,r,e.what==="yard"?"yard":"battery")}case"buy":{const r=B.bodies[e.at];return r&&Cd(B,i,r)}}}function FS(i){const e=i.order&&i.order.type==="form"&&Dt(B,i.order.lead)||i;return B.ships.filter(t=>lr(t)&&!t.st.civil&&t.at===null&&(t===e||t===i||t.grp===e.grp||t.order&&t.order.type==="form"&&t.order.lead===e.id))}function ns(){z.armed=null,z.struct=null,z.sel=new Set,z.target=null,z.targetShip=null,z.routes=null,z.routeKey=null,z.build=!1,z.plotMode=!1,z.plot=null}function ta(i){ns(),z.selBody=null;for(const e of i)z.sel.add(e.id);Ae("select")}function zS(i){z.target=i,z.targetShip=null,z.routeKey=null,Im(),Ae("tap")}function Im(){if(z.target==null||!z.sel.size){z.routes=null;return}z.routes=no(B,[...z.sel],z.target).filter(i=>i.reach)}function OS(i,e,t){if(!ys())return;let n=Be.pick(i,e);if(n&&n.ship!=null&&z.sel.size){const r=Dt(B,n.ship),s=Be.pick(i,e,!1);r&&lr(r)&&s&&!mi().every(o=>o.at===s.body)&&(n=s)}if(n&&n.ship!=null){const r=Dt(B,n.ship);if(!r)return;lr(r)&&!r.st.civil&&z.sel.size&&!z.sel.has(r.id)&&!(r.at!==null&&mi().every(s=>s.at===r.at))?(z.targetShip=r.id,z.target=null,z.routes=null,Ae("tap")):lr(r)&&!r.st.civil?(z.sel.has(r.id)&&z.sel.size>1?ta([r]):ta(r.at!==null?B.ships.filter(s=>lr(s)&&!s.st.civil&&s.at===r.at):FS(r)),Be.followShip(r.id,t)):lr(r)?(ns(),z.selBody=null,z.targetShip=r.id,Ae("tap"),Be.followShip(r.id,t)):(z.targetShip=r.id,z.target=null,z.routes=null,z.sel.size||(z.selBody=null),Ae("tap"),t&&Be.followShip(r.id,!0));return}if(n&&n.body!=null){const r=B.bodies[n.body],s=mi();if(t&&Be.focus(B,r.id,!0),s.length&&!s.every(o=>o.at===r.id)){zS(r.id);return}ns(),z.selBody=r.id,Ae("select"),t||Be.focus(B,r.id,!1);return}if(z.target!=null||z.targetShip!=null){z.target=null,z.targetShip=null,z.routes=null;return}ns(),z.selBody=null}const e0=i=>`style="--v:${Math.round(Math.max(0,Math.min(1,i))*25)*4}%"`,dd=["drive","reactor","weapons","sensors"],BS={drive:"Drive",reactor:"Reactor",weapons:"Weapons",sensors:"Sensors"};function cl(i,e=!0){const t=dd.some(n=>i.out[n]>0);return`<button class="chip ${e?"on":""}" data-a="chip" data-v="${i.id}" title="${Yt(i.name)}">${ul(i.cls,z.colors[i.owner])}<span class="bars"><i class="${i.hull<i.st.hull*.35?"low":""}" ${e0(i.hull/i.st.hull)}></i><i class="f" ${e0(i.dv/i.st.dv)}></i></span>${t?'<span class="dmg"></span>':""}${Si(i)?`<span class="rk">${"<i></i>".repeat(Si(i))}</span>`:""}</button>`}const Ut=(i,e)=>`${i}<em>${e}</em>`,GS={hard:"Hard burn",cruise:"Cruise",dark:"Dark",sling:"Slingshot"},xi={"go:hard":"Fastest. Easy to see.","go:cruise":"Uses less fuel.","go:dark":"Slowest. Hard to see.","go:sling":"Round a planet to save fuel.",strike:"Fly past and shoot the battery.",pass:"Fly past at speed and shoot.",match:"Pull alongside and fight.",board:"Pull alongside and take the ship.",salvo:"Fire all torpedoes.",cancel:"Stop building this ship.",join:"Fly to this ship and stay with it.",pick:"Select this ship.",torps:"Ships fire torpedoes when they can.",fire:"Ships shoot when they can.",evade:"Harder to hit. Uses fuel.",plot:"Drag from the ship.",cut:"Stop the drive.",retreat:"Go to your nearest world.",demolish:"Remove this.",yard:"Builds, repairs and rearms ships.",mine:"Earns credits.",refinery:"Earns credits. Refuels ships faster.",battery:"Shoots enemy ships in orbit.",habitat:"Raises your ship limit.",lab:"Speeds up research.",exchange:"Earns credits.",array:"This world sees further.",depot:"Refuels ships faster.","ship:corvette":"Small and fast. Hard to see.","ship:frigate":"All-round warship.","ship:escort":"Shoots down torpedoes near it.","ship:battleship":"Big guns. Heavy armour. Slow.","ship:tender":"Refuels and rearms ships next to it.",agent:"Shows this world and the ships near it.",recall:"Bring the agent back.",buy:"This world joins you.","sab:battery":"Turns the battery off.","sab:yard":"Delays the ship being built.","op:steal":"Takes part of this world's income.","op:incite":"This world yields faster.","op:watch":"Stop and only watch.","formation:wedge":"Side by side behind the leader.","formation:column":"One behind another.","formation:loose":"Each ship at its own speed."},HS={wedge:"Wedge",column:"Column",loose:"Off"},Um=i=>(Math.round(i*10)/10).toString(),yo=i=>{const e=Math.abs(i)*_a;return e>=10?Math.round(e).toString():Um(e)},Fr=i=>`${i<0?"−":"+"}${yo(i)}/d`,tn=(i,e,t="",n="")=>`<span class="st ${t}" ${n}><i>${i}</i>${e}</span>`;function tu(i,e,t=1){const n=o=>Vt(B,pe,o),r=e.trait,s=Ee.structures[i];switch(i){case"mine":return[["Income",Fr(s.income*t*(r==="seam"?2:1)*(n("deepmine")?1.5:1))]];case"refinery":return[["Income",Fr(s.income*t*(r==="deut"?1.5:1))],["Refuel","×3"]];case"exchange":return[["Income",Fr(s.income*t)]];case"habitat":return[["Ships",`+${t*(r==="garden"?2:1)*(n("arcology")?2:1)}`]];case"lab":return[["Research",`+${t*(r==="archive"?100:50)}%`]];case"battery":return[["Strength",Ee.batteryHp*t*(r==="fortress"?2:1)*(e.home?2:1)],["Guns",t+(e.home?1:0)]];case"yard":return t>1||r==="hulk"?[["Build speed",`+${(t>1?50:0)+(r==="hulk"?50:0)}%`]]:[];case"array":return[["Sight",`×${Um(Ee.arraySensor*(r==="listening"?2:1))}`]];case"depot":return[["Refuel","×3"]];default:return[]}}function VS(i){const e=Vr(B,pe,i),t=bn[i],n=z.selBody!=null?B.bodies[z.selBody]:null;return[["Hull",e.hull],e.rails.length?["Rails",e.rails.length]:null,e.mag?["Torpedoes",e.mag]:null,t.stores?["Spares",t.stores]:null,["Defence",e.pdc],["Thrust",Math.round(e.accel*1e3)],["Fuel",Math.round(e.dv)],["Build",Ln(Sd(B,pe,i,n))],["Upkeep",`${yo(Ee.upkeep[i])}/d`]].filter(Boolean)}const ao=i=>String(i).split(".")[0],na=i=>{const e=String(i).split(".")[1];return e==null?null:+e},ia=(i,e)=>Mi(i,ao(e),na(e));function ff(i,e){const t=z.selBody!=null&&B?B.bodies[z.selBody]:null,n=t&&fo?fo(B,pe,t):1;if(i==="trait")return{text:os[e]?.text||"",stats:[]};if(i==="build"&&t)return{text:xi[e],stats:[...tu(e,t,1),["Build",Ln(Ee.structures[e].time/n)]]};if(i==="upgrade"&&t){const r=ao(e),s=(ia(t,e)?.level||1)+1;return{text:`${Ee.structures[r].name} level ${s}`,stats:[...tu(r,t,s),["Build",Ln(Ee.structures[r].time/n)]]}}if(i==="demolish"&&t){const r=ia(t,e);return{text:xi.demolish,stats:r?[["Refund",Ql(r)],["Takes",Ln(Ee.scrapTime)]]:[]}}if(i==="struct"&&t){const r=ia(t,e),s=ao(e);return{text:"",stats:r?[[Ee.structures[s].name,Ee.structures[s].maxLevel>1?`level ${r.level}`:""],...tu(s,t,r.level)]:[]}}if(i==="ship")return{text:xi[`ship:${e}`],stats:VS(e)};if(i==="cancel"&&t){const r=t.queue[+e];return{text:xi.cancel,stats:r?[["Refund",Math.round(cr(B,pe,r.cls)*.8)]]:[]}}if(i==="board"){const r=Dt(B,+e);return{text:xi.board,stats:r?[["Chance",`${Math.round(Rd(r,mi())*100)}%`]]:[]}}return i==="agent"?{text:xi.agent,stats:[["Arrives",Ln(kn.travel)]]}:i==="sab"?{text:xi[`sab:${e}`],stats:[[e==="battery"?"Off for":"Delay",Ln(e==="battery"?90:60)],["Risk",`${Math.round(kn.opRisk*100)}%`]]}:i==="op"&&e==="steal"?{text:xi["op:steal"],stats:[["Share",`${Math.round(kn.skim*100)}%`]]}:i==="op"&&e==="incite"?{text:xi["op:incite"],stats:[["Yield","×2"]]}:i==="formation"?{text:xi[`formation:${z.shape}`],stats:[]}:{text:xi[`${i}:${e}`]||xi[i]||"",stats:[]}}const WS=i=>i.length?`<div class="sts">${i.map(([e,t])=>tn(e,t)).join("")}</div>`:"";function $S(i,e){const t=ff(i,e);return[t.text,...t.stats.map(([n,r])=>`${n} ${r}`)].filter(Boolean).join(" · ")}const t0=new Set(["go","strike","pass","match","board","salvo","join","retreat","cut","build","ship","upgrade","demolish","agent","recall","buy","sab","op","cancel"]);let hf=!1;window.addEventListener("pointerdown",i=>{hf=i.pointerType!=="mouse"},!0);const Lt=(i,e,t,n,r="",s="")=>`<button class="tile ${r} ${z.armed===`${i}:${e}`&&z.armedLabel?"arm":""}" title="${Yt($S(i,e))}" data-a="${i}" data-v="${e}">${t}${n?`<small>${n}</small>`:""}${s}</button>`;function XS(){const i=mi(),e=[];if(i.length===1){const t=i[0];e.push(tn("Hull",`${Math.round(t.hull)}/${t.st.hull}`,t.hull<t.st.hull*.35?"bad":""),tn("Fuel",`${Math.round(t.dv/t.st.dv*100)}%`)),t.st.mag&&e.push(tn("Torpedoes",`${t.torps}/${t.st.mag}`)),t.st.stores&&e.push(tn("Spares",`${Math.floor(t.stores)}/${t.st.stores}`)),e.push(tn("Upkeep",`${yo(Ee.upkeep[t.cls])}/d`));for(const r of dd)t.out[r]>0&&e.push(tn(BS[r],"out","bad"));const n=(t.ready||0)-B.time;t.at!==null&&n>0&&e.push(tn(t.pending||t.pend!==void 0?"Leaves in":"Ready in",Ln(Math.ceil(n/4)*4)))}else if(i.length){const t=i.reduce((s,o)=>s+o.st.mag,0);e.push(tn("Fuel",`${Math.round(Math.min(...i.map(s=>s.dv/s.st.dv))*100)}%`)),t&&e.push(tn("Torpedoes",`${i.reduce((s,o)=>s+o.torps,0)}/${t}`)),e.push(tn("Upkeep",`${yo(i.reduce((s,o)=>s+Ee.upkeep[o.cls],0))}/d`));const n=i.filter(s=>dd.some(o=>s.out[o]>0)).length;n&&e.push(tn("Systems out",`${n} ship${n>1?"s":""}`,"bad"));const r=Math.max(...i.map(s=>s.at!==null?(s.ready||0)-B.time:0));r>0&&e.push(tn(i.some(s=>s.pending||s.pend!==void 0)?"Leaves in":"Ready in",Ln(Math.ceil(r/4)*4)))}else if(z.selBody!=null){const t=B.bodies[z.selBody],n=Hn(t);t.owner===pe&&e.push(t.blockaded?tn("Income","blockaded","bad"):tn("Income",Fr(Br(t,B)*Zl(B,t)))),t.owner===pe&&!t.home&&e.push(tn("Waiting",Math.round(t.stock/5)*5)),n&&e.push(tn("Battery",`${Math.round(t.bhp)}/${n}`,t.bhp<=0?"bad":""),tn("Guns",Kl(t))),t.owner!==pe&&t.home&&e.push(tn("Ships needed",_d)),t.trait&&e.push(`<button class="st gold" data-a="trait" data-v="${t.trait}">${et("star")}${os[t.trait].name}</button>`)}else if(z.targetShip!=null){const t=Dt(B,z.targetShip);t&&t.st.civil&&t.cargo!=null&&(t.owner===pe||t.owner<0)&&e.push(tn("Cargo",Math.round(t.cargo)))}return e.length?`<div class="sts">${e.join("")}</div>`:""}function qS(){if(!ys())return"";const i=mi();if(i.length){const e=i.length===1?i[0]:null;let t=`<div class="head"><b>${e?Yt(e.name):`${i.length} ships`}</b><small>${e?[bn[e.cls].name,km[Si(e)]].filter(Boolean).join(" · "):""}</small><button class="x" data-a="clear">${et("close")}</button></div>`;t+=`<div class="row">${i.map(r=>cl(r)).join("")}</div>`;const n=i.find(r=>r.order&&r.at===null);if(n&&z.target==null&&z.targetShip==null){const r=n.order,s=r.type==="form"?`With ${Dt(B,r.lead)?.name||""}`:r.body!=null?B.bodies[r.body].name:r.type==="attack"?Dt(B,r.ship)?.name||"contact":"";t+=`<div class="sub">${et(r.type==="burn"?"plot":r.type==="form"?"match":r.type==="orbit"?r.via!=null&&!r.done?"sling":r.profile:"strike")} ${Yt(s)}${r.type!=="burn"&&r.type!=="form"&&n.tau?`<span class="num">${Ln(Math.ceil(n.tau/5)*5)}</span>`:""}</div>`}if(z.target!=null){const r=B.bodies[z.target],s=Math.min(...i.map(a=>a.dv));t+=`<div class="sub">${et("arrived")} ${Yt(r.name)}<span class="cols">Time · Fuel</span></div><div class="row">`;const o=Math.min(...i.map(a=>a.st.dv));for(const a of z.routes||[]){const l=a.dv>s;t+=Lt("go",a.key,Ut(et(a.key),GS[a.key]),`${Ln(Math.round(a.time/5)*5)} · <b class="${l?"bad":""}">${Math.round(a.dv/Math.max(.01,o)*20)*5}%</b>`,`wide ${l?"no":""}`)}r.owner!==pe&&Hn(r)>0&&r.bhp>0&&(t+=Lt("strike",r.id,Ut(et("strike"),"Firing pass"),"","wide")),(z.routes||[]).length||(t+='<span class="hint">No course</span>'),t+="</div>"}else if(z.targetShip!=null){const r=Dt(B,z.targetShip);if(r&&r.owner===pe&&!r.st.civil)t+=`<div class="sub">${et("match")} ${Yt(r.name)}</div><div class="row">${Lt("join",r.id,Ut(et("match"),"Join"),"","wide")}${Lt("pick",r.id,Ut(et("check"),"Select"),"","wide")}</div>`;else if(r&&(z.dev||r.seen[pe])){const s=r.seen[pe]===2;t+=`<div class="sub" style="color:${r.owner<0?cn:rn}">${et("contact")} ${r.derelict?`Derelict ${bn[r.cls].name.toLowerCase()}`:r.owner<0?"Convoy":s?`${Yt(r.name)} · ${bn[r.cls].name}`:"Unknown contact"}</div><div class="row">`,t+=Lt("pass",r.id,Ut(et("strike"),"Pass"),"","wide")+Lt("match",r.id,Ut(et("match"),"Match"),"","wide"),s&&r.owner>=0&&!r.st.civil&&(t+=Lt("board",r.id,Ut(et("flag"),"Board"),"","wide")),i.some(o=>o.torps>0)&&(t+=Lt("salvo",r.id,Ut(et("salvo"),"Salvo"),"","wide")),t+="</div>"}else z.targetShip=null}else{const r=s=>i.every(o=>o[s]);t+='<div class="row g4">',i.some(s=>s.st.tubes)&&(t+=Lt("torps","",Ut(et("torp"),"Torpedoes"),r("torpsFree")?"Free":"Held",r("torpsFree")?"on":"")),t+=Lt("fire","",Ut(et("fire"),"Guns"),r("fireFree")?"Free":"Held",r("fireFree")?"on":""),t+=Lt("evade","",Ut(et("evade"),"Evade"),r("evade")?"On":"Off",r("evade")?"on":""),t+=Lt("plot","",Ut(et("plot"),"Plot burn"),"",z.plotMode?"on":""),i.some(s=>s.order)&&(t+=Lt("cut","",Ut(et("cut"),"Stop"),"")),t+=Lt("retreat","",Ut(et("retreat"),"Retreat"),""),i.length>1&&(t+=Lt("formation","",Ut(et("match"),"Formation"),HS[z.shape],z.shape==="loose"?"":"on")),t+=Lt("follow","",Ut(et("focus"),"Follow"),""),t+="</div>"}return t}if(z.targetShip!=null){const e=Dt(B,z.targetShip);if(!e||!(z.dev||e.seen[pe]))return z.targetShip=null,"";if(e.st.civil)return YS(e);if(e.derelict)return`<div class="head"><b>${Yt(e.name)}</b><small>Derelict ${bn[e.cls].name.toLowerCase()}</small><button class="x" data-a="clear">${et("close")}</button></div><div class="sub">No power. Match it to board. It joins your fleet.</div>`;const t=e.owner!==pe&&Vt(B,pe,"signals")?e.dest??(e.order&&e.order.body!=null?e.order.body:null):null;if(t!=null&&e.seen[pe]===2)return`<div class="head"><b style="color:${z.colors[e.owner]}">${Yt(e.name)}</b><small>${bn[e.cls].name}</small><button class="x" data-a="clear">${et("close")}</button></div><div class="row">${cl(e,!1)}</div><div class="sub">${et("arrived")} Bound for ${Yt(B.bodies[t].name)}</div>`;const n=e.seen[pe]===2||z.dev;return`<div class="head"><b style="color:${z.colors[e.owner]}">${n?Yt(e.name):"Contact"}</b><small>${n?bn[e.cls].name:"unidentified"}</small><button class="x" data-a="clear">${et("close")}</button></div>${n?`<div class="row">${cl(e,!1)}</div>`:""}`}if(z.selBody!=null){const e=B.bodies[z.selBody],t=e.owner===pe,n=e.owner===at?"Independent":B.names[e.owner];let r=`<div class="head"><b style="color:${e.owner===at?hn:z.colors[e.owner]}">${Yt(e.name)}</b><small>${e.home?"Capital":e.giant?"Gas giant":e.kind} · ${Yt(n)}</small><button class="x" data-a="clear">${et("close")}</button></div>`;const s=B.ships.filter(o=>o.at===e.id&&lr(o)&&!o.st.civil);if(!t){const o=wa(B,pe,e);o&&o.at>B.time?r+=`<div class="sub">${et("agent")} Agent arriving<span class="num">${Ln(Math.ceil((o.at-B.time)/5)*5)}</span></div>`:o?(r+='<div class="row">',e.owner===at?r+=Lt("buy",e.id,Ut(et("credits"),"Buy"),Pr(B,e),Ea(B,pe,e)?"no":""):(Vt(B,pe,"sabot")&&(r+=Lt("sab","battery",Ut(et("battery"),"Sabotage"),kn.opCost,po(B,pe,e,"battery")?"no":"")+Lt("sab","yard",Ut(et("yard"),"Stall yard"),kn.opCost,po(B,pe,e,"yard")?"no":"")),Vt(B,pe,"rings")&&(r+=Lt("op",o.op==="steal"?"watch":"steal",Ut(et("credits"),"Steal"),"",o.op==="steal"?"on":"")),Vt(B,pe,"fifth")&&(r+=Lt("op",o.op==="incite"?"watch":"incite",Ut(et("flag"),"Incite"),"",o.op==="incite"?"on":""))),r+=Lt("recall",e.id,Ut(et("agent"),"Recall"),"")+"</div>",e.owner!==at&&e.queue&&e.queue.length&&(r+=`<div class="sts">${tn("Building",e.queue.map(a=>bn[a.cls].name).join(" "))}</div>`)):Vt(B,pe,"signals")&&(r+=`<div class="row">${Lt("agent",e.id,Ut(et("agent"),"Send agent"),kn.cost,ho(B,pe,e)?"no":"")}</div>`)}if(t){const o=bd(e);r+='<div class="row">';const a=e.trait?os[e.trait].boost:null;for(const[u,c]of e.structures.entries()){const h=Ee.structures[c.type],d=`${c.type}.${u}`;r+=Lt("struct",d,Ut(et(c.type),h.name),c.scrap?"Removing":"",`${z.struct===d?"on":""} ${a===c.type?"boost":""} ${c.scrap?"no":""}`,`${h.maxLevel>1?`<span class="lv">${"I".repeat(c.level)}</span>`:""}${c.scrap?`<span class="prog" style="width:${Math.round((1-c.scrap/Ee.scrapTime)*20)*5}%"></span>`:c.left>0?`<span class="prog" style="width:${Math.round((1-c.left/c.total)*20)*5}%"></span>`:""}`)}for(let u=e.structures.length;u<o;u++)r+=Lt("slot","",Ut(et("add"),"Build"),"",`empty ${z.build?"on":""}`);r+="</div>";const l=z.struct?ia(e,z.struct):null;if(l&&!l.scrap){const u=Ee.structures[l.type],c=Or(l)&&l.level<u.maxLevel;r+=`<div class="row">${c?Lt("upgrade",z.struct,Ut(et("up"),"Upgrade"),bo(l),Qr(B,e,l)?"no":""):""}${Lt("demolish",z.struct,Ut(et("close"),"Remove"),`+${Ql(l)}`,ec(B,e,l.type,na(z.struct))?"no":"")}</div>`}else l||(z.struct=null);if(z.build){r+='<div class="row">';for(const u in Ee.structures){const c=Wi(B,e,u);c&&c!=="Not enough credits"||(r+=Lt("build",u,Ut(et(u),Ee.structures[u].name),Ee.structures[u].cost,`${c?"no":""} ${a===u?"boost":""}`))}r+="</div>"}if(qi(e,"yard")){r+='<div class="row">';for(const u of g0){const c=Sa(B,e,u);if(c&&c.startsWith("Needs")&&u==="battleship"&&!Vt(B,pe,"spinal")){r+=Lt("none","",Ut(ul(u,is),bn[u].name),"research","no");continue}r+=Lt("ship",u,Ut(ul(u,z.colors[pe]),bn[u].name),cr(B,pe,u),c?"no":"").replace("<button",`<button title="${bn[u].name}"`)}r+="</div>",e.queue.length&&(r+=`<div class="row">${e.queue.map((u,c)=>Lt("cancel",c,ul(u.cls,cn),c<El(e)?Ln(Math.ceil(u.left/5)*5):"","on",c<El(e)?`<span class="prog" style="width:${Math.round((1-u.left/u.total)*20)*5}%"></span>`:"")).join("")}</div>`)}}else e.structures.length&&(r+=`<div class="sub">${e.structures.filter(Or).map(o=>Ee.structures[o.type].name).join(" · ")}</div>`);return s.length&&(r+=`<div class="row">${s.map(o=>cl(o,!1)).join("")}${Lt("fleet",e.id,Ut(et("check"),"Select all"),"")}</div>`),r}return""}const is="#6d685c",km=["","Seasoned","Veteran","Elite"];function YS(i){const e=i.order&&i.order.body!=null?B.bodies[i.order.body].name:"",t=i.src!=null&&B.bodies[i.src]?B.bodies[i.src].name:"";let n=`<div class="head"><b style="color:${i.owner<0?cn:z.colors[i.owner]}">${i.owner<0?"Convoy":"Freighter"}</b><small>${i.owner<0?"Independent":Yt(B.names[i.owner])}</small><button class="x" data-a="clear">${et("close")}</button></div>`;return e&&(i.owner===pe||i.owner<0)&&(n+=`<div class="sub">${et("freight")} ${t?`${Yt(t)} to `:""}${Yt(e)}<span class="num">${i.owner===pe&&i.tau?Ln(Math.ceil(i.tau/5)*5):""}</span></div>`),n}function Nm(i,e){const t=`${i}:${e}`;if(i==="disarm"){z.armed=null,Ae("close"),Qn();return}if(i==="confirm"){if(!z.armed)return;const[a,...l]=z.armed.split(":");z.confirmed=!0,Nm(a,l.join(":"));return}if(hf&&t0.has(i)&&z.armed!==t&&!z.confirmed){z.armed=t,z.armedLabel=arguments[2]||"OK",Ae("tap"),Qn();return}z.confirmed=!1,z.armed=t0.has(i)||!ff(i,e).text?i==="struct"?t:null:t,z.armedLabel="";const n=mi(),r=n.map(a=>a.id),s=z.selBody!=null?B.bodies[z.selBody]:null,o=a=>{wn({t:"order",ids:r,order:a&&{...a,loose:z.shape==="loose",shape:z.shape}}),Ae("confirm")};switch(i){case"clear":ns(),z.selBody=null,Ae("close");break;case"chip":{const a=+e,l=Dt(B,a);if(!l||!lr(l))break;(z.sel.size>1||!z.sel.has(a))&&(ta([l]),Be.followShip(l.id)),Ae("tap");break}case"fleet":ta(B.ships.filter(a=>a.at===+e&&lr(a)&&!a.st.civil));break;case"go":{const a=(z.routes||[]).find(l=>l.key===e);if(!a||a.dv>Math.min(...n.map(l=>l.dv))){Ae("deny");break}o({type:"orbit",body:z.target,profile:a.profile,via:a.via,side:a.side}),z.target=null,z.routes=null;break}case"strike":o({type:"strike",body:+e,profile:"hard"}),z.target=null,z.routes=null;break;case"pass":o({type:"attack",ship:+e,mode:"pass",profile:"hard"}),z.targetShip=null;break;case"match":o({type:"attack",ship:+e,mode:"match",profile:"hard"}),z.targetShip=null;break;case"board":o({type:"attack",ship:+e,mode:"board",profile:"hard"}),z.targetShip=null;break;case"salvo":wn({t:"salvo",ids:r,ship:+e}),Ae("confirm");break;case"torps":wn({t:"stance",ids:r,st:{torpsFree:!n.every(a=>a.torpsFree)}}),Ae("tap");break;case"fire":wn({t:"stance",ids:r,st:{fireFree:!n.every(a=>a.fireFree)}}),Ae("tap");break;case"evade":wn({t:"stance",ids:r,st:{evade:!n.every(a=>a.evade)}}),Ae("tap");break;case"cut":o(null);break;case"plot":z.plotMode=!z.plotMode,z.plot=null,Ae("tap");break;case"follow":n[0]&&Be.followShip(n[0].id,!0);break;case"formation":{z.shape=z.shape==="wedge"?"column":z.shape==="column"?"loose":"wedge";const a=n.find(l=>l.at===null&&l.order&&["orbit","strike","attack"].includes(l.order.type));a&&n.length>1&&wn({t:"order",ids:r,order:{...a.order,loose:z.shape==="loose",shape:z.shape}}),Ae("tap");break}case"join":o({type:"form",lead:+e}),z.targetShip=null;break;case"pick":{const a=Dt(B,+e);a&&(ta([a]),Be.followShip(a.id));break}case"retreat":{let a=null,l=1e9;for(const u of B.bodies){if(u.owner!==pe)continue;const c=B.bp?B.bp[u.id]:on(B,u,B.time),h=Math.hypot(c.x-n[0].x,c.z-n[0].z)+(qi(u,"yard")||u.home?0:40);h<l&&(l=h,a=u)}if(a){const u=no(B,r,a.id).filter(h=>h.ok),c=u.find(h=>h.key==="hard")||u[0];c?o({type:"orbit",body:a.id,profile:c.profile,via:c.via,side:c.side}):Ae("deny")}break}case"slot":z.build=!z.build,z.struct=null,Ae("tap");break;case"struct":z.struct=z.struct===e?null:e,z.build=!1,Ae("tap");break;case"demolish":s&&!ec(B,s,ao(e),na(e))?(wn({t:"demolish",body:s.id,type:ao(e),i:na(e)}),z.struct=null,Ae("close")):Ae("deny");break;case"trait":break;case"agent":s&&!ho(B,pe,s)?(wn({t:"agent",at:s.id}),Ae("confirm")):Ae("deny");break;case"recall":s&&(wn({t:"recall",at:s.id}),Ae("close"));break;case"buy":s&&!Ea(B,pe,s)?(wn({t:"buy",at:s.id}),Ae("confirm")):Ae("deny");break;case"sab":s&&!po(B,pe,s,e)?(wn({t:"sabotage",at:s.id,what:e}),Ae("confirm")):Ae("deny");break;case"op":s&&(wn({t:"op",at:s.id,op:e}),Ae("tap"));break;case"build":s&&!Wi(B,s,e)?(wn({t:"build",body:s.id,type:e}),z.build=!1,Ae("confirm")):Ae("deny");break;case"upgrade":{const a=s&&ia(s,e);a&&!Qr(B,s,a)?(wn({t:"upgrade",body:s.id,type:ao(e),i:na(e)}),Ae("confirm")):Ae("deny");break}case"ship":s&&!Sa(B,s,e)?(wn({t:"ship",body:s.id,cls:e}),Ae("confirm")):Ae("deny");break;case"cancel":s&&(wn({t:"cancel",body:s.id,i:+e}),Ae("close"));break}Qn()}const uc=(i,e)=>i.addEventListener("click",t=>{const n=t.target.closest("[data-a]");n&&(t.stopPropagation(),e(n.dataset.a,n.dataset.v,n))});uc(Oe("strip"),(i,e,t)=>Nm(i,e,t.querySelector("em")?.textContent));function KS(){const i=jl(B,pe),e={capital:"Capital",freight:"Freighter",blockaded:"Blockaded"};let t=`<div class="head"><b>Income</b><small>${Fr(i.total)}</small><button class="x" data-a="closeSheet">${et("close")}</button></div>`;for(const s of i.lines.sort((o,a)=>a.rate-o.rate)){const o=B.bodies[s.body];t+=`<div class="line"><div class="what"><b>${Yt(o.name)}</b><span${s.how==="blockaded"?` style="color:${rn}"`:""}>${e[s.how]}</span></div><span class="num">${s.how==="blockaded"?"0":Fr(s.rate)}</span></div>`}i.upkeep&&(t+=`<div class="line"><div class="what"><b>Ships</b><span>Upkeep</span></div><span class="num">${Fr(-i.upkeep)}</span></div>`);const n=B.ships.filter(s=>s.owner===pe&&s.st.civil),r=B.bodies.reduce((s,o)=>s+(o.owner===pe?o.stock:0),0);return t+=`<div class="sts pad">${tn("Freighters",n.length)}${tn("In transit",Math.round(n.reduce((s,o)=>s+(o.cargo||0),0)/10)*10)}${tn("Waiting",Math.round(r/10)*10)}</div>`,t}function ZS(){if(z.sheet==="income")return KS();const i=B.tech[pe],e=yd(B,pe),t=i.project;let n=`<div class="head"><b>Research</b><small>${e>1?`Speed ${Math.round(e*100)}%`:""}</small><button class="x" data-a="closeSheet">${et("close")}</button></div><div class="tree">`;const r=(s,o,a)=>i.picks[a.key]?"done":t&&t.key===a.key?"now":o<i[s]||t&&t.line===s&&o===i[s]?"skip":o===i[s]?B.credits[pe]<lo[o]?"open poor":"open":"lock";for(const s of to)n+=`<div class="tr"><div class="tn">${et(s)}<span>${ri[s].name}</span></div>`,ri[s].tiers.forEach((o,a)=>{n+=`<div class="tc">${o.map(l=>`<button class="nd ${r(s,a,l)} ${z.techSel===`${s}:${l.key}`?"sel":""}" data-a="node" data-v="${s}:${l.key}">${l.name}</button>`).join("")}</div>`}),n+="</div>";if(n+="</div>",!z.techSel){const s=to.find(o=>i[o]<ri[o].tiers.length)||to[0];z.techSel=`${s}:${ri[s].tiers[Math.min(i[s],3)][0].key}`}if(z.techSel){const[s,o]=z.techSel.split(":"),a=ri[s].tiers.findIndex(h=>h.some(d=>d.key===o)),l=Yl(o),u=r(s,a,l).split(" ")[0];ri[s].tiers[a].length>1;const c=u==="done"?"Done":u==="now"?Ln(Math.ceil(t.left/e/5)*5):u==="skip"?"Not chosen":u==="lock"?"Later":`<button class="tile ${Mo(B,pe,s,o)?"no":"go"}" data-a="research" data-v="${s}:${o}"><em>Research</em><small>${lo[a]}</small></button>`;n+=`<div class="td"><div class="what"><b>${l.name}</b><span>${l.text}</span></div><span class="num">${c}</span></div>`}return n}uc(Oe("sheet"),(i,e)=>{if(i==="closeSheet"&&(Oe("sheet").hidden=!0,Ae("close")),i==="node"&&(z.techSel=e,Ae("tap")),i==="research"){const[t,n]=e.split(":");Mo(B,pe,t,n)?Ae("deny"):(wn({t:"research",line:t,key:n}),Ae("confirm"))}Qn()});function Ft(i,e,t,n){const r=document.createElement("button");r.className="note",r.style.setProperty("--c",e),r.innerHTML=et(i)+(t?`<span>${Yt(t)}</span>`:""),n&&(r.onclick=()=>{n(),Ae("tap")});const s=Oe("feed");for(s.prepend(r);s.children.length>5;)s.lastChild.remove();setTimeout(()=>r.classList.add("out"),5200),setTimeout(()=>r.remove(),5900)}let n0=-99,i0=-99;function jS(){for(const i of B.events){if(i.seen||(i.seen=!0,!oo()))continue;const e=i.ship!=null?Dt(B,i.ship):null,t=e?()=>Be.followShip(e.id):null,n=i.at!=null?B.bodies[i.at]:null,r=n?()=>Be.focus(B,n.id,!1):null,s=i.x!==void 0?()=>{Be.orbit.follow=null,Be.orbit.ship=null,Be.orbit.target.set(i.x,i.y,i.z)}:null,o=z.colors[pe];switch(i.type){case"contact":i.owner===pe&&B.time-n0>20&&(n0=B.time,Ft("contact",cn,"Contact",t),Ae("contact"));break;case"salvo":i.owner!==pe&&i.to===pe&&e&&B.time-i0>6&&(i0=B.time,Ft("torp",rn,"Torpedoes",t),Ae("alarm"));break;case"system":i.owner===pe&&e&&(Ft("bolt",rn,`${e.name}: ${i.sys} out`,t),Ae("system"));break;case"repaired":i.owner===pe&&Ae("repaired");break;case"lost":i.owner===pe?(Ft("lost",rn,`${i.name} lost`,s),Ae("lost")):i.by===pe&&Ft("lost",hn,`${i.name} destroyed`,s);break;case"raided":case"seized":i.owner===pe&&i.type==="raided"||i.from===pe?(Ft("raided",rn,"Freighter lost",s),Ae("deny")):(i.by===pe||i.type==="seized"&&i.owner===pe)&&(Ft("freight",cn,i.n?`+${i.n}`:"",s),Ae("freight"));break;case"captured":i.owner===pe?(Ft("captured",o,`${n.name} taken`,r),Ae("captured")):i.from===pe&&(Ft("captured",rn,`${n.name} lost`,r),Ae("lostWorld"));break;case"silenced":i.by===pe?Ae("silenced"):i.owner===pe&&(Ft("battery",rn,`${n.name}: battery down`,r),Ae("silenced"));break;case"moved":i.owner===pe?(Ft("captured",rn,`Capital moved to ${n.name}`,r),Ae("lostWorld")):Ft("captured",z.colors[i.owner],`${B.names[i.owner]} moved to ${n.name}`,r);break;case"built":i.owner===pe&&(Ft(i.what,o,n.name,r),Ae("built"));break;case"launched":i.owner===pe&&e&&(Ft("yard",o,`${e.name} launched`,t),Ae("launched"));break;case"research":i.owner===pe&&(Ft(i.line,cn,Yl(i.key).name,null),Ae("research"));break;case"event":e&&(Ft(i.kind==="derelict"?"star":"freight",cn,i.kind==="derelict"?`Derelict ${bn[e.cls].name.toLowerCase()}`:"Convoy",t),Ae("contact"));break;case"agentCaught":i.owner===pe?(Ft("agent",rn,`Agent caught at ${n.name}`,r),Ae("lost")):i.by===pe&&(Ft("agent",o,`Caught an agent at ${n.name}`,r),Ae("repaired"));break;case"bought":i.owner===pe?(Ft("captured",o,`${n.name} joined you`,r),Ae("captured")):i.owner!==at&&Ft("captured",z.colors[i.owner],`${n.name} joined ${B.names[i.owner]}`,r);break;case"sabotage":i.owner===pe&&(Ft("bolt",rn,`Sabotage at ${n.name}`,r),Ae("alarm"));break;case"promoted":i.owner===pe&&e&&(Ft("star",cn,`${e.name}: ${km[i.rank].toLowerCase()}`,t),Ae("research"));break;case"freight":i.owner===pe&&Ae("freight",{gain:.5});break;case"fuel":i.owner===pe&&e&&(Ft("fuel",cn,`${e.name}: low fuel`,t),Ae("fuel"));break;case"repelled":i.owner===pe?(Ft("flag",rn,`Boarding of ${i.name} failed`,t),Ae("deny")):i.from===pe&&Ft("flag",o,`${i.name} fought off boarders`,t);break;case"boarded":i.owner===pe?(Ft("flag",o,i.name,t),Ae("captured")):i.from===pe&&(Ft("flag",rn,i.name,t),Ae("lost"));break;case"eliminated":i.owner!==pe&&Ft("skull",z.colors[i.owner],B.names[i.owner],null);break}}}Oe("rnd").innerHTML=et("research")+'<i class="bar"></i>';Oe("sys").innerHTML=et("system");Oe("menuBtn").innerHTML=et("menu");function Qn(){if(!B||!oo())return;Oe("cr").textContent=Math.floor(B.credits[pe]||0),Oe("rate").textContent=Fr(jl(B,pe).total),Oe("dateT").textContent=Cm(B.time),Oe("dayBar").style.width=`${Math.floor(B.time/_a%1*20)*5}%`;const i=ba(B,pe),e=Jl(B,pe).length,t=Ma(B,pe)-e;let n="";for(let a=0;a<i;a++)n+=`<i class="${a<e?"on":a<e+t?"q":""}"></i>`;eo(Oe("pips"),n);const r=B.tech[pe],s=Oe("rnd");s.querySelector(".bar").style.width=r.project?`${(1-r.project.left/r.project.total)*100}%`:"0",s.classList.toggle("idle",!r.project&&to.some(a=>r[a]<ri[a].tiers.length&&ri[a].tiers[r[a]].some(l=>!Mo(B,pe,a,l.key)))),Oe("warp").textContent=`${Nr}×`,Oe("warp").hidden=St!=="solo",Oe("pause").innerHTML=et(pi?"play":"pause"),Oe("pause").hidden=St==="guest";for(const a of B.bodies)a.owner===pe&&a.yt>1&&!a.warnedYield?(a.warnedYield=!0,Ft("captured",rn,`${a.name} under siege`,()=>Be.focus(B,a.id,!1)),Ae("alarm")):a.yt<=0&&(a.warnedYield=!1);let o=qS();if(o){const a=z.armed&&z.armedLabel,[l,...u]=(z.armed||"").split(":"),c=z.armed?ff(l,u.join(":")):null;o+=c?`<div class="bar" ${a?"":'data-a="disarm"'}><div class="b1"><p>${Yt(c.text)}</p>${a?`<button class="bx" data-a="disarm">${et("close")}</button><button class="bok" data-a="confirm">${Yt(z.armedLabel)}</button>`:""}</div>${WS(c.stats)}</div>`:`<div class="bar">${XS()}</div>`}Oe("strip").hidden=!o||!Oe("sheet").hidden,eo(Oe("strip"),o),Oe("sheet").hidden||eo(Oe("sheet"),ZS()),zi&&eo(Oe("brief"),QS()),dc()}Oe("brief").onclick=i=>{if(Pt&&!Pt.free){const e=i.target.closest("[data-t]")?.dataset.t;e==="next"?(qo[Pt.i].last?$l():(Pt.i+=1,pf(),dc()),Ae("tap")):e==="end"?($l(),Ae("close")):e==="show"&&z.tutWorld!=null&&(Be.focus(B,z.tutWorld,!1),Ae("tap"));return}z.briefShut=!z.briefShut,Qn()};function JS(){B.credits[pe]+=800,Pt={i:0,free:!1,did:new Set,target:Am(B,pe),held0:B.bodies.filter(i=>i.owner===pe).length},pf(),Oe("brief").hidden=!1,dc()}function pf(){const i=Be.orbit;Pt.cam={az:i.az,pol:i.pol,dist:i.dist,x:i.target.x,y:i.target.y,z:i.target.z}}function r0(){const i=Be.orbit,e=Pt.cam,t=2*(Math.abs(i.az-e.az)+Math.abs(i.pol-e.pol)+Math.abs(Math.log(i.dist/e.dist)))+3*Math.hypot(i.target.x-e.x,i.target.y-e.y,i.target.z-e.z)/e.dist;return(!Pt.target||Pt.target.owner!==at&&Pt.target.owner!==pe)&&(Pt.target=Am(B,pe)||Pt.target),{game:B,ui:z,me:pe,warp:z.warp,moved:t,touch:hf,target:Pt.target,home:B.homes[pe],gained:B.bodies.filter(n=>n.owner===pe).length-Pt.held0,sheet:!Oe("sheet").hidden&&z.sheet!=="income"}}function $l(i=!1){Pt&&(Pt.free=!0,z.tutWorld=null,Oe("tutglow").textContent="",rt.done.tutorial=!0,_i(),i||(Oe("brief").hidden=!0,Ft("contact",cn,"Your rival is moving",null)))}function dc(){if(!Pt||Pt.free||!ys())return;let i=r0();if(!i.home||!i.target){$l();return}for(let n=qo[Pt.i];!n.last&&(n.on&&Pt.did.has(n.on)||n.done&&n.done(i));n=qo[Pt.i])Pt.i+=1,pf(),i=r0();const e=qo[Pt.i],t=typeof e.point=="function"?e.point(i):e.point;Oe("tutglow").textContent=t?`${t} { outline: 2px solid var(--amber); outline-offset: 2px; }`:"",z.tutWorld=e.world?e.world(i):null,eo(Oe("brief"),`<b>${e.title}<span class="t">${Pt.i+1}/${qo.length}</span></b><p>${e.text(i)}</p><div class="tb">${z.tutWorld!=null?'<button data-t="show">Show</button>':""}<button data-t="next">${e.last?"Play":e.on||e.done?"Skip":"Next"}</button><button data-t="end">Close</button></div>`)}Oe("purse").onclick=()=>{const i=!Oe("sheet").hidden&&z.sheet==="income";z.sheet="income",Oe("sheet").hidden=i,Ae(i?"close":"open"),Qn()};Oe("rnd").onclick=()=>{const i=!Oe("sheet").hidden&&z.sheet!=="income";z.sheet="research",Oe("sheet").hidden=i,Ae(Oe("sheet").hidden?"close":"open"),Qn()};Oe("sys").onclick=()=>{Be.orbit.follow=null,Be.orbit.ship=null,Be.orbit.target.set(0,0,0),Be.orbit.goalDist=Be.orbit.maxDist*.3,Ae("tap")};Oe("warp").onclick=()=>{Nr=Nr>=8?1:Nr*2,Ae("tap"),Qn()};Oe("pause").onclick=()=>{St!=="guest"&&(pi=!pi,St==="host"&&Un.broadcast({t:"paused",paused:pi}),Ae("tap"),Qn())};Oe("menuBtn").onclick=()=>sa();function QS(){const i=zi.state(B,pe);return`<b>${Yt(zi.name)}${i.clock!=null?`<span class="t">${Ln(Math.max(0,i.clock))}</span>`:""}</b>${z.briefShut?"":Yt(i.text)}`}const sn=Oe("panel");function bs(i){sn.innerHTML=i,sn.hidden=!1,sn.scrollTop=0,sn.dataset.screen="",Oe("title").hidden=!0}function Zs(){sn.hidden=!0,Oe("title").hidden=St!=="demo"}const Ca=(i,e="title")=>`<div class="ph"><button class="sq" data-a="${e}">${et("back")}</button><h2>${i}</h2></div>`,Fm=i=>`<div class="opts">${ya.map(e=>`<button class="opt ${e===i?"on":""}" data-a="faction" data-v="${e}" style="--c:${Bl[e]}"><i class="sw"></i><div><b>${ei[e].name}</b><span>${ei[e].text}</span></div><span class="mark">${et("check")}</span></button>`).join("")}</div>`,ra=(i,e,t,n=r=>r)=>`<div class="seg">${e.map(r=>`<button class="${String(r)===String(t)?"on":""}" data-a="${i}" data-v="${r}">${n(r)}</button>`).join("")}</div>`;function wl(){const i=ca().key.slice(5);Oe("nav").innerHTML=`<button data-a="setup">Engage</button><button data-a="tutorial">Tutorial</button><button data-a="daily">Daily<small>${i}</small></button><button data-a="mp">Multiplayer</button><button data-a="manual">Manual</button>`,Oe("fine").innerHTML=`<button data-a="sound">Sound ${rt.sound?"on":"off"}</button><button data-a="text">Text ${rt.ui===1?"standard":rt.ui>1?"large":"small"}</button><button data-a="gfx">Graphics ${rt.gfx==="low"?"low":"high"}</button>`}function Ys(i=!1){bs(`${Ca(i?"Daily system":"Engage")}<p class="lbl">Side</p>${Fm(rt.faction)}<p class="lbl">Rivals</p>${ra("rivals",[1,2],rt.rivals)}<p class="lbl">AI</p>${ra("level",Fd,rt.level,e=>ua[e].name)}`+(i?"":`<p class="lbl">Win by</p>${ra("winby",["capital","conquest"],rt.conquest?"conquest":"capital",e=>e==="capital"?"Taking the capital":"Taking every world")}`)+`<button class="cta" data-a="${i?"launchDaily":"launch"}">Launch</button>`),sn.dataset.screen=i?"daily":"setup"}function nu(i,e=!1){const t=ya.filter(s=>s!==rt.faction);Oi(i)()<.5&&t.reverse();const r=[{faction:rt.faction,name:rt.name||"You"}];for(let s=0;s<rt.rivals;s++)r.push({faction:t[s],ai:rt.level});To(hs({seed:i,players:r,conquest:!e&&rt.conquest}),{players:r,mode:"solo"}),B.daily=e?ca().key:null}function e2(){bs(`${Ca("Scenarios")}<div class="opts">${US.map(i=>`<button class="opt" data-a="scenario" data-v="${i}"><i class="sw" style="background:${rt.done[i]?cn:"var(--dim)"}"></i><div><b>${Vl[i].name}</b><span>${Vl[i].text}</span></div><span class="mark" style="visibility:${rt.done[i]?"visible":"hidden"}">${et("check")}</span></button>`).join("")}</div>`)}function s0(i){const e=Vl[i],t=e.make();To(t.game,{players:t.players,mode:"solo",scn:{key:i,name:e.name,state:e.state},look:t.look,me:0})}function o0(){const i=(e,t)=>`<div class="k">${et(e)}<div>${t}</div></div>`;bs(`${Ca("Manual")}<div class="prose">
    <p>Take the enemy <b>capital</b> (double ring) to win.</p>
    ${i("contact","Tap a ship, then tap a world to go there or a ship to attack or join it.")}
    ${i("add","On a phone the first tap on a button shows what it does. The second tap does it.")}
    ${i("fuel","Flying uses fuel. Ships refuel at your worlds. A tender refuels ships next to it.")}
    ${i("match","Ships sent together fly in formation. Tap one ship's square to order it alone.")}
    ${i("strike","Shots do more damage the faster the ships close.")}
    ${i("dark","A burning drive is easy to see. A coasting ship is not. Planets block the view.")}
    ${i("battery","A world yields when its battery is down and only your ships are in orbit.")}
    ${i("freight","Freighters carry income to the capital. A ship in orbit blocks a world's income.")}
    ${i("habitat","Each habitat level allows one more ship.")}
    ${i("star","Gold marks a world with a bonus.")}
    ${i("agent","Agents need Intelligence research.")}
    <p>Mouse: drag to move, right-drag to turn, wheel to zoom. Keys: WASD move, Q/E turn, Space pause, 1 to 4 speed, H system, R research, Esc back.</p></div>`)}const t2=[["Ships built","built"],["Ships lost","lost"],["Ships destroyed","killed"],["Worlds taken","captured"],["Worlds lost","worldsLost"],["Freighters home","hauled"],["Freighters raided","raided"],["Research","research"]];let fd=!1,zm="";function n2(){const t=document.createElement("canvas");t.width=1080,t.height=1560;const n=t.getContext("2d"),r=B.players,s=Array.from({length:r},(d,f)=>f),o=(d,f)=>`${d} ${f}px Rajdhani, system-ui, sans-serif`;n.fillStyle="#050506",n.fillRect(0,0,1080,1560),n.strokeStyle="rgba(232,226,210,0.25)",n.lineWidth=2,n.strokeRect(28,28,1024,1504),n.textAlign="left",n.fillStyle=is,n.font=o(500,34),n.fillText("Perihelion",80,110),n.fillStyle=fd?cn:rn,n.font=o(600,104),n.fillText(fd?"Victory":"Defeat",80,220),n.fillStyle=hn,n.font=o(500,34),n.fillText([ei[B.factions[pe]]?.name,zm||(B.daily?`Daily ${B.daily}`:""),Ln(B.time)].filter(Boolean).join("  ·  "),80,276);const a=80,l=190,u=1e3;let c=370;n.font=o(600,30),n.textAlign="right",s.forEach((d,f)=>{n.fillStyle=z.colors[d],n.fillText(String(B.names[d]).slice(0,12),u-l*(r-1-f),c,l-20)});for(const[d,f]of t2)c+=56,n.strokeStyle="rgba(232,226,210,0.14)",n.lineWidth=1,n.beginPath(),n.moveTo(a,c-38),n.lineTo(u,c-38),n.stroke(),n.textAlign="left",n.fillStyle=is,n.font=o(500,30),n.fillText(d,a,c),n.textAlign="right",n.font=o(500,32),s.forEach((p,v)=>{n.fillStyle=z.colors[p],n.fillText(String(Math.round(B.stats[p][f]||0)),u-l*(r-1-v),c)});const h=B.series||[];if(h.length>1){const d=286.6666666666667,f=330,p=c+110,v=h[h.length-1].t||1;[["Fleet strength","pow"],["Worlds","worlds"],["Income","inc"]].forEach(([g,m],_)=>{const w=80+_*(d+30),x=p+24,b=x+f,S=Math.max(1,...h.map(C=>Math.max(...C[m])));n.textAlign="left",n.fillStyle=hn,n.font=o(500,30),n.fillText(g,w,p),n.strokeStyle="rgba(232,226,210,0.14)",n.lineWidth=1;for(const C of[0,1])n.beginPath(),n.moveTo(w,b-C*f),n.lineTo(w+d,b-C*f),n.stroke();for(const C of s)n.strokeStyle=z.colors[C],n.lineWidth=3,n.lineJoin="round",n.beginPath(),h.forEach((y,T)=>{const R=w+y.t/v*d,U=b-y[m][C]/S*f;T?n.lineTo(R,U):n.moveTo(R,U)}),n.stroke()})}return n.textAlign="left",n.fillStyle=is,n.font=o(500,26),n.fillText("pretzel-dev.github.io/game-dev/perihelion-next",80,1490),t}async function i2(){if(!B)return;try{await document.fonts.load("600 30px Rajdhani"),await document.fonts.load("500 30px Rajdhani")}catch{}const i=await new Promise(n=>n2().toBlob(n,"image/png"));if(!i)return;const e=new File([i],"perihelion.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(n){if(n.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}function iu(i,e){ts=!0,fd=i,zm=e||"",Oe("strip").hidden=!0,Oe("sheet").hidden=!0,Oe("hud").hidden=!0,Oe("date").hidden=!0,Oe("brief").hidden=!0,Pt&&$l(!0),Ae(i?"won":"defeat");const t=B.players,n=Array.from({length:t},(h,d)=>d),r=new Set(["lost","worldsLost"]),s=h=>{const d=n.map(p=>Math.round(B.stats[p][h]||0)),f=r.has(h)?Math.min(...d):Math.max(...d);return!r.has(h)&&f<=0||d.every(p=>p===f)?[]:n.filter(p=>d[p]===f)},o=(h,d)=>{const f=s(d);return`<span>${h}</span>${n.map(p=>`<b class="${f.includes(p)?"best":""}" style="color:${z.colors[p]}">${Math.round(B.stats[p][d]||0)}</b>`).join("")}`},a=(h,d,f=p=>Math.round(p))=>{const p=B.series||[];if(p.length<2)return"";const v=320,g=120,m=30,_=8,w=8,x=18,b=p[p.length-1].t||1,S=Math.max(1,...p.map(k=>Math.max(...k[d]))),C=k=>m+k/b*(v-m-_),y=k=>w+(1-k/S)*(g-w-x),T=n.map(k=>`<polyline fill="none" stroke="${z.colors[k]}" stroke-width="2" stroke-linejoin="round" points="${p.map(P=>`${C(P.t).toFixed(1)},${y(P[d][k]).toFixed(1)}`).join(" ")}"/>`).join(""),R=[0,.5,1].map(k=>`<line x1="${m}" x2="${v-_}" y1="${y(S*k)}" y2="${y(S*k)}" stroke="rgba(232,226,210,0.12)"/><text x="${m-4}" y="${y(S*k)+3}" font-size="9" fill="${is}" text-anchor="end">${f(S*k)}</text>`).join(""),U=`<text x="${m}" y="${g-4}" font-size="9" fill="${is}">0</text><text x="${v-_}" y="${g-4}" font-size="9" fill="${is}" text-anchor="end">${Ln(b)}</text>`;return`<div class="chart" data-key="${d}"><span>${h}</span><svg viewBox="0 0 ${v} ${g}" data-l="${m}" data-r="${v-_}" data-w="${v}">${R}${U}${T}<line class="cross" y1="${w}" y2="${g-x}" stroke="${hn}" stroke-opacity="0.5" visibility="hidden"/></svg><div class="readout">&nbsp;</div></div>`};bs(`<div class="mast"><h1 style="font-size:2rem;color:${i?cn:rn}">${i?"Victory":"Defeat"}</h1><p class="tag">${[e||(B.daily?`Daily ${B.daily}`:""),Ln(B.time)].filter(Boolean).map(Yt).join(" · ")}</p></div><div class="tally" style="grid-template-columns:1fr ${"auto ".repeat(t)}"><span></span>${n.map(h=>`<b style="color:${z.colors[h]}">${Yt(B.names[h])}</b>`).join("")}${o("Ships built","built")}${o("Ships lost","lost")}${o("Ships destroyed","killed")}${o("Worlds taken","captured")}${o("Worlds lost","worldsLost")}${o("Freighters home","hauled")}${o("Freighters raided","raided")}${o("Research","research")}</div>`+a("Fleet strength","pow")+a("Worlds","worlds")+a("Income a day","inc",h=>yo(h))+'<button class="cta ghost" data-a="share">Share</button><button class="cta" data-a="again">Again</button><button class="cta ghost" data-a="quit">Title</button>'),zi&&i&&(rt.done[zi.key]=!0,_i());const l=[...sn.querySelectorAll(".chart")],u=B.series||[],c=(h,d)=>{const f=d.getBoundingClientRect(),p=+d.dataset.l,v=+d.dataset.r,g=Math.min(1,Math.max(0,((h.clientX-f.left)/f.width*+d.dataset.w-p)/(v-p))),m=u[Math.round(g*(u.length-1))],_=p+m.t/(u[u.length-1].t||1)*(v-p);for(const w of l){const x=w.querySelector(".cross"),b=w.dataset.key;x.setAttribute("x1",_),x.setAttribute("x2",_),x.setAttribute("visibility","visible"),w.querySelector(".readout").innerHTML=`${Cm(m.t)}${n.map(S=>`<b style="color:${z.colors[S]}">${b==="inc"?yo(m[b][S]):Math.round(m[b][S])}</b>`).join("")}`}};for(const h of l){const d=h.querySelector("svg");d.addEventListener("pointerdown",f=>c(f,d)),d.addEventListener("pointermove",f=>c(f,d))}}function sa(){ys()&&(St==="solo"&&(pi=!0),bs(`<div class="ph"><h2>Paused</h2></div><button class="cta" data-a="resume">Resume</button><button class="cta ghost" data-a="sound">Sound ${rt.sound?"on":"off"}</button><button class="cta ghost" data-a="gfx">Graphics ${rt.gfx==="low"?"low":"high"}</button><button class="cta ghost" data-a="manual2">Manual</button><button class="cta ghost" data-a="quit">${St==="solo"?"Abandon":"Leave"}</button>`),sn.dataset.screen="pause",Qn())}let fi=null;function Ir(i=""){bs(`${Ca("Multiplayer")}<p class="lbl">Name</p><input id="mpname" maxlength="16" value="${Yt(rt.name)}" placeholder="Your name" autocomplete="off" /><p class="lbl">Side</p>${Fm(rt.faction)}<button class="cta" data-a="host">Host a game</button><p class="lbl">Join with a code</p><input id="mpcode" maxlength="5" placeholder="Code" autocomplete="off" autocapitalize="characters" /><button class="cta ghost" data-a="join">Join</button><p class="hint">${Yt(i)}</p>`),sn.dataset.screen="mp"}function rs(){if(!fi)return;const i=St==="hostLobby";bs(`${Ca("Lobby","leaveLobby")}<p class="lbl">Room code</p><div class="code">${fi.code||"·····"}</div><div class="opts">`+fi.seats.map((e,t)=>`<div class="opt" style="--c:${Bl[e.faction]||"#888"}"><i class="sw"></i><div><b>${Yt(e.name)}${t===fi.you?" (you)":""}</b><span>${ei[e.faction]?.name||""}${e.online?"":" · away"}</span></div>${i&&t>0?`<button class="mark" style="visibility:visible" data-a="kick" data-v="${t}">${et("close")}</button>`:""}</div>`).join("")+`</div>${i?`<p class="lbl">Win by</p>${ra("winby",["capital","conquest"],rt.conquest?"conquest":"capital",e=>e==="capital"?"Taking the capital":"Taking every world")}<p class="lbl">Add an AI</p>${ra("lobbyLevel",Fd,rt.level,e=>ua[e].name)}<button class="cta ghost" data-a="addAI">Add AI</button><button class="cta" data-a="startMP">Start</button>`:'<p class="hint">Waiting for the host to start</p>'}`)}function r2(){rt.name=cc(Oe("mpname").value),_i(),fi={code:"",seats:[],you:0},St="hostLobby",Un=PS(rt.name,{open:i=>{fi.code=i,rs()},seats:i=>{fi.seats=i,St==="hostLobby"&&rs()},cmd:(i,e)=>{St==="host"&&!pi&&Dm(i,e)},error:i=>{Ur(),Ir(i)},left:()=>{},rejoin:i=>Un.sendTo(i,{t:"start",seed:B.seed,players:B.mpPlayers,you:i})},rt.faction),rs()}function s2(){rt.name=cc(Oe("mpname").value),_i();const i=Oe("mpcode").value.trim().toUpperCase();if(i.length!==5){Ir("Enter the five-letter code");return}fi={code:i,seats:[],you:0},St="guestLobby",Un=DS(i,rt.name,kS,{message:e=>{e.t==="lobby"?(fi.seats=e.seats,fi.you=e.you,fi.code=e.code,St==="guestLobby"&&rs()):e.t==="full"||e.t==="kicked"?(Ur(),Ir(e.why||"Removed from the room")):e.t==="start"?To(hs({seed:e.seed,players:e.players,mp:!0}),{players:e.players,mode:"guest",me:e.you}):e.t==="snap"&&St==="guest"?(F0(B,e.s,pe),B.acc=0,e.fx&&(z.pendingFx=(z.pendingFx||[]).concat(e.fx))):e.t==="paused"&&(pi=e.paused)},error:e=>{Ur(),Ir(e)},closed:()=>{St==="guest"&&!ts&&(Ur(),Wl(),Ir("The host left the game"))}},rt.faction),rs()}function o2(){const i=Un.seats.map(n=>({faction:n.faction,name:n.name,ai:n.kind==="ai"?n.difficulty:null}));if(i.length<2)return;Un.start();const e=Math.random()*1e9|0,t=hs({seed:e,players:i,mp:!0,conquest:rt.conquest});t.mpPlayers=i,Un.seats.forEach((n,r)=>{n.kind==="human"&&r>0&&Un.sendTo(r,{t:"start",seed:e,players:i,you:r})}),To(t,{players:i,mode:"host",me:0})}function Ur(){if(Un){try{Un.close()}catch{}Un=null}fi=null}function Om(i,e){switch(i){case"title":Zs();break;case"setup":Ys();break;case"daily":Ys(!0);break;case"faction":if(rt.faction=e,_i(),sn.dataset.screen==="mp"){const t=Oe("mpname").value,n=Oe("mpcode").value;rt.name=cc(t),Ir(),Oe("mpcode").value=n}else Ys(sn.dataset.screen==="daily");break;case"rivals":rt.rivals=+e,_i(),Ys(sn.dataset.screen==="daily");break;case"level":rt.level=e,_i(),Ys(sn.dataset.screen==="daily");break;case"launch":nu(Math.random()*1e9|0);break;case"launchDaily":nu(ca().seed,!0);break;case"scenarios":e2();break;case"scenario":s0(e);break;case"manual":o0();break;case"manual2":o0(),sn.querySelector('[data-a="title"]').dataset.a="pauseBack";break;case"pauseBack":sa();break;case"mp":Ir();break;case"host":r2();break;case"join":s2();break;case"lobbyLevel":rt.level=e,_i(),rs();break;case"addAI":{const t=Un.seats.map(n=>n.faction);Un.addAI(rt.level,ya.find(n=>!t.includes(n))||"boreal");break}case"kick":Un.remove(+e);break;case"startMP":o2();break;case"leaveLobby":Ur(),St="demo",Ir();break;case"titleMP":Ur(),St="demo",Zs();break;case"resume":pi=!1,Zs();break;case"again":zi?s0(zi.key):St==="solo"?nu(B.daily?ca().seed:Math.random()*1e9|0,!!B.daily):(Ur(),Wl());break;case"quit":Ur(),Zs(),Wl();break;case"sound":rt.sound=!rt.sound,_i(),fs.setEnabled(rt.sound),wl(),sn.dataset.screen==="pause"&&!sn.hidden&&sa();break;case"text":rt.ui=rt.ui===1?1.15:rt.ui>1?.9:1,_i(),document.documentElement.style.setProperty("--ui-mult",rt.ui),wl();break;case"gfx":rt.gfx=rt.gfx==="low"?"high":"low",_i(),Be.setQuality(Lm()),wl(),sn.dataset.screen==="pause"&&!sn.hidden&&sa();break;case"tutorial":{const t=[{faction:"concord",name:rt.name||"You"},{faction:"boreal",ai:Fd[0]}];To(hs({seed:4,players:t}),{players:t,mode:"solo",tutorial:!0}),Zs();break}case"winby":rt.conquest=e==="conquest",_i(),fi?rs():Ys(sn.dataset.screen==="daily");break;case"share":i2();break}Ae("tap")}uc(sn,Om);uc(Oe("title"),Om);const vr=Oe("scene"),Gn=new Map;let ut=null,ru={t:0,key:null};vr.addEventListener("contextmenu",i=>i.preventDefault());const Bm=()=>{const i=Dt(B,z.plot.ship),e=Be.worldAt(z.plot.x,z.plot.y),t=i&&Be.screenOfShip(i.id);if(!i||!e||!t)return null;const n=Math.hypot(z.plot.x-t.x,z.plot.y-t.y);if(n<14)return null;const r=e.x-i.x,s=e.z-i.z,o=Math.hypot(r,s)||1;return{type:"burn",x:r/o,y:0,z:s/o,left:Math.min(60,n/4)}};let a0=0;function a2(){const i=performance.now();if(i-a0<120)return;a0=i;const e=Bm(),t=Dt(B,z.plot.ship);z.plot.path=e&&t?mo(B,t,e,{coast:600,maxT:700,h:2,every:3}).path:null}const l0=i=>!z.plotMode||!mi().length?!1:(z.plot={ship:mi()[0].id,x:i.clientX,y:i.clientY,path:null},ut={kind:"plot",mouse:i.pointerType==="mouse"},!0),Gm=i=>{const e=!i&&Bm();e&&(wn({t:"order",ids:mi().map(t=>t.id),order:e}),Ae("confirm"),z.plotMode=!1),z.plot=null,ut=null,z.dragging=!1,Qn()},c0=(i,e)=>{const t=Be.pick(i,e),n=t?JSON.stringify(t):null,r=performance.now(),s=n!==null&&ru.key===n&&r-ru.t<350;ru=s?{t:0,key:null}:{t:r,key:n},OS(i,e,s),Qn()};vr.addEventListener("pointerdown",i=>{if(B){i.preventDefault();try{vr.setPointerCapture(i.pointerId)}catch{}if(Be.orbit.vaz=Be.orbit.vpol=0,i.pointerType==="mouse"){if(i.button===0&&l0(i))return;const e=i.button===2||i.button===1||i.altKey;ut={kind:e?"turn":"click",mouse:!0,x0:i.clientX,y0:i.clientY,x:i.clientX,y:i.clientY,pivot:e&&!Be.following()?Be.pivotAt(i.clientX,i.clientY):null},z.dragging=!0;return}if(i.isPrimary&&Gn.clear(),Gn.set(i.pointerId,{x:i.clientX,y:i.clientY}),Gn.size===1)l0(i)||(ut={kind:"tap",x0:i.clientX,y0:i.clientY});else if(Gn.size===2){const[e,t]=[...Gn.values()];z.plot=null,ut={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2,mx0:(e.x+t.x)/2,my0:(e.y+t.y)/2}}z.dragging=!0}});vr.addEventListener("pointermove",i=>{if(ut?.kind==="plot"){z.plot.x=i.clientX,z.plot.y=i.clientY,a2();const r=Gn.get(i.pointerId);r&&(r.x=i.clientX,r.y=i.clientY);return}if(ut?.mouse){const r=i.clientX-ut.x,s=i.clientY-ut.y;ut.x=i.clientX,ut.y=i.clientY,ut.kind==="click"&&Math.hypot(i.clientX-ut.x0,i.clientY-ut.y0)>5&&(ut.kind="pan"),ut.kind==="pan"&&Be.pan(r,s),ut.kind==="turn"&&(ut.pivot?Be.rotateAround(ut.pivot,-r*.006,-s*.006):(Be.orbit.az-=r*.006,Be.orbit.pol-=s*.006));return}i.pointerType==="mouse"&&B&&(vr.style.cursor=Be.pick(i.clientX,i.clientY)?"pointer":"grab");const e=Gn.get(i.pointerId);if(!e||!ut)return;const t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,ut.kind==="pinch"){if(Gn.size<2)return;const[r,s]=[...Gn.values()],o=Math.hypot(r.x-s.x,r.y-s.y),a=(r.x+s.x)/2,l=(r.y+s.y)/2;Be.following()&&Math.hypot(a-ut.mx0,l-ut.my0)<40?Be.zoomBy(ut.d/Math.max(1,o)):(Be.pan(a-ut.mx,l-ut.my),Be.zoomAt(a,l,ut.d/Math.max(1,o))),ut.d=o,ut.mx=a,ut.my=l;return}if(ut.kind==="tap"&&Math.hypot(i.clientX-ut.x0,i.clientY-ut.y0)>10&&(ut.kind="orbit"),ut.kind==="orbit"){const r=4/window.innerHeight;Be.orbit.az-=t*r,Be.orbit.pol-=n*r,Be.orbit.vaz=-t*r,Be.orbit.vpol=-n*r}});function Hm(i){if(ut?.kind==="plot"){Gn.delete(i.pointerId),Gm(i.type==="pointercancel");return}if(ut?.mouse){const e=ut;ut=null,z.dragging=!1,e.kind==="click"&&i.type!=="pointercancel"&&c0(i.clientX,i.clientY);return}Gn.delete(i.pointerId)&&(ut?.kind==="tap"&&Gn.size===0&&i.type!=="pointercancel"&&c0(i.clientX,i.clientY),Gn.size===0?(ut=null,z.dragging=!1):ut={kind:"orbit"})}vr.addEventListener("pointerup",Hm);vr.addEventListener("pointercancel",i=>{Hm(i),ut=null,z.dragging=!1});const mf=i=>{if(Gn.delete(i.pointerId)){if(ut?.kind==="plot"){Gm(!0);return}Gn.size===0?(ut=null,z.dragging=!1):ut={kind:"orbit"}}};window.addEventListener("pointerup",mf);window.addEventListener("pointercancel",mf);vr.addEventListener("lostpointercapture",mf);const Vm=()=>{Gn.clear(),ut=null,z.dragging=!1,z.plot=null,xa=null};window.addEventListener("blur",Vm);document.addEventListener("visibilitychange",Vm);vr.addEventListener("wheel",i=>{i.preventDefault();const e=i.deltaY*(i.deltaMode===1?16:i.deltaMode===2?window.innerHeight:1);Be.zoomToward(i.clientX,i.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*(i.ctrlKey?.01:.0015)))))},{passive:!1});const Xl=new Set;window.addEventListener("keyup",i=>Xl.delete(i.key.toLowerCase()));window.addEventListener("keydown",i=>{if(i.target.tagName==="INPUT")return;if(i.key==="Escape"){Oe("sheet").hidden?!sn.hidden&&sn.dataset.screen==="pause"?(pi=!1,Zs()):z.sel.size||z.selBody!=null||z.targetShip!=null?(ns(),z.selBody=null):sa():Oe("sheet").hidden=!0,Qn();return}if(!ys())return;const e=i.key.toLowerCase();if("wasdqe".includes(e)||e.startsWith("arrow")||e==="+"||e==="="||e==="-"){Xl.add(e),i.preventDefault();return}if(i.key===" ")i.preventDefault(),Oe("pause").click();else if(i.key>="1"&&i.key<="4"&&St==="solo")Nr=2**(+i.key-1),Qn();else if(e==="h")Oe("sys").click();else if(e==="r")Oe("rnd").click();else if(e==="f"){const t=mi()[0];t?Be.followShip(t.id,!0):z.selBody!=null&&Be.focus(B,z.selBody,!0)}});function l2(i){if(!Xl.size)return;const e=(...n)=>n.some(r=>Xl.has(r)),t=600*i;e("a","arrowleft")&&Be.pan(t,0),e("d","arrowright")&&Be.pan(-t,0),e("w","arrowup")&&Be.pan(0,t),e("s","arrowdown")&&Be.pan(0,-t),e("q")&&(Be.orbit.az+=i*1.2),e("e")&&(Be.orbit.az-=i*1.2),e("+","=")&&Be.zoomBy(Math.exp(-i*1.5)),e("-")&&Be.zoomBy(Math.exp(i*1.5))}let u0=performance.now(),d0=0,f0=0,h0=0,p0=0;function Wm(i){requestAnimationFrame(Wm);const e=Math.min(.1,(i-u0)/1e3);u0=i;const t=i/1e3;if(!B)return;l2(e);const n=pi||ts||!sn.hidden&&St==="solo"&&sn.dataset.screen==="pause";let r=0;if(St==="guest")pi||(B.acc=Math.min(.6,(B.acc||0)+e));else if(!n&&(r=e*(St==="solo"||St==="demo"?Nr:1),!B.over&&(k0(B,r),!Pt||Pt.free)))for(const o of ud)Ag(B,o,r);z.fx=B.fx.splice(0),z.pendingFx&&(z.fx=z.fx.concat(z.pendingFx),z.pendingFx=null),St==="host"&&(Sl.push(...z.fx),i-Qh>250&&(Qh=i,Un.seats.forEach((o,a)=>{a>0&&o.kind==="human"&&o.online&&Un.sendTo(a,{t:"snap",s:N0(B,a),fx:Sl.slice(0,120)})}),Sl=[])),oo()||(Be.orbit.az+=e*.015),z.warp=Nr;const s=Be.render(B,z,r,t);if(jS(),ys()){if(i-f0>900){f0=i,z.paths=new Map;for(const o of mi().slice(0,6))o.order&&o.order.type!=="form"&&o.at===null&&z.paths.set(o.id,mo(B,o,o.order,{maxT:2400,h:2,every:3,coast:o.order.type==="burn"?600:0}).path);for(const o of mi().slice(0,6))!o.order&&o.at===null&&z.paths.set(o.id,mo(B,o,{type:"burn",x:1,y:0,z:0,left:0},{maxT:700,h:3,every:2,coast:660}).path)}if(z.target!=null&&i-h0>3e3&&(h0=i,Im()),zi){const o=zi.state(B,pe);o.done&&iu(o.done==="win",o.why)}!ts&&B.over?iu(B.over.winner===pe,""):!ts&&!B.alive[pe]&&iu(!1,"")}i-d0>220&&(d0=i,Qn()),i-p0>120&&(p0=i,fs.update({burn:oo()?s.burn:0,battle:oo()?s.battle:s.battle*.4,zoom:s.zoom,paused:n}))}wl();Wl();requestAnimationFrame(Wm);
