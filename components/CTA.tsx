import Image from "next/image";
import BookingButton from "./BookingButton";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative z-0 flex min-h-[676px] items-center overflow-hidden bg-cream px-6 py-20 text-center sm:px-12 lg:min-h-[676px] lg:py-[120px]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/cta-ellipse-1.png"
          alt=""
          width={452}
          height={452}
          className="absolute left-[258px] top-[417px] h-[267px] w-[267px] lg:left-[1045px] lg:top-[504px] lg:h-[452px] lg:w-[452px]"
        />
        <Image
          src="/images/cta-ellipse-2.png"
          alt=""
          width={452}
          height={452}
          className="absolute left-[-69px] top-[167px] h-[122px] w-[122px] lg:left-[-209px] lg:top-[147px] lg:h-[452px] lg:w-[452px]"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
        <Reveal y={40}>
          <h2 className="text-[25px] font-medium leading-[1.25] tracking-[-0.035px] text-green-darker sm:text-[40px] lg:text-[48px]">
            Begin Your Journey
            <br />
            toward{" "}
            <span className="font-serif italic">Emotional Clarity</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} y={0}>
          <p className="max-w-2xl text-[13px] font-normal leading-[1.25] text-sage sm:text-[18px] lg:text-[24px]">
            Whether you’re seeking direction, healing, or a stronger
            relationship, your support is here.
          </p>
        </Reveal>

        <Reveal delay={0.2} y={0}>
          <BookingButton size="cta">Book Consultation</BookingButton>
        </Reveal>
      </div>
    </section>
  );
}
