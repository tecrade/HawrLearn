import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="footer">
      <motion.div className="cta-banner" {...fadeInUp}>
        <div className="cta-content">
          <div className="cta-text">
            <p className="cta-description">Simple & easy way to unleash your dreams....</p>
            <h2 className="cta-heading">Are you ready to get started?</h2>
          </div>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="cta-button"
          >
            Get in touch
          </motion.button>
        </div>
      </motion.div>
        <div className="footer-container">
          <div className="footer-grid">
            {/* Explore Section */}
            <motion.div {...fadeInUp}>
              <ul className="footer-list">
              <h3 className="footer-heading one">EXPLORE HAWR LEARN</h3>
                <li><a href="#" className="footer-link">Online Examination</a></li>
                <li><a href="#" className="footer-link">Profile Based Assessments</a></li>
                <li><a href="#" className="footer-link">Remote Proctoring Platform</a></li>
                <li><a href="#" className="footer-link">Communication</a></li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div {...fadeInUp}>
              <ul className="footer-list two">
                <li><a href="#" className="footer-link">Recruitment</a></li>
                <li><a href="#" className="footer-link">Blogs</a></li>
                <li><a href="#" className="footer-link">FAQ</a></li>
                <li><a href="#" className="footer-link">Help & Support</a></li>
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div {...fadeInUp}>
              <ul className="footer-list three">
              <h3 className="footer-heading">CONNECT</h3>
                <li>
                  <a href="mailto:hawrtechnologies@gmail.com" className="footer-link">
                    hawrtechnologies@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919539568362" className="footer-link">
                    +91 9539568362
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">Contact us</a>
                </li>
                <li>
                <div className="social-links">
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="social-link"
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="social-link instagram"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="social-link"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
                </li>
              </ul>
            </motion.div>

            {/* Logo and Social */}
            <ul className="footer-list four">
            <li >
            <motion.div {...fadeInUp} className="logo-container">
              <div className="logo">
                <div className="logo-text">
                  <img src='public\images\logofooter.png'></img>
                </div>
              </div>
            </motion.div></li>
            <li>
               {/* Bottom Bar */}
          <motion.div {...fadeInUp} className="bottom-bar">
            <div className="bottom-content">
              <div className="bottom-links">
                <a href="#" className="bottom-link">Terms of Use</a>
                <span className="separator">|</span>
                <a href="#" className="bottom-link">Privacy Policy</a>
              </div>
              <p>© 2023 Hawr Learn, All rights reserved</p>
              <p>Powered by Hawr Technologies</p>
            </div>
          </motion.div>
            </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;