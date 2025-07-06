"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { 
  Download, 
  Smartphone, 
  ArrowLeft, 
  Star, 
  Users, 
  Zap, 
  Shield,
  Leaf,
  Heart,
  ArrowRight,
  Globe,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Play,
  Apple,
  Sparkles,
  TrendingUp,
  Globe2,
  CreditCard,
  Headphones,
  Building,
  Award,
  CheckSquare,
  Smartphone2,
  Monitor,
  Tablet
} from 'lucide-react';

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Go-Mulung
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#beranda" className="nav-link">
            Beranda
          </Link>
          <Link href="/#layanan" className="nav-link">
            Layanan
          </Link>
          <Link href="/about" className="nav-link">
            Tentang
          </Link>
          <Link href="/Contact" className="nav-link">
            Kontak
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/register" 
            className="btn-primary hidden sm:inline-flex"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

const Hero: React.FC = () => (
  <section className="hero-bg pt-24 pb-16 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
    </div>
    
    <div className="relative z-10 container-responsive">
      <div className="text-center mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        
        <div className="section-badge">
          <Download className="h-4 w-4 mr-2" />
          Download Aplikasi
        </div>
        
        <h1 className="hero-title">
          Unduh Aplikasi <span className="text-gradient-green">Go-Mulung</span>
        </h1>
        <p className="hero-subtitle">
          Dapatkan kemudahan dalam mengelola sampah Anda dengan aplikasi mobile yang powerful, 
          user-friendly, dan dilengkapi dengan teknologi terkini
        </p>
      </div>
    </div>
  </section>
);

const AppFeatures: React.FC = () => (
  <section className="section-padding bg-white">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Zap className="h-4 w-4 mr-2" />
          Fitur Unggulan
        </div>
        <h2 className="section-title">
          Fitur <span className="text-gradient-green">Unggulan</span> Aplikasi
        </h2>
        <p className="section-subtitle">
          Nikmati pengalaman terbaik dalam pengelolaan sampah dengan teknologi terkini
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="feature-card">
          <div className="feature-icon">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h3 className="feature-title">Pemesanan Cepat</h3>
          <p className="feature-description">Pesan layanan pengangkutan sampah dalam hitungan detik dengan interface yang intuitif</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Tracking Real-time</h3>
          <p className="text-gray-600 leading-relaxed">Pantau perjalanan sampah Anda secara real-time dengan peta interaktif</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl border border-purple-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Pembayaran Aman</h3>
          <p className="text-gray-600 leading-relaxed">Sistem pembayaran yang aman dan terpercaya dengan berbagai metode pembayaran</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Headphones className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Support</h3>
          <p className="text-gray-600 leading-relaxed">Dukungan pelanggan 24/7 melalui chat, telepon, dan video call</p>
        </div>
      </div>
    </div>
  </section>
);

const DownloadSection: React.FC = () => (
  <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
    <div className="container-responsive">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-badge">
            <Play className="h-4 w-4 mr-2" />
            Platform Favorit
          </div>
          <h2 className="section-title">
            Tersedia di Platform <span className="text-gradient-green">Favorit</span> Anda
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Aplikasi Go-Mulung tersedia di Google Play Store dan akan segera hadir di App Store. 
            Unduh sekarang dan mulai perjalanan Anda untuk lingkungan yang lebih bersih.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">Rating 4.8/5 dari 10K+ pengguna</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-gray-700 font-medium">10K+ pengguna aktif</span>
            </div>
            <div className="flex items-center">
              <Download className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700 font-medium">Ukuran aplikasi hanya 25MB</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://play.google.com/store" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Play className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Apple className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="card-modern p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Smartphone2 className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aplikasi Mobile</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nikmati kemudahan mengelola sampah di mana saja dengan aplikasi mobile yang responsif 
              dan mudah digunakan
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Monitor className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Desktop</span>
              </div>
              <div className="text-center">
                <Tablet className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Tablet</span>
              </div>
              <div className="text-center">
                <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AppScreenshots: React.FC = () => (
  <section className="section-padding bg-white">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Smartphone className="h-4 w-4 mr-2" />
          Preview Aplikasi
        </div>
        <h2 className="section-title">
          Lihat <span className="text-gradient-green">Aplikasi</span> Kami
        </h2>
        <p className="section-subtitle">
          Interface yang modern dan user-friendly untuk pengalaman terbaik
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-modern p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Dashboard Utama</h3>
          <p className="text-gray-600 text-sm">Interface yang bersih dan informatif untuk monitoring sampah Anda</p>
        </div>
        
        <div className="card-modern p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Tracking Real-time</h3>
          <p className="text-gray-600 text-sm">Pantau perjalanan sampah dengan peta interaktif yang akurat</p>
        </div>
        
        <div className="card-modern p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Pembayaran</h3>
          <p className="text-gray-600 text-sm">Sistem pembayaran yang aman dan mudah dengan berbagai metode</p>
        </div>
      </div>
    </div>
  </section>
);

const CTA: React.FC = () => (
  <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
    </div>
    
    <div className="relative z-10 container-responsive text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
          <TrendingUp className="h-4 w-4 mr-2" />
          Mulai Sekarang
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Siap Mengunduh <span className="text-yellow-300">Aplikasi</span>?
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pengguna yang telah mempercayai aplikasi Go-Mulung untuk 
          pengelolaan sampah yang lebih baik
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/register" 
            className="group inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/Contact" 
            className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-600 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-content">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Go-Mulung
            </span>
          </div>
          <p className="footer-description">
            Platform digital terdepan untuk layanan pengangkutan sampah yang mengubah cara masyarakat 
            mengelola sampah dengan teknologi terkini dan komitmen terhadap lingkungan yang berkelanjutan.
          </p>
          <div className="footer-social">
            <a href="#" className="footer-social-link">
              <Globe2 className="h-5 w-5" />
            </a>
            <a href="#" className="footer-social-link">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="footer-social-link">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="footer-section-title">Layanan</h3>
          <Link href="#" className="footer-link">Pengangkutan Sampah</Link>
          <Link href="#" className="footer-link">Daur Ulang</Link>
          <Link href="#" className="footer-link">Pengolahan Kompos</Link>
          <Link href="#" className="footer-link">Konsultasi Lingkungan</Link>
          <Link href="#" className="footer-link">Pelatihan SDM</Link>
        </div>
        
        <div>
          <h3 className="footer-section-title">Perusahaan</h3>
          <Link href="/about" className="footer-link">Tentang Kami</Link>
          <Link href="#" className="footer-link">Tim Kami</Link>
          <Link href="#" className="footer-link">Karir</Link>
          <Link href="#" className="footer-link">Berita</Link>
          <Link href="#" className="footer-link">Press Kit</Link>
        </div>
        
        <div>
          <h3 className="footer-section-title">Kontak</h3>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-400">(021) 123-4567</span>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-400">info@gomulung.com</span>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-400">Jl. Kebersihan No. 123, Jakarta</span>
          </div>
        </div>
      </div>
      
      <div className="footer-divider">
        <div className="footer-copyright">
          © 2024 Go-Mulung. Semua hak dilindungi. Dibuat dengan ❤️ untuk lingkungan yang lebih bersih.
        </div>
      </div>
    </div>
  </footer>
);

const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AppFeatures />
      <DownloadSection />
      <AppScreenshots />
      <CTA />
      <Footer />
    </div>
  );
};

export default DownloadPage;
