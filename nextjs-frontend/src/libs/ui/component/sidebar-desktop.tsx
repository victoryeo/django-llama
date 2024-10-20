'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
  }>;
}

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();

  return (
    <aside className='w-[200px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r'>
      <div className='bg-white h-full px-3 py-4'>
        <h3 className='mx-3 text-lg font-semibold text-foreground'>Sidebar</h3>
        <div className='mt-9'>
          <div className='flex flex-col gap-4 w-full  items-start'>
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <button
                  className='w-full'
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
