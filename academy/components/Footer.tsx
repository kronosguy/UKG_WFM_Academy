import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kg-dark-900 dark:bg-kg-dark-950 text-kg-dark-100 border-t border-kg-dark-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Academy</h3>
            <p className="text-sm text-kg-dark-400 mb-4">
              Production-grade learning for UKG workforce management systems.
            </p>
          </div>

          {/* Learning */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-kg-dark-400">
              <li>
                <Link href="/academy/modules" className="hover:text-kg-accent-400 transition-colors">
                  Modules
                </Link>
              </li>
              <li>
                <Link href="/academy/labs" className="hover:text-kg-accent-400 transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/academy/scenarios" className="hover:text-kg-accent-400 transition-colors">
                  Scenarios
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-kg-dark-400">
              <li>
                <Link href="/academy/resources/glossary" className="hover:text-kg-accent-400 transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/academy/resources/api-reference" className="hover:text-kg-accent-400 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/academy/resources/data-dictionary" className="hover:text-kg-accent-400 transition-colors">
                  Data Dictionary
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-kg-dark-400">
              <li>
                <Link href="/academy/privacy" className="hover:text-kg-accent-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/academy/terms" className="hover:text-kg-accent-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href="https://kronosguy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-kg-accent-400 transition-colors"
                >
                  KronosGuy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-kg-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-kg-dark-400 mb-4 md:mb-0">
              © {currentYear} KronosGuy. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-kg-dark-400">
              <a
                href="https://github.com/kronosguy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kg-accent-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/kronosguy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kg-accent-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/kronosguy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kg-accent-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
