import './globals.css';
import { StoreProvider } from '../components/store';
export const metadata = { title: 'Commons Market | Everyday shopping, made simple', description: 'Browse everyday products and shop with Commons Market.' };
export default function RootLayout({ children }) { return <html lang="en"><body><StoreProvider>{children}</StoreProvider></body></html>; }
