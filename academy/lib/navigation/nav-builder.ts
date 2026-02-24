/**
 * Navigation builder for academy structure
 */

export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
  icon?: string;
}

export interface Navigation {
  platform: NavItem[];
  academy: NavItem[];
  knowledgeBase: NavItem[];
  community: NavItem[];
}

export const navigationStructure: Navigation = {
  platform: [
    {
      title: 'Platform Documentation',
      path: '/academy/docs/platform',
      children: [
        {
          title: 'Getting Started',
          path: '/academy/docs/platform/getting-started',
        },
        {
          title: 'Features & Tools',
          path: '/academy/docs/platform/features',
        },
        {
          title: 'Account Management',
          path: '/academy/docs/platform/account-management',
        },
      ],
    },
  ],

  academy: [
    {
      title: 'Academy Learning',
      path: '/academy/docs/academy',
      children: [
        {
          title: 'Courses Overview',
          path: '/academy/docs/academy/courses-overview',
        },
        {
          title: 'Assessments & Labs',
          path: '/academy/docs/academy/assessments-and-labs',
        },
        {
          title: 'Learning Paths',
          path: '/academy/modules',
        },
      ],
    },
  ],

  knowledgeBase: [
    {
      title: 'Knowledge Base',
      path: '/academy/knowledge-base',
      children: [
        {
          title: 'System Overview',
          path: '/academy/docs/knowledge-base/system-overview',
        },
        {
          title: 'API Reference',
          path: '/academy/docs/knowledge-base/api-reference',
        },
        {
          title: 'Troubleshooting',
          path: '/academy/docs/knowledge-base/troubleshooting',
        },
        {
          title: 'Data Dictionary',
          path: '/academy/docs/knowledge-base/data-dictionary',
        },
      ],
    },
  ],

  community: [
    {
      title: 'Community',
      path: '/academy/community',
      children: [
        {
          title: 'Forums',
          path: '/academy/community/forums',
        },
        {
          title: 'Study Groups',
          path: '/academy/community/study-groups',
        },
        {
          title: 'Expert Q&A',
          path: '/academy/community/qa',
        },
      ],
    },
  ],
};

/**
 * Flatten navigation structure for search
 */
export function flattenNavigation(nav: Navigation): NavItem[] {
  const items: NavItem[] = [];

  Object.values(nav).forEach((section) => {
    section.forEach((item) => {
      items.push(item);
      if (item.children) {
        items.push(...item.children);
      }
    });
  });

  return items;
}

/**
 * Find active nav item
 */
export function findActiveNavItem(path: string, nav: Navigation): NavItem | null {
  const allItems = flattenNavigation(nav);
  return allItems.find((item) => item.path === path) || null;
}

/**
 * Get breadcrumb trail
 */
export function getBreadcrumb(path: string, nav: Navigation): NavItem[] {
  const breadcrumb: NavItem[] = [];
  const parts = path.split('/').filter(Boolean);

  let current = '';
  for (const part of parts) {
    current += `/${part}`;
    const item = findActiveNavItem(current, nav);
    if (item) {
      breadcrumb.push(item);
    }
  }

  return breadcrumb;
}

/**
 * Get next and previous items
 */
export function getAdjacentNavItems(path: string, nav: Navigation) {
  const allItems = flattenNavigation(nav);
  const currentIndex = allItems.findIndex((item) => item.path === path);

  return {
    previous: currentIndex > 0 ? allItems[currentIndex - 1] : null,
    next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
  };
}
