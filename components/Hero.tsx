import Image from "next/image";
import Header from "./Header";
import BookingButton from "./BookingButton";
import Reveal from "./Reveal";
import MusicPlayer from "./MusicPlayer";

export default function Hero() {
  return (
    <section className="relative z-0 min-h-[730px] overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero-ellipse-1.png"
          alt=""
          width={452}
          height={452}
          className="absolute left-[256px] top-[599px] h-[238px] w-[238px] lg:left-[1045px] lg:top-[504px] lg:h-[452px] lg:w-[452px]"
        />
        <Image
          src="/images/hero-ellipse-2.png"
          alt=""
          width={195}
          height={195}
          className="absolute left-[301px] top-[254px] h-[141px] w-[141px] lg:left-[146px] lg:top-[246px] lg:h-[195px] lg:w-[195px]"
        />
        <Image
          src="/images/hero-ellipse-3.png"
          alt=""
          width={293}
          height={293}
          className="absolute left-[326px] top-[269px] h-[152px] w-[152px] lg:left-[1140px] lg:top-[234px] lg:h-[293px] lg:w-[293px]"
        />
        <Image
          src="/images/hero-ellipse-4.png"
          alt=""
          width={389}
          height={380}
          className="absolute left-[-88px] top-[246px] h-[142px] w-[146px] lg:left-[-230px] lg:top-[147px] lg:h-[380px] lg:w-[389px]"
        />
      </div>

      <Header />

      {/* Music player pill — bottom-right, matching Figma position */}
      <div className="absolute bottom-[12px] right-[9px] z-10 lg:bottom-[5px] lg:right-[6px]">
        <MusicPlayer />
      </div>

      <div className="relative z-0 flex min-h-[600px] flex-col items-center justify-center px-6 pb-24 pt-8 text-center sm:px-12 lg:px-0 lg:pb-32 lg:pt-16">
        <Reveal trigger="load" y={90} className="flex flex-col items-center">
          <h1 className="max-w-3xl text-[28px] font-semibold leading-[1.25] text-green-darker sm:text-[42px] lg:text-[48px]">
            Talk to Juliet Ambali
          </h1>

          <p className="mt-8 max-w-2xl text-[16px] font-normal leading-[1.25] text-sage lg:text-[24px]">
            For people seeking personal growth, wholesome families, a
            well-rounded mindset at work and purposeful living.
          </p>

          <div className="mt-10">
            <BookingButton>Schedule Your First Call</BookingButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
