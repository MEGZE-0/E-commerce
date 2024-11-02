// components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

import './css/Footer.css';


const Footer = ({ darkTheme }) => {
    return (
        <footer className={`footer ${darkTheme ? 'footer-dark' : 'footer-light'} text-center py-4`}>
            <div className="container">
                <div className="social-media mb-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p>&copy; 2024 My E-commerce Store. All rights reserved.</p>
                <div className="links">
                    <a href="/terms" className="footer-link">Terms of Service</a>
                    <span className="mx-2">|</span>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
