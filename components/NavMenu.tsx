'use client'
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function NavMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link
        href="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Blog
      </Link>
      <Link
        href="/users"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Users
      </Link>
    </nav>
  );
}
