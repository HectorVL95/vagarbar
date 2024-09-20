import {IBM_Plex_Serif} from '@next/font/google'
import "./globals.css";
import GlobalContext from '@/context/global-context';

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContext>
        <body
          className={`${ibmPlexSerif.className} antialiased`}
        >
          {children}
        </body>
      </GlobalContext>
    </html>
  );
}
