
import './globals.scss';

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
      <body>{children}</body>
    </html>
  );
}
