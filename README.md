# Todo List — Kuis Praktikum React.js

Aplikasi To-Do List frontend (tanpa backend, memakai data dummy).

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka alamat yang muncul di terminal (biasanya http://localhost:5173).

## Fitur

| Fitur | Cara pakai |
|---|---|
| Menampilkan tugas | Halaman utama `/` berisi tabel Judul, Status, Prioritas, Deadline, Aksi |
| Melihat detail | Klik tombol biru (ikon mata), membuka `/todo/:id` |
| Menambah tugas | Tombol **Tambah Todo** di kanan atas, isi form, klik **Tambah** |
| Memperbarui tugas | Di halaman detail klik **Update**, ubah data, klik **Update** |
| Menghapus tugas | Klik tombol merah (ikon tempat sampah), lalu konfirmasi **Hapus** |

Setiap perubahan langsung tampil tanpa reload karena disimpan di React State.
Setelah tambah / update / hapus, muncul notifikasi (toast) di pojok kanan bawah.
Data akan kembali ke data dummy kalau halaman di-refresh (memang belum memakai API).

## Struktur data tugas

```js
{ id, title, description, priority, deadline, status }
```

- `status`: `to-do` | `in progress` | `done`
- `priority`: `low` | `medium` | `high`
- `deadline`: format `YYYY-MM-DD`

## Struktur folder

```
src/
├── App.jsx                  state utama (todos, toast) + routing
├── main.jsx                 BrowserRouter
├── index.css                seluruh styling
├── data/
│   ├── dummyTodos.js        data dummy
│   └── options.js           pilihan dropdown status & prioritas
├── utils/todoHelpers.js     addTodo, updateTodo, deleteTodo
├── pages/
│   ├── TodoListPage.jsx     tabel + modal tambah + konfirmasi hapus
│   ├── TodoDetailPage.jsx   detail + modal update
│   └── NotFoundPage.jsx
└── components/
    ├── Modal.jsx            kerangka modal (tutup dengan Esc)
    ├── TodoFormModal.jsx    form tambah & update (satu komponen, dua mode)
    ├── ConfirmDialog.jsx    dialog konfirmasi hapus
    ├── Toast.jsx            notifikasi
    ├── Badge.jsx            label status / prioritas
    └── Icons.jsx            ikon mata & tempat sampah
```

## Untuk pertemuan REST API

Endpoint yang dipakai nanti: `GET /api/todos`, `GET /api/todos/:id`, `POST /api/todos`,
`PUT /api/todos/:id`, `DELETE /api/todos/:id`. Cukup ubah tiga fungsi `handleAdd`,
`handleUpdate`, `handleDelete` dan state awal di `App.jsx` agar memanggil API,
komponen lainnya tidak perlu diubah.
