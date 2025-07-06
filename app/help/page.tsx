"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail, ArrowLeft, HelpCircle } from 'lucide-react';

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
          <Link href="/#layanan" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Layanan</Link>
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
          Pusat <span className="text-green-600">Bantuan</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Temukan jawaban untuk pertanyaan Anda dan dapatkan bantuan yang Anda butuhkan
        </p>
      </div>
    </div>
  </section>
);

const SearchSection: React.FC = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Cari pertanyaan atau topik bantuan..."
          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-lg"
        />
      </div>
    </div>
  </section>
);

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "Pertanyaan Umum",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          q: "Apa itu Go-Mulung?",
          a: "Go-Mulung adalah platform digital terdepan untuk layanan pengangkutan sampah yang menghubungkan Anda dengan layanan pengangkutan sampah profesional. Kami menyediakan solusi cepat, aman, dan ramah lingkungan untuk pengelolaan sampah."
        },
        {
          q: "Bagaimana cara memesan layanan pengangkutan sampah?",
          a: "Anda dapat memesan layanan melalui aplikasi mobile Go-Mulung yang tersedia di Google Play Store. Setelah mendaftar, pilih jenis sampah, tentukan jadwal pengangkutan, dan konfirmasi pesanan. Tim kami akan menghubungi Anda untuk konfirmasi."
        },
        {
          q: "Apa saja jenis sampah yang bisa diangkut?",
          a: "Kami menangani berbagai jenis sampah termasuk sampah organik, anorganik, B3, residu, kertas, dan elektronik. Setiap jenis sampah akan ditangani sesuai dengan prosedur yang tepat untuk memastikan keamanan dan keberlanjutan lingkungan."
        }
      ]
    },
    {
      title: "Pemesanan & Pembayaran",
      icon: <MessageCircle className="h-6 w-6" />,
      questions: [
        {
          q: "Apakah bisa menjadwalkan pengangkutan sampah?",
          a: "Ya, Anda dapat menjadwalkan pengangkutan sampah sesuai dengan kebutuhan Anda. Layanan tersedia 24/7 dan Anda dapat memilih waktu yang paling nyaman untuk pengangkutan."
        },
        {
          q: "Metode pembayaran apa yang tersedia?",
          a: "Kami menerima berbagai metode pembayaran termasuk transfer bank, kartu kredit/debit, dan e-wallet seperti GoPay, OVO, DANA, dan ShopeePay. Pembayaran dapat dilakukan sebelum atau setelah layanan."
        },
        {
          q: "Bagaimana cara mengecek status pesanan?",
          a: "Anda dapat mengecek status pesanan secara real-time melalui aplikasi Go-Mulung. Sistem tracking kami akan memberikan update status mulai dari konfirmasi pesanan hingga selesai pengangkutan."
        }
      ]
    },
    {
      title: "Layanan & Teknis",
      icon: <Phone className="h-6 w-6" />,
      questions: [
        {
          q: "Berapa lama waktu pengangkutan sampah?",
          a: "Waktu pengangkutan biasanya 2-4 jam setelah pemesanan dikonfirmasi. Untuk area tertentu mungkin memerlukan waktu lebih lama tergantung lokasi dan volume sampah."
        },
        {
          q: "Apa yang harus dilakukan jika aplikasi bermasalah?",
          a: "Jika mengalami masalah dengan aplikasi, coba restart aplikasi atau perangkat Anda. Jika masalah berlanjut, hubungi customer support kami melalui chat di aplikasi atau telepon (021) 123-4567."
        },
        {
          q: "Apakah ada biaya tambahan?",
          a: "Biaya layanan sudah termasuk dalam harga yang ditampilkan. Tidak ada biaya tersembunyi atau biaya tambahan lainnya. Semua biaya akan diinformasikan secara transparan sebelum konfirmasi pesanan."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqData.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData[activeCategory || 0].questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSupport: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Masih Butuh Bantuan?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tim support kami siap membantu Anda 24/7
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Telepon</h3>
          <p className="text-gray-600 mb-4">(021) 123-4567</p>
          <p className="text-sm text-gray-500">Senin - Jumat, 08:00 - 17:00</p>
        </div>
        
        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
          <p className="text-gray-600 mb-4">support@gomulung.com</p>
          <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
        </div>
        
        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
          <p className="text-gray-600 mb-4">Melalui aplikasi</p>
          <p className="text-sm text-gray-500">24/7 tersedia</p>
        </div>
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
            <Link href="/#layanan" className="block text-gray-400 hover:text-white transition-colors">Pengangkutan Sampah</Link>
            <Link href="/#layanan" className="block text-gray-400 hover:text-white transition-colors">Daur Ulang</Link>
            <Link href="/#layanan" className="block text-gray-400 hover:text-white transition-colors">Konsultasi</Link>
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

const Bantuan = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SearchSection />
        <FAQSection />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
};

export default Bantuan;
