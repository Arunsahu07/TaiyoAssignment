import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type StatusType = "active" | "inactive";

export interface ContactType {
  id: string;
  firstName: string;
  lastName: string;
  status: StatusType;
}
type ContactState = {
  entities: ContactType[];
  editContact: ContactType | null;
};

const initialState: ContactState = {
  entities: [],
  editContact: null,
};

function prepare(data: Omit<ContactType, "id">) {
  return {
    ...data,
    id: nanoid(),
  };
}
export const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<ContactType, "id">>) => {
      state.entities.push(prepare(action.payload));
    },

    removeContact: (state, action: PayloadAction<ContactType>) => {
      state.entities = state.entities.filter(
        (contact) => contact.id !== action.payload.id
      );
    },

    updateContactList: (state, action: PayloadAction<ContactType>) => {
      state.entities = state.entities.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    },

    setEditContact: (state, action: PayloadAction<ContactType | null>) => {
      state.editContact = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, removeContact, updateContactList, setEditContact } =
  contactSlice.actions;
export const selectContactList = (state: RootState) =>
  state.contactList.entities;
export const selectEditContact = (state: RootState) =>
  state.contactList.editContact;

export default contactSlice.reducer;
