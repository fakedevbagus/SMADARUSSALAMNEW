(()=>{try{if(Number(localStorage.getItem('smaNCDataVersion')||0)<2)localStorage.setItem('smaNCDataVersion','2')}catch(e){console.warn(e)}})();(() => {
  'use strict';
  const PREFIX='smaNC_';
  const clone=v=>JSON.parse(JSON.stringify(v));
  const seeds={
    siswa:[
      {id:'s-01',nis:'24001',nisn:'0098765401',nama:'Nadia Putri Lestari',jk:'Perempuan',kelas:'X IPA 1',tahunMasuk:'2024',status:'Aktif',hp:'081234560101',email:'nadia@siswa.sch.id'},
      {id:'s-02',nis:'24002',nisn:'0098765402',nama:'Raka Aditya',jk:'Laki-laki',kelas:'X IPA 1',tahunMasuk:'2024',status:'Aktif',hp:'081234560102',email:'raka@siswa.sch.id'},
      {id:'s-03',nis:'24003',nisn:'0098765403',nama:'Salsabila Rahma',jk:'Perempuan',kelas:'X IPA 2',tahunMasuk:'2024',status:'Aktif',hp:'081234560103',email:'salsa@siswa.sch.id'},
      {id:'s-04',nis:'23011',nisn:'0098765411',nama:'Dimas Pratama',jk:'Laki-laki',kelas:'XI IPA 1',tahunMasuk:'2023',status:'Aktif',hp:'081234560111',email:'dimas@siswa.sch.id'},
      {id:'s-05',nis:'23012',nisn:'0098765412',nama:'Alya Maharani',jk:'Perempuan',kelas:'XI IPA 1',tahunMasuk:'2023',status:'Aktif',hp:'081234560112',email:'alya@siswa.sch.id'},
      {id:'s-06',nis:'23021',nisn:'0098765421',nama:'Fajar Nugraha',jk:'Laki-laki',kelas:'XI IPS 1',tahunMasuk:'2023',status:'Aktif',hp:'081234560121',email:'fajar@siswa.sch.id'},
      {id:'s-07',nis:'22031',nisn:'0098765431',nama:'Keisha Anindya',jk:'Perempuan',kelas:'XII IPA 1',tahunMasuk:'2022',status:'Aktif',hp:'081234560131',email:'keisha@siswa.sch.id'},
      {id:'s-08',nis:'22032',nisn:'0098765432',nama:'Bima Saputra',jk:'Laki-laki',kelas:'XII IPA 1',tahunMasuk:'2022',status:'Aktif',hp:'081234560132',email:'bima@siswa.sch.id'},
      {id:'s-09',nis:'22041',nisn:'0098765441',nama:'Intan Permata',jk:'Perempuan',kelas:'XII IPS 1',tahunMasuk:'2022',status:'Aktif',hp:'081234560141',email:'intan@siswa.sch.id'},
      {id:'s-10',nis:'22042',nisn:'0098765442',nama:'Rizky Ramadhan',jk:'Laki-laki',kelas:'XII IPS 1',tahunMasuk:'2022',status:'Aktif',hp:'081234560142',email:'rizky@siswa.sch.id'},
      {id:'s-11',nis:'24011',nisn:'0098765451',nama:'Farhan Akbar',jk:'Laki-laki',kelas:'X IPA 2',tahunMasuk:'2024',status:'Aktif',hp:'081234560151',email:'farhan@siswa.sch.id'},
      {id:'s-12',nis:'24012',nisn:'0098765452',nama:'Citra Ayuningtyas',jk:'Perempuan',kelas:'X IPA 2',tahunMasuk:'2024',status:'Aktif',hp:'081234560152',email:'citra@siswa.sch.id'}
    ],
    guru:[
      {id:'g-01',nip:'198705122012031002',nama:'Rina Kusuma, S.Pd.',jk:'Perempuan',mapel:'Matematika',jabatan:'Guru Mapel',status:'Aktif',hp:'081210100101',email:'rina@sma.sch.id'},
      {id:'g-02',nip:'198211202010011001',nama:'Agus Santoso, M.Pd.',jk:'Laki-laki',mapel:'Bahasa Indonesia',jabatan:'Waka Kurikulum',status:'Aktif',hp:'081210100102',email:'agus@sma.sch.id'},
      {id:'g-03',nip:'199003152015022003',nama:'Maya Lestari, S.Pd.',jk:'Perempuan',mapel:'Bahasa Inggris',jabatan:'Guru Mapel',status:'Aktif',hp:'081210100103',email:'maya@sma.sch.id'},
      {id:'g-04',nip:'198008092008011004',nama:'Hendra Wijaya, S.Si.',jk:'Laki-laki',mapel:'Fisika',jabatan:'Wali Kelas',status:'Aktif',hp:'081210100104',email:'hendra@sma.sch.id'},
      {id:'g-05',nip:'198912012014022005',nama:'Dewi Anggraini, S.Pd.',jk:'Perempuan',mapel:'Biologi',jabatan:'Wali Kelas',status:'Aktif',hp:'081210100105',email:'dewi@sma.sch.id'},
      {id:'g-06',nip:'197806252006041006',nama:'Budi Hartono, S.E.',jk:'Laki-laki',mapel:'Ekonomi',jabatan:'Guru Mapel',status:'Aktif',hp:'081210100106',email:'budi@sma.sch.id'},
      {id:'g-07',nip:'198611102011012007',nama:'Siti Nurhayati, S.Pd.',jk:'Perempuan',mapel:'Kimia',jabatan:'Guru Mapel',status:'Aktif',hp:'081210100107',email:'siti@sma.sch.id'},
      {id:'g-08',nip:'198305172009011008',nama:'Andi Firmansyah, S.Kom.',jk:'Laki-laki',mapel:'Informatika',jabatan:'Koordinator Lab',status:'Aktif',hp:'081210100108',email:'andi@sma.sch.id'}
    ],
    kelas:[
      {id:'k-01',nama:'X IPA 1',tingkat:'X',jurusan:'IPA',wali:'Hendra Wijaya, S.Si.',ruang:'R-101',tahun:'2026/2027'},
      {id:'k-02',nama:'X IPA 2',tingkat:'X',jurusan:'IPA',wali:'Dewi Anggraini, S.Pd.',ruang:'R-102',tahun:'2026/2027'},
      {id:'k-03',nama:'XI IPA 1',tingkat:'XI',jurusan:'IPA',wali:'Rina Kusuma, S.Pd.',ruang:'R-201',tahun:'2026/2027'},
      {id:'k-04',nama:'XI IPS 1',tingkat:'XI',jurusan:'IPS',wali:'Budi Hartono, S.E.',ruang:'R-202',tahun:'2026/2027'},
      {id:'k-05',nama:'XII IPA 1',tingkat:'XII',jurusan:'IPA',wali:'Maya Lestari, S.Pd.',ruang:'R-301',tahun:'2026/2027'},
      {id:'k-06',nama:'XII IPS 1',tingkat:'XII',jurusan:'IPS',wali:'Agus Santoso, M.Pd.',ruang:'R-302',tahun:'2026/2027'}
    ],
    mapel:[
      {id:'m-01',kode:'MAT',nama:'Matematika',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Rina Kusuma, S.Pd.',jam:'4',kurikulum:'Kurikulum Merdeka'},
      {id:'m-02',kode:'BIN',nama:'Bahasa Indonesia',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Agus Santoso, M.Pd.',jam:'4',kurikulum:'Kurikulum Merdeka'},
      {id:'m-03',kode:'BIG',nama:'Bahasa Inggris',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Maya Lestari, S.Pd.',jam:'3',kurikulum:'Kurikulum Merdeka'},
      {id:'m-04',kode:'FIS',nama:'Fisika',tingkat:'XI, XII',kelompok:'Peminatan IPA',guru:'Hendra Wijaya, S.Si.',jam:'5',kurikulum:'Kurikulum Merdeka'},
      {id:'m-05',kode:'BIO',nama:'Biologi',tingkat:'XI, XII',kelompok:'Peminatan IPA',guru:'Dewi Anggraini, S.Pd.',jam:'5',kurikulum:'Kurikulum Merdeka'},
      {id:'m-06',kode:'EKO',nama:'Ekonomi',tingkat:'XI, XII',kelompok:'Peminatan IPS',guru:'Budi Hartono, S.E.',jam:'5',kurikulum:'Kurikulum Merdeka'},
      {id:'m-07',kode:'KIM',nama:'Kimia',tingkat:'XI, XII',kelompok:'Peminatan IPA',guru:'Hendra Wijaya, S.Si.',jam:'5',kurikulum:'Kurikulum Merdeka'},
      {id:'m-08',kode:'SEJ',nama:'Sejarah',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Agus Santoso, M.Pd.',jam:'2',kurikulum:'Kurikulum Merdeka'},
      {id:'m-09',kode:'INF',nama:'Informatika',tingkat:'X, XI',kelompok:'Umum',guru:'Rina Kusuma, S.Pd.',jam:'3',kurikulum:'Kurikulum Merdeka'},
      {id:'m-10',kode:'PJK',nama:'Pendidikan Jasmani',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Maya Lestari, S.Pd.',jam:'3',kurikulum:'Kurikulum Merdeka'},
      {id:'m-11',kode:'PKN',nama:'Pendidikan Pancasila',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Agus Santoso, M.Pd.',jam:'2',kurikulum:'Kurikulum Merdeka'},
      {id:'m-12',kode:'SEN',nama:'Seni Budaya',tingkat:'X, XI, XII',kelompok:'Umum',guru:'Maya Lestari, S.Pd.',jam:'2',kurikulum:'Kurikulum Merdeka'}
    ],
    jadwal:[
      {id:'j-01',hari:'Senin',jam:'1',mulai:'07:15',selesai:'08:00',kelas:'X IPA 1',mapel:'Matematika',guru:'Rina Kusuma, S.Pd.',ruang:'R-101'},
      {id:'j-02',hari:'Senin',jam:'2',mulai:'08:00',selesai:'08:45',kelas:'XI IPA 1',mapel:'Matematika',guru:'Rina Kusuma, S.Pd.',ruang:'R-201'},
      {id:'j-03',hari:'Selasa',jam:'1',mulai:'07:15',selesai:'08:00',kelas:'X IPA 1',mapel:'Bahasa Indonesia',guru:'Agus Santoso, M.Pd.',ruang:'R-101'},
      {id:'j-04',hari:'Rabu',jam:'3',mulai:'08:45',selesai:'09:30',kelas:'X IPA 1',mapel:'Bahasa Inggris',guru:'Maya Lestari, S.Pd.',ruang:'Lab Bahasa'},
      {id:'j-05',hari:'Kamis',jam:'2',mulai:'08:00',selesai:'08:45',kelas:'XI IPA 1',mapel:'Fisika',guru:'Hendra Wijaya, S.Si.',ruang:'Lab Fisika'},
      {id:'j-06',hari:'Jumat',jam:'1',mulai:'07:15',selesai:'08:00',kelas:'X IPA 1',mapel:'Informatika',guru:'Rina Kusuma, S.Pd.',ruang:'Lab Komputer'}
    ],
    absensi:[
      {id:'a-01',siswaId:'s-01',tanggal:'2026-08-01',kelas:'X IPA 1',mapel:'Matematika',guru:'Rina Kusuma, S.Pd.',status:'Hadir'},
      {id:'a-02',siswaId:'s-02',tanggal:'2026-08-01',kelas:'X IPA 1',mapel:'Matematika',guru:'Rina Kusuma, S.Pd.',status:'Terlambat'},
      {id:'a-03',siswaId:'s-03',tanggal:'2026-08-01',kelas:'X IPA 2',mapel:'Bahasa Indonesia',guru:'Agus Santoso, M.Pd.',status:'Izin'},
      {id:'a-04',siswaId:'s-01',tanggal:'2026-08-02',kelas:'X IPA 1',mapel:'Bahasa Indonesia',guru:'Agus Santoso, M.Pd.',status:'Hadir'},
      {id:'a-05',siswaId:'s-02',tanggal:'2026-08-02',kelas:'X IPA 1',mapel:'Bahasa Indonesia',guru:'Agus Santoso, M.Pd.',status:'Sakit'}
    ],
    pengumumanInternal:[
      {id:'p-01',judul:'Rapat evaluasi tengah semester',isi:'Rapat dilaksanakan Senin pukul 13.30 di Aula Utama.',target:'Guru',prioritas:'Penting',tanggal:'2026-08-02'},
      {id:'p-02',judul:'Kegiatan literasi pagi',isi:'Seluruh siswa membawa satu buku nonpelajaran pada hari Selasa.',target:'Semua',prioritas:'Normal',tanggal:'2026-08-01'},
      {id:'p-03',judul:'Perubahan ruang Matematika',isi:'Kelas X IPA 1 menggunakan R-103 untuk pertemuan berikutnya.',target:'X IPA 1',prioritas:'Mendesak',tanggal:'2026-08-02'}
    ],
    tahun:[
      {id:'t-01',tahun:'2026/2027',semester:'Genap',mulai:'2026-01-05',selesai:'2026-06-20',aktif:false},
      {id:'t-02',tahun:'2026/2027',semester:'Ganjil',mulai:'2026-07-13',selesai:'2026-12-19',aktif:true}
    ]
  };
  const key=e=>PREFIX+e;
  const ensure=e=>{if(!localStorage.getItem(key(e)))localStorage.setItem(key(e),JSON.stringify(seeds[e]||[]));};
  const get=e=>{ensure(e);try{return JSON.parse(localStorage.getItem(key(e)))||[]}catch{return clone(seeds[e]||[])}};
  const save=(e,data)=>localStorage.setItem(key(e),JSON.stringify(data));
  const reset=e=>{save(e,clone(seeds[e]||[]));return get(e)};
  const makeId=e=>e.charAt(0)+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);
  Object.keys(seeds).forEach(ensure);
  window.SMADataStore={get,save,reset,makeId,entities:Object.keys(seeds)};
})();
