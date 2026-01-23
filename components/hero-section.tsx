import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { Button } from "./ui/button"


export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full text-center">

        <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
          <div className="mb-8 flex justify-center">
            <div className="soft-shadow rounded-full p-2">
              <div className="size-60 md:size-96 rounded-full soft-shadow-inset overflow-hidden flex items-center justify-center bg-secondary">
                <Image
                  src="/eneotu-joe.png"
                  alt="bg"
                  width={400}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1
              className="text-5xl md:text-7xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-400"
            >
              Eneotu Joe
            </h1>
            <p className="text-primary font-thin text-2xl my-3">{`I'm An Artificial Intelligence Researcher`}</p>
            <p className="font-thin text-2xl mb-3">And Software Engineer</p>
          </div>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { icon: Github, href: "https://github.com/eneotujoe", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/eneotujoe", label: "LinkedIn" },
            { icon: Mail, href: "mailto:info@eneotu.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex justify-center items-center w-full p-4 rounded-2xl soft-shadow bg-background text-muted-foreground hover:text-primary soft-hover"
              >
                <Icon size={24} />
                <span className="ml-2">{label}</span>
              </Link>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl soft-shadow bg-background text-muted-foreground hover:text-foreground soft-hover text-sm font-medium"
        >
          <span>Explore more</span>
          <ArrowDown size={16} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
