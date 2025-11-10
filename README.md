🧾 UTS Web Service Engineering – Employees RESTful API

Nama: M. Delfian Tirta Nugraha
NIM: 230104040124
Mata Kuliah: Web Service Engineering
Dosen Pengampu: Muhayat, M.IT
Tanggal: 10 November 2025

📘 Deskripsi Singkat

Proyek ini merupakan implementasi RESTful API berbasis Express.js dengan resource utama employees.
API mendukung CRUD lengkap, validasi input, error handling, serta penerapan 7 prinsip RESTful API sesuai panduan UTS.
Seluruh data disajikan dalam format JSON, dijalankan pada port 3000, dan memiliki endpoint identitas di /api/info.

🚀 Endpoint API
Method	Endpoint	Deskripsi	Status Code
GET	/api/employees	Ambil semua data pegawai	200
GET	/api/employees/:id	Ambil data pegawai berdasarkan ID	200 / 404
POST	/api/employees	Tambah data pegawai baru	201 / 400
PUT	/api/employees/:id	Perbarui data pegawai	200 / 400 / 404
DELETE	/api/employees/:id	Hapus data pegawai	204 / 404
GET	/api/info	Informasi identitas API	200
🧩 Struktur Folder
src/
├── app.js
├── routes/
│   └── employees.routes.js
├── controllers/
│   └── employees.controller.js
├── middlewares/
│   ├── validateEmployee.js
│   └── errorHandler.js
├── utils/
│   └── apiResponse.js
├── data/
│   └── employees.data.js
└── evidence/
    ├── get_all.png
    ├── post_create.png
    ├── put_update.png
    ├── delete.png
    └── info.png

🧠 Data Dummy (employees.data.js)
const employees = [
  { id: 1, name: "Dewi Ayu", position: "HR Manager", salary: 8500000 },
  { id: 2, name: "Budi Santoso", position: "Software Engineer", salary: 9500000 }
];
module.exports = employees;

⚙️ Validasi Input (validateEmployee.js)
Field	Syarat	Respon Error
name	Tidak boleh kosong	{ "status": "fail", "message": "Field 'name' wajib diisi" }
position	Tidak boleh kosong	{ "status": "fail", "message": "Field 'position' wajib diisi" }
salary	Tidak boleh kosong	{ "status": "fail", "message": "Field 'salary' wajib diisi" }
💬 Contoh Respons API

✅ Sukses (POST)

{
  "status": "success",
  "message": "Employee created successfully",
  "data": {
    "id": 1731250000000,
    "name": "Citra Lestari",
    "position": "UI/UX Designer",
    "salary": 7800000
  }
}


⚠️ Error Validasi

{
  "status": "fail",
  "message": "Field 'name' wajib diisi"
}


❌ Error Not Found

{
  "status": "fail",
  "message": "Employee not found"
}

🩺 Endpoint Info (/api/info)
{
  "service": "Employees RESTful API",
  "author": "M. Delfian Tirta Nugraha",
  "nim": "230104040124",
  "version": "1.0.0",
  "description": "UTS Web Service Engineering – CRUD lengkap + 7 RESTful Principles"
}

🧪 Uji CRUD di Postman
No	Jenis Uji	Method	Endpoint	Status	Screenshot
1	Ambil semua pegawai	GET	/api/employees	200	get_all.png
2	Tambah pegawai baru	POST	/api/employees	201	post_create.png
3	Perbarui pegawai	PUT	/api/employees/:id	200	put_update.png
4	Hapus pegawai	DELETE	/api/employees/:id	204	delete.png
5	Info API	GET	/api/info	200	info.png

Contoh Command Jalankan Server:

npm install
npm run dev

✅ 7 Prinsip RESTful API
No	Prinsip	Implementasi
1	Resource-Oriented URI	Menggunakan /api/employees (kata benda jamak)
2	Proper HTTP Methods	GET, POST, PUT, DELETE sesuai fungsinya
3	Stateless Communication	Tidak ada session/state disimpan di server
4	Consistent Status Codes	200, 201, 204, 400, 404, 500 digunakan sesuai konteks
5	JSON Representation	Semua response menggunakan format JSON rapi
6	Validation & Error Handling	Field wajib diperiksa, error → 400
7	Discoverability	Endpoint /api/info berfungsi sebagai metadata service
📋 Checklist UTS
No	Komponen	Status
1	CRUD lengkap berjalan	✅
2	Validasi input & error handling	✅
3	Status code konsisten	✅
4	Response JSON rapi	✅
5	Endpoint /api/info aktif	✅
6	Struktur folder sesuai template	✅
7	Screenshot hasil uji CRUD	✅
8	Penerapan 7 RESTful Principles	✅
📊 Rubrik Penilaian
Komponen	Bobot	Keterangan
CRUD Lengkap	25%	Semua endpoint berjalan
Status Code & Validasi	15%	200–404 digunakan sesuai standar
Struktur & Modularitas	15%	app.js, routes, controller rapi
7 RESTful Principles	25%	Semua prinsip diterapkan
Dokumentasi & Screenshot	10%	Lengkap dan informatif
Kerapian & Konsistensi	10%	Nama, NIM, dan format JSON seragam
💡 Catatan Akhir

Proyek ini memenuhi seluruh komponen penilaian UTS Web Service Engineering.
Struktur modular, kode bersih, dan respons seragam memudahkan pengujian.
Semua hasil uji tersimpan di folder src/evidence/ sebagai bukti kelengkapan tugas.