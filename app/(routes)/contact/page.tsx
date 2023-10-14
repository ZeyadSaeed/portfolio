import PageTitle from "@components/common/PageTitle";
import Form from "@components/contact/Form";

export default function Contact() {
  return (
    <section className="mx-6  overflow-hidden md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-start md:justify-start gap-8 md:gap-10 text-white md:pt-16">
      <PageTitle title="Contact" exitDelay={0.3} />
      <Form />
    </section>
  );
}
