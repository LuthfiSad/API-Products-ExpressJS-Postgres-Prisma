# API Products

API Products adalah sebuah API yang dikembangkan menggunakan ExpressJS, PostgreSQL, dan Prisma. API ini menyediakan berbagai endpoint untuk mengelola data produk, seperti mengambil semua produk, mengambil produk berdasarkan ID, membuat produk baru, mengedit produk, dan menghapus produk.

## Daftar Isi
- [Teknologi Yang Digunakan](#teknologi-yang-digunakan)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Endpoints](#endpoints)

## Teknologi Yang Digunakan

- **ExpressJS**: Framework untuk membangun server dan API.
- **PostgreSQL**: Database relasional.
- **Prisma**: ORM untuk PostgreSQL.
- **Node.js**: JavaScript runtime.

## Menjalankan Aplikasi

### Mode Produksi

Untuk menjalankan aplikasi dalam mode produksi:

```bash
npm start
```

### Mode Pengembangan

Untuk menjalankan aplikasi dalam mode pengembangan dengan hot-reloading menggunakan nodemon:

```bash
npm run start-dev
```

### Prisma Studio

Untuk membuka Prisma Studio dan melihat serta mengelola data di database:

```bash
npm run studio
```

## Endpoints

Berikut adalah daftar endpoint yang tersedia di API ini:

- `GET /products` - Mengambil semua produk
- `GET /products/:id` - Mengambil produk berdasarkan ID
- `POST /products` - Membuat produk baru
- `PUT /products/:id` - Mengedit produk berdasarkan ID
- `DELETE /products/:id` - Menghapus produk berdasarkan ID
- `PATCH /products/:id` - Memperbarui sebagian data produk berdasarkan ID