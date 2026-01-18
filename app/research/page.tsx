import type { Metadata } from 'next'
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Research',
}

const articles = [
  {
    title: "Advancing hydrogen production from municipal wastewater using Artificial Intelligence: A case study of microalgae bioremediation",
    abstract: "This study explored an AI-enabled simultaneous producing hydrogen and bioremediation of municipal wastewater using Chlorella vulgaris. Algae from municipal wastewater sourced from Kuala Lumpur, Malaysia was immobilised in polyurethane foam and induced with light intensities of 100, 200 and 300 μmol/m2/s at 4:20, 8:16, 12:12, 18:06, and 24:00 h photo periods to access their impact on hydrogen production. A model that accommodated both the exponential decay after maximum hydrogen production and algal behaviour to light was also introduced and optimised using AI for time series analysis. The result revealed that 12:12 photoperiod maximised hydrogen production (324.86mLH2/g microalgae). However, hydrogen production reduces with increasing experimental cycles. Also, 97.01 %, 88.13 %, 73.99 % and 78.54 % of BOD5, , , and  respectively, were removed from the wastewater alongside hydrogen production. Thus, this study not only addressed the immediate necessity of implementing sustainable energy technologies but also contributed to wastewater management. The lifecycle assessment (LCA) of the process revealed a minimal impact on the environment and the AI model demonstrated an accuracy as low as 0.00192 for optimal photoperiods. Recommendations for larger-scale applications, microalgal research and energy integration were proposed.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0016236125028315",
    date: "16 October 2025",
  },
  {
    title: "High Entropy Alloy Scan Prints in Hydrogen Environments",
    abstract: "A dataset containing scanned prints of High Entropy Alloys from SEM, EBSD, ECC, TEM, OM, AFM, TKD and EDS. These prints presented visuals and text descriptions of the alloys before and after hydrogenation. SEM, TEM, and OM prints had a total of 263 prints, ECC and AFM prints had 13 prints, EBSD had 80 prints, and EDS prints had 8 prints after preprocessing.",
    url: "https://data.mendeley.com/datasets/htsg26w5m4/1",
    date: "27 May 2025",
  },
]

export default function Research() {
  return (
    <section id="articles" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Peer-reviewed research papers</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A collection of research papers that I have co-authored and published.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-shadow rounded-3xl overflow-hidden bg-background soft-hover"
            >
              <div className='bg-gray-200'>
                <Image src="/placeholder.png"
                  alt='placeholder'
                  width={0}
                  height={0}
                  className="w-full h-auto max-h-44 object-contain mx-auto"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{article.title}</h3>
                {/* <p className="text-muted-foreground mb-4 leading-relaxed">{article.abstract}</p> */}

                <div className="flex justify-between">
                  <div>{article.date}</div>
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-xl soft-shadow-sm bg-background text-muted-foreground hover:text-foreground soft-hover text-sm font-medium"
                  >
                    <span>Read</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
