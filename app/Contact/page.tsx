"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowLeft, 
  MessageCircle,
  Leaf,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Globe2,
  Download
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
          <Link href="/Contact" className="nav-link active">
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
          <MessageCircle className="h-4 w-4 mr-2" />
          Hubungi Kami
        </div>
        
        <h1 className="hero-title">
          Hubungi <span className="text-gradient-green">Kami</span>
        </h1>
        <p className="hero-subtitle">
          Kami siap membantu Anda dengan pertanyaan, saran, atau permintaan layanan. 
          Tim kami akan merespons dalam waktu 24 jam dengan solusi terbaik.
        </p>
      </div>
    </div>
  </section>
);

const ContactInfo: React.FC = () => (
  <section className="section-padding bg-white">
    <div className="container-responsive">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group text-center p-8 card-gradient rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Telepon</h3>
          <p className="text-gray-600 mb-2 font-medium">(021) 123-4567</p>
          <p className="text-sm text-gray-500">Senin - Jumat, 08:00 - 17:00</p>
        </div>
        
        <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
          <p className="text-gray-600 mb-2 font-medium">info@gomulung.com</p>
          <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
        </div>
        
        <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl border border-purple-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Alamat</h3>
          <p className="text-gray-600 mb-2 font-medium">Jl. Kebersihan No. 123</p>
          <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge">
            <Send className="h-4 w-4 mr-2" />
            Kirim Pesan
          </div>
          <h2 className="section-title">
            Kirim <span className="text-gradient-green">Pesan</span>
          </h2>
          <p className="section-subtitle">
            Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda dengan solusi terbaik
          </p>
        </div>
        
        <div className="card-modern p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  placeholder="Masukkan nama lengkap" 
                  required 
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Masukkan email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  placeholder="Masukkan nomor telepon" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek *
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  placeholder="Masukkan subjek pesan" 
                  required 
                  value={formData.subject} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Pesan *
              </label>
              <textarea 
                id="message"
                name="message" 
                rows={6}
                placeholder="Tulis pesan Anda di sini..." 
                required 
                value={formData.message} 
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary btn-large group"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner mr-2"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "Berapa lama waktu pengangkutan sampah?",
      answer: "Waktu pengangkutan sampah bervariasi tergantung lokasi dan jenis sampah. Umumnya dalam 2-4 jam setelah pemesanan dikonfirmasi."
    },
    {
      question: "Apakah layanan tersedia 24/7?",
      answer: "Ya, layanan kami tersedia 24/7 untuk kebutuhan darurat. Namun untuk pemesanan reguler, kami sarankan dilakukan pada jam kerja."
    },
    {
      question: "Bagaimana dengan keamanan data pelanggan?",
      answer: "Kami mengutamakan keamanan data pelanggan dengan menggunakan enkripsi SSL dan mengikuti standar keamanan internasional."
    },
    {
      question: "Apakah ada biaya tersembunyi?",
      answer: "Tidak ada biaya tersembunyi. Semua biaya sudah transparan dan akan diinformasikan sebelum pemesanan dikonfirmasi."
    },
    {
      question: "Bagaimana cara melacak pengangkutan sampah?",
      answer: "Anda dapat melacak pengangkutan sampah melalui aplikasi mobile kami dengan fitur tracking real-time."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div className="text-center mb-20">
          <div className="section-badge">
            <MessageCircle className="h-4 w-4 mr-2" />
            Pertanyaan Umum
          </div>
          <h2 className="section-title">
            Pertanyaan <span className="text-gradient-green">Umum</span>
          </h2>
          <p className="section-subtitle">
            Temukan jawaban untuk pertanyaan yang sering diajukan oleh pelanggan kami
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="card-modern">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-t-3xl"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-green-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
          Siap Bergabung dengan <span className="text-yellow-300">Go-Mulung</span>?
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pengguna yang telah mempercayai layanan kami untuk 
          pengelolaan sampah yang lebih baik dan lingkungan yang lebih bersih
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

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default ContactPage;
