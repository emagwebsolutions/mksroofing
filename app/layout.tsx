'use client'
import store from '@/store/store';
import './globals.scss';
import {Provider} from 'react-redux'

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
        <Provider store={store}>
        {children}
        </Provider>
        </body>
    </html>
  );
}
