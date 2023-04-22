import { useNavigate } from "react-router-dom";
import {
  ContactType,
  removeContact,
  setEditContact,
} from "../redux/contactSlice";
import { useAppDispatch } from "../utils/hooks";

const ContactCard = (props: { contactDetails: ContactType }) => {
  const { contactDetails } = props;
  const { firstName, lastName, status } = contactDetails;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="block rounded-lg bg-white p-6 shadow-sm "
      style={{
        borderBlockEnd:
          status === "active" ? "2px solid #0f6" : "2px solid #f06",
      }}
      onClick={() => {
        navigate(`details/${contactDetails.id}`);
      }}
    >
      <div className="mb-2 text-xl font-medium leading-tight">
        {firstName} {lastName}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setEditContact(contactDetails));
          navigate("edit");
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm  py-1 px-4 rounded mr-2"
      >
        Edit
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(removeContact(contactDetails));
        }}
        className="bg-red-500 hover:bg-red-700 text-white text-sm  py-1 px-4 rounded "
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
