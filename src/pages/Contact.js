import NewContactsForm from "../components/NewContacts/NewContacts";

function ContactPage() {
  return (
    <section>
      <div align="center">
        <h1>Contact Us</h1>
        <NewContactsForm />

        <p> Please contact us with any questions/concerns/suggestions. </p>
        <img
          src="/assets/images/thankyou.jpg"
          width="625"
          height="200"
          class="img-fluid"
          alt="thank you"
        />
      </div>
    </section>
  );
}

export default ContactPage;
