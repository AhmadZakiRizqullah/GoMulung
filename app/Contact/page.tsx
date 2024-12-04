"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      background: '#ffffff',
    }}>
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
          maxWidth: '800px',
          margin: '0 auto',
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid #edf2f7'
        }}>
          <h1 style={{
            fontSize: '3rem',
            background: 'linear-gradient(45deg, #38a169, #4fd1c5)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Hubungi Kami
          </h1>
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label htmlFor="name" style={{ color: '#4a5568', fontSize: '1.1rem', letterSpacing: '1px' }}>Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '1rem',
                  borderRadius: '15px',
                  border: '2px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#2d3748',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#38a169';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(56, 161, 105, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label htmlFor="email" style={{ color: '#4a5568', fontSize: '1.1rem', letterSpacing: '1px' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '1rem',
                  borderRadius: '15px',
                  border: '2px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#2d3748',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label htmlFor="subject" style={{ color: '#4a5568', fontSize: '1.1rem', letterSpacing: '1px' }}>Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  padding: '1rem',
                  borderRadius: '15px',
                  border: '2px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#2d3748',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label htmlFor="message" style={{ color: '#4a5568', fontSize: '1.1rem', letterSpacing: '1px' }}>Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  padding: '1rem',
                  borderRadius: '15px',
                  border: '2px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#2d3748',
                  fontSize: '1rem',
                  resize: 'vertical',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '1.2rem 2.5rem',
                background: 'linear-gradient(45deg, #38a169, #4fd1c5)',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(56, 161, 105, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(56, 161, 105, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(56, 161, 105, 0.3)';
              }}
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
