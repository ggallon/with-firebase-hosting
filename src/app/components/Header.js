import * as React from 'react';
import Link from 'next/link';

const Header = ({ pathname }) => (
  <header>
    <nav>
      <Link href='/'>
        <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
      </Link>{' '}
      <Link href='/about'>
        <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
      </Link>
    </nav>
  </header>
)

export default Header
