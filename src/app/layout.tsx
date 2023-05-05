import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { PropsWithChildren, FC } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iamMaham',
  description: "iamMAHAM's portefolio website",
};

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
