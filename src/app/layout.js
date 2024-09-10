import './globals.css';

export const metadata = {
  title: 'SuiteX',
  description: 'Automate your workflow. Be 10x faster.',
  icons: [{ rel: 'icon', url: '/logo.png' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
