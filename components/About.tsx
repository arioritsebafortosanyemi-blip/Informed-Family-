import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const DOT_PATTERN_CLASSES = [
  "left-[190px] top-[160px] lg:left-[380px] lg:top-[319px]",
  "left-[139px] top-[55px] lg:left-[277px] lg:top-[110px]",
  "left-[259px] top-[105px] lg:left-[518px] lg:top-[209px]",
  "left-[208px] top-0 lg:left-[415px] lg:top-0",
  "left-[225px] top-[198px] lg:left-[449px] lg:top-[396px]",
  "left-[173px] top-[94px] lg:left-[346px] lg:top-[187px]",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-pale-green bg-cream px-6 py-16 sm:px-12 lg:px-[34px] lg:py-[57px]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-8 lg:max-w-[596px]">
          <Reveal y={0}>
            <SectionHeading>About Juliet Ambali</SectionHeading>
          </Reveal>
          <Reveal delay={0.1} y={80}>
            <div className="flex flex-col gap-4 text-[14px] font-normal leading-[21px] text-body-dark">
              <p>
                Juliet Ambali is an informed family builder whose work sits at
                the intersection of human connection, emotional clarity, and
                compassionate psychological care.
              </p>
              <p>
                The core of this brand is built on family, viewed through a
                multi-layered lens. She believes that societal change starts
                from within. By anchoring her approach in personal development,
                she equips individuals to build stronger homes. When the home is
                stable, it naturally elevates professional spaces, thus, creating
                healthier work environments and driving sustainable progress
                across society as a whole.
              </p>
              <p>
                With a strong academic foundation in both English communication
                and psychology, she brings a rare blend of deep listening,
                intuitive understanding, and evidence-based therapeutic practice.
                Her journey began with a Bachelor&rsquo;s and Master&rsquo;s
                degree in English, where she developed advanced expertise in
                communication &mdash; understanding not just what people say,
                but how they say it, what they mean beneath the surface, and
                what they struggle to express. This background has become one of
                her greatest strengths as a therapist: the ability to help
                clients articulate their emotions, navigate difficult
                conversations, and feel genuinely heard. Driven by a desire to
                support people more directly, Juliet pursued a Postgraduate
                Diploma and a Master&rsquo;s degree in Psychology, expanding her
                knowledge of human behaviour, emotional patterns, and mental
                wellness which deepens her expertise and strengthens her
                commitment to providing thoughtful, research-informed care in
                every session.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative z-0 mx-auto w-full max-w-[576px]" delay={0.3} y={80} x={0}>
          <div className="pointer-events-none absolute -z-10 left-[78px] top-[132px] h-[226px] w-[226px] lg:left-[155px] lg:top-[263px] lg:h-[452px] lg:w-[452px]">
            <Image src="/images/about-ellipse.png" alt="" fill sizes="452px" className="object-contain" />
          </div>

          {DOT_PATTERN_CLASSES.map((positionClasses, i) => (
            <div
              key={i}
              className={`pointer-events-none absolute -z-10 h-[71px] w-[111px] lg:h-[141.5px] lg:w-[221px] ${positionClasses}`}
            >
              <Image src="/images/dot-pattern.png" alt="" fill sizes="221px" className="object-contain" />
            </div>
          ))}

          <div className="relative mt-[24px] mb-[65px] lg:mt-[48px] lg:mb-[128px]">
            <Image
              src="/images/about-juliet-2.jpg"
              alt="Juliet Ambali"
              width={576}
              height={800}
              sizes="(min-width: 1024px) 576px, 100vw"
              className="w-full h-auto rounded-card object-contain"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
