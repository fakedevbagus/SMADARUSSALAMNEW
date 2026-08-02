# Website & Portal Akademik SMA Darussalam

Prototype HTML/CSS/JavaScript murni berbasis localStorage.

## Identitas
SMA Darussalam — Simpang Mesir, Sumber Jaya, Gedung Aji Baru, Tulang Bawang, Lampung. Tahun 2026/2027, status Swasta, Akreditasi A (demo).

## Menjalankan
`python3 -m http.server 8080`, lalu buka `http://localhost:8080`.

## Struktur
Lima CSS: base, public, portal, theme, responsive. Delapan JS: app, navigation, theme, auth, datastore, portal, ppdb, gallery. `navigation.js` adalah satu-satunya pembentuk header/footer publik.

## Fitur
Halaman publik, dark mode, navbar hover/keyboard/mobile, PPDB, galeri video demo, peta offline, portal lima role, CRUD, jadwal, absensi, nilai, tugas, materi, pembayaran, laporan, CSV, reset demo.

## Akun
Admin `admin@sma.sch.id/admin123`; Kepala `kepala@sma.sch.id/kepala123`; Guru `guru@sma.sch.id/guru123`; Siswa `siswa@sma.sch.id/siswa123`; Orang Tua `ortu@sma.sch.id/ortu123`.

## Pengujian
Uji tema melalui toggle; galeri melalui filter Video; PPDB melalui form/status/admin; reset melalui Admin.

## Deploy Vercel
Impor folder sebagai static site, framework Other, tanpa build command.

## Keterbatasan
Semua data contoh dan tersimpan lokal; login/upload/video/payment masih simulasi, belum aman untuk data asli.

## Rekomendasi
Migrasi Laravel/MySQL, autentikasi backend, role permission, upload asli, PDF raport, payment gateway, notifikasi, backup, dan audit log.
