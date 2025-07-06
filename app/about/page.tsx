"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  CheckCircle, 
  ArrowLeft,
  Leaf,
  Zap,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  TrendingUp,
  Globe2,
  Lightbulb,
  Eye,
  Handshake,
  MapPin
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
          <Link href="/" className="nav-link">
            Beranda
          </Link>
          <Link href="/Services" className="nav-link">
            Layanan
          </Link>
          <Link href="/About" className="nav-link active">
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
          <Heart className="h-4 w-4 mr-2" />
          Tentang Kami
        </div>
        
        <h1 className="hero-title">
          Tentang <span className="text-gradient-green">Go-Mulung</span>
        </h1>
        <p className="hero-subtitle">
          Platform digital terdepan untuk layanan pengangkutan sampah yang mengubah cara masyarakat mengelola sampah 
          dengan teknologi terkini dan komitmen terhadap lingkungan yang berkelanjutan.
        </p>
      </div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="section-padding bg-white">
    <div className="container-responsive">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-badge">
            <Zap className="h-4 w-4 mr-2" />
            Latar Belakang
          </div>
          <h2 className="section-title">
            Latar Belakang <span className="text-gradient-green">Perusahaan</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Go-Mulung didirikan dengan visi untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan 
            melalui solusi inovatif dalam pengelolaan sampah. Kami percaya bahwa teknologi dapat menjadi 
            kunci untuk mengatasi masalah sampah yang semakin kompleks.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sejak awal, kami berkomitmen untuk menghubungkan masyarakat dengan layanan pengangkutan sampah 
            yang profesional, terpercaya, dan ramah lingkungan.
          </p>
        </div>
        
        <div className="card-gradient rounded-3xl p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="stats-item">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="stats-number">10K+</div>
              <div className="stats-label">Pengguna Aktif</div>
            </div>
            <div className="stats-item">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
            </div>
            <div className="stats-item">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600 font-medium">Kota Terjangkau</div>
            </div>
            <div className="stats-item">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Sampah Terangkut</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MissionSection: React.FC = () => (
  <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Target className="h-4 w-4 mr-2" />
          Misi & Visi
        </div>
        <h2 className="section-title">
          Misi & Visi <span className="text-gradient-green">Kami</span>
        </h2>
        <p className="section-subtitle">
          Komitmen kami untuk menciptakan masa depan yang lebih bersih dan berkelanjutan
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-modern p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Go-Mulung berkomitmen untuk mengubah cara masyarakat mengelola sampah dengan solusi yang inovatif, 
            efisien, dan ramah lingkungan.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Mengurangi dampak lingkungan dari pembuangan sampah yang tidak tepat</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Menciptakan lapangan kerja yang berkelanjutan</span>
            </li>
          </ul>
        </div>
        
        <div className="card-modern p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Eye className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Menjadi platform terdepan dalam transformasi digital pengelolaan sampah di Indonesia 
            dan Asia Tenggara.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Mencapai zero waste society di Indonesia</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Mengembangkan teknologi AI untuk optimasi pengelolaan sampah</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Menginspirasi generasi muda untuk peduli lingkungan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="section-padding bg-white">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Lightbulb className="h-4 w-4 mr-2" />
          Nilai-Nilai Perusahaan
        </div>
        <h2 className="section-title">
          Nilai-Nilai <span className="text-gradient-green">Kami</span>
        </h2>
        <p className="section-subtitle">
          Prinsip-prinsip yang menjadi fondasi dalam setiap langkah dan keputusan kami
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="feature-card">
          <div className="feature-icon">
            <Heart className="h-7 w-7 text-white" />
          </div>
          <h3 className="feature-title">Peduli Lingkungan</h3>
          <p className="feature-description">Setiap tindakan kami selalu mempertimbangkan dampak terhadap lingkungan dan keberlanjutan</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Handshake className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Integritas</h3>
          <p className="text-gray-600 leading-relaxed">Menjalankan bisnis dengan kejujuran, transparansi, dan tanggung jawab</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100/50">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Inovasi</h3>
          <p className="text-gray-600 leading-relaxed">Terus berinovasi untuk memberikan solusi terbaik dalam pengelolaan sampah</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100/50">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Users className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Kolaborasi</h3>
          <p className="text-gray-600 leading-relaxed">Berkolaborasi dengan berbagai pihak untuk mencapai tujuan bersama</p>
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
          Bergabung dengan Kami
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Siap Bergabung dengan <span className="text-yellow-300">Go-Mulung</span>?
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Mari bersama-sama menciptakan lingkungan yang lebih bersih dan berkelanjutan 
          untuk generasi mendatang
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

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <MissionSection />
      <FeaturesSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
