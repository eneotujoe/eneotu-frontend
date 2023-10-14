import React from 'react'
import { SITE_TITLE } from '../consts';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-primary font-thin rounded">
      <SocialLinks />
      <div>
        <p>&copy; { new Date().getFullYear() } | { SITE_TITLE }</p>
      </div>
    </footer>
  )
}
