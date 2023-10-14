import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SITE_TITLE, NAV_ITEMS } from './consts';

const inter = Inter({ subsets: ['latin'] })
const github = 'https://github.com/eneotujoe'

export const metadata: Metadata = {
  metadataBase: new URL('https://eneotu.com'),
  title: {
    default: 'Eneotu Joe',
    template: '%s | Eneotu Joe'
  },
  description: 'Artificial Intelligence Researcher and Software Engineer',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Eneotu Joe',
    description: 'Artificial Intelligence Research and Software Engineering',
    url: 'https://eneotu.com',
    siteName: 'Eneotu Joe',
    images: [
      {
        url: 'https://eneotu.com/eneotu-logo.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://eneotu.com/eneotu-logo.png',
        width: 1800,
        height: 1600,
        alt: 'alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['https://eneotu.com/eneotu-logo.png'],
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-secondary text-primary font-bold">
              <a href="/" className="btn glass btn-block text-center text-primary">{SITE_TITLE}</a>
              {/* <hr> */}

              {NAV_ITEMS.map(([title, url]) => (
                <Link href={url} className="btn btn-ghost normal-case text-xl" key={title}>{title}</Link>
              ))}


              <a href={github} className="btn btn-primary btn-outline">
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                Github
              </a>
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}
