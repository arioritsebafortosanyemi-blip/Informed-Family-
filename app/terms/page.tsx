import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | The Informed Family Builder",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="June 27, 2026">
      <LegalSection heading="1. Agreement to Terms">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          website operated by The Informed Family Builder (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including any booking
          requests submitted through this site. By using this website, you
          agree to be bound by these Terms. If you do not agree, please do
          not use this site.
        </p>
      </LegalSection>

      <LegalSection heading="2. Not a Substitute for Emergency Care">
        <p>
          This site does not provide emergency mental health services. If
          you are in crisis, please contact your local emergency services or
          a crisis helpline immediately. Submitting a booking request
          through this site does not constitute an emergency response and
          should never be relied upon as one.
        </p>
      </LegalSection>

      <LegalSection heading="3. Booking Requests">
        <p>
          The booking form on this site allows you to submit your name,
          email address, and a message describing what you&rsquo;re looking
          for. Submitting this form does not create a therapeutic
          relationship, schedule a confirmed appointment, or guarantee a
          response within any specific timeframe. A therapeutic relationship
          begins only once a session has been mutually scheduled and
          confirmed directly with Juliet.
        </p>
      </LegalSection>

      <LegalSection heading="4. No Professional Advice via the Website">
        <p>
          Content on this website &mdash; including descriptions of
          services, the &ldquo;How Sessions Work&rdquo; section, and
          testimonials &mdash; is provided for general informational
          purposes only and does not constitute psychological, medical, or
          professional advice. It is not a substitute for individualized
          care from a licensed professional.
        </p>
      </LegalSection>

      <LegalSection heading="5. Testimonials">
        <p>
          Testimonials displayed on this site reflect individual experiences
          and are shared with permission. Results and experiences vary from
          person to person, and no testimonial should be understood as a
          guarantee of any particular outcome.
        </p>
      </LegalSection>

      <LegalSection heading="6. Intellectual Property">
        <p>
          All text, graphics, and design elements on this site are the
          property of The Informed Family Builder unless otherwise noted,
          and may not be copied or reproduced without prior written
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, The Informed Family
          Builder is not liable for any damages arising from your use of, or
          inability to use, this website, including any reliance on its
          content in place of professional care.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of the
          site after changes are posted constitutes acceptance of the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <p>
          Questions about these Terms can be sent through the booking form
          on this site.
        </p>
      </LegalSection>

      <p className="text-[12px] italic text-muted">
        This page is a working draft and has not yet been reviewed by legal
        counsel. Do not treat it as final until reviewed.
      </p>
    </LegalPageLayout>
  );
}
