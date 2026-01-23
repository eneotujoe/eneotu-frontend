import { Mail, Send, MapPin, Clock, Heart, Loader2 } from "lucide-react"



export function InterestSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="soft-shadow rounded-3xl p-8 md:p-12 bg-background">
          
          <div>
            <div className="flex items-start gap-4">
              <div className="soft-shadow-sm rounded-2xl p-3 bg-background">
                <Heart className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Research Interest</h2>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              { research: "Reinforcement Learning", },
              { research: "Multi-agent systems",},
            ].map((item) => (
              <div key={item.research} className="soft-shadow-inset rounded-2xl p-6 text-center">
                <div className="font-bold text-primary text-2xl mt-10 pb-5">{item.research}</div>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <div className="flex items-start gap-4">
              <div className="soft-shadow-sm rounded-2xl p-3 bg-background">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Availability</h3>
                <p className="text-muted-foreground">I'm open for AI research opportunities</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
