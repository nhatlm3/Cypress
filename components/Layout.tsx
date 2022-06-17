import { ReactNode } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
type LayoutProps = {
  children?: ReactNode;
};
const Layout = ({
  children
}: LayoutProps) => {
   return (
     <>
      <Header />
      <div className="wrapper">
        <div className="pages-container">{children}</div>
      </div>
      <Footer />
     </>
    
   )
}
export default Layout;