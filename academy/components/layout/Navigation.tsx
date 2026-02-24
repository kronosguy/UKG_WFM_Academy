import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/navigation.module.css';

const Navigation: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/academy">
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⚙️</span>
            <span className={styles.logoText}>KronosGuy Academy</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.navMenu}>
          <Link href="/academy">
            <a className={`${styles.navLink} ${isActive('/academy') ? styles.active : ''}`}>
              Home
            </a>
          </Link>
          <Link href="/academy/modules">
            <a className={`${styles.navLink} ${isActive('/academy/modules') ? styles.active : ''}`}>
              Academy
            </a>
          </Link>
          <Link href="/academy/knowledge-base">
            <a className={`${styles.navLink} ${isActive('/academy/knowledge-base') ? styles.active : ''}`}>
              Knowledge Base
            </a>
          </Link>
          <Link href="/academy/my-learning">
            <a className={`${styles.navLink} ${isActive('/academy/my-learning') ? styles.active : ''}`}>
              My Learning
            </a>
          </Link>
        </div>

        {/* Search */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search courses..."
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        {/* User Menu */}
        <div className={styles.userMenu}>
          <button className={styles.settingsBtn} title="Settings">⚙️</button>
          <button className={styles.userBtn} title="Account">👤</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/academy">
            <a className={styles.mobileMenuLink}>Home</a>
          </Link>
          <Link href="/academy/modules">
            <a className={styles.mobileMenuLink}>Academy</a>
          </Link>
          <Link href="/academy/knowledge-base">
            <a className={styles.mobileMenuLink}>Knowledge Base</a>
          </Link>
          <Link href="/academy/my-learning">
            <a className={styles.mobileMenuLink}>My Learning</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
