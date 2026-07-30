import SectionHeading from "./SectionHeading";
import TagPill from "./TagPill";
import Reveal from "./Reveal";

type Service = {
  title: string;
  tagVariant: "lime" | "pale-green";
  tags: string[];
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Personal Development\nProgramme",
    tagVariant: "lime",
    tags: ["Self-discovery", "Life pillars"],
    description:
      "A transformative programme that guides an individual into self discovery in several key pillars of their lives that they begin to see evident changes as they are given practical blueprints.",
  },
  {
    title: "Premarital Counselling\n& Therapy",
    tagVariant: "pale-green",
    tags: [],
    description:
      "An intensive programme suited for intending couples with the aim of preparing for marriage. In these sessions, each individual understands what they are about to step into with confidence and an in-depth education to last their love a lifetime.",
  },
  {
    title: "For\nOrganisations",
    tagVariant: "lime",
    tags: ["Workplace training", "Corporate workshops", "Seminars"],
    description:
      "Tailored support for organisations through workplace training, corporate workshops, and seminars — equipping teams with the emotional intelligence, communication skills, and mental wellness tools needed to thrive professionally.",
  },
  {
    title: "General Consultations",
    tagVariant: "pale-green",
    tags: ["Communication", "Conflict repair", "Rebuilding trust"],
    description:
      "Sometimes you don’t need long-term therapy — you just need guidance, clarity, or a professional perspective on what you’re experiencing. General consultations offer short-term, solution-focused support for everyday emotional challenges. Whether you’re dealing with work stress, decision-making, relationship concerns, or simply feeling overwhelmed, these sessions help you gain insight, find direction, and feel more grounded in your next steps.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-16 sm:px-12 lg:px-0 lg:py-[57px]">
      <div className="mx-auto max-w-6xl px-0 lg:px-[34px]">
        <Reveal>
          <SectionHeading className="mb-10">Services</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 border-t-[0.667px] border-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.1}
              y={i * 30}
              className="flex flex-col gap-6 border border-sage px-6 py-6 lg:px-[34px] lg:py-[21px]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="whitespace-pre-line text-[26px] font-medium leading-[1.1] text-green-darker lg:text-[34px] lg:leading-[38px] lg:tracking-[-0.75px]">
                  {service.title}
                </h3>
                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-[7px]">
                    {service.tags.map((tag) => (
                      <TagPill key={tag} variant={service.tagVariant}>
                        {tag}
                      </TagPill>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-[14px] font-normal leading-[19px] text-black">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
