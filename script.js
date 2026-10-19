/* 1. FOTO: Masukkan nama file foto di sini (taruh satu folder dengan file ini) ===== */
const PHOTOS={
  logo: 'logo-smkm3-transparan.png',  // Logo SMKM 3 Ciputat untuk Cover
  cover: 'gedung-bmkg.png',       // 'gedung-bmkg.jpg'
  tempat: 'ruang-kerja.jpeg',      // 'ruang-kerja.jpg'
  p1main: 'main1.png',      //  'buku-tamu.png'
  p1masuk: 'masuk1.png',     //  'form-masuk.png'
  p1keluar: 'keluar1.png',    //  'form-keluar.png'
  p1admin: 'admin1.png',     //  'admin-bukutamu.png'
  p2main: 'main2.png',      //  'logbook.png'
  p2peserta: 'masuk2.png',   //  'logbook-user.png'
  p2admin: 'admin2.png',     //  'logbook-admin.png'
};

/* 2. ISI SLIDE: teks dalam [ ... ] otomatis jadi sorotan kuning */
const S=[
{t:'cover',title:'Perancangan UI/UX Sistem Buku Tamu dan Logbook PKL',sub:'Balai Besar Meteorologi Klimatologi dan Geofisika Wilayah II',who:'Muhamad Rizky Apriadi · Rekayasa Perangkat Lunak\nSMK Muhammadiyah 3 Ciputat Tangerang Selatan · 2026',photo:['cover','gedung-bmkg.png'],logo:'logo-smkm3-transparan.png'},
{t:'split',title:'Tempat dan Waktu PKL',cards:[
 {h:'Instansi',b:'Unit pelaksana teknis BMKG untuk pelayanan data cuaca, iklim, kualitas udara, gempa bumi, dan tsunami di wilayah kerja II.'},
 {h:'Waktu',b:'3 Agustus – 30 Oktober 2026, Hari Senin s.d. Kamis, Pukul 09.00 – 15.00 WIB',a:1},
 {h:'Lokasi',b:'Jl. H. Abdul Gani No. 05, Pesanggrahan, Ciputat Timur, Kota Tangerang Selatan'}],photo:['tempat','ruang-kerja.jpeg']},
{t:'struktur',title:'Struktur Balai Besar MKG Wilayah II',
 kepala:{title:'Kepala Balai',name:'Dr. Hartanto, S.T., M.T.'},
 leftCol:{
   title:'Kepala Bagian Tata Usaha',
   sub:'Kepegawaian, keuangan, persuratan, program & laporan',
   head:'Ana Oktafiana Susilawati',
   items:[
     {h:'Persuratan dan Kepegawaian',desc:'Surat masuk/keluar, kearsipan, administrasi pegawai',lead:'Daniel Febriantono'},
     {h:'Keuangan dan Perlengkapan',desc:'Anggaran, laporan keuangan, pengelolaan BMN & sarana',lead:'Tina Kunti Angraini, S.Kom., M.Kom.'},
     {h:'Media',desc:'Konten sosial media, website, desain grafis, pemberitaan',lead:'Regina Dara Ninggar, M.Si.'},
     {h:'Kerja Sama',desc:'Penyiapan dan penyusunan perjanjian kerja sama dalam negeri',lead:'Fitriadi, S.T., M.T.'},
     {h:'Laporan Rencana, Monitoring, Evaluasi',desc:'Renstra, laporan kinerja (LAKIP/LKj), SAKIP, evaluasi program',lead:'Hesti Rahayu Ningsih'}
   ]
 },
 rightCol:{
   title:'Tim Kerja Operasional',
   sub:'Langsung di bawah Kepala Balai',
   items:[
     {h:'Meteorologi dan Klimatologi',desc:'Pengamatan cuaca, prakiraan & peringatan dini cuaca/iklim',lead:'Neli Rahmawati, M.Kom.'},
     {h:'Geofisika',desc:'Pemantauan gempa bumi & tsunami, diseminasi informasi',lead:'Sutiono, S.Si.'},
     {h:'Instrumentasi dan Kalibrasi',desc:'Pemeliharaan dan kalibrasi peralatan MKG',lead:'Arif Udin, S.T., M.T.'},
     {h:'Manajemen Data dan Jaringan Komunikasi',desc:'Monitoring & arsip data, jaringan komunikasi, bimbingan PKL',lead:'Hesti Rahayu Ningsih',pkl:true}
   ]
 },
 pklNote:'Tim kerja tempat PKL'
},
{t:'cards',title:'Kegiatan Utama',cols:3,cards:[
 {n:'01',h:'Buku Tamu QR',b:'Merancang sistem buku tamu digital berbasis QR Code untuk ruangan Jarkom.'},
 {n:'02',h:'Logbook PKL',b:'Membangun tampilan peserta dan admin untuk pencatatan kegiatan harian magang.',a:1},
 {n:'03',h:'Dokumentasi',b:'Penyusunan laporan akhir serta evaluasi bersama pembimbing lapangan.'}]},
{t:'split',title:'Proyek 1: Sistem Buku Tamu QR Code',cards:[
 {h:'Apa itu?',b:'Sistem pencatatan kehadiran tamu ruangan berbasis web menggunakan scan QR code.'},
 {h:'Masalah yang diselesaikan',b:'Mengganti buku tamu konvensional (kertas) agar rekap data lebih cepat, rapi, dan mudah diakses.',a:1},
 {h:'Pengguna',b:'Tamu (mengisi form masuk/keluar) dan Admin Jarkom (memantau & merekap data kunjungan).'}],photo:['p1main','main1.png']},
{t:'steps',title:'Proyek 1: Cara Kerja Sistem',steps:[
 ['1','Scan QR','Tamu memindai QR code yang tersedia di pintu masuk ruangan.'],['2','Isi Form','Tamu mengisi data diri, instansi, serta tujuan kunjungan.'],['3','Simpan','Data otomatis masuk ke database server lokal/hosting.'],['4','Keluar','Tamu melakukan scan/input jam keluar saat meninggalkan ruangan.'],['5','Rekap','Admin memantau riwayat kunjungan melalui halaman dashboard.']],
 note:'Sistem dirancang agar responsif diakses langsung melalui browser smartphone tamu.'},
{t:'trio',title:'Proyek 1: Tampilan Halaman',items:[
 ['p1masuk','masuk1.png','Halaman Masuk Tamu','Formulir input data diri, nomor kontak, dan keperluan tamu.'],
 ['p1keluar','keluar1.png','Halaman Keluar','Fitur pencatatan waktu kepulangan tamu secara otomatis.'],
 ['p1admin','admin1.png','Halaman Admin','Dashboard tabel rekapitulasi data tamu harian dan bulanan.']]},
{t:'cards',title:'Proyek 1: Peran Saya dan Teknologi',cols:2,cards:[
 {h:'Peran saya',b:'Merancang alur UI/UX, mendesain antarmuka, serta menulis kode frontend halaman.'},
 {h:'Teknologi',b:'HTML, CSS, JavaScript, PHP Native, dan Database MySQL / File JSON.',a:1},
 {h:'Fitur utama',b:'Form input tamu interaktif, tombol pencatatan keluar otomatis, dan filter tabel rekap admin.',span:2}]},
{t:'split',title:'Proyek 2: Logbook PKL',cards:[
 {h:'Apa itu?',b:'Aplikasi web pencatatan kegiatan harian peserta Praktik Kerja Lapangan (PKL).'},
 {h:'Tujuan',b:'Memudahkan peserta melaporkan progres harian dan membantu pembimbing memantau aktivitas.',a:1},
 {h:'Pengguna',b:'Peserta PKL (input aktivitas harian) dan Pembimbing/Admin (validasi laporan).'}],photo:['p2main','main2.png']},
{t:'cards',title:'Proyek 2: Fitur Logbook',cols:2,cards:[
 {h:'Tampilan peserta',b:'Form input kegiatan harian, tanggal, dan status verifikasi laporan.'},
 {h:'Tampilan admin',b:'Tabel rekap keseluruhan peserta magang lengkap dengan status disetujui/revisi.',a:1},
 {h:'Teknologi',b:'Dibangun menggunakan PHP, CSS Styling, dan sistem penyimpanan database terpusat.',span:2}]},
{t:'trio',title:'Proyek 2: Tampilan Halaman',items:[
 ['p2peserta','masuk2.png','Tampilan Peserta','Antarmuka input aktivitas harian magang.'],
 ['p2admin','admin2.png','Tampilan Admin','Panel kontrol verifikasi laporan kegiatan peserta PKL.']]},
{t:'steps',title:'Alur Pengerjaan Proyek',steps:[
 ['1','Analisis','Konsultasi kebutuhan sistem bersama pembimbing lapangan.'],['2','Wireframe','Membuat rancangan tata letak dan alur menu aplikasi.'],['3','Coding','Menulis kode program HTML, CSS, PHP, dan JavaScript.'],['4','Testing','Uji coba fungsionalitas form dan responsivitas halaman.'],['5','Deployment','Penerapan sistem ke server uji coba (hosting/lokal).']],
 note:'Pengerjaan dilakukan secara bertahap dan dievaluasi berkala setiap minggunya.'},
{t:'table',title:'Masalah dan Pemecahannya',rows:[['Validasi input form kosong','Menambahkan atribut required dan alert JavaScript.'],['Tampilan tidak pas di HP','Memperbaiki struktur CSS Media Query agar responsif.'],['Koneksi database lokal','Menyesuaikan konfigurasi file penghubung (connection.php).'],['Rekap data menumpuk','Menambahkan fitur sortir berdasarkan tanggal pada halaman admin.']]},
{t:'bullets',title:'Kesimpulan',items:['Ilmu Rekayasa Perangkat Lunak (RPL) dari sekolah dapat diterapkan langsung pada proyek nyata instansi.','Berhasil merancang dan membangun dua sistem: Buku Tamu QR Code dan Logbook PKL.','Meningkatkan kemampuan dalam hal UI/UX design, pemrograman web, dan problem solving.','Membentuk sikap disiplin, tanggung jawab, dan komunikasi yang baik di lingkungan kerja.'],note:'Pengalaman PKL di BBMKG Wilayah II memberikan wawasan dunia kerja IT yang sesungguhnya.'},
{t:'end',title:'Sekian & Terima Kasih',sub:'NANYA SEWAJARNYA YA GAIS'}
];

