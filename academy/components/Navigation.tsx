'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components.module.css';

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

const navigationLinks: NavLink[] = [
  {
    href: '/academy',
    label: 'Home',
  },
  {
    href: '/academy/modules',
    label: 'Modules',
    children: [
      { href: '/academy/modules/platform', label: 'Platform Docs' },
      { href: '/academy/modules/learning', label: 'Learning Docs' },
      { href: '/academy/modules/reference', label: 'Knowledge Base' },
    ],
  },
  {
    href: '/academy/labs',
    label: 'Labs',
  },
  {
    href: '/academy/scenarios',
    label: 'Scenarios',
  },
  {
    href: '/academy/resources',
    label: 'Resources',
    children: [
      { href: '/academy/resources/glossary', label: 'Glossary' },
      { href: '/academy/resources/data-dictionary', label: 'Data Dictionary' },
      { href: '/academy/resources/api-reference', label: 'API Reference' },
    ],
  },
];

export default function Navigation() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) => router.pathname.startsWith(href);

  return (
    <nav className="bg-white dark:bg-kg-dark-900 border-b border-kg-dark-200 dark:border-kg-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/academy" className="flex items-center space-x-2 font-bold text-xl">
            <span className="text-kg-accent-600">◇</span>
            <span className="hidden sm:inline text-kg-dark-900 dark:text-kg-dark-100">
              KronosGuy Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <div key={link.href} className="relative group">
                <button
                  onClick={() => router.push(link.href)}
                  className={`${styles.tab} ${
                    isActive(link.href) ? styles.tabActive : ''
                  }`}
                  onMouseEnter={() =>
                    link.children && setOpenMenu(link.href)
                  }
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {link.label}
                </button>

                {/* Dropdown */}
                {link.children && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white dark:bg-kg-dark-800 border border-kg-dark-200 dark:border-kg-dark-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseEnter={() => setOpenMenu(link.href)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-kg-dark-100 dark:hover:bg-kg-dark-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-kg-dark-100 dark:hover:bg-kg-dark-800"
            onClick={() =>
              setOpenMenu(openMenu === 'mobile' ? null : 'mobile')
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {openMenu === 'mobile' && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 rounded-lg hover:bg-kg-dark-100 dark:hover:bg-kg-dark-800 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-kg-dark-600 dark:text-kg-dark-400 rounded-lg hover:bg-kg-dark-100 dark:hover:bg-kg-dark-800 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
