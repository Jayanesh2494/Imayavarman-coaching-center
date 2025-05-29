import type { Metadata } from 'next';
import { Noto_Sans_Tamil } from 'next/font/google';
import './globals.css';

const tamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-tamil',
});

export const metadata: Metadata = {
  title: 'இமயவர்மன் சிலம்பம் பயிற்சி மையம்',
  description: 'மணிகண்டன் மூலம் வழிகாட்டப்படும் பாரம்பரிய சிலம்பம் பயிற்சி',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" className={`${tamil.variable} font-tamil`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
} 