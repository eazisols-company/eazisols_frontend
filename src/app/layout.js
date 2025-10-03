import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Providers from './providers';
import { DM_Sans } from 'next/font/google';
import { Snakbar } from './components/Snakbar';
import NewNavbar from './components/new/NewNavbar';


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can adjust weights
  variable: '--font-dm-sans',    // Optional CSS variable
  display: 'swap',
});

export const metadata = {
  title: 'eazisols - Transform your idea into a startup',
  description: 'Leading global tech services firm, delivering innovative solutions, exceptional results, and fostering lasting client relationships.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body >
         <Snakbar>
        <Providers>
          {/* <Navbar /> */}
          <NewNavbar />
          <main>{children}</main>
          <Footer />
        </Providers>
        </Snakbar>
      </body>
    </html>
  );
}
