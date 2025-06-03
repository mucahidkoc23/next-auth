import React from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavBarItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon?: IconProp;
  tabIndex?: number;
  testId?: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ children, href, className = '', icon, tabIndex, testId }) => {
  const pathname = usePathname();
  const activeClass = 'navbar-item-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <span className="d-inline-flex align-items-center navbar-item">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      <span className={pathname === href ? activeClasses : className} tabIndex={tabIndex} data-testid={testId}>
        {children}
      </span>
    </span>
  );
};

export default NavBarItem;
