import { useParams } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import { selectContactList } from "../redux/contactSlice";

const ContactDetailPage = () => {
  const { id } = useParams();
  const contactList = useAppSelector(selectContactList);
  const contact = contactList.find((contact) => contact.id === id);

  return (
    <div>
      <div
        className="
        text-2xl font-bold text-gray-800
        p-5
        "
      >
        Contact Details
      </div>

      <div className="block rounded-lg  p-6  ">
        <div className="mb-2 text-xl font-medium leading-tight">
          First Name: {contact?.firstName}
        </div>
        <div className="mb-2 text-xl font-medium leading-tight">
          Last Name: {contact?.lastName}
        </div>
        <div className="mb-2 text-xl font-medium leading-tight">
          Status: {contact?.status}
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
