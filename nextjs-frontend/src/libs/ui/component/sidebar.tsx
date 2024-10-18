'use client';

import { SidebarDesktop } from './sidebar-desktop';
import { ReactNode } from 'react';

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
  }>;
}

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/'},
    { 
      label: 'Password', 
      href: '/forgotpassword' 
    },
    {
      href: '/signup',
      label: 'Signup',
    },
    {
      href: '/signin',
      label: 'Signin',
    },
    {
      href: '/login',
      label: 'Login',
    },
  ],
};

export function Sidebar() {

  return <SidebarDesktop sidebarItems={sidebarItems} />;


}