/* 3. MESIN SLIDE (Jangan diubah kecuali paham) */
const hl=t=>t.replace(/\[([^\]]+)\]/g,'<mark>[$1]</mark>').replace(/\n/g,'<br>');
const ph=(k,label)=>PHOTOS[k]?`<img class="ph-img" src="${PHOTOS[k]}" alt="">`:`<div class="ph">${hl(label)}</div>`;
const pad=n=>String(n).padStart(2,'0'),rots=[-.8,.6,-.4,.8];
const head=(t,i)=>`<div class="lbl">FIG. ${pad(i+1)}</div><h2>${t}</h2>`;
const card=(c,i,tag,extra='')=>`<div class="card r ${c.a?'a':''} ${extra}" style="--i:${i};--rot:${rots[i%4]}deg;${c.span?'grid-column:span '+c.span:''}">${tag?`<span class="tag">ST-${pad(i+1)}</span>`:''}${extra?'<i class="dot"></i>':''}${c.n?`<div class="num">${c.n}</div>`:''}<h3>${hl(c.h)}</h3><p>${hl(c.b)}</p></div>`;

const R={
 cover:s=>`<div class="cpanel"></div><div class="cover"><div class="cl"><div style="display:flex;align-items:center;gap:14px;margin-bottom:18px"><img src="${s.logo||PHOTOS.logo}" alt="Logo Sekolah" style="height:52px;width:auto;object-fit:contain;" class="r" style="--i:0"><div class="chip r" style="--i:0;margin-bottom:0">LAPORAN PRAKTIK KERJA LAPANGAN</div></div><h1 class="r" style="--i:1">${hl(s.title)}</h1><div class="rgbbar r" style="--i:2"></div><p class="sub r" style="--i:3">${s.sub}</p><p class="who r" style="--i:4">${hl(s.who)}</p></div><div class="cpic r" style="--i:2"><div class="pol">${ph(...s.photo)}</div><div class="stamp">PKL<b>2026</b>BBMKG</div></div></div>`,
 split:(s,i)=>`${head(s.title,i)}<div class="split"><div class="col">${s.cards.map((c,j)=>card(c,j,1)).join('')}</div><div class="pol r" style="--i:3">${ph(...s.photo)}</div></div>`,
 cards:(s,i)=>`${head(s.title,i)}<div class="cards" style="grid-template-columns:repeat(${s.cols},1fr)">${s.cards.map((c,j)=>card(c,j,!c.n)).join('')}</div>`,
 steps:(s,i)=>`${head(s.title,i)}<div class="track"><div class="line"></div><div class="pkt"></div><div class="cards" style="grid-template-columns:repeat(5,1fr)">${s.steps.map((x,j)=>card({n:x[0],h:x[1],b:x[2],a:j%2},j,0,'step')).join('')}</div></div><p class="note r" style="--i:6">${hl(s.note)}</p>`,
 trio:(s,i)=>`${head(s.title,i)}<div class="trio" style="grid-template-columns:repeat(${s.items.length},1fr)">${s.items.map((x,j)=>`<div class="card r ${j%2?'a':''}" style="--i:${j};--rot:${rots[j]}deg"><div class="pic">${ph(x[0],x[1])}</div><h3>${x[2]}</h3><p>${hl(x[3])}</p></div>`).join('')}</div>`,
 table:(s,i)=>`${head(s.title,i)}<table><tr><th>Masalah</th><th>Pemecahan</th></tr>${s.rows.map((r,j)=>`<tr class="row" style="--i:${j}"><td>${hl(r[0])}</td><td>${hl(r[1])}</td></tr>`).join('')}</table><span class="cur">▌</span>`,
 bullets:(s,i)=>`${head(s.title,i)}<ul>${s.items.map((t,j)=>`<li class="r" style="--i:${j}">${t}</li>`).join('')}</ul><p class="note r" style="--i:5">${hl(s.note)}</p>`,
 struktur:(s,i)=>`${head(s.title,i)}
  <div class="org-chart" style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:-10px;">
    <!-- Kepala Balai -->
    <div class="card r" style="--i:1;background:var(--ink);color:#fff;width:320px;text-align:center;padding:10px 16px;border-radius:8px;box-shadow:4px 4px 0 var(--blue);rotate:0deg;">
      <h3 style="font-size:16px;margin:0;color:#fff;">${s.kepala.title}</h3>
      <p style="font-size:14px;margin:2px 0 0;color:#FFE066;font-weight:700;">${s.kepala.name}</p>
    </div>
    <div style="width:2px;height:12px;background:var(--ink);"></div>
    <div style="width:580px;height:2px;background:var(--ink);margin-top:-12px;"></div>
    
    <!-- Row Dua Kolom -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;max-width:1120px;">
      <!-- Kolom Kiri -->
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div class="card r" style="--i:2;background:var(--blue);color:#fff;padding:10px 14px;border-radius:6px;rotate:0deg;box-shadow:3px 3px 0 var(--ink);">
          <h3 style="font-size:15px;margin:0;color:#fff;">${s.leftCol.title}</h3>
          <p style="font-size:12px;margin:2px 0 0;opacity:.9;">${s.leftCol.sub}</p>
          <p style="font-size:12px;margin:2px 0 0;font-weight:700;color:#FFE066;">Kepala: ${s.leftCol.head}</p>
        </div>
        ${s.leftCol.items.map((item,j)=>`
          <div class="card r" style="--i:${j+3};padding:8px 12px;border-radius:6px;rotate:0deg;box-shadow:3px 3px 0 #ddd;">
            <h4 style="font-size:13px;font-weight:800;margin:0 0 2px 0;">${item.h}</h4>
            <p style="font-size:11px;margin:0;color:#444;line-height:1.2;">${item.desc}</p>
            <p style="font-size:11px;margin:2px 0 0 0;color:var(--blue);font-weight:700;">Kepala: ${item.lead}</p>
          </div>
        `).join('')}
      </div>

      <!-- Kolom Kanan -->
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div class="card r" style="--i:2;background:var(--blue);color:#fff;padding:10px 14px;border-radius:6px;rotate:0deg;box-shadow:3px 3px 0 var(--ink);">
          <h3 style="font-size:15px;margin:0;color:#fff;">${s.rightCol.title}</h3>
          <p style="font-size:12px;margin:2px 0 0;opacity:.9;">${s.rightCol.sub}</p>
        </div>
        ${s.rightCol.items.map((item,j)=>`
          <div class="card r ${item.pkl?'a':''}" style="--i:${j+3};padding:8px 12px;border-radius:6px;rotate:0deg;box-shadow:3px 3px 0 ${item.pkl?'var(--amber)':'#ddd'};${item.pkl?'border:2.5px solid var(--amber);':''}">
            <h4 style="font-size:13px;font-weight:800;margin:0 0 2px 0;">${item.h}</h4>
            <p style="font-size:11px;margin:0;color:#444;line-height:1.2;">${item.desc}</p>
            <p style="font-size:11px;margin:2px 0 0 0;color:var(--blue);font-weight:700;">Kepala: ${item.lead}</p>
          </div>
        `).join('')}
        <div class="r" style="--i:8;display:flex;align-items:center;gap:8px;margin-top:4px;">
          <span style="width:14px;height:14px;background:var(--amber);border-radius:3px;display:inline-block;border:1px solid var(--ink);"></span>
          <span style="font-size:12px;font-weight:700;color:var(--ink);">${s.pklNote}</span>
        </div>
      </div>
    </div>
  </div>`,
 end:s=>{const w=s.title.split('&'),sv=(body,vb='0 0 100 100')=>`<svg viewBox="${vb}">${body}</svg>`,K='stroke="#0B2A4A" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';
  const rays=[0,45,90,135,180,225,270,315].map(r=>`<line x1="50" y1="5" x2="50" y2="17" transform="rotate(${r} 50 50)"/>`).join('');
  return `<div class="endwrap"><svg width="0" height="0" style="position:absolute"><filter id="ink"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter></svg>
<svg class="iso" viewBox="0 0 1280 720" fill="none" stroke="#0B2A4A" stroke-width="2.5"><ellipse cx="640" cy="330" rx="190" ry="120" transform="rotate(-12 640 330)"/><ellipse cx="640" cy="330" rx="290" ry="190" transform="rotate(-9 640 330)"/><ellipse cx="640" cy="330" rx="400" ry="260" transform="rotate(-6 640 330)"/><ellipse cx="640" cy="330" rx="520" ry="330" transform="rotate(-3 640 330)"/><g fill="#0B2A4A" stroke="none" font-family="Consolas,monospace" font-size="18" font-weight="700"><text x="440" y="398">996</text><text x="352" y="440">1000</text><text x="246" y="476">1004</text><text x="126" y="506">1008</text></g></svg>
<div class="stk st-sun r" style="--i:1">${sv(`<g ${K}>${rays}</g><circle cx="50" cy="50" r="22" fill="#F5A623" ${K}/>`)}</div>
<div class="stk st-cloud r" style="--i:2">${sv(`<path d="M24 72 a16 16 0 0 1 3-31 a22 22 0 0 1 42-5 a18 18 0 0 1 4 36 z" fill="#fff" ${K}/>`)}</div>
<div class="stk st-bolt r" style="--i:3">${sv(`<polygon points="58,4 24,56 46,56 38,96 78,38 54,38" fill="#FF4FA3" ${K}/>`)}</div>
<div class="stk st-drop r" style="--i:4">${sv(`<path d="M50 8 C50 8 20 46 20 66 a30 30 0 0 0 60 0 C80 46 50 8 50 8 z" fill="#1E88E5" ${K}/>`)}</div>
<div class="sekian r" style="--i:0">— ${w[0].trim().toUpperCase()} —</div>
<div class="bigstamp">${(w[1]||'').trim()}</div>
<div class="ticket r" style="--i:6">${s.sub}</div>
<div class="hintc r" style="--i:7">KLIK DI MANA SAJA UNTUK MEMBERI CAP</div></div>`;}
};

