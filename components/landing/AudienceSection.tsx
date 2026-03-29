import { audienceProfiles } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function AudienceSection() {
  return (
    <section
      id="para-quien"
      className="border-y border-[#d8d1d1]/20 bg-white py-20 sm:py-24"
    >
      <Container className="space-y-10">
        <div data-reveal>
          <SectionHeading
            align="center"
            eyebrow="¿Para quién es esto?"
            title="¿Para quién es esto?"
            description="Ideal para negocios que buscan digitalizar su operación, vender mejor y dejar de depender de procesos improvisados."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audienceProfiles.map((profile, index) => (
            <article
              key={profile.title}
              data-reveal
              data-reveal-delay={String(90 + index * 70)}
              className="border border-[#d8d1d1]/25 bg-white p-7 text-center fx-card"
            >
              <div className="mx-auto mb-4 h-1 w-12 bg-[#1e4fa6]" />
              <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight text-[#111111]">
                {profile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
                {profile.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
