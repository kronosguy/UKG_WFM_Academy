import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from '../../styles/layout.module.css';

interface RootLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  title = 'UKG WFM Academy',
  description = 'Production-grade learning for UKG Workforce Management systems',
  className,
}) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>{title} - KronosGuy Academy</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/academy/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={`${title} - KronosGuy Academy`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://kronosguy.com/academy${router.asPath}`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} - KronosGuy Academy`} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className={styles.root}>
        <Navigation />

        <div className={styles.container}>
          {!isHomePage && <Sidebar />}

          <main className={`${styles.main} ${className || ''}`}>
            {children}
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
