const { Contact } = require('../models');

const listContact = async (options) => {
  const query = {};
  try {
    if(options.favorite) {query.favorite = options.favorite};
    const optionsForRequest = {
      page: options.page || 1,
      limit: options.limit || 10,
    };
    const result = await Contact.paginate(query, optionsForRequest);
    return result;
  } catch(error) {
  throw error;
  }
};

const getById = async id => {
  try {
    const result = await Contact.findById(id);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

const addContact = async newContact => {
  try {
    const result = await Contact.create(newContact);
    return result;
  } catch (error) {
    throw error;
  }
};
const updateContact = async (id, newContact) => {
  try {
    const result = await Contact.findByIdAndUpdate(id, newContact, {
      new: true,
    });
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

const removeContact = async id => {
  try {
    const result = await Contact.findByIdAndDelete(id);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

const updateStatusContact = async (id, newStatus) => {
  try {
    const result = await Contact.findByIdAndUpdate(id, newStatus, {
      new: true,
    });
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = {
  addContact,
  listContact,
  getById,
  removeContact,
  updateContact,
  updateStatusContact,
};
