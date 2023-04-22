import { selectContactList } from "../redux/contactSlice";
import ContactCard from "../components/ContactCard";
import { useAppSelector } from "../utils/hooks";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const contactList = useAppSelector(selectContactList);

  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        <button
          onClick={() => navigate("add")}
          className="rounded-md bg-indigo-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Contact
        </button>
      </div>
      {contactList && contactList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 py-5">
          {contactList.map((contact, index) => (
            <ContactCard key={index} contactDetails={contact} />
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl font-semibold py-5">
          No contacts found! Please add a contact to get started.
        </div>
      )}
    </div>
  );
};

export default ContactPage;
