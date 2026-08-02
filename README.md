# Website & Portal Akademik SMA Darussalam

Prototype website resmi sekolah dan portal akademik multi-role yang berjalan **sepenuhnya di browser** menggunakan HTML, CSS, JavaScript murni, dan `localStorage`. Tidak memerlukan backend, database server, CDN, instalasi package, atau koneksi internet untuk fungsi utama.

## Identitas Sekolah

- **Nama:** SMA Darussalam
- **Jenjang/Status:** SMA Swasta
- **Akreditasi:** A (dummy)
- **Alamat:** Simpang Mesir, Sumber Jaya, Gedung Aji Baru, Tulang Bawang, Lampung
- **Email:** info@smadarussalam.sch.id
- **Telepon:** (0726) 000000
- **WhatsApp:** 08xx-xxxx-xxxx
- **Tahun Ajaran:** 2026/2027

## Fitur Website Publik

- Beranda sekolah, profil, akademik, kesiswaan, informasi, PPDB, galeri, kontak, dan login.
- Halaman khusus untuk setiap submenu; semua tautan lokal valid.
- Popup PPDB publik, form pendaftaran, nomor otomatis, dan cek status.
- Peta visual offline dengan tombol **Lihat Rute** menuju Google Maps.
- Navbar desktop hover/click dengan delay penutupan dan accordion mobile.
- Dark/light mode tersimpan di `localStorage` dengan kontras yang diperkuat.
- Search halaman, breadcrumb, skip link, focus outline, toast, back-to-top, FAQ accordion, dan print styles.
- Galeri foto dan video dengan filter serta modal player offline.
- Ilustrasi SVG lokal untuk hero, PPDB, login, 404, dan empty state.
- Section Keunggulan SMA Darussalam dan Program Unggulan.

## Program Unggulan

- Kelas Literasi dan Numerasi
- Pembinaan Olimpiade
- Tahfidz dan Pembinaan Karakter
- English Day
- Ekstrakurikuler Prestasi
- Bimbingan Karier dan Alumni
- Digital Learning

## Portal Akademik

Fitur batch sebelumnya tetap dipertahankan: data siswa, guru, kelas, mata pelajaran, tahun ajaran, jadwal, absensi, nilai, tugas, materi, pengumuman, PPDB, pembayaran, laporan, ekspor CSV, dan reset data demo.

### Per role

- **Admin:** CRUD data master, akademik, PPDB, pembayaran, laporan, ekspor, dan reset data.
- **Kepala Sekolah:** ringkasan akademik, kehadiran, pembayaran, PPDB, dan laporan.
- **Guru:** jadwal mengajar, absensi, nilai, tugas, materi, dan pengumuman.
- **Siswa:** jadwal, nilai, absensi, tugas, materi, pembayaran, dan pengumuman.
- **Orang Tua:** pemantauan anak, jadwal, nilai, kehadiran, tagihan, dan informasi sekolah.

## Akun Demo

| Role | Email | Password |
|---|---|---|
| Admin | `admin@sma.sch.id` | `admin123` |
| Kepala Sekolah | `kepala@sma.sch.id` | `kepala123` |
| Guru | `guru@sma.sch.id` | `guru123` |
| Siswa | `siswa@sma.sch.id` | `siswa123` |
| Orang Tua | `ortu@sma.sch.id` | `ortu123` |

## Cara Menjalankan

1. Ekstrak `portal-sma-darussalam-premium-polish.zip`.
2. Masuk ke folder project.
3. Klik dua kali `index.html`.
4. Gunakan browser modern. Project mendukung akses lokal `file://`.

## Cara Reset Data Demo

Login sebagai Admin, buka Dashboard Admin, lalu pilih **Reset semua data demo**. Alternatif developer: hapus key berawalan `smaNC_` dari DevTools → Application/Storage → Local Storage. Preferensi tema tetap memakai key `smaNCTheme` agar kompatibel dengan batch sebelumnya.

## Pengujian Dark Mode

1. Klik ikon bulan/matahari di navbar publik.
2. Periksa heading, paragraf, link, card, dropdown, tabel, form, modal, popup, dan footer.
3. Pindah halaman; tema harus tetap tersimpan.
4. Login ke portal dan gunakan toggle pada topbar.

## Pengujian Navbar Desktop

1. Buka halaman pada lebar minimal 1024 px.
2. Arahkan mouse ke Profil, Akademik, Kesiswaan, Informasi, dan PPDB.
3. Dropdown harus terbuka tanpa klik dan tidak menutup ketika pointer bergerak ke submenu.
4. Klik tombol induk untuk menguji akses keyboard/click.
5. Pastikan dropdown PPDB sejajar dan tetap di dalam viewport.

## Pengujian Galeri Video

1. Buka `galeri.html`.
2. Pilih filter **Video**.
3. Klik **Tonton** pada salah satu dari enam kartu video.
4. Modal player placeholder harus terbuka dan dapat ditutup tanpa internet.

## Pengujian PPDB

1. Buka `index.html` dan tunggu popup PPDB.
2. Klik **Daftar Sekarang**.
3. Isi `form-pendaftaran.html`; nomor pendaftaran dibuat otomatis.
4. Gunakan nomor dan NIK pada `cek-status-pendaftaran.html`.
5. Login Admin dan periksa data yang sama pada `admin/ppdb.html`.

Seed cepat: `PPDB-2026-0001` / NIK `3273011205110001`.

## Pengujian Role Login

Gunakan kelima akun demo. Setiap akun harus diarahkan ke dashboard role sendiri. Akses folder role lain harus dikembalikan ke dashboard yang benar. Tombol **Keluar** hanya tersedia setelah login dan harus membersihkan sesi.

## Bug yang Diperbaiki

- Identitas dan metadata lama diganti menjadi SMA Darussalam.
- Kontras teks dark mode diperbaiki pada halaman publik dan portal.
- Interaksi hover navbar desktop dibuat lebih natural dengan area hover dan delay.
- Dropdown PPDB disejajarkan tepat di bawah menu.
- Label tombol login, pesan, PPDB, dan navigasi diperjelas.
- Halaman publik tipis diperkaya dengan CTA dan section pendukung.
- Galeri video, filter, dan modal player ditambahkan.
- Peta offline, ilustrasi SVG, typography, desktop spacing, dan mobile responsiveness dipoles.

## File Premium Utama

```text
assets/css/premium.css
assets/css/polish.css
assets/js/premium.js
assets/js/polish.js
manifest.json
```

## Keterbatasan

- Data masih berada di `localStorage` browser.
- Belum menggunakan backend atau database server.
- Upload file hanya simulasi nama file.
- Login dan role protection masih simulasi sisi browser.
- Belum production-ready untuk data asli atau sensitif.

## Rekomendasi Berikutnya

- Laravel + MySQL
- Autentikasi backend dan role permission sungguhan
- Upload file dan object storage asli
- PDF raport dan tanda tangan digital
- Payment gateway dan notifikasi WhatsApp
- Backup database, audit log, dan monitoring
- PWA/service worker sungguhan
# SMADARUSSALAMNEW
