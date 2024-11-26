import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => (
  <header>
    <nav>
      <Image src="/asset/logo.png" alt="Go-mulung" className="logo" />
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/download">Unduh</Link></li>
        <li><Link href="/register">Daftar</Link></li>
        <li><Link href="/help">Bantuan</Link></li>
      </ul>
    </nav>
  </header>
);

const Hero: React.FC = () => (
  <section className="Hero">
    <h1>Selamat Datang di Go Mulung</h1>
    <p>Solusi Cepat dan Mudah untuk Angkut Sampah Anda</p>
    <Link href="/register" className="cta-button">Mulai Sekarang</Link>
  </section>
);

const JenisSampahSection: React.FC = () => (
  <section id="jenis-sampah">
    <h2 className="section-title">Jenis Sampah yang Kami Angkut</h2>
    <div className="grid">
      <div className="card">
        <div className="icon">🍂</div>
        <h3>Sampah Organik</h3>
        <p>Sisa makanan, daun, dan bahan alami lainnya</p>
      </div>
      <div className="card">
        <div className="icon">♻️</div>
        <h3>Sampah Anorganik</h3>
        <p>Plastik, kaca, logam, dan bahan non-biodegradable</p>
      </div>
      <div className="card">
        <div className="icon">⚠️</div>
        <h3>Sampah B3</h3>
        <p>Bahan berbahaya dan beracun</p>
      </div>
      <div className="card">
        <div className="icon">🗑️</div>
        <h3>Sampah Residu</h3>
        <p>Sampah yang tidak dapat didaur ulang atau dikompos</p>
      </div>
      <div className="card">
        <div className="icon">📄</div>
        <h3>Sampah Kertas</h3>
        <p>Kertas bekas, kardus, dan produk kertas lainnya</p>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="Footer">
    <div>
      <div>
        <div>
          <h4 className="font-semibold mb-4">Kontak</h4>
          <p>Email: info@gomulung.com</p>
          <p>Telp: (021) 123-4567</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Alamat</h4>
          <p>Jl. Kebersihan No. 123</p>
          <p>Jakarta, Indonesia</p>
        </div>
        <div>
          <h4 className="Sosmed">Sosial Media</h4>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/go_mulung?igsh=dzRzdWNrY2ZtcWNz" className="hover:text-green-200 transition">Instagram</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Go Mulung. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  </footer>
);

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <Hero />
      <JenisSampahSection />
    </main>
    <Footer />
  </div>
);

export default Home;
