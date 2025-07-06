"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Leaf,
  Heart,
  ArrowRight,
  Phone,
  CheckSquare,
  Award,
  Star
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

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Check password strength
        if (name === 'password') {
            let strength = 0;
            if (value.length >= 8) strength++;
            if (/[A-Z]/.test(value)) strength++;
            if (/[a-z]/.test(value)) strength++;
            if (/[0-9]/.test(value)) strength++;
            if (/[^A-Za-z0-9]/.test(value)) strength++;
            setPasswordStrength(strength);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirm_password) {
            alert('Password tidak cocok!');
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        alert('Selamat datang di Go-Mulung! Akun Anda telah berhasil dibuat.');
        window.location.href = '/';
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength <= 2) return 'text-red-500';
        if (passwordStrength <= 3) return 'text-yellow-500';
        return 'text-green-500';
    };

    const getPasswordStrengthText = () => {
        if (passwordStrength <= 2) return 'Lemah';
        if (passwordStrength <= 3) return 'Sedang';
        return 'Kuat';
    };

    const benefits = [
        "Pengangkutan sampah cepat dan terpercaya",
        "Tracking real-time untuk setiap pengangkutan",
        "Layanan 24/7 untuk kebutuhan darurat",
        "Harga transparan tanpa biaya tersembunyi",
        "Tim profesional bersertifikat",
        "Laporan pengurangan jejak karbon"
    ];

    return (
        <div className="min-h-screen hero-bg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
            </div>
            
            <Header />
            
            <div className="relative z-10 pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Form Section */}
                        <div>
                            <div className="text-center lg:text-left mb-8">
                                <Link 
                                    href="/" 
                                    className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors group"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Kembali ke Beranda
                                </Link>
                                
                                <div className="section-badge">
                                    <Heart className="h-4 w-4 mr-2" />
                                    Bergabung dengan Kami
                                </div>
                                
                                <h1 className="hero-title">
                                    Bergabung dengan <span className="text-gradient-green">Go-Mulung</span>
                                </h1>
                                <p className="hero-subtitle">
                                    Mulai perjalanan Anda untuk lingkungan yang lebih bersih dan berkelanjutan
                                </p>
                            </div>
                            
                            <div className="card-modern p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nama Lengkap *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input 
                                                type="text" 
                                                id="fullname"
                                                name="fullname" 
                                                placeholder="Masukkan nama lengkap" 
                                                required 
                                                value={formData.fullname} 
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input 
                                                type="email" 
                                                id="email"
                                                name="email" 
                                                placeholder="Masukkan email" 
                                                required 
                                                value={formData.email} 
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nomor Telepon *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input 
                                                type="tel" 
                                                id="phone"
                                                name="phone" 
                                                placeholder="Masukkan nomor telepon" 
                                                required 
                                                value={formData.phone} 
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Password *
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input 
                                                type={showPassword ? "text" : "password"} 
                                                id="password"
                                                name="password" 
                                                placeholder="Masukkan password" 
                                                required 
                                                value={formData.password} 
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                                            />
                                            <button 
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                        {formData.password && (
                                            <div className="mt-2">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>Kekuatan password:</span>
                                                    <span className={getPasswordStrengthColor()}>
                                                        {getPasswordStrengthText()}
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                                    <div 
                                                        className={`h-2 rounded-full transition-all duration-300 ${
                                                            passwordStrength <= 2 ? 'bg-red-500' : 
                                                            passwordStrength <= 3 ? 'bg-yellow-500' : 'bg-green-500'
                                                        }`}
                                                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="confirm_password" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Konfirmasi Password *
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input 
                                                type={showConfirmPassword ? "text" : "password"} 
                                                id="confirm_password"
                                                name="confirm_password" 
                                                placeholder="Konfirmasi password" 
                                                required 
                                                value={formData.confirm_password} 
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
                                            />
                                            <button 
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                        {formData.confirm_password && formData.password !== formData.confirm_password && (
                                            <p className="text-red-500 text-sm mt-1">Password tidak cocok</p>
                                        )}
                                    </div>
                                    
                                    <div className="text-center">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className="btn-primary btn-large group w-full"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="spinner mr-2"></div>
                                                    Membuat Akun...
                                                </>
                                            ) : (
                                                <>
                                                    Daftar Sekarang
                                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    
                                    <div className="text-center">
                                        <p className="text-gray-600">
                                            Sudah punya akun?{' '}
                                            <Link href="/login" className="text-green-600 hover:text-green-700 font-semibold">
                                                Masuk di sini
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        {/* Benefits Section */}
                        <div>
                            <div className="card-gradient rounded-3xl p-8">
                                <div className="text-center mb-8">
                                    <div className="section-badge">
                                        <Award className="h-4 w-4 mr-2" />
                                        Keuntungan Bergabung
                                    </div>
                                    <h2 className="section-title">
                                        Mengapa Memilih <span className="text-gradient-green">Go-Mulung</span>?
                                    </h2>
                                </div>
                                
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckSquare className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 p-6 bg-white/50 rounded-2xl">
                                    <div className="text-center">
                                        <div className="flex justify-center text-yellow-400 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 font-medium mb-2">4.8/5 Rating</p>
                                        <p className="text-sm text-gray-600">Dari 10K+ pengguna yang puas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
