"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        username: '',
        password: '',
        confirm_password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Welcome to Go-Mulung! Redirecting to login page...');
        window.location.href = '/home';
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            <header>
                <nav>
                    <Link href="/home">
                        <Image src="/asset/logo.png" alt="Go Mulung Logo" className="logo" />
                    </Link>
                    <ul>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <div style={{
                maxWidth: '500px',
                margin: '2rem auto',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ 
                    textAlign: 'center', 
                    color: '#38a169',
                    marginBottom: '2rem'
                }}>Join Go-Mulung Today!</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <input 
                            type="text" 
                            name="fullname" 
                            placeholder="Full Name" 
                            required 
                            value={formData.fullname} 
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '5px',
                                border: '1px solid #e2e8f0',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            required 
                            value={formData.email} 
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '5px',
                                border: '1px solid #e2e8f0',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Choose a Username" 
                            required 
                            value={formData.username} 
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '5px',
                                border: '1px solid #e2e8f0',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Create a Password" 
                            required 
                            value={formData.password} 
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '5px',
                                border: '1px solid #e2e8f0',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="confirm_password" 
                            placeholder="Confirm Your Password" 
                            required 
                            value={formData.confirm_password} 
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '5px',
                                border: '1px solid #e2e8f0',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        style={{
                            backgroundColor: '#38a169',
                            color: 'white',
                            padding: '0.75rem',
                            borderRadius: '5px',
                            border: 'none',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginTop: '1rem',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2f855a'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#38a169'}
                    >
                        Start Your Go-Mulung Journey
                    </button>
                </form>
                <p style={{ 
                    textAlign: 'center', 
                    marginTop: '1.5rem',
                    color: '#4a5568'
                }}>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
