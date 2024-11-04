"use client";
import Link from 'next/link';
import React from 'react';

const LoginPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Login functionality to be implemented');
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            <header>
                <nav>
                    <Link href="/home">
                        <img src="asset/logo.png" alt="Go Mulung Logo" className="logo" />
                    </Link>
                    <ul>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="#">Contact</Link></li>
                        <li><Link href="/register">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>

            <div style={{
                maxWidth: '400px',
                margin: '4rem auto',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ 
                    textAlign: 'center',
                    color: '#38a169',
                    marginBottom: '2rem'
                }}>Welcome Back!</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '5px',
                            border: '1px solid #e2e8f0',
                            fontSize: '16px'
                        }}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '5px',
                            border: '1px solid #e2e8f0',
                            fontSize: '16px'
                        }}
                    />
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
                        Login
                    </button>
                </form>
                <p style={{ 
                    textAlign: 'center',
                    marginTop: '1rem',
                    color: '#4a5568'
                }}>
                    Don't have an account? {' '}
                    <Link href="/register" style={{ 
                        color: '#38a169',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}>
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
