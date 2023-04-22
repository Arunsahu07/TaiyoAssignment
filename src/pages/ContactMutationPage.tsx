import { FC } from "react";
import ContactForm from "../components/ContactForm";

const ContactMutationPage: FC<{
  mode: "add" | "edit";
}> = ({ mode }) => {
  return (
    <div>
      <ContactForm title={mode === "add" ? "Add Contact" : "Edit Contact"} />
    </div>
  );
};

export default ContactMutationPage;
