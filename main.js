const CREATURES = [
  // Common
  {name:'Noobini Pizzanini',rarity:'Common',weight:100,price:25,income:1},
  {name:'Lirili Larila',rarity:'Common',weight:95,price:250,income:3},
  {name:'Tim Cheese',rarity:'Common',weight:90,price:500,income:5},
  {name:'Fluri Flura',rarity:'Common',weight:85,price:750,income:7},
  {name:'Talpa Di Fero',rarity:'Common',weight:80,price:1000,income:9},
  {name:'Svinina Bombardino',rarity:'Common',weight:75,price:1200,income:10},
  {name:'Pipi Kiwi',rarity:'Common',weight:70,price:1500,income:13},
  {name:'Racooni Jandelini',rarity:'Common',weight:65,price:1300,income:12},
  {name:'Pipi Corni',rarity:'Common',weight:60,price:1700,income:14},
  // Rare
  {name:'Trippi Troppi',rarity:'Rare',weight:40,price:2000,income:15},
  {name:'Gangster Footera',rarity:'Rare',weight:35,price:4000,income:30},
  {name:'Bandito Bobritto',rarity:'Rare',weight:32,price:4500,income:35},
  {name:'Boneca Ambalabu',rarity:'Rare',weight:30,price:5000,income:40},
  {name:'Cacto Hipopotamo',rarity:'Rare',weight:28,price:6500,income:50},
  {name:'Ta Ta Ta Ta Sahur',rarity:'Rare',weight:25,price:7500,income:55},
  {name:'Tric Trac Baraboom',rarity:'Rare',weight:22,price:9000,income:65},
  {name:'Pipi Avocado',rarity:'Rare',weight:20,price:9500,income:70},
  // Epic
  {name:'Cappuccino Assassino',rarity:'Epic',weight:12,price:10000,income:75},
  {name:'Brr Brr Patapim',rarity:'Epic',weight:10,price:15000,income:100},
  {name:'Trulimero Trulicina',rarity:'Epic',weight:9,price:20000,income:125},
  {name:'Bambini Crostini',rarity:'Epic',weight:8,price:22500,income:130},
  {name:'Bananita Dolphinita',rarity:'Epic',weight:7,price:25000,income:150},
  {name:'Perochello Lemonchello',rarity:'Epic',weight:6.5,price:27500,income:160},
  {name:'Brri Brri Bicus Dicus Bombicus',rarity:'Epic',weight:6,price:30000,income:175},
  {name:'Ti Ti Ti Sahur',rarity:'Epic',weight:5.5,price:37500,income:225},
  {name:'Avocadini Guffo',rarity:'Epic',weight:5,price:35000,income:225},
  {name:'Salamino Penguino',rarity:'Epic',weight:4.5,price:40000,income:250},
  {name:'Penguino Cocosino',rarity:'Epic',weight:4,price:45000,income:300},
  // Legendary
  {name:'Burbaloni Loliloli',rarity:'Legendary',weight:2.5,price:35000,income:200},
  {name:'Chimpazini Bananini',rarity:'Legendary',weight:2.2,price:50000,income:300},
  {name:'Ballerina Cappuccina',rarity:'Legendary',weight:2,price:100000,income:500},
  {name:'Chef Crabracadabra',rarity:'Legendary',weight:1.8,price:150000,income:600},
  {name:'Lionel Cactuseli',rarity:'Legendary',weight:1.6,price:175000,income:650},
  {name:'Glorbo Fruttodrillo',rarity:'Legendary',weight:1.4,price:200000,income:750},
  {name:'Blueberrini Octopusini',rarity:'Legendary',weight:1.2,price:250000,income:1000},
  {name:'Strawberelli Flamingelli',rarity:'Legendary',weight:1,price:275000,income:1100},
  {name:'Pandaccini Bananini',rarity:'Legendary',weight:0.9,price:300000,income:1200},
  {name:'Cocosini Mama',rarity:'Legendary',weight:0.8,price:285000,income:1200},
  {name:'Sigma Boy',rarity:'Legendary',weight:0.7,price:325000,income:1300},
  {name:'Pi Pi Watermelon',rarity:'Legendary',weight:0.6,price:135000,income:1300},
  // Mythic
  {name:'Frigo Camelo',rarity:'Mythic',weight:0.4,price:300000,income:1400},
  {name:'Orangutini Ananassini',rarity:'Mythic',weight:0.35,price:400000,income:1700},
  {name:'Rhino Toasterino',rarity:'Mythic',weight:0.3,price:450000,income:2100},
  {name:'Bombardiro Crocodilo',rarity:'Mythic',weight:0.25,price:500000,income:2500},
  {name:'Bombombini Gusini',rarity:'Mythic',weight:0.2,price:1000000,income:5000},
  {name:'Avocadorilla',rarity:'Mythic',weight:0.18,price:2000000,income:7500},
  {name:'Cavallo Virtuso',rarity:'Mythic',weight:0.16,price:2500000,income:7500},
  {name:'Gorillo Watermelondrillo',rarity:'Mythic',weight:0.14,price:3000000,income:8000},
  {name:'Tob Tobi Tobi',rarity:'Mythic',weight:0.12,price:3500000,income:8500},
  {name:'Ganganzelli Trulala',rarity:'Mythic',weight:0.1,price:4000000,income:9000},
  {name:'Te Te Te Sahur',rarity:'Mythic',weight:0.09,price:2500000,income:9500},
  {name:'Lerulerulerule',rarity:'Mythic',weight:0.08,price:3500000,income:8700},
  {name:'Tracoducotulu Delapeladustuz',rarity:'Mythic',weight:0.07,price:3000000,income:12000},
  // Brainrot God
  {name:'Coco Elefanto',rarity:'Brainrot God',weight:0.05,price:5000000,income:10000},
  {name:'Girafa Celestre',rarity:'Brainrot God',weight:0.048,price:7500000,income:20000},
  {name:'Gattatino Nyanino',rarity:'Brainrot God',weight:0.046,price:7500000,income:35000},
  {name:'Chihuanini Taconini',rarity:'Brainrot God',weight:0.044,price:8500000,income:45000},
  {name:'Matteo',rarity:'Brainrot God',weight:0.042,price:10000000,income:50000},
  {name:'Tralalero Tralala',rarity:'Brainrot God',weight:0.04,price:10000000,income:50000},
  {name:'Los Crocodillitos',rarity:'Brainrot God',weight:0.038,price:12500000,income:55000},
  {name:'Odin Din Din Dun',rarity:'Brainrot God',weight:0.036,price:15000000,income:75000},
  {name:'Statutino Libertino',rarity:'Brainrot God',weight:0.034,price:20000000,income:75000},
  {name:'Tukanno Bananno',rarity:'Brainrot God',weight:0.032,price:22500000,income:100000},
  {name:'Tipi Topi Taco',rarity:'Brainrot God',weight:0.03,price:20000000,income:75000},
  {name:'Extinct Ballerina',rarity:'Brainrot God',weight:0.028,price:23500000,income:125000},
  {name:'Tralalita Tralala',rarity:'Brainrot God',weight:0.026,price:20000000,income:100000},
  {name:'Espresso Signora',rarity:'Brainrot God',weight:0.024,price:25000000,income:70000},
  {name:'Trenostruzzo Turbo 3000',rarity:'Brainrot God',weight:0.022,price:25000000,income:150000},
  {name:'Urubini Flamenguini',rarity:'Brainrot God',weight:0.02,price:30000000,income:150000},
  {name:'Trippi Troppi Troppa Trippa',rarity:'Brainrot God',weight:0.018,price:30000000,income:175000},
  {name:'Gattito Tacoto',rarity:'Brainrot God',weight:0.016,price:32500000,income:160000},
  {name:'Ballerino Lololo',rarity:'Brainrot God',weight:0.014,price:35000000,income:200000},
  {name:'Pakrahmatmamat',rarity:'Brainrot God',weight:0.012,price:37500000,income:215000},
  {name:'Los Tungtungtungcitos',rarity:'Brainrot God',weight:0.01,price:37500000,income:210000},
  {name:'Piccione Macchina',rarity:'Brainrot God',weight:0.009,price:40000000,income:225000},
  {name:'Tractoro Dinosauro',rarity:'Brainrot God',weight:0.008,price:42500000,income:230000},
  {name:'Los Bombinitos',rarity:'Brainrot God',weight:0.007,price:42500000,income:220000},
  {name:'Los Orcalitos',rarity:'Brainrot God',weight:0.006,price:45000000,income:235000},
  {name:'Los Tipi Tacos',rarity:'Brainrot God',weight:0.005,price:46000000,income:260000},
  {name:'Bombardini Tortinii',rarity:'Brainrot God',weight:0.004,price:50000000,income:225000},
  // Secret
  {name:'Las Sis',rarity:'Secret',weight:0.003,price:25000000,income:17500},
  {name:'La Vacca Staturno Saturnita',rarity:'Secret',weight:0.0029,price:30000000,income:25000},
  {name:'Blackhole Goat',rarity:'Secret',weight:0.0028,price:45000000,income:40000},
  {name:'Agarrini la Palini',rarity:'Secret',weight:0.0027,price:60000000,income:42500},
  {name:'Los Matteos',rarity:'Secret',weight:0.0026,price:75000000,income:30000},
  {name:'Chimpanzini Spiderini',rarity:'Secret',weight:0.0025,price:100000000,income:32500},
  {name:'Sammyini Spyderini',rarity:'Secret',weight:0.0024,price:125000000,income:32500},
  {name:'Extinct Tralalero',rarity:'Secret',weight:0.0023,price:150000000,income:45000},
  {name:'Extinct Matteo',rarity:'Secret',weight:0.0022,price:175000000,income:62500},
  {name:'Dul Dul Dul',rarity:'Secret',weight:0.0021,price:200000000,income:37500},
  {name:'Los Tralaleritos',rarity:'Secret',weight:0.002,price:225000000,income:50000},
  {name:'Las Tralaleritas',rarity:'Secret',weight:0.0019,price:250000000,income:65000},
  {name:'Las Vaquitas Saturnitas',rarity:'Secret',weight:0.0018,price:275000000,income:75000},
  {name:'La Karkerkar Combinasion',rarity:'Secret',weight:0.0017,price:300000000,income:70000},
  {name:'Job Job Job Sahur',rarity:'Secret',weight:0.0016,price:325000000,income:70000},
  {name:'Los Spyderrinis',rarity:'Secret',weight:0.0015,price:350000000,income:45000},
  {name:'Graipuss Medussi',rarity:'Secret',weight:0.0014,price:375000000,income:100000},
  {name:'Los Hotspotsitos',rarity:'Secret',weight:0.0013,price:400000000,income:2000000},
  {name:'Nooo My Hotspot',rarity:'Secret',weight:0.0012,price:425000000,income:150000},
  {name:'La Sahur Combinasion',rarity:'Secret',weight:0.0011,price:450000000,income:200000},
  {name:'Quesadilla Crocodila',rarity:'Secret',weight:0.001,price:475000000,income:300000},
  {name:'Chicleteira Bicicleteira',rarity:'Secret',weight:0.0009,price:500000000,income:350000},
  {name:'Spaghetti Tualetti',rarity:'Secret',weight:0.0008,price:525000000,income:6000000},
  {name:'La Grande Combinasion',rarity:'Secret',weight:0.0007,price:550000000,income:1000000},
  {name:'Los Noo My Hotspotsitos',rarity:'Secret',weight:0.0006,price:575000000,income:500000},
  {name:'67',rarity:'Secret',weight:0.0005,price:600000000,income:750000},
  {name:'Los Combinasionas',rarity:'Secret',weight:0.0004,price:625000000,income:6370000},
  {name:'Karkerkar Kurkur',rarity:'Secret',weight:0.0003,price:650000000,income:240000},
  {name:'Nuclearo Dinossauro',rarity:'Secret',weight:0.0002,price:675000000,income:1500000},
  {name:'Celularcini Viciosini',rarity:'Secret',weight:0.00019,price:700000000,income:2250000},
  {name:'Tralaledon',rarity:'Secret',weight:0.00018,price:725000000,income:2750000},
  {name:'La Extinct Grande',rarity:'Secret',weight:0.00017,price:750000000,income:2350000},
  {name:'Ketupat Kepat',rarity:'Secret',weight:0.00016,price:775000000,income:3500000},
  {name:'La Supreme Combinasion',rarity:'Secret',weight:0.00015,price:800000000,income:4000000},
  {name:'Ketchuru and Musturu',rarity:'Secret',weight:0.00014,price:825000000,income:4250000},
  {name:'Garama and Madundung',rarity:'Secret',weight:0.00013,price:850000000,income:5000000},
  {name:'Dragon Cannelloni',rarity:'Secret',weight:0.00012,price:1000000000,income:10000000},
  // OG
  {name:'Derktism Trainino',rarity:'OG',weight:0.00001,price:50000000000,income:25000000},
  {name:'Davidinni Prereleasito',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Tynino Swolgrande',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Dandutto Sleepini',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Bree No Bicus Dicus',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Roborni Cheatorni',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Jordonia Verizonia',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Nikkito Parverino',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
  {name:'Tifforny Pooterus',rarity:'OG',weight:0.00001,price:50000000000,income:2500000},
];

let state = {currency:25,vault:[],conveyor:[],multiplier:1,discovered:[],ownedCounts:{},usedCodes:[]};

// Rarity ranking helper (higher = rarer)
const RARITY_RANK = {og:9, secret:8, 'Brainrot God':7, mythic:6, legendary:5, epic:4, rare:3, uncommon:2, common:1};
function rarityRank(r){ return RARITY_RANK[(r||'').toLowerCase()] || 0 }

function saveState(){
  localStorage.setItem('collector', JSON.stringify(state));
}
function loadState(){
  const saved = localStorage.getItem('collector');
  if(saved) state = JSON.parse(saved);
  // backfill discovered if missing (older saves)
  if(!state.discovered) state.discovered = [];
  // backfill usedCodes if missing (older saves)
  if(!state.usedCodes) state.usedCodes = [];
  // ensure ownedCounts exists and backfill from current vault if missing
  if(!state.ownedCounts) {
    state.ownedCounts = {};
    if(Array.isArray(state.vault)){
      state.vault.forEach(v=>{ state.ownedCounts[v.name] = (state.ownedCounts[v.name]||0)+1 });
    }
  }
}

function fmt(n){return Math.floor(n).toLocaleString()}
function pickWeighted(list){
  const total = list.reduce((s,c)=>s+c.weight,0);
  let r=Math.random()*total;
  for(const c of list){r-=c.weight;if(r<=0) return {...c}};
  return {...list[list.length-1]};
}

const currencyEl=document.getElementById('currency');
const spawnListEl=document.getElementById('spawnList');
const ownedEl=document.getElementById('owned');
const incomeBtn = document.getElementById('incomeBtn');

function renderSpawner(){
  spawnListEl.innerHTML='';
  state.conveyor.slice().forEach((c,i)=>{
  const canAfford = state.currency >= c.price;
  const div=document.createElement('div');div.className='item rarity-'+c.rarity;
  const buttonClass = canAfford ? '' : ' disabled';
  div.innerHTML=`<div><div class='creature-name'>${c.name}</div><div class='rarity-text muted'>${c.rarity} - Monini: ${c.income} per Sec</div></div><div style='text-align:center;display:flex;align-items:center;justify-content:center'><button class='${buttonClass}'>Buy for $${fmt(c.price)}</button></div>`;
    spawnListEl.appendChild(div);
    div.querySelector('button').onclick=()=>{
      if(state.currency<c.price) return;
      state.currency-=c.price;
      state.vault.push(c);
      // mark as discovered persistently
      if(!state.discovered.includes(c.name)) state.discovered.push(c.name);
      // increment historical owned count
      state.ownedCounts[c.name] = (state.ownedCounts[c.name]||0) + 1;
      const index = state.conveyor.indexOf(c);
      if(index > -1) state.conveyor.splice(index,1);
      renderAll();
      saveState();
    };
  });
}

function renderOwned(){
  ownedEl.innerHTML='';
  // Sort by rarity (rarer first) then by income desc
  const sorted = [...state.vault].sort((a,b)=>{
    const r = rarityRank(b.rarity) - rarityRank(a.rarity);
    if(r!==0) return r;
    return b.income - a.income;
  });
  sorted.forEach((c)=>{
    const sell=Math.floor(c.price*0.4);
  const div=document.createElement('div');div.className='item rarity-'+c.rarity;
  div.innerHTML=`<div><div class='creature-name'>${c.name}</div><div class='rarity-text muted'>${c.rarity} • income ${c.income} per Sec</div></div><div style='text-align:center;display:flex;align-items:center;justify-content:center'><button>Sell for $${fmt(sell)}</button></div>`;
    ownedEl.appendChild(div);
    div.querySelector('button').onclick=()=>{
      // find the actual index of this item in state.vault (handles duplicates correctly)
      const idx = state.vault.findIndex(v=>v===c || (v.name===c.name && v.price===c.price && v.income===c.income));
      if(idx > -1) state.vault.splice(idx,1);
      state.currency+=sell;
      renderAll();
      saveState();
    };
  });
}

function renderAll(){
  currencyEl.textContent=`$${fmt(state.currency)}`;
  // compute income per second from owned items and multiplier
  const incomePerSec = state.vault.reduce((s,c)=>s+c.income,0) * state.multiplier;
  if (incomeBtn) incomeBtn.textContent = `Income: $${fmt(incomePerSec)} per Sec`;
  renderSpawner();
  renderOwned();
}

function spawnRandom(){state.conveyor=[];for(let i=0;i<10;i++){state.conveyor.push(pickWeighted(CREATURES));}renderAll();}

// Auto-refresh creatures every 15 seconds and update countdown display
const REFRESH_INTERVAL = 15; // seconds
let refreshRemaining = REFRESH_INTERVAL;
const countdownEl = document.getElementById('countdown');
function tickCountdown(){
  refreshRemaining -= 1;
  if(countdownEl) countdownEl.textContent = String(Math.max(0, refreshRemaining));
  if(refreshRemaining <= 0){
    spawnRandom();
    refreshRemaining = REFRESH_INTERVAL;
  }
}
// start ticking every second
setInterval(tickCountdown, 1000);

// Passive income interval
setInterval(()=>{state.currency+=state.vault.reduce((s,c)=>s+c.income,0)*state.multiplier/2;renderAll();saveState();},500);

loadState();
spawnRandom();
renderAll();

// Modal markup insertion (created here so elements exist)
const modalHtml = `
<div id="aboutModal" class="modal-overlay hidden">
  <div class="modal-box" style="max-height:80vh;overflow-y:auto">
    <div style="font-weight:700;margin-bottom:8px">About Brainrotini Gamini</div>
    <div style="color:var(--muted);margin-bottom:16px">
      <p>Welcome to Brainrotini Gamini! Collect brainrots and make the most money!</p>
      <p>Each brainrot generates Monini over time. Discover rare creatures and build your collection!</p>
      <p>Features:</p>
      <ul style="margin-left:20px">
        <li>100+ unique Brainrot characters</li>
        <li>9 rarity tiers from Common to OG</li>
        <li>Become the greatest Brainrot collector on the planet!</li>
      </ul>
      <p>Version History:</p>
        <ul style="margin-left:20px">
        <li>Version: 0.1.5</li>
        <ul style="margin-left:20px">
          <li>Codes can now only be redeemed once</li>
          <li>Adjusted the "About" section to scroll</li>
          <li>Next update will have HUGE changes, stay tuned!</li>
        </ul>
        <li>Version: 0.1.4</li>
        <ul style="margin-left:20px">
          <li>Added rewards codes (You'll have to find where they go!)</li>
          <li>Large overhaul on secret and OG prices and income</li>
        </ul>
        <li>Version: 0.1.3</li>
        <ul style="margin-left:20px">
          <li>Added "About" button</li>
          <li>Moved "Reset Save" button into an about section</li>
          <li>Added credits</li>
        </ul>
        <li>Version: 0.1.2</li>
        <ul style="margin-left:20px">
          <li>"Cash" has been changed to "Monini" to reflect the brainrots on rotation
          <li>currency changed from "Cash/Sec" to "per Sec"</li>
          <li>Changed color of "OG" rarity to bright green</li>
          <li>Added a version number to keep track of what version we're on</li>
        </ul>
        <li>Version: 0.1.1</li>
        <ul style="margin-left:20px">
          <li>Buy button is now unclickable if player doesn't have the money</li>
          <li>New OG brainrots as easter eggs for my friends</li>
          <li>Small stylistic changes</li>
        </ul>
        <li>Initial Release: 0.1.0</li>
      </ul>
      <p>Credits:</p>
      <ul style="margin-left:20px">
        <li>Developer: N7Soul, ChatGPT, Claude Sonnet 4</li>
        <li>Design: N7Soul, ChatGPT, Claude Sonnet 4</li>
        <li>Special Thanks: CoderSyntax - critiquing my code and making it better everyday!</li>
        <li>Special Thanks: Friends doing beta testing and providing feedback for me <3</li>
      </ul>
    </div>
    <div class="modal-actions">
      <button id="closeAbout" class="small">Close</button>
      <button id="resetBtn" class="btn-danger">Reset Save</button>
    </div>
  </div>
</div>
<div id="codeModal" class="modal-overlay hidden">
  <div class="modal-box">
    <div style="font-weight:700;margin-bottom:8px">Redeem Code</div>
    <div style="color:var(--muted);margin-bottom:16px">Enter a code to receive rewards:</div>
    <input type="text" id="codeInput" placeholder="Enter code here..." style="width:100%;box-sizing:border-box;padding:8px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:var(--card);color:#e6eef8;margin-bottom:16px;font-family:inherit">
    <div id="codeMessage" style="margin-bottom:16px;font-size:14px"></div>
    <div class="modal-actions">
      <button id="closeCode" class="small">Close</button>
      <button id="redeemCode" style="background:var(--accent);border:0;padding:8px 12px;border-radius:8px;color:white;cursor:pointer">Redeem</button>
    </div>
  </div>
</div>
<div id="resetModal" class="modal-overlay hidden">
  <div class="modal-box">
    <div style="font-weight:700;margin-bottom:8px">Are you sure you want to reset your save?</div>
    <div style="color:var(--muted)">This will remove ALL DATA and start as a new game.</div>
    <div class="modal-actions">
      <button id="cancelReset" class="small">No</button>
      <button id="confirmReset" class="btn-danger">Yes</button>
    </div>
  </div>
</div>`;
document.body.insertAdjacentHTML('beforeend', modalHtml);
// Collection modal (list of all creatures, show name only if owned, else ???)
const collectionHtml = `
<div id="collectionModal" class="modal-overlay hidden">
  <div class="modal-box">
    <div style="font-weight:700;margin-bottom:8px">Collection</div>
    <div style="color:var(--muted);margin-bottom:8px">Your discovered Brainrots</div>
    <div id="collectionGrid" style="max-height:360px;overflow:auto;display:grid;grid-template-columns:6px 1fr 110px 90px 64px;row-gap:8px;padding-right:6px">
      <!-- header cells will be rendered by renderCollection -->
    </div>
    <div class="modal-actions">
      <button id="closeCollection" class="small">Close</button>
    </div>
  </div>
</div>`;
document.body.insertAdjacentHTML('beforeend', collectionHtml);

// Build the collection list: show '???' for unowned, reveal name once owned.
function renderCollection(){
  const el = document.getElementById('collectionGrid');
  if(!el) return;
  // sort by rarity (OG->secret->brainrot god->mythic->legendary->epic->rare->uncommon->common) then income desc
  const rarityOrder = {OG:1, Secret:2, 'Brainrot God':3, Mythic:4, Legendary:5, Epic:6, Rare:7, Uncommon:8, Common:9};
  const all = [...CREATURES].sort((a,b)=>{
    const r = (rarityOrder[b.rarity]||0) - (rarityOrder[a.rarity]||0);
    if(r!==0) return r;
    return b.income - a.income;
  });
  // Build header (five cells)
  el.innerHTML = '';
  const hdrCells = [ '', 'Name', 'Rarity', 'Income', 'Owned' ];
  hdrCells.forEach((t,i)=>{
    const d = document.createElement('div');
    d.className = 'collection-header';
    d.style.padding = '8px 6px';
    if(i>0) d.style.fontWeight = '700';
    if(i===4) d.style.textAlign = 'right';
    d.textContent = t;
    el.appendChild(d);
  });

  // Now rows: each creature contributes 5 cells (bar, name, rarity, income, count)
  all.forEach(c=>{
    const discovered = state.discovered.includes(c.name);
  const count = state.ownedCounts[c.name] || 0;
    // bar cell
    const barCell = document.createElement('div');
    barCell.className = 'collection-bar';
    let color = '#6b7280';
    if(c.rarity==('Common')) color = '#6b7280';
    else if(c.rarity==('Uncommon')) color = '#10b981';
    else if(c.rarity==('Rare')) color = '#3b82f6';
    else if(c.rarity==('Epic')) color = '#7c3aed';
    else if(c.rarity==('Legendary')) color = '#f97316';
    else if(c.rarity==('Mythic')) color = '#ef4444';
    else if(c.rarity==('Brainrot God')) color = '#fbbf24';
    else if (c.rarity==('Secret')) color = '#050505ff';
    else if (c.rarity==('OG')) color = '#0ef306ff';
    barCell.style.background = color;
    el.appendChild(barCell);

    const nameCell = document.createElement('div'); nameCell.className='name'; nameCell.textContent = discovered ? c.name : '???'; el.appendChild(nameCell);
    const rarityCell = document.createElement('div'); rarityCell.className='muted'; rarityCell.textContent = c.rarity; el.appendChild(rarityCell);
  const incomeCell = document.createElement('div'); incomeCell.className='muted'; incomeCell.textContent = discovered ? `${c.income} per Sec` : ''; el.appendChild(incomeCell);
    const countCell = document.createElement('div'); countCell.className='count muted'; countCell.style.textAlign='right'; countCell.textContent = String(count); el.appendChild(countCell);
  });
}

// Ensure collection updates when owned changes
const originalRenderOwned = renderOwned;
renderOwned = function(){
  originalRenderOwned();
  renderCollection();
};

// Use event delegation so handlers still work if elements change dynamically
document.addEventListener('click', (e) => {
  const target = e.target;
  // Open code modal when version text is clicked
  if (target.closest && target.closest('#versionText')) {
    const m = document.getElementById('codeModal'); if (m) m.classList.remove('hidden');
    document.getElementById('codeInput').focus();
    return;
  }
  // Open about modal
  if (target.closest && target.closest('#aboutBtn')) {
    const m = document.getElementById('aboutModal'); if (m) m.classList.remove('hidden');
    return;
  }
  // Open reset modal from about modal
  if (target.closest && target.closest('#resetBtn')) {
    const aboutModal = document.getElementById('aboutModal'); if (aboutModal) aboutModal.classList.add('hidden');
    const resetModal = document.getElementById('resetModal'); if (resetModal) resetModal.classList.remove('hidden');
    return;
  }
  // Open collection modal
  if (target.closest && target.closest('#collectionBtn')) {
    const m = document.getElementById('collectionModal'); if (m) { renderCollection(); m.classList.remove('hidden'); }
    return;
  }
  // Close about modal
  if (target.closest && target.closest('#closeAbout')) {
    const m = document.getElementById('aboutModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Cancel / close reset modal
  if (target.closest && target.closest('#cancelReset')) {
    const m = document.getElementById('resetModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Close collection modal
  if (target.closest && target.closest('#closeCollection')) {
    const m = document.getElementById('collectionModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Close code modal
  if (target.closest && target.closest('#closeCode')) {
    const m = document.getElementById('codeModal'); if (m) m.classList.add('hidden');
    document.getElementById('codeInput').value = '';
    document.getElementById('codeMessage').textContent = '';
    return;
  }
  // Redeem code
  if (target.closest && target.closest('#redeemCode')) {
    redeemCode();
    return;
  }
  // Confirm reset
  if (target.closest && target.closest('#confirmReset')) {
    // clear save and reset in-memory state
    localStorage.removeItem('collector');
    state = {currency:25,vault:[],conveyor:[],multiplier:1,discovered:[],ownedCounts:{},usedCodes:[]};
    saveState();
    spawnRandom();
    refreshRemaining = REFRESH_INTERVAL; // Reset the refresh timer
    renderAll();
    const m = document.getElementById('resetModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Clicking on overlay (outside modal-box) should close
  if (target.id === 'aboutModal') { target.classList.add('hidden'); return; }
  if (target.id === 'resetModal') { target.classList.add('hidden'); return; }
  if (target.id === 'collectionModal') { target.classList.add('hidden'); return; }
  if (target.id === 'codeModal') { 
    target.classList.add('hidden'); 
    document.getElementById('codeInput').value = '';
    document.getElementById('codeMessage').textContent = '';
    return; 
  }
});

// SELL DROPDOWN: toggle and actions
const sellToggle = document.getElementById('sellDropdownToggle');
const sellMenuWrapper = document.getElementById('sellDropdown');
const sellMenu = document.getElementById('sellDropdownMenu');
if(sellToggle && sellMenuWrapper && sellMenu){
  sellToggle.addEventListener('click', (ev)=>{
    ev.stopPropagation();
    const visible = sellMenu.style.display === 'block';
    sellMenu.style.display = visible ? 'none' : 'block';
    try{ sellToggle.setAttribute('data-open', String(!visible)); }catch(e){}
  });
  // delegate clicks inside menu
  sellMenu.addEventListener('click', (ev)=>{
    const opt = ev.target.closest && ev.target.closest('.sell-option');
    if(!opt) return;
    const rarity = opt.dataset.rarity;
    if(rarity === 'all'){
      if(!confirm('Sell ALL owned Brainrots? This cannot be undone.')) return;
    }
    sellByRarity(rarity);
    sellMenu.style.display='none';
  });
  // close when clicking outside
  document.addEventListener('click', (ev)=>{
    if(ev.target===sellToggle) return;
    if(!sellMenuWrapper.contains(ev.target) && ev.target!==sellToggle){
      sellMenu.style.display='none';
      try{ sellToggle.setAttribute('data-open','false'); }catch(e){}
    }
  });
}

function sellByRarity(rarity){
  if(!state.vault || state.vault.length===0) return;
  let toSell;
  if(rarity==='all') toSell = [...state.vault];
  else toSell = state.vault.filter(v=>String(v.rarity||'').toLowerCase() === String(rarity||'').toLowerCase());
  if(toSell.length===0) return;
  // compute total sell value and remove items
  let total = 0;
  toSell.forEach(item=>{
    const sell = Math.floor(item.price*0.4);
    total += sell;
    // remove one instance from vault
    const idx = state.vault.findIndex(v=>v===item || (v.name===item.name && v.price===item.price && v.income===item.income));
    if(idx>-1) state.vault.splice(idx,1);
  });
  state.currency += total;
  renderAll();
  saveState();
}

// Code redemption system
function redeemCode() {
  const codeInput = document.getElementById('codeInput');
  const messageEl = document.getElementById('codeMessage');
  const code = codeInput.value.trim().toUpperCase();
  
  if (!code) {
    messageEl.textContent = 'Please enter a code.';
    messageEl.style.color = '#ef4444';
    return;
  }
  
  // Check if code has already been used
  if (state.usedCodes.includes(code)) {
    messageEl.textContent = 'This code has already been redeemed.';
    messageEl.style.color = '#ef4444';
    return;
  }
  
  // Define available codes
  const codes = {
    'WELCOME': { type: 'money', amount: 10000, description: 'Welcome bonus' },
    'HUNNIT': { type: 'money', amount: 100000, description: 'Hunnit Bands!' },
    'LILWAYNE': { type: 'money', amount: 1000000, description: 'A MILLI!' },
    'ZUCCHINIONTHEHEAD': { type: 'creature', creature: 'Derktism Trainino', description: 'OG Brainrot!' },
    'DICKDEEPINTRAINS': { type: 'creature', creature: 'Davidinni Prereleasito', description: 'OG Brainrot!' },
    'HOWMUCHBREADDOYOUNEED': { type: 'creature', creature: 'Tynino Swolgrande', description: 'OG Brainrot!' },
    'GOLDENRETRIEVERASS': { type: 'creature', creature: 'Dandutto Sleepini', description: 'OG Brainrot!' },
    'SOUTHERNTWANG': { type: 'creature', creature: 'Bree No Bicus Dicus', description: 'OG Brainrot!' },
    'ROBISACHEATER': { type: 'creature', creature: 'Roborni Cheatorni', description: 'OG Brainrot!' },
    'JORDONIA': { type: 'creature', creature: 'Jordonia Verizonia', description: 'OG Brainrot!' },
    'SNACKS': { type: 'creature', creature: 'Nikkito Parverino', description: 'OG Brainrot!' },
    'HOWHEKEEPGETTINGSTANK': { type: 'creature', creature: 'Tifforny Pooterus', description: 'OG Brainrot!' }
    // Add more codes as needed
  };
  
  if (codes[code]) {
    const reward = codes[code];
    
    if (reward.type === 'money') {
      state.currency += reward.amount;
      messageEl.textContent = `Valid! You received $${fmt(reward.amount)} - ${reward.description}`;
      messageEl.style.color = '#10b981';
    } else if (reward.type === 'creature') {
      const creature = CREATURES.find(c => c.name === reward.creature);
      if (creature) {
        state.vault.push({...creature});
        if (!state.discovered.includes(creature.name)) state.discovered.push(creature.name);
        state.ownedCounts[creature.name] = (state.ownedCounts[creature.name] || 0) + 1;
        messageEl.textContent = `Valid! You received ${creature.name} - ${reward.description}`;
        messageEl.style.color = '#10b981';
      }
    }
    
    // Mark code as used
    state.usedCodes.push(code);
    
    // Clear the code after successful redemption
    codeInput.value = '';
    saveState();
    renderAll();
  } else {
    messageEl.textContent = 'Invalid code. Please try again.';
    messageEl.style.color = '#ef4444';
  }
}
