import './styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'BidVid',
  description: 'Revolutionizing Bidding with AI-Powered Optimization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