const stage=document.getElementById('stage'),root=document.getElementById('slides');
root.innerHTML=S.map((s,i)=>`<section class="slide ${s.t==='end'?'endslide':''}">${R[s.t](s,i)}</section>`).join('');
const els=[...root.children],tk=document.getElementById('tk');
tk.innerHTML=els.map(()=>'<i></i>').join('');
const lab=document.getElementById('lab');
const touchy=matchMedia('(hover:none)').matches||innerWidth<=820;
lab.innerHTML=touchy?'<b>●</b> SEISMOGRAF · GESER ↔ PINDAH':'<b>●</b> SEISMOGRAF · ← → PINDAH · F LAYAR PENUH';
setTimeout(()=>lab.innerHTML='<b>●</b> SEISMOGRAF',6000);

const cv=document.getElementById('seis'),cx=cv.getContext('2d');
let buf=new Array(640).fill(0),amp=0,t0=0;
(function draw(){t0+=.35;amp*=.965;
 buf.push(Math.sin(t0*1.7)*1.2+(Math.random()-.5)*2.2+(Math.random()-.5)*amp*2*Math.sin(t0*3));buf.shift();
 cx.clearRect(0,0,1280,56);cx.lineWidth=2;cx.strokeStyle=stage.classList.contains('dark')?'#F5A623':'#0B2A4A';cx.beginPath();
 buf.forEach((y,i)=>i?cx.lineTo(i*2,31+y):cx.moveTo(0,31));cx.stroke();requestAnimationFrame(draw);})();

