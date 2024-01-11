import ContactUsForm from './ContactUsForm'

const ContactUsSection = () => {
  return (
    <section className="-mt-20 pt-20 bg-gradient-to-r from-accent from-30% to-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ContactUsForm/>
        <div></div>
      </div>
    </section>
  );
};

export default ContactUsSection;
