import { serviceGroups } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

function createServiceLeadLink(serviceName: string) {
  const message = `Hola Nexum, quiero esto: ${serviceName}. ¿Me comparten una cotización?`;
  return `https://wa.me/525500000000?text=${encodeURIComponent(message)}`;
}

export function ServicesSection() {
  return (
    <section id="servicios" className="border-t border-[#d8d1d1]/20 py-20 sm:py-24">
      <Container className="space-y-10">
        <div data-reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Nuestras soluciones"
            description="Tres líneas de trabajo para que combines desarrollo, diseño y ejecución comercial en una sola dirección."
          />
        </div>

        <div className="space-y-8">
          {serviceGroups.map((group, groupIndex) => (
            <article
              key={group.id}
              data-reveal
              data-reveal-delay={String(80 + groupIndex * 90)}
              className="border border-[#d8d1d1]/20 bg-[#f4f8ff] p-6 sm:p-8"
            >
              <header className="mb-7 space-y-2">
                <h3
                  className={`font-display text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl ${
                    groupIndex === 0
                      ? "text-[#1e4fa6]"
                      : groupIndex === 1
                        ? "text-[#6f90d6]"
                        : "text-[#111111]"
                  }`}
                >
                  {group.title}
                </h3>
                <p className="max-w-3xl text-sm text-[#5f5f5f]">{group.intro}</p>
              </header>

              <div
                className={`grid gap-4 ${
                  groupIndex === 2
                    ? "group/spotlight md:grid-cols-2 lg:grid-cols-3"
                    : "md:grid-cols-2 xl:grid-cols-3"
                }`}
              >
                {group.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    data-reveal
                    data-reveal-delay={String(120 + serviceIndex * 55)}
                    className={`group/card flex h-full flex-col border border-[#d8d1d1]/30 bg-white p-6 ${
                      groupIndex === 2
                        ? "min-h-[270px] transition-all duration-300 lg:group-hover/spotlight:opacity-45 lg:group-hover/spotlight:blur-[0.4px] lg:hover:!opacity-100 lg:hover:!blur-none lg:hover:border-[#1e4fa6]/60 lg:hover:shadow-[0_0_0_1px_rgba(30,79,166,0.28)]"
                        : ""
                    } focus-visible:border-[#173c80]/60 focus-visible:shadow-[0_0_0_1px_rgba(23,60,128,0.32)] fx-card`}
                    tabIndex={0}
                  >
                    <div className="space-y-3">
                      <h4 className="text-balance font-display text-2xl font-bold uppercase leading-none tracking-tight text-[#111111]">
                        {service.name}
                      </h4>
                      {service.startingPrice ? (
                        <span
                          className={`border px-2 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.1em] ${
                            groupIndex === 1
                              ? "border-[#6f90d6]/50 text-[#295fc2]"
                              : "border-[#1e4fa6]/45 text-[#173c80]"
                          }`}
                        >
                          {service.startingPrice}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
                      {service.description}
                    </p>
                    <p className="mt-4 border-t border-[#d8d1d1]/30 pt-3 text-sm font-medium text-[#173c80]">
                      {service.benefit}
                    </p>

                    <a
                      href={createServiceLeadLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-10 w-fit translate-y-2 items-center justify-center self-center border border-[#6f90d6] bg-[#1e4fa6] px-4 font-display text-xs font-black uppercase tracking-[0.08em] text-white opacity-0 pointer-events-none transition-all duration-300 hover:bg-[#295fc2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c80] group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:pointer-events-auto group-focus/card:translate-y-0 group-focus/card:opacity-100 group-focus/card:pointer-events-auto group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto"
                      aria-label={`Quiero esto: ${service.name}`}
                    >
                      Quiero esto
                    </a>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
