# 🚛 Go-Mulung - Platform Pengelolaan Sampah Terdepan

[![Next.js](https://img.shields.io/badge/Next.js-15.0.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC)](https://tailwindcss.com/)

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [API Endpoints](#api-endpoints)
- [Halaman-halaman](#halaman-halaman)
- [Styling & UI](#styling--ui)
- [Deployment](#deployment)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

## 🎯 Tentang Proyek

**Go-Mulung** adalah platform digital terdepan untuk layanan pengangkutan sampah yang menghubungkan masyarakat dengan layanan pengangkutan sampah profesional. Platform ini menyediakan solusi cepat, aman, dan ramah lingkungan untuk pengelolaan sampah yang efisien.

### 🎯 Visi & Misi

**Visi:** Menciptakan lingkungan yang lebih bersih dan berkelanjutan melalui solusi inovatif dalam pengelolaan sampah.

**Misi:** 
- Mengubah cara masyarakat mengelola sampah dengan solusi yang inovatif, efisien, dan ramah lingkungan
- Mengurangi dampak lingkungan dari pembuangan sampah yang tidak tepat
- Meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah
- Menghubungkan masyarakat dengan layanan pengangkutan sampah profesional

## ✨ Fitur Utama

### 🚛 Layanan Pengangkutan
- **Pengangkutan Cepat**: Layanan dalam waktu 2-4 jam setelah pemesanan
- **Tracking Real-time**: Pantau status pengangkutan secara langsung
- **Jadwal Fleksibel**: Pengangkutan tersedia 24/7 sesuai kebutuhan
- **Tim Profesional**: Bersertifikat dengan peralatan standar keamanan

### 🛡️ Keamanan & Kepercayaan
- **Terpercaya & Aman**: Tim profesional dengan asuransi lengkap
- **Customer Support 24/7**: Bantuan melalui chat, telepon, dan video call
- **Pembayaran Aman**: Berbagai metode pembayaran yang aman
- **Transparansi Harga**: Tidak ada biaya tersembunyi

### 🌱 Jenis Sampah yang Ditangani
- **Sampah Organik**: Sisa makanan, daun, dll
- **Sampah Anorganik**: Plastik, kaca, logam
- **Sampah B3**: Bahan berbahaya dan beracun
- **Sampah Residu**: Sampah yang tidak dapat didaur ulang
- **Sampah Kertas**: Kertas bekas dan kardus
- **Sampah Elektronik**: Perangkat elektronik bekas

### 📱 Platform Digital
- **Aplikasi Mobile**: Tersedia di Google Play Store
- **Website Responsif**: Akses melalui browser desktop/mobile
- **Dashboard Admin**: Panel admin untuk manajemen layanan
- **Sistem Notifikasi**: Update status real-time

## 🛠️ Teknologi yang Digunakan

### Frontend
- **[Next.js 15.0.1](https://nextjs.org/)**: React framework untuk production
- **[React 19.0.0](https://reactjs.org/)**: Library JavaScript untuk UI
- **[TypeScript 5.0](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS 3.4.15](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)**: Icon library

### Development Tools
- **[ESLint](https://eslint.org/)**: Code linting
- **[PostCSS](https://postcss.org/)**: CSS processing
- **[Geist Font](https://vercel.com/font)**: Custom font family

### Deployment & Hosting
- **[Vercel](https://vercel.com/)**: Platform deployment (recommended)
- **[Node.js](https://nodejs.org/)**: JavaScript runtime

## 📁 Struktur Proyek

```
go-muulung/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── auth/                 # Authentication endpoints
│   ├── about/                    # Halaman tentang kami
│   ├── admin/                    # Panel admin
│   ├── Contact/                  # Halaman kontak
│   ├── download/                 # Halaman download aplikasi
│   ├── fonts/                    # Custom fonts
│   ├── help/                     # Halaman bantuan & FAQ
│   ├── home/                     # Halaman beranda
│   ├── register/                 # Halaman pendaftaran
│   ├── services/                 # Halaman layanan
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── public/                       # Static assets
│   └── asset/                    # Images, logos, etc.
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Instalasi

### Prerequisites
- Node.js 18.0 atau lebih baru
- npm, yarn, pnpm, atau bun

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/go-muulung.git
   cd go-muulung
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   # atau
   bun install
   ```

3. **Setup environment variables** (jika diperlukan)
   ```bash
   cp .env.example .env.local
   # Edit file .env.local sesuai kebutuhan
   ```

4. **Run development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   # atau
   bun dev
   ```

5. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📖 Penggunaan

### Scripts yang Tersedia

```bash
# Development
npm run dev          # Menjalankan development server

# Production
npm run build        # Build aplikasi untuk production
npm run start        # Menjalankan production server

# Linting
npm run lint         # Menjalankan ESLint
```

### Development Workflow

1. **Development Mode**
   - Jalankan `npm run dev`
   - Edit file di folder `app/`
   - Perubahan akan otomatis ter-refresh

2. **Building untuk Production**
   - Jalankan `npm run build`
   - Aplikasi akan di-optimize untuk production

3. **Testing Production Build**
   - Jalankan `npm run start`
   - Test aplikasi dalam mode production

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Registrasi user baru
- `POST /api/auth/logout` - Logout user

### Services (Planned)
- `GET /api/services` - Daftar layanan
- `POST /api/orders` - Membuat pesanan baru
- `GET /api/orders/:id` - Detail pesanan
- `PUT /api/orders/:id` - Update status pesanan

## 📄 Halaman-halaman

### 🏠 Homepage (`/`)
- Hero section dengan animasi
- Fitur-fitur unggulan
- Jenis sampah yang ditangani
- Testimonial pelanggan
- Call-to-action

### 📋 About (`/about`)
- Latar belakang perusahaan
- Misi & visi
- Statistik perusahaan
- Tim dan nilai-nilai

### 🚛 Services (`/services`)
- Detail layanan pengangkutan
- Jenis sampah yang ditangani
- Proses kerja
- Keunggulan layanan

### 📞 Contact (`/Contact`)
- Formulir kontak
- Informasi kontak
- Lokasi kantor
- Jam operasional

### 📱 Download (`/download`)
- Link download aplikasi
- Fitur aplikasi mobile
- Screenshot aplikasi
- Testimonial pengguna

### 🆘 Help (`/help`)
- FAQ (Frequently Asked Questions)
- Panduan penggunaan
- Troubleshooting
- Customer support

### 👤 Register (`/register`)
- Formulir pendaftaran
- Syarat dan ketentuan
- Proses verifikasi

### 🔧 Admin (`/admin`)
- Dashboard admin
- Manajemen pesanan
- Manajemen user
- Laporan dan analitik

## 🎨 Styling & UI

### Design System
- **Color Palette**: Green-based theme (environmental focus)
- **Typography**: Geist font family
- **Icons**: Lucide React icons
- **Components**: Modern, responsive design

### CSS Architecture
- **Tailwind CSS**: Utility-first approach
- **Custom CSS**: Global styles di `globals.css`
- **Responsive Design**: Mobile-first approach
- **Animations**: CSS animations dan transitions

### Key Components
- **Header**: Fixed navigation dengan logo
- **Hero Section**: Animated background dengan CTA
- **Feature Cards**: Hover effects dan gradients
- **Footer**: Multi-column layout dengan links

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Manual Deployment

1. **Build aplikasi**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

### Environment Variables
```env
# Database (jika diperlukan)
DATABASE_URL=your_database_url

# Authentication (jika diperlukan)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=your_domain

# API Keys (jika diperlukan)
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

## 🤝 Kontribusi

Kami menyambut kontribusi dari komunitas! Berikut cara berkontribusi:

### Cara Kontribusi

1. **Fork repository**
2. **Buat feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit perubahan**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push ke branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Buat Pull Request**

### Guidelines
- Ikuti coding standards yang ada
- Tambahkan tests untuk fitur baru
- Update dokumentasi jika diperlukan
- Pastikan semua tests pass

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 📞 Kontak

### Informasi Perusahaan
- **Nama**: Go-Mulung
- **Alamat**: Jl. Kebersihan No. 123, Jakarta
- **Telepon**: (021) 123-4567
- **Email**: info@gomulung.com
- **Instagram**: [@go_mulung](https://www.instagram.com/go_mulung?igsh=dzRzdWNrY2ZtcWNz)

### Jam Operasional
- **Senin - Jumat**: 08:00 - 18:00 WIB
- **Sabtu**: 08:00 - 16:00 WIB
- **Minggu**: 09:00 - 15:00 WIB
- **Customer Support**: 24/7

### Social Media
- **Instagram**: [@go_mulung](https://www.instagram.com/go_mulung?igsh=dzRzdWNrY2ZtcWNz)
- **Website**: [gomulung.com](https://gomulung.com)

---

<div align="center">
  <p>Dibuat dengan ❤️ untuk lingkungan yang lebih bersih</p>
  <p>© 2024 Go-Mulung. Hak Cipta Dilindungi.</p>
</div>
