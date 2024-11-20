"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const DownloadPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <nav>
          <Image src="/asset/logo.png" alt="Go-mulung" width={150} height={150} className="logo" />
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/download">Unduh</Link></li>
            <li><Link href="/register">Daftar</Link></li>
            <li><Link href="/help">Bantuan</Link></li>
          </ul>
        </nav>
      </header>

      <main style={{ flex: 1, padding: '2rem' }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem'
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ 
              fontSize: '2.5rem',
              color: '#38a169',
              marginBottom: '1.5rem'
            }}>
              Unduh Aplikasi Go Mulung
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Dapatkan kemudahan dalam mengelola sampah Anda dengan aplikasi Go Mulung. 
              Tersedia di Google Play Store dan akan segera hadir di App Store.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center'
            }}>
              <div style={{
                border: '2px solid #38a169',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center' as const,
                width: '200px',
                height: '120px'
              }}>
                <p style={{
                  fontSize: '1rem',
                  color: '#38a169',
                  marginBottom: '0.5rem'
                }}>GET IT ON</p>
                <a href="https://play.google.com/store" 
                  target="_blank"
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Image 
                    src="/asset/play-store.jpg"
                    alt="Get it on Google Play"
                    width={150}
                    height={50}
                    style={{ height: '50px', width: 'auto' }}
                  />
                </a>
              </div>
              
              <div style={{
                border: '2px solid #38a169',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center' as const,
                width: '200px',
                height: '120px'
              }}>
                <p style={{
                  fontSize: '1rem',
                  color: '#38a169',
                  marginBottom: '0.5rem'
                }}>COMING SOON ON THE</p>
                <a href="https://www.apple.com/app-store/" 
                  target="_blank"
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Image
                    src="/asset/app-store.jpg"
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    style={{ height: '50px', width: 'auto' }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <Image
              src="/asset/mockup.jpg"
              alt="Go Mulung App Mockup"
              width={100}
              height={100}
              style={{
                width: '70%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                marginLeft: '10%'
              }}
            />
          </div>
        </div>
      </main>

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
                <a href="#" className="hover:text-green-200 transition">Instagram</a>
                <a href="#" className="hover:text-green-200 transition">Twitter</a>
                <a href="#" className="hover:text-green-200 transition">Facebook</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} Go Mulung. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DownloadPage;
