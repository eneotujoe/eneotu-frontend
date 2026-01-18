import React from 'react'
import type { Metadata } from 'next'
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export const metadata: Metadata = {
  title: 'Project',
}

const projects = [
  {
    title: "Personal portfolio",
    description: "A modern portfolio website built with NextJS and TailwindCSS.",
    url: "https://eneotu.com",
    tags: ["NextJS", "Shadcn ui", "TypeScript", "TailwindCSS"],
    github: "https://github.com/eneotujoe/eneotu-frontend",
  },
  {
    title: "Text To Image Generative AI",
    description: "Generative AI tool for creating images from text prompts.",
    url: "https://text-to-image-genai.vercel.app",
    tags: ["Together AI API", "NextJS", "TypeScript", "Vercel AI SDK"],
    github: "https://github.com/eneotujoe/text-to-image-genai",
  },
  {
    title: "Learning management system",
    description: "An AI-driven platform that revolutionizes the way you create, manage, and analyze learning.",
    url: "https://sophos.vercel.app",
    tags: ["Google Gen AI", "NextJS", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/eneotujoe/sophos",
  },
  {
    title: "Auth App",
    description: "NextJS authentication using Better-auth",
    url: "https://nextjs-better-auth-blue.vercel.app",
    tags: ["NextJS", "Better-auth", "PostgreSQL", "TailwindCSS", "Drizzle ORM"],
    github: "https://github.com/eneotujoe/nextjs-better-auth-app",
  },
]

export default function Project() {
  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Selected Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A collection of projects that showcase my skills and passion for building great products
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`soft-shadow rounded-3xl overflow-hidden bg-background soft-hover ${
                index === 0 ? "lg:col-span-2" : "lg:col-span-2"
              }`}
            >
              <div>
                <iframe src={project.url || "/placeholder.svg"} width="100%" height="300"></iframe>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-xl text-sm soft-shadow-inset text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <div>
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl soft-shadow-sm bg-background text-muted-foreground hover:text-foreground soft-hover text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </Link>
                    </div>

                    <div>
                      <Link
                        href={project.url}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl soft-shadow bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
                      >
                        <span>Live</span>
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
