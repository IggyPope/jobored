'use client';

import FavoritesContextProvider from '@/contexts/FavoritesContext';
import Header from '../Header/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <FavoritesContextProvider>
        <main>{children}</main>
      </FavoritesContextProvider>
    </>
  );
}
