import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://ghanishtha.vercel.app'),
  title: 'Ghanishtha Kapoor — Social Media Manager & Content Creator',
  description:
    'Social Media Manager and Content Creator specialising in short-form video, reel scripting, and data-led content strategy. 225K+ organic views. Available for work.',
  keywords: [
    'social media manager',
    'content creator',
    'reel strategist',
    'short-form video',
    'instagram reels',
    'content strategy',
    'ghanishtha kapoor',
  ],
  authors: [{ name: 'Ghanishtha Kapoor' }],
  openGraph: {
    title: 'Ghanishtha Kapoor — Social Media Manager & Content Creator',
    description:
      'Short-form video, reel scripting, and content strategy that actually performs. 225K+ organic views.',
    type: 'website',
    url: 'https://ghanishtha.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghanishtha Kapoor — Social Media Manager & Content Creator',
    description: 'Short-form video strategy, reel scripting, and content that performs.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
