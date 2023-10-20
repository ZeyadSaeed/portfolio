import PageTitle from "@components/common/PageTitle";
import Form from "@components/contact/Form";

const ContactContainer = () => {
  return (
    <section className="mx-6 md:mx-16 flex h-sectionFullPhone md:h-sectionFullDesktop flex-col items-center justify-start md:justify-start gap-8 md:gap-10 text-white md:pt-16">
      <PageTitle title="Contact" />
      <Form />
    </section>
  );
};
export default ContactContainer;
