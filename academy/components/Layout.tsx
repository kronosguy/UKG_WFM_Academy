import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import styles from '@/styles/layouts.module.css';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  narrow?: boolean;
  noNav?: boolean;
  noFooter?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  className,
  narrow = false,
  noNav = false,
  noFooter = false,
}: LayoutProps) {
  const fullTitle = title ? `${title} | UKG WFM Academy` : 'UKG WFM Academy';
  const fullDescription =
    description ||
    'Production-grade learning for UKG workforce management systems';

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/academy/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="sticky top-0 z-40 bg-white dark:bg-kg-dark-900 border-b border-kg-dark-200 dark:border-kg-dark-700 shadow-sm">
          {!noNav && <Navigation />}
          <div className="flex justify-end px-4 sm:px-6 lg:px-8 py-2">
            <ThemeToggle />
          </div>
        </div>

        <div
          className={`${styles.content} ${narrow ? styles.containerNarrow : ''} ${className || ''}`}
        >
          {children}
        </div>

        {!noFooter && <Footer />}
      </main>
    </>
  );
}
