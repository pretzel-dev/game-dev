var mg=n=>{throw TypeError(n)};var ko=(n,e,t)=>e.has(n)?mg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function gg(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const vg="modulepreload",xg=function(n,e){return new URL(n,e).href},Gf={},yg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),a=c?.nonce||c?.getAttribute("nonce");r=Promise.allSettled(t.map(u=>{if(u=xg(u,i),u in Gf)return;Gf[u]=!0;const l=u.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!i)for(let m=o.length-1;m>=0;m--){const y=o[m];if(y.href===u&&(!l||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":vg,l||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})},yu={pause:"M5.5 3.5v9M10.5 3.5v9",play:"M5 3l8 5-8 5z",close:"M4 4l8 8M12 4l-8 8",menu:"M3 4.5h10M3 8h10M3 11.5h10",back:"M10 3.5L5.5 8l4.5 4.5",system:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",focus:"M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0",sound:"M3 6.5v3h2.5L9 12.5v-9L5.5 6.5zM11 6a3 3 0 0 1 0 4M12.5 4.5a5 5 0 0 1 0 7",mute:"M3 6.5v3h2.5L9 12.5v-9L5.5 6.5zM11.5 6.5l3 3M14.5 6.5l-3 3",hard:"M2.5 4l4 4-4 4M6.5 4l4 4-4 4M10.5 4l4 4-4 4",cruise:"M5.5 4l4 4-4 4",dark:"M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z",sling:"M2.5 12.5c1-5 4-8 7-8a3 3 0 0 1 0 6c-1.5 0-2.5-1-2.5-2.2M11 12l2.5.5.5-2.5",strike:"M2 8h12M10.5 4.5L14 8l-3.5 3.5M5 5.5a3.5 3.5 0 0 0 0 5",match:"M3 5.5h7M3 10.5h7M10 3l3 2.5L10 8M10 8l3 2.5L10 13",torp:"M2.5 8h7.5l3.5-2v4l-3.5-2M2.5 6.5v3M5 8",salvo:"M2 5h6l3-1.5v3L8 5M2 11h6l3-1.5v3L8 11M13.5 5v6",fire:"M8 2v3M8 11v3M2 8h3M11 8h3M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0",evade:"M2.5 11l3-6 3 6 3-6 2 4",cut:"M4.5 4.5h7v7h-7z",plot:"M3 13L13 3M13 3H8.5M13 3v4.5M3 13m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0",retreat:"M12.5 12.5v-5a3.5 3.5 0 0 0-7 0v3M3 8l2.5 2.5L8 8",yard:"M2.5 13.5h11M4 13.5v-8l4-2.5 4 2.5v8M6.5 13.5V9h3v4.5",mine:"M3 13l7.5-7.5M8 3c2.5 0 5 2 5 5M9 4l3 3",refinery:"M8 2.5c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7z",battery:"M3 13h10M5 13V9.5h6V13M8 9.5L12 4",add:"M8 3.5v9M3.5 8h9",lab:"M6 2.5h4M6.5 2.5v4L3 12.5a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6.5v-4M5 10.5h6",exchange:"M2.5 5.5h9M9 3l2.5 2.5L9 8M13.5 10.5h-9M7 8l-2.5 2.5L7 13",industry:"M2.5 13.5v-6l4 2.5v-2.5l4 2.5V4.5h3v9z",intel:"M1.5 8c2-3.5 4.2-5 6.5-5s4.500 1.500 6.500 5c-2 3.500-4.200 5-6.500 5s-4.500-1.500-6.500-5zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",agent:"M2.500 7.500h11M4.500 7.500l1.200-4h4.600l1.200 4M5.500 11m-1.800 0a1.800 1.800 0 1 0 3.600 0a1.800 1.800 0 1 0-3.600 0M10.500 11m-1.800 0a1.800 1.800 0 1 0 3.600 0a1.800 1.800 0 1 0-3.600 0M7.300 11h1.400",star:"M8 2l1.800 3.900 4.200.500-3.100 2.900.800 4.200L8 11.400 4.300 13.500l.800-4.200L2 6.400l4.200-.500z",habitat:"M2.5 13.5h11M3.5 13.5V8a4.5 4.5 0 0 1 9 0v5.5M6.5 13.5v-3h3v3",array:"M8 13.5V9M8 9a5 5 0 0 1-5-5M8 9a5 5 0 0 0 5-5M8 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 13.5h6",depot:"M4 13.5V5.5a4 4 0 0 1 8 0v8zM4 9h8M2.5 13.5h11",up:"M4 10l4-4 4 4",research:"M6 2.5h4M6.5 2.5v4L3 12.5a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6.5v-4M5 10.5h6",drives:"M5 2.5h6l1.5 5h-9zM5.5 9.5L4 13.5M8 9.5v4M10.5 9.5l1.5 4",weapons:"M2.5 8h8M10.5 5.5v5M13.5 6.5v3M5 6v4",sensors:"M8 13.5V9M8 9a5 5 0 0 1-5-5M8 9a5 5 0 0 0 5-5M8 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 13.5h6",contact:"M8 2.5l5.5 5.5L8 13.5 2.5 8z",lost:"M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M5.5 5.5l5 5M10.5 5.5l-5 5",captured:"M4 14V2.5M4 3h8l-2 2.5 2 2.5H4",fuel:"M8 2.5c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7zM6 10.5h4",bolt:"M9 1.5L4 9h3.5L6.5 14.5 12 7H8.5z",freight:"M2.5 5.5h11v6h-11zM6 5.5v6M10 5.5v6",raided:"M2.5 5.5h11v6h-11zM3 13L13 3.5",arrived:"M8 2.5v8M4.5 7L8 10.5 11.5 7M3.5 13.5h9",wrench:"M10.5 2.5a3 3 0 0 0-2.7 4.2L2.5 12l1.5 1.5 5.3-5.3A3 3 0 0 0 13.5 5.5L11.5 7.5 9.5 5.5z",crown:"M2.5 12.5h11M3 12.5L2.5 5l3 3L8 3.5 10.5 8l3-3-.5 7.5",skull:"M8 2.5a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9zM6.2 8m-.9 0a.9.9 0 1 0 1.8 0a.9.9 0 1 0-1.8 0M9.8 8m-.9 0a.9.9 0 1 0 1.8 0a.9.9 0 1 0-1.8 0",credits:"M11.5 4.8A4.5 4.5 0 1 0 11.5 11.2M8 1.5v13",flag:"M4 14V2.5M4 3h8l-2 2.5 2 2.5H4",people:"M5.5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 13c0-2 1.5-3.5 3.5-3.5S9 11 9 13M11 7m-1.6 0a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0-3.2 0M10.5 10c2 0 3.5 1.2 3.5 3",book:"M3 3h4.5a1.5 1.5 0 0 1 1.5 1.5V13a1.5 1.5 0 0 0-1.5-1.5H3zM13 3H8.5M13 3v8.5H9",sun:"M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",check:"M3.5 8.5l3 3 6-7"},Je=(n,e="")=>`<svg class="ic ${e}" viewBox="0 0 16 16" aria-hidden="true"><path d="${yu[n]||yu.contact}"/></svg>`,_g={corvette:"M13 8L4 11.5v-7z",frigate:"M14 8L3 12.5 6 8 3 3.5z",escort:"M14 8L8 12.5 2 8l6-4.5z",battleship:"M15 8l-4 4H2V4h9z",tender:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0",freighter:"M3 5h10v6H3z"},bl=(n,e="currentColor")=>`<svg class="gl" viewBox="0 0 16 16" aria-hidden="true"><path d="${_g[n]||yu.contact}" fill="${e}"/></svg>`,bg=["Aurelion","Seraphine","Caelestis","Vespera","Solenne","Astraeon","Halcyra","Lumeris","Orionde","Celestine","Empyra","Noctara","Stellarin","Zenitha","Aethelis","Borealis Major","Cygnara","Draconis","Elysion","Fulgora","Galathea","Heliara","Ixora","Lyrae","Meridia","Nebulon","Ophira","Polaria","Quasara","Radiantis","Sidera","Thessaly Prime","Uranara","Valenor","Wynthera","Xandria","Ysolde","Zephyra","Aquilon","Brightholm","Corvessa","Dawnmere","Equinoxa","Firmament","Gloriana","Hyperion Tor","Irisca","Kyrios","Luminara","Magellane","Nimbara","Ouranos Minor","Perigee","Radiance","Solstira","Tethra","Umbrielle","Vireon","Aldebara","Betelline","Capellan","Deneba","Etamin","Fomalhara","Hadara","Izarine","Kochaba","Mirzana","Nashira","Pollara","Rigelle","Sadalmel","Talitha","Vegara","Alcyone Deep","Canopea","Mimosa","Aludra","Suhail","Menkara"],Mg=["Selene Minor","Lucen","Nyxa","Astra","Eos","Hesperel","Stilbe","Aglaia","Phaenna","Asteria","Chione","Lampetia","Aether","Hemera","Orphne","Aura","Pleia","Maia Minor","Electra Minor","Merope Minor","Taygete Minor","Sterope","Celaeno Minor","Alcyon","Aphelia","Periel","Syzyn","Nadira","Zenia","Umbra","Penumbra","Crescen","Gibbous","Waxen","Occulta","Transita","Libra Minor","Albedo","Lumen","Nimbus","Corona Minor","Halo","Parhelia","Glimmer","Starling","Morrowlight","Duskmere","Emberlight","Frostlight","Glowworm","Ashlight","Moth","Lantern","Candela","Lux","Ignis","Scintilla","Stella Parva","Vela Minor","Nova Parva","Pulsa","Quark","Photon","Zodia","Ecliptica"],Sg=["Ring One","Anchor","Meridian","Longreach","Holdfast","Keystone","Lantern","Tollgate","Crossways","Beacon Hill","Harbourline","Windlass","Capstan","Stillwater","Gantry Nine","Fairhaven","Moorings","Pinwheel","Carrick Yard","Halfway House","Sentinel","Spindle","Drydock Four","Tether","Outlook","Commonwealth","Linchpin","Caravel","Weigh Station","Portcullis"],wg=["Hollow","Gravel","Anvil","Cairn","Dolmen","Flinders","Grist","Hearth","Kiln","Loam","Menhir","Nugget","Quarry","Rubble","Slag","Tor","Whetstone","Boulder","Clinker","Dregs","Ingot","Lump","Pumice","Scoria","Talus","Tuff","Cobalt","Nickel Jack","Old Iron","Spall","Brickbat","Crag","Scree","Knapp","Hardpan"],Vf={concord:["Resolute","Tenacity","Undaunted","Clemency","Forbearance","Adamant","Candour","Diligence","Endeavour","Fortitude","Gallantry","Vigilant","Warspite","Dauntless","Inflexible","Lionheart","Relentless","Stalwart","Thunderer","Vanguard","Bulwark","Defiance","Invictus","Redoubt","Upholder","Ironside","Stoic","Hearthguard","Paladin","Unbowed","Zealous","Temerity","Valiance","Hardihood"],boreal:["Tramontane","Mistral","Sirocco","Zephyr","Bora","Levanter","Gregale","Khamsin","Harmattan","Squall","Northwind","Monsoon","Whirlwind","Tempest","Hurricane","Williwaw","Chinook","Simoom","Ostro","Libeccio","Etesian","Polar Front","Haboob","Katabatic","Foehn","Pampero","Brickfielder","Shamal","Meltemi","Aurora","Hoarfrost","Graupel","Virga","Derecho"],holds:["Second Wind","Borrowed Time","Long Odds","Last Lamp","Paid in Full","Patchwork","Honest Mistake","Rust and Prayer","Nickel Jack","Slow Dawn","Hard Bargain","Thin Margin","Old Habit","Kindling","Spare Parts","No Refunds","Wick","Tallow","Flint and Steel","Third Shift","Good Enough","Cold Supper","Ask Nicely","Loose Change","Night Soil","Coalscuttle","Tinderbox","Low Tide","Make Do","Stray","Mend and Mind","Short Straw","Lamplighter","Quiet Word"]},ct=-1,Mi=.2,ds=100,z0=5,Vr=18,Ca=8,Ae={startCredits:300,homeIncome:2,income:{planet:.8,giant:1,moon:.4,station:.5,asteroid:.3},load:120,stockCap:400,structures:{yard:{name:"Yard",cost:350,time:60,where:["planet","station"],maxLevel:2},mine:{name:"Mine",cost:200,time:40,where:["planet","moon","asteroid"],rocky:!0,notHome:!0,maxLevel:2,income:1},refinery:{name:"Refinery",cost:300,time:50,where:["planet"],giant:!0,maxLevel:2,income:1.5},battery:{name:"Battery",cost:250,time:45,where:["planet","moon","station","asteroid"],maxLevel:3},habitat:{name:"Habitat",cost:300,time:60,where:["planet","station"],rocky:!0,maxLevel:2},lab:{name:"Lab",cost:300,time:60,where:["planet","moon","station"],rocky:!0,maxLevel:2},exchange:{name:"Exchange",cost:400,time:70,where:["station"],home:!0,garden:!0,maxLevel:2,income:1.5},array:{name:"Sensor array",cost:250,time:45,where:["moon","station","asteroid"],maxLevel:1},depot:{name:"Fuel depot",cost:250,time:45,where:["moon","station","asteroid"],maxLevel:1}},batteryHp:140,batteryRegen:1.5,yield:{asteroid:18,moon:20,station:22,planet:30,giant:36,home:50},refuel:.5,repair:1.5,rearm:4,selfRepair:50,pdcRange:3,railRange:7,railCool:4,torpRange:20,torp:{accel:.4,dv:8,dmg:28,life:150,reload:14,hit:.55},cold:14,ident:60,worldSensor:1.4,board:{freighter:6,warship:20,range:2.4,speed:.5},scrapTime:30,turnaround:20,upkeep:{corvette:.05,frigate:.1,escort:.1,tender:.08,battleship:.35},capBase:4,capMax:12,arraySensor:2.5},Ln={corvette:{name:"Corvette",cost:260,time:50,hull:60,armour:0,accel:.065,dv:26,size:.6,sig:.55,sensor:1.4,rails:[5],pdc:1,tubes:2,mag:4,power:1},frigate:{name:"Frigate",cost:450,time:75,hull:110,armour:2,accel:.05,dv:20,size:.9,sig:1,sensor:1,rails:[9],pdc:2,tubes:4,mag:12,power:2.2},escort:{name:"Escort",cost:420,time:75,hull:100,armour:2,accel:.045,dv:20,size:.9,sig:1,sensor:1.1,rails:[5],pdc:6,tubes:0,mag:0,power:1.8},battleship:{name:"Battleship",cost:1100,time:150,hull:300,armour:8,accel:.035,dv:18,size:1.6,sig:1.5,sensor:1,rails:[16,16],pdc:4,tubes:4,mag:8,power:6,needs:"spinal"},tender:{name:"Tender",cost:320,time:60,hull:90,armour:0,accel:.04,dv:70,size:1.2,sig:1.2,sensor:.8,rails:[],pdc:1,tubes:0,mag:0,power:0,stores:24},freighter:{name:"Freighter",cost:0,time:0,hull:55,armour:0,accel:.03,dv:1e6,size:1.3,sig:1.3,sensor:.5,rails:[],pdc:0,tubes:0,mag:0,power:0,civil:!0}},F0=["corvette","frigate","escort","battleship","tender"],vo={dup:!1,bigShips:!1,holdsMoons:2},Tg=["mine","refinery","yard","lab","habitat","exchange"],ii={concord:{name:"Meridian Concord",short:"Concord",text:"Tough ships. The capital earns more.",hull:1.4,armour:4,cost:1,accel:.95,income:1.8,start:["frigate","escort","corvette"]},boreal:{name:"Boreal Republic",short:"Republic",text:"Fast ships, strong rails. Starts with four ships.",accel:1.2,rail:1.3,hull:1,dv:1.1,start:["frigate","frigate","corvette","corvette"]},holds:{name:"Lantern Holds",short:"Holds",text:"Cheap ships, hard to see. Starts on a station with moons nearby. The capital earns less.",cost:.95,time:.9,sig:.6,hull:.75,cap:1,income:.9,start:["frigate","frigate","corvette"]}},Ra=Object.keys(ii),Qn={drives:{name:"Drives",tiers:[[{key:"nozzles",name:"High-thrust nozzles",text:"+20% thrust."}],[{key:"tanks",name:"Drop tanks",text:"+35% fuel."},{key:"flash",name:"Flash burn",text:"Hard burn has 40% more thrust."}],[{key:"cruise",name:"Efficient cruise",text:"Cruise is 33% faster."}],[{key:"coldjets",name:"Cold thrusters",text:"Dark runs show no drive plume."},{key:"torch",name:"Torch drive",text:"+25% thrust."}],[{key:"fuelnet",name:"Fuel network",text:"Lets you build the Fuel network.",mega:!0}]]},weapons:{name:"Weapons",tiers:[[{key:"guided",name:"Guided slugs",text:"Rails hit 25% more often."}],[{key:"spinal",name:"Spinal mounts",text:"Lets you build battleships."}],[{key:"wolfpack",name:"Wolfpack tubes",text:"Corvettes and frigates carry 50% more torpedoes and reload faster."},{key:"plate",name:"Layered plate",text:"+25% hull."}],[{key:"swarm",name:"Swarm warheads",text:"Point defence stops half as many of your torpedoes."},{key:"flak",name:"Flak curtain",text:"Your point defence is twice as strong."}],[{key:"strike",name:"Strike",text:"Lets you build the strike megaproject.",mega:!0}]]},sensors:{name:"Sensors",tiers:[[{key:"passive",name:"Passive arrays",text:"See coasting ships 40% further away."}],[{key:"coldrun",name:"Cold running",text:"Your ships are 40% harder to see."},{key:"network",name:"Deep-space network",text:"Your worlds see twice as far."}],[{key:"firecon",name:"Fire-control link",text:"Rails reach 25% further."}],[{key:"jammers",name:"Jammers",text:"30% of torpedoes fired at your ships miss."},{key:"longwatch",name:"Long watch",text:"Identify ships 60% further away."}],[{key:"ansible",name:"Ansible array",text:"Lets you build the Ansible array.",mega:!0}]]},industry:{name:"Industry",tiers:[[{key:"fabs",name:"Orbital fabricators",text:"Build 20% faster."}],[{key:"deepmine",name:"Deep mining",text:"Mines earn 50% more."},{key:"bulk",name:"Bulk freight",text:"Freighters are faster and twice as tough."}],[{key:"modular",name:"Modular yards",text:"Ships cost 15% less."}],[{key:"arcology",name:"Arcologies",text:"Habitats give twice as many ships."},{key:"wareco",name:"War economy",text:"Your capital earns twice as much."}],[{key:"spire",name:"Arcology spire",text:"Lets you build the Arcology spire.",mega:!0}]]},intel:{name:"Intelligence",tiers:[[{key:"signals",name:"Signals intercept",text:"Lets you use agents. Shows where enemy ships are going."}],[{key:"sabot",name:"Saboteurs",text:"Agents can turn off a battery or delay a yard."},{key:"rings",name:"Spy rings",text:"Agents can take a third of a world's income."}],[{key:"counter",name:"Counter-intelligence",text:"Catch enemy agents twice as fast."}],[{key:"fifth",name:"Fifth column",text:"Worlds with your agent yield twice as fast."},{key:"cipher",name:"Broken cipher",text:"Identify any enemy ship while its drive burns."}],[{key:"blackout",name:"Blackout",text:"Lets you build Blackout.",mega:!0}]]}},co=Object.keys(Qn),xo=[250,450,750,1200,2e3],_u=[50,80,120,170,260],sc=n=>{for(const e of co)for(const t of Qn[e].tiers)for(const i of t)if(i.key===n)return i;return null},qt=(n,e,t)=>e>=0&&!!n.tech[e].picks[t],un={fuelnet:{name:"Fuel network",cost:8e3,time:200,text:"Ships refuel and rearm at any of your worlds."},strike:{name:"Strike",cost:1e4,time:240,text:"Wrecks the structures of an enemy capital and stops its income.",cooldown:480,flight:160,hp:1600,stun:240,reach:30},ansible:{name:"Ansible array",cost:8e3,time:200,text:"See every ship in the system and where it is going."},spire:{name:"Arcology spire",cost:8e3,time:200,text:"Four more ships, above the usual limit.",crew:4},blackout:{name:"Blackout",cost:8e3,time:200,text:"Hide all your ships for a while.",last:120,cooldown:720},ark:{name:"Ark",cost:15e3,time:480,text:"Hold it until it leaves to win.",hold:480}},O0=Object.keys(un),B0={concord:"Comet tug",boreal:"Long rail",holds:"Moon hammer"},ci=(n,e,t)=>t==="strike"&&e>=0?B0[n.factions[e]]||un.strike.name:un[t].name,fs={seam:{name:"Rich seam",text:"Mines earn double.",kinds:["asteroid","moon"],boost:"mine"},relay:{name:"Old relay",text:"Sees four times as far.",kinds:["asteroid","moon","station"]},deut:{name:"Deuterium sea",text:"Fast refuelling. A refinery earns 50% more.",kinds:["giant"],boost:"refinery"},fortress:{name:"Fortress rock",text:"A battery here is twice as strong.",kinds:["asteroid","moon"],boost:"battery"},archive:{name:"Ancient archive",text:"Research is 30% faster. A lab here counts double.",kinds:["planet","moon"],boost:"lab"},hulk:{name:"Drydock hulk",text:"Has a yard that builds 50% faster. Its ships start with a rank.",kinds:["station","moon"],boost:"yard"},forge:{name:"Tidal forge",text:"Everything builds twice as fast. No labs.",kinds:["moon"],no:["lab"]},garden:{name:"Garden world",text:"Earns 4.8 more a day. A habitat here gives 2 ships a level. Exchanges, no mines.",kinds:["planet"],boost:"habitat",no:["mine"]},listening:{name:"Listening post",text:"Identifies ships far away while their drives burn. A sensor array here sees twice as far again.",kinds:["asteroid","moon","station"],boost:"array"}},Fn={cost:200,travel:45,caught:1/360,opCost:150,opRisk:.3,skim:.33},hs={hard:{name:"Hard burn",a:1,cap:1/0,lat:.03},cruise:{name:"Cruise",a:.7,cap:2,lat:.1},dark:{name:"Dark",a:.5,cap:1.2,lat:.35}};function qi(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Eg=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),Fi=(n,e,t)=>n<e?e:n>t?t:n,kd=(n,e)=>2*Math.PI*Math.sqrt(n*n*n/e),Wf=n=>kd(n,ds),$f=(n,e)=>Math.max(kd(n,e),2*Math.PI*Math.sqrt(n/.012)),Xf={rock:.06,gas:.07},Ag=.5;function Lt(n,e){e.t=n.time,n.events.push(e),n.events.length>240&&n.events.splice(0,60)}function ai(n,e){n.fx.length<400&&n.fx.push(e)}function Oi(n,e,t,i=1){e>=0&&(n.stats[e][t]=(n.stats[e][t]||0)+i)}function ga(n=new Date){const e=n.toISOString().slice(0,10);let t=2166136261;for(const i of e)t=Math.imul(t^i.charCodeAt(0),16777619);return{seed:t>>>0,key:e}}function Ud(n,e){const t=e-(n.node||0);let i,r;if(n.e){let u=t;for(let l=0;l<4;l++)u-=(u-n.e*Math.sin(u)-t)/(1-n.e*Math.cos(u));i=(Math.cos(u)-n.e)*n.r,r=Math.sqrt(1-n.e*n.e)*Math.sin(u)*n.r}else i=Math.cos(t)*n.r,r=Math.sin(t)*n.r;const s=Math.cos(n.node||0),o=Math.sin(n.node||0),c=Math.cos(n.incl),a=Math.sin(n.incl);return{x:i*s-r*o*c,y:r*a,z:i*o+r*s*c}}function sn(n,e,t){const i=Ud(e,e.phase+2*Math.PI*t/e.period);if(e.parent!==null){const r=sn(n,n.bodies[e.parent],t);i.x+=r.x,i.y+=r.y,i.z+=r.z}return i}function yo(n,e,t){const r=sn(n,e,t-.5),s=sn(n,e,t+.5);return{x:(s.x-r.x)/(2*.5),y:(s.y-r.y)/(2*.5),z:(s.z-r.z)/(2*.5)}}const Cg=()=>({x:0,y:0,z:0}),vr=n=>n.size*1.8+.5,H0=n=>n.gm?Math.sqrt(n.gm/vr(n))/vr(n):.1;function bs({seed:n=Date.now(),players:e=[{faction:"concord"},{faction:"boreal",ai:"normal"}],mp:t=!1,empty:i=!1,conquest:r=!1,winBy:s=null}={}){s=s||(r?"conquest":"capital"),r=s==="conquest";const o=qi(n),c=e.length,a=(C,I)=>{const O=C.filter(oe=>!I.has(oe)),$=O[Math.floor(o()*O.length)]??`${C[0]} ${I.size}`;return I.add($),$},u=C=>{for(let I=C.length-1;I>0;I--){const O=Math.floor(o()*(I+1));[C[I],C[O]]=[C[O],C[I]]}return C},l=new Set,h=[],d=C=>(C.id=h.length,C.owner=ct,C.structures=[],C.queue=[],C.stock=0,C.bhp=0,C.yt=0,C.yo=ct,C.node=C.id*2.39996%(Math.PI*2),h.push(C),C),f=e.map(C=>C.faction||"concord"),m=f.map((C,I)=>C==="holds"?I:-1).filter(C=>C>=0),y=f.map((C,I)=>C!=="holds"?I:-1).filter(C=>C>=0),x=Math.max(2,Math.min(4,y.length+1+Math.floor(o()*2))),p=Math.max(m.length,1+Math.floor(o()*2)),g=o()<.3,b=[],v=(C,I)=>Array.from({length:I},(O,$)=>({r:C*4+9+$*10+o()*2,size:.5+o()*.5})),M=u(Array.from({length:x-1},(C,I)=>I+1));for(let C=0;C<x;C++){const I=M.indexOf(C),O=I>=0&&I<y.length?y[I]:ct,$=C===0?1.2+o()*.6:1.7+o()*.9;b.push({owner:O,giant:!1,size:$,moons:v($,O!==ct?1:C===0?0:Math.floor(o()*2)),station:!1,e:C===0?.12+o()*.08:.02+o()*.07,incl:(o()-.5)*(C===0?.1:.04)})}for(let C=0;C<p;C++){const I=C<m.length?m[C]:ct,O=g&&C===0,$=O?5.2:3.4+o()*1.2;b.push({owner:I,giant:!0,size:$,moons:v($,I!==ct&&vo.holdsMoons?vo.holdsMoons+(o()*0|0):O?4:2+Math.floor(o()*2)),station:I!==ct,stationHome:I!==ct,e:.02+o()*.04,incl:(o()-.5)*.04})}if(o()<.4){const C=1.2+o()*.5;b.push({owner:ct,giant:!1,size:C,moons:v(C,Math.floor(o()*2)),station:!1,e:.14+o()*.1,incl:(o()-.5)*.14,dwarf:!0})}const S=u(b.filter(C=>C.owner===ct&&!C.dwarf)).slice(0,1+Math.floor(o()*2));for(const C of S)C.station=!0;for(const C of b)C.stationR=C.size*3+3,C.reach=Math.max(C.size*1.6,C.station?C.stationR+1:0,...C.moons.map(I=>I.r+I.size));let A=null,_=0;const E=(8+o()*12)*3;b.forEach((C,I)=>{A?I===x?(_=A.r*(1.25+o()*.15),C.r=(_+E)*(1.25+o()*.15)):C.r=Math.max(A.r*((C.giant?1.45:C.dwarf?1.35:1.38)+o()*.25),A.r+A.reach+C.reach+20):C.r=(28+o()*6)*z0,A=C}),b[b.length-1].dwarf&&b[b.length-1].r>1900&&b.pop();for(const C of b){C.gm=Xf[C.giant?"gas":"rock"]*C.size**3;const I=Math.max(0,...C.moons.map(O=>O.r),C.station?C.stationR:0);I&&(C.gm=Math.max(C.gm,3*ds*(I/(Ag*C.r))**3))}const P=[];for(const C of b){const I=d({kind:"planet",name:a(bg,l),parent:null,r:C.r,e:C.e,period:Wf(C.r),phase:o()*Math.PI*2,incl:C.incl,size:C.size,baseSize:C.size,giant:C.giant,gm:C.gm,hue:o()});C.owner!==ct&&!C.stationHome&&(P[C.owner]={body:I,planet:I},I.biome=f[C.owner]==="boreal"?"desert":o()<.5?"temperate":"ocean");for(const O of C.moons)d({kind:"moon",name:a(Mg,l),parent:I.id,r:O.r,period:$f(O.r,C.gm),phase:o()*Math.PI*2,incl:(o()-.5)*.25,size:O.size,baseSize:O.size,gm:Xf.rock*O.size**3,hue:o()});if(C.station){const O=d({kind:"station",name:a(Sg,l),parent:I.id,r:C.stationR,period:$f(C.stationR,C.gm),phase:o()*Math.PI*2,incl:.2,size:C.stationHome?1.8:.45,baseSize:.45,hue:0});C.stationHome&&(P[C.owner]={body:O,planet:I})}}const L=3+Math.floor(o()*4);for(let C=0;C<L;C++){const I=_+o()*E,O=.5+o()*.4;d({kind:"asteroid",name:a(wg,l),parent:null,r:I,e:o()*.05,period:Wf(I),phase:C/L*Math.PI*2+o()*.8,incl:(o()-.5)*.06,size:O,baseSize:O,gm:.04*O**3,hue:o()})}const D={seed:n,mp:t,conquest:r,winBy:s,megaDone:{},strikes:[],time:0,acc:0,players:c,bodies:h,ships:[],torps:[],events:[],fx:[],nextId:1,stars:[{r:0,period:1,phase:0,size:Vr/6,gm:ds}],belt:{r:_,w:E},factions:f,names:e.map((C,I)=>C.name||ii[C.faction||"concord"].short||`Player ${I+1}`),credits:e.map(()=>Ae.startCredits),tech:e.map(()=>({drives:0,weapons:0,sensors:0,industry:0,intel:0,picks:{},project:null})),agents:[],blackout:e.map(()=>({until:0,ready:0})),strikeReady:e.map(()=>0),alive:e.map(()=>!0),eco:e.map(()=>1),stats:e.map(()=>({built:0,lost:0,killed:0,captured:0,worldsLost:0,hauled:0,raided:0,earned:0})),over:null,usedNames:[]},H=o()*Math.PI*2;P.forEach((C,I)=>{const O=C.body;if(C.planet.phase=H+I*Math.PI*2/c,O.owner=I,O.home=!0,O.structures.push({type:"yard",level:1,left:0},{type:"battery",level:2,left:0}),O.bhp=Xn(O),!i)for(const $ of ii[D.factions[I]].start)Jt(D,I,$,O)});for(const C of h){if(C.owner!==ct)continue;(C.kind==="planet"?C.giant?!0:o()<.5:C.kind==="station"?o()<.5:!1)&&(C.structures.push({type:"battery",level:1,left:0}),C.bhp=Xn(C))}{const C=P.find($=>$&&$.body.kind==="planet"&&$.body.biome!=="desert"),I=P.find($=>$&&$.body.kind==="planet"),O=C?C.planet.r:I?I.planet.r/1.3:250;for(const $ of h)$.kind==="planet"&&($.zone=$.r<O*.7?"hot":$.r>O*1.6?"cold":"mild")}for(const C of u(Object.keys(fs))){const I=fs[C],O=h.filter(oe=>oe.owner===ct&&!oe.trait&&I.kinds.includes(oe.giant?"giant":oe.kind)&&!(oe.kind==="planet"&&!oe.giant&&I.kinds.includes("giant")&&!I.kinds.includes("planet"))&&(C!=="forge"&&C!=="deut"||oe.giant||oe.parent!==null&&h[oe.parent].giant));if(!O.length)continue;const $=O[Math.floor(o()*O.length)];$.trait=C,C==="garden"&&($.biome=$.zone==="hot"?"jungle":$.zone==="cold"?"ice":"temperate"),C==="fortress"&&!Ai($,"battery")&&$.structures.push({type:"battery",level:1,left:0}),C==="fortress"&&($.bhp=Xn($)),C==="hulk"&&$.structures.push({type:"yard",level:1,left:0})}return Qd(D),D}const Wr=n=>n.left<=0&&!n.scrap,Ai=(n,e,t=null)=>t!=null&&n.structures[t]&&n.structures[t].type===e?n.structures[t]:n.structures.find(i=>i.type===e),ki=(n,e)=>n.structures.some(t=>t.type===e&&Wr(t)),Bi=(n,e)=>{let t=0;for(const i of n.structures)i.type===e&&Wr(i)&&(t+=i.level);return t},Nl=(n,e=null)=>Ae.worldSensor*(Bi(n,"array")?Ae.arraySensor:1)*(n.trait==="relay"?4:1)*(n.trait==="listening"&&Bi(n,"array")?2:1)*(e&&qt(e,n.owner,"network")?2:1),Xn=n=>Ae.batteryHp*Bi(n,"battery")*(n.trait==="fortress"?2:1)*(n.home?2:1),Pa=n=>Bi(n,"battery")?Bi(n,"battery")+(n.home?1:0):0,Nd=10,zd=3,_o=(n,e,t)=>(qt(n,e,"fabs")?1.2:1)*(t&&t.trait==="forge"?2:1),oc=(n,e)=>(1+.5*n.bodies.reduce((t,i)=>t+(i.owner===e?Bi(i,"lab")*(i.trait==="archive"?2:1):0),0))*(n.bodies.some(t=>t.owner===e&&t.trait==="archive")?1.3:1);function Fd(n){return n.home?5:n.kind==="planet"?3:n.kind==="station"||n.kind==="moon"?2:1}const G0=n=>n.home?"home":n.giant?"giant":n.kind;function $r(n,e=null){const t=n.owner,i=s=>!!e&&qt(e,t,s);return(n.home?Ae.homeIncome*(t>=0&&e&&ii[e.factions[t]].income||1)*(i("wareco")?2:1):Ae.income[n.giant?"giant":n.kind]+(n.trait==="garden"?.6:0))+Bi(n,"mine")*Ae.structures.mine.income*(n.trait==="seam"?2:1)*(i("deepmine")?1.5:1)+Bi(n,"refinery")*Ae.structures.refinery.income*(n.trait==="deut"?1.5:1)+Bi(n,"exchange")*Ae.structures.exchange.income}function ac(n,e){const t=n.homes[e.owner];if(!t||e.home||e===t)return 1;const i=sn(n,e,n.time),r=sn(n,t,n.time);return 1+Math.min(1,Math.hypot(i.x-r.x,i.y-r.y,i.z-r.z)/1200)}const Od=(n,e)=>n.ships.reduce((t,i)=>t+(i.owner===e&&Ae.upkeep[i.cls]||0),0);function lc(n,e){const t=n.bodies.filter(s=>s.owner===e).map(s=>({body:s.id,rate:$r(s,n)*ac(n,s)*(q0(n,s)?1-Fn.skim:1),how:s.blockaded?"blockaded":s.home?"capital":"freight"})),i=t.reduce((s,o)=>s+(o.how==="blockaded"?0:o.rate),0)*(n.eco[e]||1),r=Od(n,e);return{lines:t,gross:i,upkeep:r,total:i-r}}const Rg=(n,e)=>n.homes[e],is=(n,e)=>n.bodies.filter(t=>t.owner===e),cc=(n,e)=>n.ships.filter(t=>t.owner===e&&!Ln[t.cls].civil);function La(n,e){const t=ii[n.factions[e]];return Math.min(Ae.capMax,Ae.capBase+(t.cap||0)+is(n,e).reduce((i,r)=>i+Bi(r,"habitat")*(r.trait==="garden"?2:1)*(qt(n,e,"arcology")?2:1),0))+(rr(n,e,"spire")?un.spire.crew:0)}const Xr=n=>vo.bigShips&&n==="battleship"?2:1,Da=(n,e)=>cc(n,e).reduce((t,i)=>t+Xr(i.cls),0)+n.bodies.reduce((t,i)=>t+(i.owner===e?i.queue.reduce((r,s)=>r+Xr(s.cls),0):0),0),qr=(n,e,t)=>Math.round(Ln[t].cost*(ii[n.factions[e]].cost||1)*(qt(n,e,"modular")?.85:1)/10)*10,Bd=(n,e,t,i=null)=>Ln[t].time*(ii[n.factions[e]].time||1)/((i&&i.structures.some(r=>r.type==="yard"&&Wr(r)&&r.level>=2)?1.5:1)*(i&&i.trait==="hulk"?1.5:1)*_o(n,e,i)),zl=n=>vo.dup?Math.max(1,n.structures.filter(e=>e.type==="yard"&&Wr(e)).length):1;function Ji(n,e,t){const i=Ae.structures[t];return i?!i.where.includes(e.kind)&&!(i.home&&e.home)&&!(i.garden&&e.trait==="garden")||i.notHome&&e.home||e.trait&&(fs[e.trait].no||[]).includes(t)?"Not here":i.giant&&!e.giant?"Gas giants only":i.rocky&&e.giant?"Not on a gas giant":Ai(e,t)&&!(vo.dup&&Tg.includes(t))?"Already built":e.structures.length>=Fd(e)?"No room":n.credits[e.owner]<i.cost?"Not enough credits":null:"Unknown"}function Dr(n,e,t){if(Ji(n,e,t))return!1;const i=Ae.structures[t];n.credits[e.owner]-=i.cost;const r=i.time/_o(n,e.owner,e);return e.structures.push({type:t,level:1,left:r,total:r}),!0}const uc=n=>Math.round((Ae.structures[n.type].cost+(n.level-1)*Ro(n))*.4/10)*10;function dc(n,e,t,i=null){const r=Ai(e,t,i);return r?e.blockaded?"Under blockade":r.scrap?"Being removed":null:"Not built"}function V0(n,e,t,i=null){if(dc(n,e,t,i))return!1;const r=Ai(e,t,i);if(t==="yard"&&!e.structures.some(s=>s!==r&&s.type==="yard"&&!s.scrap))for(;e.queue.length;)Gd(n,e);return r.left>0&&!r.next?(n.credits[e.owner]+=Ae.structures[t].cost,e.structures=e.structures.filter(s=>s!==r),!0):(r.next&&(delete r.next,r.left=0),r.scrap=Ae.scrapTime,t==="battery"&&(e.bhp=0),!0)}const Ro=n=>Math.round(Ae.structures[n.type].cost*.8);function os(n,e,t){const i=Ae.structures[t.type];return Wr(t)?t.level>=i.maxLevel?"Fully upgraded":n.credits[e.owner]<Ro(t)?"Not enough credits":null:"Still building"}function ia(n,e,t){return os(n,e,t)?!1:(n.credits[e.owner]-=Ro(t),t.left=t.total=Ae.structures[t.type].time/_o(n,e.owner,e),t.next=!0,!0)}function Ia(n,e,t){const i=Ln[t];return!i||i.civil?"Unknown":ki(e,"yard")?i.needs&&!qt(n,e.owner,i.needs)?`Needs ${sc(i.needs).name}`:Da(n,e.owner)+Xr(t)>La(n,e.owner)?"Fleet at its limit":n.credits[e.owner]<qr(n,e.owner,t)?"Not enough credits":null:"Needs a yard"}function Hd(n,e,t){if(Ia(n,e,t))return!1;n.credits[e.owner]-=qr(n,e.owner,t);const i=Bd(n,e.owner,t,e);return e.queue.push({cls:t,left:i,total:i}),!0}function Gd(n,e,t=e.queue.length-1){const i=e.queue[t];return i?(n.credits[e.owner]+=Math.round(qr(n,e.owner,i.cls)*.8),e.queue.splice(t,1),!0):!1}function Po(n,e,t,i){const r=Qn[t],s=n.tech[e];return r?s.project?"Already researching":s[t]>=r.tiers.length?"Complete":r.tiers[s[t]].some(o=>o.key===i)?n.credits[e]<xo[s[t]]?"Not enough credits":null:"Not yet":"Unknown"}function Vd(n,e,t,i){if(Po(n,e,t,i))return!1;const r=n.tech[e][t];return n.credits[e]-=xo[r],n.tech[e].project={line:t,key:i,left:_u[r],total:_u[r]},!0}const W0=(n,e)=>qt(n,e,"signals")?1+n.tech[e].intel:0,ka=(n,e,t)=>n.agents.find(i=>i.owner===e&&i.body===t.id)||null,Ua=(n,e,t)=>{const i=ka(n,e,t);return i&&i.at<=n.time?i:null};function bo(n,e,t){return qt(n,e,"signals")?t.owner===e?"Your own world":ka(n,e,t)?"Already there":n.agents.filter(i=>i.owner===e).length>=W0(n,e)?"No agents free":n.credits[e]<Fn.cost?"Not enough credits":null:"Needs Signals intercept"}function Fl(n,e,t){return bo(n,e,t)?!1:(n.credits[e]-=Fn.cost,n.agents.push({owner:e,body:t.id,at:n.time+Fn.travel,op:"watch",cool:0}),!0)}function $0(n,e,t){const i=n.agents.length;return n.agents=n.agents.filter(r=>!(r.owner===e&&r.body===t.id)),n.agents.length<i}function Wd(n,e,t,i){const r=Ua(n,e,t);return!r||t.owner===ct||i==="steal"&&!qt(n,e,"rings")||i==="incite"&&!qt(n,e,"fifth")||!["watch","steal","incite"].includes(i)?!1:(r.op=i,!0)}function Mo(n,e,t,i){const r=Ua(n,e,t);return r?qt(n,e,"sabot")?r.cool>n.time?"Lying low":(i==="battery"?t.bhp<=0:!t.queue.length)?"Nothing to hit":n.credits[e]<Fn.opCost?"Not enough credits":null:"Needs Saboteurs":"No agent in place"}function $d(n,e,t,i){if(Mo(n,e,t,i))return!1;const r=Ua(n,e,t);return n.credits[e]-=Fn.opCost,r.cool=n.time+120,i==="battery"?(t.bhp=0,t.bquiet=n.time+90):t.queue[0].left+=60,Lt(n,{type:"sabotage",owner:t.owner,by:e,at:t.id,what:i}),n.rand()<Fn.opRisk*(qt(n,t.owner,"counter")?2:1)&&X0(n,r,t),!0}const kr=(n,e)=>Math.round((300+$r(e,n)*260+(e.trait?250:0)+Xn(e)*1.5)/10)*10;function Na(n,e,t){return t.owner!==ct?"Not independent":Ua(n,e,t)?n.ships.some(i=>i.at===t.id&&i.owner!==e&&Yr(i))?"Another fleet holds the orbit":n.credits[e]<kr(n,t)?"Not enough credits":null:"No agent in place"}function Xd(n,e,t){if(Na(n,e,t))return!1;n.credits[e]-=kr(n,t);const i=t.bhp;return Jd(n,t,e),t.bhp=i,n.agents=n.agents.filter(r=>r.body!==t.id||r.owner!==e),Lt(n,{type:"bought",owner:e,at:t.id}),!0}function X0(n,e,t){n.agents=n.agents.filter(i=>i!==e),Lt(n,{type:"agentCaught",owner:e.owner,by:t.owner,at:t.id})}function Pg(n,e){for(const t of n.agents.slice()){const i=n.bodies[t.body];if(!n.alive[t.owner]||i.owner===t.owner){n.agents=n.agents.filter(s=>s!==t);continue}if(t.at>n.time)continue;if(i.owner===ct){t.op="watch";continue}const r=Fn.caught*(t.op==="watch"?1:2)*(qt(n,i.owner,"counter")?2:1)*(i.trait==="listening"?3:1);n.rand()<r*e&&X0(n,t,i)}}const Lg=(n,e,t)=>{const i=Ua(n,e,t);return!!i&&i.op==="incite"},q0=(n,e)=>n.agents.find(t=>t.body===e.id&&t.op==="steal"&&t.at<=n.time&&t.owner!==e.owner)||null;function qd(n,e){const t=e.reduce((r,s)=>r+s.st.size*(1+.3*Ci(s)),0),i=n.st.size*(1+.3*Ci(n))*(.3+.7*Math.max(0,n.hull/n.st.hull))*(as(n)||n.out.weapons>0?.5:1);return Fi(t/(t+i)-.25,.05,.85)}const Ci=n=>(n.xp||0)>=40?3:(n.xp||0)>=18?2:(n.xp||0)>=6?1:0;function Y0(n,e,t){const i=Ci(e);e.xp=(e.xp||0)+t,Ci(e)>i&&Lt(n,{type:"promoted",owner:e.owner,ship:e.id,rank:Ci(e)})}function Kr(n,e,t){const i=Ln[t],r=e>=0?ii[n.factions[e]]:{},s=a=>qt(n,e,a),o=!i.civil&&i.power>0,c=t==="corvette"||t==="frigate";return{hull:Math.round(i.hull*(r.hull||1)*(o&&s("plate")?1.25:1)*(i.civil&&s("bulk")?2:1)),armour:i.armour+(o&&r.armour||0),accel:i.accel*(r.accel||1)*(s("nozzles")?1.2:1)*(s("torch")?1.25:1)*(i.civil&&s("bulk")?1.5:1),flash:s("flash")?1.4:1,cruise:s("cruise")?1.33:1,coldDark:s("coldjets"),dv:i.dv*(r.dv||1)*(s("tanks")?1.35:1),size:i.size,sig:i.sig*(r.sig||1)*(s("coldrun")?.6:1),cold:Ae.cold*i.sensor*(s("passive")?1.4:1),ident:Ae.ident*i.sensor*(s("longwatch")?1.6:1),rails:i.rails.map(a=>a*(r.rail||1)),railHit:s("guided")?1.25:1,railRange:Ae.railRange*(s("firecon")?1.25:1),pdc:i.pdc,flak:s("flak")?2:1,tubes:i.tubes,mag:Math.round(i.mag*(c&&s("wolfpack")?1.5:1)),reload:c&&s("wolfpack")?.7:1,swarm:s("swarm"),jam:s("jammers"),power:i.power,stores:i.stores||0,civil:!!i.civil}}function Dg(n,e){for(const t of n.ships)t.owner===e&&(t.st=Kr(n,e,t.cls))}function K0(n,e){const t=Vf[n.factions[e]]||Vf.concord,i=t.filter(s=>!n.usedNames.includes(s)),r=i.length?i[(n.nextId*7+n.usedNames.length*3)%i.length]:`${t[n.nextId%t.length]} ${n.nextId}`;return n.usedNames.push(r),r}function Jt(n,e,t,i,r={}){const s=Kr(n,e,t),o={id:n.nextId++,owner:e,cls:t,name:s.civil?"Freighter":K0(n,e),x:0,y:0,z:0,vx:0,vy:0,vz:0,tx:0,ty:0,tz:0,burn:0,lit:0,at:i?i.id:null,ph:n.nextId*2.39996%(Math.PI*2),hull:s.hull,out:{drive:0,reactor:0,weapons:0,sensors:0},dv:s.dv,torps:s.mag,stores:s.stores,order:null,grp:0,torpsFree:!0,fireFree:!0,evade:!1,cd:s.rails.map(()=>0),tcd:0,seen:Array(n.players).fill(0),kills:0,phase:"orbit",board:0,boardBy:ct,st:s,...r};return i&&j0(n,o,n.time),n.ships.push(o),o}function Z0(n){const e=s=>{const o=Math.sin(n.id*12.9898+s*78.233)*43758.5453;return o-Math.floor(o)},t=1+e(1)*.3,i=(e(2)-.5)*.9,r=e(3)*Math.PI*2;return{k:t,ux:Math.cos(r),uz:Math.sin(r),vx:-Math.sin(r)*Math.cos(i),vy:Math.sin(i),vz:Math.cos(r)*Math.cos(i)}}function j0(n,e,t){const i=n.bodies[e.at],{k:r,ux:s,uz:o,vx:c,vy:a,vz:u}=Z0(e),l=sn(n,i,t),h=yo(n,i,t),d=vr(i)*r,f=H0(i)/r**1.5,m=Math.cos(e.ph),y=Math.sin(e.ph);e.x=l.x+(m*s+y*c)*d,e.y=l.y+y*a*d,e.z=l.z+(m*o+y*u)*d,e.vx=h.x+(-y*s+m*c)*d*f,e.vy=h.y+m*a*d*f,e.vz=h.z+(-y*o+m*u)*d*f}const Dt=(n,e)=>n.ships.find(t=>t.id===e),as=n=>n.out.drive>0||n.out.reactor>0||n.dv<=0,Yr=n=>n.st.power>0&&n.out.reactor<=0,J0=(n,e,t)=>n.ships.filter(i=>i.at===e.id&&(t===void 0||i.owner===t)),ro=n=>n.out.reactor>0?0:n.st.power*(.4+.6*(n.hull/n.st.hull))*(n.out.weapons>0?.3:1);function Q0(n,e,t,i){e.order=t,e.grp=i,e.tau=0,e.coast=!1,e.inSoi=!1,e.term=!1,e.av=0,e.at!==null&&t&&(e.depart=ps(n,n.bodies[e.at]).id,e.at=null)}function fn(n,e,t,i){const r=n.ships.filter(d=>t.includes(d.id)&&d.owner===e&&!d.st.civil);if(!r.length||i&&i.type==="orbit"&&!n.bodies[i.body]||i&&i.type==="attack"&&!Dt(n,i.ship))return!1;const s=n.nextId++,o=hs[i&&i.profile||"cruise"],c=Math.min(...r.map(d=>d.st.accel*o.a*(i&&i.profile==="hard"?d.st.flash:1))),a=(d,f,m=s)=>{if(d.at!==null&&f&&n.time<(d.ready||0)){d.pending={o:f,g:m};return}d.pending=null,Q0(n,d,f,m)},u=i&&i.shape==="column",l=(d,f=!1)=>{const m=Math.floor(d/2)+1,y=u?{side:0,back:(d+1)*1.4}:{side:(d%2?1:-1)*m*1.3,back:m*.9};return f&&(y.back=-y.back),y};for(const d of r){const f=n.ships.filter(x=>x.order&&x.order.type==="form"&&x.order.lead===d.id&&!r.includes(x));if(!f.length)continue;const m=f.reduce((x,p)=>p.st.accel<x.st.accel?p:x),y=m.order;m.order=d.order&&d.order.type!=="form"?{...d.order}:d.order?{...d.order}:y.then?{...y.then}:null,m.tau=0,m.coast=!1,m.term=!1;for(const x of f)x!==m&&(x.order.lead=m.id)}const h=(d,f)=>f.st.pdc-d.st.pdc||d.id-f.id;if(i&&i.type==="form"){const d=Dt(n,i.lead);if(!d||d.owner!==e)return!1;const f=n.ships.filter(m=>m.order&&m.order.type==="form"&&m.order.lead===d.id&&!r.includes(m)).length;return r.filter(m=>m!==d).sort(h).forEach((m,y)=>a(m,{type:"form",lead:d.id,profile:"hard",...l(f+y)},d.grp)),!0}if(i&&!i.loose&&r.length>1&&i.type!=="burn"){const d=r.reduce((f,m)=>m.st.accel<f.st.accel?m:f);return a(d,{...i,amax:c*.85}),r.filter(f=>f!==d).sort(h).forEach((f,m)=>a(f,{type:"form",lead:d.id,profile:"hard",then:{...i,amax:c},...l(m,!d.st.power)})),!0}for(const d of r)a(d,i?{...i,amax:i.loose?void 0:c}:null);return!0}function ep(n,e,t,i){for(const r of n.ships)!t.includes(r.id)||r.owner!==e||("torpsFree"in i&&(r.torpsFree=!!i.torpsFree),"fireFree"in i&&(r.fireFree=!!i.fireFree),"evade"in i&&(r.evade=!!i.evade),"shape"in i&&(r.shape=["wedge","column","loose"].includes(i.shape)?i.shape:"wedge"));return!0}function bu(n,e,t,i){let r=!1;for(const s of n.ships)!t.includes(s.id)||s.owner!==e||Su(n,s,i)&&(r=!0);return r}function Ig(n,e,t){for(const i of n.ships)!t.includes(i.id)||i.owner!==e||i.st.civil||(i.dead=!0,Lt(n,{type:"scuttled",owner:e,ship:i.id,name:i.name}));return n.ships=n.ships.filter(i=>!i.dead),!0}const ps=(n,e)=>e.parent===null?e:n.bodies[e.parent];function Yd(n,e){const t=[{x:0,y:0,z:0,gm:ds,soft:Vr*1.5,clear:Vr*2.8,id:-1}];for(const i of n.planets){const r=sn(n,i,e);t.push({x:r.x,y:r.y,z:r.z,gm:i.gm,soft:i.size*1.3,clear:i.size*1.25+.6,hollow:i.size*1.6+1,size:i.size,id:i.id})}for(const i of n.moons){const r=sn(n,i,e);t.push({x:r.x,y:r.y,z:r.z,gm:0,soft:1,clear:i.size*1.3+.5,hollow:0,size:i.size,id:i.id})}return t}function kg(n){n.planets=n.bodies.filter(e=>e.kind==="planet"),n.moons=n.bodies.filter(e=>e.kind==="moon"),n.blockers=n.bodies.filter(e=>e.kind==="planet"||e.kind==="moon")}function Ug(n,e,t,i,r,s){const o=Math.max(0,e);if(!s)return n/Math.max(.4,o+.5*t*Math.min(30,n/Math.max(o,.4)));let c=Math.sqrt((2*t*i*n+i*o*o)/(t+i));if(r<c&&(c=r),o>=c)return Math.max(0,n-o*o/(2*i))/Math.max(o,.05)+o/i;const a=(c*c-o*o)/(2*t),u=c*c/(2*i);return(c-o)/t+c/i+Math.max(0,n-a-u)/Math.max(c,.05)}function tp(n,e,t,i,r){e.tx=e.ty=e.tz=0;const s=e.order;if(e.out.drive>0||e.out.reactor>0||e.dv<=0){e.phase="adrift";return}if(!s){e.phase="coast";return}const o=e.st;if(s.type==="burn"){if(s.left<=0){e.order=null,e.phase="coast";return}const ue=o.accel*o.flash;e.tx=s.x*ue,e.ty=s.y*ue,e.tz=s.z*ue,e.phase="burn";return}const c=hs[s.profile]||hs.cruise,a=Math.min(s.amax||1,o.accel*c.a*(s.profile==="hard"?o.flash:1)),u=.7*a;let l=c.cap*(s.profile==="cruise"&&o.cruise||1),h=!0,d=0,f=-2,m=e.tau>0?e.tau:0,y,x,p=null;const g=ue=>{const _e=ps(n,ue),Ye=i.find(xt=>xt.id===_e.id),pt=Ye?{x:Ye.x,y:Ye.y,z:Ye.z}:sn(n,_e,t),et=yo(n,_e,t);if(_e===ue){y=pt,x=et;return}const We=sn(n,ue,t);if(!e.term&&(m<30||Math.hypot(We.x-e.x,We.y-e.y,We.z-e.z)<20)&&(e.term=!0),e.term){y=We,x=yo(n,ue,t);return}const dt=sn(n,ue,t+m),Xe=sn(n,_e,t+m);y={x:pt.x+dt.x-Xe.x,y:pt.y+dt.y-Xe.y,z:pt.z+dt.z-Xe.z},x=et},b=(ue,_e)=>{const Ye=y.x-e.x,pt=y.z-e.z,et=Math.hypot(Ye,pt)||1;y={x:y.x+-pt/et*ue*_e,y:y.y,z:y.z+Ye/et*ue*_e}};if(s.type==="orbit"&&s.via!=null&&!s.done){const ue=n.bodies[s.via],_e=i.find(pt=>pt.id===ue.id);if(Math.hypot(_e.x-e.x,_e.y-e.y,_e.z-e.z)<ue.size*4.5){e.inSoi=!0,e.phase="coast";return}if(e.inSoi)return s.done=!0,e.inSoi=!1,e.tau=0,e.coast=!1,e.term=!1,tp(n,e,t,i,r);g(ue),b(ue.size*1.7+.8,s.side),h=!1,f=ue.id,l===1/0&&(l=1e9)}else if(s.type==="orbit"||s.type==="strike"){const ue=n.bodies[s.body];if(!m){const _e=sn(n,ue,t);m=Math.hypot(_e.x-e.x,_e.y-e.y,_e.z-e.z)/1.2+5}g(ue),f=ue.id,s.type==="orbit"?d=vr(ue):(h=!1,b(vr(ue)+2,1),l===1/0&&(l=1e9))}else if(s.type==="attack"){const ue=r(s.ship);if(!ue){e.order=null,e.phase="coast";return}if(ue.owner!==e.owner&&!ue.seen[e.owner]){s.blind=(s.blind||0)+1,s.blind>150&&(e.order=null),e.phase="coast";return}s.blind=0,y={x:ue.x,y:ue.y,z:ue.z},x={x:ue.vx,y:ue.vy,z:ue.vz},s.mode==="pass"?(h=!1,l===1/0&&(l=1e9)):(d=s.mode==="board"?1.2:s.d0||3,ue.at===null&&(p=ue))}else if(s.type==="form"){const ue=r(s.lead);if(!ue||ue.owner!==e.owner){e.order=s.then||null,e.tau=0,e.phase="coast";return}const _e=Math.hypot(ue.vx,ue.vz)||1,Ye=ue.vx/_e,pt=ue.vz/_e;y={x:ue.x-pt*s.side-Ye*s.back,y:ue.y,z:ue.z+Ye*s.side-pt*s.back},x={x:ue.vx,y:ue.vy,z:ue.vz},ue.at===null&&(p=ue),l===1/0&&(l=1e9)}else{e.order=null;return}let v=y.x-e.x,M=y.y-e.y,S=y.z-e.z;const A=e.vx-x.x,_=e.vy-x.y,E=e.vz-x.z,P=Math.hypot(v,M,S)||1e-6,L=Math.max(0,P-d);let D=null,H=2,C=0,I=0,O=0;for(const ue of i){if(ue.id===f)continue;const _e=ue.x-e.x,Ye=ue.y-e.y,pt=ue.z-e.z,et=Fi((_e*v+Ye*M+pt*S)/(P*P),0,1);if(et<.02||et>=H)continue;const We=v*et-_e,dt=M*et-Ye,Xe=S*et-pt,xt=ue.id===-1?Math.max(ue.clear,Math.sqrt(ds/(.55*a))):ue.clear;Math.hypot(We,dt,Xe)>=xt||(D=ue,H=et,C=xt,I=We,O=Xe)}if(D){const ue=-S/P,_e=v/P;(!e.av||e.avId!==D.id)&&(e.avId=D.id,e.av=I*ue+O*_e>=0?1:-1);const Ye=C*1.3*e.av;v=D.x-e.x+ue*Ye,M=D.y-e.y,S=D.z-e.z+_e*Ye}else e.av=0;const $=Math.hypot(v,M,S)||1e-6,oe=v/$,Z=M/$,te=S/$,le=A*oe+_*Z+E*te,F=h?Math.min(l,Math.sqrt(2*u*L)):Math.min(l,le+a*4),ne=oe*F-A,ge=Z*F-_,ve=te*F-E,we=Math.hypot(ne,ge,ve),Y=Math.hypot(A-oe*le,_-Z*le,E-te*le),ee=le-F;if(ee<=.02?e.coast?(F-le>.3*Math.min(F,2)+.08||Y>c.lat)&&(e.coast=!1):F-le<.04&&Y<c.lat*.3&&(e.coast=!0):e.coast=!1,e.tau=Fi(Ug(L,le,a,u,l,h),.4,900),e.coast&&!(p&&p.burn)){e.phase="coast";return}const Me=Math.min(a,we/1.2);if(we>1e-6&&(e.tx=ne/we*Me,e.ty=ge/we*Me,e.tz=ve/we*Me),p&&p.burn){e.tx+=p.tx,e.ty+=p.ty,e.tz+=p.tz;const ue=Math.hypot(e.tx,e.ty,e.tz),_e=o.accel*o.flash;ue>_e&&(e.tx*=_e/ue,e.ty*=_e/ue,e.tz*=_e/ue)}e.phase=ee>.02?"brake":"burn"}function Kd(n,e,t,i,r,s){tp(n,e,t,r,s);let o=Math.hypot(e.tx,e.ty,e.tz);if(e.order&&e.order.type==="burn"&&(e.order.left-=i),o*i>e.dv){const f=e.dv/(o*i);e.tx*=f,e.ty*=f,e.tz*=f,o*=f}e.dv-=o*i,e.dv<1e-6&&(e.dv=0),e.burn=o>.004?1:0;let c=0,a=0,u=0;const l=e.order,h=l&&(l.type==="orbit"||l.type==="strike")&&(l.via==null||l.done)?ps(n,n.bodies[l.body]).id:-2;for(const f of r){if(f.id===h||f.id===e.depart){f.id===e.depart&&Math.hypot(f.x-e.x,f.y-e.y,f.z-e.z)>(f.hollow||1)*2&&(e.depart=void 0);continue}const m=f.x-e.x,y=f.y-e.y,x=f.z-e.z,p=Math.hypot(m,y,x);if(f.id>=0&&p<f.hollow&&!(l&&l.via===f.id&&!l.done))continue;const g=Math.max(f.soft,p),b=f.gm/(g*g*g);c+=m*b,a+=y*b,u+=x*b}e.vx+=(e.tx+c)*i,e.vy+=(e.ty+a)*i,e.vz+=(e.tz+u)*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i;for(const f of r){if(f.id<0||!f.size)continue;const m=e.x-f.x,y=e.y-f.y,x=e.z-f.z,p=Math.hypot(m,y,x);if(p<f.size*1.05){const g=f.size*1.05/(p||1);e.x=f.x+m*g,e.y=f.y+y*g,e.z=f.z+x*g}}const d=Math.hypot(e.x,e.y,e.z);if(d<Vr*1.3){const f=Vr*1.3/(d||1);e.x*=f,e.y*=f,e.z*=f}if(l&&l.type==="orbit"&&(l.via==null||l.done)){const f=n.bodies[l.body],m=sn(n,f,t+i),y=yo(n,f,t+i),x=Math.hypot(m.x-e.x,m.y-e.y,m.z-e.z),p=vr(f),g=Math.hypot(y.x-e.vx,y.y-e.vy,y.z-e.vz);if(x<p+.7&&g<.45){e.at=f.id;{const b=Z0(e),v=e.x-m.x,M=e.y-m.y,S=e.z-m.z;e.ph=Math.atan2(v*b.vx+M*b.vy+S*b.vz,v*b.ux+S*b.uz)}e.ready=n.time+Ae.turnaround,e.order=null,e.depart=void 0,e.burn=0,e.tx=e.ty=e.tz=0,e.phase="orbit",e.arrived=!0}}else if(l&&l.type==="strike"){const f=sn(n,n.bodies[l.body],t+i),m=Math.hypot(f.x-e.x,f.y-e.y,f.z-e.z);l.near===void 0||m<l.near?l.near=m:m>l.near+25&&(e.order=null,e.coast=!1)}else if(l&&l.type==="attack"&&l.mode==="pass"){const f=s(l.ship);if(f){const m=Math.hypot(f.x-e.x,f.y-e.y,f.z-e.z);l.near===void 0||m<l.near?l.near=m:m>l.near+12&&(e.order=null,e.coast=!1)}}}function ms(n,e,t,{maxT:i=2400,h:r=1.5,every:s=4,coast:o=0,lookupAt:c=null,until:a=null}={}){const u={id:e.id,owner:e.owner,x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,tx:0,ty:0,tz:0,st:e.st,out:{drive:0,reactor:0},dv:1e9,order:{...t},at:null,tau:0,coast:!1,inSoi:!1,term:!1,av:0,depart:e.at!==null?ps(n,n.bodies[e.at]).id:e.depart};let l=n.time,h=0,d=0;const f=c?y=>c(y,l):y=>Dt(n,y),m=[{x:u.x,y:u.y,z:u.z}];for(;l-n.time<i;){const y=Yd(n,l),x=u.dv;if(Kd(n,u,l,r,y,f),h+=x-u.dv,l+=r,++d%s===0&&m.push({x:u.x,y:u.y,z:u.z}),u.at!==null)break;if(a&&a(u,l)){u.caught=!0;break}if(!u.order&&(o-=r)<=0)break}return m.push({x:u.x,y:u.y,z:u.z}),{time:l-n.time,dv:h,ok:a?!!u.caught:u.at!==null||t.type!=="orbit",path:m,end:{x:u.x,y:u.y,z:u.z}}}function np(n,e,t){const i=n.ships.filter(h=>e.includes(h.id)),r=Dt(n,t);if(!i.length||!r)return[];const s=i.reduce((h,d)=>d.st.accel<h.st.accel?d:h),o=Math.min(...i.map(h=>h.dv)),c=n.time,a={...r},u=(h,d)=>{if(h!==r.id)return Dt(n,h);const f=d-c;if(r.at!==null){const m=sn(n,n.bodies[r.at],d),y=n.bp[r.at];a.x=r.x-y.x+m.x,a.y=r.y-y.y+m.y,a.z=r.z-y.z+m.z}else a.x=r.x+r.vx*f,a.y=r.y+r.vy*f,a.z=r.z+r.vz*f;return a},l=(h,d)=>{const f=u(r.id,d);return Math.hypot(f.x-h.x,f.y-h.y,f.z-h.z)<6&&Math.hypot(f.vx-h.vx,f.vy-h.vy,f.vz-h.vz)<.6};return["hard","cruise","dark"].map(h=>{const d=Math.min(...i.map(m=>m.st.accel*hs[h].a*(h==="hard"?m.st.flash:1))),f=ms(n,s,{type:"attack",ship:r.id,mode:"match",d0:3,profile:h,amax:d},{maxT:3e3,lookupAt:u,until:l});return{key:h,profile:h,time:f.time,dv:f.dv,ok:f.ok&&f.dv<=o,reach:f.ok}})}function uo(n,e,t){const i=n.ships.filter(f=>e.includes(f.id));if(!i.length)return[];const r=i.reduce((f,m)=>m.st.accel<f.st.accel?m:f),s=Math.min(...i.map(f=>f.dv)),o=[],c=f=>Math.min(...i.map(m=>m.st.accel*hs[f].a*(f==="hard"?m.st.flash:1)));for(const f of["hard","cruise","dark"]){const m=ms(n,r,{type:"orbit",body:t,profile:f,amax:c(f)});o.push({key:f,profile:f,time:m.time,dv:m.dv,ok:m.ok&&m.dv<=s,reach:m.ok,path:m.path})}const a=n.bodies[t],u=r,l=sn(n,a,n.time+o[1].time),h=Math.hypot(l.x-u.x,l.z-u.z);let d=null;for(const f of n.planets){if(f.gm<1.5||f.id===ps(n,a).id||r.at!==null&&ps(n,n.bodies[r.at]).id===f.id)continue;const m=sn(n,f,n.time+o[1].time*.5);if(!(Math.hypot(m.x-u.x,m.z-u.z)+Math.hypot(m.x-l.x,m.z-l.z)>h*1.9+60))for(const y of[1,-1]){const x=ms(n,r,{type:"orbit",body:t,profile:"cruise",via:f.id,side:y,amax:c("cruise")},{maxT:3e3});x.ok&&(!d||x.dv<d.dv)&&(d={key:"sling",profile:"cruise",via:f.id,side:y,time:x.time,dv:x.dv,ok:x.dv<=s,reach:!0,path:x.path})}}return d&&d.dv<o[1].dv*.93&&o.push(d),o[2].reach&&o[1].reach&&o[2].time<o[1].time&&o.splice(1,1),o}function Ol(n,e,t,i=-1,r=-1){const s=t.x-e.x,o=t.y-e.y,c=t.z-e.z,a=s*s+o*o+c*c;if(a<1e-6)return!1;const u=(l,h,d,f)=>{const m=Fi(((l-e.x)*s+(h-e.y)*o+(d-e.z)*c)/a,0,1),y=e.x+s*m-l,x=e.y+o*m-h,p=e.z+c*m-d;return y*y+x*x+p*p<f*f};if(u(0,0,0,Vr))return!0;for(const l of n.blockers){if(l.id===i||l.id===r)continue;const h=n.bp[l.id];if(u(h.x,h.y,h.z,l.size))return!0}return!1}function Ng(n){const e=Array.from({length:n.players},()=>[]);for(const s of n.ships)s.owner<0||s.out.sensors>0||s.out.reactor>0||e[s.owner].push({x:s.x,y:s.y,z:s.z,cold:s.st.cold,ident:s.st.ident,skip:s.at??-1});for(const s of n.bodies){if(s.owner<0)continue;const o=n.bp[s.id];e[s.owner].push({x:o.x,y:o.y,z:o.z,cold:Ae.cold*Nl(s,n),ident:Ae.ident*Nl(s,n)*(s.trait==="listening"?6:1),skip:s.id})}for(const s of n.agents){if(s.at>n.time)continue;const o=n.bp[s.body];e[s.owner].push({x:o.x,y:o.y,z:o.z,cold:Ae.cold*Ae.worldSensor,ident:Ae.ident*Ae.worldSensor,skip:s.body})}const t=Array.from({length:n.players},(s,o)=>qt(n,o,"cipher")),i=Array.from({length:n.players},(s,o)=>!!rr(n,o,"ansible")),r=Array.from({length:n.players},(s,o)=>ef(n,o));for(const s of n.ships){const o=s.lit>n.time||s.burn&&!(s.st.coldDark&&s.order&&s.order.profile==="dark"),c=o;for(let a=0;a<n.players;a++){if(a===s.owner||s.beacon&&n.alive[a]){s.seen[a]=2;continue}if(!n.alive[a]){s.seen[a]=0;continue}if(s.owner>=0&&r[s.owner]&&!s.st.civil){s.seen[a]=0;continue}let u=i[a]?2:0;for(const h of u?[]:e[a]){const d=Math.hypot(h.x-s.x,h.y-s.y,h.z-s.z),f=c?d<h.ident:d<h.cold*s.st.sig;if(!(!c&&!f)&&!Ol(n,h,s,h.skip,s.at??-1)){if(f&&(c||d<h.cold*s.st.sig*.6)){u=2;break}u=1}}const l=s.seen[a];u&&l===2&&(u=2),o&&t[a]&&!s.st.civil&&(u=2),u&&((s.lastSeen||(s.lastSeen={}))[a]=n.time),u&&!l&&!s.st.civil&&!s.beacon&&(s.told?.[a]===void 0||n.time-(s.gone?.[a]??n.time)>120)&&((s.told||(s.told={}))[a]=n.time,Lt(n,{type:"contact",owner:a,ship:s.id})),!u&&l?(s.gone||(s.gone={}))[a]=n.time:u&&!l&&s.gone,u&&s.gone&&l&&(s.gone[a]=void 0),s.seen[a]=u}}}function ip(n,e,t,i){const r=Math.max(1,t*.4,t-e.st.armour);if(e.hull-=r,e.lit=n.time+3,n.rand()<Fi(r/e.st.hull*1.3,0,.8)){const o=["drive","reactor","weapons","sensors"][Math.floor(n.rand()*4)];e.out[o]<=0&&Lt(n,{type:"system",owner:e.owner,ship:e.id,sys:o}),e.out[o]=e.hull<e.st.hull*.25?1e9:Ae.selfRepair}e.hull<=0&&Zd(n,e,i)}function Zd(n,e,t){e.dead||(e.dead=!0,ai(n,{type:"boom",x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,size:e.st.size,owner:e.owner}),Lt(n,{type:e.st.civil?"raided":"lost",owner:e.owner,by:t,ship:e.id,name:e.name,cls:e.cls,x:e.x,y:e.y,z:e.z}),e.st.civil?(Oi(n,t,"raided"),Mu(n,e)):(Oi(n,e.owner,"lost"),Oi(n,t,"killed")))}function Mu(n,e){e.src!=null&&n.bodies[e.src].hauler===e.id&&(n.bodies[e.src].hauler=0)}function Su(n,e,t){if(e.out.weapons>0||e.out.reactor>0||e.torps<=0||e.tcd>n.time)return!1;const i=Math.min(e.st.tubes,e.torps);if(!i)return!1;const r=t.ship!=null?Dt(n,t.ship):null,s=!!r&&r.st.jam;e.torps-=i,e.tcd=n.time+Ae.torp.reload*(e.st.reload||1),e.lit=n.time+4;for(let o=0;o<i;o++){const c=o/i*Math.PI*2;n.torps.push({id:n.nextId++,owner:e.owner,x:e.x,y:e.y,z:e.z,vx:e.vx+Math.cos(c)*.12,vy:e.vy+(o%2?.06:-.06),vz:e.vz+Math.sin(c)*.12,ship:t.ship??null,body:t.body??null,dv:s&&n.rand()<.3?0:Ae.torp.dv,born:n.time,swarm:e.st.swarm,from:e.id,burn:1})}return ai(n,{type:"launch",x:e.x,y:e.y,z:e.z,n:i,owner:e.owner}),Lt(n,{type:"salvo",owner:e.owner,ship:e.id,n:i,to:t.ship!=null?Dt(n,t.ship)?.owner??null:t.body!=null?n.bodies[t.body].owner:null}),!0}function zg(n,e){const t=Ae.torp;for(const i of n.torps){let r=null,s,o,c,a,u,l,h=.6;if(i.ship!=null){if(r=Dt(n,i.ship),!r||r.dead){i.dead=!0;continue}s=r.x,o=r.y,c=r.z,a=r.vx,u=r.vy,l=r.vz}else{const E=n.bodies[i.body],P=n.bp[E.id],L=n.bv[E.id];s=P.x,o=P.y,c=P.z,a=L.x,u=L.y,l=L.z,h=E.size+.3}const d=s-i.x,f=o-i.y,m=c-i.z,y=Math.hypot(d,f,m)||1e-6,x=a-i.vx,p=u-i.vy,g=l-i.vz,b=-(d*x+f*p+m*g)/y,v=x*x+p*p+g*g,M=v>1e-9?Fi(-(d*x+f*p+m*g)/v,0,e):0,S=d+x*M,A=f+p*M,_=m+g*M;if(Math.hypot(S,A,_)<h){i.dead=!0;const E=Math.sqrt(v),P=t.dmg*Fi((E/3)**2,.25,3.5);if(ai(n,{type:"torpHit",x:s,y:o,z:c,owner:i.owner}),r){ip(n,r,P,i.owner);const L=Dt(n,i.from);L&&L.owner===i.owner&&Y0(n,L,2.5)}else rp(n,n.bodies[i.body],P,i.owner);continue}if(n.time-i.born>t.life){i.dead=!0;continue}if(i.burn=0,i.dv>0){const E=Fi(y/Math.max(.5,b),.5,40);let P=(d+x*E)/E+d/y*.6,L=(f+p*E)/E+f/y*.6,D=(m+g*E)/E+m/y*.6;for(const C of n.blockers){if(C.id===i.body)continue;const I=n.bp[C.id],O=I.x-i.x,$=I.y-i.y,oe=I.z-i.z,Z=(O*d+$*f+oe*m)/y;if(Z<=0||Z>=y)continue;const te=O-d/y*Z,le=$-f/y*Z,F=oe-m/y*Z,ne=Math.hypot(te,le,F),ge=C.size*1.6;if(ne>=ge)continue;const ve=(1-ne/ge)*3/(ne||1e-6);P-=te*ve,L-=le*ve,D-=F*ve,ne<.001&&(P+=m/y,D-=d/y)}const H=Math.hypot(P,L,D)||1;P*=t.accel/H,L*=t.accel/H,D*=t.accel/H,i.vx+=P*e,i.vy+=L*e,i.vz+=D*e,i.dv-=t.accel*e,i.burn=1}i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;for(const E of n.blockers){if(E.id===i.body)continue;const P=n.bp[E.id];if(Math.hypot(P.x-i.x,P.y-i.y,P.z-i.z)<E.size){i.dead=!0,ai(n,{type:"torpHit",x:i.x,y:i.y,z:i.z,owner:i.owner});break}}Math.hypot(i.x,i.y,i.z)<Vr&&(i.dead=!0)}n.torps.some(i=>i.dead)&&(n.torps=n.torps.filter(i=>!i.dead))}function rp(n,e,t,i){e.bhp<=0||(e.bhp=Math.max(0,e.bhp-t),e.bquiet=n.time+20,e.bhp<=0&&(ai(n,{type:"boom",x:n.bp[e.id].x,y:n.bp[e.id].y,z:n.bp[e.id].z,vx:0,vy:0,vz:0,size:1.2,owner:e.owner}),Lt(n,{type:"silenced",owner:e.owner,by:i,at:e.id})))}function Fg(n,e,t){return t.owner===e.owner?!1:e.owner!==ct?!0:!t.st.civil&&(t.at===e.id||t.order&&t.order.body===e.id||t.hitWorld===e.id)}function qf(n,e,t,i,r,s,o,c,a,u=0){const l=i.x-e.x,h=i.y-e.y,d=i.z-e.z,f=Math.hypot(l,h,d)||1e-6,m=i.vx-t.x,y=i.vy-t.y,x=i.vz-t.z,p=(l*m+h*y+d*x)/f,g=Math.sqrt(Math.max(0,m*m+y*y+x*x-p*p))/f;let b=.75*(1-.6*f/o)*i.st.size*s*(1-.06*Ci(i))/(1+g*6);i.evade&&!as(i)&&(b*=.5),a&&(b*=.7);const v=n.rand()<Fi(b,.03,.95);return ai(n,{type:"rail",x:e.x,y:e.y,z:e.z,tx:i.x,ty:i.y,tz:i.z,hit:v,owner:c}),v&&ip(n,i,r*(u||Fi(.5+(Math.max(0,-p)/1.6)**2,.5,5)),c),v}function Og(n,e){const t=n.ships,i=n.time;for(const r of t){if(r.dead||r.st.civil||r.out.reactor>0)continue;const s=r.st,o=r.out.weapons<=0,c=r.at??-1;if(s.pdc){let d=s.pdc*(o?1:.5);for(const f of n.torps){if(d<=0)break;if(f.dead||f.owner===r.owner||Math.hypot(f.x-r.x,f.y-r.y,f.z-r.z)>Ae.pdcRange)continue;const y=Math.hypot(f.vx-r.vx,f.vy-r.vy,f.vz-r.vz),x=Math.min(d,2);d-=x,n.rand()<1-Math.exp(-x*s.flak*(1.7/(1+y/6))*(f.swarm?.5:1)*e)?(f.dead=!0,ai(n,{type:"pdcKill",x:f.x,y:f.y,z:f.z,fx:r.x,fy:r.y,fz:r.z,owner:r.owner})):n.rand()<.5&&ai(n,{type:"pdc",x:r.x,y:r.y,z:r.z,tx:f.x,ty:f.y,tz:f.z,owner:r.owner}),r.lit=i+2}if(d>0&&r.fireFree&&o){for(const f of t)if(!(f.dead||f.derelict||f.owner===r.owner||!f.seen[r.owner]||f.st.civil&&!(r.order&&r.order.ship===f.id&&r.order.mode==="pass")||Math.hypot(f.x-r.x,f.y-r.y,f.z-r.z)>Ae.pdcRange*.6)){f.hull-=Math.max(0,d*.6-f.st.armour*.1)*e,f.lit=i+3,f.hull<=0&&Zd(n,f,r.owner),n.rand()<.3&&ai(n,{type:"pdc",x:r.x,y:r.y,z:r.z,tx:f.x,ty:f.y,tz:f.z,owner:r.owner}),r.lit=i+2;break}}}if(!o||!r.fireFree)continue;let a=null,u=0,l=null;for(const d of t){if(d.dead||d.derelict||d.owner===r.owner||!d.seen[r.owner]||d.st.civil&&!(r.order&&r.order.type==="attack"&&r.order.ship===d.id&&r.order.mode==="pass"))continue;let f=Math.hypot(d.x-r.x,d.y-r.y,d.z-r.z);if(r.at!==null&&d.at===r.at&&(f=Math.min(f,s.railRange*.8)),f>Math.max(s.railRange,Ae.torpRange)||Ol(n,r,d,c,d.at??-1))continue;const m=(d.st.power+.3)/(f+4)*(r.order&&r.order.ship===d.id?3:1);m>u&&(u=m,a=d)}const h=r.at!==null?n.bodies[r.at]:r.order&&r.order.body!=null?n.bodies[r.order.body]:null;if(h&&h.owner!==r.owner&&h.bhp>0){const d=n.bp[h.id];Math.hypot(d.x-r.x,d.y-r.y,d.z-r.z)<s.railRange+h.size&&(l=h)}if(a){let d=Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z);if(r.at!==null&&a.at===r.at&&(d=Math.min(d,s.railRange*.8)),d<s.railRange)for(let f=0;f<s.rails.length;f++)r.cd[f]>i||a.dead||(r.cd[f]=i+Ae.railCool*(.9+n.rand()*.2),r.lit=i+3,qf(n,r,{x:r.vx,y:r.vy,z:r.vz},a,s.rails[f],s.railHit*(1+.08*Ci(r))*(r.out.sensors>0?.5:1),s.railRange,r.owner,r.evade)&&Y0(n,r,a.st.civil?.3:1));r.torpsFree&&!a.dead&&a.st.power>0&&a.seen[r.owner]===2&&d<Ae.torpRange&&s.tubes&&Su(n,r,{ship:a.id})}else if(l){const d=n.bp[l.id],f=n.bv[l.id],m=d.x-r.x,y=d.y-r.y,x=d.z-r.z,p=Math.hypot(m,y,x)||1,g=(m*(f.x-r.vx)+y*(f.y-r.vy)+x*(f.z-r.vz))/p;for(let b=0;b<s.rails.length;b++)r.cd[b]>i||(r.cd[b]=i+Ae.railCool*(.9+n.rand()*.2),r.lit=i+3,r.hitWorld=l.id,ai(n,{type:"rail",x:r.x,y:r.y,z:r.z,tx:d.x,ty:d.y,tz:d.z,hit:!0,owner:r.owner}),rp(n,l,s.rails[b]*Fi(1+(Math.max(0,-g)/1.6)**2,1,5),r.owner));r.torpsFree&&s.tubes&&l.bhp>60&&Su(n,r,{body:l.id})}r.evade&&r.at===null&&r.dv>0&&(a||l)&&(r.dv=Math.max(0,r.dv-s.accel*.3*e))}for(const r of n.bodies){if(r.bhp<=0){Xn(r)>0&&(r.bquiet||0)<i&&!t.some(l=>l.at===r.id&&l.owner!==r.owner&&Yr(l))&&(r.bhp=Math.min(Xn(r),r.bhp+Ae.batteryRegen*e));continue}const s=n.bp[r.id],o=n.bv[r.id];Bi(r,"battery"),(r.bquiet||0)<i&&(r.bhp=Math.min(Xn(r),r.bhp+Ae.batteryRegen*e));let c=3;for(const l of n.torps){if(c<=0)break;if(l.dead||l.owner===r.owner||r.owner===ct&&l.body!==r.id||Math.hypot(l.x-s.x,l.y-s.y,l.z-s.z)>Ae.pdcRange+r.size)continue;c-=1;const h=Math.hypot(l.vx-o.x,l.vy-o.y,l.vz-o.z);n.rand()<1-Math.exp(-(1.7/(1+h/6))*(l.swarm?.5:1)*e)&&(l.dead=!0,ai(n,{type:"pdcKill",x:l.x,y:l.y,z:l.z,fx:s.x,fy:s.y,fz:s.z,owner:r.owner}))}r.bcd||(r.bcd=[0,0,0,0]);let a=null,u=1e9;for(const l of t){if(l.dead||l.derelict||!Fg(n,r,l)||l.st.civil)continue;const h=Math.hypot(l.x-s.x,l.y-s.y,l.z-s.z);h<Ae.railRange+r.size&&h<u&&!Ol(n,s,l,r.id,l.at??-1)&&(a=l,u=h)}if(a)for(let l=0;l<Pa(r);l++)r.bcd[l]>i||a.dead||(r.bcd[l]=i+Ae.railCool*(.9+n.rand()*.2),qf(n,s,o,a,Nd,1,Ae.railRange+r.size,r.owner,!1,1))}t.some(r=>r.dead)&&(n.ships=t.filter(r=>!r.dead))}const jd=n=>Ae.yield[G0(n)]*(n.owner===ct?.5:1);function Bg(n,e,t){if(!n.alive[e])return;n.alive[e]=!1;for(const r of n.bodies)r.owner===e&&(r.owner=ct,r.queue=[],r.yt=0);n.ships=n.ships.filter(r=>r.owner!==e),n.torps=n.torps.filter(r=>r.owner!==e),Lt(n,{type:"eliminated",owner:e,by:t});const i=n.alive.map((r,s)=>r?s:-1).filter(r=>r>=0);i.length===1&&(n.over={winner:i[0],t:n.time},Lt(n,{type:"won",owner:i[0]}))}function Hg(n,e){const t=Array.from({length:n.players},(i,r)=>!!rr(n,r,"fuelnet"));for(const i of n.bodies){for(const u of i.structures){if(u.scrap){u.scrap-=e,u.scrap<=0&&(i.owner>=0&&(n.credits[i.owner]+=uc(u)),u.gone=!0);continue}u.left>0&&(u.left-=e,u.left<=0&&(u.left=0,u.next&&(u.level+=1,delete u.next),u.type==="battery"&&(i.bhp=Math.max(i.bhp,Xn(i)*.5)),Lt(n,{type:"built",owner:i.owner,at:i.id,what:u.type})))}i.structures.some(u=>u.gone)&&(i.structures=i.structures.filter(u=>!u.gone));let r=ct,s=!1,o=!1,c=!1,a=0;for(const u of n.ships)u.at!==i.id||!Yr(u)||(u.owner===i.owner?o=!0:(c=!0,a++,r===ct?r=u.owner:r!==u.owner&&(s=!0)));if(i.blockaded=c,i.owner!==ct){const u=i.owner;if(i.queue.length&&ki(i,"yard")&&!c)for(const y of i.queue.slice(0,zl(i))){if(y.left-=e,y.left>0)continue;i.queue.splice(i.queue.indexOf(y),1);const x=Jt(n,u,y.cls,i);i.trait==="hulk"&&(x.xp=6),Oi(n,u,"built"),Lt(n,{type:"launched",owner:u,ship:x.id,at:i.id})}let l=$r(i,n)*e*(c||(i.stun||0)>n.time?0:1);const h=q0(n,i);if(h&&(n.credits[h.owner]+=l*Fn.skim,l*=1-Fn.skim),i.home)n.credits[u]+=l*n.eco[u],n.stats[u].earned+=l*n.eco[u];else{i.stock=Math.min(Ae.stockCap,i.stock+l);const y=n.homes[u];if(i.stock>=Ae.load&&!i.hauler&&!c&&y){const x=Jt(n,u,"freighter",i,{cargo:i.stock*ac(n,i),src:i.id});i.stock=0,i.hauler=x.id,x.order={type:"orbit",body:y.id,profile:"cruise",amax:x.st.accel},x.depart=ps(n,i).id,x.at=null}}const d=t[u],f=d||i.home||ki(i,"refinery")||ki(i,"depot")||i.trait==="deut"?3:1,m=ki(i,"yard");if(!c)for(const y of n.ships)y.at!==i.id||y.owner!==u||Gg(n,y,e,Ae.refuel*f,Ae.repair*(m?1:.33),m||i.home||d||ki(i,"depot")?1/Ae.rearm:0,m)}r!==ct&&!s&&!o&&i.bhp<=0&&(!i.home||a>=zd)?(i.yo!==r&&(i.yo=r,i.yt=0),i.yt+=e*(Lg(n,r,i)?2:1),i.yt>=jd(i)&&Jd(n,i,r)):i.yt>0&&(i.yt=Math.max(0,i.yt-e*.5))}}function Gg(n,e,t,i,r,s,o){e.dv=Math.min(e.st.dv,e.dv+i*t),e.hull=Math.min(e.st.hull,e.hull+r*t),s&&e.torps<e.st.mag&&(e.rearm=(e.rearm||0)+s*t,e.rearm>=1&&(e.rearm-=1,e.torps+=1)),e.st.stores&&o&&(e.stores=Math.min(e.st.stores,e.stores+s*t));for(const c in e.out)e.out[c]>0&&(o||e.out[c]<1e8)&&(e.out[c]=Math.min(e.out[c],o?8:Ae.selfRepair))}function Jd(n,e,t){const i=e.owner;Oi(n,i,"worldsLost"),Oi(n,t,"captured"),n.credits[t]+=e.stock,e.stock=0,e.owner=t,e.yt=0,e.yo=ct,e.queue=[],e.bhp=0,e.bquiet=n.time+30,e.mega&&e.mega.done&&e.mega.key==="ark"&&(e.mega.hold=un.ark.hold),e.structures=e.structures.filter(r=>r.left<=0||r.next);for(const r of e.structures)r.next&&(delete r.next,r.left=0),delete r.scrap;if(Lt(n,{type:"captured",owner:t,from:i,at:e.id}),e.home&&i!==ct&&n.homes[i]===e){e.home=!1,e.fallen=!0,n.homes[i]=null;const r=n.conquest?n.bodies.filter(s=>s.owner===i).sort((s,o)=>(o.kind==="planet")-(s.kind==="planet")||$r(o)-$r(s))[0]:null;r?(r.home=!0,n.homes[i]=r,Ai(r,"yard")||r.structures.push({type:"yard",level:1,left:0}),Lt(n,{type:"moved",owner:i,at:r.id})):Bg(n,i,t)}}function Vg(n,e){const t=Yd(n,n.time),i=s=>Dt(n,s);for(const s of n.ships){for(const o in s.out)s.out[o]>0&&s.out[o]<1e8&&(s.out[o]-=e,s.out[o]<=0&&(s.out[o]=0,Lt(n,{type:"repaired",owner:s.owner,ship:s.id,sys:o})));if(s.at!==null){s.ph+=H0(n.bodies[s.at])*e,j0(n,s,n.time+e),s.burn=0,s.tx=s.ty=s.tz=0,s.phase="orbit";continue}if(s.order&&s.order.type==="form"){const o=i(s.order.lead);!o||o.owner!==s.owner?(s.order=s.order.then||null,s.tau=0):o.at!==null&&(s.order={type:"orbit",body:o.at,profile:"cruise",amax:s.st.accel*.7},s.tau=0,s.term=!1)}if(Kd(n,s,n.time,e,t,i),s.arrived){s.arrived=!1;const o=n.bodies[s.at];s.owner<0?s.dead=!0:s.st.civil&&o.owner===s.owner?(n.credits[s.owner]+=s.cargo*n.eco[s.owner],n.stats[s.owner].earned+=s.cargo,Oi(n,s.owner,"hauled"),Lt(n,{type:"freight",owner:s.owner,at:o.id,n:Math.round(s.cargo)}),Mu(n,s),s.dead=!0):s.st.civil||Lt(n,{type:"arrived",owner:s.owner,ship:s.id,at:o.id})}!s.order&&!s.warned&&s.dv<s.st.dv*.2&&!s.st.civil&&(s.warned=!0,Lt(n,{type:"fuel",owner:s.owner,ship:s.id})),s.dv>s.st.dv*.4&&(s.warned=!1)}for(let s=0;s<n.ships.length;s++){const o=n.ships[s];for(let c=s+1;c<n.ships.length;c++){const a=n.ships[c];if(o.at!==null&&o.at===a.at){const u=1.6/vr(n.bodies[o.at]);let l=((a.ph-o.ph)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI;if(Math.abs(l)<u){const h=(u-Math.abs(l))*.5*Math.min(1,e*2)*(l>=0?1:-1);o.ph-=h,a.ph+=h}}else if(o.at===null&&a.at===null){const u=a.x-o.x,l=a.y-o.y,h=a.z-o.z,d=Math.hypot(u,l,h);if(d<1.2&&Math.hypot(a.vx-o.vx,a.vy-o.vy,a.vz-o.vz)<.6){const f=(1.2-d)*.5*Math.min(1,e*1.5)/(d||1),m=d>.001?u:o.id%2?1:-1,y=d>.001?h:.5;o.x-=m*f,o.y-=l*f,o.z-=y*f,a.x+=m*f,a.y+=l*f,a.z+=y*f}}}}const r=Ae.board;for(const s of n.ships){if(s.dead)continue;if(s.st.stores&&s.out.reactor<=0)for(const u of n.ships){if(u===s||u.owner!==s.owner||u.st.civil||u.st.stores||Math.hypot(u.x-s.x,u.y-s.y,u.z-s.z)>3||Math.hypot(u.vx-s.vx,u.vy-s.vy,u.vz-s.vz)>.5)continue;const l=Math.min(.6*e,s.dv-8,u.st.dv-u.dv);l>0&&(s.dv-=l,u.dv+=l),u.torps<u.st.mag&&s.stores>=1&&(u.rearm=(u.rearm||0)+e/6,u.rearm>=1&&(u.rearm-=1,u.torps+=1,s.stores-=1)),u.hull=Math.min(u.st.hull,u.hull+Ae.repair*.33*e);for(const h in u.out)u.out[h]>Ae.selfRepair&&(u.out[h]=Ae.selfRepair)}const o=s.st.civil||s.out.reactor>0||s.out.drive>0&&s.out.weapons>0,c=n.ships.filter(u=>u.owner!==s.owner&&u.owner>=0&&Yr(u)&&!u.dead&&Math.hypot(u.x-s.x,u.y-s.y,u.z-s.z)<r.range&&Math.hypot(u.vx-s.vx,u.vy-s.vy,u.vz-s.vz)<r.speed&&(o||u.order&&u.order.type==="attack"&&u.order.ship===s.id&&u.order.mode==="board"));if(!c.length||s.derelict&&!o){s.board=Math.max(0,s.board-e);continue}const a=c[0].owner;if(s.boardBy!==a&&(s.boardBy=a,s.board=0),s.board+=e,!(s.board<(s.st.civil?r.freighter:r.warship))){if(s.st.civil){n.credits[a]+=s.cargo,Oi(n,a,"raided"),Lt(n,{type:"seized",owner:a,from:s.owner,n:Math.round(s.cargo),x:s.x,y:s.y,z:s.z}),Mu(n,s),s.dead=!0;continue}if(!o&&n.rand()>qd(s,c.filter(u=>u.owner===a))){s.board=0;for(const u of c)u.owner===a&&(u.hull-=u.st.hull*.12,u.hull<=0&&Zd(n,u,s.owner));Lt(n,{type:"repelled",owner:a,from:s.owner,ship:s.id,name:s.name});continue}Lt(n,{type:"boarded",owner:a,from:s.owner,ship:s.id,name:s.name}),Oi(n,s.owner,"lost"),s.derelict&&(s.derelict=!1,s.beacon=!1,s.xp=Math.max(s.xp||0,18),s.name=K0(n,a)),s.owner=a,s.st=Kr(n,a,s.cls),s.order=null,s.board=0;for(const u in s.out)s.out[u]>30&&(s.out[u]=30);s.seen=s.seen.map(()=>0)}}n.ships.some(s=>s.dead)&&(n.ships=n.ships.filter(s=>!s.dead))}function Wg(n,e){for(let t=0;t<n.players;t++){const i=n.tech[t].project;!i||!n.alive[t]||(i.left-=e*oc(n,t),i.left<=0&&(n.tech[t][i.line]+=1,n.tech[t].picks[i.key]=!0,n.tech[t].project=null,Oi(n,t,"research"),Dg(n,t),Lt(n,{type:"research",owner:t,line:i.line,key:i.key})))}}function sp(n,e){n.rand||Qd(n),n.acc+=e;let t=0;for(;n.acc>=Mi&&!n.over&&t++<80;)n.acc-=Mi,$g(n);n.over&&(n.acc=0)}function Qd(n){n.rand=qi((n.seed^2654435769)+Math.floor(n.time*5)),kg(n),n.homes=Array.from({length:n.players},(e,t)=>n.bodies.find(i=>i.home&&i.owner===t)||null),n.bp=[],n.bv=[],wu(n);for(const e of n.ships)e.st||(e.st=Kr(n,e.owner,e.cls))}function wu(n){for(const e of n.bodies)n.bp[e.id]=sn(n,e,n.time),n.bv[e.id]=yo(n,e,n.time);n.placedAt=n.time}function $g(n){n.placedAt!==n.time&&wu(n),Vg(n,Mi),zg(n,Mi),n.time+=Mi,wu(n),n.k=(n.k||0)+1,n.k%2===0&&Ng(n),Og(n,Mi),Hg(n,Mi),Wg(n,Mi),Xg(n,Mi);for(const e of n.ships)if(e.pending&&n.time>=(e.ready||0)){const t=e.pending;e.pending=null,e.at!==null&&Q0(n,e,t.o,t.g)}for(let e=0;e<n.players;e++)n.alive[e]&&(n.credits[e]=Math.max(0,n.credits[e]-Od(n,e)*Mi));if(Pg(n,Mi),n.k%100===0){n.series||(n.series=[]);const e=t=>Array.from({length:n.players},(i,r)=>Math.round(t(r)*10)/10);n.series.push({t:Math.round(n.time),pow:e(t=>n.ships.reduce((i,r)=>i+(r.owner===t?ro(r):0),0)),worlds:e(t=>n.bodies.filter(i=>i.owner===t).length),inc:e(t=>lc(n,t).total)}),n.series.length>600&&n.series.splice(0,1)}qg(n)}const rr=(n,e,t)=>e<0?null:n.bodies.find(i=>i.owner===e&&i.mega&&i.mega.done&&i.mega.key===t)||null,ef=(n,e)=>e>=0&&n.blackout&&n.blackout[e].until>n.time,fc=(n,e)=>1+(oc(n,e)-1)*.5;function So(n,e,t){const i=un[t],r=e.owner;return!i||r<0?"Unknown":(t==="ark"?n.winBy!=="ark":!qt(n,r,t))?t==="ark"?"Ark games only":`Needs ${i.name}`:t==="ark"&&!e.home?"Capital only":n.megaDone[t]!=null?"Already built":e.mega?"World taken":n.bodies.some(s=>s.owner===r&&s.mega&&s.mega.key===t)?"Already building":e.blockaded?"Under blockade":n.credits[r]<i.cost?"Not enough credits":null}function tf(n,e,t){return So(n,e,t)?!1:(n.credits[e.owner]-=un[t].cost,e.mega={key:t,by:e.owner,left:un[t].time,total:un[t].time,done:!1},Lt(n,{type:"megaStart",owner:e.owner,at:e.id,key:t}),!0)}function za(n,e,t){return rr(n,e,"strike")?!t||!t.home||t.owner===e||t.owner<0?"Enemy capitals only":n.strikeReady[e]>n.time?"Not ready":n.strikes.some(r=>r.owner===e)?"Already on its way":null:"Not built"}function nf(n,e,t){if(za(n,e,t))return!1;const i=un.strike,r=rr(n,e,"strike"),s=n.time+i.flight,o=n.bp[r.id],c=sn(n,t,s),a=(o.x+c.x)/2,u=(o.y+c.y)/2,l=(o.z+c.z)/2,h=Math.hypot(a,u,l),d=Math.min(Math.hypot(o.x,o.y,o.z),Math.hypot(c.x,c.y,c.z))*.8;let f=a/(h||1),m=u/(h||1),y=l/(h||1);if(h<1){const v=c.x-o.x,M=c.z-o.z,S=Math.hypot(v,M)||1;f=-M/S,m=0,y=v/S}const x=Math.max(h,d),p=2*f*x-a,g=2*m*x-u,b=2*y*x-l;return n.strikes.push({id:n.nextId++,owner:e,kind:n.factions[e],from:r.id,to:t.id,t0:n.time,t1:s,x0:o.x,y0:o.y,z0:o.z,cx:p,cy:g,cz:b,x1:c.x,y1:c.y,z1:c.z,hp:i.hp}),n.strikeReady[e]=n.time+i.cooldown,Lt(n,{type:"strike",owner:e,at:t.id,to:t.owner}),!0}const so=(n,e)=>{const t=Math.min(1,Math.max(0,(e-n.t0)/(n.t1-n.t0))),i=(1-t)*(1-t),r=2*(1-t)*t,s=t*t,o=n.cx??(n.x0+n.x1)/2,c=n.cy??(n.y0+n.y1)/2,a=n.cz??(n.z0+n.z1)/2;return{x:i*n.x0+r*o+s*n.x1,y:i*n.y0+r*c+s*n.y1,z:i*n.z0+r*a+s*n.z1}};function Fa(n,e){return rr(n,e,"blackout")?ef(n,e)?"On":n.blackout[e].ready>n.time?"Not ready":null:"Not built"}function rf(n,e){return Fa(n,e)?!1:(n.blackout[e]={until:n.time+un.blackout.last,ready:n.time+un.blackout.cooldown},Lt(n,{type:"blackout",owner:e}),!0)}function Xg(n,e){for(const i of n.bodies){const r=i.mega;if(!(!r||i.owner<0))if(r.done)r.key==="ark"&&!n.over&&(r.hold-=e,r.hold<=0&&(n.over={winner:i.owner,t:n.time,how:"ark"},Lt(n,{type:"won",owner:i.owner})));else{if(i.blockaded||(r.left-=e*fc(n,i.owner),r.left>0))continue;r.left=0,r.done=!0,n.megaDone[r.key]=i.id,r.key==="ark"&&(r.hold=un.ark.hold),Lt(n,{type:"megaDone",owner:i.owner,at:i.id,key:r.key});for(const s of n.bodies)s!==i&&s.mega&&s.mega.key===r.key&&(s.owner>=0&&(n.credits[s.owner]+=un[r.key].cost/2),Lt(n,{type:"megaLost",owner:s.owner,at:s.id,key:r.key}),s.mega=null)}}if(!n.strikes.length)return;const t=un.strike;for(const i of n.strikes){const r=so(i,n.time);for(const o of n.ships)o.owner===i.owner||o.owner<0||!Yr(o)||o.out.weapons>0||Math.hypot(o.x-r.x,o.y-r.y,o.z-r.z)>t.reach||(i.hp-=(o.st.rails.reduce((c,a)=>c+a,0)+o.st.pdc)*e);for(const o of n.bodies){if(o.owner<0||o.owner===i.owner||o.bhp<=0)continue;const c=n.bp[o.id];Math.hypot(c.x-r.x,c.y-r.y,c.z-r.z)<t.reach&&(i.hp-=Pa(o)*Nd*e)}if(i.hp<=0){i.gone=!0,Lt(n,{type:"strikeDown",owner:i.owner,at:i.to}),ai(n,{type:"boom",x:r.x,y:r.y,z:r.z,vx:0,vy:0,vz:0,size:2,owner:i.owner});continue}if(n.time<i.t1)continue;i.gone=!0;const s=n.bodies[i.to];ai(n,{type:"boom",x:r.x,y:r.y,z:r.z,vx:0,vy:0,vz:0,size:4,owner:i.owner}),!(s.owner===i.owner||s.owner<0)&&(s.structures=s.structures.some(o=>o.type==="yard")?[{type:"yard",level:1,left:0}]:[],s.bhp=0,s.queue=s.queue.slice(0,1),s.stun=n.time+t.stun,s.mega&&!s.mega.done&&(s.mega=null),Lt(n,{type:"struck",owner:i.owner,at:s.id,to:s.owner}))}n.strikes=n.strikes.filter(i=>!i.gone)}function qg(n){if(n.noEvents||(n.evT===void 0&&(n.evT=260+n.rand()*120),n.time<n.evT))return;n.evT=n.time+420+n.rand()*200,n.evN=(n.evN||0)+1;const e=n.planets.map(r=>r.r),t=Math.min(...e),i=Math.max(...e);if(n.evN%2&&n.ships.filter(r=>r.derelict).length<2){const r=t+(i-t)*(.15+n.rand()*.6),s=n.rand()*Math.PI*2,o=Math.sqrt(ds/r),c=Jt(n,ct,n.rand()<.25?"battleship":n.rand()<.5?"escort":"frigate",null);Object.assign(c,{x:Math.cos(s)*r,y:0,z:Math.sin(s)*r,vx:-Math.sin(s)*o,vy:0,vz:Math.cos(s)*o,derelict:!0,beacon:!0,torps:0}),c.hull=c.st.hull*.5,c.dv=c.st.dv*.3,c.out.reactor=1e9,Lt(n,{type:"event",kind:"derelict",ship:c.id})}else{const r=n.bodies.filter(a=>a.owner===ct&&a.parent===null);if(r.length<2)return;const s=r[Math.floor(n.rand()*r.length)],o=r.filter(a=>a!==s).sort((a,u)=>Math.abs(u.r-s.r)-Math.abs(a.r-s.r))[0],c=Jt(n,ct,"freighter",s,{cargo:300+Math.round(n.rand()*20)*10,src:null,beacon:!0});c.name="Convoy",c.order={type:"orbit",body:o.id,profile:"cruise",amax:c.st.accel},c.depart=s.id,c.at=null,Lt(n,{type:"event",kind:"convoy",ship:c.id})}}function op(n,e){const t=i=>Math.round(i*100)/100;return{time:n.time,over:n.over,credits:n.credits[e],tech:n.tech[e],megaDone:n.megaDone,strikes:n.strikes,blackout:n.blackout,strikeReady:n.strikeReady,alive:n.alive,stats:n.stats,series:n.over?n.series:void 0,agents:n.agents.filter(i=>i.owner===e),bodies:n.bodies.map(i=>({owner:i.owner,structures:i.structures,queue:i.owner===e?i.queue:[],stock:i.owner===e?t(i.stock):0,bhp:t(i.bhp),yt:t(i.yt),yo:i.yo,home:!!i.home,blockaded:!!i.blockaded,mega:i.mega||null,stun:i.stun||0})),ships:n.ships.filter(i=>i.seen[e]).map(i=>{const r=i.owner===e,s=i.seen[e]===2;return{id:i.id,owner:i.owner,cls:s?i.cls:null,name:s?i.name:null,x:t(i.x),y:t(i.y),z:t(i.z),vx:t(i.vx),vy:t(i.vy),vz:t(i.vz),tx:i.tx,ty:i.ty,tz:i.tz,burn:i.burn,at:i.at,ph:i.ph,hull:s?t(i.hull):0,derelict:!!i.derelict,cargo:i.owner<0?i.cargo:void 0,xp:s&&i.xp||0,dest:s&&!r&&i.order&&i.order.body!=null&&(qt(n,e,"signals")||rr(n,e,"ansible"))?i.order.body:null,out:s?i.out:null,seen:i.seen[e],phase:i.phase,...r?{cargo:i.cargo,src:i.src,dv:t(i.dv),torps:i.torps,stores:i.stores,order:i.order,ready:i.ready,pend:i.pending?i.pending.o.body??-1:void 0,grp:i.grp,torpsFree:i.torpsFree,fireFree:i.fireFree,evade:i.evade,shape:i.shape,board:i.board,tau:i.tau}:{}}}),torps:n.torps.map(i=>({id:i.id,owner:i.owner,x:t(i.x),y:t(i.y),z:t(i.z),vx:t(i.vx),vy:t(i.vy),vz:t(i.vz),burn:i.burn})),events:n.events.filter(i=>i.t>n.time-1.5),fx:n.fx.slice()}}function ap(n,e,t){n.time=e.time,n.over=e.over,n.credits[t]=e.credits,n.tech[t]=e.tech,n.megaDone=e.megaDone||{},n.strikes=e.strikes||[],e.blackout&&(n.blackout=e.blackout),e.strikeReady&&(n.strikeReady=e.strikeReady),n.agents=e.agents||[],e.series&&(n.series=e.series),n.alive=e.alive,n.stats=e.stats,e.bodies.forEach((s,o)=>Object.assign(n.bodies[o],s));for(const s of n.bodies)s.home&&s.owner>=0&&(n.homes[s.owner]=s);const i=new Map(n.ships.map(s=>[s.id,s]));n.ships=e.ships.map(s=>{const o=i.get(s.id)||{seen:Array(n.players).fill(0),out:{drive:0,reactor:0,weapons:0,sensors:0},cd:[],kills:0};return Object.assign(o,s),s.out||(o.out={drive:0,reactor:0,weapons:0,sensors:0}),o.seen=Array(n.players).fill(0),o.seen[t]=s.seen,o.seen[o.owner]=2,o.cls=s.cls||"frigate",o.unknown=!s.cls,o.st=Kr(n,o.owner,o.cls),o}),n.torps=e.torps;const r=n.lastEvT||-1;for(const s of e.events)s.t>r&&n.events.push(s);e.events.length&&(n.lastEvT=Math.max(r,...e.events.map(s=>s.t)));for(const s of e.fx)ai(n,s);n.homes=Array.from({length:n.players},(s,o)=>n.bodies.find(c=>c.home&&c.owner===o)||null)}const Yg=Object.freeze(Object.defineProperty({__proto__:null,AGENT:Fn,BATTERY_DMG:Nd,BUILDABLE:F0,CAPITAL_SHIPS:zd,CLASSES:Ln,DAY:Ca,DT:Mi,FACTIONS:ii,FACTION_KEYS:Ra,GM_SUN:ds,MEGA:un,MEGA_KEYS:O0,NEUTRAL:ct,PROFILES:hs,RULES:Ae,SPREAD:z0,STRIKE_NAME:B0,SUN_R:Vr,TECH:Qn,TECH_COST:xo,TECH_KEYS:co,TECH_TIME:_u,TRAITS:fs,TUNE:vo,advance:Kd,agentAt:ka,agentCap:W0,applySnapshot:ap,armed:Yr,batteryGuns:Pa,batteryMax:Xn,blackedOut:ef,blocked:Ol,boardChance:qd,buildSpeed:_o,buildStructure:Dr,buyWorld:Xd,cancelShip:Gd,cantBlackout:Fa,cantBuild:Ji,cantBuyWorld:Na,cantDemolish:dc,cantMega:So,cantOrderShip:Ia,cantResearch:Po,cantSabotage:Mo,cantSendAgent:bo,cantStrike:za,cantUpgrade:os,capture:Jd,createGame:bs,crippled:as,dailySeed:ga,demolish:V0,dist:Eg,dryRun:ms,fireStrike:nf,fleetCap:La,fleetSize:Da,has:ki,haulBonus:ac,homeOf:Rg,incomeBreakdown:lc,incomeOf:$r,intercepts:np,kepler:kd,kindOf:G0,knows:qt,megaName:ci,megaOf:rr,megaSpeed:fc,note:Lt,orbitOffset:Ud,orderShip:Hd,parkRadius:vr,placesOf:Xr,posAt:sn,prepare:Qd,rankOf:Ci,recallAgent:$0,research:Vd,researchSpeed:oc,rng:qi,routes:uo,sabotage:$d,salvo:bu,scrapValue:uc,scuttle:Ig,sendAgent:Fl,setAgentOp:Wd,setOrder:fn,setStance:ep,shipById:Dt,shipCost:qr,shipTime:Bd,shipsAt:J0,slipsOf:zl,slotsOf:Fd,snapshot:op,spawnShip:Jt,starPos:Cg,startBlackout:rf,startMega:tf,statsFor:Kr,step:sp,strength:ro,strikePos:so,structure:Ai,tally:Oi,techOption:sc,upgrade:ia,upgradeCost:Ro,upkeepOf:Od,velAt:yo,warshipsOf:cc,wells:Yd,working:Wr,worldPrice:kr,worldSight:Nl,worldsOf:is,yieldTime:jd},Symbol.toStringTag,{value:"Module"})),va={cadet:{name:"Cadet",think:9,skill:.35,eco:.6,calm:720,margin:1.6},easy:{name:"Easy",think:6,skill:.6,eco:.8,calm:400,margin:1.4},normal:{name:"Normal",think:3.5,skill:.8,eco:1,calm:180,margin:1.25},hard:{name:"Hard",think:2,skill:.95,eco:1.3,calm:0,margin:1.15,smart:!0},brutal:{name:"Brutal",think:1.2,skill:1,eco:1.7,calm:0,margin:1.1,smart:!0}},sf=Object.keys(va),Kg={concord:["plate","flak","tanks","torch","network","longwatch","deepmine","wareco","sabot","fifth"],boreal:["flash","torch","plate","swarm","coldrun","longwatch","bulk","wareco","rings","cipher"],holds:["wolfpack","swarm","tanks","coldjets","coldrun","jammers","deepmine","arcology","rings","cipher"]},Yf={tanks:"range",flash:"speed",coldjets:"stealth",torch:"speed",wolfpack:"small",plate:"tough",swarm:"small",flak:"tough",coldrun:"stealth",network:"worlds",jammers:"stealth",longwatch:"guns",deepmine:"worlds",bulk:"worlds",arcology:"numbers",wareco:"capital",sabot:"spy",rings:"worlds",fifth:"spy",cipher:"guns"};function Zg(n,e,t,i){const r=ii[n.factions[e]],s=Math.max(1,t.length);return{speed:r.accel||1,range:1/(r.dv||1),tough:(r.hull||1)+(r.armour||0)/10,stealth:1/(r.sig||1),guns:r.rail||1,small:.6+t.filter(o=>o.cls==="corvette"||o.cls==="frigate").length/s,numbers:1/((r.cost||1)*(r.time||1))+(r.cap||0)*.2,capital:r.income||1,worlds:.7+i.length/10,spy:.9}}function jg(n,e){const t=ii[n.factions[e]],i={drives:(t.accel||1)*(t.dv||1),weapons:(t.rail||1)*((t.hull||1)+(t.armour||0)/10),sensors:1/(t.sig||1),industry:1/((t.cost||1)*(t.time||1)),intel:.9};return Object.keys(i).sort((r,s)=>i[s]-i[r])}function Jg(n,e,t){const i=Kr(n,e,t);return(i.rails.reduce((s,o)=>s+o,0)*i.railHit+i.tubes*2.5+i.pdc*.8*i.flak)*Math.sqrt((i.hull+i.armour*12)/100)}function Qg(n,e,t="normal",i=1){const r=va[t]||va.normal;return n.eco[e]=r.eco,{owner:e,level:t,d:r,clock:2+e,rand:qi(i*31+e*977),known:new Map}}const _i=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function ev(n,e,t){!n.alive[e.owner]||n.over||(e.clock-=t,!(e.clock>0)&&(e.clock=e.d.think*(.8+e.rand()*.4),tv(n,e)))}function tv(n,e){const t=e.owner,i=e.d,r=()=>e.rand()<i.skill,s=n.homes[t];if(!s)return;const o=is(n,t),c=cc(n,t),a=n.time;for(const F of n.ships)F.owner===t||F.st.civil||!F.seen[t]||e.known.set(F.id,{owner:F.owner,str:F.seen[t]===2?ro(F):2,t:a,x:F.x,y:F.y,z:F.z,at:F.at});for(const[F,ne]of e.known)(a-ne.t>300||!n.ships.some(ge=>ge.id===F))&&e.known.delete(F);const u=F=>{let ne=0;for(const ge of e.known.values())(F===void 0||ge.owner===F)&&(ne+=ge.str);return ne};nv(n,e,s,o,c,r);const l=F=>F.dv<Math.max(F.st.dv*.3,6)||F.hull<F.st.hull*.45||F.st.mag>0&&F.torps===0&&F.st.mag>=8||Object.values(F.out).some(ne=>ne>1e8),h=F=>{let ne=s,ge=1e9;for(const ve of o){if(ve.blockaded)continue;const we=n.bp[ve.id],Y=_i(we,F)+(ki(ve,"yard")||ve.home?0:200);Y<ge&&(ge=Y,ne=ve)}return ne},d=[],f=c.filter(F=>F.at===null&&(F.dv<=.01||F.out.drive>1e8||F.out.reactor>1e8)),m=c.filter(F=>F.st.stores&&F.out.drive<=0&&F.out.reactor<=0);for(const F of f){F.dry=F.dry||a;const ne=m.find(ge=>ge.dv>20&&(!ge.order||ge.order.ship===F.id));ne&&!ne.order&&fn(n,t,[ne.id],{type:"attack",ship:F.id,mode:"match",d0:1.5,profile:"cruise"})}for(const F of c){if(f.includes(F))continue;if(F.dry=0,F.at!==null&&n.bodies[F.at].owner!==t||e.siege!=null&&F.order&&(F.order.body??F.order.then?.body)===e.siege?F.hull<F.st.hull*.3:l(F)){const ve=h(F);if(F.at===ve.id)continue;if(!F.order||F.order.body!==ve.id){const we=uo(n,[F.id],ve.id).filter(ee=>ee.reach).sort((ee,Me)=>ee.dv-Me.dv),Y=we.find(ee=>ee.ok)||we[0];Y&&fn(n,t,[F.id],{type:"orbit",body:ve.id,profile:Y.profile,via:Y.via,side:Y.side})}continue}if(F.st.stores){F.order&&F.order.type==="attack"&&!f.some(ve=>ve.id===F.order.ship)&&fn(n,t,[F.id],{type:"orbit",body:s.id,profile:"cruise"});continue}d.push(F)}if(!d.length)return;const y=n.homes.filter((F,ne)=>F&&ne!==t&&n.alive[ne]).sort((F,ne)=>_i(n.bp[F.id],n.bp[s.id])-_i(n.bp[ne.id],n.bp[s.id]))[0],x=n.bodies.some(F=>F.owner>=0&&F.owner!==t&&F.mega&&F.mega.key==="ark"&&(F.mega.done||F.mega.left<F.mega.total*.5));if(r()){const ne=n.homes.filter((ge,ve)=>ge&&ve!==t&&n.alive[ve]).sort((ge,ve)=>is(n,ve.owner).length-is(n,ge.owner).length).find(ge=>!za(n,t,ge));ne&&nf(n,t,ne),e.siege!=null&&!Fa(n,t)&&c.some(ge=>ge.order&&ge.order.body===e.siege&&ge.at===null)&&rf(n,t)}const p=a>900&&!!y&&(x||o.length>=2*is(n,y.owner).length||Da(n,t)>=La(n,t)-1&&n.credits[t]>3e3),g=p||e.siege!=null?[]:d.filter(F=>F.cls==="corvette"),b=d.filter(F=>!g.includes(F)||g.length===d.length);if(r())for(const F of g){if(F.order&&F.order.type==="attack")continue;let ne=null,ge=320;for(const ve of n.ships){if(ve.owner===t||!ve.st.civil||!ve.seen[t])continue;const we=_i(ve,F)*(ve.owner<0?3:1);we<ge&&(ge=we,ne=ve)}if(ne&&a>i.calm){fn(n,t,[F.id],{type:"attack",ship:ne.id,mode:"match",d0:1.2,profile:"hard"});continue}if(!F.order&&(F.at===null||n.bodies[F.at].owner===t)){let ve=null,we=1e9;for(const Y of n.bodies){if(Y.owner!==ct||Xn(Y)>0||n.ships.some(Me=>Me.owner===t&&(Me.at===Y.id||Me.order&&Me.order.body===Y.id)))continue;const ee=_i(n.bp[Y.id],F);ee<we&&(we=ee,ve=Y)}if(ve){const Y=uo(n,[F.id],ve.id).filter(ee=>ee.ok&&ee.dv<F.dv*.5).sort((ee,Me)=>ee.time-Me.time)[0];Y&&fn(n,t,[F.id],{type:"orbit",body:ve.id,profile:Y.profile,via:Y.via,side:Y.side})}}}let v=null,M=0;for(const[F,ne]of e.known)if(!(a-ne.t>12))for(const ge of o){const ve=n.bp[ge.id];if(_i(ve,ne)<(ge.home?200:110)){const we=[...e.known.values()].filter(Y=>a-Y.t<12&&_i(Y,ne)<40).reduce((Y,ee)=>Y+ee.str,0);we>M&&(M=we,v={id:F,k:ne,b:ge})}}const S=F=>F.reduce((ne,ge)=>ne+ro(ge),0);if(v&&r()&&(!p||v.b.home)){const F=n.ships.find(we=>we.id===v.id),ne=b.filter(we=>_i(we,v.k)<600&&!(we.order&&we.order.type==="attack")&&!(we.at!==null&&n.bodies[we.at].owner!==t)&&!(we.order&&(we.order.body===e.siege||we.order.type==="form"))&&!(e.siege!=null&&we.grp===e.siegeGrp)).sort((we,Y)=>_i(we,v.k)-_i(Y,v.k)),ge=[];let ve=0;for(const we of ne){if(ve>=M*1.5+.5)break;ge.push(we),ve+=ro(we)}F&&ge.length&&(ve>=M*.8||v.b.home)&&fn(n,t,ge.map(we=>we.id),{type:"attack",ship:F.id,mode:"match",d0:3,profile:"hard"})}const A=new Map;for(const F of b)F.at!==null&&!F.order&&A.set(F.at,[...A.get(F.at)||[],F]);let _=null;for(const F of A.values())(!_||S(F)>S(_))&&(_=F);p&&e.siege==null&&(_=A.get(s.id)||null);const E=F=>F.order?F.order.body??F.order.then?.body??null:null;if(e.siege==null&&p&&a>(e.allInT||0)&&b.length>=4&&r()){const F=y;if(_&&n.bodies[_[0].at].owner===t&&_.length>=Math.max(4,Math.ceil(b.length*.6))){const ne=[..._,...m.filter(ge=>ge.at===_[0].at&&!ge.order)].map(ge=>ge.id);fn(n,t,ne,{type:"orbit",body:F.id,profile:"cruise"}),e.siege=F.id,e.siegeGrp=_[0].grp,e.allIn=!0,e.allInT=a+420;return}}if(e.siege!=null){const F=n.bodies[e.siege],ne=c.filter(ge=>Yr(ge)&&(ge.at===F.id||E(ge)===F.id));if(F.owner===t||ne.length<(F.home?3:1)){F.owner!==t&&ne.length&&fn(n,t,ne.map(ge=>ge.id),{type:"orbit",body:s.id,profile:"hard"}),e.siege=null,e.allIn=!1,e.allInT=a+240;return}}const P=!p&&_&&n.bodies[_[0].at].owner===t?n.bodies[_[0].at]:s;for(const F of b)F.order||_&&_.includes(F)||F.at===P.id||F.at!==null&&n.bodies[F.at].owner!==t||fn(n,t,[F.id],{type:"orbit",body:P.id,profile:"cruise"});if(!_||!r())return;const L=n.bodies[_[0].at];if(L.owner!==t){const F=J0(n,L).filter(ge=>ge.owner!==t&&Yr(ge)).reduce((ge,ve)=>ge+ro(ve),0)+L.bhp/60,ne=b.filter(ge=>ge.at===L.id||ge.order&&ge.order.body===L.id);F>S(ne)*1.6&&!(e.allIn&&L.id===e.siege)&&fn(n,t,ne.map(ge=>ge.id),{type:"orbit",body:s.id,profile:"hard"});return}const D=S(_);if(e.siege!=null&&L.id!==e.siege&&n.bodies[e.siege].owner!==t){_.length>=3&&fn(n,t,[..._,...m.filter(F=>F.at===L.id&&!F.order)].map(F=>F.id),{type:"orbit",body:e.siege,profile:"cruise"});return}const H=a>3e3?.25:a>2100?.4:a>1500?.6:a>900?.85:1,C=i.margin*H;if(D<S(b)*.7)return;const I=m.filter(F=>F.at===L.id&&!F.order);let O=null,$=0;const oe=n.bp[L.id];for(const F of n.bodies){if(F.owner===t)continue;const ne=F.owner!==ct;if(ne&&a<i.calm)continue;const ge=n.bp[F.id],ve=F.bhp/60+[...e.known.values()].filter(ee=>ee.at===F.id&&a-ee.t<60).reduce((ee,Me)=>ee+Me.str,0);if(ne&&D<u(F.owner)*.7*H||F.home&&ne&&_.length<4)continue;if(F.home&&ne){const ee=o.length>=2*is(n,F.owner).length&&a>1200,Me=(F.bhp/150+Pa(F)*.9+Math.max(2,u(F.owner)))*C*(ee?.7:1);if(D<Me)continue;const ue=(ee?500:50)*(F.mega?F.mega.key==="ark"?20:3:1)/(1+_i(ge,oe)/800);ue>$&&($=ue,O=F);continue}if(D<ve*C+.5)continue;const Y=($r(F)+(F.kind==="planet"?1.2:F.kind==="station"?.8:.3)+(ne?.4:0)+(Ai(F,"yard")?1:0))/(1+_i(ge,oe)/220+ve*.6);Y>$&&($=Y,O=F)}if(!O)return;const Z=[..._,...I].map(F=>F.id),te=uo(n,Z,O.id).filter(F=>F.ok&&F.dv<Math.min(..._.map(ne=>ne.dv))*(O.home?.8:.6));if(!te.length)return;const le=i.smart&&te.find(F=>F.key==="sling")||te.find(F=>F.key===(O.home?"hard":"cruise"))||te[0];fn(n,t,Z,{type:"orbit",body:O.id,profile:le.profile,via:le.via,side:le.side}),O.home&&O.owner!==ct&&(e.siege=O.id,e.siegeGrp=_[0].grp)}function nv(n,e,t,i,r,s){const o=e.owner,c=n.factions[o],a=()=>n.credits[o],u=i.filter(p=>ki(p,"yard")&&!p.blockaded),l=La(n,o),h=Da(n,o),d=()=>{{const p={};for(const M of r)p[M.cls]=(p[M.cls]||0)+1;for(const M of i)for(const S of M.queue)p[S.cls]=(p[S.cls]||0)+1;if(h>=4&&!p.tender&&e.d.skill>.7)return"tender";if(h>=5&&(p.escort||0)<h/6)return"escort";const g=h>=l-2||a()>2500?1:0;let b="frigate",v=-1e9;for(const M of["corvette","frigate","escort","battleship"]){const S=Ln[M];if(S.needs&&!qt(n,o,S.needs))continue;const A=(p[M]||0)/Math.max(1,h),_=Jg(n,o,M),E=(g?_/Xr(M):_/qr(n,o,M)*300)*(A>.45?.2:1-A*.8);E>v&&(v=E,b=M)}return b}};if(h<l&&u.length){const p=d(),g=u.reduce((b,v)=>v.queue.length<b.queue.length?v:b);if(g.queue.length<2&&!Ia(n,g,p)&&(h<4||a()>qr(n,o,p)+100)){Hd(n,g,p);return}}if(!s())return;const f=n.winBy==="ark",m=p=>n.bodies.some(g=>g.owner===o&&g.mega&&g.mega.key===p);if(f||h>=l-1){const p=f&&!m("ark")&&n.megaDone.ark==null?["ark"]:["spire","strike","fuelnet","ansible","blackout"];for(const g of p)for(const b of[t,...i.filter(v=>v!==t)])if(!So(n,b,g)){tf(n,b,g);return}}const y=f&&n.time>1200&&!m("ark")&&n.megaDone.ark==null&&a()>un.ark.cost*.3;if(h>=l&&a()>450)for(const p of i){if(p.blockaded)continue;if(!Ji(n,p,"habitat")){Dr(n,p,"habitat");return}const g=Ai(p,"habitat");if(g&&!os(n,p,g)){ia(n,p,g);return}}for(const p of i)if(!p.blockaded)for(const g of["mine","refinery"]){if(!Ji(n,p,g)){Dr(n,p,g);return}const b=Ai(p,g);if(b&&h>=3&&!os(n,p,b)&&a()>Ro(b)+150){ia(n,p,b);return}}if(y)return;const x=n.tech[o];if(!x.project&&h>=3){const p=jg(n,o).filter(g=>x[g]<Qn[g].tiers.length).sort((g,b)=>x[g]-x[b])[0];if(p){const g=Qn[p].tiers[x[p]],b=Zg(n,o,r,i),v=b?[...g].sort((M,S)=>(b[Yf[S.key]]||1)-(b[Yf[M.key]]||1))[0]:g.find(M=>Kg[c].includes(M.key))||g[0];if(!Po(n,o,p,v.key)&&a()>xo[x[p]]+120){Vd(n,o,p,v.key);return}}}if(a()>500&&h>=3){for(const p of i)if(!p.blockaded){for(const g of["lab","exchange"])if(!Ji(n,p,g)&&p.structures.length<4){Dr(n,p,g);return}}}if(e.d.skill>.5){for(const p of n.agents){if(p.owner!==o||p.at>n.time)continue;const g=n.bodies[p.body];if(g.owner===ct){if(!Na(n,o,g)&&a()>kr(n,g)+250){Xd(n,o,g);return}continue}const b=n.ships.some(M=>M.at===g.id&&M.owner===o);if(b&&g.bhp>0&&!Mo(n,o,g,"battery")){$d(n,o,g,"battery");return}const v=b&&qt(n,o,"fifth")?"incite":qt(n,o,"rings")?"steal":"watch";p.op!==v&&Wd(n,o,g,v)}if(a()>600){const p=n.homes.find((b,v)=>b&&v!==o&&n.alive[v]&&!ka(n,o,b));if(p&&!bo(n,o,p)&&!n.agents.some(b=>b.owner===o&&n.bodies[b.body].owner!==ct)){Fl(n,o,p);return}const g=n.bodies.filter(b=>b.owner===ct&&!bo(n,o,b)&&a()>kr(n,b)+400).sort((b,v)=>kr(n,b)-kr(n,v));if(g.length){Fl(n,o,g[0]);return}}}if(a()>700&&h>=l-1)for(const p of i){if(!p.home&&p.kind==="planet"&&!Ji(n,p,"yard")&&u.length<2){Dr(n,p,"yard");return}if(!Ji(n,p,"battery")&&(p.kind==="planet"||p.kind==="station")){Dr(n,p,"battery");return}const g=Ai(p,"yard");if(g&&!os(n,p,g)){ia(n,p,g);return}if(p.home&&!Ji(n,p,"array")){Dr(n,p,"array");return}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="186",iv=0,Kf=1,rv=2,Ml=1,sv=2,Qo=3,gs=0,ni=1,li=2,hr=0,ra=1,ui=2,Zf=3,jf=4,ov=5,no=100,av=101,lv=102,cv=103,uv=104,dv=200,fv=201,hv=202,pv=203,lp=204,cp=205,mv=206,gv=207,vv=208,xv=209,yv=210,_v=211,bv=212,Mv=213,Sv=214,Tu=0,Eu=1,Au=2,xa=3,Cu=4,Ru=5,Pu=6,Lu=7,up=0,wv=1,Tv=2,ir=0,dp=1,fp=2,hp=3,pp=4,mp=5,gp=6,vp=7,xp=300,vs=301,wo=302,Ec=303,Ac=304,hc=306,ya=1e3,tr=1001,Du=1002,Nn=1003,Ev=1004,Ga=1005,yn=1006,Cc=1007,Ur=1008,ti=1009,yp=1010,_p=1011,_a=1012,af=1013,$i=1014,zi=1015,Ri=1016,lf=1017,cf=1018,ba=1020,bp=35902,Mp=35899,Sp=1021,wp=1022,Ti=1023,xr=1026,ss=1027,uf=1028,df=1029,xs=1030,ff=1031,hf=1033,Sl=33776,wl=33777,Tl=33778,El=33779,Iu=35840,ku=35841,Uu=35842,Nu=35843,zu=36196,Fu=37492,Ou=37496,Bu=37488,Hu=37489,Bl=37490,Gu=37491,Vu=37808,Wu=37809,$u=37810,Xu=37811,qu=37812,Yu=37813,Ku=37814,Zu=37815,ju=37816,Ju=37817,Qu=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,od=36283,ad=36284,Hl=36285,ld=36286,Av=3200,cd=0,Cv=1,Ir="",ei="srgb",Gl="srgb-linear",Vl="linear",Ht="srgb",Rc=7680,Rv=519,Pv=512,Lv=513,Dv=514,pf=515,Iv=516,kv=517,mf=518,Uv=519,Tp=35044,Lr=35048,Jf="300 es",nr=2e3,Ma=2001;function Nv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zv(){const n=Wl("canvas");return n.style.display="block",n}const Qf={};function $l(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ep(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ht(...n){n=Ep(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ut(...n){n=Ep(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fo(...n){const e=n.join(" ");e in Qf||(Qf[e]=!0,ht(...n))}function Fv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ov={[Tu]:Eu,[Au]:Pu,[Cu]:Lu,[xa]:Ru,[Eu]:Tu,[Pu]:Au,[Lu]:Cu,[Ru]:xa};class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const sa=Math.PI/180,Sa=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function gf(n,e){return(n%e+e)%e}function Bv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Hv(n,e,t){return n!==e?(t-n)/(e-n):0}function oa(n,e,t){return(1-t)*n+t*e}function Gv(n,e,t,i){return oa(n,e,1-Math.exp(-t*i))}function Vv(n,e=1){return e-Math.abs(gf(n,e*2)-e)}function Wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qv(n,e){return n+Math.random()*(e-n)}function Yv(n){return n*(.5-Math.random())}function Kv(n){n!==void 0&&(eh=n);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zv(n){return n*sa}function jv(n){return n*Sa}function Jv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Qv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ex(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tx(n,e,t,i,r){const s=Math.cos,o=Math.sin,c=s(t/2),a=o(t/2),u=s((e+i)/2),l=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(c*l,a*h,a*d,c*u);break;case"YZY":n.set(a*d,c*l,a*h,c*u);break;case"ZXZ":n.set(a*h,a*d,c*l,c*u);break;case"XZX":n.set(c*l,a*m,a*f,c*u);break;case"YXY":n.set(a*f,c*l,a*m,c*u);break;case"ZYZ":n.set(a*m,a*f,c*l,c*u);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _n={DEG2RAD:sa,RAD2DEG:Sa,generateUUID:pr,clamp:wt,euclideanModulo:gf,mapLinear:Bv,inverseLerp:Hv,lerp:oa,damp:Gv,pingpong:Vv,smoothstep:Wv,smootherstep:$v,randInt:Xv,randFloat:qv,randFloatSpread:Yv,seededRandom:Kv,degToRad:Zv,radToDeg:jv,isPowerOfTwo:Jv,ceilPowerOfTwo:Qv,floorPowerOfTwo:ex,setQuaternionFromProperEuler:tx,normalize:Vt,denormalize:Ui},Nf=class Nf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nf.prototype.isVector2=!0;let rt=Nf;class $n{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,c){let a=i[r+0],u=i[r+1],l=i[r+2],h=i[r+3],d=s[o+0],f=s[o+1],m=s[o+2],y=s[o+3];if(h!==y||a!==d||u!==f||l!==m){let x=a*d+u*f+l*m+h*y;x<0&&(d=-d,f=-f,m=-m,y=-y,x=-x);let p=1-c;if(x<.9995){const g=Math.acos(x),b=Math.sin(g);p=Math.sin(p*g)/b,c=Math.sin(c*g)/b,a=a*p+d*c,u=u*p+f*c,l=l*p+m*c,h=h*p+y*c}else{a=a*p+d*c,u=u*p+f*c,l=l*p+m*c,h=h*p+y*c;const g=1/Math.sqrt(a*a+u*u+l*l+h*h);a*=g,u*=g,l*=g,h*=g}}e[t]=a,e[t+1]=u,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const c=i[r],a=i[r+1],u=i[r+2],l=i[r+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=c*m+l*h+a*f-u*d,e[t+1]=a*m+l*d+u*h-c*f,e[t+2]=u*m+l*f+c*d-a*h,e[t+3]=l*m-c*h-a*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,a=Math.sin,u=c(i/2),l=c(r/2),h=c(s/2),d=a(i/2),f=a(r/2),m=a(s/2);switch(o){case"XYZ":this._x=d*l*h+u*f*m,this._y=u*f*h-d*l*m,this._z=u*l*m+d*f*h,this._w=u*l*h-d*f*m;break;case"YXZ":this._x=d*l*h+u*f*m,this._y=u*f*h-d*l*m,this._z=u*l*m-d*f*h,this._w=u*l*h+d*f*m;break;case"ZXY":this._x=d*l*h-u*f*m,this._y=u*f*h+d*l*m,this._z=u*l*m+d*f*h,this._w=u*l*h-d*f*m;break;case"ZYX":this._x=d*l*h-u*f*m,this._y=u*f*h+d*l*m,this._z=u*l*m-d*f*h,this._w=u*l*h+d*f*m;break;case"YZX":this._x=d*l*h+u*f*m,this._y=u*f*h+d*l*m,this._z=u*l*m-d*f*h,this._w=u*l*h-d*f*m;break;case"XZY":this._x=d*l*h-u*f*m,this._y=u*f*h-d*l*m,this._z=u*l*m+d*f*h,this._w=u*l*h+d*f*m;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],c=t[5],a=t[9],u=t[2],l=t[6],h=t[10],d=i+c+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-a)*f,this._y=(s-u)*f,this._z=(o-r)*f}else if(i>c&&i>h){const f=2*Math.sqrt(1+i-c-h);this._w=(l-a)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+u)/f}else if(c>h){const f=2*Math.sqrt(1+c-i-h);this._w=(s-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(a+l)/f}else{const f=2*Math.sqrt(1+h-i-c);this._w=(o-r)/f,this._x=(s+u)/f,this._y=(a+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,c=t._x,a=t._y,u=t._z,l=t._w;return this._x=i*l+o*c+r*u-s*a,this._y=r*l+o*a+s*c-i*u,this._z=s*l+o*u+i*a-r*c,this._w=o*l-i*c-r*a-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(i=-i,r=-r,s=-s,o=-o,c=-c);let a=1-t;if(c<.9995){const u=Math.acos(c),l=Math.sin(u);a=Math.sin(a*u)/l,t=Math.sin(t*u)/l,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+s*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+s*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zf=class zf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,c=e.z,a=e.w,u=2*(o*r-c*i),l=2*(c*t-s*r),h=2*(s*i-o*t);return this.x=t+a*u+o*h-c*l,this.y=i+a*l+c*u-s*h,this.z=r+a*h+s*l-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,c=t.y,a=t.z;return this.x=r*a-s*c,this.y=s*o-i*a,this.z=i*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zf.prototype.isVector3=!0;let U=zf;const Pc=new U,th=new $n,Ff=class Ff{constructor(e,t,i,r,s,o,c,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,c,a,u)}set(e,t,i,r,s,o,c,a,u){const l=this.elements;return l[0]=e,l[1]=r,l[2]=c,l[3]=t,l[4]=s,l[5]=a,l[6]=i,l[7]=o,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],c=i[3],a=i[6],u=i[1],l=i[4],h=i[7],d=i[2],f=i[5],m=i[8],y=r[0],x=r[3],p=r[6],g=r[1],b=r[4],v=r[7],M=r[2],S=r[5],A=r[8];return s[0]=o*y+c*g+a*M,s[3]=o*x+c*b+a*S,s[6]=o*p+c*v+a*A,s[1]=u*y+l*g+h*M,s[4]=u*x+l*b+h*S,s[7]=u*p+l*v+h*A,s[2]=d*y+f*g+m*M,s[5]=d*x+f*b+m*S,s[8]=d*p+f*v+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],a=e[6],u=e[7],l=e[8];return t*o*l-t*c*u-i*s*l+i*c*a+r*s*u-r*o*a}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],a=e[6],u=e[7],l=e[8],h=l*o-c*u,d=c*a-l*s,f=u*s-o*a,m=t*h+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=h*y,e[1]=(r*u-l*i)*y,e[2]=(c*i-r*o)*y,e[3]=d*y,e[4]=(l*t-r*a)*y,e[5]=(r*s-c*t)*y,e[6]=f*y,e[7]=(i*a-u*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,c){const a=Math.cos(s),u=Math.sin(s);return this.set(i*a,i*u,-i*(a*o+u*c)+o+e,-r*u,r*a,-r*(-u*o+a*c)+c+t,0,0,1),this}scale(e,t){return fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ff.prototype.isMatrix3=!0;let gt=Ff;const Lc=new gt,nh=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){const n={enabled:!0,workingColorSpace:Gl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ht&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(r.r=ho(r.r),r.g=ho(r.g),r.b=ho(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?Vl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gl]:{primaries:e,whitePoint:i,transfer:Vl,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}const Pt=nx();function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ls;class ix{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=Wl("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class vf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(Dc(r[o].image)):s.push(Dc(r[o]))}else s=Dc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ix.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let sx=0;const Ic=new U;class qn extends Ms{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,i=tr,r=tr,s=yn,o=Ur,c=Ti,a=ti,u=qn.DEFAULT_ANISOTROPY,l=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=pr(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=a,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=xp;qn.DEFAULT_ANISOTROPY=1;const Of=class Of{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const a=e.elements,u=a[0],l=a[4],h=a[8],d=a[1],f=a[5],m=a[9],y=a[2],x=a[6],p=a[10];if(Math.abs(l-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-x)<.01){if(Math.abs(l+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+x)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,v=(f+1)/2,M=(p+1)/2,S=(l+d)/4,A=(h+y)/4,_=(m+x)/4;return b>v&&b>M?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=S/i,s=A/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=S/r,s=_/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=_/s),this.set(i,r,s,t),this}let g=Math.sqrt((x-m)*(x-m)+(h-y)*(h-y)+(d-l)*(d-l));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(h-y)/g,this.z=(d-l)/g,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Of.prototype.isVector4=!0;let Yt=Of;class ox extends Ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new qn(r),o=i.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new vf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends ox{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ap extends qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ax extends qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rc=class rc{constructor(e,t,i,r,s,o,c,a,u,l,h,d,f,m,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,c,a,u,l,h,d,f,m,y,x)}set(e,t,i,r,s,o,c,a,u,l,h,d,f,m,y,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=c,p[13]=a,p[2]=u,p[6]=l,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),c=Math.sin(i),a=Math.cos(r),u=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*l,f=o*h,m=c*l,y=c*h;t[0]=a*l,t[4]=-a*h,t[8]=u,t[1]=f+m*u,t[5]=d-y*u,t[9]=-c*a,t[2]=y-d*u,t[6]=m+f*u,t[10]=o*a}else if(e.order==="YXZ"){const d=a*l,f=a*h,m=u*l,y=u*h;t[0]=d+y*c,t[4]=m*c-f,t[8]=o*u,t[1]=o*h,t[5]=o*l,t[9]=-c,t[2]=f*c-m,t[6]=y+d*c,t[10]=o*a}else if(e.order==="ZXY"){const d=a*l,f=a*h,m=u*l,y=u*h;t[0]=d-y*c,t[4]=-o*h,t[8]=m+f*c,t[1]=f+m*c,t[5]=o*l,t[9]=y-d*c,t[2]=-o*u,t[6]=c,t[10]=o*a}else if(e.order==="ZYX"){const d=o*l,f=o*h,m=c*l,y=c*h;t[0]=a*l,t[4]=m*u-f,t[8]=d*u+y,t[1]=a*h,t[5]=y*u+d,t[9]=f*u-m,t[2]=-u,t[6]=c*a,t[10]=o*a}else if(e.order==="YZX"){const d=o*a,f=o*u,m=c*a,y=c*u;t[0]=a*l,t[4]=y-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*l,t[9]=-c*l,t[2]=-u*l,t[6]=f*h+m,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*a,f=o*u,m=c*a,y=c*u;t[0]=a*l,t[4]=-h,t[8]=u*l,t[1]=d*h+y,t[5]=o*l,t[9]=f*h-m,t[2]=m*h-f,t[6]=c*l,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lx,e,cx)}lookAt(e,t,i){const r=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Tr.crossVectors(i,pi),Tr.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Tr.crossVectors(i,pi)),Tr.normalize(),Va.crossVectors(pi,Tr),r[0]=Tr.x,r[4]=Va.x,r[8]=pi.x,r[1]=Tr.y,r[5]=Va.y,r[9]=pi.y,r[2]=Tr.z,r[6]=Va.z,r[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],c=i[4],a=i[8],u=i[12],l=i[1],h=i[5],d=i[9],f=i[13],m=i[2],y=i[6],x=i[10],p=i[14],g=i[3],b=i[7],v=i[11],M=i[15],S=r[0],A=r[4],_=r[8],E=r[12],P=r[1],L=r[5],D=r[9],H=r[13],C=r[2],I=r[6],O=r[10],$=r[14],oe=r[3],Z=r[7],te=r[11],le=r[15];return s[0]=o*S+c*P+a*C+u*oe,s[4]=o*A+c*L+a*I+u*Z,s[8]=o*_+c*D+a*O+u*te,s[12]=o*E+c*H+a*$+u*le,s[1]=l*S+h*P+d*C+f*oe,s[5]=l*A+h*L+d*I+f*Z,s[9]=l*_+h*D+d*O+f*te,s[13]=l*E+h*H+d*$+f*le,s[2]=m*S+y*P+x*C+p*oe,s[6]=m*A+y*L+x*I+p*Z,s[10]=m*_+y*D+x*O+p*te,s[14]=m*E+y*H+x*$+p*le,s[3]=g*S+b*P+v*C+M*oe,s[7]=g*A+b*L+v*I+M*Z,s[11]=g*_+b*D+v*O+M*te,s[15]=g*E+b*H+v*$+M*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],c=e[5],a=e[9],u=e[13],l=e[2],h=e[6],d=e[10],f=e[14],m=e[3],y=e[7],x=e[11],p=e[15],g=a*f-u*d,b=c*f-u*h,v=c*d-a*h,M=o*f-u*l,S=o*d-a*l,A=o*h-c*l;return t*(y*g-x*b+p*v)-i*(m*g-x*M+p*S)+r*(m*b-y*M+p*A)-s*(m*v-y*S+x*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],c=e[9],a=e[2],u=e[6],l=e[10];return t*(o*l-c*u)-i*(s*l-c*a)+r*(s*u-o*a)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],a=e[6],u=e[7],l=e[8],h=e[9],d=e[10],f=e[11],m=e[12],y=e[13],x=e[14],p=e[15],g=t*c-i*o,b=t*a-r*o,v=t*u-s*o,M=i*a-r*c,S=i*u-s*c,A=r*u-s*a,_=l*y-h*m,E=l*x-d*m,P=l*p-f*m,L=h*x-d*y,D=h*p-f*y,H=d*p-f*x,C=g*H-b*D+v*L+M*P-S*E+A*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=(c*H-a*D+u*L)*I,e[1]=(r*D-i*H-s*L)*I,e[2]=(y*A-x*S+p*M)*I,e[3]=(d*S-h*A-f*M)*I,e[4]=(a*P-o*H-u*E)*I,e[5]=(t*H-r*P+s*E)*I,e[6]=(x*v-m*A-p*b)*I,e[7]=(l*A-d*v+f*b)*I,e[8]=(o*D-c*P+u*_)*I,e[9]=(i*P-t*D-s*_)*I,e[10]=(m*S-y*v+p*g)*I,e[11]=(h*v-l*S-f*g)*I,e[12]=(c*E-o*L-a*_)*I,e[13]=(t*L-i*E+r*_)*I,e[14]=(y*b-m*M-x*g)*I,e[15]=(l*M-h*b+d*g)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,c=e.y,a=e.z,u=s*o,l=s*c;return this.set(u*o+i,u*c-r*a,u*a+r*c,0,u*c+r*a,l*c+i,l*a-r*o,0,u*a-r*c,l*a+r*o,s*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,c=t._z,a=t._w,u=s+s,l=o+o,h=c+c,d=s*u,f=s*l,m=s*h,y=o*l,x=o*h,p=c*h,g=a*u,b=a*l,v=a*h,M=i.x,S=i.y,A=i.z;return r[0]=(1-(y+p))*M,r[1]=(f+v)*M,r[2]=(m-b)*M,r[3]=0,r[4]=(f-v)*S,r[5]=(1-(d+p))*S,r[6]=(x+g)*S,r[7]=0,r[8]=(m+b)*A,r[9]=(x-g)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ds.set(r[0],r[1],r[2]).length();const c=Ds.set(r[4],r[5],r[6]).length(),a=Ds.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Li.copy(this);const u=1/o,l=1/c,h=1/a;return Li.elements[0]*=u,Li.elements[1]*=u,Li.elements[2]*=u,Li.elements[4]*=l,Li.elements[5]*=l,Li.elements[6]*=l,Li.elements[8]*=h,Li.elements[9]*=h,Li.elements[10]*=h,t.setFromRotationMatrix(Li),i.x=o,i.y=c,i.z=a,this}makePerspective(e,t,i,r,s,o,c=nr,a=!1){const u=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,y;if(a)m=s/(o-s),y=o*s/(o-s);else if(c===nr)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(c===Ma)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=l,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,c=nr,a=!1){const u=this.elements,l=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let m,y;if(a)m=1/(o-s),y=o/(o-s);else if(c===nr)m=-2/(o-s),y=-(o+s)/(o-s);else if(c===Ma)m=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=l,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=m,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};rc.prototype.isMatrix4=!0;let It=rc;const Ds=new U,Li=new It,lx=new U(0,0,0),cx=new U(1,1,1),Tr=new U,Va=new U,pi=new U,rh=new It,sh=new $n;class yr{constructor(e=0,t=0,i=0,r=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],a=r[1],u=r[5],l=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ux=0;const oh=new U,Is=new $n,or=new It,Wa=new U,Uo=new U,dx=new U,fx=new $n,ah=new U(1,0,0),lh=new U(0,1,0),ch=new U(0,0,1),uh={type:"added"},hx={type:"removed"},ks={type:"childadded",child:null},kc={type:"childremoved",child:null};class Yn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new U,t=new yr,i=new $n,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new gt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(Uo,Wa,this.up):or.lookAt(Wa,Uo,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(or),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hx),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,a){return c[a.uuid]===void 0&&(c[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const a=c.shapes;if(Array.isArray(a))for(let u=0,l=a.length;u<l;u++){const h=a[u];s(e.shapes,h)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let a=0,u=this.material.length;a<u;a++)c.push(s(e.materials,this.material[a]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const a=this.animations[c];r.animations.push(s(e.animations,a))}}if(t){const c=o(e.geometries),a=o(e.materials),u=o(e.textures),l=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);c.length>0&&(i.geometries=c),a.length>0&&(i.materials=a),u.length>0&&(i.textures=u),l.length>0&&(i.images=l),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(c){const a=[];for(const u in c){const l=c[u];delete l.metadata,a.push(l)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yn.DEFAULT_UP=new U(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ei extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const c=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,i),p=this._getHandJoint(u,y);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=l.position.distanceTo(h.position),f=.02,m=.005;u.inputState.pinching&&d>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(px)))}return c!==null&&(c.visible=r!==null),a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Nc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Pt.workingColorSpace){if(e=gf(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Nc(o,s,e+1/3),this.g=Nc(o,s,e),this.b=Nc(o,s,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=ei){function i(s){s!==void 0&&parseFloat(s)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=Rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Pt.workingToColorSpace(Hn.copy(this),e),Math.round(wt(Hn.r*255,0,255))*65536+Math.round(wt(Hn.g*255,0,255))*256+Math.round(wt(Hn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,s=Hn.b,o=Math.max(i,r,s),c=Math.min(i,r,s);let a,u;const l=(c+o)/2;if(c===o)a=0,u=0;else{const h=o-c;switch(u=l<=.5?h/(o+c):h/(2-o-c),o){case i:a=(r-s)/h+(r<s?6:0);break;case r:a=(s-i)/h+2;break;case s:a=(i-r)/h+4;break}a/=6}return e.h=a,e.s=u,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ei){Pt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,r=Hn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL($a);const i=oa(Er.h,$a.h,t),r=oa(Er.s,$a.s,t),s=oa(Er.l,$a.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new vt;vt.NAMES=Rp;class pc extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yr,this.environmentIntensity=1,this.environmentRotation=new yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new U,ar=new U,zc=new U,lr=new U,Us=new U,Ns=new U,dh=new U,Fc=new U,Oc=new U,Bc=new U,Hc=new Yt,Gc=new Yt,Vc=new Yt;class wi{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Di.subVectors(e,t),r.cross(Di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Di.subVectors(r,t),ar.subVectors(i,t),zc.subVectors(e,t);const o=Di.dot(Di),c=Di.dot(ar),a=Di.dot(zc),u=ar.dot(ar),l=ar.dot(zc),h=o*u-c*c;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(u*a-c*l)*d,m=(o*l-c*a)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,i,r,s,o,c,a){return this.getBarycoord(e,t,i,r,lr)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,lr.x),a.addScaledVector(o,lr.y),a.addScaledVector(c,lr.z),a)}static getInterpolatedAttribute(e,t,i,r,s,o){return Hc.setScalar(0),Gc.setScalar(0),Vc.setScalar(0),Hc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hc,s.x),o.addScaledVector(Gc,s.y),o.addScaledVector(Vc,s.z),o}static isFrontFacing(e,t,i,r){return Di.subVectors(i,t),ar.subVectors(e,t),Di.cross(ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Di.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,c;Us.subVectors(r,i),Ns.subVectors(s,i),Fc.subVectors(e,i);const a=Us.dot(Fc),u=Ns.dot(Fc);if(a<=0&&u<=0)return t.copy(i);Oc.subVectors(e,r);const l=Us.dot(Oc),h=Ns.dot(Oc);if(l>=0&&h<=l)return t.copy(r);const d=a*h-l*u;if(d<=0&&a>=0&&l<=0)return o=a/(a-l),t.copy(i).addScaledVector(Us,o);Bc.subVectors(e,s);const f=Us.dot(Bc),m=Ns.dot(Bc);if(m>=0&&f<=m)return t.copy(s);const y=f*u-a*m;if(y<=0&&u>=0&&m<=0)return c=u/(u-m),t.copy(i).addScaledVector(Ns,c);const x=l*m-f*h;if(x<=0&&h-l>=0&&f-m>=0)return dh.subVectors(s,r),c=(h-l)/(h-l+(f-m)),t.copy(r).addScaledVector(dh,c);const p=1/(x+y+d);return o=y*p,c=d*p,t.copy(i).addScaledVector(Us,o).addScaledVector(Ns,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ss{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,Ii):Ii.fromBufferAttribute(s,o),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),qa.subVectors(this.max,No),zs.subVectors(e.a,No),Fs.subVectors(e.b,No),Os.subVectors(e.c,No),Ar.subVectors(Fs,zs),Cr.subVectors(Os,Fs),jr.subVectors(zs,Os);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-jr.z,jr.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,jr.z,0,-jr.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-jr.y,jr.x,0];return!Wc(t,zs,Fs,Os,qa)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,zs,Fs,Os,qa))?!1:(Ya.crossVectors(Ar,Cr),t=[Ya.x,Ya.y,Ya.z],Wc(t,zs,Fs,Os,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new U,new U,new U,new U,new U,new U,new U,new U],Ii=new U,Xa=new Ss,zs=new U,Fs=new U,Os=new U,Ar=new U,Cr=new U,jr=new U,No=new U,qa=new U,Ya=new U,Jr=new U;function Wc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Jr.fromArray(n,s);const c=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),a=e.dot(Jr),u=t.dot(Jr),l=i.dot(Jr);if(Math.max(-Math.max(a,u,l),Math.min(a,u,l))>c)return!1}return!0}const Cn=new U,Ka=new rt;let mx=0;class Sn extends Ms{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Pp extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lp extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const gx=new Ss,zo=new U,$c=new U;class Lo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add($c)),this.expandByPoint(zo.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vx=0;const bi=new It,Xc=new Yn,Bs=new U,mi=new Ss,Fo=new Ss,kn=new U;class on extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?Lp:Pp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Fo.setFromBufferAttribute(c),this.morphTargetsRelative?(kn.addVectors(mi.min,Fo.min),mi.expandByPoint(kn),kn.addVectors(mi.max,Fo.max),mi.expandByPoint(kn)):(mi.expandByPoint(Fo.min),mi.expandByPoint(Fo.max))}mi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kn));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],a=this.morphTargetsRelative;for(let u=0,l=c.count;u<l;u++)kn.fromBufferAttribute(c,u),a&&(Bs.fromBufferAttribute(e,u),kn.add(Bs)),r=Math.max(r,i.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const c=[],a=[];for(let _=0;_<i.count;_++)c[_]=new U,a[_]=new U;const u=new U,l=new U,h=new U,d=new rt,f=new rt,m=new rt,y=new U,x=new U;function p(_,E,P){u.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,P),l.sub(u),h.sub(u),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(y.copy(l).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(L),x.copy(h).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(L),c[_].add(y),c[E].add(y),c[P].add(y),a[_].add(x),a[E].add(x),a[P].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,E=g.length;_<E;++_){const P=g[_],L=P.start,D=P.count;for(let H=L,C=L+D;H<C;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new U,v=new U,M=new U,S=new U;function A(_){M.fromBufferAttribute(r,_),S.copy(M);const E=c[_];b.copy(E),b.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(S,E);const L=v.dot(a[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,L)}for(let _=0,E=g.length;_<E;++_){const P=g[_],L=P.start,D=P.count;for(let H=L,C=L+D;H<C;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,c=new U,a=new U,u=new U,l=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),c.fromBufferAttribute(i,m),a.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),c.add(l),a.add(l),u.add(l),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(c,a){const u=c.array,l=c.itemSize,h=c.normalized,d=new u.constructor(a.length*l);let f=0,m=0;for(let y=0,x=a.length;y<x;y++){c.isInterleavedBufferAttribute?f=a[y]*c.data.stride+c.offset:f=a[y]*l;for(let p=0;p<l;p++)d[m++]=u[f++]}return new Sn(d,l,h)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,r=this.attributes;for(const c in r){const a=r[c],u=e(a,i);t.setAttribute(c,u)}const s=this.morphAttributes;for(const c in s){const a=[],u=s[c];for(let l=0,h=u.length;l<h;l++){const d=u[l],f=e(d,i);a.push(f)}t.morphAttributes[c]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,a=o.length;c<a;c++){const u=o[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const a=this.parameters;for(const u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const a in i){const u=i[a];e.data.attributes[a]=u.toJSON(e.data)}const r={};let s=!1;for(const a in this.morphAttributes){const u=this.morphAttributes[a],l=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];l.push(f.toJSON(e.data))}l.length>0&&(r[a]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(t))}const s=e.morphAttributes;for(const u in s){const l=[],h=s[u];for(let d=0,f=h.length;d<f;d++)l.push(h[d].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,l=o.length;u<l;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tp,this.updateRanges=[],this.version=0,this.uuid=pr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const jn=new U;class Xl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){$l("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$l("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qc=new U,yx=new U,_x=new gt;class Qi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qc.subVectors(i,t).cross(yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(qc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_x.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bx=0;class ws extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=ra,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=cp,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rc,this.stencilZFail=Rc,this.stencilZPass=Rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const c in s){const a=s[c];delete a.metadata,o.push(a)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dp extends ws{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hs;const Oo=new U,Gs=new U,Vs=new U,Ws=new rt,Bo=new rt,Ip=new It,Za=new U,Ho=new U,ja=new U,fh=new rt,Yc=new rt,hh=new rt;class Mx extends Yn{constructor(e=new Dp){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xx(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Xl(i,3,0,!1)),Hs.setAttribute("uv",new Xl(i,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ja(Za.set(-.5,-.5,0),Vs,o,Gs,r,s),Ja(Ho.set(.5,-.5,0),Vs,o,Gs,r,s),Ja(ja.set(.5,.5,0),Vs,o,Gs,r,s),fh.set(0,0),Yc.set(1,0),hh.set(1,1);let c=e.ray.intersectTriangle(Za,Ho,ja,!1,Oo);if(c===null&&(Ja(Ho.set(-.5,.5,0),Vs,o,Gs,r,s),Yc.set(0,1),c=e.ray.intersectTriangle(Za,ja,Ho,!1,Oo),c===null))return;const a=e.ray.origin.distanceTo(Oo);a<e.near||a>e.far||t.push({distance:a,point:Oo.clone(),uv:wi.getInterpolation(Oo,Za,Ho,ja,fh,Yc,hh,new rt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ja(n,e,t,i,r,s){Ws.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Bo.x=s*Ws.x-r*Ws.y,Bo.y=r*Ws.x+s*Ws.y):Bo.copy(Ws),n.copy(e),n.x+=Bo.x,n.y+=Bo.y,n.applyMatrix4(Ip)}const ur=new U,Kc=new U,Qa=new U,el=new U;class xf{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kc.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),el.copy(this.origin).sub(Kc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),c=el.dot(this.direction),a=-el.dot(Qa),u=el.lengthSq(),l=Math.abs(1-o*o);let h,d,f,m;if(l>0)if(h=o*a-c,d=o*c-a,m=s*l,h>=0)if(d>=-m)if(d<=m){const y=1/l;h*=y,d*=y,f=h*(h+o*d+2*c)+d*(o*h+d+2*a)+u}else d=s,h=Math.max(0,-(o*d+c)),f=-h*h+d*(d+2*a)+u;else d=-s,h=Math.max(0,-(o*d+c)),f=-h*h+d*(d+2*a)+u;else d<=-m?(h=Math.max(0,-(-o*s+c)),d=h>0?-s:Math.min(Math.max(-s,-a),s),f=-h*h+d*(d+2*a)+u):d<=m?(h=0,d=Math.min(Math.max(-s,-a),s),f=d*(d+2*a)+u):(h=Math.max(0,-(o*s+c)),d=h>0?s:Math.min(Math.max(-s,-a),s),f=-h*h+d*(d+2*a)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+c)),f=-h*h+d*(d+2*a)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Kc).addScaledVector(Qa,d),f}intersectSphere(e,t){if(e.radius<0)return null;ur.subVectors(e.center,this.origin);const i=ur.dot(this.direction),r=ur.dot(ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=i-o,a=i+o;return a<0?null:c<0?this.at(a,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,c,a;const u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),l>=0?(s=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(s=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(c=(e.min.z-d.z)*h,a=(e.max.z-d.z)*h):(c=(e.max.z-d.z)*h,a=(e.min.z-d.z)*h),i>a||c>r)||((c>i||i!==i)&&(i=c),(a<r||r!==r)&&(r=a),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,i,r,s){const o=this.origin,c=this.direction,a=c.x,u=c.y,l=c.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,y=t.y-o.y,x=t.z-o.z,p=i.x-o.x,g=i.y-o.y,b=i.z-o.z,v=Math.abs(a),M=Math.abs(u),S=Math.abs(l);let A,_,E,P,L,D,H,C,I,O,$,oe;if(v>=M&&v>=S?(E=a,D=h,I=m,oe=p,a>=0?(A=u,_=l,P=d,L=f,H=y,C=x,O=g,$=b):(A=l,_=u,P=f,L=d,H=x,C=y,O=b,$=g)):M>=S?(E=u,D=d,I=y,oe=g,u>=0?(A=l,_=a,P=f,L=h,H=x,C=m,O=b,$=p):(A=a,_=l,P=h,L=f,H=m,C=x,O=p,$=b)):(E=l,D=f,I=x,oe=b,l>=0?(A=a,_=u,P=h,L=d,H=m,C=y,O=p,$=g):(A=u,_=a,P=d,L=h,H=y,C=m,O=g,$=p)),E===0)return null;const Z=A/E,te=_/E,le=1/E,F=P-Z*D,ne=L-te*D,ge=H-Z*I,ve=C-te*I,we=O-Z*oe,Y=$-te*oe,ee=we*ve-Y*ge,Me=F*Y-ne*we,ue=ge*ne-ve*F;if(r){if(ee<0||Me<0||ue<0)return null}else if((ee<0||Me<0||ue<0)&&(ee>0||Me>0||ue>0))return null;const _e=ee+Me+ue;if(_e===0)return null;const Ye=le*(ee*D+Me*I+ue*oe);return(_e>0?Ye<0:Ye>0)?null:this.at(Ye/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kp extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ph=new It,Qr=new xf,tl=new Lo,mh=new U,nl=new U,il=new U,rl=new U,Zc=new U,sl=new U,gh=new U,ol=new U;class tn extends Yn{constructor(e=new on,t=new kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){sl.set(0,0,0);for(let a=0,u=s.length;a<u;a++){const l=c[a],h=s[a];l!==0&&(Zc.fromBufferAttribute(h,e),o?sl.addScaledVector(Zc,l):sl.addScaledVector(Zc.sub(t),l))}t.add(sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(tl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(tl,mh)===null||Qr.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,c=s.index,a=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(c!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){const x=d[m],p=o[x.materialIndex],g=Math.max(x.start,f.start),b=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let v=g,M=b;v<M;v+=3){const S=c.getX(v),A=c.getX(v+1),_=c.getX(v+2);r=al(this,p,e,i,u,l,h,S,A,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let x=m,p=y;x<p;x+=3){const g=c.getX(x),b=c.getX(x+1),v=c.getX(x+2);r=al(this,o,e,i,u,l,h,g,b,v),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){const x=d[m],p=o[x.materialIndex],g=Math.max(x.start,f.start),b=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let v=g,M=b;v<M;v+=3){const S=v,A=v+1,_=v+2;r=al(this,p,e,i,u,l,h,S,A,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let x=m,p=y;x<p;x+=3){const g=x,b=x+1,v=x+2;r=al(this,o,e,i,u,l,h,g,b,v),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Sx(n,e,t,i,r,s,o,c){let a;if(e.side===ni?a=i.intersectTriangle(o,s,r,!0,c):a=i.intersectTriangle(r,s,o,e.side===gs,c),a===null)return null;ol.copy(c),ol.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ol);return u<t.near||u>t.far?null:{distance:u,point:ol.clone(),object:n}}function al(n,e,t,i,r,s,o,c,a,u){n.getVertexPosition(c,nl),n.getVertexPosition(a,il),n.getVertexPosition(u,rl);const l=Sx(n,e,t,i,nl,il,rl,gh);if(l){const h=new U;wi.getBarycoord(gh,nl,il,rl,h),r&&(l.uv=wi.getInterpolatedAttribute(r,c,a,u,h,new rt)),s&&(l.uv1=wi.getInterpolatedAttribute(s,c,a,u,h,new rt)),o&&(l.normal=wi.getInterpolatedAttribute(o,c,a,u,h,new U),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a:c,b:a,c:u,normal:new U,materialIndex:0};wi.getNormal(nl,il,rl,d.normal),l.face=d,l.barycoord=h}return l}class mc extends qn{constructor(e=null,t=1,i=1,r,s,o,c,a,u=Nn,l=Nn,h,d){super(null,o,c,a,u,l,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To extends Sn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new It,vh=new It,ll=[],xh=new Ss,wx=new It,Go=new tn,Vo=new Lo;class ql extends tn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,wx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),xh.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Vo.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let c=0;c<i.length;c++)i[c]=r[o+c]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(i),e.ray.intersectsSphere(Vo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,$s),vh.multiplyMatrices(i,$s),Go.matrixWorld=vh,Go.raycast(e,ll);for(let o=0,c=ll.length;o<c;o++){const a=ll[o];a.instanceId=s,a.object=this,t.push(a)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new mc(new Float32Array(r*this.count),r,this.count,uf,zi));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const c=this.geometry.morphTargetsRelative?1:1-o,a=r*e;return s[a]=c,s.set(i,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const es=new Lo,Tx=new rt(.5,.5),cl=new U;class yf{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const r=this.planes,s=e.elements,o=s[0],c=s[1],a=s[2],u=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],y=s[9],x=s[10],p=s[11],g=s[12],b=s[13],v=s[14],M=s[15];if(r[0].setComponents(u-o,f-l,p-m,M-g).normalize(),r[1].setComponents(u+o,f+l,p+m,M+g).normalize(),r[2].setComponents(u+c,f+h,p+y,M+b).normalize(),r[3].setComponents(u-c,f-h,p-y,M-b).normalize(),i)r[4].setComponents(a,d,x,v).normalize(),r[5].setComponents(u-a,f-d,p-x,M-v).normalize();else if(r[4].setComponents(u-a,f-d,p-x,M-v).normalize(),t===nr)r[5].setComponents(u+a,f+d,p+x,M+v).normalize();else if(t===Ma)r[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Tx.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ex extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yh=new It,ud=new xf,ul=new Lo,dl=new U;class _f extends Yn{constructor(e=new on,t=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;yh.copy(r).invert(),ud.copy(e.ray).applyMatrix4(yh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=c*c,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,y=f;m<y;m++){const x=u.getX(m);dl.fromBufferAttribute(h,x),_h(dl,x,a,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,y=f;m<y;m++)dl.fromBufferAttribute(h,m),_h(dl,m,a,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function _h(n,e,t,i,r,s,o){const c=ud.distanceSqToPoint(n);if(c<t){const a=new U;ud.closestPointToPoint(n,a),a.applyMatrix4(i);const u=r.ray.origin.distanceTo(a);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(c),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Up extends qn{constructor(e=[],t=vs,i,r,s,o,c,a,u,l){super(e,t,i,r,s,o,c,a,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Np extends qn{constructor(e,t,i,r,s,o,c,a,u){super(e,t,i,r,s,o,c,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eo extends qn{constructor(e,t,i=$i,r,s,o,c=Nn,a=Nn,u,l=xr,h=1){if(l!==xr&&l!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,c,a,l,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ax extends Eo{constructor(e,t=$i,i=vs,r,s,o=Nn,c=Nn,a,u=xr){const l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,i,r,s,o,c,a,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zp extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gn extends on{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const a=[],u=[],l=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(a),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2));function m(y,x,p,g,b,v,M,S,A,_,E){const P=v/A,L=M/_,D=v/2,H=M/2,C=S/2,I=A+1,O=_+1;let $=0,oe=0;const Z=new U;for(let te=0;te<O;te++){const le=te*L-H;for(let F=0;F<I;F++){const ne=F*P-D;Z[y]=ne*g,Z[x]=le*b,Z[p]=C,u.push(Z.x,Z.y,Z.z),Z[y]=0,Z[x]=0,Z[p]=S>0?1:-1,l.push(Z.x,Z.y,Z.z),h.push(F/A),h.push(1-te/_),$+=1}}for(let te=0;te<_;te++)for(let le=0;le<A;le++){const F=d+le+I*te,ne=d+le+I*(te+1),ge=d+(le+1)+I*(te+1),ve=d+(le+1)+I*te;a.push(F,ne,ve),a.push(ne,ge,ve),oe+=6}c.addGroup(f,oe,E),f+=oe,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yl extends on{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],c=[],a=[],u=[],l=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=i*2+s,y=r+1,x=new U,p=new U;for(let g=0;g<=m;g++){let b=0,v=0,M=0,S=0;if(g<=i){const E=g/i,P=E*Math.PI/2;v=-l-e*Math.cos(P),M=e*Math.sin(P),S=-e*Math.cos(P),b=E*h}else if(g<=i+s){const E=(g-i)/s;v=-l+E*t,M=e,S=0,b=h+E*d}else{const E=(g-i-s)/i,P=E*Math.PI/2;v=l+e*Math.sin(P),M=e*Math.cos(P),S=e*Math.sin(P),b=h+d+E*h}const A=Math.max(0,Math.min(1,b/f));let _=0;g===0?_=.5/r:g===m&&(_=-.5/r);for(let E=0;E<=r;E++){const P=E/r,L=P*Math.PI*2,D=Math.sin(L),H=Math.cos(L);p.x=-M*H,p.y=v,p.z=M*D,c.push(p.x,p.y,p.z),x.set(-M*H,S,M*D),x.normalize(),a.push(x.x,x.y,x.z),u.push(P+_,A)}if(g>0){const E=(g-1)*y;for(let P=0;P<r;P++){const L=E+P,D=E+P+1,H=g*y+P,C=g*y+P+1;o.push(L,D,H),o.push(D,C,H)}}}this.setIndex(o),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cn extends on{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,c=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:a};const u=this;r=Math.floor(r),s=Math.floor(s);const l=[],h=[],d=[],f=[];let m=0;const y=[],x=i/2;let p=0;g(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function g(){const v=new U,M=new U;let S=0;const A=(t-e)/i;for(let _=0;_<=s;_++){const E=[],P=_/s,L=P*(t-e)+e;for(let D=0;D<=r;D++){const H=D/r,C=H*a+c,I=Math.sin(C),O=Math.cos(C);M.x=L*I,M.y=-P*i+x,M.z=L*O,h.push(M.x,M.y,M.z),v.set(I,A,O).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-P),E.push(m++)}y.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const P=y[E][_],L=y[E+1][_],D=y[E+1][_+1],H=y[E][_+1];(e>0||E!==0)&&(l.push(P,L,H),S+=3),(t>0||E!==s-1)&&(l.push(L,D,H),S+=3)}u.addGroup(p,S,0),p+=S}function b(v){const M=m,S=new rt,A=new U;let _=0;const E=v===!0?e:t,P=v===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,x*P,0),d.push(0,P,0),f.push(.5,.5),m++;const L=m;for(let D=0;D<=r;D++){const C=D/r*a+c,I=Math.cos(C),O=Math.sin(C);A.x=E*O,A.y=x*P,A.z=E*I,h.push(A.x,A.y,A.z),d.push(0,P,0),S.x=I*.5+.5,S.y=O*.5*P+.5,f.push(S.x,S.y),m++}for(let D=0;D<r;D++){const H=M+D,C=L+D;v===!0?l.push(C,C+1,H):l.push(C+1,C,H),_+=3}u.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bf extends on{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];c(r),u(i),l(),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(s.slice(),3)),this.setAttribute("uv",new St(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(g){const b=new U,v=new U,M=new U;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],v),f(t[S+2],M),a(b,v,M,g)}function a(g,b,v,M){const S=M+1,A=[];for(let _=0;_<=S;_++){A[_]=[];const E=g.clone().lerp(v,_/S),P=b.clone().lerp(v,_/S),L=S-_;for(let D=0;D<=L;D++)D===0&&_===S?A[_][D]=E:A[_][D]=E.clone().lerp(P,D/L)}for(let _=0;_<S;_++)for(let E=0;E<2*(S-_)-1;E++){const P=Math.floor(E/2);E%2===0?(d(A[_][P+1]),d(A[_+1][P]),d(A[_][P])):(d(A[_][P+1]),d(A[_+1][P+1]),d(A[_+1][P]))}}function u(g){const b=new U;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(g),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function l(){const g=new U;for(let b=0;b<s.length;b+=3){g.x=s[b+0],g.y=s[b+1],g.z=s[b+2];const v=x(g)/2/Math.PI+.5,M=p(g)/Math.PI+.5;o.push(v,1-M)}m(),h()}function h(){for(let g=0;g<o.length;g+=6){const b=o[g+0],v=o[g+2],M=o[g+4],S=Math.max(b,v,M),A=Math.min(b,v,M);S>.9&&A<.1&&(b<.2&&(o[g+0]+=1),v<.2&&(o[g+2]+=1),M<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function f(g,b){const v=g*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function m(){const g=new U,b=new U,v=new U,M=new U,S=new rt,A=new rt,_=new rt;for(let E=0,P=0;E<s.length;E+=9,P+=6){g.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),S.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),M.copy(g).add(b).add(v).divideScalar(3);const L=x(M);y(S,P+0,g,L),y(A,P+2,b,L),y(_,P+4,v,L)}}function y(g,b,v,M){M<0&&g.x===1&&(o[b]=g.x-1),v.x===0&&v.z===0&&(o[b]=M/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.vertices,e.indices,e.radius,e.detail)}}class Mf extends bf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mf(e.radius,e.detail)}}class oo extends on{constructor(e=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=wt(r,0,Math.PI*2);const s=[],o=[],c=[],a=[],u=[],l=1/t,h=new U,d=new rt,f=new U,m=new U,y=new U;let x=0,p=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:x=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,f.x=p*1,f.y=-x,f.z=p*0,y.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case e.length-1:a.push(y.x,y.y,y.z);break;default:x=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,f.x=p*1,f.y=-x,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),a.push(f.x,f.y,f.z),y.copy(m)}for(let g=0;g<=t;g++){const b=i+g*l*r,v=Math.sin(b),M=Math.cos(b);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*v,h.y=e[S].y,h.z=e[S].x*M,o.push(h.x,h.y,h.z),d.x=g/t,d.y=S/(e.length-1),c.push(d.x,d.y);const A=a[3*S+0]*v,_=a[3*S+1],E=a[3*S+0]*M;u.push(A,_,E)}}for(let g=0;g<t;g++)for(let b=0;b<e.length-1;b++){const v=b+g*e.length,M=v,S=v+e.length,A=v+e.length+1,_=v+1;s.push(M,S,_),s.push(A,_,S)}this.setIndex(s),this.setAttribute("position",new St(o,3)),this.setAttribute("uv",new St(c,2)),this.setAttribute("normal",new St(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.points,e.segments,e.phiStart,e.phiLength)}}class Oa extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(i),a=Math.floor(r),u=c+1,l=a+1,h=e/c,d=t/a,f=[],m=[],y=[],x=[];for(let p=0;p<l;p++){const g=p*d-o;for(let b=0;b<u;b++){const v=b*h-s;m.push(v,-g,0),y.push(0,0,1),x.push(b/c),x.push(1-p/a)}}for(let p=0;p<a;p++)for(let g=0;g<c;g++){const b=g+u*p,v=g+u*(p+1),M=g+1+u*(p+1),S=g+1+u*p;f.push(b,v,S),f.push(v,M,S)}this.setIndex(f),this.setAttribute("position",new St(m,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}class gc extends on{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const c=[],a=[],u=[],l=[];let h=e;const d=(t-e)/r,f=new U,m=new rt;for(let y=0;y<=r;y++){for(let x=0;x<=i;x++){const p=s+x/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),a.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,l.push(m.x,m.y)}h+=d}for(let y=0;y<r;y++){const x=y*(i+1);for(let p=0;p<i;p++){const g=p+x,b=g,v=g+i+1,M=g+i+2,S=g+1;c.push(b,v,S),c.push(v,M,S)}}this.setIndex(c),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _r extends on{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const a=Math.min(o+c,Math.PI);let u=0;const l=[],h=new U,d=new U,f=[],m=[],y=[],x=[];for(let p=0;p<=i;p++){const g=[],b=p/i,v=o+b*c,M=e*Math.cos(v),S=Math.sqrt(e*e-M*M);let A=0;p===0&&o===0?A=.5/t:p===i&&a===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){const E=_/t,P=r+E*s;h.x=-S*Math.cos(P),h.y=M,h.z=S*Math.sin(P),m.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),x.push(E+A,1-b),g.push(u++)}l.push(g)}for(let p=0;p<i;p++)for(let g=0;g<t;g++){const b=l[p][g+1],v=l[p][g],M=l[p+1][g],S=l[p+1][g+1];(p!==0||o>0)&&f.push(b,v,S),(p!==i-1||a<Math.PI)&&f.push(v,M,S)}this.setIndex(f),this.setAttribute("position",new St(m,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fr extends on{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:c},i=Math.floor(i),r=Math.floor(r);const a=[],u=[],l=[],h=[],d=new U,f=new U,m=new U;for(let y=0;y<=i;y++){const x=o+y/i*c;for(let p=0;p<=r;p++){const g=p/r*s;f.x=(e+t*Math.cos(x))*Math.cos(g),f.y=(e+t*Math.cos(x))*Math.sin(g),f.z=t*Math.sin(x),u.push(f.x,f.y,f.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),m.subVectors(f,d).normalize(),l.push(m.x,m.y,m.z),h.push(p/r),h.push(y/i)}}for(let y=1;y<=i;y++)for(let x=1;x<=r;x++){const p=(r+1)*y+x-1,g=(r+1)*(y-1)+x-1,b=(r+1)*(y-1)+x,v=(r+1)*y+x;a.push(p,g,v),a.push(g,b,v)}this.setIndex(a),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ao(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(bh(r))r.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(bh(r[0])){const s=[];for(let o=0,c=r.length;o<c;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Jn(n){const e={};for(let t=0;t<n.length;t++){const i=Ao(n[t]);for(const r in i)e[r]=i[r]}return e}function bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Rx={clone:Ao,merge:Jn};var Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new vt().setHex(r.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new It().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Dx extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Op extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ix extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kx extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bp extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const jc=new It,Mh=new U,Sh=new U;class Ux{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(jc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,c=r?r.w/s.y:1,a=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Ma||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*c,0,.5*c+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*c,0,.5*c+u,0,0,.5,.5,0,0,0,1),t.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fl=new U,hl=new $n,Zi=new U;class vc extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,hl,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,hl,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(fl,hl,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,hl,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new U,wh=new rt,Th=new rt;class vi extends vc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Th),t.subVectors(Th,wh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/a,t-=o.offsetY*i/u,r*=o.width/a,i*=o.height/u}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nx extends Ux{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}}class zx extends Bp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hp extends vc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,c=r+t,a=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,c-=l*this.view.offsetY,a=c-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fx extends Bp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gp extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Xs=-90,qs=1;class Vp extends Yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vi(Xs,qs,e,t);r.layers=this.layers,this.add(r);const s=new vi(Xs,qs,e,t);s.layers=this.layers,this.add(s);const o=new vi(Xs,qs,e,t);o.layers=this.layers,this.add(o);const c=new vi(Xs,qs,e,t);c.layers=this.layers,this.add(c);const a=new vi(Xs,qs,e,t);a.layers=this.layers,this.add(a);const u=new vi(Xs,qs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,c,a]=t;for(const u of t)this.remove(u);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,a,u,l]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ox extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bx{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bf=class Bf{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Bf.prototype.isMatrix2=!0;let Eh=Bf;function Ah(n,e,t,i){const r=Hx(i);switch(t){case Sp:return n*e;case uf:return n*e/r.components*r.byteLength;case df:return n*e/r.components*r.byteLength;case xs:return n*e*2/r.components*r.byteLength;case ff:return n*e*2/r.components*r.byteLength;case wp:return n*e*3/r.components*r.byteLength;case Ti:return n*e*4/r.components*r.byteLength;case hf:return n*e*4/r.components*r.byteLength;case Sl:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tl:case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ku:case Nu:return Math.max(n,16)*Math.max(e,8)/4;case Iu:case Uu:return Math.max(n,8)*Math.max(e,8)/2;case zu:case Fu:case Bu:case Hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ou:case Bl:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $u:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ju:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case od:case ad:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hl:case ld:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(n){switch(n){case ti:case yp:return{byteLength:1,components:1};case _a:case _p:case Ri:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case $i:case af:case zi:return{byteLength:4,components:1};case bp:case Mp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wp(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Gx(n){const e=new WeakMap;function t(c,a){const u=c.array,l=c.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(a,d),n.bufferData(a,u,l),c.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=n.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,a,u){const l=a.array,h=a.updateRanges;if(n.bindBuffer(u,c),h.length===0)n.bufferSubData(u,0,l);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],y=h[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const y=h[f];n.bufferSubData(u,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}a.clearUpdateRanges()}a.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const a=e.get(c);a&&(n.deleteBuffer(a.buffer),e.delete(c))}function o(c,a){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const l=e.get(c);(!l||l.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=e.get(c);if(u===void 0)e.set(c,t(c,a));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,c,a),u.version=c.version}}return{get:r,remove:s,update:o}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
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
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jx=`#ifdef USE_BATCHING
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
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,Hy=`uniform sampler2D dfgLUT;
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
}`,Gy=`
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C1=`float getShadowMask() {
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
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,j1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,d_=`#define PHONG
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
}`,f_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,v_=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Vx,alphahash_pars_fragment:Wx,alphamap_fragment:$x,alphamap_pars_fragment:Xx,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:Kx,aomap_pars_fragment:Zx,batching_pars_vertex:jx,batching_vertex:Jx,begin_vertex:Qx,beginnormal_vertex:ey,bsdfs:ty,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ay,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:uy,color_vertex:dy,common:fy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:_y,envmap_fragment:by,envmap_common_pars_fragment:My,envmap_pars_fragment:Sy,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Uy,envmap_vertex:Ty,fog_vertex:Ey,fog_pars_vertex:Ay,fog_fragment:Cy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Py,lightmap_pars_fragment:Ly,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Iy,lights_pars_begin:ky,lights_toon_fragment:Ny,lights_toon_pars_fragment:zy,lights_phong_fragment:Fy,lights_phong_pars_fragment:Oy,lights_physical_fragment:By,lights_physical_pars_fragment:Hy,lights_fragment_begin:Gy,lights_fragment_maps:Vy,lights_fragment_end:Wy,lightprobes_pars_fragment:$y,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:Ky,map_fragment:Zy,map_pars_fragment:jy,map_particle_fragment:Jy,map_particle_pars_fragment:Qy,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:o1,normal_fragment_begin:a1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:d1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:x1,premultiplied_alpha_fragment:y1,project_vertex:_1,dithering_fragment:b1,dithering_pars_fragment:M1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:E1,shadowmap_vertex:A1,shadowmask_pars_fragment:C1,skinbase_vertex:R1,skinning_pars_vertex:P1,skinning_vertex:L1,skinnormal_vertex:D1,specularmap_fragment:I1,specularmap_pars_fragment:k1,tonemapping_fragment:U1,tonemapping_pars_fragment:N1,transmission_fragment:z1,transmission_pars_fragment:F1,uv_pars_fragment:O1,uv_pars_vertex:B1,uv_vertex:H1,worldpos_vertex:G1,background_vert:V1,background_frag:W1,backgroundCube_vert:$1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:Y1,depth_vert:K1,depth_frag:Z1,distance_vert:j1,distance_frag:J1,equirect_vert:Q1,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:u_,meshphong_vert:d_,meshphong_frag:f_,meshphysical_vert:h_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:v_,points_frag:x_,shadow_vert:y_,shadow_frag:__,sprite_vert:b_,sprite_frag:M_},He={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},er={basic:{uniforms:Jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Jn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Jn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new vt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Jn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Jn([He.points,He.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Jn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Jn([He.common,He.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Jn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Jn([He.sprite,He.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Jn([He.common,He.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Jn([He.lights,He.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};er.physical={uniforms:Jn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const pl={r:0,b:0,g:0},S_=new It,$p=new gt;$p.set(-1,0,0,0,1,0,0,0,1);function w_(n,e,t,i,r,s){const o=new vt(0);let c=r===!0?0:1,a,u,l=null,h=0,d=null;function f(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){const v=g.backgroundBlurriness>0;b=e.get(b,v)}return b}function m(g){let b=!1;const v=f(g);v===null?x(o,c):v&&v.isColor&&(x(v,1),b=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,b){const v=f(b);v&&(v.isCubeTexture||v.mapping===hc)?(u===void 0&&(u=new tn(new Gn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Ao(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply($p),u.material.toneMapped=Pt.getTransfer(v.colorSpace)!==Ht,(l!==v||h!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,l=v,h=v.version,d=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new tn(new Oa(2,2),new Ot({name:"BackgroundMaterial",uniforms:Ao(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,a.material.toneMapped=Pt.getTransfer(v.colorSpace)!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(l!==v||h!==v.version||d!==n.toneMapping)&&(a.material.needsUpdate=!0,l=v,h=v.version,d=n.toneMapping),a.layers.enableAll(),g.unshift(a,a.geometry,a.material,0,0,null))}function x(g,b){g.getRGB(pl,Fp(n)),t.buffers.color.setClear(pl.r,pl.g,pl.b,b,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,b=1){o.set(g),c=b,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(o,c)},render:m,addToRenderList:y,dispose:p}}function T_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function c(L,D,H,C,I){let O=!1;const $=h(L,C,H,D);s!==$&&(s=$,u(s.object)),O=f(L,C,H,I),O&&m(L,C,H,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(L,D,H,C),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function a(){return n.createVertexArray()}function u(L){return n.bindVertexArray(L)}function l(L){return n.deleteVertexArray(L)}function h(L,D,H,C){const I=C.wireframe===!0;let O=i[D.id];O===void 0&&(O={},i[D.id]=O);const $=L.isInstancedMesh===!0?L.id:0;let oe=O[$];oe===void 0&&(oe={},O[$]=oe);let Z=oe[H.id];Z===void 0&&(Z={},oe[H.id]=Z);let te=Z[I];return te===void 0&&(te=d(a()),Z[I]=te),te}function d(L){const D=[],H=[],C=[];for(let I=0;I<t;I++)D[I]=0,H[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,D,H,C){const I=s.attributes,O=D.attributes;let $=0;const oe=H.getAttributes();for(const Z in oe)if(oe[Z].location>=0){const le=I[Z];let F=O[Z];if(F===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),le===void 0||le.attribute!==F||F&&le.data!==F.data)return!0;$++}return s.attributesNum!==$||s.index!==C}function m(L,D,H,C){const I={},O=D.attributes;let $=0;const oe=H.getAttributes();for(const Z in oe)if(oe[Z].location>=0){let le=O[Z];le===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));const F={};F.attribute=le,le&&le.data&&(F.data=le.data),I[Z]=F,$++}s.attributes=I,s.attributesNum=$,s.index=C}function y(){const L=s.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function x(L){p(L,0)}function p(L,D){const H=s.newAttributes,C=s.enabledAttributes,I=s.attributeDivisors;H[L]=1,C[L]===0&&(n.enableVertexAttribArray(L),C[L]=1),I[L]!==D&&(n.vertexAttribDivisor(L,D),I[L]=D)}function g(){const L=s.newAttributes,D=s.enabledAttributes;for(let H=0,C=D.length;H<C;H++)D[H]!==L[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function b(L,D,H,C,I,O,$){$===!0?n.vertexAttribIPointer(L,D,H,I,O):n.vertexAttribPointer(L,D,H,C,I,O)}function v(L,D,H,C){y();const I=C.attributes,O=H.getAttributes(),$=D.defaultAttributeValues;for(const oe in O){const Z=O[oe];if(Z.location>=0){let te=I[oe];if(te===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){const le=te.normalized,F=te.itemSize,ne=e.get(te);if(ne===void 0)continue;const ge=ne.buffer,ve=ne.type,we=ne.bytesPerElement,Y=ve===n.INT||ve===n.UNSIGNED_INT||te.gpuType===af;if(te.isInterleavedBufferAttribute){const ee=te.data,Me=ee.stride,ue=te.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<Z.locationSize;_e++)p(Z.location+_e,ee.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<Z.locationSize;_e++)x(Z.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let _e=0;_e<Z.locationSize;_e++)b(Z.location+_e,F/Z.locationSize,ve,le,Me*we,(ue+F/Z.locationSize*_e)*we,Y)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<Z.locationSize;ee++)p(Z.location+ee,te.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<Z.locationSize;ee++)x(Z.location+ee);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ee=0;ee<Z.locationSize;ee++)b(Z.location+ee,F/Z.locationSize,ve,le,F*we,F/Z.locationSize*ee*we,Y)}}else if($!==void 0){const le=$[oe];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(Z.location,le);break;case 3:n.vertexAttrib3fv(Z.location,le);break;case 4:n.vertexAttrib4fv(Z.location,le);break;default:n.vertexAttrib1fv(Z.location,le)}}}}g()}function M(){E();for(const L in i){const D=i[L];for(const H in D){const C=D[H];for(const I in C){const O=C[I];for(const $ in O)l(O[$].object),delete O[$];delete C[I]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const H in D){const C=D[H];for(const I in C){const O=C[I];for(const $ in O)l(O[$].object),delete O[$];delete C[I]}}delete i[L.id]}function A(L){for(const D in i){const H=i[D];for(const C in H){const I=H[C];if(I[L.id]===void 0)continue;const O=I[L.id];for(const $ in O)l(O[$].object),delete O[$];delete I[L.id]}}}function _(L){for(const D in i){const H=i[D],C=L.isInstancedMesh===!0?L.id:0,I=H[C];if(I!==void 0){for(const O in I){const $=I[O];for(const oe in $)l($[oe].object),delete $[oe];delete I[O]}delete H[C],Object.keys(H).length===0&&delete i[D]}}}function E(){P(),o=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:E,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:x,disableUnusedAttributes:g}}function E_(n,e,t){let i;function r(a){i=a}function s(a,u){n.drawArrays(i,a,u),t.update(u,i,1)}function o(a,u,l){l!==0&&(n.drawArraysInstanced(i,a,u,l),t.update(u,i,l))}function c(a,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,u,0,l);let d=0;for(let f=0;f<l;f++)d+=u[f];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function A_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Ti&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(A){const _=A===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&A!==zi&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function a(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const l=a(u);l!==u&&(ht("WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:v,maxSamples:M,samples:S}}function C_(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qi,c=new gt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!x)s?l(null):u();else{const g=s?0:i,b=g*4;let v=p.clippingState||null;a.value=v,v=l(m,d,b,f);for(let M=0;M!==b;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(h,d,f,m){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=a.value,m!==!0||x===null){const p=f+y*4,g=d.matrixWorldInverse;c.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,v=f;b!==y;++b,v+=4)o.copy(h[b]).applyMatrix4(g,c),o.normal.toArray(x,v),x[v+3]=o.constant}a.value=x,a.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}const ao=4,R_=6,P_=20,L_=256,Wo=new Hp,Ch=new vt;let Jc=null,Qc=0,eu=0,tu=!1;const D_=new U,ts=new U;class dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:c=D_}=s;Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a,c),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,Qc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ri,format:Ti,colorSpace:Gl,depthBuffer:!1},r=Rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=I_(s)),this._blurMaterial=U_(s,e,t),this._ggxMaterial=k_(s,e,t)}return r}_compileMaterial(e){const t=new tn(new on,e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,r,s){const a=new vi(90,1,t,i),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ch),h.toneMapping=ir,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new Gn,new kp({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,x=y.material;let p=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,p=!0):(x.color.copy(Ch),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(a.up.set(0,u[b],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[b],s.y,s.z)):v===1?(a.up.set(0,0,u[b]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[b],s.z)):(a.up.set(0,u[b],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[b]));const M=this._cubeSize;Ys(r,v*M,b>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(y,a),h.render(e,a)}h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vs||e.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const a=this._cubeSize;Ys(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(o,Wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[i];c.material=o;const a=o.uniforms,u=i/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-l*l),d=u*1.25,f=h*d,{_lodMax:m}=this,y=this._sizeLods[i],x=3*y*(i>m-ao?i-m+ao:0),p=4*(this._cubeSize-y);a.envMap.value=e.texture,a.roughness.value=f,a.mipInt.value=m-t,Ys(s,x,p,3*y,2*y),r.setRenderTarget(s),r.render(c,Wo),a.envMap.value=s.texture,a.roughness.value=0,a.mipInt.value=m-i,Ys(e,x,p,3*y,2*y),r.setRenderTarget(e),r.render(c,Wo)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){const o=this._renderer,c=this._blurMaterial,a=this._lodMeshes[r];a.material=c;const u=c.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const l=this._sizeLods[r],h=3*l*(r>this._lodMax-ao?r-this._lodMax+ao:0),d=4*(this._cubeSize-l);Ys(t,h,d,3*l,2*l),o.setRenderTarget(t),o.render(a,Wo)}}function I_(n){const e=[],t=[];let i=n;const r=n-ao+1+R_;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const c=1/(o-2),a=-c,u=1+c,l=[a,a,u,a,u,u,a,a,u,u,a,u],h=6,d=6,f=3,m=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let p=0;p<h;p++){const g=p%3*2/3-1,b=p>2?0:-1,v=[g,b,0,g+2/3,b,0,g+2/3,b+1,0,g,b,0,g+2/3,b+1,0,g,b+1,0];m.set(v,f*d*p);for(let M=0;M<d;M++){const S=l[M*2]*2-1,A=l[M*2+1]*2-1;p===0?ts.set(1,A,S):p===1?ts.set(-S,1,-A):p===2?ts.set(-S,A,1):p===3?ts.set(-1,A,-S):p===4?ts.set(-S,-1,A):ts.set(S,A,-1),ts.toArray(y,(p*d+M)*f)}}const x=new on;x.setAttribute("position",new Sn(m,f)),x.setAttribute("outputDirection",new Sn(y,f)),t.push(new tn(x,null)),i>ao&&i--}return{lodMeshes:t,sizeLods:e}}function Rh(n,e,t){const i=new di(n,e,t);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function k_(n,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function U_(n,e,t){return new Ot({name:"SphericalGaussianBlur",defines:{SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ph(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Lh(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sf extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Up(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gn(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:hr});s.uniforms.tEquirect.value=t;const o=new tn(r,s),c=t.minFilter;return t.minFilter===Ur&&(t.minFilter=yn),new Vp(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function N_(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ec||f===Ac)if(e.has(d)){const m=e.get(d).texture;return c(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const y=new Sf(m.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",u),c(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===Ec||f===Ac,y=f===vs||f===wo;if(m||y){let x=t.get(d);const p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new dd(n)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const g=d.image;return m&&g&&g.height>0||y&&g&&a(g)?(i===null&&(i=new dd(n)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",l),x.texture):null}}}return d}function c(d,f){return f===Ec?d.mapping=vs:f===Ac&&(d.mapping=wo),d}function a(d){let f=0;const m=6;for(let y=0;y<m;y++)d[y]!==void 0&&f++;return f===m}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function z_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fo("WebGLRenderer: "+i+" extension not supported."),r}}}function F_(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function a(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function u(h){const d=[],f=h.index,m=h.attributes.position;let y=0;if(m===void 0)return;if(f!==null){const g=f.array;y=f.version;for(let b=0,v=g.length;b<v;b+=3){const M=g[b+0],S=g[b+1],A=g[b+2];d.push(M,S,S,A,A,M)}}else{const g=m.array;y=m.version;for(let b=0,v=g.length/3-1;b<v;b+=3){const M=b+0,S=b+1,A=b+2;d.push(M,S,S,A,A,M)}}const x=new(m.count>=65535?Lp:Pp)(d,1);x.version=y;const p=s.get(h);p&&e.remove(p),s.set(h,x)}function l(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:c,update:a,getWireframeAttribute:l}}function O_(n,e,t){let i;function r(h){i=h}let s,o;function c(h){s=h.type,o=h.bytesPerElement}function a(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function u(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,h*o,f),t.update(d,i,f))}function l(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let y=0;for(let x=0;x<f;x++)y+=d[x];t.update(y,i,1)}this.setMode=r,this.setIndex=c,this.render=a,this.renderInstances=u,this.renderMultiDraw=l}function B_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,c){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function H_(n,e,t){const i=new WeakMap,r=new Yt;function s(o,c,a){const u=o.morphTargetInfluences,l=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=l!==void 0?l.length:0;let d=i.get(c);if(d===void 0||d.count!==h){let E=function(){A.dispose(),i.delete(c),c.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=c.morphAttributes.position!==void 0,m=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],g=c.morphAttributes.color||[];let b=0;f===!0&&(b=1),m===!0&&(b=2),y===!0&&(b=3);let v=c.attributes.position.count*b,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*M*4*h),A=new Ap(S,v,M,h);A.type=zi,A.needsUpdate=!0;const _=b*4;for(let P=0;P<h;P++){const L=x[P],D=p[P],H=g[P],C=v*M*4*P;for(let I=0;I<L.count;I++){const O=I*_;f===!0&&(r.fromBufferAttribute(L,I),S[C+O+0]=r.x,S[C+O+1]=r.y,S[C+O+2]=r.z,S[C+O+3]=0),m===!0&&(r.fromBufferAttribute(D,I),S[C+O+4]=r.x,S[C+O+5]=r.y,S[C+O+6]=r.z,S[C+O+7]=0),y===!0&&(r.fromBufferAttribute(H,I),S[C+O+8]=r.x,S[C+O+9]=r.y,S[C+O+10]=r.z,S[C+O+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new rt(v,M)},i.set(c,d),c.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<u.length;y++)f+=u[y];const m=c.morphTargetsRelative?1:1-f;a.getUniforms().setValue(n,"morphTargetBaseInfluence",m),a.getUniforms().setValue(n,"morphTargetInfluences",u)}a.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),a.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function G_(n,e,t,i,r){let s=new WeakMap;function o(u){const l=r.render.frame,h=u.geometry,d=e.get(u,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),s.get(u)!==l&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function c(){s=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:c}}const V_={[dp]:"LINEAR_TONE_MAPPING",[fp]:"REINHARD_TONE_MAPPING",[hp]:"CINEON_TONE_MAPPING",[pp]:"ACES_FILMIC_TONE_MAPPING",[gp]:"AGX_TONE_MAPPING",[vp]:"NEUTRAL_TONE_MAPPING",[mp]:"CUSTOM_TONE_MAPPING"};function W_(n,e,t,i,r,s){const o=new di(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,a=null;const u=new on;u.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new St([0,2,0,0,2,0],2));const l=new Dx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new tn(u,l),d=new Hp(-1,1,1,-1,0,1);let f=null,m=null,y=!1,x,p=null,g=[],b=!1;this.setSize=function(v,M){o.setSize(v,M),c!==null&&c.setSize(v,M),a!==null&&a.setSize(v,M);for(let S=0;S<g.length;S++){const A=g[S];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){g=v,b=g.length>0&&g[0].isRenderPass===!0;const M=o.width,S=o.height;g.length>0&&c===null&&(c=new di(M,S,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),a=new di(M,S,{type:Ri,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<g.length;A++){const _=g[A];_.setSize&&_.setSize(M,S)}},this.begin=function(v,M){if(y||v.toneMapping===ir&&g.length===0)return!1;if(p=M,M!==null){const S=M.width,A=M.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return b===!1&&v.setRenderTarget(o),x=v.toneMapping,v.toneMapping=ir,!0},this.hasRenderPass=function(){return b},this.end=function(v,M){v.toneMapping=x,y=!0;let S=o,A=c;for(let _=0;_<g.length;_++){const E=g[_];E.enabled!==!1&&(E.render(v,A,S,M),E.needsSwap!==!1&&(S=A,A=A===c?a:c))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,l.defines={},Pt.getTransfer(f)===Ht&&(l.defines.SRGB_TRANSFER="");const _=V_[m];_&&(l.defines[_]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(h,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),a!==null&&a.dispose(),u.dispose(),l.dispose()}}const Xp=new qn,fd=new Eo(1,1),qp=new Ap,Yp=new ax,Kp=new Up,Dh=[],Ih=[],kh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function Do(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dh[r];if(s===void 0&&(s=new Float32Array(r),Dh[r]=s),e!==0){i.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,n[o].toArray(s,c)}return s}function Dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function In(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yc(n,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;n.uniform2fv(this.addr,e),In(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;n.uniform3fv(this.addr,e),In(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;n.uniform4fv(this.addr,e),In(t,e)}}function K_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Dn(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),In(t,i)}}function Z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Dn(t,i))return;Uh.set(i),n.uniformMatrix3fv(this.addr,!1,Uh),In(t,i)}}function j_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Dn(t,i))return;kh.set(i),n.uniformMatrix4fv(this.addr,!1,kh),In(t,i)}}function J_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;n.uniform2iv(this.addr,e),In(t,e)}}function eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;n.uniform3iv(this.addr,e),In(t,e)}}function tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;n.uniform4iv(this.addr,e),In(t,e)}}function nb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;n.uniform2uiv(this.addr,e),In(t,e)}}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;n.uniform3uiv(this.addr,e),In(t,e)}}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;n.uniform4uiv(this.addr,e),In(t,e)}}function ob(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?mf:pf,s=fd):s=Xp,t.setTexture2D(e||s,r)}function ab(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yp,r)}function lb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kp,r)}function cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qp,r)}function ub(n){switch(n){case 5126:return $_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return K_;case 35675:return Z_;case 35676:return j_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function db(n,e){n.uniform1fv(this.addr,e)}function fb(n,e){const t=Do(e,this.size,2);n.uniform2fv(this.addr,t)}function hb(n,e){const t=Do(e,this.size,3);n.uniform3fv(this.addr,t)}function pb(n,e){const t=Do(e,this.size,4);n.uniform4fv(this.addr,t)}function mb(n,e){const t=Do(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gb(n,e){const t=Do(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vb(n,e){const t=Do(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xb(n,e){n.uniform1iv(this.addr,e)}function yb(n,e){n.uniform2iv(this.addr,e)}function _b(n,e){n.uniform3iv(this.addr,e)}function bb(n,e){n.uniform4iv(this.addr,e)}function Mb(n,e){n.uniform1uiv(this.addr,e)}function Sb(n,e){n.uniform2uiv(this.addr,e)}function wb(n,e){n.uniform3uiv(this.addr,e)}function Tb(n,e){n.uniform4uiv(this.addr,e)}function Eb(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Dn(i,s)||(n.uniform1iv(this.addr,s),In(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=fd:o=Xp;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||o,s[c])}function Ab(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Dn(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yp,s[o])}function Cb(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Dn(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Kp,s[o])}function Rb(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Dn(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qp,s[o])}function Pb(n){switch(n){case 5126:return db;case 35664:return fb;case 35665:return hb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return _b;case 35669:case 35673:return bb;case 5125:return Mb;case 36294:return Sb;case 36295:return wb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}class Lb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ub(t.type)}}class Db{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pb(t.type)}}class Ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function zh(n,e){n.seq.push(e),n.map[e.id]=e}function kb(n,e,t){const i=n.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),o=nu.lastIndex;let c=s[1];const a=s[2]==="]",u=s[3];if(a&&(c=c|0),u===void 0||u==="["&&o+2===r){zh(t,u===void 0?new Lb(c,n,e):new Db(c,n,e));break}else{let h=t.map[c];h===void 0&&(h=new Ib(c),zh(t,h)),t=h}}}class Al{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const c=e.getActiveUniform(t,o),a=e.getUniformLocation(t,c.name);kb(c,a,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],a=i[c.id];a.needsUpdate!==!1&&c.setValue(e,a.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Fh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ub=37297;let Nb=0;function zb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;i.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return i.join(`
`)}const Oh=new gt;function Fb(n){Pt._getMatrix(Oh,Pt.workingColorSpace,n);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(n)){case Vl:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+zb(n.getShaderSource(e),c)}else return s}function Ob(n,e){const t=Fb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bb={[dp]:"Linear",[fp]:"Reinhard",[hp]:"Cineon",[pp]:"ACESFilmic",[gp]:"AgX",[vp]:"Neutral",[mp]:"Custom"};function Hb(n,e){const t=Bb[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ml=new U;function Gb(){Pt.getLuminanceCoefficients(ml);const n=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Wb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $b(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:c}}return t}function ea(n){return n!==""}function Hh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(n){return n.replace(Xb,Yb)}const qb=new Map;function Yb(n,e){let t=Mt[e];if(t===void 0){const i=qb.get(e);if(i!==void 0)t=Mt[i],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hd(t)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(n){return n.replace(Kb,Zb)}function Zb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const jb={[Ml]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function Jb(n){return jb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qb={[vs]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function eM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Qb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tM={[wo]:"ENVMAP_MODE_REFRACTION"};function nM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iM={[up]:"ENVMAP_BLENDING_MULTIPLY",[wv]:"ENVMAP_BLENDING_MIX",[Tv]:"ENVMAP_BLENDING_ADD"};function rM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iM[n.combine]||"ENVMAP_BLENDING_NONE"}function sM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const a=Jb(t),u=eM(t),l=nM(t),h=rM(t),d=sM(t),f=Vb(t),m=Wb(s),y=r.createProgram();let x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ea).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(x=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Mt.tonemapping_pars_fragment:"",t.toneMapping!==ir?Hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=hd(o),o=Hh(o,t),o=Gh(o,t),c=hd(c),c=Hh(c,t),c=Gh(c,t),o=Vh(o),c=Vh(c),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=g+x+o,v=g+p+c,M=Fh(r,r.VERTEX_SHADER,b),S=Fh(r,r.FRAGMENT_SHADER,v);r.attachShader(y,M),r.attachShader(y,S),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(M)||"",C=r.getShaderInfoLog(S)||"",I=D.trim(),O=H.trim(),$=C.trim();let oe=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,M,S);else{const te=Bh(r,M,"vertex"),le=Bh(r,S,"fragment");Ut("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+te+`
`+le)}else I!==""?ht("WebGLProgram: Program Info Log:",I):(O===""||$==="")&&(Z=!1);Z&&(L.diagnostics={runnable:oe,programLog:I,vertexShader:{log:O,prefix:x},fragmentShader:{log:$,prefix:p}})}r.deleteShader(M),r.deleteShader(S),_=new Al(r,y),E=$b(r,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,Ub)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=S,this}let aM=0;class lM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cM(e),t.set(e,i)),i}}class cM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function uM(n){return n===xs||n===Bl||n===Hl}function dM(n,e,t,i,r,s){const o=new Cp,c=new lM,a=new Set,u=[],l=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return a.add(_),_===0?"uv":`uv${_}`}function y(_,E,P,L,D,H){const C=L.fog,I=D.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,oe=e.get(_.envMap||O,$),Z=oe&&oe.mapping===hc?oe.image.height:null,te=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&ht("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const le=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=le!==void 0?le.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let ge,ve,we,Y;if(te){const Bt=er[te];ge=Bt.vertexShader,ve=Bt.fragmentShader}else{ge=_.vertexShader,ve=_.fragmentShader;const Bt=c.getVertexShaderStage(_),kt=c.getFragmentShaderStage(_);c.update(_,Bt,kt),we=Bt.id,Y=kt.id}const ee=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),ue=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,Ye=!!_.map,pt=!!_.matcap,et=!!oe,We=!!_.aoMap,dt=!!_.lightMap,Xe=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,wn=!!_.displacementMap,Kt=!!_.emissiveMap,an=!!_.metalnessMap,zt=!!_.roughnessMap,W=_.anisotropy>0,pn=_.clearcoat>0,Rt=_.dispersion>0,k=_.retroreflectivity>0,w=_.iridescence>0,q=_.sheen>0,J=_.transmission>0,ie=W&&!!_.anisotropyMap,Ee=pn&&!!_.clearcoatMap,De=pn&&!!_.clearcoatNormalMap,ce=pn&&!!_.clearcoatRoughnessMap,pe=w&&!!_.iridescenceMap,Le=w&&!!_.iridescenceThicknessMap,Qe=q&&!!_.sheenColorMap,ze=q&&!!_.sheenRoughnessMap,ke=!!_.specularMap,tt=!!_.specularColorMap,lt=!!_.specularIntensityMap,mt=J&&!!_.transmissionMap,X=J&&!!_.thicknessMap,Ie=!!_.gradientMap,he=!!_.alphaMap,Ue=_.alphaTest>0,Ve=!!_.alphaHash,xe=!!_.extensions;let it=ir;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(it=n.toneMapping);const qe={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:ge,fragmentShader:ve,defines:_.defines,customVertexShaderID:we,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:ue,instancingColor:ue&&D.instanceColor!==null,instancingMorph:ue&&D.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:pt,envMap:et,envMapMode:et&&oe.mapping,envMapCubeUVHeight:Z,aoMap:We,lightMap:dt,bumpMap:Xe,normalMap:xt,displacementMap:wn,emissiveMap:Kt,normalMapObjectSpace:xt&&_.normalMapType===Cv,normalMapTangentSpace:xt&&_.normalMapType===cd,packedNormalMap:xt&&_.normalMapType===cd&&uM(_.normalMap.format),metalnessMap:an,roughnessMap:zt,anisotropy:W,anisotropyMap:ie,clearcoat:pn,clearcoatMap:Ee,clearcoatNormalMap:De,clearcoatRoughnessMap:ce,dispersion:Rt,retroreflection:k,iridescence:w,iridescenceMap:pe,iridescenceThicknessMap:Le,sheen:q,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:ke,specularColorMap:tt,specularIntensityMap:lt,transmission:J,transmissionMap:mt,thicknessMap:X,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===ra&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:Ue,alphaHash:Ve,combine:_.combine,mapUv:Ye&&m(_.map.channel),aoMapUv:We&&m(_.aoMap.channel),lightMapUv:dt&&m(_.lightMap.channel),bumpMapUv:Xe&&m(_.bumpMap.channel),normalMapUv:xt&&m(_.normalMap.channel),displacementMapUv:wn&&m(_.displacementMap.channel),emissiveMapUv:Kt&&m(_.emissiveMap.channel),metalnessMapUv:an&&m(_.metalnessMap.channel),roughnessMapUv:zt&&m(_.roughnessMap.channel),anisotropyMapUv:ie&&m(_.anisotropyMap.channel),clearcoatMapUv:Ee&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&m(_.sheenRoughnessMap.channel),specularMapUv:ke&&m(_.specularMap.channel),specularColorMapUv:tt&&m(_.specularColorMap.channel),specularIntensityMapUv:lt&&m(_.specularIntensityMap.channel),transmissionMapUv:mt&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:he&&m(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||W),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ye||he),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ne,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&Pt.getTransfer(_.map.colorSpace)===Ht,decodeVideoTextureEmissive:Kt&&_.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(_.emissiveMap.colorSpace)===Ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===li,flipSided:_.side===ni,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=a.has(1),qe.vertexUv2s=a.has(2),qe.vertexUv3s=a.has(3),a.clear(),qe}function x(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),g(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function g(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){const E=f[_.type];let P;if(E){const L=er[E];P=Rx.clone(L.uniforms)}else P=_.uniforms;return P}function v(_,E){let P=l.get(E);return P!==void 0?++P.usedTimes:(P=new oM(n,E,_,r),u.push(P),l.set(E,P)),P}function M(_){if(--_.usedTimes===0){const E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),l.delete(_.cacheKey),_.destroy()}}function S(_){c.remove(_)}function A(){c.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:b,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:u,dispose:A}}function fM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let c=n.get(o);return c===void 0&&(c={},n.set(o,c)),c}function i(o){n.delete(o)}function r(o,c,a){n.get(o)[c]=a}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function c(d,f,m,y,x,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.materialVariant=o(d),g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function a(d,f,m,y,x,p,g){g.reversedDepth===!0&&(x=-x);const b=c(d,f,m,y,x,p);m.transmission>0?i.push(b):m.transparent===!0?r.push(b):t.push(b)}function u(d,f,m,y,x,p){const g=c(d,f,m,y,x,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function l(d,f){t.length>1&&t.sort(d||hM),i.length>1&&i.sort(f||$h),r.length>1&&r.sort(f||$h)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:u,finish:h,sort:l}}function pM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xh,n.set(i,[o])):r>=s.length?(o=new Xh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new vt};break;case"SpotLight":t={position:new U,direction:new U,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function gM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vM=0;function xM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yM(n){const e=new mM,t=gM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new It,o=new It;function c(u){let l=0,h=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,m=0,y=0,x=0,p=0,g=0,b=0,v=0,M=0,S=0,A=0,_=0,E=0,P=0;u.sort(xM);for(let D=0,H=u.length;D<H;D++){const C=u[D],I=C.color,O=C.intensity,$=C.distance;let oe=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===xs?oe=C.shadow.map.texture:oe=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)l+=I.r*O,h+=I.g*O,d+=I.b*O;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(C.sh.coefficients[Z],O);P++}else if(C.isSunLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,le=t.get(C);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[m]=le,i.sunShadowMap[m]=oe;const F=te.getViewportCount();for(let ne=0;ne<F;ne++)i.sunShadowMatrix[y+ne]=te.getMatrix(ne),i.sunShadowCascade[y+ne]=te._cascadeData[ne];y+=F,m++}i.sun[f]=Z,f++}else if(C.isDirectionalLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,le=t.get(C);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize=te.mapSize,i.directionalShadow[x]=le,i.directionalShadowMap[x]=oe,i.directionalShadowMatrix[x]=C.shadow.matrix,M++}i.directional[x]=Z,x++}else if(C.isSpotLight){const Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(I).multiplyScalar(O),Z.distance=$,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,i.spot[g]=Z;const te=C.shadow;if(C.map&&(i.spotLightMap[_]=C.map,_++,te.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[g]=te.matrix,C.castShadow){const le=t.get(C);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize=te.mapSize,i.spotShadow[g]=le,i.spotShadowMap[g]=oe,A++}g++}else if(C.isRectAreaLight){const Z=e.get(C);Z.color.copy(I).multiplyScalar(O),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),i.rectArea[b]=Z,b++}else if(C.isPointLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const te=C.shadow,le=t.get(C);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize=te.mapSize,le.shadowCameraNear=te.camera.near,le.shadowCameraFar=te.camera.far,i.pointShadow[p]=le,i.pointShadowMap[p]=oe,i.pointShadowMatrix[p]=C.shadow.matrix,S++}i.point[p]=Z,p++}else if(C.isHemisphereLight){const Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(O),Z.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[v]=Z,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.sunLength!==f||L.directionalLength!==x||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==b||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=x,i.spot.length=g,i.rectArea.length=b,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.sunLength=f,L.directionalLength=x,L.pointLength=p,L.spotLength=g,L.rectAreaLength=b,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=P,i.version=vM++)}function a(u,l){let h=0,d=0,f=0,m=0,y=0,x=0;const p=l.matrixWorldInverse;for(let g=0,b=u.length;g<b;g++){const v=u[g];if(v.isSunLight){const M=i.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(v.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:c,setupView:a,state:i}}function qh(n){const e=new yM(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function o(d){t.push(d)}function c(d){i.push(d)}function a(d){r.push(d)}function u(){e.setup(t)}function l(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:l,pushLight:o,pushShadow:c,pushLightProbeGrid:a}}function _M(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new qh(n),e.set(r,[c])):s>=o.length?(c=new qh(n),o.push(c)):c=o[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
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
}`,SM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],wM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Yh=new It,$o=new U,iu=new U;function TM(n,e,t){let i=new yf;const r=new rt,s=new rt,o=new Yt,c=new Ix,a=new kx,u={},l=t.maxTextureSize,h={[gs]:ni,[ni]:gs,[li]:li},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:bM,fragmentShader:MM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let p=this.type;this.render=function(S,A,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===sv&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ml);const E=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(hr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=p!==this.type;H&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(I=>I.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,I=S.length;C<I;C++){const O=S[C],$=O.shadow;if($===void 0){ht("WebGLShadowMap:",O,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const oe=$.getFrameExtents();r.multiply(oe),s.copy($.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/oe.x),r.x=s.x*oe.x,$.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/oe.y),r.y=s.y*oe.y,$.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||H===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Qo){if(O.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new di(r.x,r.y,{format:xs,type:Ri,minFilter:yn,magFilter:yn,generateMipmaps:!1}),$.map.texture.name=O.name+".shadowMap",$.map.depthTexture=new Eo(r.x,r.y,zi),$.map.depthTexture.name=O.name+".shadowMapDepth",$.map.depthTexture.format=xr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nn,$.map.depthTexture.magFilter=Nn}else O.isPointLight?($.map=new Sf(r.x),$.map.depthTexture=new Ax(r.x,$i)):($.map=new di(r.x,r.y),$.map.depthTexture=new Eo(r.x,r.y,$i)),$.map.depthTexture.name=O.name+".shadowMap",$.map.depthTexture.format=xr,this.type===Ml?($.map.depthTexture.compareFunction=Z?mf:pf,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Nn,$.map.depthTexture.magFilter=Nn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const te=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();O.isPointLight!==!0&&$.updateMatrices(O,_);for(let le=0;le<te;le++){const F=$.getCamera(le);if(O.isPointLight){const ne=$.camera,ge=$.matrix,ve=O.distance||ne.far;ve!==ne.far&&(ne.far=ve,ne.updateProjectionMatrix()),$o.setFromMatrixPosition(O.matrixWorld),ne.position.copy($o),iu.copy(ne.position),iu.add(SM[le]),ne.up.copy(wM[le]),ne.lookAt(iu),ne.updateMatrixWorld(),ge.makeTranslation(-$o.x,-$o.y,-$o.z),Yh.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Yh,ne.coordinateSystem,ne.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,le),n.clear();else{le===0&&(n.setRenderTarget($.map),n.clear());const ne=$.getViewport(le);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(o)}i=$.getFrustum(le),v(A,_,F,O,this.type)}$.isPointLightShadow!==!0&&this.type===Qo&&g($,_),$.needsUpdate=!1}p=this.type,x.needsUpdate=!1,n.setRenderTarget(E,P,L)};function g(S,A){const _=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new di(r.x,r.y,{format:xs,type:Ri}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,_,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,_,f,y,null)}function b(S,A,_,E){let P=null;const L=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?a:c,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=P.uuid,H=A.uuid;let C=u[D];C===void 0&&(C={},u[D]=C);let I=C[H];I===void 0&&(I=P.clone(),C[H]=I,A.addEventListener("dispose",M)),P=I}if(P.visible=A.visible,P.wireframe=A.wireframe,E===Qo?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:h[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=n.properties.get(P);D.light=_}return P}function v(S,A,_,E,P){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Qo)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const H=e.update(S),C=S.material;if(Array.isArray(C)){const I=H.groups;for(let O=0,$=I.length;O<$;O++){const oe=I[O],Z=C[oe.materialIndex];if(Z&&Z.visible){const te=b(S,Z,E,P);S.onBeforeShadow(n,S,A,_,H,te,oe),n.renderBufferDirect(_,null,H,te,S,oe),S.onAfterShadow(n,S,A,_,H,te,oe)}}}else if(C.visible){const I=b(S,C,E,P);S.onBeforeShadow(n,S,A,_,H,I,null),n.renderBufferDirect(_,null,H,I,S,null),S.onAfterShadow(n,S,A,_,H,I,null)}}const D=S.children;for(let H=0,C=D.length;H<C;H++)v(D[H],A,_,E,P)}function M(S){S.target.removeEventListener("dispose",M);for(const _ in u){const E=u[_],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function EM(n,e){function t(){let X=!1;const Ie=new Yt;let he=null;const Ue=new Yt(0,0,0,0);return{setMask:function(Ve){he!==Ve&&!X&&(n.colorMask(Ve,Ve,Ve,Ve),he=Ve)},setLocked:function(Ve){X=Ve},setClear:function(Ve,xe,it,qe,Bt){Bt===!0&&(Ve*=qe,xe*=qe,it*=qe),Ie.set(Ve,xe,it,qe),Ue.equals(Ie)===!1&&(n.clearColor(Ve,xe,it,qe),Ue.copy(Ie))},reset:function(){X=!1,he=null,Ue.set(-1,0,0,0)}}}function i(){let X=!1,Ie=!1,he=null,Ue=null,Ve=null;return{setReversed:function(xe){if(Ie!==xe){const it=e.get("EXT_clip_control");xe?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Ie=xe;const qe=Ve;Ve=null,this.setClear(qe)}},getReversed:function(){return Ie},setTest:function(xe){xe?ee(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(xe){he!==xe&&!X&&(n.depthMask(xe),he=xe)},setFunc:function(xe){if(Ie&&(xe=Ov[xe]),Ue!==xe){switch(xe){case Tu:n.depthFunc(n.NEVER);break;case Eu:n.depthFunc(n.ALWAYS);break;case Au:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case Cu:n.depthFunc(n.EQUAL);break;case Ru:n.depthFunc(n.GEQUAL);break;case Pu:n.depthFunc(n.GREATER);break;case Lu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ve!==xe&&(Ve=xe,Ie&&(xe=1-xe),n.clearDepth(xe))},reset:function(){X=!1,he=null,Ue=null,Ve=null,Ie=!1}}}function r(){let X=!1,Ie=null,he=null,Ue=null,Ve=null,xe=null,it=null,qe=null,Bt=null;return{setTest:function(kt){X||(kt?ee(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(kt){Ie!==kt&&!X&&(n.stencilMask(kt),Ie=kt)},setFunc:function(kt,si,On){(he!==kt||Ue!==si||Ve!==On)&&(n.stencilFunc(kt,si,On),he=kt,Ue=si,Ve=On)},setOp:function(kt,si,On){(xe!==kt||it!==si||qe!==On)&&(n.stencilOp(kt,si,On),xe=kt,it=si,qe=On)},setLocked:function(kt){X=kt},setClear:function(kt){Bt!==kt&&(n.clearStencil(kt),Bt=kt)},reset:function(){X=!1,Ie=null,he=null,Ue=null,Ve=null,xe=null,it=null,qe=null,Bt=null}}}const s=new t,o=new i,c=new r,a=new WeakMap,u=new WeakMap;let l={},h={},d={},f=new WeakMap,m=[],y=null,x=!1,p=null,g=null,b=null,v=null,M=null,S=null,A=null,_=new vt(0,0,0),E=0,P=!1,L=null,D=null,H=null,C=null,I=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,oe=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=oe>=2);let te=null,le={};const F=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),ge=new Yt().fromArray(F),ve=new Yt().fromArray(ne);function we(X,Ie,he,Ue){const Ve=new Uint8Array(4),xe=n.createTexture();n.bindTexture(X,xe),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<he;it++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(Ie+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return xe}const Y={};Y[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ee(n.DEPTH_TEST),o.setFunc(xa),Xe(!1),xt(Kf),ee(n.CULL_FACE),We(hr);function ee(X){l[X]!==!0&&(n.enable(X),l[X]=!0)}function Me(X){l[X]!==!1&&(n.disable(X),l[X]=!1)}function ue(X,Ie){return d[X]!==Ie?(n.bindFramebuffer(X,Ie),d[X]=Ie,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ie),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function _e(X,Ie){let he=m,Ue=!1;if(X){he=f.get(Ie),he===void 0&&(he=[],f.set(Ie,he));const Ve=X.textures;if(he.length!==Ve.length||he[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,it=Ve.length;xe<it;xe++)he[xe]=n.COLOR_ATTACHMENT0+xe;he.length=Ve.length,Ue=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(he)}function Ye(X){return y!==X?(n.useProgram(X),y=X,!0):!1}const pt={[no]:n.FUNC_ADD,[av]:n.FUNC_SUBTRACT,[lv]:n.FUNC_REVERSE_SUBTRACT};pt[cv]=n.MIN,pt[uv]=n.MAX;const et={[dv]:n.ZERO,[fv]:n.ONE,[hv]:n.SRC_COLOR,[lp]:n.SRC_ALPHA,[yv]:n.SRC_ALPHA_SATURATE,[vv]:n.DST_COLOR,[mv]:n.DST_ALPHA,[pv]:n.ONE_MINUS_SRC_COLOR,[cp]:n.ONE_MINUS_SRC_ALPHA,[xv]:n.ONE_MINUS_DST_COLOR,[gv]:n.ONE_MINUS_DST_ALPHA,[_v]:n.CONSTANT_COLOR,[bv]:n.ONE_MINUS_CONSTANT_COLOR,[Mv]:n.CONSTANT_ALPHA,[Sv]:n.ONE_MINUS_CONSTANT_ALPHA};function We(X,Ie,he,Ue,Ve,xe,it,qe,Bt,kt){if(X===hr){x===!0&&(Me(n.BLEND),x=!1);return}if(x===!1&&(ee(n.BLEND),x=!0),X!==ov){if(X!==p||kt!==P){if((g!==no||M!==no)&&(n.blendEquation(n.FUNC_ADD),g=no,M=no),kt)switch(X){case ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ui:n.blendFunc(n.ONE,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ut("WebGLState: Invalid blending: ",X);break}else switch(X){case ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zf:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",X);break}b=null,v=null,S=null,A=null,_.set(0,0,0),E=0,p=X,P=kt}return}Ve=Ve||Ie,xe=xe||he,it=it||Ue,(Ie!==g||Ve!==M)&&(n.blendEquationSeparate(pt[Ie],pt[Ve]),g=Ie,M=Ve),(he!==b||Ue!==v||xe!==S||it!==A)&&(n.blendFuncSeparate(et[he],et[Ue],et[xe],et[it]),b=he,v=Ue,S=xe,A=it),(qe.equals(_)===!1||Bt!==E)&&(n.blendColor(qe.r,qe.g,qe.b,Bt),_.copy(qe),E=Bt),p=X,P=!1}function dt(X,Ie){X.side===li?Me(n.CULL_FACE):ee(n.CULL_FACE);let he=X.side===ni;Ie&&(he=!he),Xe(he),X.blending===ra&&X.transparent===!1?We(hr):We(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ue=X.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(X){L!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),L=X)}function xt(X){X!==iv?(ee(n.CULL_FACE),X!==D&&(X===Kf?n.cullFace(n.BACK):X===rv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),D=X}function wn(X){X!==H&&($&&n.lineWidth(X),H=X)}function Kt(X,Ie,he){X?(ee(n.POLYGON_OFFSET_FILL),(C!==Ie||I!==he)&&(C=Ie,I=he,o.getReversed()&&(Ie=-Ie),n.polygonOffset(Ie,he))):Me(n.POLYGON_OFFSET_FILL)}function an(X){X?ee(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function zt(X){X===void 0&&(X=n.TEXTURE0+O-1),te!==X&&(n.activeTexture(X),te=X)}function W(X,Ie,he){he===void 0&&(te===null?he=n.TEXTURE0+O-1:he=te);let Ue=le[he];Ue===void 0&&(Ue={type:void 0,texture:void 0},le[he]=Ue),(Ue.type!==X||Ue.texture!==Ie)&&(te!==he&&(n.activeTexture(he),te=he),n.bindTexture(X,Ie||Y[X]),Ue.type=X,Ue.texture=Ie)}function pn(){const X=le[te];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Rt(){try{n.compressedTexImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function w(){try{n.texSubImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function q(){try{n.texSubImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Ee(){try{n.texStorage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function De(){try{n.texStorage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function ce(){try{n.texImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function pe(){try{n.texImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Le(X){return h[X]!==void 0?h[X]:n.getParameter(X)}function Qe(X,Ie){h[X]!==Ie&&(n.pixelStorei(X,Ie),h[X]=Ie)}function ze(X){ge.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function ke(X){ve.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ve.copy(X))}function tt(X,Ie){let he=u.get(Ie);he===void 0&&(he=new WeakMap,u.set(Ie,he));let Ue=he.get(X);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ie,X.name),he.set(X,Ue))}function lt(X,Ie){const Ue=u.get(Ie).get(X);a.get(Ie)!==Ue&&(n.uniformBlockBinding(Ie,Ue,X.__bindingPointIndex),a.set(Ie,Ue))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},h={},te=null,le={},d={},f=new WeakMap,m=[],y=null,x=!1,p=null,g=null,b=null,v=null,M=null,S=null,A=null,_=new vt(0,0,0),E=0,P=!1,L=null,D=null,H=null,C=null,I=null,ge.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:ee,disable:Me,bindFramebuffer:ue,drawBuffers:_e,useProgram:Ye,setBlending:We,setMaterial:dt,setFlipSided:Xe,setCullFace:xt,setLineWidth:wn,setPolygonOffset:Kt,setScissorTest:an,activeTexture:zt,bindTexture:W,unbindTexture:pn,compressedTexImage2D:Rt,compressedTexImage3D:k,texImage2D:ce,texImage3D:pe,pixelStorei:Qe,getParameter:Le,updateUBOMapping:tt,uniformBlockBinding:lt,texStorage2D:Ee,texStorage3D:De,texSubImage2D:w,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:ze,viewport:ke,reset:mt}}function AM(n,e,t,i,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,l=new WeakMap,h=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,w){return m?new OffscreenCanvas(k,w):Wl("canvas")}function x(k,w,q){let J=1;const ie=Rt(k);if((ie.width>q||ie.height>q)&&(J=q/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ee=Math.floor(J*ie.width),De=Math.floor(J*ie.height);d===void 0&&(d=y(Ee,De));const ce=w?y(Ee,De):d;return ce.width=Ee,ce.height=De,ce.getContext("2d").drawImage(k,0,0,Ee,De),ht("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Ee+"x"+De+")."),ce}else return"data"in k&&ht("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),k;return k}function p(k){return k.generateMipmaps}function g(k){n.generateMipmap(k)}function b(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(k,w,q,J,ie,Ee=!1){if(k!==null){if(n[k]!==void 0)return n[k];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let De;J&&(De=e.get("EXT_texture_norm16"),De||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=w;if(w===n.RED&&(q===n.FLOAT&&(ce=n.R32F),q===n.HALF_FLOAT&&(ce=n.R16F),q===n.UNSIGNED_BYTE&&(ce=n.R8),q===n.UNSIGNED_SHORT&&De&&(ce=De.R16_EXT),q===n.SHORT&&De&&(ce=De.R16_SNORM_EXT)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.R8UI),q===n.UNSIGNED_SHORT&&(ce=n.R16UI),q===n.UNSIGNED_INT&&(ce=n.R32UI),q===n.BYTE&&(ce=n.R8I),q===n.SHORT&&(ce=n.R16I),q===n.INT&&(ce=n.R32I)),w===n.RG&&(q===n.FLOAT&&(ce=n.RG32F),q===n.HALF_FLOAT&&(ce=n.RG16F),q===n.UNSIGNED_BYTE&&(ce=n.RG8),q===n.UNSIGNED_SHORT&&De&&(ce=De.RG16_EXT),q===n.SHORT&&De&&(ce=De.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.RG8UI),q===n.UNSIGNED_SHORT&&(ce=n.RG16UI),q===n.UNSIGNED_INT&&(ce=n.RG32UI),q===n.BYTE&&(ce=n.RG8I),q===n.SHORT&&(ce=n.RG16I),q===n.INT&&(ce=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),q===n.UNSIGNED_INT&&(ce=n.RGB32UI),q===n.BYTE&&(ce=n.RGB8I),q===n.SHORT&&(ce=n.RGB16I),q===n.INT&&(ce=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),q===n.UNSIGNED_INT&&(ce=n.RGBA32UI),q===n.BYTE&&(ce=n.RGBA8I),q===n.SHORT&&(ce=n.RGBA16I),q===n.INT&&(ce=n.RGBA32I)),w===n.RGB&&(q===n.UNSIGNED_SHORT&&De&&(ce=De.RGB16_EXT),q===n.SHORT&&De&&(ce=De.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),w===n.RGBA){const pe=Ee?Vl:Pt.getTransfer(ie);q===n.FLOAT&&(ce=n.RGBA32F),q===n.HALF_FLOAT&&(ce=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ce=pe===Ht?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&De&&(ce=De.RGBA16_EXT),q===n.SHORT&&De&&(ce=De.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(k,w){let q;return k?w===null||w===$i||w===ba?q=n.DEPTH24_STENCIL8:w===zi?q=n.DEPTH32F_STENCIL8:w===_a&&(q=n.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$i||w===ba?q=n.DEPTH_COMPONENT24:w===zi?q=n.DEPTH_COMPONENT32F:w===_a&&(q=n.DEPTH_COMPONENT16),q}function S(k,w){return p(k)===!0||k.isFramebufferTexture&&k.minFilter!==Nn&&k.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function A(k){const w=k.target;w.removeEventListener("dispose",A),E(w),w.isVideoTexture&&l.delete(w),w.isHTMLTexture&&h.delete(w)}function _(k){const w=k.target;w.removeEventListener("dispose",_),L(w)}function E(k){const w=i.get(k);if(w.__webglInit===void 0)return;const q=k.source,J=f.get(q);if(J){const ie=J[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(k),Object.keys(J).length===0&&f.delete(q)}i.remove(k)}function P(k){const w=i.get(k);n.deleteTexture(w.__webglTexture);const q=k.source,J=f.get(q);delete J[w.__cacheKey],o.memory.textures--}function L(k){const w=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ie=0;ie<w.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(w.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=k.textures;for(let J=0,ie=q.length;J<ie;J++){const Ee=i.get(q[J]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(q[J])}i.remove(k)}let D=0;function H(){D=0}function C(){return D}function I(k){D=k}function O(){const k=D;return k>=r.maxTextures&&ht("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,k}function $(k){const w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function oe(k,w){const q=i.get(k);if(k.isVideoTexture&&W(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&q.__version!==k.version){const J=k.image;if(J===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(q,k,w);return}}else k.isExternalTexture&&(q.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function Z(k,w){const q=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&q.__version!==k.version){Me(q,k,w);return}else k.isExternalTexture&&(q.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function te(k,w){const q=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&q.__version!==k.version){Me(q,k,w);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function le(k,w){const q=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&q.__version!==k.version){ue(q,k,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}const F={[ya]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[Du]:n.MIRRORED_REPEAT},ne={[Nn]:n.NEAREST,[Ev]:n.NEAREST_MIPMAP_NEAREST,[Ga]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Cc]:n.LINEAR_MIPMAP_NEAREST,[Ur]:n.LINEAR_MIPMAP_LINEAR},ge={[Pv]:n.NEVER,[Uv]:n.ALWAYS,[Lv]:n.LESS,[pf]:n.LEQUAL,[Dv]:n.EQUAL,[mf]:n.GEQUAL,[Iv]:n.GREATER,[kv]:n.NOTEQUAL};function ve(k,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===Cc||w.magFilter===Ga||w.magFilter===Ur||w.minFilter===yn||w.minFilter===Cc||w.minFilter===Ga||w.minFilter===Ur)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,F[w.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,F[w.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,F[w.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,ne[w.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==Ga&&w.minFilter!==Ur||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function we(k,w){let q=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",A));const J=w.source;let ie=f.get(J);ie===void 0&&(ie={},f.set(J,ie));const Ee=$(w);if(Ee!==k.__cacheKey){ie[Ee]===void 0&&(ie[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ie[Ee].usedTimes++;const De=ie[k.__cacheKey];De!==void 0&&(ie[k.__cacheKey].usedTimes--,De.usedTimes===0&&P(w)),k.__cacheKey=Ee,k.__webglTexture=ie[Ee].texture}return q}function Y(k,w,q){return Math.floor(Math.floor(k/q)/w)}function ee(k,w,q,J){const Ee=k.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,J,w.data);else{Ee.sort((Qe,ze)=>Qe.start-ze.start);let De=0;for(let Qe=1;Qe<Ee.length;Qe++){const ze=Ee[De],ke=Ee[Qe],tt=ze.start+ze.count,lt=Y(ke.start,w.width,4),mt=Y(ze.start,w.width,4);ke.start<=tt+1&&lt===mt&&Y(ke.start+ke.count-1,w.width,4)===lt?ze.count=Math.max(ze.count,ke.start+ke.count-ze.start):(++De,Ee[De]=ke)}Ee.length=De+1;const ce=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Qe=0,ze=Ee.length;Qe<ze;Qe++){const ke=Ee[Qe],tt=Math.floor(ke.start/4),lt=Math.ceil(ke.count/4),mt=tt%w.width,X=Math.floor(tt/w.width),Ie=lt,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,mt,X,Ie,he,q,J,w.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function Me(k,w,q){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);const ie=we(k,w),Ee=w.source;t.bindTexture(J,k.__webglTexture,n.TEXTURE0+q);const De=i.get(Ee);if(Ee.version!==De.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const he=Pt.getPrimaries(Pt.workingColorSpace),Ue=w.colorSpace===Ir?null:Pt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Ir||he===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let pe=x(w.image,!1,r.maxTextureSize);pe=pn(w,pe);const Le=s.convert(w.format,w.colorSpace),Qe=s.convert(w.type);let ze=v(w.internalFormat,Le,Qe,w.normalized,w.colorSpace,w.isVideoTexture);ve(J,w);let ke;const tt=w.mipmaps,lt=w.isVideoTexture!==!0,mt=De.__version===void 0||ie===!0,X=Ee.dataReady,Ie=S(w,pe);if(w.isDepthTexture)ze=M(w.format===ss,w.type),mt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Le,Qe,null));else if(w.isDataTexture)if(tt.length>0){lt&&mt&&t.texStorage2D(n.TEXTURE_2D,Ie,ze,tt[0].width,tt[0].height);for(let he=0,Ue=tt.length;he<Ue;he++)ke=tt[he],lt?X&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Le,Qe,ke.data):t.texImage2D(n.TEXTURE_2D,he,ze,ke.width,ke.height,0,Le,Qe,ke.data);w.generateMipmaps=!1}else lt?(mt&&t.texStorage2D(n.TEXTURE_2D,Ie,ze,pe.width,pe.height),X&&ee(w,pe,Le,Qe)):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Le,Qe,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,ze,tt[0].width,tt[0].height,pe.depth);for(let he=0,Ue=tt.length;he<Ue;he++)if(ke=tt[he],w.format!==Ti)if(Le!==null)if(lt){if(X)if(w.layerUpdates.size>0){const Ve=Ah(ke.width,ke.height,w.format,w.type);for(const xe of w.layerUpdates){const it=ke.data.subarray(xe*Ve/ke.data.BYTES_PER_ELEMENT,(xe+1)*Ve/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,xe,ke.width,ke.height,1,Le,it)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,pe.depth,Le,ke.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,ze,ke.width,ke.height,pe.depth,0,ke.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,pe.depth,Le,Qe,ke.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,ze,ke.width,ke.height,pe.depth,0,Le,Qe,ke.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{lt&&mt&&t.texStorage2D(n.TEXTURE_2D,Ie,ze,tt[0].width,tt[0].height);for(let he=0,Ue=tt.length;he<Ue;he++)ke=tt[he],w.format!==Ti?Le!==null?lt?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Le,ke.data):t.compressedTexImage2D(n.TEXTURE_2D,he,ze,ke.width,ke.height,0,ke.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?X&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Le,Qe,ke.data):t.texImage2D(n.TEXTURE_2D,he,ze,ke.width,ke.height,0,Le,Qe,ke.data)}else if(w.isDataArrayTexture)if(lt){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,ze,pe.width,pe.height,pe.depth),X)if(w.layerUpdates.size>0){const he=Ah(pe.width,pe.height,w.format,w.type);for(const Ue of w.layerUpdates){const Ve=pe.data.subarray(Ue*he/pe.data.BYTES_PER_ELEMENT,(Ue+1)*he/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,pe.width,pe.height,1,Le,Qe,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,Qe,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,Le,Qe,pe.data);else if(w.isData3DTexture)lt?(mt&&t.texStorage3D(n.TEXTURE_3D,Ie,ze,pe.width,pe.height,pe.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,Qe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,Le,Qe,pe.data);else if(w.isFramebufferTexture){if(mt)if(lt)t.texStorage2D(n.TEXTURE_2D,Ie,ze,pe.width,pe.height);else{let he=pe.width,Ue=pe.height;for(let Ve=0;Ve<Ie;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,ze,he,Ue,0,Le,Qe,null),he>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),pe.parentNode!==he){he.appendChild(pe),h.add(w),he.onpaint=Ue=>{const Ve=Ue.changedElements;for(const xe of h)Ve.includes(xe.image)&&(xe.needsUpdate=!0)},he.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pe);else{const Ve=n.RGBA,xe=n.RGBA,it=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ve,xe,it,pe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(lt&&mt){const he=Rt(tt[0]);t.texStorage2D(n.TEXTURE_2D,Ie,ze,he.width,he.height)}for(let he=0,Ue=tt.length;he<Ue;he++)ke=tt[he],lt?X&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Le,Qe,ke):t.texImage2D(n.TEXTURE_2D,he,ze,Le,Qe,ke);w.generateMipmaps=!1}else if(lt){if(mt){const he=Rt(pe);t.texStorage2D(n.TEXTURE_2D,Ie,ze,he.width,he.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Qe,pe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Le,Qe,pe);p(w)&&g(J),De.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function ue(k,w,q){if(w.image.length!==6)return;const J=we(k,w),ie=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+q);const Ee=i.get(ie);if(ie.version!==Ee.__version||J===!0){t.activeTexture(n.TEXTURE0+q);const De=Pt.getPrimaries(Pt.workingColorSpace),ce=w.colorSpace===Ir?null:Pt.getPrimaries(w.colorSpace),pe=w.colorSpace===Ir||De===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Qe=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let xe=0;xe<6;xe++)!Le&&!Qe?ze[xe]=x(w.image[xe],!0,r.maxCubemapSize):ze[xe]=Qe?w.image[xe].image:w.image[xe],ze[xe]=pn(w,ze[xe]);const ke=ze[0],tt=s.convert(w.format,w.colorSpace),lt=s.convert(w.type),mt=v(w.internalFormat,tt,lt,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,Ie=Ee.__version===void 0||J===!0,he=ie.dataReady;let Ue=S(w,ke);ve(n.TEXTURE_CUBE_MAP,w);let Ve;if(Le){X&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,mt,ke.width,ke.height);for(let xe=0;xe<6;xe++){Ve=ze[xe].mipmaps;for(let it=0;it<Ve.length;it++){const qe=Ve[it];w.format!==Ti?tt!==null?X?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,0,0,qe.width,qe.height,tt,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,mt,qe.width,qe.height,0,qe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,0,0,qe.width,qe.height,tt,lt,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,mt,qe.width,qe.height,0,tt,lt,qe.data)}}}else{if(Ve=w.mipmaps,X&&Ie){Ve.length>0&&Ue++;const xe=Rt(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Qe){X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze[xe].width,ze[xe].height,tt,lt,ze[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,ze[xe].width,ze[xe].height,0,tt,lt,ze[xe].data);for(let it=0;it<Ve.length;it++){const Bt=Ve[it].image[xe].image;X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,0,0,Bt.width,Bt.height,tt,lt,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,mt,Bt.width,Bt.height,0,tt,lt,Bt.data)}}else{X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,tt,lt,ze[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,tt,lt,ze[xe]);for(let it=0;it<Ve.length;it++){const qe=Ve[it];X?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,0,0,tt,lt,qe.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,mt,tt,lt,qe.image[xe])}}}p(w)&&g(n.TEXTURE_CUBE_MAP),Ee.__version=ie.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function _e(k,w,q,J,ie,Ee){const De=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),pe=v(q.internalFormat,De,ce,q.normalized,q.colorSpace),Le=i.get(w),Qe=i.get(q);if(Qe.__renderTarget=w,!Le.__hasExternalTextures){const ze=Math.max(1,w.width>>Ee),ke=Math.max(1,w.height>>Ee);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Ee,pe,ze,ke,w.depth,0,De,ce,null):t.texImage2D(ie,Ee,pe,ze,ke,0,De,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),zt(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,Qe.__webglTexture,0,an(w)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,Qe.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(k,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,k),w.depthBuffer){const J=w.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Ee=M(w.stencilBuffer,ie),De=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;zt(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,an(w),Ee,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,an(w),Ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,k)}else{const J=w.textures;for(let ie=0;ie<J.length;ie++){const Ee=J[ie],De=s.convert(Ee.format,Ee.colorSpace),ce=s.convert(Ee.type),pe=v(Ee.internalFormat,De,ce,Ee.normalized,Ee.colorSpace);zt(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,an(w),pe,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,an(w),pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(k,w,q){const J=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(w.depthTexture);if(ie.__renderTarget=w,(!ie.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ve(n.TEXTURE_CUBE_MAP,w.depthTexture);const Le=s.convert(w.depthTexture.format),Qe=s.convert(w.depthTexture.type);let ze;w.depthTexture.format===xr?ze=n.DEPTH_COMPONENT24:w.depthTexture.format===ss&&(ze=n.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,ze,w.width,w.height,0,Le,Qe,null)}}else oe(w.depthTexture,0);const Ee=ie.__webglTexture,De=an(w),ce=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,pe=w.depthTexture.format===ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===xr)zt(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ce,Ee,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,pe,ce,Ee,0);else if(w.depthTexture.format===ss)zt(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ce,Ee,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,pe,ce,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(k){const w=i.get(k),q=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){const J=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=J}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let J=0;J<6;J++)pt(w.__webglFramebuffer[J],k,J);else{const J=k.texture.mipmaps;J&&J.length>0?pt(w.__webglFramebuffer[0],k,0):pt(w.__webglFramebuffer,k,0)}else if(q){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=n.createRenderbuffer(),Ye(w.__webglDepthbuffer[J],k,!1);else{const ie=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Ee)}}else{const J=k.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ye(w.__webglDepthbuffer,k,!1);else{const ie=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(k,w,q){const J=i.get(k);w!==void 0&&_e(J.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&et(k)}function dt(k){const w=k.texture,q=i.get(k),J=i.get(w);k.addEventListener("dispose",_);const ie=k.textures,Ee=k.isWebGLCubeRenderTarget===!0,De=ie.length>1;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),Ee){q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[ce]=[];for(let pe=0;pe<w.mipmaps.length;pe++)q.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else q.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)q.__webglFramebuffer[ce]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(De)for(let ce=0,pe=ie.length;ce<pe;ce++){const Le=i.get(ie[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(k.samples>0&&zt(k)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const pe=ie[ce];q.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);const Le=s.convert(pe.format,pe.colorSpace),Qe=s.convert(pe.type),ze=v(pe.internalFormat,Le,Qe,pe.normalized,pe.colorSpace,k.isXRRenderTarget===!0),ke=an(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ze,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,q.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(q.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ve(n.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)_e(q.__webglFramebuffer[ce][pe],k,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else _e(q.__webglFramebuffer[ce],k,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(w)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ce=0,pe=ie.length;ce<pe;ce++){const Le=ie[ce],Qe=i.get(Le);let ze=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ze=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ze,Qe.__webglTexture),ve(ze,Le),_e(q.__webglFramebuffer,k,Le,n.COLOR_ATTACHMENT0+ce,ze,0),p(Le)&&g(ze)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ce=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),ve(ce,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)_e(q.__webglFramebuffer[pe],k,w,n.COLOR_ATTACHMENT0,ce,pe);else _e(q.__webglFramebuffer,k,w,n.COLOR_ATTACHMENT0,ce,0);p(w)&&g(ce),t.unbindTexture()}k.depthBuffer&&et(k)}function Xe(k){const w=k.textures;for(let q=0,J=w.length;q<J;q++){const ie=w[q];if(p(ie)){const Ee=b(k),De=i.get(ie).__webglTexture;t.bindTexture(Ee,De),g(Ee),t.unbindTexture()}}}const xt=[],wn=[];function Kt(k){if(k.samples>0){if(zt(k)===!1){const w=k.textures,q=k.width,J=k.height;let ie=n.COLOR_BUFFER_BIT;const Ee=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(k),ce=w.length>1;if(ce)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const pe=k.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const Qe=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,q,J,0,0,q,J,ie,n.NEAREST),a===!0&&(xt.length=0,wn.length=0,xt.push(n.COLOR_ATTACHMENT0+Le),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(xt.push(Ee),wn.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,wn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const Qe=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&a){const w=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function an(k){return Math.min(r.maxSamples,k.samples)}function zt(k){const w=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(k){const w=o.render.frame;l.get(k)!==w&&(l.set(k,w),k.update())}function pn(k,w){const q=k.colorSpace,J=k.format,ie=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||q!==Gl&&q!==Ir&&(Pt.getTransfer(q)===Ht?(J!==Ti||ie!==ti)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",q)),w}function Rt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(u.width=k.naturalWidth||k.width,u.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(u.width=k.displayWidth,u.height=k.displayHeight):(u.width=k.width,u.height=k.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.getTextureUnits=C,this.setTextureUnits=I,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=le,this.rebindTextures=We,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function CM(n,e){function t(i,r=Ir){let s;const o=Pt.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===lf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yp)return n.BYTE;if(i===_p)return n.SHORT;if(i===_a)return n.UNSIGNED_SHORT;if(i===af)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Sp)return n.ALPHA;if(i===wp)return n.RGB;if(i===Ti)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===ss)return n.DEPTH_STENCIL;if(i===uf)return n.RED;if(i===df)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===ff)return n.RG_INTEGER;if(i===hf)return n.RGBA_INTEGER;if(i===Sl||i===wl||i===Tl||i===El)if(o===Ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Iu||i===ku||i===Uu||i===Nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zu||i===Fu||i===Ou||i===Bu||i===Hu||i===Bl||i===Gu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zu||i===Fu)return o===Ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ou)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bu)return s.COMPRESSED_R11_EAC;if(i===Hu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bl)return s.COMPRESSED_RG11_EAC;if(i===Gu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vu||i===Wu||i===$u||i===Xu||i===qu||i===Yu||i===Ku||i===Zu||i===ju||i===Ju||i===Qu||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$u)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ku)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ju)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ju)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qu)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return o===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===id||i===rd||i===sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===id)return o===Ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===od||i===ad||i===Hl||i===ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===od)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ot({vertexShader:RM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends Ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,c="local-floor",a=1,u=null,l=null,h=null,d=null,f=null,m=null;const y=typeof XRWebGLBinding<"u",x=new LM,p={},g=t.getContextAttributes();let b=null,v=null;const M=[],S=[],A=new rt;let _=null,E=null;const P=new vi;P.viewport=new Yt;const L=new vi;L.viewport=new Yt;const D=[P,L],H=new Ox;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=M[Y];return ee===void 0&&(ee=new Uc,M[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=M[Y];return ee===void 0&&(ee=new Uc,M[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=M[Y];return ee===void 0&&(ee=new Uc,M[Y]=ee),ee.getHandSpace()};function O(Y){const ee=S.indexOf(Y.inputSource);if(ee===-1)return;const Me=M[ee];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,u||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",oe);for(let Y=0;Y<M.length;Y++){const ee=S[Y];ee!==null&&(S[Y]=null,M[Y].disconnect(ee))}C=null,I=null,x.reset();for(const Y in p)delete p[Y];if(e.setRenderTarget(b),f=null,d=null,h=null,r=null,v=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){const Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ue=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=g.stencil?ss:xr,ue=g.stencil?ba:$i);const Ye={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new di(d.textureWidth,d.textureHeight,{format:Ti,type:ti,depthTexture:new Eo(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new di(f.framebufferWidth,f.framebufferHeight,{format:Ti,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await r.requestReferenceSpace(c),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(Y){for(let ee=0;ee<Y.removed.length;ee++){const Me=Y.removed[ee],ue=S.indexOf(Me);ue>=0&&(S[ue]=null,M[ue].disconnect(Me))}for(let ee=0;ee<Y.added.length;ee++){const Me=Y.added[ee];let ue=S.indexOf(Me);if(ue===-1){for(let Ye=0;Ye<M.length;Ye++)if(Ye>=S.length){S.push(Me),ue=Ye;break}else if(S[Ye]===null){S[Ye]=Me,ue=Ye;break}if(ue===-1)break}const _e=M[ue];_e&&_e.connect(Me)}}const Z=new U,te=new U;function le(Y,ee,Me){Z.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);const ue=Z.distanceTo(te),_e=ee.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,pt=_e[14]/(_e[10]-1),et=_e[14]/(_e[10]+1),We=(_e[9]+1)/_e[5],dt=(_e[9]-1)/_e[5],Xe=(_e[8]-1)/_e[0],xt=(Ye[8]+1)/Ye[0],wn=pt*Xe,Kt=pt*xt,an=ue/(-Xe+xt),zt=an*-Xe;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(an),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const W=pt+an,pn=et+an,Rt=wn-zt,k=Kt+(ue-zt),w=We*et/pn*W,q=dt*et/pn*W;Y.projectionMatrix.makePerspective(Rt,k,w,q,W,pn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function F(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,Me=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),H.near=L.near=P.near=ee,H.far=L.far=P.far=Me,(C!==H.near||I!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,I=H.far),H.layers.mask=Y.layers.mask|6,P.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;const ue=Y.parent,_e=H.cameras;F(H,ue);for(let Ye=0;Ye<_e.length;Ye++)F(_e[Ye],ue);_e.length===2?le(H,P,L):H.projectionMatrix.copy(P.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),ne(Y,H,ue)};function ne(Y,ee,Me){Me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return a},this.setFoveation=function(Y){a=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let ge=null;function ve(Y,ee){if(l=ee.getViewerPose(u||o),m=ee,l!==null){const Me=l.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ue=!1;Me.length!==H.cameras.length&&(H.cameras.length=0,ue=!0);for(let et=0;et<Me.length;et++){const We=Me[et];let dt=null;if(f!==null)dt=f.getViewport(We);else{const xt=h.getViewSubImage(d,We);dt=xt.viewport,et===0&&(e.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(v))}let Xe=D[et];Xe===void 0&&(Xe=new vi,Xe.layers.enable(et),Xe.viewport=new Yt,D[et]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(dt.x,dt.y,dt.width,dt.height),et===0&&(H.matrix.copy(Xe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ue===!0&&H.cameras.push(Xe)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const et=h.getDepthInformation(Me[0]);et&&et.isValid&&et.texture&&x.init(et,r.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let et=0;et<Me.length;et++){const We=Me[et].camera;if(We){let dt=p[We];dt||(dt=new zp,p[We]=dt);const Xe=h.getCameraImage(We);dt.sourceTexture=Xe}}}}for(let Me=0;Me<M.length;Me++){const ue=S[Me],_e=M[Me];ue!==null&&_e!==void 0&&_e.update(ue,ee,u||o)}ge&&ge(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const we=new Wp;we.setAnimationLoop(ve),this.setAnimationLoop=function(Y){ge=Y},this.dispose=function(){}}}const IM=new It,Zp=new gt;Zp.set(-1,0,0,0,1,0,0,0,1);function kM(n,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,Fp(n)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,g,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),h(x,p)):p.isMeshPhongMaterial?(s(x,p),l(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,v)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),y(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&c(x,p)):p.isPointsMaterial?a(x,p,g,b):p.isSpriteMaterial?u(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===ni&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===ni&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=e.get(p),b=g.envMap,v=g.envMapRotation;b&&(x.envMap.value=b,x.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zp),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function c(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function a(x,p,g,b){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=b*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function h(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function y(x,p){const g=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UM(n,e,t,i){let r={},s={},o=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,M){const S=M.program;i.uniformBlockBinding(v,S)}function u(v,M){let S=r[v.id];S===void 0&&(x(v),S=l(v),r[v.id]=S,v.addEventListener("dispose",g));const A=M.program;i.updateUBOMapping(v,A);const _=e.render.frame;s[v.id]!==_&&(d(v),s[v.id]=_)}function l(v){const M=h();v.__bindingPointIndex=M;const S=n.createBuffer(),A=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let v=0;v<c;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=r[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let _=0,E=S.length;_<E;_++){const P=S[_];if(Array.isArray(P))for(let L=0,D=P.length;L<D;L++)f(P[L],_,L,A);else f(P,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,S,A){if(y(v,M,S,A)===!0){const _=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){const D=E[L],H=p(D);m(D,v.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function m(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function y(v,M,S,A){const _=v.value,E=M+"_"+S;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{const P=A[E];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function x(v){const M=v.uniforms;let S=0;const A=16;for(let E=0,P=M.length;E<P;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let D=0,H=L.length;D<H;D++){const C=L[D],I=Array.isArray(C.value)?C.value:[C.value];for(let O=0,$=I.length;O<$;O++){const oe=I[O],Z=p(oe),te=S%A,le=te%Z.boundary,F=te+le;S+=le,F!==0&&A-F<Z.storage&&(S+=A-F),C.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=Z.storage}}}const _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function p(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function b(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:a,update:u,dispose:b}}const NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function zM(){return ji===null&&(ji=new mc(NM,16,16,xs,Ri),ji.name="DFG_LUT",ji.minFilter=yn,ji.magFilter=yn,ji.wrapS=tr,ji.wrapT=tr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class FM{constructor(e={}){const{canvas:t=zv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ti}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const y=f,x=new Set([hf,ff,df]),p=new Set([ti,$i,_a,ba,lf,cf]),g=new Uint32Array(4),b=new Int32Array(4),v=new U;let M=null,S=null;const A=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,D=null,H=null,C=null,I=null;this._outputColorSpace=ei;let O=0,$=0,oe=null,Z=-1,te=null;const le=new Yt,F=new Yt;let ne=null;const ge=new vt(0);let ve=0,we=t.width,Y=t.height,ee=1,Me=null,ue=null;const _e=new Yt(0,0,we,Y),Ye=new Yt(0,0,we,Y);let pt=!1;const et=new yf;let We=!1,dt=!1;const Xe=new It,xt=new U,wn=new Yt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let an=!1;function zt(){return oe===null?ee:1}let W=i;function pn(R,V){return t.getContext(R,V)}let Rt,k,w,q,J,ie,Ee,De,ce,pe,Le,Qe,ze,ke,tt,lt,mt,X,Ie,he,Ue,Ve,xe;try{const R={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",si,!1),W===null){const V="webgl2";if(W=pn(V,R),W===null)throw pn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(R){throw t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",si,!1),Ut("WebGLRenderer: "+R.message),R}function it(){Rt=new z_(W),Rt.init(),Ue=new CM(W,Rt),k=new A_(W,Rt,e,Ue),w=new EM(W,Rt),k.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),H=W.createFramebuffer(),C=W.createFramebuffer(),I=W.createFramebuffer(),q=new B_(W),J=new fM,ie=new AM(W,Rt,w,J,k,Ue,q),Ee=new N_(P),De=new Gx(W),Ve=new T_(W,De),ce=new F_(W,De,q,Ve),pe=new G_(W,ce,De,Ve,q),X=new H_(W,k,ie),tt=new C_(J),Le=new dM(P,Ee,Rt,k,Ve,tt),Qe=new kM(P,J),ze=new pM,ke=new _M(Rt),mt=new w_(P,Ee,w,pe,m,a),lt=new TM(P,pe,k),xe=new UM(W,q,k,w),Ie=new E_(W,Rt,q),he=new O_(W,Rt,q),q.programs=Le.programs,P.capabilities=k,P.extensions=Rt,P.properties=J,P.renderLists=ze,P.shadowMap=lt,P.state=w,P.info=q}y!==ti&&(E=new W_(y,t.width,t.height,c,r,s));const qe=new DM(P,W);this.xr=qe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(we,Y,!1))},this.getSize=function(R){return R.set(we,Y)},this.setSize=function(R,V,Q=!0){if(qe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}we=R,Y=V,t.width=Math.floor(R*ee),t.height=Math.floor(V*ee),Q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(we*ee,Y*ee).floor()},this.setDrawingBufferSize=function(R,V,Q){we=R,Y=V,ee=Q,t.width=Math.floor(R*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(y===ti){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,V,Q,K){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,V,Q,K),w.viewport(le.copy(_e).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(Ye)},this.setScissor=function(R,V,Q,K){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,V,Q,K),w.scissor(F.copy(Ye).multiplyScalar(ee).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){w.setScissorTest(pt=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,Q=!0){let K=0;if(R){let j=!1;if(oe!==null){const T=oe.texture.format;j=x.has(T)}if(j){const T=oe.texture.type,B=p.has(T),G=mt.getClearColor(),se=mt.getClearAlpha(),de=G.r,Te=G.g,Ge=G.b;B?(g[0]=de,g[1]=Te,g[2]=Ge,g[3]=se,W.clearBufferuiv(W.COLOR,0,g)):(b[0]=de,b[1]=Te,b[2]=Ge,b[3]=se,W.clearBufferiv(W.COLOR,0,b))}else K|=W.COLOR_BUFFER_BIT}V&&(K|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",si,!1),mt.dispose(),ze.dispose(),ke.dispose(),J.dispose(),Ee.dispose(),pe.dispose(),Ve.dispose(),xe.dispose(),Le.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",be),qe.removeEventListener("sessionend",Re),Fe.stop()};function Bt(R){R.preventDefault(),$l("WebGLRenderer: Context Lost."),L=!0}function kt(){$l("WebGLRenderer: Context Restored."),L=!1;const R=q.autoReset,V=lt.enabled,Q=lt.autoUpdate,K=lt.needsUpdate,j=lt.type;it(),q.autoReset=R,lt.enabled=V,lt.autoUpdate=Q,lt.needsUpdate=K,lt.type=j}function si(R){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function On(R){const V=R.target;V.removeEventListener("dispose",On),Ha(V)}function Ha(R){Tc(R),J.remove(R)}function Tc(R){const V=J.get(R).programs;V!==void 0&&(V.forEach(function(Q){Le.releaseProgram(Q)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Q,K,j,T){V===null&&(V=Kt);const B=j.isMesh&&j.matrixWorld.determinantAffine()<0,G=Un(R,V,Q,K,j);w.setMaterial(K,B);let se=Q.index,de=1;if(K.wireframe===!0){if(se=ce.getWireframeAttribute(Q),se===void 0)return;de=2}const Te=Q.drawRange,Ge=Q.attributes.position;let Ne=Te.start*de,nt=(Te.start+Te.count)*de;T!==null&&(Ne=Math.max(Ne,T.start*de),nt=Math.min(nt,(T.start+T.count)*de)),se!==null?(Ne=Math.max(Ne,0),nt=Math.min(nt,se.count)):Ge!=null&&(Ne=Math.max(Ne,0),nt=Math.min(nt,Ge.count));const yt=nt-Ne;if(yt<0||yt===1/0)return;Ve.setup(j,K,G,Q,se);let je,ot=Ie;if(se!==null&&(je=De.get(se),ot=he,ot.setIndex(je)),j.isMesh)K.wireframe===!0?(w.setLineWidth(K.wireframeLinewidth*zt()),ot.setMode(W.LINES)):ot.setMode(W.TRIANGLES);else if(j.isLine){let _t=K.linewidth;_t===void 0&&(_t=1),w.setLineWidth(_t*zt()),j.isLineSegments?ot.setMode(W.LINES):j.isLineLoop?ot.setMode(W.LINE_LOOP):ot.setMode(W.LINE_STRIP)}else j.isPoints?ot.setMode(W.POINTS):j.isSprite&&ot.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const _t=j._multiDrawStarts,Oe=j._multiDrawCounts,$t=j._multiDrawCount,Tt=se?De.get(se).bytesPerElement:1,En=J.get(K).currentProgram.getUniforms();for(let gn=0;gn<$t;gn++)En.setValue(W,"_gl_DrawID",gn),ot.render(_t[gn]/Tt,Oe[gn])}else if(j.isInstancedMesh)ot.renderInstances(Ne,yt,j.count);else if(Q.isInstancedBufferGeometry){const _t=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Oe=Math.min(Q.instanceCount,_t);ot.renderInstances(Ne,yt,Oe)}else ot.render(Ne,yt)};function re(R,V,Q,K){D!==null&&R.isNodeMaterial&&D.setObject(K,R),We===!0&&tt.setState(R,Q,!1),R.transparent===!0&&R.side===li&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,Zt(R,V,K),R.side=gs,R.needsUpdate=!0,Zt(R,V,K),R.side=li):Zt(R,V,K)}this.compile=function(R,V,Q=null){Q===null&&(Q=R),D!==null&&D.renderStart(R,V,Q),S=ke.get(Q),S.init(V),_.push(S),Q.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),R!==Q&&R.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),dt=this.localClippingEnabled,We=tt.init(this.clippingPlanes,dt),We===!0&&tt.setGlobalState(this.clippingPlanes,V),D!==null&&lt.render(S.state.shadowsArray,Q,V);const K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const T=j.material;if(T)if(Array.isArray(T))for(let B=0;B<T.length;B++){const G=T[B];re(G,Q,V,j),K.add(G)}else re(T,Q,V,j),K.add(T)}),S=_.pop(),D!==null&&D.renderEnd(),K},this.compileAsync=function(R,V,Q=null){const K=this.compile(R,V,Q);return new Promise(j=>{function T(){if(K.forEach(function(B){const se=J.get(B).currentProgram;(se===void 0||se.isReady())&&K.delete(B)}),K.size===0){j(R);return}setTimeout(T,10)}Rt.get("KHR_parallel_shader_compile")!==null?T():setTimeout(T,10)})};let me=null;function Ce(R){me&&me(R)}function be(){Fe.stop()}function Re(){Fe.start()}const Fe=new Wp;Fe.setAnimationLoop(Ce),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(R){me=R,qe.setAnimationLoop(R),R===null?Fe.stop():Fe.start()},qe.addEventListener("sessionstart",be),qe.addEventListener("sessionend",Re),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(R,V);const Q=qe.enabled===!0&&qe.isPresenting===!0,K=E!==null&&(oe===null||Q)&&E.begin(P,oe);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(V),V=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,V,oe),S=ke.get(R,_.length),S.init(V),S.state.textureUnits=ie.getTextureUnits(),_.push(S),Xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),et.setFromProjectionMatrix(Xe,nr,V.reversedDepth),dt=this.localClippingEnabled,We=tt.init(this.clippingPlanes,dt),M=ze.get(R,A.length),M.init(),A.push(M),qe.enabled===!0&&qe.isPresenting===!0){const B=P.xr.getDepthSensingMesh();B!==null&&$e(B,V,-1/0,P.sortObjects)}$e(R,V,0,P.sortObjects),M.finish(),D!==null&&D.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(Me,ue),an=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,an&&mt.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&tt.beginShadows();const j=S.state.shadowsArray;if(lt.render(j,R,V),We===!0&&tt.endShadows(),(K&&E.hasRenderPass())===!1){const B=M.opaque,G=M.transmissive;if(S.setupLights(),V.isArrayCamera){const se=V.cameras;if(G.length>0)for(let de=0,Te=se.length;de<Te;de++){const Ge=se[de];Ze(B,G,R,Ge)}an&&mt.render(R);for(let de=0,Te=se.length;de<Te;de++){const Ge=se[de];st(M,R,Ge,Ge.viewport)}}else G.length>0&&Ze(B,G,R,V),an&&mt.render(R),st(M,R,V)}oe!==null&&$===0&&(ie.updateMultisampleRenderTarget(oe),ie.updateRenderTargetMipmap(oe)),K&&E.end(P),R.isScene===!0&&R.onAfterRender(P,R,V),Ve.resetDefaultState(),Z=-1,te=null,_.pop(),_.length>0?(S=_[_.length-1],ie.setTextureUnits(S.state.textureUnits),We===!0&&tt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,D!==null&&D.renderEnd()};function $e(R,V,Q,K){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(et)){K&&wn.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xe);const B=pe.update(R),G=R.material;G.visible&&M.push(R,B,G,Q,wn.z,null,V)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(et))){const B=pe.update(R),G=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),wn.copy(R.boundingSphere.center)):(B.boundingSphere===null&&B.computeBoundingSphere(),wn.copy(B.boundingSphere.center)),wn.applyMatrix4(R.matrixWorld).applyMatrix4(Xe)),Array.isArray(G)){const se=B.groups;for(let de=0,Te=se.length;de<Te;de++){const Ge=se[de],Ne=G[Ge.materialIndex];Ne&&Ne.visible&&M.push(R,B,Ne,Q,wn.z,Ge,V)}}else G.visible&&M.push(R,B,G,Q,wn.z,null,V)}}const T=R.children;for(let B=0,G=T.length;B<G;B++)$e(T[B],V,Q,K)}function st(R,V,Q,K){const{opaque:j,transmissive:T,transparent:B}=R;S.setupLightsView(Q),We===!0&&tt.setGlobalState(P.clippingPlanes,Q),K&&w.viewport(le.copy(K)),j.length>0&&Tn(j,V,Q),T.length>0&&Tn(T,V,Q),B.length>0&&Tn(B,V,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ze(R,V,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){const Ne=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new di(1,1,{generateMipmaps:!0,type:Ne?Ri:ti,minFilter:Ur,samples:Math.max(4,k.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const T=S.state.transmissionRenderTarget[K.id],B=K.viewport||le;T.setSize(B.z*P.transmissionResolutionScale,B.w*P.transmissionResolutionScale);const G=P.getRenderTarget(),se=P.getActiveCubeFace(),de=P.getActiveMipmapLevel();P.setRenderTarget(T),P.getClearColor(ge),ve=P.getClearAlpha(),ve<1&&P.setClearColor(16777215,.5),P.clear(),an&&mt.render(Q);const Te=P.toneMapping;P.toneMapping=ir;const Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),We===!0&&tt.setGlobalState(P.clippingPlanes,K),Tn(R,Q,K),ie.updateMultisampleRenderTarget(T),ie.updateRenderTargetMipmap(T),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let nt=0,yt=V.length;nt<yt;nt++){const je=V[nt],{object:ot,geometry:_t,material:Oe,group:$t}=je;if(Oe.side===li&&ot.layers.test(K.layers)){const Tt=Oe.side;Oe.side=ni,Oe.needsUpdate=!0,dn(ot,Q,K,_t,Oe,$t),Oe.side=Tt,Oe.needsUpdate=!0,Ne=!0}}Ne===!0&&(ie.updateMultisampleRenderTarget(T),ie.updateRenderTargetMipmap(T))}P.setRenderTarget(G,se,de),P.setClearColor(ge,ve),Ge!==void 0&&(K.viewport=Ge),P.toneMapping=Te}function Tn(R,V,Q){const K=V.isScene===!0?V.overrideMaterial:null;for(let j=0,T=R.length;j<T;j++){const B=R[j],{object:G,geometry:se,group:de}=B;let Te=B.material;Te.allowOverride===!0&&K!==null&&(Te=K),G.layers.test(Q.layers)&&dn(G,V,Q,se,Te,de)}}function dn(R,V,Q,K,j,T){D!==null&&j.isNodeMaterial&&D.setObject(R,j),R.onBeforeRender(P,V,Q,K,j,T),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(P,V,Q,K,R,T),j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=ni,j.needsUpdate=!0,P.renderBufferDirect(Q,V,K,j,R,T),j.side=gs,j.needsUpdate=!0,P.renderBufferDirect(Q,V,K,j,R,T),j.side=li):P.renderBufferDirect(Q,V,K,j,R,T),R.onAfterRender(P,V,Q,K,j,T)}function Zt(R,V,Q){V.isScene!==!0&&(V=Kt);const K=J.get(R),j=S.state.lights,T=S.state.shadowsArray,B=j.state.version,G=Le.getParameters(R,j.state,T,V,Q,S.state.lightProbeGridArray),se=Le.getProgramCacheKey(G);let de=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;const Te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=Ee.get(R.envMap||K.environment,Te),K.envMapRotation=K.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,de===void 0&&(R.addEventListener("dispose",On),de=new Map,K.programs=de);let Ge=de.get(se);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===B)return mn(R,G),Ge}else G.uniforms=Le.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,Q,G),R.onBeforeCompile(G,P),Ge=Le.acquireProgram(G,se),de.set(se,Ge),K.uniforms=G.uniforms;const Ne=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=tt.uniform),mn(R,G),K.needsLights=Ki(R),K.lightsStateVersion=B,K.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.sunLights.value=j.state.sun,Ne.sunLightShadows.value=j.state.sunShadow,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.sunShadowMatrix.value=j.state.sunShadowMatrix,Ne.sunShadowCascade.value=j.state.sunShadowCascade,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),K.lightProbeGrid=S.state.lightProbeGridArray.length>0,K.currentProgram=Ge,K.uniformsList=null,Ge}function fi(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Al.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function mn(R,V){const Q=J.get(R);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function hi(R,V){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(V.matrixWorld);for(let Q=0,K=R.length;Q<K;Q++){const j=R[Q];if(j.texture!==null&&j.boundingBox.containsPoint(v))return j}return null}function Un(R,V,Q,K,j){V.isScene!==!0&&(V=Kt),ie.resetTextureUnits();const T=V.fog,B=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,G=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Pt.workingColorSpace,se=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,de=Ee.get(K.envMap||B,se),Te=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ge=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!Q.morphAttributes.position,nt=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color;let je=ir;K.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(je=P.toneMapping);const ot=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=ot!==void 0?ot.length:0,Oe=J.get(K),$t=S.state.lights;if(We===!0&&(dt===!0||R!==te)){const nn=R===te&&K.id===Z;tt.setState(K,R,nn)}let Tt=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==$t.state.version||Oe.outputColorSpace!==G||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==de||K.fog===!0&&Oe.fog!==T||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==tt.numPlanes||Oe.numIntersection!==tt.numIntersection)||Oe.vertexAlphas!==Te||Oe.vertexTangents!==Ge||Oe.morphTargets!==Ne||Oe.morphNormals!==nt||Oe.morphColors!==yt||Oe.toneMapping!==je||Oe.morphTargetsCount!==_t||!!Oe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Oe.__version=K.version);let En=Oe.currentProgram;Tt===!0&&(En=Zt(K,V,j),D&&K.isNodeMaterial&&D.onUpdateProgram(K,En,Oe));let gn=!1,Pi=!1,Rs=!1;const Xt=En.getUniforms(),An=Oe.uniforms;if(w.useProgram(En.program)&&(gn=!0,Pi=!0,Rs=!0),K.id!==Z&&(Z=K.id,Pi=!0),Oe.needsLights){const nn=hi(S.state.lightProbeGridArray,j);Oe.lightProbeGrid!==nn&&(Oe.lightProbeGrid=nn,Pi=!0)}if(gn||te!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xt.setValue(W,"projectionMatrix",R.projectionMatrix),Xt.setValue(W,"viewMatrix",R.matrixWorldInverse);const wr=Xt.map.cameraPosition;wr!==void 0&&wr.setValue(W,xt.setFromMatrixPosition(R.matrixWorld)),k.logarithmicDepthBuffer&&Xt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Xt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Pi=!0,Rs=!0)}if(Oe.needsLights&&($t.state.sunShadowMap.length>0&&Xt.setValue(W,"sunShadowMap",$t.state.sunShadowMap,ie),$t.state.directionalShadowMap.length>0&&Xt.setValue(W,"directionalShadowMap",$t.state.directionalShadowMap,ie),$t.state.spotShadowMap.length>0&&Xt.setValue(W,"spotShadowMap",$t.state.spotShadowMap,ie),$t.state.pointShadowMap.length>0&&Xt.setValue(W,"pointShadowMap",$t.state.pointShadowMap,ie)),j.isSkinnedMesh){Xt.setOptional(W,j,"bindMatrix"),Xt.setOptional(W,j,"bindMatrixInverse");const nn=j.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Xt.setValue(W,"boneTexture",nn.boneTexture,ie))}j.isBatchedMesh&&(Xt.setOptional(W,j,"batchingTexture"),Xt.setValue(W,"batchingTexture",j._matricesTexture,ie),Xt.setOptional(W,j,"batchingIdTexture"),Xt.setValue(W,"batchingIdTexture",j._indirectTexture,ie),Xt.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&Xt.setValue(W,"batchingColorTexture",j._colorsTexture,ie));const Sr=Q.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&X.update(j,Q,En),(Pi||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Xt.setValue(W,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(An.envMapIntensity.value=V.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=zM()),Pi){if(Xt.setValue(W,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Yi(An,Rs),T&&K.fog===!0&&Qe.refreshFogUniforms(An,T),Qe.refreshMaterialUniforms(An,K,ee,Y,S.state.transmissionRenderTarget[R.id]),Oe.needsLights&&Oe.lightProbeGrid){const nn=Oe.lightProbeGrid;An.probesSH.value=nn.texture,An.probesMin.value.copy(nn.boundingBox.min),An.probesMax.value.copy(nn.boundingBox.max),An.probesResolution.value.copy(nn.resolution)}Al.upload(W,fi(Oe),An,ie)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Al.upload(W,fi(Oe),An,ie),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Xt.setValue(W,"center",j.center),Xt.setValue(W,"modelViewMatrix",j.modelViewMatrix),Xt.setValue(W,"normalMatrix",j.normalMatrix),Xt.setValue(W,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){const nn=K.uniformsGroups;for(let wr=0,Ps=nn.length;wr<Ps;wr++){const Hf=nn[wr];xe.update(Hf,En),xe.bind(Hf,En)}}return En}function Yi(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Ki(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(R,V,Q){const K=J.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),J.get(R.texture).__webglTexture=V,J.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const Q=J.get(R);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Q=0){oe=R,O=V,$=Q;let K=null,j=!1,T=!1;if(R){const G=J.get(R);if(G.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(W.FRAMEBUFFER,G.__webglFramebuffer),le.copy(R.viewport),F.copy(R.scissor),ne=R.scissorTest,w.viewport(le),w.scissor(F),w.setScissorTest(ne),Z=-1;return}else if(G.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(G.__hasExternalTextures)ie.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Te=R.depthTexture;if(G.__boundDepthTexture!==Te){if(Te!==null&&J.has(Te)&&(R.width!==Te.image.width||R.height!==Te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const se=R.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(T=!0);const de=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(de[V])?K=de[V][Q]:K=de[V],j=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?K=J.get(R).__webglMultisampledFramebuffer:Array.isArray(de)?K=de[Q]:K=de,le.copy(R.viewport),F.copy(R.scissor),ne=R.scissorTest}else le.copy(_e).multiplyScalar(ee).floor(),F.copy(Ye).multiplyScalar(ee).floor(),ne=pt;if(Q!==0&&(K=H),w.bindFramebuffer(W.FRAMEBUFFER,K)&&w.drawBuffers(R,K),w.viewport(le),w.scissor(F),w.setScissorTest(ne),j){const G=J.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,G.__webglTexture,Q)}else if(T){const G=V;for(let se=0;se<R.textures.length;se++){const de=J.get(R.textures[se]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+se,de.__webglTexture,Q,G)}}else if(R!==null&&Q!==0){const G=J.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,G.__webglTexture,Q)}Z=-1};function Mr(R){const V=J.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=k.textureFormatReadable(R.format),V.__typeReadable=k.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,Q,K,j,T,B,G=0){if(!(R&&R.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&B!==void 0&&(se=se[B]),se){w.bindFramebuffer(W.FRAMEBUFFER,se);try{const de=R.textures[G],Te=de.format,Ge=de.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+G);const Ne=Mr(de);if(Ne.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-K&&Q>=0&&Q<=R.height-j&&W.readPixels(V,Q,K,j,Ue.convert(Te),Ue.convert(Ge),T)}finally{const de=oe!==null?J.get(oe).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(R,V,Q,K,j,T,B,G=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&B!==void 0&&(se=se[B]),se)if(V>=0&&V<=R.width-K&&Q>=0&&Q<=R.height-j){w.bindFramebuffer(W.FRAMEBUFFER,se);const de=R.textures[G],Te=de.format,Ge=de.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+G);const Ne=Mr(de);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,nt),W.bufferData(W.PIXEL_PACK_BUFFER,T.byteLength,W.STREAM_READ),W.readPixels(V,Q,K,j,Ue.convert(Te),Ue.convert(Ge),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const yt=oe!==null?J.get(oe).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,yt);const je=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Fv(W,je,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,nt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,T),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(nt),W.deleteSync(je),T}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,Q=0){const K=Math.pow(2,-Q),j=Math.floor(R.image.width*K),T=Math.floor(R.image.height*K),B=V!==null?V.x:0,G=V!==null?V.y:0;ie.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,B,G,j,T),w.unbindTexture()},this.copyTextureToTexture=function(R,V,Q=null,K=null,j=0,T=0){let B,G,se,de,Te,Ge,Ne,nt,yt;const je=R.isCompressedTexture?R.mipmaps[T]:R.image;if(Q!==null)B=Q.max.x-Q.min.x,G=Q.max.y-Q.min.y,se=Q.isBox3?Q.max.z-Q.min.z:1,de=Q.min.x,Te=Q.min.y,Ge=Q.isBox3?Q.min.z:0;else{const An=Math.pow(2,-j);B=Math.floor(je.width*An),G=Math.floor(je.height*An),R.isDataArrayTexture?se=je.depth:R.isData3DTexture?se=Math.floor(je.depth*An):se=1,de=0,Te=0,Ge=0}K!==null?(Ne=K.x,nt=K.y,yt=K.z):(Ne=0,nt=0,yt=0);const ot=Ue.convert(V.format),_t=Ue.convert(V.type);let Oe;V.isData3DTexture?(ie.setTexture3D(V,0),Oe=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ie.setTexture2DArray(V,0),Oe=W.TEXTURE_2D_ARRAY):(ie.setTexture2D(V,0),Oe=W.TEXTURE_2D),w.activeTexture(W.TEXTURE0),w.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const $t=w.getParameter(W.UNPACK_ROW_LENGTH),Tt=w.getParameter(W.UNPACK_IMAGE_HEIGHT),En=w.getParameter(W.UNPACK_SKIP_PIXELS),gn=w.getParameter(W.UNPACK_SKIP_ROWS),Pi=w.getParameter(W.UNPACK_SKIP_IMAGES);w.pixelStorei(W.UNPACK_ROW_LENGTH,je.width),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,je.height),w.pixelStorei(W.UNPACK_SKIP_PIXELS,de),w.pixelStorei(W.UNPACK_SKIP_ROWS,Te),w.pixelStorei(W.UNPACK_SKIP_IMAGES,Ge);const Rs=R.isDataArrayTexture||R.isData3DTexture,Xt=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const An=J.get(R),Sr=J.get(V),nn=J.get(An.__renderTarget),wr=J.get(Sr.__renderTarget);w.bindFramebuffer(W.READ_FRAMEBUFFER,nn.__webglFramebuffer),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Ps=0;Ps<se;Ps++)Rs&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.get(R).__webglTexture,j,Ge+Ps),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.get(V).__webglTexture,T,yt+Ps)),W.blitFramebuffer(de,Te,B,G,Ne,nt,B,G,W.DEPTH_BUFFER_BIT,W.NEAREST);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||J.has(R)){const An=J.get(R),Sr=J.get(V);w.bindFramebuffer(W.READ_FRAMEBUFFER,C),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,I);for(let nn=0;nn<se;nn++)Rs?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,An.__webglTexture,j,Ge+nn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,An.__webglTexture,j),Xt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Sr.__webglTexture,T,yt+nn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Sr.__webglTexture,T),j!==0?W.blitFramebuffer(de,Te,B,G,Ne,nt,B,G,W.COLOR_BUFFER_BIT,W.NEAREST):Xt?W.copyTexSubImage3D(Oe,T,Ne,nt,yt+nn,de,Te,B,G):W.copyTexSubImage2D(Oe,T,Ne,nt,de,Te,B,G);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Xt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Oe,T,Ne,nt,yt,B,G,se,ot,_t,je.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(Oe,T,Ne,nt,yt,B,G,se,ot,je.data):W.texSubImage3D(Oe,T,Ne,nt,yt,B,G,se,ot,_t,je):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,T,Ne,nt,B,G,ot,_t,je.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,T,Ne,nt,je.width,je.height,ot,je.data):W.texSubImage2D(W.TEXTURE_2D,T,Ne,nt,B,G,ot,_t,je);w.pixelStorei(W.UNPACK_ROW_LENGTH,$t),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt),w.pixelStorei(W.UNPACK_SKIP_PIXELS,En),w.pixelStorei(W.UNPACK_SKIP_ROWS,gn),w.pixelStorei(W.UNPACK_SKIP_IMAGES,Pi),T===0&&V.generateMipmaps&&W.generateMipmap(Oe),w.unbindTexture()},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){O=0,$=0,oe=null,w.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function Kh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},c=n[0].morphTargetsRelative,a=new on;let u=0;for(let l=0;l<n.length;++l){const h=n[l];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(c!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,f,l),u+=f}}if(t){let l=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+l);l+=n[d].attributes.position.count}a.setIndex(h)}for(const l in s){const h=Zh(s[l]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;a.setAttribute(l,h)}for(const l in o){const h=o[l][0].length;if(h!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[l]=[];for(let d=0;d<h;++d){const f=[];for(let y=0;y<o[l].length;++y)f.push(o[l][y][d]);const m=Zh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;a.morphAttributes[l].push(m)}}}return a}function Zh(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const l=n[u];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=l.gpuType),r!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=l.count*t}const o=new e(s),c=new Sn(o,t,i);let a=0;for(let u=0;u<n.length;++u){const l=n[u];if(l.isInterleavedBufferAttribute){const h=a/t;for(let d=0,f=l.count;d<f;d++)for(let m=0;m<t;m++){const y=l.getComponent(d,m);c.setComponent(d+h,m,y)}}else o.set(l.array,a);a+=l.count*t}return r!==void 0&&(c.gpuType=r),c}function OM(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const c=Object.keys(n.attributes),a={},u={},l=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let g=0,b=c.length;g<b;g++){const v=c[g],M=n.attributes[v];a[v]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const S=n.morphAttributes[v];S&&(u[v]||(u[v]=[]),S.forEach((A,_)=>{const E=new A.array.constructor(A.count*A.itemSize);u[v][_]=new A.constructor(E,A.itemSize,A.normalized)}))}const f=e*.5,m=Math.log10(1/e),y=Math.pow(10,m),x=f*y;for(let g=0;g<s;g++){const b=i?i.getX(g):g;let v="";for(let M=0,S=c.length;M<S;M++){const A=c[M],_=n.getAttribute(A),E=_.itemSize;for(let P=0;P<E;P++)v+=`${Math.trunc(_[h[P]](b)*y+x)},`}if(v in t)l.push(t[v]);else{for(let M=0,S=c.length;M<S;M++){const A=c[M],_=n.getAttribute(A),E=n.morphAttributes[A],P=_.itemSize,L=a[A],D=u[A];for(let H=0;H<P;H++){const C=h[H],I=d[H];if(L[I](o,_[C](b)),E)for(let O=0,$=E.length;O<$;O++)D[O][I](o,E[O][C](b))}}t[v]=o,l.push(o),o++}}const p=n.clone();for(const g in n.attributes){const b=a[g];if(p.setAttribute(g,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),g in u)for(let v=0;v<u[g].length;v++){const M=u[g][v];p.morphAttributes[g][v]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(l),p}const Hi=`#include <common>
#include <logdepthbuf_pars_vertex>`,Gi="#include <logdepthbuf_vertex>",Vi="#include <logdepthbuf_pars_fragment>",Wi="#include <logdepthbuf_fragment>",gr=`
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
`,aa=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,BM=3,jh={tShadow:{value:null},uShadowMat:{value:new It},uShadowOn:{value:0},uShadowRange:{value:1},uShadowTexel:{value:1/1024}},HM=`
vec4 shPack(float v) { vec3 e = fract(v * vec3(1.0, 255.0, 65025.0)); e -= e.yzz * vec3(1.0 / 255.0, 1.0 / 255.0, 0.0); return vec4(e, 1.0); }
float shUnpack(vec4 c) { return dot(c.rgb, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0)); }`,wf=`${HM}
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
}`;function Tf(n){for(const e in jh)n[e]=jh[e]}const jp={value:800},fe=0,Se=1,ut=2,bn=3,xn=4,Mn=5,Wt=6,Jh=7,ys=8,pd=9;let Pr=null;function GM(){if(Pr)return Pr;const n=256,e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=qi(17);t.fillStyle="#d8d8d8",t.fillRect(0,0,n,n);const r=(s,o,c,a,u)=>{if(u>4||c<18||a<18||u>1&&i()<.18){const l=196+i()*52|0;t.fillStyle=`rgb(${l},${l},${l+2})`,t.fillRect(s+1,o+1,c-2,a-2),t.strokeStyle="rgba(30,34,40,0.6)",t.lineWidth=1,t.strokeRect(s+.5,o+.5,c-1,a-1),t.strokeStyle="rgba(255,255,255,0.25)",t.beginPath(),t.moveTo(s+1.5,o+a-1.5),t.lineTo(s+1.5,o+1.5),t.lineTo(s+c-1.5,o+1.5),t.stroke();const h=i();if(h<.15)t.fillStyle="rgba(40,44,52,0.45)",t.fillRect(s+c*.3,o+a*.3,c*.3,a*.25);else if(h<.25){t.fillStyle="rgba(30,32,36,0.5)";for(let d=0;d<5;d++)t.fillRect(s+3,o+3+d*3,c*.4,1)}else if(h<.33){t.fillStyle="rgba(30,30,30,0.45)";for(let d=3;d<c-3;d+=4)t.fillRect(s+d,o+2,1,1),t.fillRect(s+d,o+a-3,1,1)}else if(h<.36){t.save(),t.beginPath(),t.rect(s+2,o+a-7,c-4,5),t.clip();for(let d=-10;d<c;d+=6)t.fillStyle="rgba(190,140,30,0.7)",t.beginPath(),t.moveTo(s+d,o+a),t.lineTo(s+d+3,o+a),t.lineTo(s+d+8,o+a-8),t.lineTo(s+d+5,o+a-8),t.fill();t.restore()}return}if(c>a){const l=c*(.3+i()*.4)|0;r(s,o,l,a,u+1),r(s+l,o,c-l,a,u+1)}else{const l=a*(.3+i()*.4)|0;r(s,o,c,l,u+1),r(s,o+l,c,a-l,u+1)}};r(0,0,n,n,0);for(let s=0;s<90;s++)t.fillStyle=`rgba(20,20,26,${.03+i()*.06})`,t.fillRect(i()*n,i()*n,1+i()*14,1);for(let s=0;s<1200;s++)t.fillStyle=i()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",t.fillRect(i()*n,i()*n,1,1);return Pr=new Np(e),Pr.colorSpace=ei,Pr.wrapS=Pr.wrapT=ya,Pr.anisotropy=4,Pr}const gl=new U(0,1,0);function rn(n){const e=[],t=qi(n),i=Math.PI/2,r=(a,u,l=1)=>(a.userData.kind=u,a.userData.tint=l,e.push(a),a),s=(a,u)=>(a.userData.lo=u,a),o=(a,u,l,h,d=.42)=>{const f=[];for(let m=0;m<=l;m++){const y=m/l;f.push(new rt(a*(d+(1-d)*Math.pow(y,h)),-y*u))}return f},c={r:t,add:(a,u=fe,l=1)=>r(a,u,l),box:(a,u,l,h=0,d=0,f=0,m=fe,y)=>r(new Gn(a,u,l).translate(h,d,f),m,y),cyl:(a,u,l,h,d=fe,f=12,m=0,y=0,x)=>s(r(new cn(a,u,l,f).rotateX(i).translate(m,y,h),d,x),f>6&&(()=>new cn(a,u,l,6).rotateX(i).translate(m,y,h))),oct:(a,u,l,h,d=1,f=0,m=0,y=fe,x)=>r(new cn(.5*d,.5,l,8).rotateY(Math.PI/8).rotateX(i).scale(a,u,1).translate(f,m,h),y,x),wedge:(a,u,l,h=0,d=0,f=0,m=1,y=1,x=fe,p,g=0,b=0)=>{const v=new Gn(a,u,l),M=v.attributes.position;for(let S=0;S<M.count;S++)M.getZ(S)>0&&M.setXY(S,M.getX(S)*m+g,M.getY(S)*y+b);return r(v.translate(h,d,f),x,p)},sphere:(a,u,l,h,d=fe,f,m=10)=>s(r(new _r(a,m,Math.max(6,m*.6|0)).translate(u,l,h),d,f),()=>new _r(a,6,4).translate(u,l,h)),tank:(a,u,l,h,d,f=fe,m)=>s(r(new Yl(a,u,2,8).rotateX(i).translate(l,h,d),f,m),()=>new Yl(a,u,1,6).rotateX(i).translate(l,h,d)),boom:(a,u,l,h,d,f=.004,m=Se,y)=>{const x=new U(...h).normalize(),p=new Gn(f,d,f).translate(0,d/2,0);return p.applyQuaternion(new $n().setFromUnitVectors(gl,x)).translate(a,u,l),r(p,m,y),[a+x.x*d,u+x.y*d,l+x.z*d]},dish:(a,u,l,h,d,f=fe)=>{const m=new U(...d).normalize(),y=new $n().setFromUnitVectors(gl,m);r(new cn(a,a*.14,a*.32,18).translate(0,a*.16,0).applyQuaternion(y).translate(u,l,h),f,1.05),c.boom(u,l,h,d,a*.75,Math.max(.002,a*.06))},radiator:(a,u,l,h,d,f,m=3,y=.003,x=ys)=>{const p=d*.035,g=(d-p*(m-1))/m;for(let v=0;v<m;v++){const M=l-d/2+g/2+v*(g+p);r(new Gn(h,y,g).translate(h/2,0,0).rotateZ(f).translate(a,u,M),x,(x===ys?.92:.55)+t()*.14),c.strut(a+Math.cos(f)*h,u+Math.sin(f)*h,M-g/2,a+Math.cos(f)*h,u+Math.sin(f)*h,M+g/2,y*1.8,Se,.7)}if(c.cyl(y*1.5,y*1.5,d*1.04,l,fe,6,a,u,.75),Math.hypot(a,u)>1e-4)for(const v of[-.42,.42])c.pipe(a,u,l+v*d,a*.55,u*.55,l+v*d*1.1,y*.9,Se);return[a+Math.cos(f)*h,u+Math.sin(f)*h]},strut:(a,u,l,h,d,f,m=.003,y=Se,x)=>{const p=new U(h-a,d-u,f-l),g=p.length();if(g<1e-6)return;const b=new cn(m*.62,m*.62,g,3,1,!0).translate(0,g/2,0);b.applyQuaternion(new $n().setFromUnitVectors(gl,p.normalize())).translate(a,u,l),r(b,y,x)},pipe:(a,u,l,h,d,f,m=.0022,y=fe)=>{const x=new U(h-a,d-u,f-l),p=x.length();if(p<1e-6)return;const g=new cn(m,m,p,4,1,!0).translate(0,p/2,0);g.applyQuaternion(new $n().setFromUnitVectors(gl,x.normalize())).translate(a,u,l),r(g,y,.8)},truss3:(a,u,l,h,d,f,m=.004,y=0,x=Se)=>{const p=[0,1,2].map(b=>{const v=y+Math.PI/2+b*2*Math.PI/3;return[a+Math.cos(v)*d,u+Math.sin(v)*d]});for(const[b,v]of p)c.strut(b,v,l,b,v,h,m,x);const g=(h-l)/f;for(let b=0;b<=f;b++){const v=l+b*g;for(let M=0;M<3;M++)c.strut(p[M][0],p[M][1],v,p[(M+1)%3][0],p[(M+1)%3][1],v,m*.8,x);if(b===f)break;for(let M=0;M<3;M++){const[S,A]=b%2?[p[M],p[(M+1)%3]]:[p[(M+1)%3],p[M]];c.strut(S[0],S[1],v,A[0],A[1],v+g,m*.7,x,.85)}}},frame:(a,u,l,h,d,f,m=.003,y=Se)=>{const x=h-a/2,p=h+a/2,g=d-u/2,b=d+u/2,v=f-l/2,M=f+l/2;for(const S of[g,b])for(const A of[v,M])c.strut(x,S,A,p,S,A,m,y);for(const S of[x,p])for(const A of[v,M])c.strut(S,g,A,S,b,A,m,y);for(const S of[x,p])for(const A of[g,b])c.strut(S,A,v,S,A,M,m,y)},strapped:(a,u,l,h,d,f=!1,m=1)=>{c.tank(a,u,l,h,d,fe,m);const y=(x,p,g,b,v)=>r(new cn(x,x,p,10,1,!0).rotateX(i).translate(l,h,g),b,v);for(const x of[-.32,.32])y(a*1.06,a*.16,d+x*u,Se,.8);f&&y(a*1.04,u*.3,d,ut,1)},collar:(a,u,l=0,h=0,d=1)=>{c.cyl(a*.85,a*.85,.014,u,fe,12,l,h,.9),c.cyl(a*1.25,a*1.25,.004,u+d*.007,Se,14,l,h)},engine:(a,u,l,h,d,f=6)=>{c.bell(a,u,l);for(let m=0;m<f;m++){const y=m/f*Math.PI*2+.3;c.strut(Math.cos(y)*h,Math.sin(y)*h,d,Math.cos(y)*a*.5,Math.sin(y)*a*.5,u-l*.12,.004,Se,.8)}c.cyl(h*1.05,h*1.05,.008,d,Se,14)},solar:(a,u,l,h,d,f,m=.003)=>{r(new Gn(h,m,d).translate(h/2,0,0).rotateZ(f).translate(a,u,l),pd,1),r(new Gn(h,m*1.4,m*1.4).translate(h/2,0,0).rotateZ(f).translate(a,u,l),Se,.7),r(new Gn(m*1.4,m*1.4,d).translate(h,0,0).rotateZ(f).translate(a,u,l),Se,.7)},truss:(a,u,l,h,d,f,m=.004,y=Se)=>{const x=(h-l)/f;for(const p of[-1,1])for(const g of[-1,1])c.strut(a+p*d/2,u+g*d/2,l,a+p*d/2,u+g*d/2,h,m,y);for(let p=0;p<=f;p++){const g=l+p*x;for(const v of[-1,1])c.strut(a-d/2,u+v*d/2,g,a+d/2,u+v*d/2,g,m,y),c.strut(a+v*d/2,u-d/2,g,a+v*d/2,u+d/2,g,m,y);if(p===f)break;const b=p%2?1:-1;for(const v of[-1,1])c.strut(a+v*d/2,u-b*v*d/2,g,a+v*d/2,u+b*v*d/2,g+x,m*.8,y,.85),c.strut(a-b*v*d/2,u+v*d/2,g,a+b*v*d/2,u+v*d/2,g+x,m*.8,y,.85)}},shield:(a,u)=>r(new cn(a,a*.62,.014,18).rotateX(i).translate(0,0,u),Se,.75),turret:(a,u,l,h=1,d=1)=>{c.cyl(.017*d,.02*d,.01*d,l,Se,10,a,u),c.box(.026*d,.012*d*h,.03*d,a,u+.008*d*h,l,fe,.85);for(const f of[-.005,.005])c.box(.004*d,.004*d,.06*d,a+f*d,u+.01*d*h,l+.04*d,Se,.6)},cells:(a,u,l,h,d,f=.011)=>{for(let m=0;m<h;m++)for(let y=0;y<d;y++)c.box(f*.72,.002,f*.72,a+(m-(h-1)/2)*f,u,l+(y-(d-1)/2)*f,Se,.45+t()*.3)},rcs:(a,u,l,h,d)=>{c.box(.011,.011,.014,a,u,l,Se,.8),c.box(.004,.004,.004,a+h*.0075,u+d*.0075,l,Se,.5),c.box(.004,.004,.004,a,u,l+.009,Se,.5)},hoop:(a,u,l,h,d=0,f=0,m=0,y=.004,x=fe)=>{for(let p=0;p<h;p++){const g=p/h*Math.PI*2;c.add(new Gn(u,2*Math.PI*a/h*1.02,l).rotateZ(g).translate(Math.cos(g)*a,Math.sin(g)*a,d),p%9===4?ut:x,.9+t()*.2),y&&p%2===0&&c.add(new Gn(y*.5,2*Math.PI*a/h*.55,l*.3).rotateZ(g).translate(Math.cos(g)*(a-u/2-y*.2),Math.sin(g)*(a-u/2-y*.2),d+(t()-.5)*l*.4),bn)}for(let p=0;p<f;p++){const g=p/f*Math.PI*2+.3;c.add(new cn(l*.12,l*.12,a-u/2-m,8).translate(0,m+(a-u/2-m)/2,0).rotateZ(g).translate(0,0,d),Se)}},bell:(a,u,l=.16)=>{s(r(new oo(o(a,l,8,1.6),20).rotateX(i).translate(0,0,u),Se,.7),()=>new oo(o(a,l,3,1.6),10).rotateX(i).translate(0,0,u)),s(r(new cn(a*.4,a*.4,.004,16).rotateX(i).translate(0,0,u-.012),Jh),()=>new cn(a*.4,a*.4,.004,8).rotateX(i).translate(0,0,u-.012)),c.nozzle===void 0&&(c.nozzle=u-l-.01)},bell2:(a,u,l,h,d=.05)=>{const f=m=>o(a,d,m,1.5,.45);s(r(new oo(f(6),12).rotateX(i).translate(u,l,h),Se,.65),()=>new oo(f(2),8).rotateX(i).translate(u,l,h))},greeble:(a,u,l,h,d,f,m,y="tbs")=>{for(let x=0;x<m;x++){const p=y[Math.floor(t()*y.length)],g=(.1+t()*.25)*a,b=(.08+t()*.3)*l,v=.004+t()*.012,M=h+(t()-.5)*(a-g),S=f+(t()-.5)*(l-b),A=t()<.6?Se:fe;if(p==="t")c.box(g,v,b,M,d+u/2+v/2,S,A);else if(p==="b")c.box(g,v,b,M,d-u/2-v/2,S,A);else{const _=t()<.5?-1:1,E=d+(t()-.5)*(u-g*.6);c.box(v,Math.min(g,u*.4),b,h+_*(a/2+v/2),E,S,A)}}},pdc:(a,u,l,h=1)=>{c.cyl(.011,.013,.008,l,Se,8,a,u),c.box(.014,.01*h,.014,a,u+.006*h,l,Se,.9),c.box(.003,.003,.03,a-.003,u+.009*h,l+.016,Se,.6),c.box(.003,.003,.03,a+.003,u+.009*h,l+.016,Se,.6)},light:(a,u,l,h,d=.008)=>c.box(d,d,d,a,u,l,h),windows:(a,u,l,h,d,f=[-1,1])=>{for(let m=0;m<d;m++){const y=l+(h-l)*m/Math.max(1,d-1);for(const x of f)c.box(.002,.006,.01,x*a,u,y,bn)}},build(a=1.35,u=7,l=0,h=!1){const d=[],f=[],m=(x,p,g)=>{const b=x.index?x.toNonIndexed():x;b.deleteAttribute("uv");const v=b.attributes.position.count;b.setAttribute("kind",new Sn(new Float32Array(v).fill(p),1)),b.setAttribute("tint",new Sn(new Float32Array(v).fill(g),1)),b.computeVertexNormals();const M=b.attributes.position,S=b.attributes.normal,A=new Float32Array(v*2);for(let _=0;_<v;_++){const E=Math.abs(S.getX(_)),P=Math.abs(S.getY(_)),L=Math.abs(S.getZ(_)),D=M.getX(_),H=M.getY(_),C=M.getZ(_);E>=P&&E>=L?(A[_*2]=C*u,A[_*2+1]=H*u):P>=L?(A[_*2]=D*u,A[_*2+1]=C*u):(A[_*2]=D*u,A[_*2+1]=H*u)}return b.setAttribute("uv",new Sn(A,2)),b};for(const x of e){const p=x.userData.kind,g=x.userData.tint*(.9+t()*.2),b=m(x,p,g);d.push(b),l&&(b.computeBoundingSphere(),(b.boundingSphere.radius>=l||p>=bn&&p<=Jh)&&f.push(h&&x.userData.lo?m(x.userData.lo(),p,g):b))}const y=Kh(d);if(y.scale(a,a,1),y.computeBoundingSphere(),y.userData.nozzle=c.nozzle??0,l){const x=Kh(f);x.scale(a,a,1),x.computeBoundingSphere(),y.userData.coarse=x}return y}};return c}const VM=["concord","boreal","holds"],Qh=["corvette","frigate","escort","battleship","tender","freighter"],ru=(n,e)=>{const t=Math.max(0,VM.indexOf(n)),i=Qh.indexOf(e);return t*Qh.length+(i<0?1:i)},WM=.72,$M=[.55,1,.9,1.9,1.25,1.4],XM=[.02,.034,.034,.05,.045,.04],Xo=Math.PI*2;function Kl(n,e,t,i,r=1){n.sphere(.016*r,e,t,i,Se,.95,8);const s=Math.hypot(e,t)||1,o=e/s*.012*r,c=t/s*.012*r;for(const a of[-1,1])n.box(.0035*r,.0035*r,.036*r,e+o-a*c*.3,t+c+a*o*.3,i+.02*r,Se,.6)}function la(n,e,t,i,r,s,o=.008,c=.07,a=fe){const u=o*2.5;n.box(r*u+o,s*u+o,c,e,t,i,a,.85);for(let l=0;l<r;l++)for(let h=0;h<s;h++)n.cyl(o,o,.006,i+c/2+.002,Se,8,e+(l-(r-1)/2)*u,t+(h-(s-1)/2)*u,.4)}function Ks(n,e,t,i,r,s,o,c,a=4,u=.004){const l=r-i,h=l*.03,d=(l-h*(a-1))/a,f=Math.cos(c),m=Math.sin(c);for(let y=0;y<a;y++){const x=s+(o-s)*((y+.5)/a),p=i+d/2+y*(d+h);n.add(new Gn(x,u,d).translate(x/2,0,0).rotateZ(c).translate(e,t,p),ys,.92+n.r()*.14)}n.strut(e+f*s,t+m*s,i,e+f*o,t+m*o,r,u*1.6,Se,.7),n.cyl(u*1.4,u*1.4,l*1.03,(i+r)/2,fe,6,e,t,.75)}function dr(n,e,t,i,r,s,o,c=3,a=-1,u=.004){const l=s*.05,h=(s-l*(c-1))/c;for(let d=0;d<c;d++){const f=i-s/2+h/2+d*(h+l);if(d===a){n.frame(r*.9,u,h,e+Math.cos(o)*r*.45,t+Math.sin(o)*r*.45,f,u*.8);continue}const m=r*(.78+n.r()*.3);n.add(new Gn(m,u,h).translate(m/2,0,0).rotateZ(o).translate(e,t,f),n.r()<.3?Se:ys,.7+n.r()*.35)}n.cyl(u*1.5,u*1.5,s*1.05,i,Se,6,e,t,.8)}function Zs(n,e,t,i,r,s,o=0){n.bell(r,0,s),n.box(e,t,i,0,0,i/2+.004,fe,.85),n.box(e*.8,t*.8,.012,0,0,0,Se,.7);const c=s*.34;for(const a of[-1,1])n.box(e,.008,c,0,a*(t/2-.004),-c/2+.004,fe,.8),n.box(.008,t,c,a*(e/2-.004),0,-c/2+.004,fe,.8),o&&(n.box(o,.012,i*.9,a*(e/2+o/2),0,i/2,ys,.95),n.box(.008,.02,i*.94,a*(e/2+o),0,i/2,Se,.8));return n.box(e*1.08,t*1.08,.012,0,0,i+.012,Se,.75),i+.02}function js(n,e,t,i,r,s,o){n.wedge(e,t,i,0,0,r+i/2,s,o,fe,.95);const c=.1,a=.86,u=t/2*(1+(o-1)*c),l=t/2*(1+(o-1)*a),h=e*(1+(s-1)*c)*.66,d=e*(1+(s-1)*a)*.66;n.wedge(h,.006,i*(a-c),0,u+.002,r+i*(c+a)/2,d/h,1,ut,1,0,l-u)}function Js(n,e,t,i,r,s=.72){const o=r+i/2;n.box(e,t,i,0,0,o),n.box(e*s,.012,i*.9,0,t/2+.004,o,ut),n.box(e*s,.012,i*.9,0,-t/2-.004,o,fe,.8);for(const c of[-1,1])n.box(.012,t*.66,i*.84,c*(e/2+.004),0,o,fe,.88)}function qM(n){const e=[];{const t=rn(101),i=Zs(t,.086,.06,.05,.034,.075);Js(t,.092,.056,.14,i,.78),js(t,.092,.056,.14,i+.14,.18,.3),t.box(.05,.004,.05,0,-.04,i+.04,ys,.9),t.box(.03,.012,.03,0,.042,i+.05,fe,.9),t.box(.024,.005,.003,0,.044,i+.066,bn),t.pdc(0,.04,i+.115),t.cyl(.006,.006,.03,i+.29,Se,6);for(const r of[-1,1])t.rcs(r*.052,0,i+.125,r,0),t.rcs(r*.049,0,i+.01,r,0);t.light(-.05,.02,i+.07,xn),t.light(.05,.02,i+.07,Mn),t.light(0,-.04,i+.1,Wt),e.push(n(t,0))}{const t=rn(103),i=Zs(t,.13,.1,.09,.05,.11,.05);t.box(.06,.06,.1,0,0,i+.05,Se,.9);for(const s of[-1,1])t.tank(.026,.045,s*.054,0,i+.05,fe,1.05),t.box(.07,.012,.02,s*.04,0,i+.05,Se,.8);const r=i+.1;Js(t,.15,.09,.25,r),js(t,.15,.09,.14,r+.25,.28,.3);for(const s of[-1,1])la(t,s*.105,0,r+.185,2,2,.0085,.09);t.box(.05,.022,.05,0,.066,r+.05,fe,.9),t.box(.04,.006,.003,0,.07,r+.076,bn),t.pdc(0,.06,r+.19),t.pdc(0,-.06,r+.09,-1),t.cyl(.007,.007,.04,r+.4,Se,6);for(const s of[-1,1])t.rcs(s*.085,.03,r+.02,s,0),t.rcs(s*.07,0,i+.02-.03,s,0),t.windows(.0835,.02,r+.06,r+.12,3,[s]);t.light(-.09,0,r+.1,xn),t.light(.09,0,r+.1,Mn),t.light(0,.082,r+.05,Wt),e.push(n(t,1))}{const t=rn(107),i=Zs(t,.17,.12,.09,.052,.1,.04);Js(t,.2,.13,.3,i,.5),js(t,.2,.13,.1,i+.3,.6,.55);for(const r of[.05,.15,.25])for(const[s,o]of[[.075,.075],[-.075,.075],[.075,-.075],[-.075,-.075],[.115,0],[-.115,0]])t.box(.042,.042,.05,s*.94,o*.94,i+r,fe,.82),Kl(t,s*1.08,o*1.08,i+r,1.35);t.box(.012,.04,.012,0,.09,i+.2,Se),t.box(.07,.034,.006,0,.12,i+.2,fe,.9),t.box(.05,.006,.003,0,.03,i+.4,bn);for(const r of[-1,1])t.rcs(r*.09,.05,i+.01,r,0),t.rcs(r*.07,-.03,i+.36,r,0);t.light(-.11,.03,i+.2,xn),t.light(.11,.03,i+.2,Mn),t.light(0,.14,i+.2,Wt),e.push(n(t,2))}{const t=rn(109),i=Zs(t,.28,.17,.15,.08,.17);for(const o of[-1,1])t.bell2(.04,o*.1,0,0,.08);t.box(.2,.15,.3,0,0,i+.15),t.box(.14,.012,.27,0,.079,i+.15,fe,.85);for(const o of[-1,1])for(let c=0;c<3;c++)t.box(.075,.014,.08,o*.137,0,i+.05+c*.1,ys,.95),t.box(.085,.05,.012,o*.14,0,i+.004+c*.1,fe,.82);const r=i+.3;Js(t,.3,.17,.42,r,.7),t.box(.12,.014,.26,0,.104,r+.2,fe,.9),t.box(.07,.03,.07,0,.125,r+.1,fe,.92),t.box(.06,.007,.003,0,.13,r+.136,bn);for(const o of[-1,1])for(let c=0;c<3;c++){t.box(.05,.07,.085,o*.18,0,r+.075+c*.135,fe,.9);for(const a of[-1,1])t.box(.007,.007,.08,o*.19,a*.015,r+.14+c*.135,Se,.6)}const s=r+.42;Js(t,.2,.14,.16,s,.7),js(t,.2,.14,.15,s+.16,.3,.35);for(const o of[-1,1]){t.box(.046,.06,.44,o*.128,0,s+.19,fe,.8),t.box(.05,.016,.44,o*.128,0,s+.2,Se,.55);for(let c=0;c<4;c++)t.box(.058,.072,.02,o*.128,0,s+.05+c*.115,Se,.85);t.box(.06,.03,.03,o*.09,0,s+.2,Se,.8)}t.turret(0,.112,r+.3,1,1.6),t.turret(0,.085,s+.08,1,1.4),t.turret(0,-.1,r+.2,-1,1.6),t.cells(.07,.1,r+.33,3,5,.014),t.cells(-.07,.1,r+.33,3,5,.014);for(const[o,c,a]of[[.11,.09,.02],[-.11,.09,.02],[.11,-.09,.4],[-.11,-.09,.4]])t.pdc(o,c,r+a,Math.sign(c));for(const o of[-1,1])t.rcs(o*.158,.06,r+.4,o,0),t.rcs(o*.106,.05,i+.02,o,0),t.windows(.1035,.03,s+.04,s+.12,4,[o]);t.light(-.16,.07,r+.2,xn),t.light(.16,.07,r+.2,Mn),t.light(0,.145,r+.1,Wt),e.push(n(t,3))}{const t=rn(113),i=Zs(t,.15,.12,.09,.055,.11,.045),r=i+.2;for(const u of[-1,1])for(const l of[-1,1])t.tank(.064,.24,u*.068,l*.068,r,fe,1.05);t.box(.05,.05,.4,0,0,r,Se,.85),t.box(.19,.012,.26,0,.134,r,ut),t.box(.19,.012,.26,0,-.134,r,fe,.8);for(const u of[-.11,.11])t.box(.28,.28,.014,0,0,r+u,Se,.8);const s=i+.4;Js(t,.14,.1,.15,s),js(t,.14,.1,.07,s+.15,.55,.5),t.box(.04,.04,.04,.085,.01,s+.05,Se,.8);const[o,c,a]=t.boom(.085,.01,s+.05,[1,.12,.5],.22,.013,fe);t.box(.03,.03,.04,o,c,a,Se,.8),t.cyl(.006,.008,.07,a+.05,fe,6,o,c),t.box(.04,.006,.003,0,.03,s+.2,bn);for(const u of[-1,1])t.rcs(u*.08,0,s+.13,u,0),t.rcs(u*.085,0,i-.01,u,0);t.light(-.14,0,r,xn),t.light(.14,0,r,Mn),t.light(o,c+.02,a,Wt),e.push(n(t,4))}{const t=rn(127),i=Zs(t,.13,.1,.08,.048,.1,.04);t.box(.045,.05,.68,0,0,i+.34,Se,.9);for(let s=0;s<6;s++)for(const o of[-1,1])t.box(.078,.1,.098,o*.064,0,i+.06+s*.111,(s+(o>0?1:0))%3===1?ut:fe,.78+t.r()*.3);t.box(.05,.008,.66,0,.056,i+.34,fe,.85);const r=i+.68;t.box(.12,.09,.1,0,0,r+.05),t.box(.09,.01,.09,0,.049,r+.05,ut),js(t,.12,.09,.06,r+.1,.55,.5),t.box(.04,.006,.003,0,.028,r+.16,bn);for(const s of[-1,1])t.rcs(s*.066,0,r+.08,s,0),t.rcs(s*.07,.03,i-.01,s,0);t.light(-.105,0,i+.34,xn),t.light(.105,0,i+.34,Mn),t.light(0,.062,i+.5,Wt),e.push(n(t,5))}return e}function Qs(n,e,t,i,r){return n.engine(e,0,t,i*.9,.012,8),n.cyl(i*.85,i,r,.016+r/2,Se,12),n.shield(i*1.55,.03+r),n.cyl(i*1.62,i*1.62,.016,.046+r,ut,14),.04+r}function vl(n,e,t,i){n.tank(e,t,0,0,i,fe,1.05),n.cyl(e*1.05,e*1.05,t*.9,i,ut,14),n.box(e*1.1,.005,.004,0,e*.75,i+t/2+e*.62,bn)}function YM(n){const e=[];{const t=rn(131),i=Qs(t,.046,.11,.02,.03);t.cyl(.008,.008,.13,i+.065,Se,6);for(const r of[-1,1])t.sphere(.028,r*.031,0,i+.035,ut,1,10),Ks(t,r*.006,0,i+.07,i+.115,.03,.014,r>0?0:Math.PI,2,.003);vl(t,.026,.04,i+.16),t.boom(0,0,i+.2,[0,0,1],.04,.004),t.box(.01,.01,.012,0,0,i+.235,Se);for(const r of[-1,1])t.boom(0,0,i+.125,[r,0,0],.03,.003),t.rcs(r*.03,0,i+.125,r,0);t.light(-.03,.008,i+.125,xn),t.light(.03,.008,i+.125,Mn),t.light(0,.03,i+.16,Wt),e.push(n(t,0))}{const t=rn(137),i=Qs(t,.075,.17,.034,.05);t.truss3(0,0,i,i+.35,.028,6,.004);for(const r of[.45,Math.PI-.45,Math.PI+.45,-.45])Ks(t,Math.cos(r)*.02,Math.sin(r)*.02,i+.01,i+.24,.15,.04,r,4);for(const r of[-1,1])t.sphere(.038,r*.05,0,i+.295,fe,1.05,12),t.cyl(.0392,.0392,.04,i+.295,ut,12,r*.05,0);t.cyl(.05,.05,.012,i+.35,Se,12);for(let r=0;r<6;r++){const s=r/6*Xo,o=Math.cos(s)*.037,c=Math.sin(s)*.037;t.cyl(.012,.012,.085,i+.395,fe,8,o,c,.85),t.cyl(.009,.009,.004,i+.439,Se,8,o,c,.4)}vl(t,.032,.05,i+.485),t.boom(0,0,i+.54,[0,0,1],.05,.004),t.dish(.03,0,.03,i+.33,[.3,1,.5]),t.pdc(0,.034,i+.47);for(const r of[-1,1])t.boom(0,0,i+.44,[r,0,0],.062,.004),t.rcs(r*.062,0,i+.44,r,0),t.rcs(r*.05,0,i-.02,r,0);t.light(-.066,.008,i+.44,xn),t.light(.066,.008,i+.44,Mn),t.light(0,.036,i+.5,Wt),e.push(n(t,1))}{const t=rn(139),i=Qs(t,.07,.15,.034,.045);t.truss3(0,0,i,i+.27,.03,4,.0045);for(const r of[0,Math.PI])Ks(t,Math.cos(r)*.025,0,i+.01,i+.13,.11,.05,r,3);for(const[r,s]of[[.17,Math.PI/4],[.25,0]])for(let o=0;o<4;o++){const c=s+o/4*Xo,a=Math.cos(c),u=Math.sin(c);t.boom(a*.015,u*.015,i+r,[a,u,0],.085,.006),t.box(.04,.04,.046,a*.098,u*.098,i+r,fe,.85),Kl(t,a*.122,u*.122,i+r,1.35)}t.cyl(.046,.046,.09,i+.325,fe,14),t.cyl(.048,.048,.05,i+.325,ut,14),t.cyl(.026,.046,.03,i+.385,fe,14);for(let r=0;r<4;r++){const s=Math.PI/4+r/4*Xo;Kl(t,Math.cos(s)*.04,Math.sin(s)*.04,i+.385,1.2)}t.box(.04,.005,.004,0,.03,i+.4,bn),t.boom(0,0,i+.4,[0,0,1],.03,.004);for(const r of[-1,1])t.rcs(r*.05,0,i+.3,r,0),t.rcs(r*.05,0,i-.02,r,0);t.light(-.05,.01,i+.33,xn),t.light(.05,.01,i+.33,Mn),t.light(0,.05,i+.33,Wt),e.push(n(t,2))}{const t=rn(149),i=Qs(t,.125,.25,.055,.09);t.truss3(0,0,i,i+.8,.05,10,.006);for(const r of[.5,Math.PI-.5,Math.PI+.5,-.5])Ks(t,Math.cos(r)*.04,Math.sin(r)*.04,i+.02,i+.47,.28,.07,r,6,.005);t.cyl(.021,.021,1.2,i+.6,fe,8,0,0,.62);for(let r=0;r<8;r++)t.cyl(.03,.03,.016,i+.08+r*.1,fe,10,0,0,.85);for(let r=0;r<2;r++)for(let s=0;s<3;s++){const o=Math.PI/2+Math.PI/3+s/3*Xo+r*(Math.PI/3),c=Math.cos(o)*.088,a=Math.sin(o)*.088;t.sphere(.058,c,a,i+.56+r*.125,fe,1.03,12),r===0&&t.cyl(.0597,.0597,.06,i+.56,ut,12,c,a)}t.cyl(.058,.062,.12,i+.87,fe,14),t.cyl(.065,.065,.07,i+.865,ut,14),t.cyl(.03,.055,.04,i+.95,fe,14),t.cyl(.03,.03,.07,i+1.17,Se,10,0,0,.8),t.cyl(.03,.03,.02,i+1.06,Se,10,0,0,.8);for(const r of[-1,1])la(t,r*.085,0,i+.85,2,2,.009,.09),t.boom(0,0,i+.77,[r,0,0],.11,.006),t.rcs(r*.11,0,i+.77,r,0),t.rcs(r*.085,0,i-.03,r,0);t.turret(0,.066,i+.87,1,1.3),t.turret(0,-.066,i+.87,-1,1.3);for(const r of[.5,.75])t.pdc(0,.03,i+r),t.pdc(.03,-.022,i+r,-1);t.box(.06,.006,.004,0,.04,i+.94,bn),t.dish(.04,-.03,.04,i+.76,[-.4,1,.4]),t.light(-.115,.01,i+.77,xn),t.light(.115,.01,i+.77,Mn),t.light(0,.075,i+.9,Wt),e.push(n(t,3))}{const t=rn(151),i=Qs(t,.07,.15,.034,.045);t.truss3(0,0,i,i+.62,.03,8,.0045);for(const l of[0,Math.PI])Ks(t,Math.cos(l)*.025,0,i+.005,i+.125,.14,.07,l,3);for(let l=0;l<3;l++)t.sphere(.09,0,0,i+.225+l*.17,fe,.98+l*.04,14),t.cyl(.062,.062,.012,i+.31+l*.17,Se,12);t.cyl(.0915,.0915,.05,i+.395,ut,16),vl(t,.03,.05,i+.685);const[r,s,o]=t.boom(.03,0,i+.635,[1,.1,.3],.2,.009,fe);t.sphere(.014,r,s,o,Se,.8,8);const[c,a,u]=t.boom(r,s,o,[.15,0,1],.1,.006);t.cyl(.008,.01,.02,u,fe,8,c,a);for(const l of[-1,1])t.rcs(l*.036,0,i+.65,l,0),t.rcs(l*.05,0,i-.02,l,0);t.light(-.093,0,i+.395,xn),t.light(.093,0,i+.395,Mn),t.light(r,s+.02,o,Wt),e.push(n(t,4))}{const t=rn(157),i=Qs(t,.065,.14,.03,.04);t.truss3(0,0,i,i+.75,.026,10,.004);for(const r of[0,Math.PI])Ks(t,Math.cos(r)*.022,0,i+.01,i+.17,.1,.035,r,3);for(let r=0;r<5;r++)for(let s=0;s<3;s++){const o=Math.PI/2+Math.PI/3+s/3*Xo,c=Math.cos(o)*.05,a=Math.sin(o)*.05;t.cyl(.034,.034,.098,i+.245+r*.112,(r+s)%4===1?ut:fe,10,c,a,.8+t.r()*.3)}vl(t,.026,.04,i+.795);for(const r of[-1,1])t.rcs(r*.032,0,i+.77,r,0),t.rcs(r*.046,0,i-.02,r,0);t.light(-.085,0,i+.47,xn),t.light(.085,0,i+.47,Mn),t.light(0,.03,i+.8,Wt),e.push(n(t,5))}return e}function eo(n,e,t,i,r){return n.engine(e,0,t,i,.012,5),n.cyl(i*.9,i,r,.016+r/2,Se,10),n.box(i*1.2,i*1.2,r*.6,i*.9,-i*.5,.02+r/2,fe,.8),n.shield(i*1.5,.03+r),.04+r}function ns(n,e,t,i,r,s){n.cyl(e,e,t,s,fe,12,i,r,1.02),n.cyl(e*.7,e,e*.5,s+t/2+e*.25,fe,12,i,r,.92),n.cyl(e*1.04,e*1.04,t*.45,s-t*.1,ut,12,i,r),n.box(e,.005,.004,i,r+e*.5,s+t/2+e*.5,bn)}function KM(n,e,t,i,r,s,o,c){n.box(e,.07,s,t,i+.012,r,o,c),n.add(new cn(e*.7,.014,.04,4).rotateY(Math.PI/4).scale(1,1,s/e).translate(t,i-.043,r),o,c*.9)}function ZM(n){const e=[];{const t=rn(163),i=eo(t,.036,.08,.02,.03);t.truss(0,0,i,i+.15,.03,3,.0035),t.strapped(.033,.06,.048,-.004,i+.07,!0),t.dish(.036,-.03,.02,i+.08,[-.7,.5,.5]),ns(t,.031,.07,-.012,.008,i+.19),t.box(.03,.03,.05,.032,-.012,i+.175,fe,.8),dr(t,-.016,-.01,i+.04,.04,.06,Math.PI+.25,2,-1,.003),t.boom(.03,0,i+.2,[.4,.2,1],.07,.004),t.rcs(.05,0,i+.14,1,0),t.rcs(-.042,.008,i+.17,-1,0),t.light(-.04,.02,i+.19,xn),t.light(.05,0,i+.19,Mn),t.light(0,.03,i+.07,Wt),e.push(n(t,0))}{const t=rn(167),i=eo(t,.055,.12,.03,.045);t.truss(0,0,i,i+.42,.05,6,.0045),t.strapped(.044,.1,.07,0,i+.11,!0),t.strapped(.028,.07,-.03,.056,i+.08,!1,.9),t.sphere(.036,0,-.062,i+.2,fe,1.05,10),dr(t,-.028,0,i+.2,.13,.17,Math.PI+.12,3,1),t.box(.1,.085,.11,.008,.012,i+.32,ut,.95),t.frame(.11,.095,.12,.008,.012,i+.32,.004),t.strut(.03,0,i+.36,.1,-.01,i+.36,.006),t.strut(.03,0,i+.42,.1,-.01,i+.42,.006),la(t,.108,-.012,i+.38,2,3,.0085,.13,fe),la(t,-.072,.03,i+.33,1,2,.0085,.08,fe),ns(t,.036,.09,-.02,.014,i+.46),t.pdc(.008,.06,i+.32),t.dish(.032,.03,.04,i+.45,[.6,.7,.4]),t.rcs(.04,-.03,i+.43,1,0),t.rcs(-.06,.014,i+.47,-1,0),t.rcs(.04,.03,i-.02,1,0),t.rcs(-.04,-.03,i-.02,-1,0),t.light(-.06,.02,i+.44,xn),t.light(.13,-.01,i+.38,Mn),t.light(.008,.07,i+.36,Wt),e.push(n(t,1))}{const t=rn(173),i=eo(t,.055,.11,.03,.04);t.truss(0,0,i,i+.1,.05,2,.0045),t.sphere(.04,.052,.01,i+.045,fe,1.05,10),t.strapped(.026,.05,-.05,-.012,i+.045,!0),t.box(.13,.11,.2,0,0,i+.2,fe,.9),t.box(.134,.06,.09,0,.02,i+.235,ut),t.frame(.19,.17,.25,0,0,i+.2,.0055);for(const[r,s,o]of[[.095,.085,.1],[-.095,.085,.13],[.095,-.085,.15],[-.095,-.085,.08],[.11,0,.22],[-.11,.02,.2],[0,.1,.22],[0,-.1,.19],[.095,.085,.31],[-.095,.06,.3],[.08,-.085,.3],[-.095,-.085,.32]])t.box(.04,.04,.046,r,s,i+o,fe,.7+t.r()*.3),Kl(t,r*1.2,s*1.2,i+o,1.3);ns(t,.034,.07,.022,.012,i+.335),dr(t,-.03,0,i+.04,.1,.075,Math.PI-.1,2),dr(t,.06,-.03,i+.03,.05,.05,-.3,1),t.boom(-.04,.05,i+.3,[-.2,.6,1],.09,.003),t.rcs(.07,0,i+.33,1,0),t.rcs(-.07,0,i+.31,-1,0),t.light(-.1,0,i+.2,xn),t.light(.1,0,i+.26,Mn),t.light(.022,.05,i+.34,Wt),e.push(n(t,2))}{const t=rn(179),i=eo(t,.09,.18,.05,.08);t.bell2(.036,-.085,.03,.03,.08),t.cyl(.02,.026,.06,.06,Se,8,-.085,.03),t.truss(0,0,i,i+.86,.08,10,.006);const r=.02,s=-.075;t.box(.052,.06,1.14,r,s,i+.63,fe,.6);for(let o=0;o<5;o++)t.box(.07,.03,.13,r,s+.025,i+.14+o*.2,o===3?ut:fe,.75+t.r()*.3);t.box(.06,.07,.1,r,s,i+1.07,ut,.9);for(let o=0;o<4;o++)t.cyl(.03,.03,.08,i+.2+o*.19,fe,10,r-.06,s-.01,.8+t.r()*.25);t.frame(.085,.09,.035,r,s,i+1.17,.006),t.frame(.085,.09,.035,r,s,i+.95,.006),t.strapped(.072,.16,.115,.03,i+.2,!0),t.strapped(.05,.12,-.1,.035,i+.2),t.sphere(.066,-.11,.02,i+.4,fe,1.04,12),t.strapped(.04,.1,.095,.045,i+.42,!1,.9),t.box(.14,.1,.17,0,.06,i+.61,ut,.95),t.frame(.15,.11,.18,0,.06,i+.61,.005),t.box(.1,.09,.12,-.1,0,i+.57,fe,.78),t.box(.09,.085,.15,.105,.02,i+.65,fe,1.05),ns(t,.05,.12,-.035,.03,i+.82),ns(t,.034,.08,.065,.02,i+.79),t.turret(0,.114,i+.61,1,1.5),t.turret(-.1,.05,i+.57,1,1.2),t.turret(.105,.066,i+.65,1,1.2),la(t,.125,0,i+.83,2,3,.009,.13),t.strut(.04,0,i+.8,.11,0,i+.8,.007),dr(t,.03,.045,i+.33,.21,.24,.75,4,2,.005),dr(t,-.03,.045,i+.3,.16,.16,Math.PI-.6,3,-1,.005),dr(t,-.04,0,i+.74,.1,.09,Math.PI+.1,2,-1,.004),t.dish(.045,-.03,.085,i+.84,[-.4,1,.3]),t.pdc(.105,.066,i+.71),t.pdc(-.035,.083,i+.82),t.pdc(r,s-.03,i+.5,-1),t.rcs(.06,-.04,i+.86,1,0),t.rcs(-.09,.03,i+.86,-1,0),t.rcs(.07,.05,i-.02,1,0),t.rcs(-.07,-.05,i-.02,-1,0),t.light(-.15,0,i+.57,xn),t.light(.15,.02,i+.65,Mn),t.light(0,.13,i+.66,Wt),e.push(n(t,3))}{const t=rn(181),i=eo(t,.06,.13,.032,.045);t.truss(0,0,i,i+.62,.05,8,.0045),t.sphere(.115,.06,0,i+.2,fe,1.02,14),t.cyl(.117,.117,.035,i+.2,ut,16,.06,0),t.strapped(.07,.2,-.09,.01,i+.3,!1,.9),t.strapped(.05,.12,.072,-.02,i+.47,!0),t.sphere(.05,-.065,.03,i+.54,fe,.9,10),t.frame(.2,.12,.012,-.01,0,i+.36,.005),ns(t,.034,.08,.02,.02,i+.66),t.box(.03,.03,.03,-.03,.03,i+.61,Se,.8);const[r,s,o]=t.boom(-.03,.03,i+.61,[-1,.3,.25],.17,.009,fe);t.sphere(.014,r,s,o,Se,.8,8);const[c,a,u]=t.boom(r,s,o,[-.25,-.1,1],.12,.007,fe);t.box(.02,.02,.03,c,a,u,Se,.7),dr(t,-.03,0,i+.035,.09,.07,Math.PI+.1,2),t.rcs(.06,.02,i+.65,1,0),t.rcs(-.02,.02,i+.66,-1,0),t.rcs(.04,.03,i-.02,1,0),t.rcs(-.04,-.03,i-.02,-1,0),t.light(-.165,.01,i+.3,xn),t.light(.18,0,i+.2,Mn),t.light(r,s+.02,o,Wt),e.push(n(t,4))}{const t=rn(191),i=eo(t,.055,.12,.03,.04);t.truss(0,0,i,i+.76,.045,10,.0045);for(let r=0;r<6;r++)for(const s of[-1,1]){const o=i+.115+r*.113;if(r===2&&s===1){dr(t,.025,0,o,.1,.1,.08,2);continue}if(r===4&&s===-1){t.strapped(.034,.05,-.062,0,o,!1,.9);continue}if(r===1&&s===-1){t.frame(.07,.07,.095,-.062,.012,o,.004);continue}const c=.066+t.r()*.03;KM(t,c,s*(.026+c/2),0,o,.098,(r*2+(s>0?1:0))%5===3?ut:fe,.7+t.r()*.4)}ns(t,.032,.07,-.014,.012,i+.8),t.dish(.028,.03,.03,i+.79,[.5,.8,.3]),t.rcs(.04,0,i+.78,1,0),t.rcs(-.05,.012,i+.8,-1,0),t.rcs(.04,.03,i-.02,1,0),t.rcs(-.04,-.03,i-.02,-1,0),t.light(-.11,.02,i+.45,xn),t.light(.11,.02,i+.45,Mn),t.light(-.014,.05,i+.8,Wt),e.push(n(t,5))}return e}function jM(){const n=(p,g)=>{const b=WM*$M[g],v=p.build(1,7,XM[g],!0);v.computeBoundingBox();const M=v.boundingBox,S=b/(M.max.z-M.min.z),A=(M.max.z+M.min.z)/2;for(const _ of[v,v.userData.coarse])_.translate(0,0,-A).scale(S,S,S),_.computeBoundingBox(),_.computeBoundingSphere();return v.userData.nozzle=(v.userData.nozzle-A)*S,v.userData.length=b,v},e=[...qM(n),...YM(n),...ZM(n)],t=rn(41);t.oct(.05,.05,.06,0,1),t.box(.05,.003,.04,0,.026,-.005,ut),t.cyl(.014,.016,.04,.05,Se,12),t.add(new cn(.02,.018,.022,12,1,!0).rotateX(Math.PI/2).translate(0,0,.08),fe,.9),t.dish(.036,0,.026,0,[0,1,.25]),t.box(.008,.008,.008,-.025,0,-.01,Se),t.box(.008,.008,.008,.022,-.022,-.02,Se);const[i,r,s]=t.boom(-.025,0,-.01,[-1,.15,-.1],.18,.003);t.box(.012,.012,.012,i,r,s,Se,.7);const[o,c,a]=t.boom(.022,-.022,-.02,[.7,-.7,-.2],.05,.004);t.cyl(.01,.01,.04,a,Se,8,o,c);for(const p of[0,1,2,3])t.box(p%2?.004:.03,p%2?.03:.004,.032,o,c,a,Se,.6);for(const p of[-1,1])t.rcs(p*.028,.02,-.025,p,0);t.bell(.018,-.035,.028),t.light(0,.03,-.02,Wt,.006);const u=t.build(),l=rn(43);l.box(.04,.04,.05,0,0,0),l.box(.042,.042,.012,0,0,-.01,ut),l.dish(.075,0,0,.026,[0,0,1]),l.boom(.02,0,0,[1,0,0],.03),l.solar(.05,0,0,.12,.05,0),l.boom(-.02,0,0,[-1,0,0],.025),l.solar(-.045,0,0,.08,.05,Math.PI+.4),l.radiator(0,-.02,-.005,.03,.03,-Math.PI/2,1),l.boom(.01,.02,-.02,[.3,1,-.4],.09,.002),l.boom(-.01,-.02,-.02,[-.2,-1,-.5],.07,.002);for(const p of[-1,1])l.rcs(p*.022,.018,-.022,p,0);l.bell(.014,-.025,.022),l.light(0,-.024,0,Wt,.006);const h=l.build(),d=rn(47);d.sphere(.03,0,0,0,fe,1,14),d.cyl(.031,.031,.014,0,ut,14),d.box(.04,.03,.03,0,.03,.02,fe,.9),d.greeble(.04,.03,.03,0,.03,.02,3,"t");const[f,m,y]=d.boom(0,.02,.035,[0,-.3,1],.045,.006);d.sphere(.013,f,m,y,Se,.6,12),d.cyl(.005,.005,.004,y+.012,bn,8,f,m);for(const p of[.785,2.356,3.927,5.498])d.boom(0,0,-.012,[Math.cos(p),Math.sin(p),0],.04,.003),d.rcs(Math.cos(p)*.04,Math.sin(p)*.04,-.012,Math.cos(p),Math.sin(p));d.solar(.02,.045,.02,.05,.035,.35),d.boom(-.012,.045,.01,[-.2,1,-.3],.06,.0018),d.engine(.022,-.045,.04,.02,-.03,4),d.light(0,.046,0,Wt,.005);const x=d.build();return e.probes=[u,h,x],e}const Jp=new mc(new Uint8Array([255,255,255,255]),1,1);Jp.needsUpdate=!0;function md(n,e=null){const t=GM(),i=new Op({color:"#d4d8de",map:t,roughnessMap:t,metalness:.35,roughness:.62,emissive:"#06070a"});return i.onBeforeCompile=r=>{r.uniforms.uT=n,r.uniforms.uPxK=jp,r.uniforms.tGround={value:e||Jp},r.uniforms.uGroundTex={value:e?1:0},Tf(r.uniforms),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        ${wf}
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
        }`)},i}function JM(n){return new Ot({uniforms:{uT:n},vertexShader:`${Hi}
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
        ${Gi}
      }`,fragmentShader:`${Vi}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${Wi}
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
      }`,blending:ui,transparent:!0,depthWrite:!1})}function QM(){return new Ot({uniforms:{uPR:{value:1}},vertexShader:`${Hi}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${Gi}
      }`,fragmentShader:`${Vi}
      varying vec3 vCol;
      void main() {
        ${Wi}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,blending:ui,transparent:!0,depthWrite:!1})}function gd(n,e,t=null){const i=n.clone();let r=e0||(e0=md(e));t&&(su.has(t)||su.set(t,md(e,t)),r=su.get(t));const s=new ql(i,r,1),o=(h,d)=>{const f=new To(new Float32Array(d),d.length);return i.setAttribute(h,f),f},c=o("iPaint",[.6,.6,.6]),a=o("iSun",[1]),u=o("iLit",[0]),l=o("iGround",[.2,.19,.18]);return o("iSeed",[Math.random()]),o("iHull",[.95]),s.setMatrixAt(0,new It),s.frustumCulled=!1,s.userData.set=(h,d,f)=>{const m=new vt(h);c.setXYZ(0,m.r,m.g,m.b),c.needsUpdate=!0,a.setX(0,d),a.needsUpdate=!0,u.setX(0,f?1:0),u.needsUpdate=!0},s.userData.ground=h=>{l.setXYZ(0,h[0],h[1],h[2]),l.needsUpdate=!0},s}let e0=null;const su=new WeakMap,eS=40;function tS(n,e){const t={value:0},i=jM(),r=[...i,...i.probes],s=i.length,o=md(t),c=ne=>{const ge=ne.clone(),ve=new ql(ge,o,e);ve.instanceMatrix.setUsage(Lr);const we=(Y,ee)=>{const Me=new To(new Float32Array(e*ee),ee);return Me.setUsage(Lr),ge.setAttribute(Y,Me),Me};return ve.userData={paint:we("iPaint",3),sun:we("iSun",1),seed:we("iSeed",1),hull:we("iHull",1),n:0},we("iLit",1).array.fill(1),ve.frustumCulled=!1,ve.count=0,n.add(ve),ve},a=r.map(c),u=r.map(ne=>ne.userData.rotor?c(ne.userData.rotor):null),l=r.map(ne=>ne.userData.coarse?c(ne.userData.coarse):null),h=[...a,...u.filter(Boolean),...l.filter(Boolean)],d=new It,f=new Gp;f.setAttribute("position",new St([-1,-.02,0,1,-.02,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),f.setAttribute("part",new St([0,0,0,0,1,1,1,1],1)),f.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]);const m=e*3,y=(ne,ge)=>{const ve=new To(new Float32Array(m*ge),ge);return ve.setUsage(Lr),f.setAttribute(ne,ve),ve},x=y("iPow",1),p=y("iSeed",1),g=y("iTint",3),b=new ql(f,JM(t),m);b.instanceMatrix.setUsage(Lr),b.frustumCulled=!1,b.count=0,b.renderOrder=2,n.add(b);const v=new on,M=new Float32Array(e*3),S=new Float32Array(e*3),A=new Float32Array(e);v.setAttribute("position",new Sn(M,3).setUsage(Lr)),v.setAttribute("color",new Sn(S,3).setUsage(Lr)),v.setAttribute("size",new Sn(A,1).setUsage(Lr));const _=QM(),E=new _f(v,_);E.frustumCulled=!1,E.renderOrder=3,n.add(E);const P=new It,L=new $n,D=new U,H=new U,C=new U(0,1,0),I=new vt;let O=0,$=0,oe=0;const Z=new vt(.35,.6,1),te=new vt(.85,.9,1),le=new $n,F=new U(1,0,0);return{geometries:i,hulls:i.length,probeType:i.length,probes:i.probes.length,uT:t,begin(ne,ge){t.value=ne,_.uniforms.uPR.value=ge;for(const ve of h)ve.userData.n=0;O=$=oe=0},add(ne,ge,ve,we,Y,ee,Me,ue,_e,Ye,pt,et){if(!(oe>=e)){if(oe++,H.copy(ge).add(ve),P.lookAt(H,ge,Math.abs(ve.y)>.99?D.set(1,0,0):C),L.setFromRotationMatrix(P),pt>1.5){const We=pt<eS&&l[ne]?l[ne]:a[ne],dt=We.userData.n++;P.compose(ge,L,D.set(we[0],we[1],we[2])),We.setMatrixAt(dt,P),I.set(Y),We.userData.paint.setXYZ(dt,I.r,I.g,I.b),We.userData.sun.setX(dt,et),We.userData.seed.setX(dt,Me*.137%1),We.userData.hull.setX(dt,ee);const Xe=u[ne];if(Xe){const xt=Xe.userData.n++;Xe.setMatrixAt(xt,P.multiply(d.makeRotationZ(t.value*r[ne].userData.rotorSpin+Me))),Xe.userData.paint.setXYZ(xt,I.r,I.g,I.b),Xe.userData.sun.setX(xt,et),Xe.userData.seed.setX(xt,Me*.137%1),Xe.userData.hull.setX(xt,ee)}}if(ue&&O<m){const We=O++;H.set(0,0,r[ne].userData.nozzle).multiply(D.set(we[0],we[1],we[2])).applyQuaternion(L).add(ge);const dt=1.9*_e*Math.max(we[2],.62);P.compose(H,L,D.set(.06*we[0]*(ne>=s?.5:1),1,dt)),b.setMatrixAt(We,P);const Xe=_n.smoothstep(pt,4,40);x.setX(We,(1-.35*_n.smoothstep(pt,120,500))*(_e<.2?Xe:.3+.7*Xe)),p.setX(We,Me*.371%1),g.setXYZ(We,Z.r,Z.g,Z.b)}if(Ye&&Ye[0]>0){const We=$++;M[We*3]=ge.x,M[We*3+1]=ge.y,M[We*3+2]=ge.z;const dt=Ye[2]??ue;I.set(dt?"#cfe8ff":Y);const Xe=Ye[1]*(dt?1.5:1);S[We*3]=I.r*Xe,S[We*3+1]=I.g*Xe,S[We*3+2]=I.b*Xe,A[We]=Ye[0]}}},jet(ne,ge,ve,we,Y,ee){if(O>=m)return;const Me=O++;H.copy(ne).sub(ge),P.lookAt(H,ne,Math.abs(ge.y)>.99?F:C),le.setFromRotationMatrix(P),P.compose(ne,le,D.set(we,1,ve)),b.setMatrixAt(Me,P),x.setX(Me,Y),p.setX(Me,ee*.613%1),g.setXYZ(Me,te.r,te.g,te.b)},end(){for(const ne of h)if(ne.count=ne.userData.n,!!ne.count){ne.instanceMatrix.needsUpdate=!0;for(const ge of["paint","sun","seed","hull"])ne.userData[ge].needsUpdate=!0}b.count=O,O&&(b.instanceMatrix.needsUpdate=!0,x.needsUpdate=p.needsUpdate=g.needsUpdate=!0),v.setDrawRange(0,$),$&&(v.attributes.position.needsUpdate=!0,v.attributes.color.needsUpdate=!0,v.attributes.size.needsUpdate=!0)}}}const nS={fuelnet:"ringyard",strike:"massdriver",ansible:"array",spire:"college",blackout:"citadel",ark:"ark"};let t0=null;function iS(n){return t0||(t0=new Ot({uniforms:{uT:n},vertexShader:`${Hi}
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vec4 mv = viewMatrix * wp;
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
        ${Gi}
      }`,fragmentShader:`${Vi}
      uniform float uT; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main() {
        ${Wi}
        float rim = pow(max(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0), 2.0);
        float scan = 0.55 + 0.45 * sin(vW.y * 60.0 - uT * 6.0);
        gl_FragColor = vec4(vec3(0.9, 0.7, 0.35) * (0.12 + rim * 0.9) * scan, 1.0);
      }`,blending:ui,transparent:!0,depthWrite:!1}))}function rS(n,e,t){const i=nS[n]||n,r=iS(t),s=e.size,o=.5,c=[rn(11),rn(12),rn(13)],[a,u,l]=c;let h=new It,d=!1,f=!1,m=null;if(i==="sundiver"){d=!0;const p=s*1.6,g=o*1.7;a.add(new fr(g,o*.04,6,64).translate(0,0,p),Se,.8),a.add(new fr(g*.98,o*.02,4,64).translate(0,0,p-o*.12),Se,.7);for(let v=0;v<12;v++){const M=v/12*Math.PI*2,S=Math.cos(M),A=Math.sin(M);a.strut(S*o*.2,A*o*.2,p-o*.05,S*g,A*g,p,o*.025),a.strut(S*g,A*g,p,S*g*.98,A*g*.98,p-o*.12,o*.015)}a.cyl(o*.18,o*.18,o*.8,p-o*.5,fe,16),a.cyl(o*.19,o*.19,o*.12,p-o*.4,ut,16);for(const v of[0,Math.PI/2,Math.PI,Math.PI*1.5])a.radiator(Math.cos(v)*o*.18,Math.sin(v)*o*.18,p-o*.6,o*.8,o*.4,v,3,o*.012);const b=o*.21;for(let v=-8;v<=8;v++)for(let M=-8;M<=8;M++){const S=b*1.5*v,A=b*Math.sqrt(3)*(M+v/2),_=Math.hypot(S,A);_>g*.93||_<o*.45||u.add(new cn(b*.95,b*.95,o*.012,6).rotateX(Math.PI/2).translate(S,A,p+o*.02),pd,.9+(v*7+M*3)%5*.04)}l.dish(o*.45,0,0,p+o*.05,[0,0,1]);for(let v=0;v<3;v++){const M=v/3*Math.PI*2+.4,S=Math.cos(M)*o*.6,A=Math.sin(M)*o*.6,_=p+o*(2+v*.35);l.add(new cn(o*.01,o*.22,o*.16,16).rotateX(Math.PI/2).translate(S,A,_),fe,1.15),l.cyl(o*.05,o*.06,o*.22,_-o*.18,Se,10,S,A),l.box(o*.12,o*.02,o*.08,S,A,_-o*.22,ut)}for(let v=0;v<8;v++){const M=v/8*Math.PI*2;l.light(Math.cos(M)*g,Math.sin(M)*g,p+o*.05,v%2?Wt:Mn,o*.04)}}else if(i==="massdriver"){f=!0;const p=o*4.6,g=A=>Math.sqrt(Math.max(0,s*s-A*A))-s,b=A=>o*.12+(A+p/2)/p*o*.75,v=12;for(let A=0;A<=v;A++){const _=-p/2+p*A/v,E=b(_);for(const P of[-1,1])a.strut(_,E,P*o*.08,_,g(_)-o*.02,P*o*.14,o*.03);if(A<v){const P=_+p/v;for(const L of[-1,1])a.strut(_,E,L*o*.05,P,b(P),L*o*.05,o*.04,fe,.9);u.add(new fr(o*.11,o*.025,6,16).rotateY(Math.PI/2).rotateZ(Math.atan2(o*.75,p)).translate(_+p/v/2,(E+b(P))/2,0),A%3===0?ut:Se,.9)}}const M=-p/2-o*.35;l.box(o*.45,o*.3,o*.5,M,g(M)+o*.15,0,fe),l.box(o*.47,o*.05,o*.52,M,g(M)+o*.3,0,ut);for(const A of[-.18,0,.18])l.add(new cn(o*.06,o*.06,o*.25,10).translate(M-o*.32,g(M)+o*.12,o*A),fe,.9);for(const A of[-.32,.32])l.radiator(M,g(M)+o*.28,o*A,o*.4,o*.3,Math.PI/2,2,o*.012);l.box(o*.2,o*.07,o*.07,-p*.2,b(-p*.2)+o*.06,0,ut),l.light(p/2,b(p/2)+o*.06,0,Wt,o*.04);const S=p/2;for(const A of[-1,1])l.strut(S,b(S),A*o*.12,S,g(S)-o*.02,A*o*.25,o*.05);l.add(new fr(o*.16,o*.04,6,18).rotateY(Math.PI/2).rotateZ(Math.atan2(o*.75,p)).translate(S,b(S),0),ut,1);for(let A=1;A<6;A++){const _=-p/2+p*A/6;l.light(_,b(_)+o*.14,o*.1,A%2?Mn:xn,o*.03)}}else if(i==="ringyard"){const p=s*1.45,g=o*.2;for(const[b,v]of[[-g,-g],[-g,g],[g,-g],[g,g]])a.add(new fr(p+b,o*.03,5,160).rotateX(Math.PI/2).translate(0,v,0),Se);a.add(new fr(p,o*.06,6,160).rotateX(Math.PI/2).scale(1,.4,1),fe,.9);for(let b=0;b<72;b++){const v=b/72*Math.PI*2,M=Math.cos(v),S=Math.sin(v);a.strut(M*(p-g),-g,S*(p-g),M*(p+g),g,S*(p+g),o*.03),a.strut(M*(p-g),g,S*(p-g),M*(p-g),-g,S*(p-g),o*.025),a.strut(M*(p+g),g,S*(p+g),M*(p+g),-g,S*(p+g),o*.025),b%12===0&&a.box(o*.5,o*.04,o*.5,M*p,g+o*.02,S*p,ut)}for(let b=0;b<3;b++){const v=b/3*Math.PI*2;u.add(new cn(o*.3,o*.3,o*.7,16).translate(Math.cos(v)*p,0,Math.sin(v)*p),fe),u.add(new cn(o*.31,o*.31,o*.15,16).translate(Math.cos(v)*p,0,Math.sin(v)*p),ut),u.radiator(Math.cos(v)*p,o*.3,Math.sin(v)*p,o*.6,o*.4,Math.PI/2,3,o*.015),u.light(Math.cos(v)*p,o*.22,Math.sin(v)*p,Wt,o*.04)}for(let b=0;b<6;b++){const v=b/6*Math.PI*2+Math.PI/6,M=Math.cos(v),S=Math.sin(v),A=new U(M*(p+o*.45),0,S*(p+o*.45)),_=new U(-S,0,M),E=new U(M,0,S),P=new U(0,1,0),L=o*.45,D=o*.2,H=o*.2,C=(Z,te,le)=>A.clone().addScaledVector(_,Z).addScaledVector(E,te).addScaledVector(P,le),I=(Z,te)=>l.strut(Z.x,Z.y,Z.z,te.x,te.y,te.z,o*.014);for(const Z of[-D,D])for(const te of[-H,H])I(C(-L,Z,te),C(L,Z,te));for(const Z of[-L,L])for(const te of[-H,H])I(C(Z,-D,te),C(Z,D,te));for(const Z of[-L,L])for(const te of[-D,D])I(C(Z,te,-H),C(Z,te,H));const O=new cn(o*.1,o*.1,o*.7,10).applyQuaternion(new $n().setFromUnitVectors(P,_)).translate(A.x,A.y,A.z);l.add(O,b%2?fe:ut),l.strut(M*(p+g),0,S*(p+g),M*(p+o*.25),0,S*(p+o*.25),o*.05);const $=C(0,-D,H+o*.25),oe=C(L*.6,0,H+o*.25);l.strut(A.x,A.y+H,A.z,$.x,$.y,$.z,o*.03),l.strut($.x,$.y,$.z,oe.x,oe.y,oe.z,o*.025,fe,.9);for(const Z of[-L,L]){const te=C(Z,D,H);l.light(te.x,te.y,te.z,bn,o*.035)}}}else if(i==="citadel"){const p=s*1.4,g=o*1.8;for(let b=0;b<6;b++){const v=c[Math.floor(b/2)],M=b/6*Math.PI*2+.3,S=Math.cos(M),A=Math.sin(M),_=S*p,E=A*p;v.add(new cn(g*.24,g*.28,g*.14,6).translate(_,0,E),fe),v.add(new cn(g*.29,g*.29,g*.03,6).translate(_,-g*.07,E),Se),v.add(new cn(g*.245,g*.245,g*.03,6).translate(_,g*.06,E),ut);for(const P of[-1,1]){const L=_+-A*P*g*.1,D=E+S*P*g*.1;v.add(new cn(g*.06,g*.07,g*.05,10).translate(L,g*.08,D),Se),v.box(g*.1,g*.07,g*.1,L,g*.13,D,fe,.85),v.boom(L+S*g*.04,g*.14,D+A*g*.04,[S,.12,A],g*.36,g*.03,Se,.6)}v.boom(_-S*g*.12,g*.07,E-A*g*.12,[0,1,0],g*.14,g*.02),v.sphere(g*.05,_-S*g*.12,g*.23,E-A*g*.12,fe,1.1,10),v.radiator(_-S*g*.26,0,E-A*g*.26,g*.22,g*.14,Math.PI/2,2,g*.01),v.light(_,-g*.1,E,xn,g*.03)}for(let b=0;b<12;b++){const v=b/12*Math.PI*2+.3+Math.PI/12,M=Math.cos(v),S=Math.sin(v);l.sphere(g*.04,M*p,g*.02,S*p,fe,1.05,10),l.box(g*.12,g*.01,g*.05,M*p,g*.02,S*p,pd),l.light(M*p,g*.07,S*p,xn,g*.02)}}else if(i==="array"){h=ou(s*1.6,.9),a.sphere(o*.16,0,0,0,fe,1,16),a.cyl(o*.1,o*.1,o*.5,0,Se,12),a.cyl(o*.17,o*.17,o*.06,0,ut,16);for(let p=0;p<3;p++){const g=p/3*Math.PI*2+Math.PI/2,b=Math.cos(g),v=Math.sin(g),M=o*1.2;for(const[A,_]of[[.05,.05],[-.05,.05],[0,-.06]])a.strut(b*o*.15+A*o*-v,_*o,v*o*.15+A*o*b,b*M+A*o*-v,_*o,v*M+A*o*b,o*.018);const S=p<2?u:l;S.dish(o*.38,b*M,0,v*M,[b*.25,1,v*.25]),S.box(o*.12,o*.08,o*.12,b*M,-o*.06,v*M,fe,.9)}for(let p=0;p<3;p++){const g=p/3*Math.PI*2+Math.PI/2,b=Math.cos(g),v=Math.sin(g);for(const M of[.45,.8])l.dish(o*.14,b*o*1.2*M,o*.06,v*o*1.2*M,[b*.4,1,v*.4])}l.cyl(o*.03,o*.04,o*.2,-o*.35,fe,10),l.light(0,o*.2,0,Wt,o*.04)}else if(i==="ark"){h=ou(s*1.9+o*2,1.6).multiply(new It().makeScale(2.2,2.2,2.2));const p=o*4;a.cyl(o*.12,o*.12,p,0,Se,12),a.truss(0,o*.45,-p/2,p/2,o*.18,16,o*.02),a.truss(0,-o*.45,-p/2,p/2,o*.18,16,o*.02);for(let g=0;g<6;g++)for(const b of[-1,1])a.tank(o*.12,o*.4,b*o*.24,0,-p*.32+g*o*.18,fe);for(let g=0;g<5;g++){const b=-p*.1+g*o*.42;u.cyl(o*.36,o*.36,o*.3,b,g%2?ut:fe,24),u.cyl(o*.38,o*.38,o*.04,b+o*.15,Se,24);for(let v=0;v<10;v++){const M=v/10*Math.PI*2;u.light(Math.cos(M)*o*.365,Math.sin(M)*o*.365,b,bn,o*.035)}}for(const[g,b]of[[o*.25,o*.25],[-o*.25,o*.25],[o*.25,-o*.25],[-o*.25,-o*.25]])l.bell2(o*.1,g,b,-p/2-o*.02,o*.18);l.engine(o*.3,-p/2,o*.3,o*.34,-p/2+o*.1,8),l.shield(o*.5,p/2+o*.15);for(const g of[-1,1])l.radiator(0,g*o*.15,-p*.25,o*.8,o*.6,g>0?Math.PI/2:-Math.PI/2,3,o*.012);l.light(0,0,p/2+o*.2,Wt,o*.05);for(const g of[-1,1])l.light(g*o*.4,0,0,g>0?Mn:xn,o*.04)}else if(i==="college"){h=ou(s*1.55,2.4),a.cyl(o*.1,o*.1,o*1.3,0,fe,14);for(const g of[-.45,-.2,.25,.5])a.cyl(o*.17,o*.17,o*.1,o*g,g>0?ut:fe,16);for(const g of[.38])a.add(new _r(o*.15,16,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).translate(0,0,o*g),fe,1.1);for(let g=0;g<8;g++){const b=g/8*Math.PI*2;a.box(o*.03,o*.03,o*.05,Math.cos(b)*o*.172,Math.sin(b)*o*.172,o*.25,bn)}u.cyl(o*.14,o*.14,o*.12,0,Se,16);for(let g=0;g<4;g++){const b=g/4*Math.PI*2;u.box(o*.1,o*.1,o*.14,Math.cos(b)*o*.2,Math.sin(b)*o*.2,-o*.62,fe,.9)}const p=rn(14);p.hoop(o*.75,o*.12,o*.18,40,0,4,o*.1,o*.012),m=p;for(let g=0;g<8;g++)l.box(o*.06,o*.06,o*.06,o*(1.1+g%3*.22),o*(.5-g*.14),o*(.3+g%2*.25),Se,.7);for(let g=0;g<4;g++){const b=g/4*Math.PI*2+.7;l.tank(o*.04,o*.14,Math.cos(b)*o*1.05,Math.sin(b)*o*1.05,o*.15,fe),l.light(Math.cos(b)*o*1.05,Math.sin(b)*o*1.05,o*.26,Wt,o*.025)}for(const[g,b]of[[.12,.12],[-.12,-.12]])l.box(o*.05,o*.05,o*.3,o*g,o*b,-o*.85,fe),l.box(o*.06,o*.02,o*.1,o*g,o*b,-o*.8,ut);l.light(0,0,o*.68,Wt,o*.04)}const y=new Ei,x=[];for(const p of c){const g=p.build(1,7);g.applyMatrix4(h);const b=gd(g,t);b.computeBoundingSphere(),b.frustumCulled=!0,b.layers.enable(BM);const v=new tn(g,r);y.add(b,v),x.push([b,v])}if(m){const p=m.build(1,7),g=gd(p,t);g.applyMatrix4(h);const b=new tn(p,r);b.applyMatrix4(h),y.add(g,b),x[1].push(g,b),y.userData.spinner=g}return y.userData={...y.userData,stages:x,faceSun:d,surface:f},y.userData.set=(p,g)=>{for(const b of x)for(const v of b)v.userData.set?.(p,g,!0)},y}function ou(n,e){const t=new U(Math.cos(e),0,Math.sin(e)),i=new U(0,1,0),r=new U().crossVectors(t,i);return new It().makeBasis(r,t,i).setPosition(t.clone().multiplyScalar(n))}function sS(n,e,t){n.userData.stages.forEach((i,r)=>{const s=t||e>=(r+1)/3;for(let o=0;o<i.length;o+=2)i[o].visible=s,i[o+1].visible=!s})}function oS(n){const e=new on;e.setAttribute("position",new St([-1,-1,0,3,-1,0,-1,3,0],3));const t=new tn(e);t.frustumCulled=!1;const i=new pc;i.add(t);const r=new vc,s=n.extensions,o=s.has("EXT_color_buffer_float")||s.has("EXT_color_buffer_half_float")?Ri:ti,c={type:o,depthBuffer:!1,minFilter:yn,magFilter:yn};let a=null;const u=(E,P)=>new di(E,P,{type:o,samples:g,depthBuffer:!0,depthTexture:new Eo(E,P,$i)}),l=[],h=6,d=()=>({value:new rt}),f=new Ot({uniforms:{tSrc:{value:null},uTexel:d(),uPrefilter:{value:0},uThreshold:{value:1.3},uKnee:{value:.2}},vertexShader:aa,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1}),m=new Ot({uniforms:{tSrc:{value:null},uTexel:d(),uRadius:{value:1}},vertexShader:aa,fragmentShader:`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,blending:ui,depthTest:!1,depthWrite:!1}),y={pos:new rt(.5,.5),vis:0,color:new vt("#ffe2b0")},x=new Ot({uniforms:{tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:6e3},uFocus:{value:100},uDof:{value:0},tBloom:{value:null},uBloom:{value:.17},uExposure:{value:1},uTime:{value:0},uAspect:{value:1},uSun:{value:y.pos},uSunVis:{value:0},uSunColor:{value:y.color},uTexel:d(),uCA:{value:1},uGrain:{value:1}},vertexShader:aa,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1});let p=new rt(1,1),g=4;function b(E,P,L){const D=Math.max(1,Math.round(E*L)),H=Math.max(1,Math.round(P*L));p.set(D,H),a?a.setSize(D,H):a=u(D,H);let C=Math.max(1,D>>1),I=Math.max(1,H>>1);for(let O=0;O<h;O++)l[O]?l[O].setSize(C,I):l[O]=new di(C,I,c),C=Math.max(1,C>>1),I=Math.max(1,I>>1);x.uniforms.uAspect.value=E/P}function v(E){E!==g&&(g=E,a&&(a.dispose(),a=u(p.x,p.y)))}function M(E,P){t.material=E,n.setRenderTarget(P),n.render(i,r)}function S(E,P,L){x.uniforms.uNear.value=P.near,x.uniforms.uFar.value=P.far,n.setRenderTarget(a),n.clear(),n.render(E,P);let D=a.texture,H=p.x,C=p.y;for(let O=0;O<A;O++)f.uniforms.tSrc.value=D,f.uniforms.uTexel.value.set(1/H,1/C),f.uniforms.uPrefilter.value=O===0?1:0,M(f,l[O]),D=l[O].texture,H=l[O].width,C=l[O].height;for(let O=A-2;O>=0;O--)m.uniforms.tSrc.value=l[O+1].texture,m.uniforms.uTexel.value.set(1/l[O+1].width,1/l[O+1].height),n.autoClear=!1,M(m,l[O]),n.autoClear=!0;const I=x.uniforms;I.tScene.value=a.texture,I.tDepth.value=a.depthTexture,I.uTexel.value.set(1/p.x,1/p.y),I.tBloom.value=l[0].texture,I.uTime.value=L,I.uSunVis.value=y.vis,M(x,null)}let A=h;function _(E){A=E==="high"?h:4}return{setSize:b,setSamples:v,setLevel:_,render:S,flare:y,uniforms:x.uniforms}}const xl=[[[.1,.45,.55],[.55,.12,.4]],[[.65,.3,.08],[.35,.06,.08]],[[.2,.3,.75],[.45,.15,.6]],[[.15,.5,.4],[.6,.45,.15]],[[.6,.2,.25],[.15,.25,.6]],[[.4,.55,.7],[.25,.1,.35]]],aS=`
${gr}
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
}`;function lS(n,e){const t=e==="high"?1024:512,i=n.extensions,r=i.has("EXT_color_buffer_float")||i.has("EXT_color_buffer_half_float")?Ri:ti,s=new Sf(t,{type:r,generateMipmaps:!1,minFilter:yn,magFilter:yn}),o=new Vp(.1,100,s),c=new pc,a={uPole:{value:new U},uNebDir:{value:[new U,new U,new U]},uNebA:{value:[new U,new U,new U]},uNebB:{value:[new U,new U,new U]},uNebSize:{value:[0,0,0]},uGal:{value:[new U,new U,new U]},uSeed:{value:0},uRes:{value:t}};c.add(new tn(new _r(10,64,32),new Ot({uniforms:a,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:aS,side:ni,depthWrite:!1})));const u=new dd(n);let l=null,h=null;const d=e==="high"?9e3:5e3,f=new on,m=new Float32Array(d*3),y=new Float32Array(d*3),x=new Float32Array(d);f.setAttribute("position",new Sn(m,3)),f.setAttribute("color",new Sn(y,3)),f.setAttribute("size",new Sn(x,1));const p=new Ot({uniforms:{uT:{value:0},uPR:{value:1}},vertexShader:`
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
      }`,blending:ui,depthTest:!1,depthWrite:!1}),g=new _f(f,p);g.frustumCulled=!1,g.renderOrder=-100;function b(v=1){if(h===v)return;h=v;const M=qi(v*7919+13),S=()=>{const D=M()*2-1,H=M()*Math.PI*2,C=Math.sqrt(1-D*D);return new U(Math.cos(H)*C,D,Math.sin(H)*C)};a.uPole.value.set(.3+M()*.4,.75+M()*.2,.3-M()*.6).normalize();const A=xl[Math.floor(M()*xl.length)],_=xl[Math.floor(M()*xl.length)],E=1;for(let D=0;D<3;D++){const H=D===1?_:A,C=M()<.4;a.uNebDir.value[D].copy(S()),a.uNebA.value[D].fromArray(C?H[1]:H[0]),a.uNebB.value[D].fromArray(C?H[0]:H[1]),a.uNebSize.value[D]=D<E?.3+M()*.2:0,a.uGal.value[D].copy(S()).multiplyScalar(.6+M()*1.2)}a.uSeed.value=Math.floor(M()*1e3),o.update(n,c),l&&l.dispose(),l=u.fromCubemap(s.texture);const P=a.uPole.value,L=new U;for(let D=0;D<d;D++){L.copy(S()),M()<.5&&L.addScaledVector(P,-L.dot(P)*(.75+M()*.25)).normalize(),m.set([L.x,L.y,L.z],D*3);const H=M()**7,C=M(),I=C<.18?[.7,.82,1]:C<.75?[1,.97,.93]:C<.94?[1,.84,.62]:[1,.62,.48],O=.12+M()*.12+H*3.5;y.set([I[0]*O,I[1]*O,I[2]*O],D*3),x[D]=H*2.2}f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0,f.attributes.size.needsUpdate=!0}return{stars:g,bake:b,get background(){return s.texture},get env(){return l?l.texture:null},update(v,M){p.uniforms.uT.value=v,p.uniforms.uPR.value=M}}}function cS(n,e){const t=new Ei,i={value:0},r=e==="high",s=new tn(new _r(n,96,64),new Ot({uniforms:{uT:i,uTint:{value:new vt(1,1,1)}},vertexShader:`${Hi}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${Gi}
        }`,fragmentShader:`${Vi}
        ${gr}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${Wi}
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
        }`}));t.add(s);const o=new tn(new Oa(2,2),new Ot({uniforms:{uT:i,uR:{value:n},uTint:s.material.uniforms.uTint},vertexShader:`${Hi}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 2.2;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 2.2; // in star radii
          gl_Position = projectionMatrix * mv;
          ${Gi}
        }`,fragmentShader:`${Vi}
        ${gr}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${Wi}
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
        }`,blending:ui,transparent:!0,depthWrite:!1}));o.frustumCulled=!1,t.add(o);const c=[],a=d=>new Ot({uniforms:{uT:i,uA:{value:0},uC:{value:new vt().setHSL(d,1,.55)},uTint:s.material.uniforms.uTint},vertexShader:`${Hi}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${Gi}
      }`,fragmentShader:`${Vi}
      ${gr}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${Wi}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,blending:ui,transparent:!0,depthWrite:!1,side:li});{const d=qi(7),f=new U(0,1,0);for(let m=0;m<9;m++){const y=.7+d()*1.3,x=new tn(new fr(y,.07+d()*.08,8,40,Math.PI),a(.03+d()*.05)),p=()=>{const g=new U().randomDirection();x.position.copy(g).multiplyScalar(n*.97),x.quaternion.setFromUnitVectors(f,g),x.rotateY(Math.random()*Math.PI)};p(),c.push({m:x,place:p,phase:d()*40,period:25+d()*30,peak:.5+d()*.4,lastU:0}),t.add(x)}}const u=uS(),l=[];for(const[d,f,m]of[[15,"#ffc080",.22],[28,"#ff9a50",.09],[60,"#ff7a30",.03]]){const y=new Mx(new Dp({map:u,color:f,opacity:m,blending:ui,depthWrite:!1,transparent:!0}));y.scale.setScalar(d),y.userData.base=d,l.push(y),t.add(y)}function h(d){i.value=d,l.forEach((f,m)=>f.scale.setScalar(f.userData.base*(1+.03*Math.sin(d*(.5+m*.23)+m))));for(const f of c){const m=(d+f.phase)%f.period/f.period;m<f.lastU&&f.place(),f.lastU=m,f.m.material.uniforms.uA.value=Math.sin(m*Math.PI)**2*f.peak,f.m.scale.setScalar(.6+m*.6)}}return{group:t,update:h,tint:s.material.uniforms.uTint.value}}function uS(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.5)"),t.addColorStop(.5,"rgba(255,255,255,0.1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new Np(n);return i.colorSpace=ei,i}const dS=3,Qp=[.785,2.356,3.927,5.498];function fS(n,e,t){const i=n,r=rn(e*31+7),s=r.r,o=(f,m,y,x=fe,p=16,g=0,b=0)=>r.cyl(f,f,m,y,x,p,g,b);if(e===0){o(i*.27,i*.44,0),r.cyl(i*.15,i*.27,i*.1,i*.27,fe,18),r.cyl(i*.27,i*.2,i*.1,-i*.27,fe,18),o(i*.28,i*.14,i*.02,ut);for(let f=0;f<10;f++){const m=f/10*Math.PI*2+.3;r.box(i*.03,i*.03,i*.06,Math.cos(m)*i*.272,Math.sin(m)*i*.272,-i*.12,bn)}for(const f of[-.18,.12])o(i*.285,i*.025,i*f,Se);for(let f=0;f<14;f++){const m=f/14*Math.PI*2;r.box(i*.022,i*.022,i*.04,Math.cos(m)*i*.272,Math.sin(m)*i*.272,i*.06,bn)}for(const f of[1.2,2.9,4.4])r.box(i*.1,i*.08,i*.16,Math.cos(f)*i*.31,Math.sin(f)*i*.31,i*0,Se,.75);for(const f of[-1,1])r.radiator(f*i*.27,0,i*0,i*.36,i*.2,f>0?.2:Math.PI-.2,2,i*.008)}else if(e===1){r.sphere(i*.19,0,0,0,fe,1,16),o(i*.12,i*.5,-i*.1),o(i*.2,i*.08,0,ut);for(const f of Qp){const m=Math.cos(f),y=Math.sin(f),x=-y,p=m,g=i*.15,b=i*.68,v=i*.055,M=[[x*v,p*v,v],[-x*v,-p*v,v],[0,0,-v]];for(const[S,A,_]of M)r.strut(m*g+S,y*g+A,_,m*b+S,y*b+A,_,i*.018);for(let S=0;S<=4;S++){const A=g+(b-g)*S/4;for(let _=0;_<3;_++){const E=M[_],P=M[(_+1)%3];r.strut(m*A+E[0],y*A+E[1],E[2],m*A+P[0],y*A+P[1],P[2],i*.012)}}r.pipe(m*g,y*g,0,m*b,y*b,0,i*.025,fe),r.sphere(i*.075,m*i*.72,y*i*.72,0,fe,1,12),r.cyl(i*.07,i*.07,i*.26,0,fe,12,m*i*.6,y*i*.6);for(const S of[-1,1])r.box(i*.02,i*.02,i*.05,m*i*.6+x*i*.07,y*i*.6+p*i*.07,S*i*.06,bn)}for(const f of[-1,1])r.strapped(i*.06,i*.18,f*i*.13,f*i*.13,-i*.3,f>0)}else if(e===3){o(i*.06,i*1.9,-i*.2,Se,10);for(const[f,m,y,x,p]of[[.55,.11,.2,.01,.02],[.3,.19,.24,-.02,0],[.04,.24,.2,.03,-.02],[-.2,.14,.26,-.03,.03],[-.46,.18,.16,.02,.01],[-.7,.1,.22,0,-.02],[-.95,.13,.14,-.02,0]])r.cyl(i*m,i*m*(.9+s()*.2),i*y,i*f,fe,14,i*x,i*p,.7+s()*.45),r.cyl(i*m*1.05,i*m*1.05,i*.018,i*(f+y*.5),Se,14,i*x,i*p);o(i*.245,i*.07,i*.04,ut);for(const[f,m,y,x,p,g]of[[.32,.5,.25,.62,.05,1.3],[.05,2.3,-.2,.86,.065,-.9],[-.2,3.9,.45,.5,.045,.7],[-.46,5.3,-.35,.72,.055,-1.5],[-.72,1.4,.1,.4,.04,1]]){const b=[Math.cos(m),Math.sin(m),y],[v,M,S]=r.boom(0,0,i*f,b,i*x,i*p,fe,.75+s()*.3);r.boom(b[0]*i*x*.45,b[1]*i*x*.45,i*f+b[2]*i*x*.45,b,i*.16,i*p*2.1,fe,.7+s()*.4);const A=[Math.cos(m+g),Math.sin(m+g),-y*1.5],[_,E,P]=r.boom(v,M,S,A,i*x*.55,i*p*.8,Se);r.sphere(i*p*1.9,v,M,S,fe,1,10),r.box(i*.13,i*.1,i*.2,_,E,P,s()<.5?ut:fe,.7+s()*.4),r.box(i*.025,i*.025,i*.07,_+i*.06,E+i*.04,P,bn),s()<.6&&r.radiator(_,E,P-i*.08,i*.26,i*.12,m+1.2,2,i*.008)}for(let f=0;f<7;f++){const m=.9+f*.36,y=Math.cos(m)*i*.62,x=Math.sin(m)*i*.62;r.box(i*.2,i*.09,i*.12,y,x,i*.06,f%3===1?Se:fe,.7+s()*.4),f%2===0&&r.strut(Math.cos(m)*i*.2,Math.sin(m)*i*.2,i*.05,y,x,i*.06,i*.014),f%3===0&&r.box(i*.03,i*.03,i*.05,y*1.06,x*1.06,i*.06,bn)}for(let f=0;f<3;f++){const m=-i*(.28+f*.11),y=-i*.3;r.frame(i*.1,i*.1,i*.34,m,y,-i*.3,i*.008);for(let x=0;x<3;x++)(f*2+x)%4!==1&&r.box(i*.085,i*.085,i*.09,m,y,-i*(.41-x*.11),(f+x)%3===0?ut:fe,.7+s()*.4)}for(const[f,m,y]of[[.2,.16,-.85],[-.17,.2,.68],[.24,-.14,.62]])r.strapped(i*.07,i*.24,i*f,i*m,i*y,f>0)}else{o(i*.07,i*1.2,-i*.15,Se,10);for(const[f,m,y,x,p,g]of[[.28,.17,.26,0,0,fe],[0,.2,.22,.02,-.01,ut],[-.24,.15,.24,-.02,.02,fe],[-.5,.12,.18,0,0,fe]]){r.cyl(i*m,i*m,i*y,i*f,g===ut?fe:g,16,i*x,i*p,.85+s()*.25);for(const b of[-.5,.5])r.cyl(i*m*1.04,i*m*1.04,i*.02,i*(f+b*y),Se,16,i*x,i*p)}o(i*.205,i*.1,0,ut);for(let f=0;f<4;f++){const m=f/4*Math.PI*2+Math.PI/4,y=Math.cos(m)*i*.12,x=Math.sin(m)*i*.12;r.frame(i*.1,i*.1,i*.3,y,x,i*.58,i*.008);for(let p=0;p<3;p++)(f+p)%4!==3&&r.box(i*.085,i*.085,i*.085,y,x,i*(.48+p*.1),(f+p)%3===0?ut:fe,.8+s()*.3)}}o(i*.1,i*.12,i*.42,Se,12),r.greeble(i*.36,i*.36,i*.5,0,0,0,6);for(const f of mS(e)){const[m,y,x]=f.p,[p,g]=f.n;r.boom(m*i-p*i*.1,y*i-g*i*.1,x*i,[p,g,0],i*.1,i*.09,fe,.95),r.boom(m*i-p*i*.01,y*i-g*i*.01,x*i,[p,g,0],i*.02,i*.13,Se)}r.truss(0,0,-i*.75,-i*.3,i*.14,3,i*.018),o(i*.09,i*.18,-i*.68,Se,12),r.cyl(i*.16,i*.1,i*.03,-i*.56,Se,16),r.radiator(i*.08,0,-i*.66,i*.42,i*.2,.75+e*.4,3,i*.01),r.radiator(-i*.08,0,-i*.64,i*.32,i*.16,Math.PI+.9+e*.3,2,i*.01);const[c,a,u]=r.boom(-i*.07,i*.07,-i*.45,[-.6,.6,-.2],i*.4,i*.022);r.dish(i*.1,c,a,u,[-.4,.6,.5]),r.light(0,0,i*.49,Wt,i*.05),r.light(i*.2,0,-i*.1,Mn,i*.04),r.light(-i*.2,0,-i*.1,xn,i*.04);const l=pS(gd(r.build(1,hS(i)),t));l.userData.spin=.015;const h=l.userData.set,d={S:i,uT:t,parts:[],wip:[],last:["#6a7080",1,!1]};return l.userData.station=d,l.userData.set=(f,m,y)=>{d.last=[f,m,y],h(f,m,y);for(const x of d.parts)x.userData.set?.(f,m,y)},l}const hS=n=>7/Math.max(n*2.5,1),pS=n=>(n.computeBoundingSphere(),n.frustumCulled=!0,n);function mS(n){const e=[];for(const[t,i]of Qp.entries()){const r=n===1?.8:n===0?.36:[.26,.29,.26,.24][t],s=n===1?0:n===0?-.12:[.28,0,-.24,0][t];e.push({p:[Math.cos(i)*r,Math.sin(i)*r,s],n:[Math.cos(i),Math.sin(i),0]})}return e}function gS(n,e,t,i){let r=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^Math.imul(i,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function vS(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),o=Math.floor(t),c=n-r,a=e-s,u=t-o,l=c*c*(3-2*c),h=a*a*(3-2*a),d=u*u*(3-2*u),f=(y,x,p)=>y+(x-y)*p,m=(y,x,p)=>gS(r+y,s+x,o+p,i);return f(f(f(m(0,0,0),m(1,0,0),l),f(m(0,1,0),m(1,1,0),l),h),f(f(m(0,0,1),m(1,0,1),l),f(m(0,1,1),m(1,1,1),l),h),d)}function yl(n,e,t,i,r){let s=0,o=.5,c=1;for(let a=0;a<r;a++)s+=vS(n*c,e*c,t*c,i+a)*o,c*=2.03,o*=.5;return s}function em(n,e,t=5,i=1){const r=qi(n*97+1);let s=new Mf(e,t);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=OM(s);const o=Array.from({length:5},()=>({d:new U(r()-.5,r()-.5,r()-.5).normalize(),f:.6+r()*1.2,ph:r()*6.28,a:.05+r()*.08})),c=Array.from({length:7+Math.floor(r()*5)},()=>({d:new U(r()-.5,r()-.5,r()-.5).normalize(),size:.15+r()*.3})),a=new U(1.2+r()*.6,.75+r()*.2,.85+r()*.35),u=Math.floor(n)%1e3,l=s.attributes.position,h=new U,d=new U,f=[],m=r()<.35,y=m?[1.08,.95,.82]:[1,.98,.95],x=m?.26:.16;for(let p=0;p<l.count;p++){h.fromBufferAttribute(l,p),d.copy(h).normalize();let g=1;for(const M of o)g+=M.a*Math.sin(d.dot(M.d)*M.f*3+M.ph);g+=(Math.abs(yl(d.x*2.2,d.y*2.2,d.z*2.2,u+7,3)-.5)-.15)*.25*i;let b=0;for(const M of c){const S=d.distanceTo(M.d)/M.size;if(S<1){const A=1-S*S;g-=.11*A*M.size*3,b=Math.max(b,A)}else S<1.3&&(g+=.025*(1-(S-1)/.3)*M.size*3)}g+=(yl(d.x*7,d.y*7,d.z*7,u+5,3)-.5)*.09*i,h.multiplyScalar(g).multiply(a),l.setXYZ(p,h.x,h.y,h.z);let v=x+(yl(d.x*2.5,d.y*2.5,d.z*2.5,u+9,4)-.5)*.18+(g-1)*.25-b*.04;v+=(yl(d.x*12,d.y*12,d.z*12,u+2,2)-.5)*.08,v=Math.max(.05,Math.min(.5,v)),f.push(v*y[0],v*y[1],v*y[2])}return s.setAttribute("color",new St(f,3)),s.computeVertexNormals(),s}function tm(n={}){const e=new Op({vertexColors:!0,roughness:.92,metalness:.04}),t=n.scale??6,i=!!n.tumble;return e.onBeforeCompile=r=>{r.uniforms.uT=n.uT||{value:0},Tf(r.uniforms),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        }`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz; varying vec3 vShW;
        ${wf}
        ${gr}
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
        { float shd = sunShadow(vShW, 0.002); reflectedLight.directDiffuse *= shd; reflectedLight.directSpecular *= shd; }`)},e}const au={mat:null};function xS(n){const e=em(n.id,n.size,5);return au.mat||(au.mat=tm({scale:5})),new tn(e,au.mat)}function yS(n,e,t,i,r){const s=new Ei,o=i==="high"?2400:900,c=[0,1,2,3].map(m=>em(500+m*17,1,2,1.3)),a=tm({scale:4,tumble:!0,uT:r}),u=qi(Math.floor(n*131)),l=[],h=3;for(let m=0;m<h;m++){const y=new Ei,x=n+(e-n)*m/h,p=n+(e-n)*(m+1)/h;y.userData.omega=Math.PI*2/t((x+p)/2),s.add(y),l.push(y);const g=Math.ceil(o/h/c.length);for(const b of c){const v=new ql(b,a,g),M=new It,S=new $n,A=new U,_=new U;for(let E=0;E<g;E++){const P=x+u()*(p-x),L=u()*Math.PI*2,D=(u()+u()+u()-1.5)*1.6;A.set(Math.cos(L)*P,D,Math.sin(L)*P),S.setFromEuler(new yr(u()*6,u()*6,u()*6));const H=.04+Math.pow(u(),4)*.32;M.compose(A,S,_.setScalar(H)),v.setMatrixAt(E,M)}v.frustumCulled=!1,y.add(v)}}const d=new gc(n-4,e+4,256,4).rotateX(-Math.PI/2),f=new tn(d,new Ot({uniforms:{uR0:{value:n-4},uR1:{value:e+4}},vertexShader:`#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`#include <logdepthbuf_pars_fragment>
      ${gr}
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
      }`,blending:ui,transparent:!0,depthWrite:!1,side:li}));return s.add(f),{group:s,update(m){for(const y of l)y.rotation.y=-y.userData.omega*m},dispose(){for(const m of c)m.dispose();d.dispose()}}}const qo=0,Yo=1,Ko=2,lu=3,n0=4,cu=5;function _S(n,e=4096){const t={value:0},i=new Gp;i.setAttribute("position",new St([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const r={},s=(x,p)=>{const g=new To(new Float32Array(e*p),p);g.setUsage(Lr),i.setAttribute(x,g),r[x]=g};s("aP0",3),s("aVel",3),s("aDrift",3),s("aDir",3),s("aCol",3),s("aTime",2),s("aSize",2),s("aKind",2),r.aTime.array.fill(-1e6),i.instanceCount=e;const o=new Ot({uniforms:{uT:t,uPx:{value:.002}},vertexShader:`${Hi}
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
        float drag = aKind.x == ${Ko}.0 ? 1.2 : aKind.x == ${Yo}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel + aDrift * t; // drift: carried along with the world it's at
        float size = mix(aSize.x, aSize.y, aKind.x == ${Yo}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${qo}.0 || aKind.x == ${Yo}.0 || aKind.x == ${lu}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${Ko}.0 || aKind.x == ${n0}.0 || aKind.x == ${cu}.0) size = max(size, uPx * -mv.z * (aKind.x == ${cu}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${Ko}.0) dirW = -aVel * exp(-drag * t) * 0.06;
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
        ${Gi}
      }`,fragmentShader:`${Vi}
      ${gr}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${Wi}
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
      }`,blending:ui,transparent:!0,depthWrite:!1,side:li}),c=new tn(i,o);c.frustumCulled=!1,c.renderOrder=5,n.add(c);let a=0,u=!1;const l=new vt;function h(x,p,g,b,v,M,S,A,_=0,E=1){const P=a;a=(a+1)%e,r.aP0.setXYZ(P,p.x,p.y,p.z),r.aVel.setXYZ(P,g?g.x:0,g?g.y:0,g?g.z:0),r.aDrift.setXYZ(P,m.x,m.y,m.z),r.aDir.setXYZ(P,b?b.x:0,b?b.y:0,b?b.z:0),l.set(v).multiplyScalar(E),r.aCol.setXYZ(P,l.r,l.g,l.b),r.aTime.setXY(P,t.value+_,M),r.aSize.setXY(P,S,A),r.aKind.setXY(P,x,Math.random()),u=!0}const d=new U,f=new U,m=new U,y=()=>d.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{uT:t,drift:m,update(x,p){if(t.value=x,p&&(o.uniforms.uPx.value=p),u){for(const g in r)r[g].needsUpdate=!0;u=!1}},explosion(x,p=1){h(qo,x,null,null,"#ffffff",.16,.3*p,1.5*p,0,3.5),h(lu,x,null,null,"#9fd4ff",.5,.15*p,1.9*p,0,1.2),h(Yo,x,y().multiplyScalar(.2),null,"#ffffff",.75+Math.random()*.2,.25*p,.95*p,.02,2.2);for(let g=0;g<2;g++)h(Yo,f.copy(x).add(y().multiplyScalar(.25*p)),y().multiplyScalar(.4),null,"#ffffff",.55,.12*p,.5*p,.08+g*.12,2);for(let g=0;g<16;g++)h(Ko,x,y().multiplyScalar((1.5+Math.random()*3.5)*p),null,"#ff9a40",.5+Math.random()*.8,.025*p,.015*p,0,3);for(let g=0;g<6;g++)h(qo,x,y().multiplyScalar(.4+Math.random()*.8),null,"#ff7a30",1.5+Math.random()*1.5,.06*p,.025*p,.05,2.5)},impact(x,p,g=!1){h(qo,x,null,null,p,.15,.1,g?.6:.35,0,1.6);for(let b=0;b<(g?6:3);b++)h(Ko,x,y().multiplyScalar(1.5+Math.random()*3),null,"#ffd090",.25+Math.random()*.3,.02,.01,0,2.5)},intercept(x){h(qo,x,null,null,"#dff4ff",.12,.05,.3,0,3)},bolt(x,p,g,b,v,M,S=0){f.subVectors(p,x);const A=d.copy(f).divideScalar(b),_=f.clone().normalize().multiplyScalar(-v);h(n0,x,A,_,g,b,M,M,S,1.6)},beam(x,p,g,b=.3){f.subVectors(p,x),h(cu,p,null,f.clone().negate(),g,b,.045,.02,0,1.4)},ring(x,p,g,b=1.2){h(lu,x,null,null,p,b,g*.3,g,0,1.5)}}}const nm=`
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`,bS=`
${gr}
${nm}
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
}`,MS=`
${gr}
${nm}
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
}`,SS=["temperate","desert","ice","jungle","steppe","ocean"],i0={temperate:[.35,.6,1],desert:[1,.7,.45],ice:[.6,.8,1],jungle:[.4,.7,.85],steppe:[.55,.62,.9],ocean:[.3,.55,1]},uu=[[[.5,.33,.18],[.82,.7,.52],[.62,.3,.15]],[[.3,.45,.6],[.7,.82,.88],[.2,.3,.55]],[[.22,.42,.4],[.55,.72,.66],[.15,.3,.32]],[[.45,.2,.12],[.78,.55,.4],[.35,.12,.08]],[[.35,.28,.45],[.7,.62,.75],[.25,.18,.4]],[[.62,.55,.4],[.88,.84,.72],[.5,.4,.28]]];function im(n){return uu[Math.floor(n.hue*uu.length)%uu.length]}function wS(n){if(n.home||n.trait==="garden")return{kind:0,type:Math.max(0,SS.indexOf(n.biome||"temperate")),atmo:i0[n.biome]||i0.temperate,atmoK:1,clouds:1,relief:.06};if(n.giant)return{kind:3,type:0,atmo:im(n)[1].map(t=>t*.9+.1),atmoK:.55,clouds:0,relief:0};if(n.kind==="planet"){const t=n.zone==="hot"?n.hue<.5?2:1:n.zone==="cold"?3:n.zone==="mild"?0:Math.floor(n.hue*4)%4,i=[[1,.6,.4],null,[1,.85,.55],[.6,.75,1]][t];return{kind:1,type:t,atmo:i,atmoK:t===2?1.2:.45,clouds:0,relief:t===2?0:.09,airless:t===1}}return{kind:2,type:Math.floor(n.hue*4)%4,atmo:null,atmoK:0,clouds:0,relief:.12,airless:!0}}function TS(n,e){const t=new on;t.setAttribute("position",new St([-1,-1,0,3,-1,0,-1,3,0],3));const i=new tn(t);i.frustumCulled=!1;const r=new pc;r.add(i);const s=new vc,o=new Ot({uniforms:{uKind:{value:0},uType:{value:0},uSeed:{value:0},uPalA:{value:new U},uPalB:{value:new U},uPalC:{value:new U},uStorm:{value:[0,1,2,3].map(()=>new Yt)}},vertexShader:aa,fragmentShader:bS,depthTest:!1,depthWrite:!1}),c=new Ot({uniforms:{tAlb:{value:null},uTexel:{value:new rt},uRelief:{value:1},uKind:{value:0},uType:{value:0},uSeed:{value:0},uClouds:{value:0}},vertexShader:aa,fragmentShader:MS,depthTest:!1,depthWrite:!1}),a=Math.min(8,n.capabilities.getMaxAnisotropy()),u=(l,h)=>{const d=new di(l,h,{depthBuffer:!1,generateMipmaps:!0,minFilter:Ur,magFilter:yn,wrapS:ya,wrapT:tr});return d.texture.anisotropy=a,d};return function(h,d){const f=e()==="high",m=d.kind===0?f?2048:1024:f?1024:512,y=m/2,x=(h.id*7.31+h.hue*13.7)%97,p=o.uniforms;if(p.uKind.value=d.kind,p.uType.value=d.type,p.uSeed.value=x,d.kind===3){const S=im(h);p.uPalA.value.fromArray(S[0]),p.uPalB.value.fromArray(S[1]),p.uPalC.value.fromArray(S[2]);let A=Math.floor(x*1e3);const _=()=>(A=A*16807%2147483647)/2147483647;p.uStorm.value.forEach((E,P)=>{const L=(_()-.5)*(P?1.4:.9),D=_()*Math.PI*2;E.set(Math.cos(L)*Math.cos(D),Math.sin(L),Math.cos(L)*Math.sin(D),P===0?.12+_()*.06:.04+_()*.03)})}const g=u(m,y),b=u(m,y),v=n.getRenderTarget();i.material=o,n.setRenderTarget(g),n.render(r,s);const M=c.uniforms;return M.tAlb.value=g.texture,M.uTexel.value.set(1/m,1/y),M.uRelief.value=d.relief*(m/1024)*.5+d.relief*.5,M.uKind.value=d.kind,M.uType.value=d.type,M.uSeed.value=x,M.uClouds.value=d.clouds,i.material=c,n.setRenderTarget(b),n.render(r,s),n.setRenderTarget(v),{alb:g.texture,aux:b.texture,rts:[g,b]}}}const sr={pos:{value:[new U,new U]},col:{value:[new U(1.22,1.17,1.08),new U]}},Ef=`
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
}`;function ES(n,e,t,i){const r=e.kind===3,s={tAlb:{value:t.alb},tAux:{value:t.aux},uStarPos:sr.pos,uStarCol:sr.col,uCity:{value:0},uCityCol:{value:new U(2.4,1.5,.7)},uCloudShift:{value:0},uCloudK:{value:e.clouds?.55:0},uOcean:{value:e.kind===0&&e.type!==1?1:0},uAirless:{value:e.airless?1:0},uAtmo:{value:new U(...e.atmo||[0,0,0])},uAtmoK:{value:e.atmoK},uT:{value:0},uFlow:{value:r?1:e.kind===1&&e.type===2?.4:0},uOcc:{value:[0,1,2,3].map(()=>new Yt(0,0,0,0))},uRingN:{value:new U(0,1,0)},uRingIn:{value:0},uRingOut:{value:0},tRing:{value:i?i.tex:null},uCenter:{value:new U},uRadius:{value:n.size}};return Tf(s),new Ot({uniforms:s,vertexShader:`${Hi}
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
        ${Gi}
      }`,fragmentShader:`${Vi}
      ${Ef}
      ${wf}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
      void main() {
        ${Wi}
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
      }`})}function AS(n){return new Ot({uniforms:{tAux:{value:n.aux},uStarPos:sr.pos,uStarCol:sr.col,uOcc:{value:[0,1,2,3].map(()=>new Yt(0,0,0,0))},uHoles:{value:Array.from({length:6},()=>new Yt(0,1,0,2))}},vertexShader:`${Hi}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        vUv = uv;
        vDir = normalize(position);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Gi}
      }`,fragmentShader:`${Vi}
      ${Ef}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2]; uniform vec4 uHoles[6];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN; varying vec3 vDir;
      void main() {
        ${Wi}
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
      }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4})}function CS(n,e,t="high"){const i=e.kind===3?.035:e.kind===0?.045:.035,r=n.size*(1+i),s=e.atmo,o=new U(s[0],s[1],s[2]),c=new tn(new _r(r,64,40),new Ot({uniforms:{uCenter:{value:new U},uRp:{value:n.size*.998},uRa:{value:r},uStarPos:sr.pos,uStarCol:sr.col,uBeta:{value:o},uK:{value:e.atmoK},uOcc:{value:[0,1,2,3].map(()=>new Yt(0,0,0,0))}},vertexShader:`${Hi}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${Gi}
        }`,fragmentShader:`${Vi}
        ${Ef}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${Wi}
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
        }`,defines:{STEPS:t==="high"?8:5},transparent:!0,blending:ui,depthWrite:!1}));return c.renderOrder=1,c}function RS(n){const r=new Uint8Array(2048);let s=Math.floor(n.hue*1e6)+n.id*97;const o=()=>(s=s*16807%2147483647)/2147483647,c=Array.from({length:3},()=>({at:.2+o()*.7,w:.006+o()*.025})),a=new Float32Array(512);let u=.5;for(let f=0;f<512;f++)u+=(o()-.5)*.18,u+=(.55-u)*.04,a[f]=u;for(let f=0;f<512;f++){const m=f/511;let y=(a[Math.max(0,f-1)]+a[f]+a[Math.min(511,f+1)])/3;y*=.65+.35*Math.sin(m*9+o()*.2),y*=Math.min(1,m/.1)*Math.min(1,(1-m)/.06),m>.42&&m<.72&&(y*=1.4),m<.18&&(y*=.45);for(const g of c)Math.abs(m-g.at)<g.w&&(y*=.06);y=Math.max(0,Math.min(1,y));const x=.8+.2*a[f*7%512],p=m<.3?.6:.2;r.set([(170+p*20)*x,(163+p*5)*x,(150-p*25)*x,y*255],f*4)}const l=new mc(r,512,1,Ti);l.colorSpace=ei,l.magFilter=yn,l.minFilter=yn,l.needsUpdate=!0;const h=new gc(n.size*1.35,n.size*2.35,160,1),d=new tn(h,new Ot({uniforms:{tRing:{value:l},uIn:{value:1.35},uOut:{value:2.35},uR:{value:n.size},uCenter:{value:new U},uStarPos:sr.pos,uStarCol:sr.col},vertexShader:`${Hi}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${Gi}
      }`,fragmentShader:`${Vi}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${Wi}
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
      }`,transparent:!0,depthWrite:!1,side:li}));return d.userData.ring={tex:l,inner:1.35,outer:2.35},d}const ln="#e9e4d6",Qt="#e0a13a",r0="#7d7666",Gt="#ff5a43",PS="#8b8776",Zl={concord:"#7fb6ff",boreal:"#ff8757",holds:"#d8d36a"},s0=["#9be0c8","#d59bff","#ffd1a1"];function rm(n){const e=new Set;return n.factions.map((t,i)=>{let r=Zl[t]||Zl.concord;return e.has(r)&&(r=s0[i%s0.length]),e.add(r),r})}const LS=6,o0=.45,a0=160,du=new U(0,1,0),DS={corvette:.8,frigate:1,escort:1,battleship:1.35,tender:1.1,freighter:1},l0={corvette:.6,frigate:1,escort:.95,battleship:1.7,tender:1.2,freighter:1.3},sm={value:new rt(1,1)};function IS(n){const e=n.parent!==null?160:400,t=[],i=[],r=[],s=[],o=[],c=h=>{const d=Ud(n,h);return[d.x,d.y,d.z]};for(let h=0;h<=e;h++){const d=h/e*Math.PI*2;for(const f of[-1,1])t.push(...c(d)),i.push(...c(d+.01)),r.push(d),s.push(f);if(h<e){const f=h*2;o.push(f,f+1,f+2,f+1,f+3,f+2)}}const a=new on;a.setAttribute("position",new St(t,3)),a.setAttribute("nextPos",new St(i,3)),a.setAttribute("ang",new St(r,1)),a.setAttribute("side",new St(s,1)),a.setIndex(o);const u=n.parent!==null,l=new tn(a,new Ot({uniforms:{uTh:{value:0},uRes:sm,uWidth:{value:u?1.4:2.2},uColor:{value:new vt(u?"#6b6452":"#8f8468")},uOpacity:{value:u?.55:.75}},vertexShader:`attribute vec3 nextPos; attribute float ang; attribute float side;
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
      }`,transparent:!0,depthWrite:!1,side:li}));return l.frustumCulled=!1,l}function kS(n,e,t={}){const i=new FM({canvas:n,antialias:!1,powerPreference:"high-performance"});let r=t.quality||"high";const s=()=>Math.min(window.devicePixelRatio||1,r==="high"?2.5:1.5);let o=s();i.setPixelRatio(1);const c=new pc,a=new vi(45,1,.02,2e4),u=oS(i);u.setSamples(4),u.setLevel(r);const l=e.getContext("2d"),h=lS(i,r);c.add(h.stars),c.environmentIntensity=.9,c.backgroundIntensity=.85;const d=r==="high"?900:400,f=new on;{const re=new Float32Array(d*3);for(let me=0;me<re.length;me++)re[me]=Math.random();f.setAttribute("position",new Sn(re,3))}const m=new Ot({uniforms:{uBox:{value:50},uPR:{value:1}},vertexShader:`uniform float uBox, uPR; varying float vA;
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
      }`,blending:ui,transparent:!0,depthWrite:!1}),y=new _f(f,m);y.frustumCulled=!1,c.add(y);const x=cS(LS,r);c.add(x.group),c.add(new zx("#fff1dd",3,0,0)),c.add(new Fx("#2a3040",.6));const p=new Ei;c.add(p);let g=[],b=6e3;const v={az:.4,pol:.95,dist:300,minDist:.8,maxDist:1400,target:new U,vaz:0,vpol:0,follow:null,ship:null,goalDist:null};let M=null;const S=TS(i,()=>r),A=[],_=new Map,E=(re,me)=>{const Ce=`${re}:${me}`;return _.has(Ce)||_.set(Ce,new _r(re,me?128:96,me?80:56)),_.get(Ce)},P=tS(c,a0),L=_S(c),D=(re,me,Ce)=>ru?ru(re,me):Ce%P.hulls;function H(re){h.bake((re.seed||1)+1),c.background=h.background,c.environment=h.env;for(const be of A)be.dispose();A.length=0,p.clear(),pt.clear(),et.clear(),We.clear(),g=re.bodies.map(be=>{const Re=new Ei;let Fe,$e=null,st=null;if(be.kind==="station")Fe=fS(be.size*.8,be.home&&re.factions[be.owner]==="holds"?3:be.id%dS,P.uT);else if(be.kind==="asteroid")Fe=xS(be);else{const dn=wS(be),Zt=S(be,dn);A.push(...Zt.rts);const fi=.2+be.hue*.3;if(be.giant&&be.hue>.4){$e=RS(be),$e.rotation.x=Math.PI/2;const mn=new Ei;mn.rotation.z=fi,mn.add($e),Re.add(mn)}if(Fe=new tn(E(be.size,dn.kind===0||dn.kind===3?1:0),ES(be,dn,Zt,$e&&$e.userData.ring)),Fe.rotation.order="ZYX",Fe.rotation.z=fi,dn.atmo&&(st=CS(be,dn,r),Re.add(st)),dn.clouds){const mn=new tn(E(be.size*1.008,1),AS(Zt));mn.name="clouds",Fe.add(mn)}}Re.add(Fe),p.add(Re);const Ze=IS(be),Tn=new Ei;return Tn.add(Ze),p.add(Tn),{b:be,g:Re,body:Fe,line:Ze,lineHolder:Tn,ring:$e,atmo:st,owner:null,occ:[],sx:0,sy:0,sr:0,on:!1,show:1}}),M&&(M.group.removeFromParent(),M.dispose(),M=null);const me=re.bodies.filter(be=>be.kind==="asteroid");if(me.length){const be=me[0];M=yS(re.belt.r-2,re.belt.r+re.belt.w+2,Re=>be.period*Math.pow(Re/be.r,1.5),r,P.uT),p.add(M.group)}for(const be of g){const Re=be.b;if(Re.kind!=="planet"&&Re.kind!=="moon")continue;const Fe=Re.kind==="planet"?re.bodies.filter($e=>$e.parent===Re.id&&$e.kind==="moon"):re.bodies.filter($e=>$e.id===Re.parent||$e.parent===Re.parent&&$e.kind==="moon"&&$e.id!==Re.id);be.occ=Fe.slice(0,4).map($e=>$e.id)}const Ce=Math.max(...re.bodies.filter(be=>be.kind==="planet").map(be=>be.r));J=Ce,v.maxDist=Ce*4,b=Ce*30}const C=new U,I=new U,O=new U,$=[],oe=re=>window.innerHeight/(2*Math.tan(_n.degToRad(a.fov/2))*Math.max(.001,a.position.distanceTo(re)));let Z=0,te=0;function le(){const re=window.innerWidth,me=window.innerHeight;Z=re,te=me,i.setSize(Math.round(re*o),Math.round(me*o),!1),n.style.width=re+"px",n.style.height=me+"px",u.setSize(re,me,o),sm.value.set(re,me);const Ce=Math.min(window.devicePixelRatio||1,3);e.width=Math.round(re*Ce),e.height=Math.round(me*Ce),e.style.width=re+"px",e.style.height=me+"px",l.setTransform(Ce,0,0,Ce,0,0),a.aspect=re/me,a.updateProjectionMatrix()}const F=new U;function ne(re){F.set(0,0,0).project(a);let me=F.z<1&&Math.abs(F.x)<1.1&&Math.abs(F.y)<1.1?1:0;if(me){const be=a.position;O.set(0,0,0).sub(be);const Re=O.length();O.divideScalar(Re);for(const Fe of g){I.copy(Fe.g.position).sub(be);const $e=I.dot(O);if(!($e<0||$e>Re)&&Math.sqrt(Math.max(0,I.lengthSq()-$e*$e))<Fe.b.size){me=0;break}}me*=_n.clamp((1.1-Math.max(Math.abs(F.x),Math.abs(F.y)))*4,0,1)}const Ce=u.flare;Ce.vis+=(me*.9-Ce.vis)*Math.min(1,re*8+.05),Ce.pos.set(F.x*.5+.5,F.y*.5+.5)}function ge(re){let me=1,Ce=-re.x,be=-re.y,Re=-re.z;const Fe=Math.hypot(Ce,be,Re)||1;Ce/=Fe,be/=Fe,Re/=Fe;for(const $e of g){if($e.b.kind!=="planet"&&$e.b.kind!=="moon")continue;const st=$[$e.b.id],Ze=st.x-re.x,Tn=st.y-re.y,dn=st.z-re.z,Zt=Ze*Ce+Tn*be+dn*Re;if(Zt<=0||Zt>Fe)continue;const fi=Math.hypot(Ze-Ce*Zt,Tn-be*Zt,dn-Re*Zt),mn=$e.b.size,hi=mn*.08+Zt*.012;fi<mn+hi&&(me*=_n.smoothstep(fi,mn-hi,mn+hi))}return me}const ve=(re,me)=>{let Ce=Math.imul(re^2654435769,2246822507)^Math.imul(me+1663821227,3266489909);return Ce^=Ce>>>15,Ce=Math.imul(Ce,739982445),((Ce^Ce>>>12)>>>0)/4294967296},we=new Map,Y=new U,ee=new U,Me=new U,ue=new U,_e=new U;function Ye(re,me,Ce,be,Re,Fe,$e){let st=we.get(re);if(!st){we.set(re,{n:Ce.clone(),w:new U,a:new U,t:Re});return}const Ze=Re-st.t;if(Ze<=1e-4){Ze<-1&&(st.t=Re);return}if(Ze>2){st.n.copy(Ce),st.w.set(0,0,0),st.a.set(0,0,0),st.t=Re;return}Y.crossVectors(st.n,Ce).divideScalar(Ze);const Tn=1-Math.exp(-Ze*6);if(ee.copy(Y).sub(st.w).divideScalar(Ze),st.w.lerp(Y,Tn),st.a.lerp(ee,Tn),st.n.copy(Ce),st.t=Re,$e<8)return;const dn=st.a.length(),Zt=5+ve(re,17)*5,fi=Fe*Zt+ve(re,23)*9,mn=Math.floor(fi),hi=ve(re*7+mn,31),Un=ve(mn,re*3+1),Yi=fi-mn;let Ki;if(dn>=.04){if(Ki=Math.min(1,(dn-.04)*3),hi>.45+.35*Ki||Yi>.35+Un*.6)return}else{if(hi>.05||Yi>.3)return;Ki=.15+Un*.2,ee.set(Un-.5,ve(mn,re)-.5,ve(re,mn*5)-.5)}const Mr=be*.32;if(ue.crossVectors(dn>=.04?st.a:ee,Ce),ue.lengthSq()<1e-10)return;ue.normalize();const R=be*(.06+.1*Ki)*(.75+Un*.5),V=be*.05,Q=(.35+.5*Ki)*(.8+hi*.4),K=Un<.18?1:Un>.86?2:3;K&1&&(Me.copy(me).addScaledVector(Ce,Mr).addScaledVector(ue,-be*.06),P.jet(Me,_e.copy(ue).negate(),R,V,Q,re)),K&2&&(Me.copy(me).addScaledVector(Ce,-Mr*.85).addScaledVector(ue,be*.06),P.jet(Me,ue,R*(.85+hi*.3),V,Q,re+.5))}const pt=new Map,et=new Map,We=new Map,dt=new Map;let Xe=1,xt=1,wn=[],Kt=0;const an={x:0,y:0,ok:!1};function zt(re,me,Ce,be=an){return C.set(re,me,Ce).project(a),be.ok=C.z<1&&C.z>-1,be.x=(C.x*.5+.5)*Xe,be.y=(-C.y*.5+.5)*xt,be}const W=re=>re===ct?PS:wn[re]||ln;function pn(re,me,Ce,be,Re,Fe,$e,st=1){l.beginPath();let Ze=!1;for(let Tn=0;Tn<=64;Tn++){const dn=Tn/64*Math.PI*2,Zt=zt(re+Math.cos(dn)*be,me,Ce+Math.sin(dn)*be);if(!Zt.ok){Ze=!1;continue}Ze?l.lineTo(Zt.x,Zt.y):(l.moveTo(Zt.x,Zt.y),Ze=!0)}l.strokeStyle=Re,l.globalAlpha=Fe,l.lineWidth=st,l.setLineDash($e||[]),l.stroke(),l.setLineDash([]),l.globalAlpha=1}function Rt(re,me,Ce,be,Re=1){l.beginPath();let Fe=!1;for(const $e of re){const st=zt($e.x,$e.y,$e.z);if(!st.ok){Fe=!1;continue}Fe?l.lineTo(st.x,st.y):(l.moveTo(st.x,st.y),Fe=!0)}l.strokeStyle=me,l.globalAlpha=Ce,l.lineWidth=Re,l.setLineDash(be||[]),l.stroke(),l.setLineDash([]),l.globalAlpha=1}function k(re,me,Ce,be,Re,Fe,$e,st=1){l.save(),l.translate(me,Ce),l.rotate(be),l.globalAlpha=st,l.strokeStyle=Fe,l.fillStyle=Fe,l.lineWidth=1.3,l.lineJoin="miter";const Ze=Re;l.beginPath(),re==="corvette"?(l.moveTo(Ze,0),l.lineTo(-Ze*.7,Ze*.45),l.lineTo(-Ze*.7,-Ze*.45)):re==="frigate"?(l.moveTo(Ze*1.1,0),l.lineTo(-Ze*.8,Ze*.7),l.lineTo(-Ze*.35,0),l.lineTo(-Ze*.8,-Ze*.7)):re==="escort"?(l.moveTo(Ze,0),l.lineTo(0,Ze*.8),l.lineTo(-Ze,0),l.lineTo(0,-Ze*.8)):re==="battleship"?(l.moveTo(Ze*1.5,0),l.lineTo(Ze*.5,Ze*.8),l.lineTo(-Ze*1.2,Ze*.8),l.lineTo(-Ze*1.2,-Ze*.8),l.lineTo(Ze*.5,-Ze*.8)):re==="tender"?l.arc(0,0,Ze*.85,0,Math.PI*2):re==="freighter"?l.rect(-Ze*.7,-Ze*.45,Ze*1.4,Ze*.9):(l.moveTo(Ze,0),l.lineTo(0,Ze),l.lineTo(-Ze,0),l.lineTo(0,-Ze)),l.closePath(),$e?l.stroke():l.fill(),re==="tender"&&(l.strokeStyle="#05060a",l.beginPath(),l.moveTo(-Ze*.5,0),l.lineTo(Ze*.5,0),l.moveTo(0,-Ze*.5),l.lineTo(0,Ze*.5),l.stroke()),l.restore()}function w(re,me,Ce,be,Re=1,Fe=10,$e="center"){l.font=`600 ${Fe}px Rajdhani, system-ui, sans-serif`;try{l.letterSpacing="1.5px"}catch{}l.textAlign=$e,l.textBaseline="middle",l.globalAlpha=Re,l.fillStyle=be,l.fillText(re.toUpperCase(),me,Ce),l.globalAlpha=1}let q=0,J=500,ie=!1;const Ee={battle:0,burn:0,zoom:0};function De(re,me,Ce,be){const Re=Math.min(.1,Math.max(0,be-q));q=be,Xe=window.innerWidth,xt=window.innerHeight,(Xe!==Z||xt!==te)&&le(),wn=me.colors||rm(re);const Fe=me.me,$e=re.time+(re.acc||0),st=re.acc||0;sr.pos.value[0].set(0,0,0),sr.col.value[1].set(0,0,0),x.group.scale.setScalar(re.stars[0].size),x.update(be),M&&M.update($e),h.update(be,o);for(const T of g)$[T.b.id]=sn(re,T.b,$e);const Ze=T=>me.dev||T.owner===Fe||T.seen[Fe]>0,Tn=(T,B)=>B.set(T.x+T.vx*st,T.y+T.vy*st,T.z+T.vz*st);if(v.ship!=null){const T=re.ships.find(B=>B.id===v.ship);!T||!Ze(T)?v.ship=null:v.target.lerp(Tn(T,C),Math.min(1,Re*8))}if(v.follow!==null){const T=$[v.follow];v.target.lerp(C.set(T.x,T.y,T.z),Math.min(1,Re*8))}else v.ship==null&&(v.target.y*=1-Math.min(1,Re*2));const dn=v.maxDist*.35,Zt=Math.hypot(v.target.x,v.target.z);Zt>dn&&(v.target.x*=dn/Zt,v.target.z*=dn/Zt),me.dragging||(v.az+=v.vaz,v.pol+=v.vpol,v.vaz*=.92,v.vpol*=.92),v.goalDist&&(v.dist+=(v.goalDist-v.dist)*Math.min(1,Re*4),Math.abs(v.goalDist-v.dist)<.01*v.dist&&(v.goalDist=null)),v.pol=_n.clamp(v.pol,.12,Math.PI-.12);const fi=v.follow!==null?re.bodies[v.follow].size*1.3+.3:.8;v.minDist+=(fi-v.minDist)*Math.min(1,Re*3),v.dist=_n.clamp(v.dist,v.minDist,v.maxDist),a.position.setFromSphericalCoords(v.dist,v.pol,v.az).add(v.target),a.lookAt(v.target);const mn=_n.clamp(v.dist*.02,.01,12);Math.abs(mn-a.near)>a.near*.05&&(a.near=mn,a.far=b,a.updateProjectionMatrix()),a.updateMatrixWorld();for(const T of g){const B=T.b,G=$[B.id];if(T.g.position.set(G.x,G.y,G.z),B.parent!==null){const Te=$[B.parent];T.lineHolder.position.set(Te.x,Te.y,Te.z)}if(T.line.material.uniforms.uTh.value=B.phase+2*Math.PI*$e/B.period,B.kind==="station"){T.body.rotation.z+=Re*(T.body.userData.spin??.5);const Te=T.body.userData.rotor;Te&&(Te.rotation.z+=Re*Te.userData.spin),T.body.userData.set(W(B.owner),ge(G),B.owner!==ct)}else if(B.kind==="asteroid")T.body.rotation.x+=Re*.3,T.body.rotation.y+=Re*.2;else{T.body.rotation.y+=Re*.05;const Te=T.body.getObjectByName("clouds");Te&&(Te.rotation.y+=Re*.012);const Ge=T.body.material.uniforms;Ge&&(Ge.uT.value=be,Te&&(Ge.uCloudShift.value=-Te.rotation.y/(Math.PI*2)),Ge.uCenter.value.set(G.x,G.y,G.z),T.occ.forEach((Ne,nt)=>{const yt=$[Ne];Ge.uOcc.value[nt].set(yt.x,yt.y,yt.z,re.bodies[Ne].size)}),Te&&(Te.material.uniforms.uOcc.value=Ge.uOcc.value),T.atmo&&(T.atmo.material.uniforms.uCenter.value.set(G.x,G.y,G.z),T.atmo.material.uniforms.uOcc.value=Ge.uOcc.value),T.ring&&(T.ring.updateMatrixWorld(!0),Ge.uRingN.value.set(0,0,1).transformDirection(T.ring.matrixWorld),Ge.uRingIn.value=T.ring.userData.ring.inner,Ge.uRingOut.value=T.ring.userData.ring.outer,T.ring.material.uniforms.uCenter.value.set(G.x,G.y,G.z)),Ge.uCity&&T.owner!==B.owner&&(Ge.uCity.value=B.owner===ct?0:1))}T.owner=B.owner;const se=B.mega?B.mega.key:null;if(T.megaKey!==se&&(T.megaKey=se,T.megaObj&&(T.megaObj.removeFromParent(),T.megaObj=null),se)){const Te=rS(se,B,P.uT);if(Te.userData.surface&&B.kind!=="station"){const Ge=new U(Math.sin(B.id*1.7),.3*Math.cos(B.id*2.3),Math.cos(B.id*1.7)).normalize();Te.position.copy(Ge).multiplyScalar(B.size*.995),Te.quaternion.setFromUnitVectors(new U(0,1,0),Ge),T.body.add(Te)}else Te.userData.surface&&Te.position.set(B.size*1.6,0,0),T.g.add(Te);T.megaObj=Te}if(T.megaObj&&(sS(T.megaObj,B.mega.done?1:1-B.mega.left/B.mega.total,B.mega.done),T.megaObj.userData.set(W(B.owner),ge(G)),T.megaObj.userData.faceSun&&T.megaObj.lookAt(0,0,0),T.megaObj.userData.spinner?.rotateZ(Re*.25)),B.parent!==null){const Te=$[B.parent],Ge=B.r*oe(I.set(Te.x,Te.y,Te.z));T.show=me.selBody===B.id||me.target===B.id||v.follow===B.id?1:_n.smoothstep(Ge,16,34),T.lineHolder.visible=T.show>.05,T.line.material.uniforms.uOpacity.value=.55*T.show}else T.show=1;const de=zt(G.x,G.y,G.z);T.on=de.ok,T.sx=de.x,T.sy=de.y,T.sr=B.size*oe(I.set(G.x,G.y,G.z))}const hi=(T,B,G)=>{if(me.dev)return!0;for(const se of re.ships)if(se.owner===Fe&&Math.hypot(se.x-T,se.y-B,se.z-G)<140)return!0;for(const se of re.bodies)if(se.owner===Fe){const de=$[se.id];if(Math.hypot(de.x-T,de.y-B,de.z-G)<160)return!0}return!1},Un=(T,B,G,se,de=1)=>{if(!t.onSound)return;const Te=zt(B,G,se),Ge=a.position.distanceTo(I.set(B,G,se));t.onSound(T,_n.clamp(Te.x/Xe*2-1,-1,1),_n.clamp(de*40/(Ge+30),.08,1))};Kt=Math.max(0,Kt-Re*.35);for(const T of me.fx||[]){if(!hi(T.x,T.y,T.z))continue;const B=W(T.owner),G=C.set(T.x,T.y,T.z).clone();if(T.type==="rail"){const se=new U(T.tx,T.ty,T.tz);T.hit||se.add(I.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(1.2)).lerp(G,-.6),L.beam(G,se,"#eaf2ff",.35),L.bolt(G,se,"#ffffff",.12,1.2,.05),T.hit&&L.impact(se,"#ffd9a0",!0),Un("rail",T.x,T.y,T.z),T.hit&&Un("railHit",T.tx,T.ty,T.tz,.8),Kt=Math.min(1,Kt+.12)}else if(T.type==="pdc"){const se=new U(T.tx,T.ty,T.tz);for(let de=0;de<5;de++)L.bolt(G,I.copy(se).add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.5)),"#ffc46b",.22,.25,.016,de*.04);Un("pdc",T.x,T.y,T.z,.7),Kt=Math.min(1,Kt+.04)}else if(T.type==="pdcKill"){const se=new U(T.fx,T.fy,T.fz);for(let de=0;de<6;de++)L.bolt(se,I.copy(G).add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.4)),"#ffc46b",.2,.25,.016,de*.03);L.intercept(G),L.explosion(G,.25),Un("pdc",T.fx,T.fy,T.fz,.7),Un("pdcKill",T.x,T.y,T.z,.7),Kt=Math.min(1,Kt+.06)}else if(T.type==="torpHit")L.explosion(G,1.3),L.ring(G,"#ffd6a8",2.2,.9),Un("torpHit",T.x,T.y,T.z),Kt=Math.min(1,Kt+.3);else if(T.type==="boom"){L.explosion(G,1.2+T.size),L.ring(G,B,3+T.size*2,1.6);for(let se=0;se<3;se++)L.explosion(I.copy(G).add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(T.size)),.5+Math.random()*.5);Un("boom",T.x,T.y,T.z),Kt=1}else T.type==="launch"&&Un("torpLaunch",T.x,T.y,T.z)}L.drift.set(0,0,0);for(const T of re.strikes||[]){if((T.emitT||0)>be-.05)continue;T.emitT=be;const B=so(T,$e),G=C.set(B.x,B.y,B.z),se=so(T,$e+1),de=I.set(se.x-B.x,se.y-B.y,se.z-B.z).normalize();if(T.kind==="concord"){L.ring(G,"#cfe8ff",1.2,.12);const Te=O.copy(G).normalize();L.bolt(G,G.clone().addScaledVector(Te,6+Math.random()*3).addScaledVector(de,-2),"#9fd4ff",2.2,1.5,.2)}else T.kind==="boreal"?(L.ring(G,"#ffe2b0",.6,.1),L.bolt(G,G.clone().addScaledVector(de,-4),"#ffd090",.5,3,.12)):(L.ring(G,"#d8c4a0",1,.12),L.bolt(G,G.clone().add(O.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(2)).addScaledVector(de,-1.5),"#b8a080",1.6,.6,.25))}L.update(be,2*Math.tan(_n.degToRad(a.fov/2))/xt),l.clearRect(0,0,Xe,xt);const Yi=me.sel||new Set,Ki=v.dist>260;if(ie=v.dist>J*.45,me.routes)for(const T of me.routes){const B=T.key===me.routeKey;Rt(T.path,T.ok?B?ln:Qt:Gt,B?.95:.35,B?[]:[3,5],B?1.6:1)}if(me.paths)for(const[T,B]of me.paths)Yi.has(T)&&Rt(B,W(Fe),.55,[6,4],1.1);for(const T of g){if(!T.on)continue;const B=T.b;if(T.show<.05)continue;if(ie&&B.kind==="asteroid"&&me.selBody!==B.id&&me.target!==B.id){B.owner!==ct&&(l.fillStyle=W(B.owner),l.fillRect(T.sx-1.5,T.sy-1.5,3,3));continue}const G=Math.max(T.sr*1.25+4,B.kind==="planet"?9:6);if(B.kind==="planet"){const je=g.filter(ot=>ot.b.parent===B.id);je.length&&je[0].show<.5&&(je.forEach((ot,_t)=>{l.fillStyle=W(ot.b.owner),l.globalAlpha=.9*(1-je[0].show*2),l.fillRect(T.sx-(je.length*6-2)/2+_t*6,T.sy+G+19,4,4)}),l.globalAlpha=1)}const se=W(B.owner),de=me.selBody===B.id,Te=me.target===B.id,Ge=T.sr>60;l.lineWidth=de||Te?1.8:1.1,l.strokeStyle=de?ln:se,l.globalAlpha=(B.owner===ct?.45:.9)*(Ge?.35:1),l.beginPath(),l.arc(T.sx,T.sy,G,0,Math.PI*2),l.stroke(),B.home&&(l.beginPath(),l.arc(T.sx,T.sy,G+3,0,Math.PI*2),l.stroke()),me.tutWorld===B.id&&(l.setLineDash([6,5]),l.lineWidth=2,l.strokeStyle=Qt,l.globalAlpha=1,l.beginPath(),l.arc(T.sx,T.sy,G+13,0,Math.PI*2),l.stroke(),l.setLineDash([])),Te&&(l.setLineDash([2,4]),l.strokeStyle=Qt,l.beginPath(),l.arc(T.sx,T.sy,G+7,0,Math.PI*2),l.stroke(),l.setLineDash([])),l.globalAlpha=1;const Ne=Xn(B);if(Ne>0&&!ie){const je=Math.round(Ne/Ae.batteryHp)*3,ot=Math.ceil(B.bhp/Ne*je);for(let _t=0;_t<je;_t++){const Oe=-Math.PI/2+(_t-(je-1)/2)*.22;l.strokeStyle=_t<ot?se:r0,l.globalAlpha=_t<ot?.95:.5,l.lineWidth=2,l.beginPath(),l.arc(T.sx,T.sy,G+(B.home?7:4),Oe-.07,Oe+.07),l.stroke()}l.globalAlpha=1}if(B.mega){const je=B.mega,ot=je.done?je.key==="ark"?1-je.hold/un.ark.hold:1:1-je.left/je.total;l.strokeStyle=Qt,l.lineWidth=je.key==="ark"?3:1.5,l.globalAlpha=.9,l.setLineDash(je.done&&je.key!=="ark"?[]:[3,3]),l.beginPath(),l.arc(T.sx,T.sy,G+15,-Math.PI/2,-Math.PI/2+Math.max(.02,ot)*Math.PI*2),l.stroke(),l.setLineDash([]),ie||w(ci(re,B.owner,je.key),T.sx,T.sy-G-21,Qt,.9,9),l.globalAlpha=1}if(B.yt>0&&(l.strokeStyle=W(B.yo),l.lineWidth=3,l.beginPath(),l.arc(T.sx,T.sy,G+(B.home?11:8),-Math.PI/2,-Math.PI/2+B.yt/jd(B)*Math.PI*2),l.stroke()),B.owner===Fe&&B.queue.length&&!ie){const je=B.queue[0];l.strokeStyle=ln,l.globalAlpha=.8,l.lineWidth=1.5,l.beginPath(),l.arc(T.sx,T.sy,Math.max(3,G-3),Math.PI/2,Math.PI/2+(1-je.left/je.total)*Math.PI*2),l.stroke(),l.globalAlpha=1}B.blockaded&&B.owner===Fe&&(l.strokeStyle=Gt,l.setLineDash([4,3]),l.lineWidth=1.2,l.beginPath(),l.arc(T.sx,T.sy,G+5,0,Math.PI*2),l.stroke(),l.setLineDash([])),B.trait&&!ie&&(l.fillStyle=Qt,l.globalAlpha=.9,l.beginPath(),l.moveTo(T.sx+G+6,T.sy-3),l.lineTo(T.sx+G+9,T.sy),l.lineTo(T.sx+G+6,T.sy+3),l.lineTo(T.sx+G+3,T.sy),l.closePath(),l.fill(),l.globalAlpha=1),re.agents&&re.agents.some(je=>je.owner===Fe&&je.body===B.id)&&(l.strokeStyle=ln,l.lineWidth=1,l.beginPath(),l.ellipse(T.sx-G-7,T.sy,4,2.5,0,0,Math.PI*2),l.stroke(),l.fillStyle=ln,l.fillRect(T.sx-G-8,T.sy-1,2,2));const nt=B.parent!==null?g[B.parent]:null;!(nt&&Math.hypot(nt.sx-T.sx,nt.sy-T.sy)<46)&&!(B.kind==="asteroid"&&v.dist>900)&&!Ge&&w(B.name,T.sx,T.sy+G+(B.yt>0?18:11),de?ln:B.owner===ct?r0:se,de?1:.8,B.kind==="planet"?10.5:9)}P.begin(be,o),dt.clear();let Mr=0,R=0;const V=new Set,Q=new Map;for(const T of re.ships){if(!Ze(T))continue;V.add(T.id);const B=me.dev||T.owner===Fe||T.seen[Fe]===2;T.owner!==Fe&&et.set(T.id,{x:T.x,y:T.y,z:T.z,vx:T.vx,vy:T.vy,vz:T.vz,t:$e,owner:T.owner,cls:B&&!T.unknown?T.cls:null}),Tn(T,C);const G=C.clone();let se=pt.get(T.id);se||(se=new U(T.vx,T.vy,T.vz),se.lengthSq()<1e-6&&se.set(1,0,0),se.normalize(),pt.set(T.id,se));const de=Math.hypot(T.tx,T.ty,T.tz);if(T.burn&&de>1e-4)I.set(T.tx,T.ty,T.tz).divideScalar(de),se.lerp(I,Math.min(1,Re*1.6*Math.max(1,me.warp||1))).normalize();else if(T.at!==null){const $t=$[T.at];I.set(-(G.z-$t.z),0,G.x-$t.x).normalize(),se.lerp(I,Math.min(1,Re*2)).normalize()}const Te=oe(G),Ge=o0*(l0[T.cls]||1),Ne=Ge*Te,nt=B?W(T.owner):Qt;if(T.owner===Fe&&T.burn&&(Mr+=de/T.st.accel),R<a0&&B){R++;const $t=1-_n.smoothstep(Ne,4,16),Tt=$t<=0?null:[T.burn?7:4.5,(T.burn?.9:.5)*$t,!!T.burn],En=.85+T.id*37%20/100-(as(T)?.3:0),gn=ru?o0*(DS[T.cls]||1):Ge;P.add(D(re.factions[T.owner],T.cls,T.id),G,se,[gn,gn,gn],nt,En,T.id,!!T.burn,(.45+.55*Math.min(1,de/(T.st.accel||.1)))*(.8+Math.sin(be*40+T.id)*.05),Tt,Ne,ge(G)),Ye(T.id,G,se,gn*(l0[T.cls]||1),$e,be,Ne)}else T.burn&&P.add(0,G,se,[.01,.01,.01],nt,1,T.id,!0,1.4,[7,.9,!0],0,1);const yt=zt(G.x,G.y,G.z);if(!yt.ok)continue;const je=yt.x,ot=yt.y;let _t=T.at!==null?g[T.at]:null;if(_t&&_t.show<.5&&(_t=g[_t.b.parent]),_t&&_t.on&&(_t.b.id!==T.at||vr(_t.b)*Te<22)){const $t=_t.b.id;Q.has($t)||Q.set($t,[]),Q.get($t).push({s:T,known:B,c:nt});continue}const Oe=zt(G.x+se.x,G.y+se.y,G.z+se.z);K(T,je,ot,Math.atan2(Oe.y-ot,Oe.x-je),Ne,B,nt)}for(const[T,B]of Q){const G=g[T],Te=(ie&&G.b.kind==="asteroid"&&me.selBody!==G.b.id&&me.target!==G.b.id?1:Math.max(G.sr*1.25+4,G.b.kind==="planet"?9:6)+(G.b.home?3:0))+(Xn(G.b)&&!ie?(G.b.home?7:4)+2:0)+6;B.sort((nt,yt)=>nt.s.owner-yt.s.owner||nt.s.id-yt.s.id);const Ge=ie?10:15,Ne=G.sx-(B.length-1)*Ge/2;B.forEach((nt,yt)=>K(nt.s,Ne+yt*Ge,G.sy-Te,-Math.PI/2,0,nt.known,nt.c,0,!0))}function K(T,B,G,se,de,Te,Ge,Ne,nt=!1){const yt=T.owner===Fe,je=Yi.has(T.id),ot=me.targetShip===T.id,_t=Te&&!T.unknown?T.cls:null,Oe=_t==="battleship"?6.5:_t==="corvette"?4.5:5.5;dt.set(T.id,{x:B,y:G,r:Math.max(16,de*.6)});const $t=nt?1:1-_n.smoothstep(de,18,40);if(ie&&_t==="freighter"&&!je&&!ot)return;$t>.02&&k(_t,B,G,se,ie?Oe*.75:Oe,Ge,!yt&&!Te,$t*(as(T)?.6:1));const Tt=Te&&!ie?Ci(T):0;for(let En=0;En<Tt;En++)l.fillStyle=Qt,l.fillRect(B-(Tt*4-1)/2+En*4,G-Oe-5,3,1.5);if(je||ot){l.strokeStyle=ot&&!yt?Gt:ln,l.lineWidth=1.2;const En=Math.max(11,de*.7);for(let gn=0;gn<4;gn++){const Pi=gn*Math.PI/2+Math.PI/4;l.beginPath(),l.arc(B,G,En,Pi-.35,Pi+.35),l.stroke()}}if(yt&&_t!=="freighter"){const gn=G+(nt?-13:Math.max(10,de*.7)+3);(je||!ie&&(T.dv<T.st.dv*.3||T.hull<T.st.hull*.6))&&(l.globalAlpha=.9,l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(B-14/2,gn,14,5),l.fillStyle=T.hull<T.st.hull*.35?Gt:ln,l.fillRect(B-14/2,gn,14*Math.max(0,T.hull/T.st.hull),2),l.fillStyle=Qt,l.fillRect(B-14/2,gn+3,14*Math.max(0,Math.min(1,T.dv/T.st.dv)),2),l.globalAlpha=1),as(T)&&(l.strokeStyle=Gt,l.lineWidth=1.5,l.beginPath(),l.moveTo(B-9,G-9),l.lineTo(B-4,G-4),l.moveTo(B-4,G-9),l.lineTo(B-9,G-4),l.stroke())}T.board>0&&(l.strokeStyle=W(T.boardBy),l.lineWidth=2,l.beginPath(),l.arc(B,G,14,-Math.PI/2,-Math.PI/2+Math.min(1,T.board/(T.st.civil?Ae.board.freighter:Ae.board.warship))*Math.PI*2),l.stroke()),(je||ot)&&Te&&_t!=="freighter"&&w(T.name||"",B,G-(nt?22:Math.max(16,de*.7)+8),ot&&!yt?Gt:ln,.95,10)}Ee.burn=Math.min(1,Mr/2);for(const[T,B]of et){if(V.has(T))continue;const G=$e-B.t;if(G>90||!re.ships.some(de=>de.id===T)&&!re.mp){et.delete(T);continue}if(G>90){et.delete(T);continue}const se=zt(B.x+B.vx*G,B.y+B.vy*G,B.z+B.vz*G);se.ok&&(k(B.cls,se.x,se.y,0,5,W(B.owner),!0,.5*(1-G/90)),l.strokeStyle=W(B.owner),l.globalAlpha=.25*(1-G/90),l.setLineDash([2,3]),l.beginPath(),l.arc(se.x,se.y,8+G*.25,0,Math.PI*2),l.stroke(),l.setLineDash([]),l.globalAlpha=1)}for(const T of re.strikes||[]){const B=so(T,$e),G=T.owner===Fe?ln:Gt,se=[];for(let Te=0;Te<=24;Te++){const Ge=so(T,$e+(T.t1-$e)*Te/24);se.push(new U(Ge.x,Ge.y,Ge.z))}Rt(se,G,.6,[5,5],1.2);const de=zt(B.x,B.y,B.z);de.ok&&(l.strokeStyle=G,l.lineWidth=1.5,l.globalAlpha=1,l.beginPath(),l.moveTo(de.x,de.y-6),l.lineTo(de.x+6,de.y),l.lineTo(de.x,de.y+6),l.lineTo(de.x-6,de.y),l.closePath(),l.stroke(),w(ci(re,T.owner,"strike"),de.x,de.y-12,G,.9,9))}const j=new Set;for(const T of re.torps){if(!me.dev&&T.owner!==Fe&&!hi(T.x,T.y,T.z))continue;j.add(T.id);const B=C.set(T.x+T.vx*st,T.y+T.vy*st,T.z+T.vz*st).clone(),G=Math.hypot(T.vx,T.vy,T.vz)||1;I.set(T.vx/G,T.vy/G,T.vz/G),P.add(0,B,I,[.01,.01,.01],"#ffd9b0",1,T.id,!!T.burn,.7,[T.burn?5:2.5,T.burn?1:.5,!!T.burn],0,1);const se=zt(B.x,B.y,B.z);if(!se.ok)continue;let de=We.get(T.id);de||(de=[],We.set(T.id,de)),de.push(B),de.length>14&&de.shift(),Rt(de,T.owner===Fe?ln:Gt,.7,null,1),l.fillStyle=T.owner===Fe?ln:Gt,l.fillRect(se.x-1.5,se.y-1.5,3,3)}for(const T of We.keys())j.has(T)||We.delete(T);if(P.end(),Yi.size&&Yi.size<=4&&!Ki)for(const T of re.ships){if(!Yi.has(T.id)||T.st.civil)continue;const B=T.x+T.vx*st,G=T.y+T.vy*st,se=T.z+T.vz*st;T.st.rails.length&&pn(B,G,se,T.st.railRange,ln,.35,null),T.st.tubes&&pn(B,G,se,Ae.torpRange,Qt,.3,[6,6]),pn(B,G,se,T.st.cold,ln,.2,[1,5])}if(me.selBody!=null&&re.bodies[me.selBody].owner===Fe&&!Ki){const T=re.bodies[me.selBody],B=$[T.id],G=(de,Te,Ge,Ne)=>{let nt=null;for(let yt=0;yt<48;yt++){const je=yt/48*Math.PI*2,ot=zt(B.x+Math.cos(je)*de,B.y,B.z+Math.sin(je)*de);!ot.ok||ot.x<40||ot.x>Xe-40||ot.y<70||ot.y>xt*.6||(!nt||ot.y<nt.y)&&(nt={x:ot.x,y:ot.y})}nt&&w(Te,nt.x,nt.y-8,Ge,Ne,9)},se=Ae.cold*Nl(T,re);if(pn(B.x,B.y,B.z,se,ln,.3,[1,5]),G(se,"Sensors",ln,.55),me.armed==="build:array"||(me.struct||"").startsWith("array")){const de=(me.struct||"").startsWith("array")?se:se*Ae.arraySensor*(T.trait==="listening"?2:1);de!==se&&(pn(B.x,B.y,B.z,de,Qt,.7,[4,4]),G(de,"With array",Qt,.85))}Xn(T)&&(pn(B.x,B.y,B.z,Ae.railRange+T.size,ln,.35,null),G(Ae.railRange+T.size,"Guns",ln,.55))}if(me.plot){const T=re.ships.find(B=>B.id===me.plot.ship);if(T){const B=zt(T.x,T.y,T.z),G=B.x,se=B.y;l.strokeStyle=Qt,l.lineWidth=1.6,l.beginPath(),l.moveTo(G,se),l.lineTo(me.plot.x,me.plot.y),l.stroke(),l.beginPath(),l.arc(me.plot.x,me.plot.y,5,0,Math.PI*2),l.stroke(),me.plot.path&&Rt(me.plot.path,Qt,.8,[5,4],1.2)}}return ne(Re),jp.value=xt*o/(2*Math.tan(_n.degToRad(a.fov/2))),m.uniforms.uBox.value=v.dist*.9,m.uniforms.uPR.value=o,u.uniforms.uFocus.value=v.dist,u.uniforms.uDof.value=r==="high"?1-_n.smoothstep(v.dist,10,40):0,Ee.battle=Kt,Ee.zoom=1-_n.smoothstep(v.dist,15,300),Tc(be),u.render(c,a,be),Ee}function ce(re,me,Ce=!0){let be=null,Re=1/0;if(Ce){for(const[Fe,$e]of dt){const st=Math.hypot($e.x-re,$e.y-me);st<Math.max(20,$e.r)&&st<Re&&(Re=st,be={ship:Fe})}if(be)return be}for(const Fe of g){if(!Fe.on||Fe.show<.5)continue;const $e=Math.hypot(Fe.sx-re,Fe.sy-me),st=Math.max(26,Fe.sr+12);$e<st&&$e<Re&&(Re=$e,be={body:Fe.b.id})}return be}function pe(re,me){const Ce=new U(re/window.innerWidth*2-1,-(me/window.innerHeight)*2+1,.5).unproject(a),be=new xf(a.position,Ce.sub(a.position).normalize()),Re=new Qi(du.clone(),-v.target.y),Fe=be.intersectPlane(Re,new U);if(Fe&&Fe.distanceTo(a.position)<v.dist*4)return Fe;const $e=new Qi().setFromNormalAndCoplanarPoint(a.getWorldDirection(new U),v.target);return be.intersectPlane($e,new U)}const Le=()=>{v.follow=null,v.ship=null};function Qe(re,me,Ce){Le(),v.goalDist=null;const be=pe(re,me),Re=_n.clamp(v.dist*Ce,v.minDist,v.maxDist),Fe=Re/v.dist;v.dist=Re,be&&v.target.lerp(be,1-Fe)}function ze(re,me){Le();const Ce=2*v.dist*Math.tan(_n.degToRad(a.fov/2))/window.innerHeight,be=new U().setFromMatrixColumn(a.matrixWorld,0),Re=new U().crossVectors(du,be).normalize();v.target.addScaledVector(be,-re*Ce).addScaledVector(Re,me*Ce)}function ke(re,me,Ce=!0){v.ship=null,v.follow=me,!(me===null||!Ce)&&(v.goalDist=Math.max(v.minDist,re.bodies[me].size*9+6))}function tt(re,me){const Ce=ce(re,me,!1);return Ce?g[Ce.body].g.position.clone():pe(re,me)||v.target.clone()}function lt(re,me,Ce){Le(),v.goalDist=null;const be=new U().subVectors(a.position,v.target),Re=new Bx().setFromVector3(be);Ce=_n.clamp(Re.phi+Ce,.15,Math.PI-.15)-Re.phi;const $e=new U().setFromMatrixColumn(a.matrixWorld,0).normalize(),st=new $n().setFromAxisAngle(du,me).multiply(new $n().setFromAxisAngle($e,Ce)),Ze=a.position.clone().sub(re).applyQuaternion(st).add(re);v.target.sub(re).applyQuaternion(st).add(re),Re.setFromVector3(Ze.clone().sub(v.target)),v.az=Re.theta,v.pol=Re.phi,v.dist=Re.radius}function mt(re,me=!1){v.follow=null,v.ship=re,me&&(v.goalDist=9)}const X=()=>v.follow!==null||v.ship!=null;function Ie(re){v.goalDist=null,v.dist=_n.clamp(v.dist*re,v.minDist,v.maxDist)}function he(re,me,Ce){if(X()){Ie(Ce);return}const be=ce(re,me,!1);if(v.goalDist=null,!be){Qe(re,me,Ce);return}const Re=g[be.body].g.position,Fe=_n.clamp(v.dist*Ce,v.minDist,v.maxDist);v.target.lerp(Re,1-Fe/v.dist),v.dist=Fe}function Ue(re){const me=g[re];return{x:me.sx,y:me.sy}}function Ve(re){return dt.get(re)||null}function xe(re,me){const Ce=pe(re,me);return Ce?{x:Ce.x,y:Ce.y,z:Ce.z}:null}function it(re){r=re,o=s(),u.setSamples(4),u.setLevel(re),le()}let qe=0,Bt=0,kt=null,si=0,On=null,Ha=!1;function Tc(re){if(kt!==null){const Re=re-kt;Re>0&&Re<.5&&(Bt+=Re,qe++)}if(kt=re,qe<90)return;const me=Bt/qe;Bt=0,qe=0;const Ce=s(),be=Ce>=1.5?Math.max(1.25,Ce*.8):Ce*.9;if(On){me>On.avg*.9&&(o=On.pr,Ha=!0,le()),On=null;return}!Ha&&me>1/45&&o>be?(On={pr:o,avg:me},o=Math.max(be,o-.25),si=re+20,le()):me<1/57&&o<Ce&&re>si&&(o=Math.min(Ce,o+.25),le())}return{_debug:{scene:c,renderer:i,camera:a},build:H,render:De,resize:le,setQuality:it,pick:ce,orbit:v,zoomAt:Qe,zoomBy:Ie,pan:ze,focus:ke,followShip:mt,following:X,zoomToward:he,screenOf:Ue,screenOfShip:Ve,worldAt:xe,pivotAt:tt,rotateAround:lt}}class US{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return NS(e).buffer}}function NS(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function om(n){return new zS(n).unpack()}function am(n){const e=new FS,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class zS{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,o;for(;i<e;)s=t[i],s<160?(o=s,i++):(s^192)<32?(o=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(o=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(o=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(o);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class FS{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),o=2**32,c=t<<31|i+1023<<20|s/o&1048575,a=s%o;this._bufferBuilder.append(203),this.pack_int32(c),this.pack_int32(a)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const c=this.pack(e[o]);if(c instanceof Promise)return c.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new US,this._textEncoder=new TextEncoder}}let lm=!0,cm=!0;function ta(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function Ts(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Af("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(c,a){if(c!==e)return s.apply(this,arguments);const u=l=>{const h=t(l);h&&(a.handleEvent?a.handleEvent(h):a(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,u),s.apply(this,[c,u])};const o=r.removeEventListener;r.removeEventListener=function(c,a){if(c!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(a))return o.apply(this,arguments);const u=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[c,u])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(c){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),c&&this.addEventListener(e,this["_on"+e]=c)},enumerable:!0,configurable:!0})}function OS(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(lm=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function BS(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(cm=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function Af(){if(typeof window=="object"){if(lm)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Cf(n,e){cm&&console.warn(n+" is deprecated, please use "+e+" instead.")}function HS(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i){const r=parseInt(i.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(ta(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(ta(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(ta(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=ta(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function c0(n){return Object.prototype.toString.call(n)==="[object Object]"}function um(n){return c0(n)?Object.keys(n).reduce(function(e,t){const i=c0(n[t]),r=i?um(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function vd(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?vd(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{vd(n,n.get(r),t)})}))}function u0(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{n.forEach(c=>{c.type===i&&c.trackId===o.id&&vd(n,c,r)})}),r}const d0=Af;function dm(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(c){if(typeof c!="object"||c.mandatory||c.optional)return c;const a={};return Object.keys(c).forEach(u=>{if(u==="require"||u==="advanced"||u==="mediaSource")return;const l=typeof c[u]=="object"?c[u]:{ideal:c[u]};l.exact!==void 0&&typeof l.exact=="number"&&(l.min=l.max=l.exact);const h=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(l.ideal!==void 0){a.optional=a.optional||[];let d={};typeof l.ideal=="number"?(d[h("min",u)]=l.ideal,a.optional.push(d),d={},d[h("max",u)]=l.ideal,a.optional.push(d)):(d[h("",u)]=l.ideal,a.optional.push(d))}l.exact!==void 0&&typeof l.exact!="number"?(a.mandatory=a.mandatory||{},a.mandatory[h("",u)]=l.exact):["min","max"].forEach(d=>{l[d]!==void 0&&(a.mandatory=a.mandatory||{},a.mandatory[h(d,u)]=l[d])})}),c.advanced&&(a.optional=(a.optional||[]).concat(c.advanced)),a},r=function(c,a){if(e.version>=61)return a(c);if(c=JSON.parse(JSON.stringify(c)),c&&typeof c.audio=="object"){const u=function(l,h,d){h in l&&!(d in l)&&(l[d]=l[h],delete l[h])};c=JSON.parse(JSON.stringify(c)),u(c.audio,"autoGainControl","googAutoGainControl"),u(c.audio,"noiseSuppression","googNoiseSuppression"),c.audio=i(c.audio)}if(c&&typeof c.video=="object"){let u=c.video.facingMode;u=u&&(typeof u=="object"?u:{ideal:u});const l=e.version<66;if(u&&(u.exact==="user"||u.exact==="environment"||u.ideal==="user"||u.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!l)){delete c.video.facingMode;let h;if(u.exact==="environment"||u.ideal==="environment"?h=["back","rear"]:(u.exact==="user"||u.ideal==="user")&&(h=["front"]),h)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(m=>m.kind==="videoinput");let f=d.find(m=>h.some(y=>m.label.toLowerCase().includes(y)));return!f&&d.length&&h.includes("back")&&(f=d[d.length-1]),f&&(c.video.deviceId=u.exact?{exact:f.deviceId}:{ideal:f.deviceId}),c.video=i(c.video),d0("chrome: "+JSON.stringify(c)),a(c)})}c.video=i(c.video)}return d0("chrome: "+JSON.stringify(c)),a(c)},s=function(c){return e.version>=64?c:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[c.name]||c.name,message:c.message,constraint:c.constraint||c.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(c,a,u){r(c,l=>{t.webkitGetUserMedia(l,a,h=>{u&&u(s(h))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const c=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(a){return r(a,u=>c(u).then(l=>{if(u.audio&&!l.getAudioTracks().length||u.video&&!l.getVideoTracks().length)throw l.getTracks().forEach(h=>{h.stop()}),new DOMException("","NotFoundError");return l},l=>Promise.reject(s(l))))}}}function fm(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function hm(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(a=>a.track&&a.track.id===s.track.id):o={track:s.track};const c=new Event("track");c.track=s.track,c.receiver=o,c.transceiver={receiver:o},c.streams=[r.stream],this.dispatchEvent(c)}),r.stream.getTracks().forEach(s=>{let o;n.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(a=>a.track&&a.track.id===s.id):o={track:s};const c=new Event("track");c.track=s,c.receiver=o,c.transceiver={receiver:o},c.streams=[r.stream],this.dispatchEvent(c)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ts(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function pm(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(c,a){let u=r.apply(this,arguments);return u||(u=e(this,c),this._senders.push(u)),u};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(c){s.apply(this,arguments);const a=this._senders.indexOf(c);a!==-1&&this._senders.splice(a,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(o=>{const c=this._senders.find(a=>a.track===o);c&&this._senders.splice(this._senders.indexOf(c),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function mm(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const o=i.apply(this,[]);return o.forEach(c=>c._pc=this),o});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const o=r.apply(this,arguments);return o._pc=this,o}),n.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(c=>u0(c,o.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(o=>o._pc=this),s}),Ts(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>u0(o,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,o,c;return this.getSenders().forEach(a=>{a.track===r&&(s?c=!0:s=a)}),this.getReceivers().forEach(a=>(a.track===r&&(o?c=!0:o=a),a.track===r)),c||s&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function gm(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,c){if(!c)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const a=e.apply(this,arguments);return this._shimmedLocalStreams[c.id]?this._shimmedLocalStreams[c.id].indexOf(a)===-1&&this._shimmedLocalStreams[c.id].push(a):this._shimmedLocalStreams[c.id]=[c,a],a};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(u=>{if(this.getSenders().find(h=>h.track===u))throw new DOMException("Track already exists.","InvalidAccessError")});const c=this.getSenders();t.apply(this,arguments);const a=this.getSenders().filter(u=>c.indexOf(u)===-1);this._shimmedLocalStreams[o.id]=[o].concat(a)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(c=>{const a=this._shimmedLocalStreams[c].indexOf(o);a!==-1&&this._shimmedLocalStreams[c].splice(a,1),this._shimmedLocalStreams[c].length===1&&delete this._shimmedLocalStreams[c]}),r.apply(this,arguments)}}function vm(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return gm(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const l=t.apply(this);return this._reverseStreams=this._reverseStreams||{},l.map(h=>this._reverseStreams[h.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(l){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},l.getTracks().forEach(h=>{if(this.getSenders().find(f=>f.track===h))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[l.id]){const h=new n.MediaStream(l.getTracks());this._streams[l.id]=h,this._reverseStreams[h.id]=l,l=h}i.apply(this,[l])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(l){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[l.id]||l]),delete this._reverseStreams[this._streams[l.id]?this._streams[l.id].id:l.id],delete this._streams[l.id]},n.RTCPeerConnection.prototype.addTrack=function(l,h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(y=>y===l))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===l))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const m=this._streams[h.id];if(m)m.addTrack(l),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const y=new n.MediaStream([l]);this._streams[h.id]=y,this._reverseStreams[y.id]=h,this.addStream(y)}return this.getSenders().find(y=>y.track===l)};function s(u,l){let h=l.sdp;return Object.keys(u._reverseStreams||[]).forEach(d=>{const f=u._reverseStreams[d],m=u._streams[f.id];h=h.replace(new RegExp(m.id,"g"),f.id)}),new RTCSessionDescription({type:l.type,sdp:h})}function o(u,l){let h=l.sdp;return Object.keys(u._reverseStreams||[]).forEach(d=>{const f=u._reverseStreams[d],m=u._streams[f.id];h=h.replace(new RegExp(f.id,"g"),m.id)}),new RTCSessionDescription({type:l.type,sdp:h})}["createOffer","createAnswer"].forEach(function(u){const l=n.RTCPeerConnection.prototype[u],h={[u](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?l.apply(this,[m=>{const y=s(this,m);d[0].apply(null,[y])},m=>{d[1]&&d[1].apply(null,m)},arguments[2]]):l.apply(this,arguments).then(m=>s(this,m))}};n.RTCPeerConnection.prototype[u]=h[u]});const c=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?c.apply(this,arguments):(arguments[0]=o(this,arguments[0]),c.apply(this,arguments))};const a=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const u=a.get.apply(this);return u.type===""?u:s(this,u)}}),n.RTCPeerConnection.prototype.removeTrack=function(l){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!l._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(l._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(y=>l.track===y)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(l.track),this.dispatchEvent(new Event("negotiationneeded")))}}function xd(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function xm(n,e){e.version>102||Ts(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const f0=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:xm,shimAddTrackRemoveTrack:vm,shimAddTrackRemoveTrackWithNative:gm,shimGetSendersWithDtmf:pm,shimGetUserMedia:dm,shimMediaStream:fm,shimOnTrack:hm,shimPeerConnection:xd,shimSenderReceiverGetStats:mm},Symbol.toStringTag,{value:"Module"}));function ym(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){Cf("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,c,a){c in o&&!(a in o)&&(o[a]=o[c],delete o[c])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},i&&i.prototype.getSettings){const o=i.prototype.getSettings;i.prototype.getSettings=function(){const c=o.apply(this,arguments);return r(c,"mozAutoGainControl","autoGainControl"),r(c,"mozNoiseSuppression","noiseSuppression"),c}}if(i&&i.prototype.applyConstraints){const o=i.prototype.applyConstraints;i.prototype.applyConstraints=function(c){return this.kind==="audio"&&typeof c=="object"&&(c=JSON.parse(JSON.stringify(c)),r(c,"autoGainControl","mozAutoGainControl"),r(c,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[c])}}}}function GS(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function _m(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function yd(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function bm(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,o,c]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(a=>{if(e.version<53&&!o)try{a.forEach(u=>{u.type=t[u.type]||u.type})}catch(u){if(u.name!=="TypeError")throw u;a.forEach((l,h)=>{a.set(h,Object.assign({},l,{type:t[l.type]||l.type}))})}return a}).then(o,c)}}function Mm(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Sm(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),Ts(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function wm(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){Cf("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function Tm(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function Em(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(c=>{if("rid"in c&&!/^[a-z0-9]{0,16}$/i.test(c.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in c&&!(parseFloat(c.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in c&&!(parseFloat(c.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(s){const{sender:c}=o,a=c.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=r,c.sendEncodings=r,this.setParametersPromises.push(c.setParameters(a).then(()=>{delete c.sendEncodings}).catch(()=>{delete c.sendEncodings})))}return o})}function Am(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function Cm(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Rm(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const h0=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Em,shimCreateAnswer:Rm,shimCreateOffer:Cm,shimGetDisplayMedia:GS,shimGetParameters:Am,shimGetStats:bm,shimGetUserMedia:ym,shimOnTrack:_m,shimPeerConnection:yd,shimRTCDataChannel:Tm,shimReceiverGetStats:Sm,shimRemoveStream:wm,shimSenderGetStats:Mm},Symbol.toStringTag,{value:"Module"}));function Pm(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function Lm(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,i.dispatchEvent(o)})}),e.apply(i,arguments)}}}function Dm(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(u,l){const h=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[h]);return l?(d.then(u,l),Promise.resolve()):d},e.createAnswer=function(u,l){const h=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[h]);return l?(d.then(u,l),Promise.resolve()):d};let c=function(a,u,l){const h=r.apply(this,[a]);return l?(h.then(u,l),Promise.resolve()):h};e.setLocalDescription=c,c=function(a,u,l){const h=s.apply(this,[a]);return l?(h.then(u,l),Promise.resolve()):h},e.setRemoteDescription=c,c=function(a,u,l){const h=o.apply(this,[a]);return l?(h.then(u,l),Promise.resolve()):h},e.addIceCandidate=c}function Im(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(km(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}.bind(e))}function km(n){return n&&n.video!==void 0?Object.assign({},n,{video:um(n.video)}):n}function Um(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let o=0;o<i.iceServers.length;o++){let c=i.iceServers[o];c.urls===void 0&&c.url?(Cf("RTCIceServer.url","RTCIceServer.urls"),c=JSON.parse(JSON.stringify(c)),c.urls=c.url,delete c.url,s.push(c)):s.push(i.iceServers[o])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Nm(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function zm(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Fm(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const p0=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Fm,shimCallbacksAPI:Dm,shimConstraints:km,shimCreateOfferLegacy:zm,shimGetUserMedia:Im,shimLocalStreamsAPI:Pm,shimRTCIceServerUrls:Um,shimRemoteStreamsAPI:Lm,shimTrackEventTransceiver:Nm},Symbol.toStringTag,{value:"Module"}));function VS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Om={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let c=3;c<s.length;c++){const a=s[c],u=e.matchPrefix(t,"a=rtpmap:"+a+" ")[0];if(u){const l=e.parseRtpMap(u),h=e.matchPrefix(t,"a=fmtp:"+a+" ");switch(l.parameters=h.length?e.parseFmtp(h[0]):{},l.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+a+" ").map(e.parseRtcpFb),i.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(l.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(c=>{i.headerExtensions.push(e.parseExtmap(c))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(c=>{o.forEach(a=>{c.rtcpFeedback.find(l=>l.type===a.type&&l.parameter===a.parameter)||c.rtcpFeedback.push(a)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(o=>{r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});let s=0;return i.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(o=>{r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,c=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),a=c.length>0&&c[0].ssrc;let u;const l=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(m=>parseInt(m,10)));l.length>0&&l[0].length>1&&l[0][0]===a&&(u=l[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:a,codecPayloadType:parseInt(d.parameters.apt,10)};a&&u&&(f.rtx={ssrc:u}),i.push(f),s&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:a,mechanism:o?"red+ulpfec":"red"},i.push(f))}}),i.length===0&&a&&i.push({ssrc:a});let h=e.matchPrefix(t,"b=");return h.length&&(h[0].indexOf("b=TIAS:")===0?h=parseInt(h[0].substring(7),10):h[0].indexOf("b=AS:")===0?h=parseInt(h[0].substring(5),10)*1e3*.95-50*40*8:h=void 0,i.forEach(d=>{d.maxBitrate=h})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return i.mux=o.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
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
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(Om);var Bm=Om.exports;const po=VS(Bm),WS=gg({__proto__:null,default:po},[Bm]);function Cl(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=po.parseCandidate(i.candidate);for(const o in s)o in r||Object.defineProperty(r,o,{value:s[o]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,Ts(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function _d(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||Ts(n,"icecandidate",e=>{if(e.candidate){const t=po.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Rl(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(c){if(!c||!c.sdp)return!1;const a=po.splitSections(c.sdp);return a.shift(),a.some(u=>{const l=po.parseMLine(u);return l&&l.kind==="application"&&l.protocol.indexOf("SCTP")!==-1})},i=function(c){const a=c.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(a===null||a.length<2)return-1;const u=parseInt(a[1],10);return u!==u?-1:u},r=function(c){let a=65536;return e.browser==="firefox"&&(e.version<57?c===-1?a=16384:a=2147483637:e.version<60?a=e.version===57?65535:65536:a=2147483637),a},s=function(c,a){let u=65536;e.browser==="firefox"&&e.version===57&&(u=65535);const l=po.matchPrefix(c.sdp,"a=max-message-size:");return l.length>0?u=parseInt(l[0].substring(19),10):e.browser==="firefox"&&a!==-1&&(u=2147483637),u},o=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:a}=this.getConfiguration();a==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const a=i(arguments[0]),u=r(a),l=s(arguments[0],a);let h;u===0&&l===0?h=Number.POSITIVE_INFINITY:u===0||l===0?h=Math.max(u,l):h=Math.min(u,l);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return h}}),this._sctp=d}return o.apply(this,arguments)}}function Pl(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const o=r.send;r.send=function(){const a=arguments[0],u=a.length||a.size||a.byteLength;if(r.readyState==="open"&&s.sctp&&u>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return o.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},Ts(n,"datachannel",r=>(t(r.channel,r.target),r))}function bd(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Md(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Ll(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Dl(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const $S=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Md,shimAddIceCandidateNullOrEmpty:Ll,shimConnectionState:bd,shimMaxMessageSize:Rl,shimParameterlessSetLocalDescription:Dl,shimRTCIceCandidate:Cl,shimRTCIceCandidateRelayProtocol:_d,shimSendThrowTypeError:Pl},Symbol.toStringTag,{value:"Module"}));function XS({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Af,i=HS(n),r={browserDetails:i,commonShim:$S,extractVersion:ta,disableLog:OS,disableWarnings:BS,sdp:WS};switch(i.browser){case"chrome":if(!f0||!xd||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=f0,Ll(n,i),Dl(n),dm(n,i),fm(n),xd(n,i),hm(n,i),vm(n,i),pm(n),mm(n,i),xm(n,i),Cl(n),_d(n),bd(n),Rl(n,i),Pl(n,i),Md(n,i);break;case"firefox":if(!h0||!yd||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=h0,Ll(n,i),Dl(n),ym(n,i),yd(n,i),bm(n,i),_m(n),wm(n),Mm(n),Sm(n),Tm(n),Em(n,i),Am(n,i),Cm(n,i),Rm(n,i),Cl(n),bd(n),Rl(n,i),Pl(n,i);break;case"safari":if(!p0||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=p0,Ll(n,i),Dl(n),Um(n),zm(n),Dm(n),Pm(n),Lm(n),Nm(n),Im(n),Fm(n),Cl(n),_d(n),Rl(n,i),Pl(n,i),Md(n,i);break;default:t("Unsupported browser!");break}return r}const m0=XS({window:typeof window>"u"?void 0:window});function Es(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Hm{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,o=0;for(;o<i;){const c=Math.min(i,o+this.chunkedMTU),a=e.slice(o,c),u={__peerData:this._dataCount,n:s,data:a,total:r};t.push(u),o=c,s++}return this._dataCount++,t}}}function qS(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const fu=m0.default||m0,Zo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return fu.browserDetails.browser}getVersion(){return fu.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=fu.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},YS=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),Gm=()=>Math.random().toString(36).slice(2),g0={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class KS extends Hm{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=g0,this.browser=Zo.getBrowser(),this.browserVersion=Zo.getVersion(),this.pack=am,this.unpack=om,this.supports=function(){const t={browser:Zo.isBrowserSupported(),webRTC:Zo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(g0),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Zo.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=YS,this.randomToken=Gm}}const oi=new KS,ZS="PeerJS: ";class jS{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[ZS,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var Ke=new jS,Rf={},JS=Object.prototype.hasOwnProperty,ri="~";function wa(){}Object.create&&(wa.prototype=Object.create(null),new wa().__proto__||(ri=!1));function QS(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function Vm(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new QS(t,i||n,r),o=ri?ri+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],s]:n._events[o].push(s):(n._events[o]=s,n._eventsCount++),n}function Il(n,e){--n._eventsCount===0?n._events=new wa:delete n._events[e]}function Zn(){this._events=new wa,this._eventsCount=0}Zn.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)JS.call(t,i)&&e.push(ri?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Zn.prototype.listeners=function(e){var t=ri?ri+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o};Zn.prototype.listenerCount=function(e){var t=ri?ri+e:e,i=this._events[t];return i?i.fn?1:i.length:0};Zn.prototype.emit=function(e,t,i,r,s,o){var c=ri?ri+e:e;if(!this._events[c])return!1;var a=this._events[c],u=arguments.length,l,h;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),u){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,t),!0;case 3:return a.fn.call(a.context,t,i),!0;case 4:return a.fn.call(a.context,t,i,r),!0;case 5:return a.fn.call(a.context,t,i,r,s),!0;case 6:return a.fn.call(a.context,t,i,r,s,o),!0}for(h=1,l=new Array(u-1);h<u;h++)l[h-1]=arguments[h];a.fn.apply(a.context,l)}else{var d=a.length,f;for(h=0;h<d;h++)switch(a[h].once&&this.removeListener(e,a[h].fn,void 0,!0),u){case 1:a[h].fn.call(a[h].context);break;case 2:a[h].fn.call(a[h].context,t);break;case 3:a[h].fn.call(a[h].context,t,i);break;case 4:a[h].fn.call(a[h].context,t,i,r);break;default:if(!l)for(f=1,l=new Array(u-1);f<u;f++)l[f-1]=arguments[f];a[h].fn.apply(a[h].context,l)}}return!0};Zn.prototype.on=function(e,t,i){return Vm(this,e,t,i,!1)};Zn.prototype.once=function(e,t,i){return Vm(this,e,t,i,!0)};Zn.prototype.removeListener=function(e,t,i,r){var s=ri?ri+e:e;if(!this._events[s])return this;if(!t)return Il(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!i||o.context===i)&&Il(this,s);else{for(var c=0,a=[],u=o.length;c<u;c++)(o[c].fn!==t||r&&!o[c].once||i&&o[c].context!==i)&&a.push(o[c]);a.length?this._events[s]=a.length===1?a[0]:a:Il(this,s)}return this};Zn.prototype.removeAllListeners=function(e){var t;return e?(t=ri?ri+e:e,this._events[t]&&Il(this,t)):(this._events=new wa,this._eventsCount=0),this};Zn.prototype.off=Zn.prototype.removeListener;Zn.prototype.addListener=Zn.prototype.on;Zn.prefixed=ri;Zn.EventEmitter=Zn;Rf=Zn;var As={};Es(As,"ConnectionType",()=>Or);Es(As,"PeerErrorType",()=>Rn);Es(As,"BaseConnectionErrorType",()=>Sd);Es(As,"DataConnectionErrorType",()=>Pf);Es(As,"SerializationType",()=>_c);Es(As,"SocketEventType",()=>Nr);Es(As,"ServerMessageType",()=>Vn);var Or=function(n){return n.Data="data",n.Media="media",n}({}),Rn=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),Sd=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),Pf=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),_c=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),Nr=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),Vn=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const Wm="1.5.5";class e2 extends Rf.EventEmitter{constructor(e,t,i,r,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const c=e?"wss://":"ws://";this._baseUrl=c+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Wm),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),Ke.log("Server message received:",s)}catch{Ke.log("Invalid server message",r.data);return}this.emit(Nr.Message,s)},this._socket.onclose=r=>{this._disconnected||(Ke.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Nr.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Ke.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Ke.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Vn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Nr.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class $m{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Or.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Ke.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;Ke.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Ke.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:Vn.Candidate,payload:{candidate:o.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Ke.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Sd.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Ke.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Sd.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Ke.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Ke.log("Listening for data channel"),e.ondatachannel=o=>{Ke.log("Received data channel");const c=o.channel;s.getConnection(t,i)._initializeDataChannel(c)},Ke.log("Listening for remote stream"),e.ontrack=o=>{Ke.log("Received remote stream");const c=o.streams[0],a=s.getConnection(t,i);if(a.type===Or.Media){const u=a;this._addStreamToMediaConnection(c,u)}}}cleanup(){Ke.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);Ke.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Ke.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Or.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Vn.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Rn.WebRTC,r),Ke.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(Rn.WebRTC,i),Ke.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();Ke.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Ke.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:Vn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(Rn.WebRTC,r),Ke.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(Rn.WebRTC,i),Ke.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;Ke.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),Ke.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){r.emitError(Rn.WebRTC,o),Ke.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Ke.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Ke.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Rn.WebRTC,t),Ke.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Ke.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Ke.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){Ke.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Xm extends Rf.EventEmitter{emitError(e,t){Ke.error("Error:",t),this.emit("error",new t2(`${e}`,t))}}class t2 extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class qm extends Xm{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var Pd;const pa=class pa extends qm{get type(){return Or.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||pa.ID_PREFIX+oi.randomToken(),this._negotiator=new $m(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Ke.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Ke.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case Vn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case Vn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:Ke.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Ke.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Pd=new WeakMap,ko(pa,Pd,pa.ID_PREFIX="mc_");let jl=pa;class n2{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:o}=this._options,c=new URL(`${t}://${i}:${r}${s}${o}/${e}`);return c.searchParams.set("ts",`${Date.now()}${Math.random()}`),c.searchParams.set("version",Wm),fetch(c.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Ke.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==oi.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===oi.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Ke.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Ld,Dd;const rs=class rs extends qm{get type(){return Or.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||rs.ID_PREFIX+Gm(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new $m(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Ke.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Ke.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Ke.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Pf.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Vn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Vn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Ke.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Ld=new WeakMap,Dd=new WeakMap,ko(rs,Ld,rs.ID_PREFIX="dc_"),ko(rs,Dd,rs.MAX_BUFFERED_AMOUNT=8388608);let Jl=rs;class Lf extends Jl{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Jl.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Ke.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class hu extends Lf{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Hm,this.serialization=_c.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=om(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=qS(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=am(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Ke.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class i2 extends Lf{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=_c.None}}class r2 extends Lf{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=oi.chunkedMTU){this.emitError(Pf.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=_c.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Id;const ma=class ma extends Xm{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:i2,json:r2,binary:hu,"binary-utf8":hu,default:hu},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:oi.CLOUD_HOST,port:oi.CLOUD_PORT,path:"/",key:ma.DEFAULT_KEY,token:oi.randomToken(),config:oi.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==oi.CLOUD_HOST?this._options.secure=oi.isSecure():this._options.host==oi.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Ke.setLogFunction(this._options.logFunction),Ke.logLevel=this._options.debug||0,this._api=new n2(t),this._socket=this._createServerConnection(),!oi.supports.audioVideo&&!oi.supports.data){this._delayedAbort(Rn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!oi.validateId(i)){this._delayedAbort(Rn.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(Rn.ServerError,r))}_createServerConnection(){const e=new e2(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Nr.Message,t=>{this._handleMessage(t)}),e.on(Nr.Error,t=>{this._abort(Rn.SocketError,t)}),e.on(Nr.Disconnected,()=>{this.disconnected||(this.emitError(Rn.Network,"Lost connection to server."),this.disconnect())}),e.on(Nr.Close,()=>{this.disconnected||this._abort(Rn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case Vn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Vn.Error:this._abort(Rn.ServerError,i.msg);break;case Vn.IdTaken:this._abort(Rn.UnavailableID,`ID "${this.id}" is taken`);break;case Vn.InvalidKey:this._abort(Rn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Vn.Leave:Ke.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Vn.Expire:this.emitError(Rn.PeerUnavailable,`Could not connect to peer ${r}`);break;case Vn.Offer:{const s=i.connectionId;let o=this.getConnection(r,s);if(o&&(o.close(),Ke.warn(`Offer received for existing Connection ID:${s}`)),i.type===Or.Media){const a=new jl(r,this,{connectionId:s,_payload:i,metadata:i.metadata});o=a,this._addConnection(r,o),this.emit("call",a)}else if(i.type===Or.Data){const a=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});o=a,this._addConnection(r,o),this.emit("connection",a)}else{Ke.warn(`Received malformed connection type:${i.type}`);return}const c=this._getMessages(s);for(const a of c)o.handleMessage(a);break}default:{if(!i){Ke.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,o=this.getConnection(r,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):Ke.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Rn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){Ke.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Rn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Ke.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new jl(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Ke.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Ke.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Ke.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;Ke.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Ke.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Ke.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Rn.ServerError,t))}};Id=new WeakMap,ko(ma,Id,ma.DEFAULT_KEY="peerjs");let wd=ma;var Ym=wd;const Km="perihelion-v2-",v0="ABCDEFGHJKLMNPQRSTUVWXYZ",x0=3,pu=new URLSearchParams(location.search).get("peer"),Zm=pu?{host:pu.split(":")[0],port:Number(pu.split(":")[1]||9e3),path:"/",secure:!1,debug:0}:{debug:0},s2=()=>Array.from({length:5},()=>v0[Math.random()*v0.length|0]).join("");function o2(n,e,t="concord"){const i=s2(),r=new Ym(Km+i,Zm),s=[{kind:"human",name:n,online:!0,faction:t}];let o=!1;const c=()=>s.map(l=>({kind:l.kind,name:l.name,online:l.online,difficulty:l.difficulty,faction:l.faction})),a=(l,h)=>{try{l&&l.open&&l.send(h)}catch{}},u={code:i,seats:s,get started(){return o},broadcast(l){for(const h of s)h.conn&&a(h.conn,l)},sendTo(l,h){a(s[l]?.conn,h)},lobby(){for(const[l,h]of s.entries())h.conn&&a(h.conn,{t:"lobby",seats:c(),you:l,code:i});e.seats(c())},addAI(l,h="boreal"){o||s.length>=x0||(s.push({kind:"ai",name:`AI · ${l}`,online:!0,difficulty:l,faction:h}),u.lobby())},remove(l){if(o||l===0||!s[l])return;const[h]=s.splice(l,1);h.conn&&(a(h.conn,{t:"kicked"}),setTimeout(()=>h.conn.close(),200)),u.lobby()},start(){o=!0},close(){r.destroy()}};return r.on("open",()=>e.open(i)),r.on("error",l=>e.error(l.type==="unavailable-id"?"Code clash, try again":`Connection problem (${l.type})`)),r.on("connection",l=>{l.on("data",h=>{if(h.t==="hello"){const d=bc(h.name),f=typeof h.token=="string"?h.token.slice(0,64):"";let m=f?s.findIndex((y,x)=>x!==0&&y.kind==="human"&&!y.online&&y.token===f):-1;if(m<0&&o){a(l,{t:"full",why:"Game already started"});return}if(m<0){if(s.length>=x0){a(l,{t:"full",why:"Room is full"});return}if(s.some(y=>y.online&&y.token&&y.token===f)){a(l,{t:"full",why:"Already in this room"});return}s.push({kind:"human",name:a2(s,d),token:f,faction:["concord","boreal","holds"].includes(h.faction)?h.faction:"concord"}),m=s.length-1}Object.assign(s[m],{conn:l,online:!0}),u.lobby(),o&&e.rejoin(m)}else if(h.t==="cmd"&&h.cmd&&typeof h.cmd=="object"){const d=s.findIndex(f=>f.conn===l);d>0&&e.cmd(d,h.cmd)}}),l.on("close",()=>{const h=s.findIndex(d=>d.conn===l);if(!(h<0)){if(!o){s.splice(h,1),u.lobby();return}s[h].online=!1,s[h].conn=null,u.lobby(),e.left(h)}})}),u}function bc(n){return String(n??"").replace(/[<>&"'`]/g,"").trim().slice(0,16)||"Player"}function a2(n,e){let t=e||"Player",i=2;for(;n.some(r=>r.name===t);)t=`${e} ${i++}`;return t}function l2(n,e,t,i,r="concord"){const s=new Ym(Zm);let o=null;const c={send(a){try{o&&o.open&&o.send(a)}catch{}},close(){s.destroy()}};return s.on("open",()=>{o=s.connect(Km+n.toUpperCase(),{reliable:!0});const a=setTimeout(()=>{o.open||i.error("No game found with that code")},9e3);o.on("open",()=>{clearTimeout(a),c.send({t:"hello",name:e,token:t,faction:r})}),o.on("data",u=>i.message(u)),o.on("close",()=>i.closed())}),s.on("error",a=>i.error(a.type==="peer-unavailable"?"No game found with that code":`Connection problem (${a.type})`)),c}const _l=(n,e,t=0)=>{n.owner=e,t&&(n.structures=n.structures.filter(i=>i.type!=="battery"),n.structures.push({type:"battery",level:t,left:0}),n.bhp=100*t)},jo=(n,e="concord",t="holds")=>{const i=[{faction:e,name:"You"},{faction:t,name:"Raiders"}],r=bs({seed:n,players:i,empty:!0});r.noEvents=!0;const s=r.homes[0],o=r.homes[1],c=r.bodies.find(a=>a.parent===s.id&&a.kind==="moon");return{players:i,game:r,home:s,foe:o,moon:c}},c2=(n,e)=>!!Dt(n,e),y0=(n,e,t=ct)=>n.bodies.filter(i=>i.owner===t&&i.parent===null&&i.kind!=="planet").sort((i,r)=>Math.abs(r.r-e.r)-Math.abs(i.r-e.r))[0],Ql={first:{name:"First command",text:"Tutorial",make(){const n=jo(11);return Jt(n.game,0,"frigate",n.home),Jt(n.game,0,"corvette",n.home),n.game.credits[0]=500,n.moon.trait=void 0,n.moon.structures=[],n.moon.bhp=0,n.game.scn={step:0,moon:n.moon.id},n},state(n,e){const t=n.scn,i=n.bodies[t.moon];if(!n.homes[e])return{text:"The capital has fallen.",done:"lose"};const s=n.ships.filter(c=>c.owner===e&&!c.st.civil);if(t.step===0&&s.some(c=>c.order&&c.order.body===i.id||c.at===i.id)&&(t.step=1),t.step<=1&&i.owner===e&&(t.step=2),t.step===2&&i.structures.some(c=>c.type==="mine")){t.step=3;const c=Jt(n,1,"corvette",n.homes[1]);fn(n,1,[c.id],{type:"orbit",body:i.id,profile:"hard"}),t.raider=c.id}return t.step===3&&!n.ships.some(c=>c.id===t.raider&&c.owner===1)&&(t.step=4),!s.length&&t.step<4?{text:"Your ships are lost.",done:"lose"}:{text:[`Tap one of your ships, then tap the moon ${i.name} and pick a course.`,`Stay in orbit until ${i.name} yields.`,`Tap ${i.name}, then Build, then Mine.`,"A raider is coming. Select your ships, tap the raider, then Pass or Match.","Well done."][t.step],done:t.step===4?"win":null,why:"First command"}}},blockade:{name:"Blockade run",text:"Get a tender past three warships",make(){const n=jo(23,"boreal","concord"),e=y0(n.game,n.home);_l(e,0);const t=Jt(n.game,0,"tender",n.home);return Jt(n.game,0,"corvette",n.home),Jt(n.game,0,"corvette",n.home),Jt(n.game,1,"frigate",e),Jt(n.game,1,"frigate",e),Jt(n.game,1,"escort",e),n.game.scn={post:e.id,tender:t.id,limit:900},n},state(n){const e=n.scn,t=n.bodies[e.post],i=Dt(n,e.tender),r=e.limit-n.time;return i?i.at===t.id?{text:"The tender is in.",done:"win",why:"Blockade run",clock:r}:r<=0||t.owner!==0?{text:"The outpost has fallen.",done:"lose",clock:0}:{text:`Get the tender ${i.name} into orbit of ${t.name}.`,clock:r}:{text:"The tender is lost.",done:"lose",clock:r}}},hunt:{name:"Raider hunt",text:"Find the ship taking your freighters",make(){const n=jo(37,"concord","holds");for(const i of n.game.bodies)(i.kind==="asteroid"||i.parent===n.home.id)&&_l(i,0);for(const i of n.game.bodies)i.owner===0&&!i.home&&(i.stock=60+i.id*7);Jt(n.game,0,"frigate",n.home),Jt(n.game,0,"corvette",n.home);const e=n.game.bodies.find(i=>i.kind==="asteroid"),t=Jt(n.game,1,"corvette",e);return n.game.scn={raider:t.id,limit:1200,lost:0,seen:0},n},state(n){const e=n.scn,t=Dt(n,e.raider),i=e.limit-n.time;for(const r of n.events)!r.scn&&(r.type==="raided"||r.type==="seized")&&(r.owner===0||r.from===0)&&(r.scn=!0,e.lost++);if(!t||t.owner!==1)return{text:"The raider is finished.",done:"win",why:"Raider hunt",clock:i};if(e.lost>=3||i<=0)return{text:"The raider got away with it.",done:"lose",clock:Math.max(0,i)};if(!t.order&&n.time>20){let r=null,s=1e9;for(const o of n.ships){if(o.owner!==0||!o.st.civil)continue;const c=Math.hypot(o.x-t.x,o.z-t.z);c<s&&(s=c,r=o)}r&&fn(n,1,[t.id],{type:"attack",ship:r.id,mode:"match",d0:1.2,profile:s>200?"cruise":"hard"})}return{text:`Destroy the raider. Freighters lost: ${e.lost} of 3.`,clock:i}}},hold:{name:"Hold until relief",text:"Keep your moon for twelve minutes",make(){const n=jo(51,"concord","boreal");_l(n.moon,0,1),Jt(n.game,0,"frigate",n.moon),Jt(n.game,0,"escort",n.moon);const e=["frigate","frigate","corvette","corvette"].map(t=>Jt(n.game,1,t,n.foe).id);return fn(n.game,1,e,{type:"orbit",body:n.moon.id,profile:"hard"}),n.game.scn={moon:n.moon.id,limit:720,foes:e},n},state(n){const e=n.scn,t=n.bodies[e.moon],i=e.limit-n.time;for(const r of e.foes){const s=Dt(n,r);s&&!s.order&&s.at!==t.id&&fn(n,1,[r],{type:"orbit",body:t.id,profile:"hard"})}return t.owner!==0?{text:`${t.name} has fallen.`,done:"lose",clock:Math.max(0,i)}:i<=0?{text:"Relief has arrived.",done:"win",why:"Hold until relief",clock:0}:{text:`Keep ${t.name} until the clock runs out.`,clock:i}}},convoy:{name:"Convoy",text:"Bring two of three freighters home",make(){const n=jo(64,"boreal","holds"),e=y0(n.game,n.home);_l(e,0);const t=[0,1,2].map(()=>{const r=Jt(n.game,0,"freighter",e,{cargo:200,src:null});return r.order={type:"orbit",body:n.home.id,profile:"cruise",amax:r.st.accel},r.depart=e.id,r.at=null,r.id});Jt(n.game,0,"frigate",e),Jt(n.game,0,"escort",e);const i=[Jt(n.game,1,"corvette",n.foe).id,Jt(n.game,1,"corvette",n.foe).id,Jt(n.game,1,"frigate",n.foe).id];return n.game.scn={fr:t,hunters:i,home:0},n},state(n){const e=n.scn;for(const i of n.events)!i.scn&&i.type==="freight"&&i.owner===0&&i.n>=150&&(i.scn=!0,e.home++);const t=e.fr.filter(i=>c2(n,i)).length;for(const i of e.hunters){const r=Dt(n,i);if(!r||r.order||n.time<15)continue;const s=e.fr.map(o=>Dt(n,o)).filter(Boolean).sort((o,c)=>Math.hypot(o.x-r.x,o.z-r.z)-Math.hypot(c.x-r.x,c.z-r.z))[0];s&&fn(n,1,[i],{type:"attack",ship:s.id,mode:"pass",profile:"hard"})}return e.home>=2?{text:"The convoy is in.",done:"win",why:"Convoy"}:e.home+t<2?{text:"Too few got through.",done:"lose"}:{text:`Freighters home: ${e.home}. Still under way: ${t}.`}}}},u2=Object.keys(Ql);function jm(n,e){const t=n.homes[e];if(!t)return null;const i=sn(n,t,n.time),r=o=>{const c=sn(n,o,n.time);return Math.hypot(c.x-i.x,c.y-i.y,c.z-i.z)};return n.bodies.filter(o=>o.owner===ct&&!Xn(o)&&o.kind!=="asteroid").sort((o,c)=>r(o)-r(c))[0]||null}const na=[{title:"Your capital",text:n=>`${n.touch?"Tap":"Click"} <em>${n.home.name}</em>.`,world:n=>n.home.id,done:n=>n.ui.selBody===n.home.id},{title:"The view",text:n=>n.touch?"Drag to turn. Pinch to zoom. Two fingers to move.":"Drag to move. Right-drag to turn. Scroll to zoom.",done:n=>n.moved>1},{title:"Credits",text:()=>"Top left: your credits and income a day. The bars are your ships and your ship limit.",point:"#purse"},{title:"Select ships",text:n=>`${n.touch?"Tap":"Click"} one of your ships at <em>${n.home.name}</em>.`,world:n=>n.home.id,done:n=>n.ui.sel.size>0},{title:"Send them",text:n=>`${n.ui.sel.size?"":"Select your ships. "}${n.touch?"Tap":"Click"} <em>${n.target.name}</em> and pick a course.`,world:n=>n.target.id,point:'[data-a="go"]',on:"order"},{title:"Time",text:()=>"Travel takes days. This button makes time run faster.",point:"#warp",done:n=>n.warp>1},{title:"Take the world",text:n=>`<em>${n.target.name}</em> yields when your ships hold its orbit.`,world:n=>n.target.id,done:n=>n.gained>0},{title:"Build",text:n=>`Select <em>${n.home.name}</em>. ${n.touch?"Tap":"Click"} Build and pick a structure.`,world:n=>n.ui.selBody===n.home.id?null:n.home.id,point:n=>n.ui.build?'[data-a="build"]:not(.no)':'[data-a="slot"]',on:"build"},{title:"Build a ship",text:n=>`Select <em>${n.home.name}</em> and pick a ship.`,world:n=>n.ui.selBody===n.home.id?null:n.home.id,point:'[data-a="ship"]:not(.no)',on:"ship"},{title:"Research",text:()=>"Open research (the flask) and pick a box.",point:n=>n.sheet?'[data-a="research"]':"#rnd",on:"research"},{title:"Winning",text:()=>"Take the enemy capital (double ring). It needs 3 of your ships in its orbit.",last:!0}],Pe=n=>document.getElementById(n),en=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ft=n=>{const e=n/Ca;if(e<1)return`${Math.max(1,Math.round(e*24))}h`;if(e<100)return`${Math.round(e)}d`;const t=e/30.4;return t<24?`${t<10?t.toFixed(1):Math.round(t)}mo`:`${(e/365).toFixed(1)}y`},Jm=n=>{const e=Math.floor(n/Ca);return`Year ${Math.floor(e/365)+1} · Day ${e%365+1}`};let Ta=null,Qm=0;const Td=new Set,lo=(n,e)=>{if(Ta&&performance.now()-Qm<1500&&n.contains(Ta)){n._pending=e,Td.add(n);return}n._pending=void 0,n._html!==e&&(n._html=e,d2(n,e))};function d2(n,e){const t=document.createElement("template");t.innerHTML=e;const i=[...t.content.childNodes],r=[...n.childNodes];if(i.length!==r.length){n.innerHTML=e;return}i.forEach((s,o)=>{const c=r[o];(c.nodeType!==s.nodeType||(s.nodeType===1?s.outerHTML!==c.outerHTML:s.textContent!==c.textContent))&&n.replaceChild(s,c)})}const eg=()=>{Ta=null;for(const n of Td)Td.delete(n),n._pending!==void 0&&lo(n,n._pending)};window.addEventListener("pointerdown",n=>{Ta=n.target,Qm=performance.now()},!0);window.addEventListener("pointerup",()=>setTimeout(eg,300),!0);window.addEventListener("pointercancel",eg,!0);const at=(()=>{const n={faction:"concord",rivals:1,level:"normal",sound:!0,ui:1,gfx:"high",conquest:!1,winBy:null,dev:!1,name:"",done:{}};try{return{...n,...JSON.parse(localStorage.getItem("perihelion2")||"{}")}}catch{return n}})(),Si=()=>{try{localStorage.setItem("perihelion2",JSON.stringify(at))}catch{}},f2=(()=>{try{let n=localStorage.getItem("perihelion2-key");return n||(n=Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("perihelion2-key",n)),n}catch{return""}})();document.documentElement.style.setProperty("--ui-mult",at.ui);let _s={unlock(){},setEnabled(){},setVolume(){},update(){},play(){}};{const n=Object.assign({"./audio.js":()=>yg(()=>import("./audio-CJGKeWsw.js"),[],import.meta.url)});n["./audio.js"]&&n["./audio.js"]().then(e=>{_s=e.createAudio(),_s.setEnabled(at.sound)}).catch(()=>{})}const ye=(n,e)=>{at.sound&&_s.play(n,e)};window.addEventListener("pointerdown",()=>_s.unlock(),{once:!1,capture:!0});window.addEventListener("touchend",()=>_s.unlock(),{capture:!0});const h2=new URLSearchParams(location.search),tg=()=>h2.get("gfx")||(at.gfx==="low"?"low":"high"),Be=kS(Pe("scene"),Pe("plot"),{quality:tg(),onSound:(n,e,t)=>ye(n,{pan:e,gain:t})});Be.resize();window.addEventListener("resize",()=>Be.resize());let Nt=null,N=null,Ed=[],ae=0,At="demo",yi=!1,Br=1,zn=null,Xi=null,ls=!1,kl=[],_0=0;const z={me:0,sel:new Set,selBody:null,target:null,targetShip:null,routes:null,routeKey:null,paths:new Map,colors:[],fx:[],dev:!1,plot:null,warp:1,dragging:!1,build:!1,drive:"hard",plotMode:!1},mo=()=>At==="solo"||At==="host"||At==="guest",Zr=()=>mo()&&N&&!ls,Ni=n=>n.owner===ae,Kn=()=>N.ships.filter(n=>z.sel.has(n.id)&&n.owner===ae);function Io(n,e={}){N=n,ae=e.me??0,At=e.mode||"solo",Xi=e.scn||null,Ed=[],(e.players||[]).forEach((i,r)=>{i.ai&&At!=="guest"&&Ed.push(Qg(N,r,i.ai,N.seed))}),ls=!1,yi=!1,Br=e.warp||1,kl=[],z.me=ae,z.dev=At==="demo"||at.dev&&At==="solo",z.colors=rm(N),document.documentElement.style.setProperty("--me",z.colors[ae]||ln),Hr(),z.selBody=null;for(const i of N.events)i.seen=!0;Be.build(N);const t=N.homes[ae]||N.bodies.find(i=>i.owner===ae)||N.bodies[0];if(At==="demo")Be.orbit.follow=null,Be.orbit.target.set(0,0,0),Be.orbit.dist=1100,Be.orbit.pol=1.05;else if(e.look)Be.orbit.follow=null,Be.orbit.ship=null,Be.orbit.target.set(e.look.x,0,e.look.z),Be.orbit.dist=e.look.dist;else{const i=sn(N,t,N.time),r=Math.max(12,...N.bodies.filter(s=>s.parent===t.id).map(s=>s.r),t.parent!==null?t.r*1.6:0);Be.focus(N,t.id,!1),Be.orbit.target.set(i.x,i.y,i.z),Be.orbit.dist=r*5.5,Be.orbit.pol=.8}Pe("hud").hidden=At==="demo",Pe("date").hidden=At==="demo",Nt=null,z.tutWorld=null,Pe("tutglow").textContent="",e.tutorial&&P2(),Pe("title").hidden=At!=="demo",Pe("panel").hidden=!0,Pe("sheet").hidden=!0,Pe("strip").hidden=!0,Pe("feed").innerHTML="",Pe("brief").hidden=!Xi&&!(Nt&&!Nt.free),window.__perihelion={game:N,view:Be,ui:z,S:Yg,act:vn,get me(){return ae}}}function ec(){const n=[...Ra].sort(()=>Math.random()-.5),e=[{faction:n[0],ai:"hard"},{faction:n[1],ai:"hard"}];Io(bs({seed:Math.random()*1e9|0,players:e}),{mode:"demo",players:e,me:-2,warp:3})}function vn(n){if(!(!Zr()||yi&&At!=="solo")){if(At==="guest"){zn.send({t:"cmd",cmd:n});return}ng(ae,n),Nt&&!Nt.free&&(Nt.did.add(n.t==="order"&&!n.order?"stop":n.t),wc())}}function ng(n,e){if(!N||!N.alive[n])return;const t=e.body!=null?N.bodies[e.body]:null;if(t&&t.owner!==n)return;const i=Array.isArray(e.ids)?e.ids.filter(r=>Number.isInteger(r)).slice(0,20):[];switch(e.t){case"order":{const r=e.order;if(r===null)return fn(N,n,i,null);if(!r||typeof r!="object")return;const s=hs[r.profile]?r.profile:"cruise";if(r.type==="orbit"&&N.bodies[r.body])fn(N,n,i,{type:"orbit",body:r.body,profile:s,loose:!!r.loose,shape:r.shape==="column"?"column":"wedge",...N.bodies[r.via]&&N.bodies[r.via].kind==="planet"?{via:r.via,side:r.side<0?-1:1}:{}});else if(r.type==="strike"&&N.bodies[r.body])fn(N,n,i,{type:"strike",body:r.body,profile:s,loose:!!r.loose,shape:r.shape==="column"?"column":"wedge"});else if(r.type==="attack"){const o=Dt(N,r.ship);o&&o.seen[n]&&fn(N,n,i,{type:"attack",loose:!!r.loose,shape:r.shape==="column"?"column":"wedge",ship:r.ship,mode:r.mode==="pass"||r.mode==="board"?r.mode:"match",d0:o.st.civil||as(o)?1.2:3,profile:s})}else if(r.type==="form"){const o=Dt(N,r.lead);o&&o.owner===n&&fn(N,n,i,{type:"form",lead:o.id})}else if(r.type==="burn"){const o=Math.hypot(r.x,r.y,r.z)||1;fn(N,n,i,{type:"burn",x:r.x/o,y:r.y/o,z:r.z/o,left:Math.min(60,Math.max(1,+r.left||1))})}return}case"stance":return ep(N,n,i,e.st||{});case"salvo":{const r=e.ship!=null?Dt(N,e.ship):null;r&&r.seen[n]?bu(N,n,i,{ship:r.id}):N.bodies[e.at]&&bu(N,n,i,{body:e.at});return}case"build":return t&&Dr(N,t,e.type);case"upgrade":{const r=t&&Ai(t,e.type,e.i??null);return r&&ia(N,t,r)}case"ship":return t&&Hd(N,t,e.cls);case"cancel":return t&&Gd(N,t,e.i);case"demolish":return t&&V0(N,t,e.type,e.i??null);case"mega":return t&&tf(N,t,e.key);case"mstrike":{const r=N.bodies[e.at];return r&&nf(N,n,r)}case"dark":return rf(N,n);case"research":return Vd(N,n,e.line,e.key);case"agent":{const r=N.bodies[e.at];return r&&Fl(N,n,r)}case"recall":{const r=N.bodies[e.at];return r&&$0(N,n,r)}case"op":{const r=N.bodies[e.at];return r&&Wd(N,n,r,e.op)}case"sabotage":{const r=N.bodies[e.at];return r&&$d(N,n,r,e.what==="yard"?"yard":"battery")}case"buy":{const r=N.bodies[e.at];return r&&Xd(N,n,r)}}}function p2(n){const e=n.order&&n.order.type==="form"&&Dt(N,n.order.lead)||n;return N.ships.filter(t=>Ni(t)&&!t.st.civil&&t.at===null&&(t===e||t===n||t.grp===e.grp||t.order&&t.order.type==="form"&&t.order.lead===e.id))}function Hr(){z.armed=null,z.struct=null,z.sel=new Set,z.target=null,z.targetShip=null,z.routes=null,z.routeKey=null,z.build=!1,z.plotMode=!1,z.plot=null}function ca(n){Hr(),z.selBody=null;for(const e of n)z.sel.add(e.id);ye("select")}function m2(){const n=Math.min(...Kn().map(t=>t.dv)),e=(z.routes||[]).find(t=>t.key==="cruise"&&t.dv<=n)||(z.routes||[]).find(t=>t.dv<=n);return e?(Mc("go",e.key),!0):!1}function g2(n,e){if(!Zr())return;if(!Pe("sheet").hidden){Pe("sheet").hidden=!0,ye("close");return}const t=Be.pick(n,e);if(!t){z.target!=null||z.targetShip!=null?(z.target=null,z.targetShip=null,z.routes=null):(Hr(),z.selBody=null),ye("close"),Pn();return}if(!z.sel.size)return;const i=Kn();if(t.ship!=null){const r=Dt(N,t.ship);if(r&&!(Ni(r)&&(z.sel.has(r.id)||r.at!==null&&i.every(o=>o.at===r.at)))){z.targetShip=r.id,z.target=null,z.routes=null,ye("tap"),Pn();return}const s=Be.pick(n,e,!1);s&&s.body!=null&&!i.every(o=>o.at===s.body)&&(Ad(s.body),Pn());return}t.body!=null&&!i.every(r=>r.at===t.body)&&(Ad(t.body),Pn())}function Ad(n){z.target=n,z.targetShip=null,z.routeKey=null,ig(),ye("tap")}function ig(){if(z.target==null||!z.sel.size){z.routes=null;return}z.routes=uo(N,[...z.sel],z.target).filter(n=>n.reach)}function v2(n,e,t){if(!Zr())return;if(!Pe("sheet").hidden){Pe("sheet").hidden=!0,ye("close");return}let i=Be.pick(n,e);if(i&&i.ship!=null&&z.sel.size){const r=Dt(N,i.ship),s=Be.pick(n,e,!1);r&&Ni(r)&&s&&!Kn().every(o=>o.at===s.body)&&(i=s)}if(i&&i.ship!=null){const r=Dt(N,i.ship);if(!r)return;if(Ni(r)&&!r.st.civil&&z.sel.size&&!z.sel.has(r.id)&&!(r.at!==null&&Kn().every(s=>s.at===r.at)))z.targetShip=r.id,z.target=null,z.routes=null,ye("tap");else if(Ni(r)&&!r.st.civil)z.sel.has(r.id)&&z.sel.size>1?ca([r]):ca(r.at!==null?N.ships.filter(s=>Ni(s)&&!s.st.civil&&s.at===r.at):p2(r)),Be.followShip(r.id,t);else if(Ni(r))Hr(),z.selBody=null,z.targetShip=r.id,ye("tap"),Be.followShip(r.id,t);else{if(t&&!Ea&&z.sel.size&&z.targetShip===r.id){Mc("match",String(r.id));return}z.targetShip=r.id,z.target=null,z.routes=null,z.sel.size||(z.selBody=null),ye("tap"),t&&Be.followShip(r.id,!0)}return}if(i&&i.body!=null){const r=N.bodies[i.body],s=Kn();if(t&&!Ea&&s.length&&z.target===r.id&&m2())return;if(t&&Be.focus(N,r.id,!0),s.length&&!s.every(o=>o.at===r.id)){Ad(r.id);return}Hr(),z.selBody=r.id,ye("select"),t||Be.focus(N,r.id,!1);return}if(z.target!=null||z.targetShip!=null){z.target=null,z.targetShip=null,z.routes=null;return}Hr(),z.selBody=null}const b0=n=>`style="--v:${Math.round(Math.max(0,Math.min(1,n))*25)*4}%"`,Cd=["drive","reactor","weapons","sensors"],x2={drive:"Drive",reactor:"Reactor",weapons:"Weapons",sensors:"Sensors"};function Jo(n,e=!0){const t=Cd.some(i=>n.out[i]>0);return`<button class="chip ${e?"on":""}" data-a="chip" data-v="${n.id}" title="${en(n.name)}">${bl(n.cls,z.colors[n.owner])}<span class="bars"><i class="${n.hull<n.st.hull*.35?"low":""}" ${b0(n.hull/n.st.hull)}></i><i class="f" ${b0(n.dv/n.st.dv)}></i></span>${t?'<span class="dmg"></span>':""}${Ci(n)?`<span class="rk">${"<i></i>".repeat(Ci(n))}</span>`:""}</button>`}const Ct=(n,e)=>`${n}<em>${e}</em>`,M0={hard:"Hard burn",cruise:"Cruise",dark:"Dark",sling:"Slingshot"},gi={"go:hard":"Fastest. Easy to see.","go:cruise":"Uses less fuel.","go:dark":"Slowest. Hard to see.","go:sling":"Round a planet to save fuel.",strike:"Fly past and shoot the battery.",pass:"Fly past at speed and shoot.",match:"Pull alongside and fight.",board:"Pull alongside and take the ship.",salvo:"Fire all torpedoes.",cancel:"Stop building this ship.",join:"Fly to this ship and stay with it.",pick:"Select this ship.",torps:"Ships fire torpedoes when they can.",fire:"Ships shoot when they can.",evade:"Harder to hit. Uses fuel.",plot:"Drag from the ship.",cut:"Stop the drive.",retreat:"Go to your nearest world.",demolish:"Remove this.",yard:"Builds, repairs and rearms ships.",mine:"Earns credits.",refinery:"Earns credits. Refuels ships faster.",battery:"Shoots enemy ships in orbit.",habitat:"Raises your ship limit.",lab:"Speeds up research.",exchange:"Earns credits.",array:"This world sees further.",depot:"Refuels ships faster. Rearms torpedoes.","ship:corvette":"Small and fast. Hard to see.","ship:frigate":"All-round warship.","ship:escort":"Shoots down torpedoes near it.","ship:battleship":"Big guns. Heavy armour. Slow.","ship:tender":"Refuels and rearms ships next to it.",agent:"Shows this world and the ships near it.",recall:"Bring the agent back.",buy:"This world joins you.","sab:battery":"Turns the battery off.","sab:yard":"Delays the ship being built.","op:steal":"Takes part of this world's income.","op:incite":"This world yields faster.","op:watch":"Stop and only watch.","formation:wedge":"Side by side behind the leader.","formation:column":"One behind another.","formation:loose":"Each ship at its own speed."},y2={wedge:"Wedge",column:"Column",loose:"Off"},tc=n=>n[0]&&n[0].shape||"wedge",rg=n=>(Math.round(n*10)/10).toString(),Co=n=>{const e=Math.abs(n)*Ca;return e>=10?Math.round(e).toString():rg(e)},Gr=n=>`${n<0?"−":"+"}${Co(n)}/d`,jt=(n,e,t="",i="")=>`<span class="st ${t}" ${i}><i>${n}</i>${e}</span>`;function mu(n,e,t=1){const i=o=>qt(N,ae,o),r=e.trait,s=Ae.structures[n];switch(n){case"mine":return[["Income",Gr(s.income*t*(r==="seam"?2:1)*(i("deepmine")?1.5:1))]];case"refinery":return[["Income",Gr(s.income*t*(r==="deut"?1.5:1))],["Refuel","×3"]];case"exchange":return[["Income",Gr(s.income*t)]];case"habitat":return[["Ships",`+${t*(r==="garden"?2:1)*(i("arcology")?2:1)}`]];case"lab":return[["Research",`+${t*(r==="archive"?100:50)}%`]];case"battery":return[["Strength",Ae.batteryHp*t*(r==="fortress"?2:1)*(e.home?2:1)],["Guns",t+(e.home?1:0)]];case"yard":return t>1||r==="hulk"?[["Build speed",`+${(t>1?50:0)+(r==="hulk"?50:0)}%`]]:[];case"array":return[["Sight",`×${rg(Ae.arraySensor*(r==="listening"?2:1))}`]];case"depot":return[["Refuel","×3"],["Torpedoes","rearmed"]];default:return[]}}function _2(n){const e=Kr(N,ae,n),t=Ln[n],i=z.selBody!=null?N.bodies[z.selBody]:null;return[["Hull",e.hull],e.rails.length?["Rails",e.rails.length]:null,e.mag?["Torpedoes",e.mag]:null,t.stores?["Spares",t.stores]:null,["Defence",e.pdc],["Thrust",Math.round(e.accel*1e3)],["Fuel",Math.round(e.dv)],["Build",Ft(Bd(N,ae,n,i))],["Upkeep",`${Co(Ae.upkeep[n])}/d`],Xr(n)>1?["Fleet places",Xr(n)]:null].filter(Boolean)}function b2(n){const e=n.mega;if(e){const i=ci(N,n.owner,e.key);let r="Done",s="";if(!e.done)r=Ft(Math.ceil(e.left/fc(N,n.owner)/8)*8),s=`<span class="prog" style="width:${Math.round((1-e.left/e.total)*20)*5}%"></span>`;else if(e.key==="ark")r=Ft(Math.ceil(e.hold/8)*8);else if(e.key==="strike"){const c=N.strikeReady[n.owner]-N.time;r=N.strikes.some(a=>a.owner===n.owner)?"Fired":c>0?Ft(Math.ceil(c/8)*8):"Ready"}let o=`<div class="row">${Et("megaInfo",e.key,Ct(Je("star"),i),r,"mega",s)}`;if(e.done&&e.key==="blackout"){const c=Fa(N,ae),a=N.blackout[ae];o+=Et("dark","",Ct(Je("dark"),"Go dark"),c==="On"?Ft(Math.ceil((a.until-N.time)/8)*8):c==="Not ready"?Ft(Math.ceil((a.ready-N.time)/8)*8):"Ready",c==="On"?"on":c?"no":"")}return o+"</div>"}const t=O0.filter(i=>{const r=So(N,n,i);return!r||r==="Not enough credits"});return t.length?`<div class="row">${t.map(i=>Et("mega",i,Ct(Je("star"),ci(N,ae,i)),un[i].cost,`mega ${So(N,n,i)?"no":""}`)).join("")}</div>`:""}const go=n=>String(n).split(".")[0],ua=n=>{const e=String(n).split(".")[1];return e==null?null:+e},da=(n,e)=>Ai(n,go(e),ua(e));function Df(n,e){const t=z.selBody!=null&&N?N.bodies[z.selBody]:null,i=t&&_o?_o(N,ae,t):1;if(n==="trait")return{text:fs[e]?.text||"",stats:[]};if(n==="build"&&t)return{text:gi[e],stats:[...mu(e,t,1),["Build",Ft(Ae.structures[e].time/i)]]};if(n==="upgrade"&&t){const r=go(e),s=(da(t,e)?.level||1)+1;return{text:`${Ae.structures[r].name} level ${s}`,stats:[...mu(r,t,s),["Build",Ft(Ae.structures[r].time/i)]]}}if(n==="demolish"&&t){const r=da(t,e);return{text:gi.demolish,stats:r?[["Refund",uc(r)],["Takes",Ft(Ae.scrapTime)]]:[]}}if(n==="struct"&&t){const r=da(t,e),s=go(e);return{text:"",stats:r?[[Ae.structures[s].name,Ae.structures[s].maxLevel>1?`level ${r.level}`:""],...mu(s,t,r.level)]:[]}}if(n==="ship")return{text:gi[`ship:${e}`],stats:_2(e)};if(n==="mega"||n==="megaInfo"){const r=un[e];return{text:r.text,stats:n==="mega"?[["Cost",r.cost],["Build",Ft(r.time/fc(N,ae))]]:[]}}if(n==="mstrike")return{text:"Fire at this capital.",stats:[["Flight",Ft(un.strike.flight)],["Reload",Ft(un.strike.cooldown)]]};if(n==="dark")return{text:"Hide all your ships.",stats:[["Lasts",Ft(un.blackout.last)],["Recharge",Ft(un.blackout.cooldown)]]};if(n==="cancel"&&t){const r=t.queue[+e];return{text:gi.cancel,stats:r?[["Refund",Math.round(qr(N,ae,r.cls)*.8)]]:[]}}if(n==="board"){const r=Dt(N,+e);return{text:gi.board,stats:r?[["Chance",`${Math.round(qd(r,Kn())*100)}%`]]:[]}}return n==="agent"?{text:gi.agent,stats:[["Arrives",Ft(Fn.travel)]]}:n==="sab"?{text:gi[`sab:${e}`],stats:[[e==="battery"?"Off for":"Delay",Ft(e==="battery"?90:60)],["Risk",`${Math.round(Fn.opRisk*100)}%`]]}:n==="op"&&e==="steal"?{text:gi["op:steal"],stats:[["Share",`${Math.round(Fn.skim*100)}%`]]}:n==="op"&&e==="incite"?{text:gi["op:incite"],stats:[["Yield","×2"]]}:n==="formation"?{text:gi[`formation:${tc(Kn())}`],stats:[]}:n==="drive"?{text:gi[`go:${e}`],stats:[]}:{text:gi[`${n}:${e}`]||gi[n]||"",stats:[]}}const M2=n=>n.length?`<div class="sts">${n.map(([e,t])=>jt(e,t)).join("")}</div>`:"";function S2(n,e){const t=Df(n,e);return[t.text,...t.stats.map(([i,r])=>`${i} ${r}`)].filter(Boolean).join(" · ")}const S0=new Set(["mega","mstrike","dark","go","strike","pass","match","board","salvo","join","retreat","cut","build","ship","upgrade","demolish","agent","recall","buy","sab","op","cancel"]);let Ea=!1;window.addEventListener("pointerdown",n=>{Ea=n.pointerType!=="mouse"},!0);const Et=(n,e,t,i,r="",s="")=>`<button class="tile ${r} ${z.armed===`${n}:${e}`&&z.armedLabel?"arm":""}" title="${en(S2(n,e))}" data-a="${n}" data-v="${e}">${t}${i?`<small>${i}</small>`:""}${s}</button>`;function w2(){const n=Kn(),e=[];if(n.length===1){const t=n[0];e.push(jt("Hull",`${Math.round(t.hull)}/${t.st.hull}`,t.hull<t.st.hull*.35?"bad":""),jt("Fuel",`${Math.round(t.dv/t.st.dv*100)}%`)),t.st.mag&&e.push(jt("Torpedoes",`${t.torps}/${t.st.mag}`)),t.st.stores&&e.push(jt("Spares",`${Math.floor(t.stores)}/${t.st.stores}`)),e.push(jt("Upkeep",`${Co(Ae.upkeep[t.cls])}/d`));for(const r of Cd)t.out[r]>0&&e.push(jt(x2[r],"out","bad"));const i=(t.ready||0)-N.time;t.at!==null&&i>0&&e.push(jt(t.pending||t.pend!==void 0?"Leaves in":"Ready in",Ft(Math.ceil(i/4)*4)))}else if(n.length){const t=n.reduce((s,o)=>s+o.st.mag,0);e.push(jt("Fuel",`${Math.round(Math.min(...n.map(s=>s.dv/s.st.dv))*100)}%`)),t&&e.push(jt("Torpedoes",`${n.reduce((s,o)=>s+o.torps,0)}/${t}`)),e.push(jt("Upkeep",`${Co(n.reduce((s,o)=>s+Ae.upkeep[o.cls],0))}/d`));const i=n.filter(s=>Cd.some(o=>s.out[o]>0)).length;i&&e.push(jt("Systems out",`${i} ship${i>1?"s":""}`,"bad"));const r=Math.max(...n.map(s=>s.at!==null?(s.ready||0)-N.time:0));r>0&&e.push(jt(n.some(s=>s.pending||s.pend!==void 0)?"Leaves in":"Ready in",Ft(Math.ceil(r/4)*4)))}else if(z.selBody!=null){const t=N.bodies[z.selBody],i=Xn(t);t.owner===ae&&e.push(t.blockaded?jt("Income","blockaded","bad"):(t.stun||0)>N.time?jt("Income","stopped","bad"):jt("Income",Gr($r(t,N)*ac(N,t)))),t.mega&&t.owner!==ae&&e.push(t.mega.done?jt(ci(N,t.owner,t.mega.key),t.mega.key==="ark"?`leaves in ${Ft(Math.ceil(t.mega.hold/8)*8)}`:"done"):jt(ci(N,t.owner,t.mega.key),`${Math.floor((1-t.mega.left/t.mega.total)*10)*10}%`)),t.owner===ae&&!t.home&&e.push(jt("Waiting",Math.round(t.stock/5)*5)),i&&e.push(jt("Battery",`${Math.round(t.bhp)}/${i}`,t.bhp<=0?"bad":""),jt("Guns",Pa(t))),t.owner!==ae&&t.home&&e.push(jt("Ships needed",zd)),t.trait&&e.push(`<button class="st gold" data-a="trait" data-v="${t.trait}">${Je("star")}${fs[t.trait].name}</button>`)}else if(z.targetShip!=null){const t=Dt(N,z.targetShip);t&&t.st.civil&&t.cargo!=null&&(t.owner===ae||t.owner<0)&&e.push(jt("Cargo",Math.round(t.cargo)))}return e.length?`<div class="sts">${e.join("")}</div>`:""}function T2(){if(!Zr())return"";const n=Kn();if(n.length){const e=n.length===1?n[0]:null;let t=`<div class="head"><b>${e?en(e.name):`${n.length} ships`}</b><small>${e?[Ln[e.cls].name,sg[Ci(e)]].filter(Boolean).join(" · "):""}</small><button class="x" data-a="clear">${Je("close")}</button></div>`;const i=N.ships.filter(s=>Ni(s)&&!s.st.civil&&!z.sel.has(s.id)&&n.some(o=>o.at!==null?s.at===o.at:s.at===null&&s.grp!=null&&s.grp===o.grp));t+=`<div class="row">${n.map(s=>Jo(s)).join("")}${i.map(s=>Jo(s,!1)).join("")}</div>`;const r=n.find(s=>s.order&&s.at===null);if(r&&z.target==null&&z.targetShip==null){const s=r.order,o=s.type==="form"?`With ${Dt(N,s.lead)?.name||""}`:s.body!=null?N.bodies[s.body].name:s.type==="attack"?Dt(N,s.ship)?.name||"contact":"";t+=`<div class="sub">${Je(s.type==="burn"?"plot":s.type==="form"?"match":s.type==="orbit"?s.via!=null&&!s.done?"sling":s.profile:"strike")} ${en(o)}${s.type!=="burn"&&s.type!=="form"&&r.tau?`<span class="num">${Ft(Math.ceil(r.tau/5)*5)}</span>`:""}</div>`}if(z.target!=null){const s=N.bodies[z.target],o=Math.min(...n.map(a=>a.dv));t+=`<div class="sub">${Je("arrived")} ${en(s.name)}<span class="cols">Time · Fuel</span></div><div class="row">`;const c=Math.min(...n.map(a=>a.st.dv));for(const a of z.routes||[]){const u=a.dv>o;t+=Et("go",a.key,Ct(Je(a.key),M0[a.key]),`${Ft(Math.round(a.time/5)*5)} · <b class="${u?"bad":""}">${Math.round(a.dv/Math.max(.01,c)*20)*5}%</b>`,`wide ${u?"no":""}`)}s.owner!==ae&&Xn(s)>0&&s.bhp>0&&(t+=Et("strike",s.id,Ct(Je("strike"),"Firing pass"),"","wide")),(z.routes||[]).length||(t+='<span class="hint">No course</span>'),t+="</div>"}else if(z.targetShip!=null){const s=Dt(N,z.targetShip);if(s&&s.owner===ae&&!s.st.civil)t+=`<div class="sub">${Je("match")} ${en(s.name)}</div><div class="row">${Et("join",s.id,Ct(Je("match"),"Join"),"","wide")}${Et("pick",s.id,Ct(Je("check"),"Select"),"","wide")}</div>`;else if(s&&(z.dev||s.seen[ae])){const o=s.seen[ae]===2;t+=`<div class="sub" style="color:${s.owner<0?Qt:Gt}">${Je("contact")} ${s.derelict?`Derelict ${Ln[s.cls].name.toLowerCase()}`:s.owner<0?"Convoy":o?`${en(s.name)} · ${Ln[s.cls].name}`:"Unknown contact"}<span class="cols">Time · Fuel</span></div><div class="row">`;const c=`${n.map(u=>u.id)}:${s.id}`;(z.icptKey!==c||Math.abs(N.time-z.icptT)>4)&&(z.icpt=np(N,n.map(u=>u.id),s.id),z.icptKey=c,z.icptT=N.time);const a=Math.min(...n.map(u=>u.st.dv));for(const u of z.icpt)t+=Et("drive",u.key,Ct(Je(u.key),M0[u.key]),u.reach?`${Ft(Math.round(u.time/5)*5)} · <b class="${u.ok?"":"bad"}">${Math.round(u.dv/Math.max(.01,a)*20)*5}%</b>`:"No course",`wide ${z.drive===u.key?"on":""}`);t+='</div><div class="row">',t+=Et("pass",s.id,Ct(Je("strike"),"Pass"),"","wide")+Et("match",s.id,Ct(Je("match"),"Match"),"","wide"),o&&s.owner>=0&&!s.st.civil&&(t+=Et("board",s.id,Ct(Je("flag"),"Board"),"","wide")),n.some(u=>u.torps>0)&&(t+=Et("salvo",s.id,Ct(Je("salvo"),"Salvo"),"","wide")),t+="</div>"}else z.targetShip=null}else{const s=o=>n.every(c=>c[o]);t+='<div class="row g4">',n.some(o=>o.st.tubes)&&(t+=Et("torps","",Ct(Je("torp"),"Torpedoes"),s("torpsFree")?"Free":"Held",s("torpsFree")?"on":"")),t+=Et("fire","",Ct(Je("fire"),"Guns"),s("fireFree")?"Free":"Held",s("fireFree")?"on":""),t+=Et("evade","",Ct(Je("evade"),"Evade"),s("evade")?"On":"Off",s("evade")?"on":""),t+=Et("plot","",Ct(Je("plot"),"Plot burn"),"",z.plotMode?"on":""),n.some(o=>o.order)&&(t+=Et("cut","",Ct(Je("cut"),"Stop"),"")),t+=Et("retreat","",Ct(Je("retreat"),"Retreat"),""),n.length>1&&(t+=Et("formation","",Ct(Je("match"),"Formation"),y2[tc(n)],tc(n)==="loose"?"":"on")),t+=Et("follow","",Ct(Je("focus"),"Follow"),""),t+="</div>"}return t}if(z.targetShip!=null){const e=Dt(N,z.targetShip);if(!e||!(z.dev||e.seen[ae]))return z.targetShip=null,"";if(e.st.civil)return E2(e);if(e.derelict)return`<div class="head"><b>${en(e.name)}</b><small>Derelict ${Ln[e.cls].name.toLowerCase()}</small><button class="x" data-a="clear">${Je("close")}</button></div><div class="sub">No power. Match it to board. It joins your fleet.</div>`;const t=e.owner!==ae&&(qt(N,ae,"signals")||rr(N,ae,"ansible"))?e.dest??(e.order&&e.order.body!=null?e.order.body:null):null;if(t!=null&&e.seen[ae]===2)return`<div class="head"><b style="color:${z.colors[e.owner]}">${en(e.name)}</b><small>${Ln[e.cls].name}</small><button class="x" data-a="clear">${Je("close")}</button></div><div class="row">${Jo(e,!1)}</div><div class="sub">${Je("arrived")} Bound for ${en(N.bodies[t].name)}</div>`;const i=e.seen[ae]===2||z.dev;return`<div class="head"><b style="color:${z.colors[e.owner]}">${i?en(e.name):"Contact"}</b><small>${i?Ln[e.cls].name:"unidentified"}</small><button class="x" data-a="clear">${Je("close")}</button></div>${i?`<div class="row">${Jo(e,!1)}</div>`:""}`}if(z.selBody!=null){const e=N.bodies[z.selBody],t=e.owner===ae,i=e.owner===ct?"Independent":N.names[e.owner];let r=`<div class="head"><b style="color:${e.owner===ct?ln:z.colors[e.owner]}">${en(e.name)}</b><small>${e.home?"Capital":e.giant?"Gas giant":e.kind} · ${en(i)}</small><button class="x" data-a="clear">${Je("close")}</button></div>`;const s=N.ships.filter(o=>o.at===e.id&&Ni(o)&&!o.st.civil);if(!t){if(e.home&&e.owner>=0&&rr(N,ae,"strike")){const c=za(N,ae,e),a=N.strikeReady[ae]-N.time;r+=`<div class="row">${Et("mstrike",e.id,Ct(Je("fire"),ci(N,ae,"strike")),c==="Not ready"?Ft(Math.ceil(a/8)*8):c?"":"Ready",c?"no":"")}</div>`}const o=ka(N,ae,e);o&&o.at>N.time?r+=`<div class="sub">${Je("agent")} Agent arriving<span class="num">${Ft(Math.ceil((o.at-N.time)/5)*5)}</span></div>`:o?(r+='<div class="row">',e.owner===ct?r+=Et("buy",e.id,Ct(Je("credits"),"Buy"),kr(N,e),Na(N,ae,e)?"no":""):(qt(N,ae,"sabot")&&(r+=Et("sab","battery",Ct(Je("battery"),"Sabotage"),Fn.opCost,Mo(N,ae,e,"battery")?"no":"")+Et("sab","yard",Ct(Je("yard"),"Stall yard"),Fn.opCost,Mo(N,ae,e,"yard")?"no":"")),qt(N,ae,"rings")&&(r+=Et("op",o.op==="steal"?"watch":"steal",Ct(Je("credits"),"Steal"),"",o.op==="steal"?"on":"")),qt(N,ae,"fifth")&&(r+=Et("op",o.op==="incite"?"watch":"incite",Ct(Je("flag"),"Incite"),"",o.op==="incite"?"on":""))),r+=Et("recall",e.id,Ct(Je("agent"),"Recall"),"")+"</div>",e.owner!==ct&&e.queue&&e.queue.length&&(r+=`<div class="sts">${jt("Building",e.queue.map(c=>Ln[c.cls].name).join(" "))}</div>`)):qt(N,ae,"signals")&&(r+=`<div class="row">${Et("agent",e.id,Ct(Je("agent"),"Send agent"),Fn.cost,bo(N,ae,e)?"no":"")}</div>`)}if(t){const o=Fd(e);r+='<div class="row">';const c=e.trait?fs[e.trait].boost:null;for(const[u,l]of e.structures.entries()){const h=Ae.structures[l.type],d=`${l.type}.${u}`;r+=Et("struct",d,Ct(Je(l.type),h.name),l.scrap?"Removing":"",`${z.struct===d?"on":""} ${c===l.type?"boost":""} ${l.scrap?"no":""}`,`${h.maxLevel>1?`<span class="lv">${"I".repeat(l.level)}</span>`:""}${l.scrap?`<span class="prog" style="width:${Math.round((1-l.scrap/Ae.scrapTime)*20)*5}%"></span>`:l.left>0?`<span class="prog" style="width:${Math.round((1-l.left/l.total)*20)*5}%"></span>`:""}`)}for(let u=e.structures.length;u<o;u++)r+=Et("slot","",Ct(Je("add"),"Build"),"",`empty ${z.build?"on":""}`);r+="</div>";const a=z.struct?da(e,z.struct):null;if(a&&!a.scrap){const u=Ae.structures[a.type],l=Wr(a)&&a.level<u.maxLevel;r+=`<div class="row">${l?Et("upgrade",z.struct,Ct(Je("up"),"Upgrade"),Ro(a),os(N,e,a)?"no":""):""}${Et("demolish",z.struct,Ct(Je("close"),"Remove"),`+${uc(a)}`,dc(N,e,a.type,ua(z.struct))?"no":"")}</div>`}else a||(z.struct=null);if(r+=b2(e),z.build){r+='<div class="row">';for(const u in Ae.structures){const l=Ji(N,e,u);l&&l!=="Not enough credits"||(r+=Et("build",u,Ct(Je(u),Ae.structures[u].name),Ae.structures[u].cost,`${l?"no":""} ${c===u?"boost":""}`))}r+="</div>"}if(ki(e,"yard")){r+='<div class="row">';for(const u of F0){const l=Ia(N,e,u);if(l&&l.startsWith("Needs")&&u==="battleship"&&!qt(N,ae,"spinal")){r+=Et("none","",Ct(bl(u,cs),Ln[u].name),"research","no");continue}r+=Et("ship",u,Ct(bl(u,z.colors[ae]),Ln[u].name),qr(N,ae,u),l?"no":"").replace("<button",`<button title="${Ln[u].name}"`)}r+="</div>",e.queue.length&&(r+=`<div class="row">${e.queue.map((u,l)=>Et("cancel",l,bl(u.cls,Qt),l<zl(e)?Ft(Math.ceil(u.left/5)*5):"","on",l<zl(e)?`<span class="prog" style="width:${Math.round((1-u.left/u.total)*20)*5}%"></span>`:"")).join("")}</div>`)}}else e.structures.length&&(r+=`<div class="sub">${e.structures.filter(Wr).map(o=>Ae.structures[o.type].name).join(" · ")}</div>`);return s.length&&(r+=`<div class="row">${s.map(o=>Jo(o,!1)).join("")}${Et("fleet",e.id,Ct(Je("check"),"Select all"),"")}</div>`),r}return""}const cs="#6d685c",sg=["","Seasoned","Veteran","Elite"];function E2(n){const e=n.order&&n.order.body!=null?N.bodies[n.order.body].name:"",t=n.src!=null&&N.bodies[n.src]?N.bodies[n.src].name:"";let i=`<div class="head"><b style="color:${n.owner<0?Qt:z.colors[n.owner]}">${n.owner<0?"Convoy":"Freighter"}</b><small>${n.owner<0?"Independent":en(N.names[n.owner])}</small><button class="x" data-a="clear">${Je("close")}</button></div>`;return e&&(n.owner===ae||n.owner<0)&&(i+=`<div class="sub">${Je("freight")} ${t?`${en(t)} to `:""}${en(e)}<span class="num">${n.owner===ae&&n.tau?Ft(Math.ceil(n.tau/5)*5):""}</span></div>`),i}function Mc(n,e){const t=`${n}:${e}`;if(n==="disarm"){z.armed=null,ye("close"),Pn();return}if(n==="confirm"){if(!z.armed)return;const[a,...u]=z.armed.split(":");z.confirmed=!0,Mc(a,u.join(":"));return}if(Ea&&S0.has(n)&&z.armed!==t&&!z.confirmed){z.armed=t,z.armedLabel=arguments[2]||"OK",ye("tap"),Pn();return}z.confirmed=!1,z.armed=S0.has(n)||!Df(n,e).text?n==="struct"?t:null:t,z.armedLabel="";const i=Kn(),r=i.map(a=>a.id),s=z.selBody!=null?N.bodies[z.selBody]:null,o=tc(i),c=a=>{vn({t:"order",ids:r,order:a&&{...a,loose:o==="loose",shape:o}}),ye("confirm")};switch(n){case"clear":Hr(),z.selBody=null,ye("close");break;case"chip":{const a=+e,u=Dt(N,a);if(!u||!Ni(u))break;z.sel.size&&!z.sel.has(a)?(z.sel.add(a),z.routes=null,z.routeKey=null):(z.sel.size>1||!z.sel.has(a))&&(ca([u]),Be.followShip(u.id)),ye("tap");break}case"fleet":ca(N.ships.filter(a=>a.at===+e&&Ni(a)&&!a.st.civil));break;case"go":{const a=(z.routes||[]).find(u=>u.key===e);if(!a||a.dv>Math.min(...i.map(u=>u.dv))){ye("deny");break}c({type:"orbit",body:z.target,profile:a.profile,via:a.via,side:a.side}),z.target=null,z.routes=null;break}case"strike":c({type:"strike",body:+e,profile:"hard"}),z.target=null,z.routes=null;break;case"pass":c({type:"attack",ship:+e,mode:"pass",profile:z.drive}),z.targetShip=null;break;case"match":c({type:"attack",ship:+e,mode:"match",profile:z.drive}),z.targetShip=null;break;case"board":c({type:"attack",ship:+e,mode:"board",profile:z.drive}),z.targetShip=null;break;case"salvo":vn({t:"salvo",ids:r,ship:+e}),ye("confirm");break;case"torps":vn({t:"stance",ids:r,st:{torpsFree:!i.every(a=>a.torpsFree)}}),ye("tap");break;case"fire":vn({t:"stance",ids:r,st:{fireFree:!i.every(a=>a.fireFree)}}),ye("tap");break;case"evade":vn({t:"stance",ids:r,st:{evade:!i.every(a=>a.evade)}}),ye("tap");break;case"cut":c(null);break;case"plot":z.plotMode=!z.plotMode,z.plot=null,ye("tap");break;case"follow":i[0]&&Be.followShip(i[0].id,!0);break;case"formation":{const a=o==="wedge"?"column":o==="column"?"loose":"wedge";vn({t:"stance",ids:r,st:{shape:a}});const u=i.find(l=>l.at===null&&l.order&&["orbit","strike","attack"].includes(l.order.type));u&&i.length>1&&vn({t:"order",ids:r,order:{...u.order,loose:a==="loose",shape:a}}),ye("tap");break}case"join":c({type:"form",lead:+e}),z.targetShip=null;break;case"drive":z.drive=e,ye("tap");break;case"pick":{const a=Dt(N,+e);a&&(ca([a]),Be.followShip(a.id));break}case"retreat":{let a=null,u=1e9;for(const l of N.bodies){if(l.owner!==ae)continue;const h=N.bp?N.bp[l.id]:sn(N,l,N.time),d=Math.hypot(h.x-i[0].x,h.z-i[0].z)+(ki(l,"yard")||l.home?0:40);d<u&&(u=d,a=l)}if(a){const l=uo(N,r,a.id).filter(d=>d.ok),h=l.find(d=>d.key==="hard")||l[0];h?c({type:"orbit",body:a.id,profile:h.profile,via:h.via,side:h.side}):ye("deny")}break}case"slot":z.build=!z.build,z.struct=null,ye("tap");break;case"struct":z.struct=z.struct===e?null:e,z.build=!1,ye("tap");break;case"mega":s&&!So(N,s,e)?(vn({t:"mega",body:s.id,key:e}),ye("confirm")):ye("deny");break;case"mstrike":s&&!za(N,ae,s)?(vn({t:"mstrike",at:s.id}),ye("confirm")):ye("deny");break;case"dark":Fa(N,ae)?ye("deny"):(vn({t:"dark"}),ye("confirm"));break;case"megaInfo":ye("tap");break;case"demolish":s&&!dc(N,s,go(e),ua(e))?(vn({t:"demolish",body:s.id,type:go(e),i:ua(e)}),z.struct=null,ye("close")):ye("deny");break;case"trait":break;case"agent":s&&!bo(N,ae,s)?(vn({t:"agent",at:s.id}),ye("confirm")):ye("deny");break;case"recall":s&&(vn({t:"recall",at:s.id}),ye("close"));break;case"buy":s&&!Na(N,ae,s)?(vn({t:"buy",at:s.id}),ye("confirm")):ye("deny");break;case"sab":s&&!Mo(N,ae,s,e)?(vn({t:"sabotage",at:s.id,what:e}),ye("confirm")):ye("deny");break;case"op":s&&(vn({t:"op",at:s.id,op:e}),ye("tap"));break;case"build":s&&!Ji(N,s,e)?(vn({t:"build",body:s.id,type:e}),z.build=!1,ye("confirm")):ye("deny");break;case"upgrade":{const a=s&&da(s,e);a&&!os(N,s,a)?(vn({t:"upgrade",body:s.id,type:go(e),i:ua(e)}),ye("confirm")):ye("deny");break}case"ship":s&&!Ia(N,s,e)?(vn({t:"ship",body:s.id,cls:e}),ye("confirm")):ye("deny");break;case"cancel":s&&(vn({t:"cancel",body:s.id,i:+e}),ye("close"));break}Pn()}const Sc=(n,e)=>n.addEventListener("click",t=>{const i=t.target.closest("[data-a]");i&&(t.stopPropagation(),e(i.dataset.a,i.dataset.v,i))});Sc(Pe("strip"),(n,e,t)=>Mc(n,e,t.querySelector("em")?.textContent));{let n=null,e=!1;const t=i=>{z.sel.size>1&&z.sel.delete(i)&&(z.routes=null,z.routeKey=null,ye("tap"),Pn())};Pe("strip").addEventListener("pointerdown",i=>{const r=i.target.closest('[data-a="chip"].on');if(!r)return;const s=+r.dataset.v;clearTimeout(n),n=setTimeout(()=>{n=null,e=!0,t(s)},450)});for(const i of["pointerup","pointercancel","pointerleave"])Pe("strip").addEventListener(i,()=>{clearTimeout(n),n=null});Pe("strip").addEventListener("click",i=>{if(e){e=!1,i.stopPropagation(),i.preventDefault();return}const r=i.target.closest('[data-a="chip"].on');r&&(i.shiftKey||i.metaKey||i.ctrlKey)&&(i.stopPropagation(),t(+r.dataset.v))},!0)}function A2(){const n=lc(N,ae),e={capital:"Capital",freight:"Freighter",blockaded:"Blockaded"};let t=`<div class="head"><b>Income</b><small>${Gr(n.total)}</small><button class="x" data-a="closeSheet">${Je("close")}</button></div>`;for(const s of n.lines.sort((o,c)=>c.rate-o.rate)){const o=N.bodies[s.body];t+=`<div class="line"><div class="what"><b>${en(o.name)}</b><span${s.how==="blockaded"?` style="color:${Gt}"`:""}>${e[s.how]}</span></div><span class="num">${s.how==="blockaded"?"0":Gr(s.rate)}</span></div>`}n.upkeep&&(t+=`<div class="line"><div class="what"><b>Ships</b><span>Upkeep</span></div><span class="num">${Gr(-n.upkeep)}</span></div>`);const i=N.ships.filter(s=>s.owner===ae&&s.st.civil),r=N.bodies.reduce((s,o)=>s+(o.owner===ae?o.stock:0),0);return t+=`<div class="sts pad">${jt("Freighters",i.length)}${jt("In transit",Math.round(i.reduce((s,o)=>s+(o.cargo||0),0)/10)*10)}${jt("Waiting",Math.round(r/10)*10)}</div>`,t}function C2(){if(z.sheet==="income")return A2();const n=N.tech[ae],e=oc(N,ae),t=n.project;let i=`<div class="head"><b>Research</b><small>${e>1?`Speed ${Math.round(e*100)}%`:""}</small><button class="x" data-a="closeSheet">${Je("close")}</button></div><div class="tree">`;const r=(s,o,c)=>n.picks[c.key]?"done":t&&t.key===c.key?"now":o<n[s]||t&&t.line===s&&o===n[s]?"skip":o===n[s]?N.credits[ae]<xo[o]?"open poor":"open":"lock";for(const s of co)i+=`<div class="tr"><div class="tn">${Je(s)}<span>${Qn[s].name}</span></div>`,Qn[s].tiers.forEach((o,c)=>{i+=`<div class="tc">${o.map(a=>`<button class="nd ${r(s,c,a)} ${a.mega?"mega":""} ${z.techSel===`${s}:${a.key}`?"sel":""}" data-a="node" data-v="${s}:${a.key}">${a.mega?ci(N,ae,a.key):a.name}</button>`).join("")}</div>`}),i+="</div>";if(i+="</div>",!z.techSel){const s=co.find(o=>n[o]<Qn[o].tiers.length)||co[0];z.techSel=`${s}:${Qn[s].tiers[Math.min(n[s],Qn[s].tiers.length-1)][0].key}`}if(z.techSel){const[s,o]=z.techSel.split(":"),c=Qn[s].tiers.findIndex(h=>h.some(d=>d.key===o)),a=sc(o),u=r(s,c,a).split(" ")[0];Qn[s].tiers[c].length>1;const l=u==="done"?"Done":u==="now"?Ft(Math.ceil(t.left/e/5)*5):u==="skip"?"Not chosen":u==="lock"?"Later":`<button class="tile ${Po(N,ae,s,o)?"no":"go"}" data-a="research" data-v="${s}:${o}"><em>Research</em><small>${xo[c]}</small></button>`;i+=`<div class="td"><div class="what"><b>${a.mega?ci(N,ae,o):a.name}</b><span>${a.mega?`Unlocks a megaproject. ${un[o].text}`:a.text}</span></div><span class="num">${l}</span></div>`}return i}Sc(Pe("sheet"),(n,e)=>{if(n==="closeSheet"&&(Pe("sheet").hidden=!0,ye("close")),n==="node"&&(z.techSel=e,ye("tap")),n==="research"){const[t,i]=e.split(":");Po(N,ae,t,i)?ye("deny"):(vn({t:"research",line:t,key:i}),ye("confirm"))}Pn()});function bt(n,e,t,i){const r=document.createElement("button");r.className="note",r.style.setProperty("--c",e),r.innerHTML=Je(n)+(t?`<span>${en(t)}</span>`:""),i&&(r.onclick=()=>{i(),ye("tap")});const s=Pe("feed");for(s.prepend(r);s.children.length>5;)s.lastChild.remove();setTimeout(()=>r.classList.add("out"),5200),setTimeout(()=>r.remove(),5900)}let w0=-99,T0=-99;function R2(){for(const n of N.events){if(n.seen||(n.seen=!0,!mo()))continue;const e=n.ship!=null?Dt(N,n.ship):null,t=e?()=>Be.followShip(e.id):null,i=n.at!=null?N.bodies[n.at]:null,r=i?()=>Be.focus(N,i.id,!1):null,s=n.x!==void 0?()=>{Be.orbit.follow=null,Be.orbit.ship=null,Be.orbit.target.set(n.x,n.y,n.z)}:null,o=z.colors[ae];switch(n.type){case"contact":n.owner===ae&&N.time-w0>20&&(w0=N.time,bt("contact",Qt,"Contact",t),ye("contact"));break;case"salvo":n.owner!==ae&&n.to===ae&&e&&N.time-T0>6&&(T0=N.time,bt("torp",Gt,"Torpedoes",t),ye("alarm"));break;case"system":n.owner===ae&&e&&(bt("bolt",Gt,`${e.name}: ${n.sys} out`,t),ye("system"));break;case"repaired":n.owner===ae&&ye("repaired");break;case"lost":n.owner===ae?(bt("lost",Gt,`${n.name} lost`,s),ye("lost")):n.by===ae&&bt("lost",ln,`${n.name} destroyed`,s);break;case"raided":case"seized":n.owner===ae&&n.type==="raided"||n.from===ae?(bt("raided",Gt,"Freighter lost",s),ye("deny")):(n.by===ae||n.type==="seized"&&n.owner===ae)&&(bt("freight",Qt,n.n?`+${n.n}`:"",s),ye("freight"));break;case"captured":n.owner===ae?(bt("captured",o,`${i.name} taken`,r),ye("captured")):n.from===ae&&(bt("captured",Gt,`${i.name} lost`,r),ye("lostWorld"));break;case"silenced":n.by===ae?ye("silenced"):n.owner===ae&&(bt("battery",Gt,`${i.name}: battery down`,r),ye("silenced"));break;case"moved":n.owner===ae?(bt("captured",Gt,`Capital moved to ${i.name}`,r),ye("lostWorld")):bt("captured",z.colors[n.owner],`${N.names[n.owner]} moved to ${i.name}`,r);break;case"built":n.owner===ae&&(bt(n.what,o,i.name,r),ye("built"));break;case"launched":n.owner===ae&&e&&(bt("yard",o,`${e.name} launched`,t),ye("launched"));break;case"research":n.owner===ae&&(bt(n.line,Qt,sc(n.key).name,null),ye("research"));break;case"event":e&&(bt(n.kind==="derelict"?"star":"freight",Qt,n.kind==="derelict"?`Derelict ${Ln[e.cls].name.toLowerCase()}`:"Convoy",t),ye("contact"));break;case"agentCaught":n.owner===ae?(bt("agent",Gt,`Agent caught at ${i.name}`,r),ye("lost")):n.by===ae&&(bt("agent",o,`Caught an agent at ${i.name}`,r),ye("repaired"));break;case"bought":n.owner===ae?(bt("captured",o,`${i.name} joined you`,r),ye("captured")):n.owner!==ct&&bt("captured",z.colors[n.owner],`${i.name} joined ${N.names[n.owner]}`,r);break;case"sabotage":n.owner===ae&&(bt("bolt",Gt,`Sabotage at ${i.name}`,r),ye("alarm"));break;case"promoted":n.owner===ae&&e&&(bt("star",Qt,`${e.name}: ${sg[n.rank].toLowerCase()}`,t),ye("research"));break;case"freight":n.owner===ae&&ye("freight",{gain:.5});break;case"fuel":n.owner===ae&&e&&(bt("fuel",Qt,`${e.name}: low fuel`,t),ye("fuel"));break;case"repelled":n.owner===ae?(bt("flag",Gt,`Boarding of ${n.name} failed`,t),ye("deny")):n.from===ae&&bt("flag",o,`${n.name} fought off boarders`,t);break;case"boarded":n.owner===ae?(bt("flag",o,n.name,t),ye("captured")):n.from===ae&&(bt("flag",Gt,n.name,t),ye("lost"));break;case"megaStart":n.owner!==ae&&bt("star",z.colors[n.owner],`${ci(N,n.owner,n.key)} begun at ${i.name}`,r);break;case"megaDone":bt("star",n.owner===ae?o:z.colors[n.owner],`${ci(N,n.owner,n.key)} done`,r),ye(n.owner===ae?"research":"alarm");break;case"megaLost":n.owner===ae&&(bt("star",Gt,`${ci(N,ae,n.key)} lost the race`,r),ye("deny"));break;case"strike":n.to===ae?(bt("fire",Gt,`${ci(N,n.owner,"strike")} on its way`,r),ye("alarm")):n.owner===ae&&bt("fire",o,"Strike fired",r);break;case"struck":n.to===ae?(bt("fire",Gt,`${i.name} struck`,r),ye("lostWorld")):n.owner===ae&&(bt("fire",o,`${i.name} struck`,r),ye("captured"));break;case"strikeDown":n.owner===ae?(bt("fire",Gt,"Strike shot down",r),ye("deny")):bt("fire",o,"Strike shot down",r);break;case"blackout":n.owner===ae?ye("confirm"):(bt("dark",z.colors[n.owner],`${N.names[n.owner]} went dark`,null),ye("alarm"));break;case"eliminated":n.owner!==ae&&bt("skull",z.colors[n.owner],N.names[n.owner],null);break}}}Pe("rnd").innerHTML=Je("research")+'<i class="bar"></i>';Pe("sys").innerHTML=Je("system");Pe("menuBtn").innerHTML=Je("menu");function Pn(){if(!N||!mo())return;Pe("cr").textContent=Math.floor(N.credits[ae]||0),Pe("rate").textContent=Gr(lc(N,ae).total);const n=N.bodies.find(a=>a.mega&&a.mega.key==="ark"&&a.mega.done&&a.owner>=0);Pe("dateT").textContent=Jm(N.time)+(n?` · Ark ${Ft(Math.ceil(n.mega.hold/8)*8)}`:""),Pe("dayBar").style.width=`${Math.floor(N.time/Ca%1*20)*5}%`;const e=La(N,ae),t=cc(N,ae).reduce((a,u)=>a+Xr(u.cls),0),i=Da(N,ae)-t;let r="";for(let a=0;a<e;a++)r+=`<i class="${a<t?"on":a<t+i?"q":""}"></i>`;lo(Pe("pips"),r);const s=N.tech[ae],o=Pe("rnd");o.querySelector(".bar").style.width=s.project?`${(1-s.project.left/s.project.total)*100}%`:"0",o.classList.toggle("idle",!s.project&&co.some(a=>s[a]<Qn[a].tiers.length&&Qn[a].tiers[s[a]].some(u=>!Po(N,ae,a,u.key)))),Pe("warp").textContent=`${Br}×`,Pe("warp").hidden=At!=="solo",Pe("pause").innerHTML=Je(yi?"play":"pause"),Pe("pause").hidden=At==="guest";for(const a of N.bodies)a.owner===ae&&a.yt>1&&!a.warnedYield?(a.warnedYield=!0,bt("captured",Gt,`${a.name} under siege`,()=>Be.focus(N,a.id,!1)),ye("alarm")):a.yt<=0&&(a.warnedYield=!1);let c=T2();if(c){const a=z.armed&&z.armedLabel,[u,...l]=(z.armed||"").split(":"),h=z.armed?Df(u,l.join(":")):null;c+=h?`<div class="bar" ${a?"":'data-a="disarm"'}><div class="b1"><p>${en(h.text)}</p>${a?`<button class="bx" data-a="disarm">${Je("close")}</button><button class="bok" data-a="confirm">${en(z.armedLabel)}</button>`:""}</div>${M2(h.stats)}</div>`:`<div class="bar">${w2()}</div>`}Pe("strip").hidden=!c||!Pe("sheet").hidden,lo(Pe("strip"),c),Pe("sheet").hidden||lo(Pe("sheet"),C2()),Xi&&lo(Pe("brief"),L2()),wc()}Pe("brief").onclick=n=>{if(Nt&&!Nt.free){const e=n.target.closest("[data-t]")?.dataset.t;e==="next"?(na[Nt.i].last?nc():(Nt.i+=1,If(),wc()),ye("tap")):e==="end"?(nc(),ye("close")):e==="show"&&z.tutWorld!=null&&(Be.focus(N,z.tutWorld,!1),ye("tap"));return}z.briefShut=!z.briefShut,Pn()};function P2(){N.credits[ae]+=800,Nt={i:0,free:!1,did:new Set,target:jm(N,ae),held0:N.bodies.filter(n=>n.owner===ae).length},If(),Pe("brief").hidden=!1,wc()}function If(){const n=Be.orbit;Nt.cam={az:n.az,pol:n.pol,dist:n.dist,x:n.target.x,y:n.target.y,z:n.target.z}}function E0(){const n=Be.orbit,e=Nt.cam,t=2*(Math.abs(n.az-e.az)+Math.abs(n.pol-e.pol)+Math.abs(Math.log(n.dist/e.dist)))+3*Math.hypot(n.target.x-e.x,n.target.y-e.y,n.target.z-e.z)/e.dist;return(!Nt.target||Nt.target.owner!==ct&&Nt.target.owner!==ae)&&(Nt.target=jm(N,ae)||Nt.target),{game:N,ui:z,me:ae,warp:z.warp,moved:t,touch:Ea,target:Nt.target,home:N.homes[ae],gained:N.bodies.filter(i=>i.owner===ae).length-Nt.held0,sheet:!Pe("sheet").hidden&&z.sheet!=="income"}}function nc(n=!1){Nt&&(Nt.free=!0,z.tutWorld=null,Pe("tutglow").textContent="",at.done.tutorial=!0,Si(),n||(Pe("brief").hidden=!0,bt("contact",Qt,"Your rival is moving",null)))}function wc(){if(!Nt||Nt.free||!Zr())return;let n=E0();if(!n.home||!n.target){nc();return}for(let i=na[Nt.i];!i.last&&(i.on&&Nt.did.has(i.on)||i.done&&i.done(n));i=na[Nt.i])Nt.i+=1,If(),n=E0();const e=na[Nt.i],t=typeof e.point=="function"?e.point(n):e.point;Pe("tutglow").textContent=t?`${t} { outline: 2px solid var(--amber); outline-offset: 2px; }`:"",z.tutWorld=e.world?e.world(n):null,lo(Pe("brief"),`<b>${e.title}<span class="t">${Nt.i+1}/${na.length}</span></b><p>${e.text(n)}</p><div class="tb">${z.tutWorld!=null?'<button data-t="show">Show</button>':""}<button data-t="next">${e.last?"Play":e.on||e.done?"Skip":"Next"}</button><button data-t="end">Close</button></div>`)}Pe("purse").onclick=()=>{const n=!Pe("sheet").hidden&&z.sheet==="income";z.sheet="income",Pe("sheet").hidden=n,ye(n?"close":"open"),Pn()};Pe("rnd").onclick=()=>{const n=!Pe("sheet").hidden&&z.sheet!=="income";z.sheet="research",Pe("sheet").hidden=n,ye(Pe("sheet").hidden?"close":"open"),Pn()};Pe("sys").onclick=()=>{Be.orbit.follow=null,Be.orbit.ship=null,Be.orbit.target.set(0,0,0),Be.orbit.goalDist=Be.orbit.maxDist*.3,ye("tap")};Pe("warp").onclick=()=>{Br=Br>=8?1:Br*2,ye("tap"),Pn()};Pe("pause").onclick=()=>{At!=="guest"&&(yi=!yi,At==="host"&&zn.broadcast({t:"paused",paused:yi}),ye("tap"),Pn())};Pe("menuBtn").onclick=()=>ha();function L2(){const n=Xi.state(N,ae);return`<b>${en(Xi.name)}${n.clock!=null?`<span class="t">${Ft(Math.max(0,n.clock))}</span>`:""}</b>${z.briefShut?"":en(n.text)}`}const hn=Pe("panel");function Cs(n){hn.innerHTML=n,hn.hidden=!1,hn.scrollTop=0,hn.dataset.screen="",Pe("title").hidden=!0}function io(){hn.hidden=!0,Pe("title").hidden=At!=="demo"}const Ba=(n,e="title")=>`<div class="ph"><button class="sq" data-a="${e}">${Je("back")}</button><h2>${n}</h2></div>`,og=n=>`<div class="opts">${Ra.map(e=>`<button class="opt ${e===n?"on":""}" data-a="faction" data-v="${e}" style="--c:${Zl[e]}"><i class="sw"></i><div><b>${ii[e].name}</b><span>${ii[e].text}</span></div><span class="mark">${Je("check")}</span></button>`).join("")}</div>`,fa=(n,e,t,i=r=>r)=>`<div class="seg">${e.map(r=>`<button class="${String(r)===String(t)?"on":""}" data-a="${n}" data-v="${r}">${i(r)}</button>`).join("")}</div>`;function Ul(){const n=ga().key.slice(5);Pe("nav").innerHTML=`<button data-a="setup">Engage</button><button data-a="tutorial">Tutorial</button><button data-a="daily">Daily<small>${n}</small></button><button data-a="mp">Multiplayer</button><button data-a="manual">Manual</button>`,Pe("fine").innerHTML=`<button data-a="sound">Sound ${at.sound?"on":"off"}</button><button data-a="text">Text ${at.ui===1?"standard":at.ui>1?"large":"small"}</button><button data-a="gfx">Graphics ${at.gfx==="low"?"low":"high"}</button>`}function to(n=!1){Cs(`${Ba(n?"Daily system":"Engage")}<p class="lbl">Side</p>${og(at.faction)}<p class="lbl">Rivals</p>${fa("rivals",[1,2],at.rivals)}<p class="lbl">AI</p>${fa("level",sf,at.level,e=>va[e].name)}`+(n?"":`<p class="lbl">Win by</p>${fa("winby",kf,Aa(),e=>lg[e])}`)+`<button class="cta" data-a="${n?"launchDaily":"launch"}">Launch</button>`),hn.dataset.screen=n?"daily":"setup"}function gu(n,e=!1){const t=Ra.filter(s=>s!==at.faction);qi(n)()<.5&&t.reverse();const r=[{faction:at.faction,name:at.name||"You"}];for(let s=0;s<at.rivals;s++)r.push({faction:t[s],ai:at.level});Io(bs({seed:n,players:r,winBy:e?"capital":Aa()}),{players:r,mode:"solo"}),N.daily=e?ga().key:null}function D2(){Cs(`${Ba("Scenarios")}<div class="opts">${u2.map(n=>`<button class="opt" data-a="scenario" data-v="${n}"><i class="sw" style="background:${at.done[n]?Qt:"var(--dim)"}"></i><div><b>${Ql[n].name}</b><span>${Ql[n].text}</span></div><span class="mark" style="visibility:${at.done[n]?"visible":"hidden"}">${Je("check")}</span></button>`).join("")}</div>`)}function A0(n){const e=Ql[n],t=e.make();Io(t.game,{players:t.players,mode:"solo",scn:{key:n,name:e.name,state:e.state},look:t.look,me:0})}function C0(){const n=(e,t)=>`<div class="k">${Je(e)}<div>${t}</div></div>`;Cs(`${Ba("Manual")}<div class="prose">
    <p>Take the enemy <b>capital</b> (double ring) to win.</p>
    ${n("contact","Tap a ship, then tap a world to go there or a ship to attack or join it.")}
    ${n("add","On a phone the first tap on a button shows what it does. The second tap does it.")}
    ${n("fuel","Flying uses fuel. Ships refuel at your worlds. A tender refuels ships next to it.")}
    ${n("match","Ships sent together fly in formation. Tap one ship's square to order it alone.")}
    ${n("strike","Shots do more damage the faster the ships close.")}
    ${n("dark","A burning drive is easy to see. A coasting ship is not. Planets block the view.")}
    ${n("battery","A world yields when its battery is down and only your ships are in orbit.")}
    ${n("freight","Freighters carry income to the capital. A ship in orbit blocks a world's income.")}
    ${n("habitat","Each habitat level allows one more ship.")}
    ${n("star","Gold marks a world with a bonus.")}
    ${n("agent","Agents need Intelligence research.")}
    <p>Mouse: drag to move, right-drag to turn, wheel to zoom. Keys: WASD move, Q/E turn, Space pause, 1 to 4 speed, H system, R research, Esc back.</p></div>`)}const I2=[["Ships built","built"],["Ships lost","lost"],["Ships destroyed","killed"],["Worlds taken","captured"],["Worlds lost","worldsLost"],["Freighters home","hauled"],["Freighters raided","raided"],["Research","research"]];let Rd=!1,ag="";function k2(){const t=document.createElement("canvas");t.width=1080,t.height=1560;const i=t.getContext("2d"),r=N.players,s=Array.from({length:r},(d,f)=>f),o=(d,f)=>`${d} ${f}px Rajdhani, system-ui, sans-serif`;i.fillStyle="#050506",i.fillRect(0,0,1080,1560),i.strokeStyle="rgba(232,226,210,0.25)",i.lineWidth=2,i.strokeRect(28,28,1024,1504),i.textAlign="left",i.fillStyle=cs,i.font=o(500,34),i.fillText("Perihelion",80,110),i.fillStyle=Rd?Qt:Gt,i.font=o(600,104),i.fillText(Rd?"Victory":"Defeat",80,220),i.fillStyle=ln,i.font=o(500,34),i.fillText([ii[N.factions[ae]]?.name,ag||(N.daily?`Daily ${N.daily}`:""),Ft(N.time)].filter(Boolean).join("  ·  "),80,276);const c=80,a=190,u=1e3;let l=370;i.font=o(600,30),i.textAlign="right",s.forEach((d,f)=>{i.fillStyle=z.colors[d],i.fillText(String(N.names[d]).slice(0,12),u-a*(r-1-f),l,a-20)});for(const[d,f]of I2)l+=56,i.strokeStyle="rgba(232,226,210,0.14)",i.lineWidth=1,i.beginPath(),i.moveTo(c,l-38),i.lineTo(u,l-38),i.stroke(),i.textAlign="left",i.fillStyle=cs,i.font=o(500,30),i.fillText(d,c,l),i.textAlign="right",i.font=o(500,32),s.forEach((m,y)=>{i.fillStyle=z.colors[m],i.fillText(String(Math.round(N.stats[m][f]||0)),u-a*(r-1-y),l)});const h=N.series||[];if(h.length>1){const d=286.6666666666667,f=330,m=l+110,y=h[h.length-1].t||1;[["Fleet strength","pow"],["Worlds","worlds"],["Income","inc"]].forEach(([x,p],g)=>{const b=80+g*(d+30),v=m+24,M=v+f,S=Math.max(1,...h.map(A=>Math.max(...A[p])));i.textAlign="left",i.fillStyle=ln,i.font=o(500,30),i.fillText(x,b,m),i.strokeStyle="rgba(232,226,210,0.14)",i.lineWidth=1;for(const A of[0,1])i.beginPath(),i.moveTo(b,M-A*f),i.lineTo(b+d,M-A*f),i.stroke();for(const A of s)i.strokeStyle=z.colors[A],i.lineWidth=3,i.lineJoin="round",i.beginPath(),h.forEach((_,E)=>{const P=b+_.t/y*d,L=M-_[p][A]/S*f;E?i.lineTo(P,L):i.moveTo(P,L)}),i.stroke()})}return i.textAlign="left",i.fillStyle=cs,i.font=o(500,26),i.fillText("pretzel-dev.github.io/game-dev/perihelion-next",80,1490),t}async function U2(){if(!N)return;try{await document.fonts.load("600 30px Rajdhani"),await document.fonts.load("500 30px Rajdhani")}catch{}const n=await new Promise(i=>k2().toBlob(i,"image/png"));if(!n)return;const e=new File([n],"perihelion.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i.name==="AbortError")return}const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e.name,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),5e3)}function vu(n,e){ls=!0,Rd=n,ag=e||"",Pe("strip").hidden=!0,Pe("sheet").hidden=!0,Pe("hud").hidden=!0,Pe("date").hidden=!0,Pe("brief").hidden=!0,Nt&&nc(!0),ye(n?"won":"defeat");const t=N.players,i=Array.from({length:t},(h,d)=>d),r=new Set(["lost","worldsLost"]),s=h=>{const d=i.map(m=>Math.round(N.stats[m][h]||0)),f=r.has(h)?Math.min(...d):Math.max(...d);return!r.has(h)&&f<=0||d.every(m=>m===f)?[]:i.filter(m=>d[m]===f)},o=(h,d)=>{const f=s(d);return`<span>${h}</span>${i.map(m=>`<b class="${f.includes(m)?"best":""}" style="color:${z.colors[m]}">${Math.round(N.stats[m][d]||0)}</b>`).join("")}`},c=(h,d,f=m=>Math.round(m))=>{const m=N.series||[];if(m.length<2)return"";const y=320,x=120,p=30,g=8,b=8,v=18,M=m[m.length-1].t||1,S=Math.max(1,...m.map(D=>Math.max(...D[d]))),A=D=>p+D/M*(y-p-g),_=D=>b+(1-D/S)*(x-b-v),E=i.map(D=>`<polyline fill="none" stroke="${z.colors[D]}" stroke-width="2" stroke-linejoin="round" points="${m.map(H=>`${A(H.t).toFixed(1)},${_(H[d][D]).toFixed(1)}`).join(" ")}"/>`).join(""),P=[0,.5,1].map(D=>`<line x1="${p}" x2="${y-g}" y1="${_(S*D)}" y2="${_(S*D)}" stroke="rgba(232,226,210,0.12)"/><text x="${p-4}" y="${_(S*D)+3}" font-size="9" fill="${cs}" text-anchor="end">${f(S*D)}</text>`).join(""),L=`<text x="${p}" y="${x-4}" font-size="9" fill="${cs}">0</text><text x="${y-g}" y="${x-4}" font-size="9" fill="${cs}" text-anchor="end">${Ft(M)}</text>`;return`<div class="chart" data-key="${d}"><span>${h}</span><svg viewBox="0 0 ${y} ${x}" data-l="${p}" data-r="${y-g}" data-w="${y}">${P}${L}${E}<line class="cross" y1="${b}" y2="${x-v}" stroke="${ln}" stroke-opacity="0.5" visibility="hidden"/></svg><div class="readout">&nbsp;</div></div>`};Cs(`<div class="mast"><h1 style="font-size:2rem;color:${n?Qt:Gt}">${n?"Victory":"Defeat"}</h1><p class="tag">${[e||(N.daily?`Daily ${N.daily}`:""),Ft(N.time)].filter(Boolean).map(en).join(" · ")}</p></div><div class="tally" style="grid-template-columns:1fr ${"auto ".repeat(t)}"><span></span>${i.map(h=>`<b style="color:${z.colors[h]}">${en(N.names[h])}</b>`).join("")}${o("Ships built","built")}${o("Ships lost","lost")}${o("Ships destroyed","killed")}${o("Worlds taken","captured")}${o("Worlds lost","worldsLost")}${o("Freighters home","hauled")}${o("Freighters raided","raided")}${o("Research","research")}</div>`+c("Fleet strength","pow")+c("Worlds","worlds")+c("Income a day","inc",h=>Co(h))+'<button class="cta ghost" data-a="share">Share</button><button class="cta" data-a="again">Again</button><button class="cta ghost" data-a="quit">Title</button>'),Xi&&n&&(at.done[Xi.key]=!0,Si());const a=[...hn.querySelectorAll(".chart")],u=N.series||[],l=(h,d)=>{const f=d.getBoundingClientRect(),m=+d.dataset.l,y=+d.dataset.r,x=Math.min(1,Math.max(0,((h.clientX-f.left)/f.width*+d.dataset.w-m)/(y-m))),p=u[Math.round(x*(u.length-1))],g=m+p.t/(u[u.length-1].t||1)*(y-m);for(const b of a){const v=b.querySelector(".cross"),M=b.dataset.key;v.setAttribute("x1",g),v.setAttribute("x2",g),v.setAttribute("visibility","visible"),b.querySelector(".readout").innerHTML=`${Jm(p.t)}${i.map(S=>`<b style="color:${z.colors[S]}">${M==="inc"?Co(p[M][S]):Math.round(p[M][S])}</b>`).join("")}`}};for(const h of a){const d=h.querySelector("svg");d.addEventListener("pointerdown",f=>l(f,d)),d.addEventListener("pointermove",f=>l(f,d))}}function ha(){Zr()&&(At==="solo"&&(yi=!0),Cs(`<div class="ph"><h2>Paused</h2></div><button class="cta" data-a="resume">Resume</button><button class="cta ghost" data-a="sound">Sound ${at.sound?"on":"off"}</button><button class="cta ghost" data-a="gfx">Graphics ${at.gfx==="low"?"low":"high"}</button><button class="cta ghost" data-a="manual2">Manual</button><button class="cta ghost" data-a="quit">${At==="solo"?"Abandon":"Leave"}</button>`),hn.dataset.screen="pause",Pn())}let xi=null;function zr(n=""){Cs(`${Ba("Multiplayer")}<p class="lbl">Name</p><input id="mpname" maxlength="16" value="${en(at.name)}" placeholder="Your name" autocomplete="off" /><p class="lbl">Side</p>${og(at.faction)}<button class="cta" data-a="host">Host a game</button><p class="lbl">Join with a code</p><input id="mpcode" maxlength="5" placeholder="Code" autocomplete="off" autocapitalize="characters" /><button class="cta ghost" data-a="join">Join</button><p class="hint">${en(n)}</p>`),hn.dataset.screen="mp"}function us(){if(!xi)return;const n=At==="hostLobby";Cs(`${Ba("Lobby","leaveLobby")}<p class="lbl">Room code</p><div class="code">${xi.code||"·····"}</div><div class="opts">`+xi.seats.map((e,t)=>`<div class="opt" style="--c:${Zl[e.faction]||"#888"}"><i class="sw"></i><div><b>${en(e.name)}${t===xi.you?" (you)":""}</b><span>${ii[e.faction]?.name||""}${e.online?"":" · away"}</span></div>${n&&t>0?`<button class="mark" style="visibility:visible" data-a="kick" data-v="${t}">${Je("close")}</button>`:""}</div>`).join("")+`</div>${n?`<p class="lbl">Win by</p>${fa("winby",kf,Aa(),e=>lg[e])}<p class="lbl">Add an AI</p>${fa("lobbyLevel",sf,at.level,e=>va[e].name)}<button class="cta ghost" data-a="addAI">Add AI</button><button class="cta" data-a="startMP">Start</button>`:'<p class="hint">Waiting for the host to start</p>'}`)}function N2(){at.name=bc(Pe("mpname").value),Si(),xi={code:"",seats:[],you:0},At="hostLobby",zn=o2(at.name,{open:n=>{xi.code=n,us()},seats:n=>{xi.seats=n,At==="hostLobby"&&us()},cmd:(n,e)=>{At==="host"&&!yi&&ng(n,e)},error:n=>{Fr(),zr(n)},left:()=>{},rejoin:n=>zn.sendTo(n,{t:"start",seed:N.seed,players:N.mpPlayers,you:n})},at.faction),us()}function z2(){at.name=bc(Pe("mpname").value),Si();const n=Pe("mpcode").value.trim().toUpperCase();if(n.length!==5){zr("Enter the five-letter code");return}xi={code:n,seats:[],you:0},At="guestLobby",zn=l2(n,at.name,f2,{message:e=>{e.t==="lobby"?(xi.seats=e.seats,xi.you=e.you,xi.code=e.code,At==="guestLobby"&&us()):e.t==="full"||e.t==="kicked"?(Fr(),zr(e.why||"Removed from the room")):e.t==="start"?Io(bs({seed:e.seed,players:e.players,mp:!0,winBy:e.winBy}),{players:e.players,mode:"guest",me:e.you}):e.t==="snap"&&At==="guest"?(ap(N,e.s,ae),N.acc=0,e.fx&&(z.pendingFx=(z.pendingFx||[]).concat(e.fx))):e.t==="paused"&&(yi=e.paused)},error:e=>{Fr(),zr(e)},closed:()=>{At==="guest"&&!ls&&(Fr(),ec(),zr("The host left the game"))}},at.faction),us()}function F2(){const n=zn.seats.map(i=>({faction:i.faction,name:i.name,ai:i.kind==="ai"?i.difficulty:null}));if(n.length<2)return;zn.start();const e=Math.random()*1e9|0,t=bs({seed:e,players:n,mp:!0,winBy:Aa()});t.mpPlayers=n,zn.seats.forEach((i,r)=>{i.kind==="human"&&r>0&&zn.sendTo(r,{t:"start",seed:e,players:n,you:r,winBy:Aa()})}),Io(t,{players:n,mode:"host",me:0})}const kf=["capital","conquest","ark"],lg={capital:"Taking the capital",conquest:"Taking every world",ark:"The Ark"},Aa=()=>kf.includes(at.winBy)?at.winBy:at.conquest?"conquest":"capital";function Fr(){if(zn){try{zn.close()}catch{}zn=null}xi=null}function cg(n,e){switch(n){case"title":io();break;case"setup":to();break;case"daily":to(!0);break;case"faction":if(at.faction=e,Si(),hn.dataset.screen==="mp"){const t=Pe("mpname").value,i=Pe("mpcode").value;at.name=bc(t),zr(),Pe("mpcode").value=i}else to(hn.dataset.screen==="daily");break;case"rivals":at.rivals=+e,Si(),to(hn.dataset.screen==="daily");break;case"level":at.level=e,Si(),to(hn.dataset.screen==="daily");break;case"launch":gu(Math.random()*1e9|0);break;case"launchDaily":gu(ga().seed,!0);break;case"scenarios":D2();break;case"scenario":A0(e);break;case"manual":C0();break;case"manual2":C0(),hn.querySelector('[data-a="title"]').dataset.a="pauseBack";break;case"pauseBack":ha();break;case"mp":zr();break;case"host":N2();break;case"join":z2();break;case"lobbyLevel":at.level=e,Si(),us();break;case"addAI":{const t=zn.seats.map(i=>i.faction);zn.addAI(at.level,Ra.find(i=>!t.includes(i))||"boreal");break}case"kick":zn.remove(+e);break;case"startMP":F2();break;case"leaveLobby":Fr(),At="demo",zr();break;case"titleMP":Fr(),At="demo",io();break;case"resume":yi=!1,io();break;case"again":Xi?A0(Xi.key):At==="solo"?gu(N.daily?ga().seed:Math.random()*1e9|0,!!N.daily):(Fr(),ec());break;case"quit":Fr(),io(),ec();break;case"sound":at.sound=!at.sound,Si(),_s.setEnabled(at.sound),Ul(),hn.dataset.screen==="pause"&&!hn.hidden&&ha();break;case"text":at.ui=at.ui===1?1.15:at.ui>1?.9:1,Si(),document.documentElement.style.setProperty("--ui-mult",at.ui),Ul();break;case"gfx":at.gfx=at.gfx==="low"?"high":"low",Si(),Be.setQuality(tg()),Ul(),hn.dataset.screen==="pause"&&!hn.hidden&&ha();break;case"tutorial":{const t=[{faction:"concord",name:at.name||"You"},{faction:"boreal",ai:sf[0]}];Io(bs({seed:4,players:t}),{players:t,mode:"solo",tutorial:!0}),io();break}case"winby":at.winBy=e,at.conquest=e==="conquest",Si(),xi?us():to(hn.dataset.screen==="daily");break;case"share":U2();break}ye("tap")}Sc(hn,cg);Sc(Pe("title"),cg);const br=Pe("scene"),Wn=new Map;let ft=null,xu={t:0,key:null};br.addEventListener("contextmenu",n=>n.preventDefault());const ug=()=>{const n=Dt(N,z.plot.ship),e=Be.worldAt(z.plot.x,z.plot.y),t=n&&Be.screenOfShip(n.id);if(!n||!e||!t)return null;const i=Math.hypot(z.plot.x-t.x,z.plot.y-t.y);if(i<14)return null;const r=e.x-n.x,s=e.z-n.z,o=Math.hypot(r,s)||1;return{type:"burn",x:r/o,y:0,z:s/o,left:Math.min(60,i/4)}};let R0=0;function O2(){const n=performance.now();if(n-R0<120)return;R0=n;const e=ug(),t=Dt(N,z.plot.ship);z.plot.path=e&&t?ms(N,t,e,{coast:600,maxT:700,h:2,every:3}).path:null}const P0=n=>!z.plotMode||!Kn().length?!1:(z.plot={ship:Kn()[0].id,x:n.clientX,y:n.clientY,path:null},ft={kind:"plot",mouse:n.pointerType==="mouse"},!0),dg=n=>{const e=!n&&ug();e&&(vn({t:"order",ids:Kn().map(t=>t.id),order:e}),ye("confirm"),z.plotMode=!1),z.plot=null,ft=null,z.dragging=!1,Pn()},L0=(n,e)=>{const t=Be.pick(n,e),i=t?JSON.stringify(t):null,r=performance.now(),s=i!==null&&xu.key===i&&r-xu.t<350;xu=s?{t:0,key:null}:{t:r,key:i},v2(n,e,s),Pn()};br.addEventListener("pointerdown",n=>{if(N){n.preventDefault();try{br.setPointerCapture(n.pointerId)}catch{}if(Be.orbit.vaz=Be.orbit.vpol=0,n.pointerType==="mouse"){if(n.button===0&&P0(n))return;const e=n.button===2||n.button===1||n.altKey;ft={kind:e?"turn":"click",right:n.button===2,moved:!1,mouse:!0,x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY,pivot:e&&!Be.following()?Be.pivotAt(n.clientX,n.clientY):null},z.dragging=!0;return}if(n.isPrimary&&Wn.clear(),Wn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Wn.size===1)P0(n)||(ft={kind:"tap",x0:n.clientX,y0:n.clientY});else if(Wn.size===2){const[e,t]=[...Wn.values()];z.plot=null,ft={kind:"pinch",d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2,mx0:(e.x+t.x)/2,my0:(e.y+t.y)/2}}z.dragging=!0}});br.addEventListener("pointermove",n=>{if(ft?.kind==="plot"){z.plot.x=n.clientX,z.plot.y=n.clientY,O2();const r=Wn.get(n.pointerId);r&&(r.x=n.clientX,r.y=n.clientY);return}if(ft?.mouse){const r=n.clientX-ft.x,s=n.clientY-ft.y;ft.x=n.clientX,ft.y=n.clientY,Math.hypot(n.clientX-ft.x0,n.clientY-ft.y0)>5&&(ft.moved=!0,ft.kind==="click"&&(ft.kind="pan")),ft.kind==="pan"&&Be.pan(r,s),ft.kind==="turn"&&(ft.pivot?Be.rotateAround(ft.pivot,-r*.006,-s*.006):(Be.orbit.az-=r*.006,Be.orbit.pol-=s*.006));return}n.pointerType==="mouse"&&N&&(br.style.cursor=Be.pick(n.clientX,n.clientY)?"pointer":"grab");const e=Wn.get(n.pointerId);if(!e||!ft)return;const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,ft.kind==="pinch"){if(Wn.size<2)return;const[r,s]=[...Wn.values()],o=Math.hypot(r.x-s.x,r.y-s.y),c=(r.x+s.x)/2,a=(r.y+s.y)/2;Be.following()&&Math.hypot(c-ft.mx0,a-ft.my0)<40?Be.zoomBy(ft.d/Math.max(1,o)):(Be.pan(c-ft.mx,a-ft.my),Be.zoomAt(c,a,ft.d/Math.max(1,o))),ft.d=o,ft.mx=c,ft.my=a;return}if(ft.kind==="tap"&&Math.hypot(n.clientX-ft.x0,n.clientY-ft.y0)>10&&(ft.kind="orbit"),ft.kind==="orbit"){const r=4/window.innerHeight;Be.orbit.az-=t*r,Be.orbit.pol-=i*r,Be.orbit.vaz=-t*r,Be.orbit.vpol=-i*r}});function fg(n){if(ft?.kind==="plot"){Wn.delete(n.pointerId),dg(n.type==="pointercancel");return}if(ft?.mouse){const e=ft;ft=null,z.dragging=!1,e.kind==="click"&&n.type!=="pointercancel"&&L0(n.clientX,n.clientY),e.kind==="turn"&&e.right&&!e.moved&&n.type!=="pointercancel"&&g2(n.clientX,n.clientY);return}Wn.delete(n.pointerId)&&(ft?.kind==="tap"&&Wn.size===0&&n.type!=="pointercancel"&&L0(n.clientX,n.clientY),Wn.size===0?(ft=null,z.dragging=!1):ft={kind:"orbit"})}br.addEventListener("pointerup",fg);br.addEventListener("pointercancel",n=>{fg(n),ft=null,z.dragging=!1});const Uf=n=>{if(Wn.delete(n.pointerId)){if(ft?.kind==="plot"){dg(!0);return}Wn.size===0?(ft=null,z.dragging=!1):ft={kind:"orbit"}}};window.addEventListener("pointerup",Uf);window.addEventListener("pointercancel",Uf);br.addEventListener("lostpointercapture",Uf);const hg=()=>{Wn.clear(),ft=null,z.dragging=!1,z.plot=null,Ta=null};window.addEventListener("blur",hg);document.addEventListener("visibilitychange",hg);br.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?window.innerHeight:1);Be.zoomToward(n.clientX,n.clientY,Math.exp(Math.max(-.5,Math.min(.5,e*(n.ctrlKey?.01:.0015)))))},{passive:!1});const ic=new Set;window.addEventListener("keyup",n=>ic.delete(n.key.toLowerCase()));window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;if(n.key==="Escape"){Pe("sheet").hidden?!hn.hidden&&hn.dataset.screen==="pause"?(yi=!1,io()):z.sel.size||z.selBody!=null||z.targetShip!=null?(Hr(),z.selBody=null):ha():Pe("sheet").hidden=!0,Pn();return}if(!Zr())return;const e=n.key.toLowerCase();if("wasdqe".includes(e)||e.startsWith("arrow")||e==="+"||e==="="||e==="-"){ic.add(e),n.preventDefault();return}if(n.key===" ")n.preventDefault(),Pe("pause").click();else if(n.key>="1"&&n.key<="4"&&At==="solo")Br=2**(+n.key-1),Pn();else if(e==="h")Pe("sys").click();else if(e==="r")Pe("rnd").click();else if(e==="f"){const t=Kn()[0];t?Be.followShip(t.id,!0):z.selBody!=null&&Be.focus(N,z.selBody,!0)}});function B2(n){if(!ic.size)return;const e=(...i)=>i.some(r=>ic.has(r)),t=600*n;e("a","arrowleft")&&Be.pan(t,0),e("d","arrowright")&&Be.pan(-t,0),e("w","arrowup")&&Be.pan(0,t),e("s","arrowdown")&&Be.pan(0,-t),e("q")&&(Be.orbit.az+=n*1.2),e("e")&&(Be.orbit.az-=n*1.2),e("+","=")&&Be.zoomBy(Math.exp(-n*1.5)),e("-")&&Be.zoomBy(Math.exp(n*1.5))}let D0=performance.now(),I0=0,k0=0,U0=0,N0=0;function pg(n){requestAnimationFrame(pg);const e=Math.min(.1,(n-D0)/1e3);D0=n;const t=n/1e3;if(!N)return;B2(e);const i=yi||ls||!hn.hidden&&At==="solo"&&hn.dataset.screen==="pause";let r=0;if(At==="guest")yi||(N.acc=Math.min(.6,(N.acc||0)+e));else if(!i&&(r=e*(At==="solo"||At==="demo"?Br:1),!N.over&&(sp(N,r),!Nt||Nt.free)))for(const o of Ed)ev(N,o,r);z.fx=N.fx.splice(0),z.pendingFx&&(z.fx=z.fx.concat(z.pendingFx),z.pendingFx=null),At==="host"&&(kl.push(...z.fx),n-_0>250&&(_0=n,zn.seats.forEach((o,c)=>{c>0&&o.kind==="human"&&o.online&&zn.sendTo(c,{t:"snap",s:op(N,c),fx:kl.slice(0,120)})}),kl=[])),mo()||(Be.orbit.az+=e*.015),z.warp=Br;const s=Be.render(N,z,r,t);if(R2(),Zr()){if(n-k0>900){k0=n,z.paths=new Map;for(const o of Kn().slice(0,6))o.order&&o.order.type!=="form"&&o.at===null&&z.paths.set(o.id,ms(N,o,o.order,{maxT:2400,h:2,every:3,coast:o.order.type==="burn"?600:0}).path);for(const o of Kn().slice(0,6))!o.order&&o.at===null&&z.paths.set(o.id,ms(N,o,{type:"burn",x:1,y:0,z:0,left:0},{maxT:700,h:3,every:2,coast:660}).path)}if(z.target!=null&&n-U0>3e3&&(U0=n,ig()),Xi){const o=Xi.state(N,ae);o.done&&vu(o.done==="win",o.why)}!ls&&N.over?vu(N.over.winner===ae,""):!ls&&!N.alive[ae]&&vu(!1,"")}n-I0>220&&(I0=n,Pn()),n-N0>120&&(N0=n,_s.update({burn:mo()?s.burn:0,battle:mo()?s.battle:s.battle*.4,zoom:s.zoom,paused:i}))}Ul();ec();requestAnimationFrame(pg);
