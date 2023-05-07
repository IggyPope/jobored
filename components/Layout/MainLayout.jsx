import Header from '../Header/Header';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  preload: true,
});

export default function MainLayout({ children }) {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
