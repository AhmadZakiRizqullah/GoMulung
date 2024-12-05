"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => (
  <header>
    <nav>
      <Image src="/asset/logo.png" alt="Go-mulung" className="logo" width={100} height={100}/>
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

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-12">Layanan Go-Mulung</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🚛</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Penjemputan Sampah</h3>
            <p className="text-gray-600">Layanan penjemputan sampah langsung ke lokasi Anda dengan jadwal yang fleksibel</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Daur Ulang</h3>
            <p className="text-gray-600">Pengelolaan sampah dengan proses daur ulang yang ramah lingkungan</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Tukar Sampah</h3>
            <p className="text-gray-600">Tukarkan sampah Anda dengan uang atau poin rewards</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Pemantauan Real-time</h3>
            <p className="text-gray-600">Pantau status pengangkutan sampah Anda secara real-time melalui aplikasi</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Laporan Berkala</h3>
            <p className="text-gray-600">Dapatkan laporan berkala tentang kontribusi Anda dalam pengelolaan sampah</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Edukasi</h3>
            <p className="text-gray-600">Program edukasi tentang pengelolaan sampah dan lingkungan hidup</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;