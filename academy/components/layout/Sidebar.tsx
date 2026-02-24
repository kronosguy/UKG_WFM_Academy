import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/sidebar.module.css';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const sections = [
    {
      title: 'Platform',
      items: [
        { label: 'Getting Started', path: '/academy/docs/platform/getting-started' },
        { label: 'Features & Tools', path: '/academy/docs/platform/features' },
        { label: 'Account Management', path: '/academy/docs/platform/account-management' },
      ],
    },
    {
      title: 'Academy',
      items: [
        { label: 'Courses Overview', path: '/academy/docs/academy/courses-overview' },
        { label: 'Assessments & Labs', path: '/academy/docs/academy/assessments-and-labs' },
      ],
    },
    {
      title: 'Knowledge Base',
      items: [
        { label: 'System Overview', path: '/academy/docs/knowledge-base/system-overview' },
        { label: 'API Reference', path: '/academy/docs/knowledge-base/api-reference' },
        { label: 'Troubleshooting', path: '/academy/docs/knowledge-base/troubleshooting' },
      ],
    },
    {
      title: 'Community',
      items: [
        { label: 'Forums', path: '/academy/community/forums' },
        { label: 'Study Groups', path: '/academy/community/study-groups' },
        { label: 'Expert Q&A', path: '/academy/community/qa' },
      ],
    },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Sidebar Header */}
      <div className={styles.sidebarHeader}>
        <h2>Navigation</h2>
      </div>

      {/* Sections */}
      <div className={styles.sections}>
        {sections.map((section) => (
          <div key={section.title} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <ul className={styles.sectionItems}>
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a
                      className={`${styles.sectionLink} ${
                        currentPath === item.path ? styles.active : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className={styles.sidebarFooter}>
        <div className={styles.footerCard}>
          <h4>Need Help?</h4>
          <p>Check our FAQ or contact support</p>
          <button className={styles.helpBtn}>Get Help</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
