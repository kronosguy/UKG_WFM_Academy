import React from 'react';
import Link from 'next/link';
import styles from '../../styles/footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Footer Grid */}
        <div className={styles.footerGrid}>
          {/* About */}
          <div className={styles.footerSection}>
            <h3>About KronosGuy</h3>
            <p>
              Comprehensive, production-grade training for UKG Workforce Management systems.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/kronosguy" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com/company/kronosguy" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/kronosguy" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className={styles.footerSection}>
            <h3>Platform</h3>
            <ul>
              <li>
                <Link href="/academy">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/academy/modules">
                  <a>Academy</a>
                </Link>
              </li>
              <li>
                <Link href="/academy/knowledge-base">
                  <a>Knowledge Base</a>
                </Link>
              </li>
              <li>
                <Link href="/academy/community">
                  <a>Community</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning */}
          <div className={styles.footerSection}>
            <h3>Learning</h3>
            <ul>
              <li>
                <Link href="/academy/docs/academy/courses-overview">
                  <a>Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/academy/docs/academy/assessments-and-labs">
                  <a>Labs & Assessments</a>
                </Link>
              </li>
              <li>
                <a href="/academy/certifications">Certifications</a>
              </li>
              <li>
                <a href="/academy/community/study-groups">Study Groups</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.footerSection}>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/academy/help">Help Center</a>
              </li>
              <li>
                <a href="/academy/faq">FAQ</a>
              </li>
              <li>
                <Link href="/academy/docs/knowledge-base/api-reference">
                  <a>API Reference</a>
                </Link>
              </li>
              <li>
                <a href="/academy/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.footerSection}>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="/academy/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/academy/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/academy/cookies">Cookie Policy</a>
              </li>
              <li>
                <a href="/academy/accessibility">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <p>
              © {currentYear} KronosGuy. All rights reserved. | Part of the{' '}
              <a href="https://kronosguy.com">KronosGuy</a> platform
            </p>
          </div>

          <div className={styles.footerLinks}>
            <a href="#top">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
