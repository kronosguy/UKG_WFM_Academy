import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components.module.css';

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  badge?: string;
  progress?: number;
}

export default function ModuleCard({
  title,
  description,
  href,
  icon,
  badge,
  progress,
}: ModuleCardProps) {
  return (
    <Link href={href}>
      <a className="block">
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className={styles.cardTitle}>{title}</h3>
                {badge && (
                  <div className="mt-2">
                    <span className={`${styles.badge} ${styles.badgeAccent}`}>
                      {badge}
                    </span>
                  </div>
                )}
              </div>
              {icon && <span className="text-3xl ml-2">{icon}</span>}
            </div>
          </div>

          <p className={styles.cardDescription}>{description}</p>

          {progress !== undefined && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-kg-dark-600 dark:text-kg-dark-400">
                  Progress
                </span>
                <span className="text-xs font-semibold text-kg-dark-600 dark:text-kg-dark-400">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-kg-dark-200 dark:bg-kg-dark-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-kg-accent-600 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="mt-4 inline-flex items-center text-kg-accent-600 dark:text-kg-accent-400 font-semibold text-sm hover:text-kg-accent-700 dark:hover:text-kg-accent-300 transition-colors">
            View Module
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
}
