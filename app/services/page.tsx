"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck, Recycle, DollarSign, Smartphone, BarChart3, GraduationCap, ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <Image 
            src="/asset/logo.png" 
            alt="Go-mulung" 
            width={40} 
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900">Go-Mulung</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#beranda" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Beranda</Link>
          <Link href="/services" className="text-green-600 font-medium">Layanan</Link>
          <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Tentang</Link>
          <Link href="/Contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Kontak</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/register" 
            className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

const Hero: React.FC = () => (
  <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Beranda
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Layanan <span className="text-green-600">Go-Mulung</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Solusi lengkap untuk pengelolaan sampah yang efisien, ramah lingkungan, dan terpercaya
        </p>
      </div>
    </div>
  </section>
);

const ServicesOverview: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Layanan Unggulan Kami
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Berbagai layanan yang dirancang untuk memenuhi kebutuhan pengelolaan sampah Anda
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Penjemputan Sampah</h3>
          <p className="text-gray-600 mb-6">Layanan penjemputan sampah langsung ke lokasi Anda dengan jadwal yang fleksibel dan tim profesional</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Jadwal fleksibel 24/7
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Tim profesional bersertifikat
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              Tracking real-time
            </li>
          </ul>
        </div>

        <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Recycle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Daur Ulang</h3>
          <p className="text-gray-600 mb-6">Pengelolaan sampah dengan proses daur ulang yang ramah lingkungan dan berkelanjutan</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
              Pemilahan otomatis
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
              Proses ramah lingkungan
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
              Sertifikasi daur ulang
            </li>
          </ul>
        </div>

        <div className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tukar Sampah</h3>
          <p className="text-gray-600 mb-6">Tukarkan sampah Anda dengan uang atau poin rewards yang dapat ditukarkan dengan berbagai hadiah</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
              Sistem poin rewards
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
              Pembayaran langsung
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
              Katalog hadiah menarik
            </li>
          </ul>
        </div>

        <div className="group p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Pemantauan Real-time</h3>
          <p className="text-gray-600 mb-6">Pantau status pengangkutan sampah Anda secara real-time melalui aplikasi mobile</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
              Tracking GPS real-time
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
              Notifikasi status
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
              Foto bukti pengangkutan
            </li>
          </ul>
        </div>

        <div className="group p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Laporan Berkala</h3>
          <p className="text-gray-600 mb-6">Dapatkan laporan berkala tentang kontribusi Anda dalam pengelolaan sampah dan lingkungan</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
              Laporan bulanan
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
              Analisis dampak lingkungan
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
              Sertifikat kontribusi
            </li>
          </ul>
        </div>

        <div className="group p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Edukasi</h3>
          <p className="text-gray-600 mb-6">Program edukasi tentang pengelolaan sampah dan lingkungan hidup untuk masyarakat</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
              Workshop berkala
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
              Materi edukasi digital
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
              Sertifikat partisipasi
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ServiceStats: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Dampak Layanan Kami
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Angka-angka yang membuktikan komitmen kami terhadap lingkungan
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
          <div className="text-gray-600">Sampah Terangkut</div>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="h-10 w-10 text-white" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
          <div className="text-gray-600">Pelanggan Aktif</div>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Recycle className="h-10 w-10 text-white" />
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
          <div className="text-gray-600">Tingkat Daur Ulang</div>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="h-10 w-10 text-white" />
          </div>
          <div className="text-3xl font-bold text-orange-600 mb-2">2-4</div>
          <div className="text-gray-600">Jam Waktu Pengangkutan</div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Paket Layanan
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan Anda
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Paket Dasar</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">Rp 50K</div>
            <div className="text-gray-600">per pengangkutan</div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Pengangkutan sampah 1x</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Tracking real-time</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Laporan pengangkutan</span>
            </li>
          </ul>
          <Link 
            href="/register" 
            className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 text-center block"
          >
            Pilih Paket
          </Link>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            POPULAR
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Paket Bulanan</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">Rp 200K</div>
            <div className="text-gray-600">per bulan</div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Pengangkutan 4x per bulan</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Tracking real-time</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Laporan bulanan</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Prioritas layanan</span>
            </li>
          </ul>
          <Link 
            href="/register" 
            className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 text-center block"
          >
            Pilih Paket
          </Link>
        </div>
        
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Paket Tahunan</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">Rp 2M</div>
            <div className="text-gray-600">per tahun</div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Pengangkutan unlimited</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Tracking real-time</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Laporan detail</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-600">Konsultasi gratis</span>
            </li>
          </ul>
          <Link 
            href="/register" 
            className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 text-center block"
          >
            Pilih Paket
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const CTA: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Siap Memulai Layanan Pengangkutan Sampah?
      </h2>
      <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
        Bergabunglah dengan ribuan pelanggan yang telah merasakan kemudahan pengelolaan sampah dengan Go-Mulung
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          href="/register" 
          className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Mulai Sekarang
        </Link>
        <Link 
          href="/Contact" 
          className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300"
        >
          Konsultasi Gratis
        </Link>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <Image 
              src="/asset/logo.png" 
              alt="Go-mulung" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Go-Mulung</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Platform digital terdepan untuk layanan pengangkutan sampah yang cepat, aman, dan ramah lingkungan.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/go_mulung?igsh=dzRzdWNrY2ZtcWNz" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Kontak</h4>
          <div className="space-y-3">
            <div className="flex items-center text-gray-400">
              <span>(021) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span>info@gomulung.com</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span>Jl. Kebersihan No. 123, Jakarta</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Layanan</h4>
          <div className="space-y-2">
            <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Pengangkutan Sampah</Link>
            <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Daur Ulang</Link>
            <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Konsultasi</Link>
            <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">Bantuan</Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Go-Mulung. Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  </footer>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <ServiceStats />
        <PricingSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;