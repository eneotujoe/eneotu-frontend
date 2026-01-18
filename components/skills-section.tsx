import { ChartLine, CloudCog, Code, Code2, Database, Layout, Palette, Server } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Programming",
    technologies: ["JavaScript", "Python", "C/C++"],
  },
  {
    icon: Code2,
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    technologies: ["Django", "Django REST Framework", "FastAPI"],
  },
  {
    icon: Database,
    title: "Database",
    technologies: ["Postgres", "MySQL", "Vector database"],
  },
  {
    icon: Layout,
    title: "Framework",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Docker"],
  },
  {
    icon: Palette,
    title: "Design",
    technologies: ["Figma", "Adobe XD", "Solidworks"],
  },
  {
    icon: ChartLine,
    title: "Data Analysis",
    technologies: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: CloudCog,
    title: "Cloud Platform",
    technologies: ["AWS", "Google Cloud"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Skills & Expertise</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="soft-shadow rounded-3xl p-6 bg-background soft-hover">
              <div className="flex items-center mb-5">
                <div className="soft-shadow-sm rounded-2xl p-4 w-fit bg-background">
                  <skill.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mx-3">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-xl text-sm soft-shadow-inset text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
