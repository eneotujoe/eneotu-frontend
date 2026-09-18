import React from 'react'
import type { Metadata } from 'next'
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"


export const metadata: Metadata = {
  title: 'Project',
}

const projects = [
  {
    title: "Enterprise-Grade LLM Chat Platform",
    description: "LLM chat application with low latency, high throughput, conversational workflows, persistent chat storage, and database-backed application infrastructure",
    url: "https://reinforcedai.com",
    tags: ["NextJS", "AI SDK", "Shadcn ui", "TypeScript", "TailwindCSS", "PostgreSQL", "Docker", "LLM Gateway"],
    github: "https://github.com/eneotujoe/",
  },
  {
    title: "Vision Language Model Fine-Tuning of 31 billion parameters Gemma4 for Fractographic Analysis of Hydrogen-Charged High-Entropy Alloys",
    description: "Utilizing Parameter Efficient Fine-Tuning (PEFT) with Low Rank Adaption (LoRA)",
    url: "https://huggingface.co/eneotu/gemma4_31b_high_entropy_alloy_lora",
    tags: ["Gemma-4-31B-IT", "PyTorch", "Pandas", "Transformer", "LoRA", "PEFT"],
    github: "https://github.com/eneotujoe/high-entropy-alloy-research",
  },
  {
    title: "Fine-Tuning of 11 billion parameters Llama3 Vision Language Model for Fractographic Analysis of Hydrogen-Charged High-Entropy Alloys",
    description: "Utilizing Parameter Efficient Fine-Tuning (PEFT) with Low Rank Adaption (LoRA)",
    url: "",
    tags: ["Llama-3.2-11B-Vision-Instruct", "PyTorch", "Pandas", "Transformer", "LoRA", "PEFT"],
    github: "https://github.com/eneotujoe/high-entropy-alloy-research",
  },
  {
    title: "LLM Inference Infrastructure",
    description: "Deployment and integration of vLLM for low latency and high-throughput LLM inference",
    url: "",
    tags: ["LLM", "vLLM", "aiohttp", "fastAPI"],
    github: "https://github.com/eneotujoe/vllm-inference",
  },
  {
    title: "LLM API Gateway",
    description: "AI gateway for routing requests across multiple model backends",
    url: "",
    tags: ["LLM", "FastAPI", "AI Gateway", "httpx"],
    github: "https://github.com/eneotujoe/llm-gateway",
  },
  {
    title: "Portfolio",
    description: "A modern portfolio built with NextJS and TailwindCSS.",
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
              <div className="bg-gray-200 w-full h-75 flex items-center justify-center">
                {project.url ? (
                  <iframe
                    src={project.url}
                    width="100%"
                    height="300"
                    className="border-0"
                  />
                ) : (
                  <img
                    src="/placeholder.png"
                    alt="Project placeholder"
                    className="max-w-full max-h-full object-contain"
                  />
                )}
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
                        <FaGithub size={16} />
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
