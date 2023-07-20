'use client';

import Image from 'next/image';
import { Icons } from '@/components/icons';
import React from 'react';
import { Button } from './ui/button';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Image
          src={session.user?.image ?? 'mememan.webp'}
          width={32}
          height={32}
          alt="Name Surname"
        />
      </Link>
    );
  }
  return (
    <Button variant="outline" type="button" disabled={status === 'loading'} onClick={() => signIn('github')}>
      {status === 'loading' ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.gitHub className="mr-2 h-4 w-4" />
      )}
      Sign in
    </Button>
  );
}

export function SignOutButton() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Button variant="outline" type="button" disabled={isLoading}>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.gitHub className="mr-2 h-4 w-4" />
      )}
      Sign out
    </Button>
  );
}
