import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-cream px-6 py-16 sm:px-12 lg:px-0 lg:py-[57px]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="px-0 lg:px-[34px]">
          <Reveal>
            <SectionHeading className="mb-10">Testimonials</SectionHeading>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