const CH='▒░▓<>/\\|01#%';let scrT;
function scr(el){clearInterval(scrT);const t=el.dataset.t||(el.dataset.t=el.textContent);let f=0;
 scrT=setInterval(()=>{f++;const k=Math.floor(f/1.2);
  el.textContent=t.split('').map((c,i)=>c===' '||i<k?c:CH[Math.random()*CH.length|0]).join('');
  if(k>=t.length){el.textContent=t;clearInterval(scrT);}},28);}

let cur=-1;
function go(n){n=Math.max(0,Math.min(els.length-1,n));if(n===cur)return;
 const old=els[cur],e=els[n];
 if(old){old.classList.remove('active');old.classList.add('leaving');setTimeout(()=>old.classList.remove('leaving'),900);}
 e.scrollTop=0;e.classList.remove('leaving');e.style.setProperty('--cx',n>cur?'100%':'0%');e.style.setProperty('--cy','100%');e.classList.add('active');
 const fwd=n>cur;cur=n;
 stage.classList.toggle('dark',e.classList.contains('dark'));stage.classList.toggle('oncover',n===0);
 stage.classList.remove('quake');void stage.offsetWidth;stage.classList.add('quake');amp=18;
 const h=e.querySelector('h2');if(h)setTimeout(()=>scr(h),350);
 if(e.classList.contains('endslide'))setTimeout(()=>{if(cur!==n)return;stage.classList.remove('quake');void stage.offsetWidth;stage.classList.add('quake');amp=24;},1150);
 [...tk.children].forEach((x,i)=>{x.className=i<n?'on':i===n?'now':''});
 document.getElementById('num').textContent=pad(n+1)+'/'+pad(els.length);
 try{history.replaceState(null,'','#'+(n+1));}catch(err){}}
