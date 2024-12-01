import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7f7f7', padding: '20px' }}>
      <h1 style={{ color: '#34495e', marginBottom: '20px', fontSize: '28px', fontWeight: '600' }}>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '450px', backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 6px 10px rgba(0,0,0,0.12)' }}>
        <input type="text" placeholder="Your Name" style={{ marginBottom: '20px', padding: '15px', fontSize: '18px', border: '1px solid #ccd1d1', borderRadius: '5px' }} />
        <input type="email" placeholder="Your Email" style={{ marginBottom: '20px', padding: '15px', fontSize: '18px', border: '1px solid #ccd1d1', borderRadius: '5px' }} />
        <textarea placeholder="Your Message" style={{ marginBottom: '20px', padding: '15px', fontSize: '18px', border: '1px solid #ccd1d1', borderRadius: '5px', height: '150px' }}></textarea>
        <button type="submit" style={{ padding: '15px', fontSize: '18px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;


