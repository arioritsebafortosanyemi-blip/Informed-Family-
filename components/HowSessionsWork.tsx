import Image from "next/image";
import SectionHeading from "./SectionHeading";
import BookingButton from "./BookingButton";
import Reveal from "./Reveal";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Book a Free Consultation",
    description:
      "Your journey begins with a simple, pressure-free conversation. This short call helps us understand what you’re experiencing, what you hope to change, and what kind of support feels right for you. There’s no commitment — just a gentle space to talk, ask questions, and see if we’re a good fit. You’ll leave this first step with clarity, not confusion.",
  },
  {
    number: "02",
    title: "Get Your Personalized Plan",
    description:
      "If you decide to move forward, we create a plan shaped around you — your goals, your pace, and your comfort level. Every session is tailored to what you need most: emotional grounding, communication tools, deeper self-understanding, or support through a difficult season. Nothing is rushed. Nothing is forced. You’re guided with care, structure, and evidence-based techniques that meet you exactly where you are.",
  },
  {
    number: "03",
    title: "Thrive With Guidance",
    description:
      "As you continue, you’ll begin to notice subtle but meaningful shifts — more emotional resilience, clearer thinking, healthier relationships, and a stronger sense of self. Growth doesn’t happen overnight, but with consistent support, you’ll build the tools and confidence to navigate life with more ease and intention. This is where transformation happens: gently, steadily, and at a pace that feels right for you.",
  },
];

export default function HowSessionsWork() {
  return (
    <section className="relative z-0 overflow-hidden bg-cream px-6 py-16 sm:px-12 lg:px-0 lg:py-[57px]">
      <Image
        src="/images/sessions-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover blur-[2px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="px-0 lg:px-[34px]">
          <Reveal y={-40}>
            <SectionHeading light className="mb-10">
              How Sessions Work
            </SectionHeading>
          </Reveal>
        </div>

        <Reveal className="rounded-[32px] bg-[rgba(87,94,85,0.35)] p-6 backdrop-blur-[18.75px] lg:p-10" delay={0.1} y={40}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.number}
                delay={0.2 + i * 0.12}
                y={40}
                className="flex flex-col gap-6 rounded-card border border-green-dark bg-cream p-6"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[24px] border border-green-dark p-4 text-[16px] font-medium leading-[1.25] text-green-dark">
                    {step.number}
                  </div>
                  <h3 className="text-[20px] font-medium leading-[1.25] text-green-darker lg:text-[24px]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[14px] font-normal leading-[19px] text-black">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.55} y={50} className="mt-8 flex justify-center">
            <BookingButton>Schedule Your First Call</BookingButton>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
