"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DriverApprovalPage: React.FC = () => {
    const [drivers, setDrivers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'pending' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'pending' },
    ]);

    const handleApproval = (id: number) => {
        setDrivers(drivers.map(driver => 
            driver.id === id ? { ...driver, status: 'approved' } : driver
        ));
    };

    const handleRejection = (id: number) => {
        setDrivers(drivers.map(driver => 
            driver.id === id ? { ...driver, status: 'rejected' } : driver
        ));
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header>
                <nav>
                    <Image src="/asset/logo.png" alt="Go Mulung Logo" width={100} height={100} className="logo" />
                    <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginRight: '1rem' }}><Link href="/admin">Admin</Link></li>
                        <li><Link href="/admin/login">Log Out</Link></li>
                    </ul>
                </nav>
            </header>

            <main style={{ flex: 1, padding: '2rem' }}>
                <h1 style={{ textAlign: 'center', color: '#38a169', marginBottom: '2rem' }}>Approval Driver Registration</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {drivers.map(driver => (
                        <div key={driver.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem',
                            margin: '1rem 0',
                            border: '1px solid #e2e8f0',
                            borderRadius: '10px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        }}>
                            <div>
                                <h3 style={{ margin: 0 }}>{driver.name}</h3>
                                <p style={{ margin: 0 }}>{driver.email}</p>
                                <p style={{ margin: 0, color: driver.status === 'pending' ? '#ff9800' : driver.status === 'approved' ? '#38a169' : '#e53e3e' }}>
                                    Status: {driver.status.charAt(0).toUpperCase() + driver.status.slice(1)}
                                </p>
                            </div>
                            <div>
                                <button 
                                    onClick={() => handleApproval(driver.id)} 
                                    style={{
                                        backgroundColor: '#38a169',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        marginRight: '0.5rem',
                                    }}
                                >
                                    Approve
                                </button>
                                <button 
                                    onClick={() => handleRejection(driver.id)} 
                                    style={{
                                        backgroundColor: '#e53e3e',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
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
                        <Link href="https://www.instagram.com/go_mulung?igsh=dzRzdWNrY2ZtcWNz" className="hover:text-green-200 transition">Instagram</Link>
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

export default DriverApprovalPage;