const next=()=>go(cur+1),prev=()=>go(cur-1);
function fs(){try{const p=document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();if(p&&p.catch)p.catch(()=>{});}catch(err){}}
addEventListener('keydown',e=>{
 if(['ArrowRight','PageDown',' ','Enter'].includes(e.key)){e.preventDefault();next();}
 else if(['ArrowLeft','PageUp','Backspace'].includes(e.key)){e.preventDefault();prev();}
 else if(e.key==='Home')go(0);else if(e.key==='End')go(els.length-1);
 else if(e.key==='f'||e.key==='F')fs();});
document.getElementById('bn').onclick=next;document.getElementById('bp').onclick=prev;document.getElementById('bf').onclick=fs;
let tx=null,ty=0;addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
addEventListener('touchend',e=>{if(tx===null)return;const d=e.changedTouches[0].clientX-tx,v=e.changedTouches[0].clientY-ty;if(Math.abs(d)>60&&Math.abs(d)>Math.abs(v)*1.4)d<0?next():prev();tx=null;});
function fit(){const mob=innerWidth<=820;document.body.classList.toggle('mob',mob);if(mob){stage.style.transform='none';return;}const k=Math.min(innerWidth/1280,innerHeight/720);stage.style.transform=`translate(-50%,-50%) scale(${k})`;}
addEventListener('resize',fit);fit();
let start=1;try{start=parseInt(location.hash.slice(1))||1;}catch(err){}
go(start-1);

