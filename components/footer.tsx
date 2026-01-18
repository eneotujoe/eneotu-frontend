import Link from "next/link"
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { siteConfig } from '@/app/consts';


export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p>&copy; { new Date().getFullYear() } | { siteConfig.name }</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/eneotujoe", label: "GitHub" },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/eneotujoe/', label: "LinkedIn" },
              { icon: Twitter, href: 'https://twitter.com/eneotujoe', label: "Twitter" },
              { icon: Facebook, href: 'https://web.facebook.com/eneotujoe', label: "Facebook" },
              { icon: Instagram, href: 'https://instagram.com/eneotujoe', label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="p-3 rounded-xl soft-shadow-sm bg-background text-muted-foreground hover:text-primary soft-hover"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
