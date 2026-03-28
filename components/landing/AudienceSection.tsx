import { audienceProfiles } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function AudienceSection() {
  return (
    <section
      id="para-quien"
      className="border-y border-[#484848]/20 bg-[#000000] py-20 sm:py-24"
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
              className="border border-[#484848]/25 bg-[#191919] p-7 text-center fx-card"
            >
              <div className="mx-auto mb-4 h-1 w-12 bg-[#84adff]" />
              <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight text-white">
                {profile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#ababab]">
                {profile.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
