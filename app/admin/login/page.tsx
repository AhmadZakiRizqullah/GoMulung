"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        alert('Login attempt with: ' + JSON.stringify(formData));
        setIsLoading(false);
    };

    const handleForgotPassword = () => {
        alert('Reset password link will be sent to your email');
    };

    return (
        <div style={{ 
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                maxWidth: '360px',
                width: '90%',
                margin: '2rem',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease-in-out'
            }}>
                <h2 style={{ 
                    textAlign: 'center',
                    color: '#047857',
                    marginBottom: '2rem',
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    letterSpacing: '-0.5px'
                }}>Welcome Back!</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ position: 'relative' }}>
                        <label style={{
                            position: 'absolute',
                            left: '0',
                            top: '-1.25rem',
                            color: '#065f46',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem 0.75rem 0.75rem 2rem',
                                borderRadius: '10px',
                                border: '2px solid #d1fae5',
                                fontSize: '0.875rem',
                                transition: 'all 0.2s',
                                outline: 'none',
                                backgroundColor: '#f0fdf4',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#047857'}
                            onBlur={(e) => e.target.style.borderColor = '#d1fae5'}
                        />
                        <span style={{
                            position: 'absolute',
                            left: '0.75rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#065f46',
                            fontSize: '0.875rem'
                        }}>👤</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <label style={{
                            position: 'absolute',
                            left: '0',
                            top: '-1.25rem',
                            color: '#065f46',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem 0.75rem 0.75rem 2rem',
                                borderRadius: '10px',
                                border: '2px solid #d1fae5',
                                fontSize: '0.875rem',
                                transition: 'all 0.2s',
                                outline: 'none',
                                backgroundColor: '#f0fdf4',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#047857'}
                            onBlur={(e) => e.target.style.borderColor = '#d1fae5'}
                        />
                        <span style={{
                            position: 'absolute',
                            left: '0.75rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#065f46',
                            fontSize: '0.875rem'
                        }}>🔒</span>
                    </div>
                    <button 
                        type="submit"
                        disabled={isLoading}
                        style={{
                            backgroundColor: '#047857',
                            color: 'white',
                            padding: '0.75rem',
                            borderRadius: '10px',
                            border: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            cursor: isLoading ? 'wait' : 'pointer',
                            marginTop: '0.5rem',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 6px rgba(4, 120, 87, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                        onMouseOver={(e) => {
                            if (!isLoading) {
                                e.currentTarget.style.backgroundColor = '#065f46';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 8px rgba(4, 120, 87, 0.3)';
                            }
                        }}
                        onMouseOut={(e) => {
                            if (!isLoading) {
                                e.currentTarget.style.backgroundColor = '#047857';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(4, 120, 87, 0.2)';
                            }
                        }}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div style={{ 
                    marginTop: '1.5rem',
                    padding: '1rem 0',
                    borderTop: '1px solid #d1fae5',
                    textAlign: 'center'
                }}>
                    <button 
                        onClick={handleForgotPassword}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#047857',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            padding: '0.5rem 1rem',
                            transition: 'color 0.2s',
                            fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#065f46'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#047857'}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;