import Nav from '@/components/Nav';
import './globals.scss';
import Footer from '@/components/Footer';
import Hamburger from '@/components/Hamburger';

export const metadata = {
  title: 'MKS Roofing Systems',
  description: 'Roofing company in Accra Ghana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Hamburger />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
