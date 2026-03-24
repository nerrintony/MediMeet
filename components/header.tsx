import { Show, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <React.Fragment>
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-backdrop-filter:bg-background/60">
        <nav className="mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src={'/logo-single.png'}
              alt="MediMeet Logo"
              width={100}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div>
            <Show when="signed-out">
              <SignInButton>
                <Button variant="secondary">Sign In</Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
