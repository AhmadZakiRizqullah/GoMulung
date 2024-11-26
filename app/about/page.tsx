"use client";
import React from 'react';
import Link from 'next/link';
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

const TentangSection: React.FC = () => (
  <section id="tentang-perusahaan" className="section">
    <h2>Tentang Go Mulung</h2>
    
    <div>
      <h3>Latar Belakang Perusahaan</h3>
      <p>
        Go Mulung adalah perusahaan yang bergerak di bidang manajemen sampah dan
        kebersihan lingkungan. Kami didirikan dengan visi untuk menciptakan
        lingkungan yang lebih bersih dan berkelanjutan melalui solusi inovatif
        dalam pengelolaan sampah.
      </p>
    </div>

    <div>
      <h3>Bidang Usaha</h3>
      <p>
        Kami beroperasi dalam industri pengelolaan sampah, fokus pada layanan
        pengangkutan sampah yang efisien dan ramah lingkungan.
      </p>
    </div>

    <div>
      <h3>Fitur yang Ditawarkan</h3>
      <ul>
        <li className="list-item">
          <span>✓</span> Penjemputan sampah terjadwal
        </li>
        <li className="list-item">
          <span>✓</span> Pemilahan sampah otomatis
        </li>
        <li className="list-item">
          <span>✓</span> Tracking real-time pengangkutan sampah
        </li>
        <li className="list-item">
          <span>✓</span> Laporan berkala tentang pengurangan jejak karbon
        </li>
        <li className="list-item">
          <span>✓</span> Edukasi pengelolaan sampah untuk pelanggan
        </li>
      </ul>
    </div>

    <div>
      <h3>Misi Kami</h3>
      <p>Go Mulung berkomitmen untuk:</p>
      <ul>
        <li className="list-item">
          <span>✓</span> Mengurangi dampak lingkungan dari pembuangan sampah yang tidak tepat
        </li>
        <li className="list-item">
          <span>✓</span> Meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah yang baik
        </li>
        <li className="list-item">
          <span>✓</span> Mendorong praktik daur ulang dan penggunaan kembali
        </li>
        <li className="list-item">
          <span>✓</span> Menciptakan lapangan kerja dalam industri pengelolaan sampah
        </li>
      </ul>
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

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TentangSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