/* FOTO DIPERBESAR (lightbox): klik foto di slide mana pun */
(function(){
 const lb=document.createElement('div');lb.id='lb';
 lb.innerHTML='<figure><img alt=""><figcaption></figcaption></figure><span class="x">KLIK / ESC · TUTUP</span>';
 document.body.appendChild(lb);
 const im=lb.querySelector('img'),cap=lb.querySelector('figcaption');let list=[],idx=0;
 const isOn=()=>lb.classList.contains('on');
 const show=()=>{im.src=list[idx].src;cap.textContent='FOTO '+(idx+1)+'/'+list.length+(list.length>1?' · ← → GANTI FOTO':'');im.style.animation='none';void im.offsetWidth;im.style.animation='';};
 const close=()=>lb.classList.remove('on');
 document.addEventListener('click',e=>{
  if(isOn()){close();return;}
  const t=e.target.closest&&e.target.closest('.ph-img');
  if(t){list=[...t.closest('.slide').querySelectorAll('.ph-img')];idx=Math.max(0,list.indexOf(t));show();lb.classList.add('on');}
 });
 addEventListener('keydown',e=>{
  if(!isOn())return;e.stopPropagation();
  if(['Escape',' ','Enter'].includes(e.key)){e.preventDefault();close();}
  else if(e.key==='ArrowRight'&&list.length>1){e.preventDefault();idx=(idx+1)%list.length;show();}
  else if(e.key==='ArrowLeft'&&list.length>1){e.preventDefault();idx=(idx-1+list.length)%list.length;show();}
 },true);
 ['touchstart','touchend'].forEach(n=>addEventListener(n,e=>{if(isOn())e.stopPropagation();},true));
})();

