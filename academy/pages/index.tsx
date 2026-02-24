import React from 'react';
import Link from 'next/link';
import RootLayout from '../components/layout/RootLayout';
import styles from '../styles/home.module.css';

const HomePage: React.FC = () => {
  return (
    <RootLayout title="Welcome to the Academy">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>UKG WFM Academy</h1>
          <p className={styles.subtitle}>
            Production-grade learning for workforce management systems
          </p>
          <div className={styles.heroButtons}>
            <Link href="/academy/modules">
              <button className={styles.btnPrimary}>Explore Academy</button>
            </Link>
            <Link href="/academy/knowledge-base">
              <button className={styles.btnSecondary}>Browse Knowledge Base</button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Three Complete Learning Domains</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📚</div>
            <h3>Platform Documentation</h3>
            <p>
              Learn how KronosGuy works, navigate the platform, and master all features
              for an optimal learning experience.
            </p>
            <Link href="/academy/docs/platform/getting-started">
              <a className={styles.featureLink}>Get Started →</a>
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎓</div>
            <h3>Academy Learning</h3>
            <p>
              Structured courses with hands-on labs covering Time & Attendance, Scheduling,
              and System Administration.
            </p>
            <Link href="/academy/docs/academy/courses-overview">
              <a className={styles.featureLink}>Browse Courses →</a>
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>UKG Knowledge Base</h3>
            <p>
              Complete reference materials including system architecture, data dictionary,
              API documentation, and troubleshooting.
            </p>
            <Link href="/academy/docs/knowledge-base/system-overview">
              <a className={styles.featureLink}>Explore Reference →</a>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>3</div>
          <div className={styles.statLabel}>Learning Domains</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>15+</div>
          <div className={styles.statLabel}>Comprehensive Courses</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>50+</div>
          <div className={styles.statLabel}>Hands-On Labs</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Production-Ready</div>
        </div>
      </section>

      <section className={styles.learning}>
        <div className={styles.learningContent}>
          <h2>Start Your Learning Journey</h2>
          <p>
            Choose your learning path based on your role and experience level.
            All courses are designed for hands-on, real-world application.
          </p>

          <div className={styles.paths}>
            <div className={styles.pathCard}>
              <h3>For Operators</h3>
              <ul>
                <li>Time & Attendance Operations</li>
                <li>Workforce Scheduling Basics</li>
                <li>Daily Operations Essentials</li>
              </ul>
              <button className={styles.pathBtn}>View Path</button>
            </div>

            <div className={styles.pathCard}>
              <h3>For Managers</h3>
              <ul>
                <li>Scheduling Fundamentals</li>
                <li>Labor Analytics & Planning</li>
                <li>Team Management</li>
              </ul>
              <button className={styles.pathBtn}>View Path</button>
            </div>

            <div className={styles.pathCard}>
              <h3>For Administrators</h3>
              <ul>
                <li>System Administration</li>
                <li>Advanced Configuration</li>
                <li>Integration & APIs</li>
              </ul>
              <button className={styles.pathBtn}>View Path</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of learners mastering UKG Workforce Management</p>
        <Link href="/academy/signup">
          <button className={styles.ctaBtn}>Create Free Account</button>
        </Link>
      </section>
    </RootLayout>
  );
};

export default HomePage;
