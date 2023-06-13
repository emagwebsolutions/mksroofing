import Nav from '@/components/Nav';
import './globals.scss';
import Footer from '@/components/Footer';

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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
