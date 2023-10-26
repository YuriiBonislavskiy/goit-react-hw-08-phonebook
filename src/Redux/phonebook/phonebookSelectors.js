const getItems = state => state.phonebook.contacts.items;

const getIsLoading = state => state.phonebook.contacts.isLoading;

const getError = state => state.phonebook.contacts.error;

const getFilter = state => state.phonebook.filter;

const phonebookSelectors = {
  getItems,
  getIsLoading,
  getError,
  getFilter,
};

export default phonebookSelectors;
