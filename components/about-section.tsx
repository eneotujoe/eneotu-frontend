import { Certificate } from "crypto";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="soft-shadow rounded-3xl p-8 md:p-12 bg-background">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I’m an artificial intelligence researcher, and I hold a first-class degree in Marine Engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 4 years of experience, I've had the opportunity to work on various projects, and I'm always eager to learn new things.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Just like self-driving cars, I am motivated and driven to research on self-driving ships.
                My career aspirations are rooted in the intersection of marine engineering and cutting-edge technology.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I'm focused on building AI-powered autonomous navigation systems for ships.
              </p>
            </div>
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-primary mt-10 pb-5">Education</div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              { school: "Constanta Maritime University, Romania", certificate: "BSc in Marine Engineering (Naval Electromechanical Engineering)" },
              { school: "South Shields Marine School, United Kingdom", certificate: "Professional certifications in engineering" },
            ].map((item) => (
              <div key={item.school} className="soft-shadow-inset rounded-2xl p-6 text-center">
                <div className="font-bold text-primary mt-10 pb-5">{item.school}</div>
                <div className="text-sm text-muted-foreground">{item.certificate}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
