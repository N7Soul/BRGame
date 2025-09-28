const CREATURES = [
  // common
  {name:'Tim Cheese',rarity:'Common',weight:100,price:5,income:1},
  {name:'Fluri Flura',rarity:'Common',weight:95,price:6,income:1},
  {name:'Pipi Kiwi',rarity:'Common',weight:90,price:7,income:2},
  {name:'Talpa Di Fero',rarity:'Common',weight:85,price:8,income:2},

  // uncommon (between common and rare)
  {name:'Trippi Troppi',rarity:'Uncommon',weight:40,price:120,income:3},
  {name:'Boneca Ambalabu',rarity:'Uncommon',weight:35,price:140,income:3},
  {name:'Tric Trac Baraboom',rarity:'Uncommon',weight:30,price:160,income:4},
  {name:'Ta Ta Sahur',rarity:'Uncommon',weight:25,price:180,income:4},

  // rare
  {name:'Cappuccino Assassino',rarity:'Rare',weight:12,price:400,income:10},
  {name:'Brr Brr Patapim',rarity:'Rare',weight:10,price:450,income:10},
  {name:'Bambini Crostini',rarity:'Rare',weight:8,price:500,income:15},
  {name:'Salamino Penguino',rarity:'Rare',weight:6,price:550,income:15},

  // epic
  {name:'Chef Crabracadabra',rarity:'Epic',weight:4,price:1000,income:25},
  {name:'Lionel Cactuselli',rarity:'Epic',weight:3.5,price:1200,income:25},
  {name:'Glorbo Fruttodrillo',rarity:'Epic',weight:3,price:1400,income:35},
  {name:'Strawberrelli Flamingelli',rarity:'Epic',weight:2.5,price:1600,income:35},

  // legendary
  {name:'Frigo Camelo',rarity:'Legendary',weight:0.8,price:10000,income:150},
  {name:'Rhino Toasterino',rarity:'Legendary',weight:0.6,price:12500,income:200},
  {name:'Bombardiro Crocodilo',rarity:'Legendary',weight:0.4,price:15000,income:250},
  {name:'Tob Tobi Tob',rarity:'Legendary',weight:0.2,price:17500,income:300},

  // mythic
  {name:'Tralalero Tralala',rarity:'Mythic',weight:0.1,price:50000,income:500},
  {name:'Odin Din Din Dun',rarity:'Mythic',weight:0.08,price:75000,income:600},
  {name:'Matteo',rarity:'Mythic',weight:0.06,price:90000,income:700},
  {name:'Sigma Boy',rarity:'Mythic',weight:0.04,price:100000,income:750},

  // secret
  {name:'The Great Brainrot',rarity:'Secret',weight:0.02,price:250000,income:1000}
  
];

let state = {currency:10,vault:[],conveyor:[],multiplier:1,discovered:[],ownedCounts:{}};

// Rarity ranking helper (higher = rarer)
const RARITY_RANK = {secret:7, mythic:6, legendary:5, epic:4, rare:3, uncommon:2, common:1};
function rarityRank(r){ return RARITY_RANK[(r||'').toLowerCase()] || 0 }

function saveState(){
  localStorage.setItem('collector', JSON.stringify(state));
}
function loadState(){
  const saved = localStorage.getItem('collector');
  if(saved) state = JSON.parse(saved);
  // backfill discovered if missing (older saves)
  if(!state.discovered) state.discovered = [];
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
  const div=document.createElement('div');div.className='item rarity-'+c.rarity;
  div.innerHTML=`<div><div class='creature-name'>${c.name}</div><div class='rarity-text muted'>${c.rarity} - Monini: ${c.income} Cash/Sec</div></div><div style='text-align:center;display:flex;align-items:center;justify-content:center'><button>Buy for $${fmt(c.price)}</button></div>`;
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
  div.innerHTML=`<div><div class='creature-name'>${c.name}</div><div class='rarity-text muted'>${c.rarity} • income ${c.income} Cash/Sec</div></div><div style='text-align:center;display:flex;align-items:center;justify-content:center'><button>Sell for $${fmt(sell)}</button></div>`;
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
  if (incomeBtn) incomeBtn.textContent = `Income: $${fmt(incomePerSec)} Cash/Sec`;
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
  // sort by rarity (secret->mythic->legendary->epic->rare->uncommon->common) then income desc
  const rarityOrder = {Secret:1, Mythic:2, Legendary:3, Epic:4, Rare:5, Uncommon:6, Common:7};
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
    else if (c.rarity==('Secret')) color = '#050505ff';
    barCell.style.background = color;
    el.appendChild(barCell);

    const nameCell = document.createElement('div'); nameCell.className='name'; nameCell.textContent = discovered ? c.name : '???'; el.appendChild(nameCell);
    const rarityCell = document.createElement('div'); rarityCell.className='muted'; rarityCell.textContent = c.rarity; el.appendChild(rarityCell);
  const incomeCell = document.createElement('div'); incomeCell.className='muted'; incomeCell.textContent = discovered ? `${c.income} Cash/Sec` : ''; el.appendChild(incomeCell);
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
  // Open modal
  if (target.closest && target.closest('#resetBtn')) {
    const m = document.getElementById('resetModal'); if (m) m.classList.remove('hidden');
    return;
  }
  // Open collection modal
  if (target.closest && target.closest('#collectionBtn')) {
    const m = document.getElementById('collectionModal'); if (m) { renderCollection(); m.classList.remove('hidden'); }
    return;
  }
  // Cancel / close modal
  if (target.closest && target.closest('#cancelReset')) {
    const m = document.getElementById('resetModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Close collection modal
  if (target.closest && target.closest('#closeCollection')) {
    const m = document.getElementById('collectionModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Confirm reset
  if (target.closest && target.closest('#confirmReset')) {
    // clear save and reset in-memory state
    localStorage.removeItem('collector');
    state = {currency:10,vault:[],conveyor:[],multiplier:1,discovered:[],ownedCounts:{}};
    saveState();
    spawnRandom();
    renderAll();
    const m = document.getElementById('resetModal'); if (m) m.classList.add('hidden');
    return;
  }
  // Clicking on overlay (outside modal-box) should close
  if (target.id === 'resetModal') { target.classList.add('hidden'); return; }
  if (target.id === 'collectionModal') { target.classList.add('hidden'); return; }
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
