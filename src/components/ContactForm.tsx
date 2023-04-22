import React, { FC } from "react";
import {
  addContact,
  selectEditContact,
  setEditContact,
  updateContactList,
} from "../redux/contactSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

const ContactForm: FC<Props> = ({ title }) => {
  const dispatch = useAppDispatch();
  const existingContact = useAppSelector(selectEditContact);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit", e);
    const values = Object.fromEntries(
      new FormData(e.currentTarget as HTMLFormElement)
    );
    if (
      !(
        values["firstName"] &&
        typeof values["firstName"] === "string" &&
        values["lastName"] &&
        typeof values["lastName"] === "string" &&
        (values["status"] === "active" || values["status"] === "inactive")
      )
    )
      return;

    dispatch(
      existingContact
        ? updateContactList({
            firstName: values["firstName"],
            lastName: values["lastName"],
            status: values["status"],
            id: existingContact.id,
          })
        : addContact({
            firstName: values["firstName"],
            lastName: values["lastName"],
            status: values["status"],
          })
    );

    dispatch(setEditContact(null));
    navigate("/contact");
    console.log(values);
  };

  const handleCancel = () => {
    dispatch(setEditContact(null));
    navigate("/contact");
  };

  return (
    <form className="w-full max-w-md mx-auto mt-10 " onSubmit={handleSubmit}>
      <div className="text-xl py-5 font-bold">{title}</div>
      <div className="grid grid-cols-1 mb-6 gap-5">
        <div className="col-span-full ">
          <label
            // className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-5"
            className="block text-sm mb-2 font-medium leading-6 text-gray-900"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            // className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
            className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="first-name"
            type="text"
            name="firstName"
            placeholder="Enter the first name"
            required
            defaultValue={existingContact?.firstName}
          />
        </div>
        <div className="col-span-full">
          <label
            className="block text-sm mb-2 font-medium leading-6 text-gray-900"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="last-name"
            name="lastName"
            required
            type="text"
            placeholder="Enter the last name"
            defaultValue={existingContact?.lastName}
          />
        </div>
      </div>
      <div className="grid ">
        <legend className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
          Status
        </legend>
        <div className="flex flex-row gap-3">
          <div className="flex items-center gap-x-3">
            <input
              id="inactive"
              name="status"
              type="radio"
              value="inactive"
              defaultChecked={existingContact?.status === "inactive"}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              required
            />
            <label
              htmlFor="inactive"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Inactive
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              required
              id="active"
              name="status"
              value="active"
              type="radio"
              defaultChecked={existingContact?.status === "active"}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="active"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Active
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-5 flex-row-reverse">
        <button
          onClick={handleCancel}
          className="rounded border border-indigo-600 px-8 py-2 text-sm font-semibold  shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Cancel
        </button>
        <button className="rounded bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {existingContact ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
