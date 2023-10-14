import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {


  return (
    <nav className='bg-black text-gray-200 p-4'>
      <ul className='lg:hidden'>
        { NAV_LINKS .map((link) => (
            <Link 
              href={link.href} 
              key={link.key}
              className='pr-2'>
                {link.label}
              </Link>
        )) }
      </ul>

      <ul className='hidden h-full gap-12 lg:flex'>
        { NAV_LINKS .map((link) => (
          <Link href={link.href} key={link.key}>{link.label}</Link>
        )) }
      </ul>
    </nav>
  );
}

export default Navbar;
