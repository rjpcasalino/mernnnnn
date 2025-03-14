'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link';
 
export default function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/hello' ? 'active' : ''}`}
        href="/hello"
      >
        Hello
      </Link>
      <Link
        className={`link ${pathname === '/hello' ? 'active' : ''}`}
        href="/todo"
      >
        TODO
      </Link>
    </nav>
  )
}