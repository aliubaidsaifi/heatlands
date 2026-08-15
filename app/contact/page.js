import PageHero from '@/components/layout/PageHero';
import EnquiryForm from '@/components/sections/EnquiryForm';
import Datum from '@/components/ui/Datum';
import { company } from '@/data/company';
import { media } from '@/data/media';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Heatlands Construction Ltd to discuss a new build, extension, loft conversion or renovation project in London and surrounding areas.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Project."
        lede="Tell us what you have in mind and we'll come back to you with a clear next step."
        image={media.about.wide}
        alt="A contemporary residential property in London"
        crumb="Contact"
      />

      <section className="band">
        <div className="shell">
          <Datum n="01" label="Enquiry" />

          <div className="contact-grid">
            <EnquiryForm />

            <aside>
              <h2 className="hd hd-3" style={{ marginBottom: 20 }}>
                Direct contact
              </h2>

              <div className="contact-side">
                <div>
                  <span className="label">Phone</span>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
                <div>
                  <span className="label">Email</span>
                  <a href={company.emailHref}>{company.email}</a>
                </div>
                <div>
                  <span className="label">Service area</span>
                  <span>{company.serviceArea}</span>
                </div>
              </div>

              <p className="form-note">
                We answer enquiries personally rather than through a call centre, so please
                allow a little time during working hours.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
