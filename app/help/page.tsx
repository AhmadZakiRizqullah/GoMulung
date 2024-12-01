"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const Bantuan = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleRollbox = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column' as const,
        },
        rollbox: {
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            margin: '1rem 0',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        rollboxHeader: {
            padding: '1rem',
            backgroundColor: '#38a169',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s ease',
        },
        rollboxContent: {
            maxHeight: '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-out',
        },
        rollboxContentActive: {
            maxHeight: '1000px',
            transition: 'max-height 0.5s ease-in',
        },
        rollboxContentInner: {
            padding: '1rem',
        },
        question: {
            fontWeight: 'bold',
            color: '#2d3748',
            marginBottom: '0.5rem',
        },
        answer: {
            color: '#4a5568',
            marginBottom: '1.5rem',
            lineHeight: '1.6',
        }
    };

    return (
        <div style={styles.container}>
            <header>
                <nav>
                    <Image src="/asset/logo.png" alt="Go Mulung Logo" className="logo" width={100} height={100}/>
                    <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/download">Unduh</Link></li>
                        <li><Link href="/register">Daftar</Link></li>
                        <li><Link href="/help">Bantuan</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="Hero">
                    <h1>Bantuan - Go Mulung</h1>
                    <p>Temukan jawaban untuk pertanyaan Anda di sini</p>
                </section>

                <section className="content">
                    <h2>Pertanyaan yang Sering Diajukan (QnA)</h2>

                    <div className="qna">
                        {[
                            {
                                title: "Pertanyaan Umum",
                                questions: [
                                    { q: "Apa itu Go Mulung?", a: "Go Mulung adalah layanan pengumpulan sampah berbasis aplikasi yang memungkinkan pengguna untuk memesan pengangkutan berbagai jenis sampah melalui aplikasi mobile kami." },
                                    { q: "Bagaimana cara saya memesan layanan pengangkutan sampah?", a: "Anda dapat memesan layanan pengangkutan sampah melalui aplikasi Go Mulung yang dapat diunduh dari App Store atau Google Play. Setelah aplikasi terpasang, Anda tinggal mengikuti panduan untuk memesan layanan sesuai kebutuhan Anda." },
                                    { q: "Apa saja jenis sampah yang bisa diangkut oleh Go Mulung?", a: "Go Mulung melayani pengangkutan berbagai jenis sampah, termasuk sampah rumah tangga, sampah organik, sampah daur ulang, dan sampah elektronik. Pastikan untuk memisahkan sampah Anda sesuai dengan kategori saat memesan layanan." }
                                ]
                            },
                            {
                                title: "Pemesanan dan Pembayaran",
                                questions: [
                                    { q: "Apakah saya bisa menjadwalkan pengangkutan sampah di hari tertentu?", a: "Ya, melalui aplikasi Go Mulung, Anda dapat menjadwalkan pengangkutan sampah pada hari dan jam yang Anda inginkan. Kami akan menyesuaikan dengan jadwal Anda." },
                                    { q: "Apa metode pembayaran yang tersedia?", a: "Go Mulung menerima pembayaran melalui berbagai metode, termasuk transfer bank, kartu kredit, dan pembayaran digital melalui e-wallet seperti GoPay, OVO, dan Dana." },
                                    { q: "Bagaimana cara mengecek status pemesanan saya?", a: "Anda dapat mengecek status pemesanan langsung dari aplikasi Go Mulung. Pada halaman pemesanan, Anda akan melihat status real-time dari pengangkutan yang sedang berlangsung." }
                                ]
                            },
                            {
                                title: "Masalah Teknis",
                                questions: [
                                    { q: "Aplikasi tidak berfungsi, apa yang harus saya lakukan?", a: "Jika aplikasi Go Mulung tidak berfungsi, cobalah untuk memperbarui aplikasi ke versi terbaru atau restart perangkat Anda. Jika masalah masih berlanjut, silakan hubungi tim dukungan kami melalui email atau layanan pelanggan di aplikasi." },
                                    { q: "Bagaimana jika ada kesalahan dalam penagihan?", a: "Jika Anda menemukan kesalahan dalam penagihan, segera hubungi layanan pelanggan kami melalui aplikasi Go Mulung, atau kirim email ke support@gomulung.com dengan detail pesanan Anda." }
                                ]
                            }
                        ].map((section, index) => (
                            <div key={index} style={styles.rollbox}>
                                <div 
                                    style={styles.rollboxHeader}
                                    onClick={() => toggleRollbox(index)}
                                >
                                    <h3>{section.title}</h3>
                                </div>
                                <div style={{
                                    ...styles.rollboxContent,
                                    ...(activeIndex === index ? styles.rollboxContentActive : {})
                                }}>
                                    <div style={styles.rollboxContentInner}>
                                        {section.questions.map((item, idx) => (
                                            <div key={idx}>
                                                <p style={styles.question}>{item.q}</p>
                                                <p style={styles.answer}>{item.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="Footer">
                <p>&copy; 2024 Go Mulung. Hak Cipta Dilindungi.</p>
            </footer>
        </div>
    );
};

export default Bantuan;
