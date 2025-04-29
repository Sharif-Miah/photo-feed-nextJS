import localFont from 'next/font/local';
import './globals.css';
import Navber from '@/components/Navber';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Photo Feed App',
  description: 'Photo Feed App build With NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navber />
        <div className='container my-4 lg:my-8'>{children}</div>
      </body>
    </html>
  );
}
