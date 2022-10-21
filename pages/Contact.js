import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
