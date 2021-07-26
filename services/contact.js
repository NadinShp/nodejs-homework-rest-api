const { Contact } = require('../models');

const listContact = (options) => {
  return Contact.paginate({}, options);
}

const filteredListContact = (filter) => Contact.find(filter).exec();

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
    const result = await Contact.create(newContact); //new Contact(newContact).save();
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
    console.log('SERVISE ERROR', error);
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
  filteredListContact,
};
