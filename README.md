# Ruang Catatan

Submission **Integrasi Notes App dengan RESTful API** untuk kelas Belajar Fundamental Front-End Web Development.

## Menjalankan aplikasi

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run start-dev
```

Webpack Dev Server akan membuka aplikasi pada `http://localhost:8080`.

## Build production

```bash
npm run build
```

Hasil build tersedia di direktori `dist`.

## Kriteria yang diterapkan

- Data utama berasal dari Notes API V2 Dicoding tanpa data dummy/localStorage.
- Menambah, menampilkan, menghapus, mengarsipkan, dan memulihkan catatan.
- Fetch API untuk seluruh asynchronous request.
- Webpack, webpack-dev-server, dan html-webpack-plugin.
- Loading indicator berbasis Web Component.
- Web Components untuk header, formulir, indikator loading, dan kartu catatan.
- Feedback sukses/error dan konfirmasi hapus dengan SweetAlert2.
- Animasi kartu, transisi antarmuka, empty state, dan desain responsif.
- Prettier beserta berkas konfigurasi `.prettierrc`.

## Catatan submission

Jangan menyertakan direktori `node_modules` dan `dist` di dalam ZIP yang dikirim ke Dicoding.
