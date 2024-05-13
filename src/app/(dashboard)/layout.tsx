'use client';

import '@/styles/globals.scss';
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import StoreProvider from './../../lib/redux/storeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="User app" />
        <title>User app</title>
      </head>
      <body>
        <StoreProvider>
          <div id="root">
            <Header />
            <main>{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
