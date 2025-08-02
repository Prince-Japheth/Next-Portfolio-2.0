'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      
      // Handle special cases
      let label = path.charAt(0).toUpperCase() + path.slice(1);
      
      // Replace slugs with readable names
      if (path === 'projects' && paths.length === 1) {
        label = 'Projects';
      } else if (paths[0] === 'projects' && index === 1) {
        // This is a project slug, we'll need to get the actual project title
        // For now, we'll use a generic label
        label = 'Project Details';
      }
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrent: index === paths.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbs.map((breadcrumb, index) => (
          <li 
            key={breadcrumb.href}
            className={`breadcrumb-item ${breadcrumb.isCurrent ? 'current' : ''}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {breadcrumb.isCurrent ? (
              <span itemProp="name">{breadcrumb.label}</span>
            ) : (
              <Link href={breadcrumb.href} itemProp="item">
                <span itemProp="name">{breadcrumb.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={(index + 1).toString()} />
            {!breadcrumb.isCurrent && index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator">/</span>
            )}
          </li>
        ))}
      </ol>
      
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": breadcrumb.label,
              "item": `https://japhethjerry.space${breadcrumb.href}`
            }))
          })
        }}
      />
    </nav>
  );
};

export default Breadcrumbs; 