import Link from 'next/link';
import React from 'react';
import { 
  Truck, 
  Shield, 
  Clock, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Download,
  Leaf,
  Award,
  Sparkles,
  TrendingUp,
  Globe2,
  Headphones,
  Smartphone,
  CreditCard
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
          <Link href="/services" className="nav-link">
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
  <section id="beranda" className="hero-bg min-h-screen flex items-center justify-center">
    {/* Enhanced animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
    </div>
    
    <div className="relative z-10 container-responsive text-center">
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">
          <Sparkles className="h-4 w-4 mr-2" />
          Platform Pengelolaan Sampah Terdepan
        </div>
        
        <h1 className="hero-title">
          Solusi Pintar untuk
          <span className="text-gradient-green"> Pengelolaan Sampah</span>
        </h1>
        <p className="hero-subtitle">
          Platform digital yang menghubungkan Anda dengan layanan pengangkutan sampah profesional. 
          Cepat, aman, dan ramah lingkungan untuk masa depan yang lebih bersih.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            href="/register" 
            className="btn-primary btn-large group"
          >
            Mulai Sekarang
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/download" 
            className="btn-secondary btn-large group"
          >
            <Download className="mr-2 h-5 w-5" />
            Download App
          </Link>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="stats-item">
            <div className="stats-number">10K+</div>
            <div className="stats-label">Pengguna Aktif</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">50K+</div>
            <div className="stats-label">Sampah Terangkut</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">4.8</div>
            <div className="stats-label flex items-center justify-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              Rating Aplikasi
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section id="layanan" className="section-padding bg-white">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Award className="h-4 w-4 mr-2" />
          Layanan Unggulan
        </div>
        <h2 className="section-title">
          Mengapa Memilih <span className="text-gradient-green">Go-Mulung</span>?
        </h2>
        <p className="section-subtitle">
          Kami menyediakan layanan pengangkutan sampah yang terpercaya dengan teknologi terkini 
          dan komitmen terhadap lingkungan yang berkelanjutan
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="feature-card">
          <div className="feature-icon">
            <Truck className="h-7 w-7 text-white" />
          </div>
          <h3 className="feature-title">Pengangkutan Cepat</h3>
          <p className="feature-description">Layanan pengangkutan sampah dalam waktu 2-4 jam setelah pemesanan dengan tracking real-time</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Terpercaya & Aman</h3>
          <p className="text-gray-600 leading-relaxed">Tim profesional bersertifikat dengan peralatan standar keamanan dan asuransi lengkap</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100/50">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Clock className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Tersedia</h3>
          <p className="text-gray-600 leading-relaxed">Layanan tersedia setiap hari, termasuk hari libur dan malam hari untuk kebutuhan darurat</p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100/50">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Headphones className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Support</h3>
          <p className="text-gray-600 leading-relaxed">Tim support siap membantu Anda 24/7 melalui chat, telepon, dan video call</p>
        </div>
      </div>
    </div>
  </section>
);

const WasteTypes: React.FC = () => (
  <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Leaf className="h-4 w-4 mr-2" />
          Jenis Sampah
        </div>
        <h2 className="section-title">
          Jenis Sampah yang Kami <span className="text-gradient-green">Angkut</span>
        </h2>
        <p className="section-subtitle">
          Kami menangani berbagai jenis sampah dengan metode pengolahan yang tepat dan ramah lingkungan
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="waste-card">
          <div className="waste-icon">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h3 className="waste-title">Sampah Organik</h3>
          <p className="waste-description">
            Sampah dapur, sisa makanan, dan bahan organik lainnya yang dapat diolah menjadi kompos
          </p>
          <div className="space-y-2">
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Diolah menjadi kompos berkualitas</span>
            </div>
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Mengurangi emisi gas metana</span>
            </div>
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Mendukung pertanian organik</span>
            </div>
          </div>
        </div>
        
        <div className="waste-card">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          <h3 className="waste-title">Sampah Elektronik</h3>
          <p className="waste-description">
            Perangkat elektronik bekas yang mengandung bahan berbahaya dan berharga
          </p>
          <div className="space-y-2">
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Daur ulang komponen berharga</span>
            </div>
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Penanganan bahan berbahaya</span>
            </div>
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Mengurangi polusi digital</span>
            </div>
          </div>
        </div>
        
        <div className="waste-card">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h3 className="waste-title">Sampah Plastik</h3>
          <p className="waste-description">
            Kemasan plastik dan produk plastik lainnya yang dapat didaur ulang
          </p>
          <div className="space-y-2">
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Daur ulang menjadi produk baru</span>
            </div>
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Mengurangi sampah di laut</span>
            </div>
            <div className="waste-benefit">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              <span>Ekonomi sirkular</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="section-padding bg-white">
    <div className="container-responsive">
      <div className="text-center mb-20">
        <div className="section-badge">
          <Star className="h-4 w-4 mr-2" />
          Testimoni Pelanggan
        </div>
        <h2 className="section-title">
          Apa Kata <span className="text-gradient-green">Pelanggan</span> Kami
        </h2>
        <p className="section-subtitle">
          Dengarkan pengalaman langsung dari ribuan pelanggan yang telah mempercayai layanan kami
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="testimonial-card">
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="testimonial-text">
            &ldquo;Layanan yang sangat memuaskan! Tim pengangkutan sangat profesional dan tepat waktu. 
            Aplikasinya juga mudah digunakan dan tracking real-time sangat membantu.&rdquo;
          </p>
          <div className="flex items-center">
            <div className="testimonial-avatar mr-4">SA</div>
            <div>
              <div className="testimonial-author">Sarah Amanda</div>
              <div className="text-sm text-gray-500">Jakarta Selatan</div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="testimonial-text">
            &ldquo;Go-Mulung telah mengubah cara saya mengelola sampah. Sekarang lebih mudah, 
            terorganisir, dan ramah lingkungan. Sangat direkomendasikan!&rdquo;
          </p>
          <div className="flex items-center">
            <div className="testimonial-avatar mr-4">BD</div>
            <div>
              <div className="testimonial-author">Budi Darmawan</div>
              <div className="text-sm text-gray-500">Bandung</div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="testimonial-text">
            &ldquo;Customer service yang luar biasa! Mereka selalu siap membantu dan memberikan 
            solusi terbaik. Proses pengangkutan juga sangat cepat dan aman.&rdquo;
          </p>
          <div className="flex items-center">
            <div className="testimonial-avatar mr-4">ML</div>
            <div>
              <div className="testimonial-author">Maya Lestari</div>
              <div className="text-sm text-gray-500">Surabaya</div>
            </div>
          </div>
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
          Bergabung Sekarang
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Mulai Perjalanan <span className="text-yellow-300">Hijau</span> Anda
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pengguna yang telah mempercayai Go-Mulung untuk 
          pengelolaan sampah yang lebih baik dan lingkungan yang lebih bersih
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/register" 
            className="group inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Daftar Gratis
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/download" 
            className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-600 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download App
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

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WasteTypes />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