/* KURSOR NEON RGB / PINK: titik laser + jejak warna-warni, klik = kilatan */
(function(){
 if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
 const mk=id=>{let e=document.getElementById(id);if(!e){e=document.createElement('div');e.id=id;document.body.appendChild(e);}return e;};
 const core=mk('cursor-core'),tip=mk('cursor-tip');tip.textContent='⤢ PERBESAR';
 const PAL=['#ff1744','#ff4fa3','#d500f9','#2979ff','#00e5ff','#ff4fa3'];
 let lx=0,ly=0,lt=0,ci=0;
 addEventListener('mousemove',e=>{
  core.style.opacity=1;core.style.transform='translate3d('+e.clientX+'px,'+e.clientY+'px,0) translate(-50%,-50%)';
  tip.style.transform='translate3d('+(e.clientX+16)+'px,'+(e.clientY+16)+'px,0)';
  const over=e.target.closest&&e.target.closest('.ph-img,#lb img');
  core.classList.toggle('big',!!over);tip.style.opacity=over?1:0;
  const now=performance.now();
  if(Math.hypot(e.clientX-lx,e.clientY-ly)>2&&now-lt>13){
   ci=(ci+1)%PAL.length;const d=document.createElement('i');d.className='rgb-trail';
   d.style.left=e.clientX+'px';d.style.top=e.clientY+'px';
   d.style.setProperty('--rgb',PAL[ci]);d.style.setProperty('--rgb2',PAL[(ci+3)%PAL.length]);
   document.body.appendChild(d);setTimeout(()=>d.remove(),600);lt=now;}
  lx=e.clientX;ly=e.clientY;
 },{passive:true});
 document.documentElement.addEventListener('mouseleave',()=>{core.style.opacity=0;tip.style.opacity=0;});
 addEventListener('mousedown',e=>{
  const f=document.createElement('i');f.className='laser-flash';f.style.left=e.clientX+'px';f.style.top=e.clientY+'px';
  document.body.appendChild(f);setTimeout(()=>f.remove(),500);});
})();

/* SLIDE TERAKHIR: klik di mana saja = cap stempel baru */
(function(){
 const WORDS=['ASIKK','SELESAI GAIS','FINALLY','PKL 2026','RATE DONG?','#BMKG'],COL=['#E4572E','#1E88E5','#0B2A4A','#FF4FA3'];let n=0;
 document.addEventListener('click',e=>{
  const sl=els[els.length-1];if(cur!==els.length-1||!sl.classList.contains('active'))return;
  if(document.getElementById('lb').classList.contains('on')||e.target.closest('#nav'))return;
  const mob=document.body.classList.contains('mob'),r=stage.getBoundingClientRect(),k=mob?1:r.width/1280,x=(e.clientX-r.left)/k,y=(e.clientY-r.top)/k;
  if(y>(mob?r.height-74:650))return;
  const d=document.createElement('div');d.className='stp';d.textContent=WORDS[n%WORDS.length];
  d.style.cssText='left:'+x+'px;top:'+y+'px;color:'+COL[n%COL.length]+';--rot:'+(Math.random()*24-12).toFixed(1)+'deg;font-size:'+(24+Math.random()*16|0)+'px';
  sl.querySelector('.endwrap').appendChild(d);n++;amp=14;
  const all=sl.querySelectorAll('.stp');if(all.length>24)all[0].remove();
 });
})();