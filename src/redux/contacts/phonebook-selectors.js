export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
export const getLoading = state => state.phonebook.loading;
export const getContactsArrayLength = state => state.phonebook.contacts.length;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
