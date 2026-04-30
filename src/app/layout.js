import './globals.css';

export const metadata = {
  title: 'Ghanishtha Kapoor — Creative Copywriter & Video Editor',
  description: 'Content-first creative specializing in high-engagement reels, storytelling, and digital strategy. Building hooks that stop the scroll. ✨',
  keywords: ['video editor', 'copywriter', 'content creator', 'reels strategist', 'ghanishtha kapoor'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
