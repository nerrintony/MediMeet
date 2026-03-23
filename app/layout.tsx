import type { Metadata } from 'next';
import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MediMeet Doctors Appointment App',
  description: 'Book appointments with doctors easily and quickly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", inter.className, "font-mono", jetbrainsMono.variable)}>
      <body className="min-h-full flex flex-col">
        {/* header */}
        <header>header</header>

        {/* main */}
        <main className="min-h-screen">{children}</main>

        {/* footer */}
        <footer className="bg-muted/50 py-12">
          <div className="container mx-auto text-center px-4 text-gray-200">
            <p>&copy; {new Date().getFullYear()} MediMeet. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
