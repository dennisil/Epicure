import axios from "axios";

export const restaurantService = {
  query,
  getById,
  // save,
  // remove,
};

const API_URL = "http://localhost:2718/api/restaurant";
// const STORAGE_KEY = "restaurant";

async function query() {
  try {
    const res = await axios.get(API_URL);
    const restaurantsToReturn = res.data;
    return restaurantsToReturn;
  } catch (err) {
    console.log(err);
  }
}

async function getById(resId: string) {
  try {
    const res = await axios.get(API_URL + `/${resId}`);
    const restaurant = res.data;
    return restaurant;
  } catch (err) {
    console.log(err);
  }
}

// function remove(id: string) {
//   const idx = gContacts.findIndex((contact) => contact._id === id);
//   gContacts.splice(idx, 1);
//   if (!gContacts.length) gContacts = gDefaultContacts.slice();
//   storageService.store(STORAGE_KEY, gContacts);
//   return Promise.resolve();
// }

// function save(contactToSave: Contact) {
//   if (contactToSave._id) {
//     const idx = gContacts.findIndex(
//       (contact) => contact._id === contactToSave._id
//     );
//     gContacts.splice(idx, 1, contactToSave);
//   } else {
//     contactToSave._id = makeId();
//     gContacts.unshift(contactToSave);
//   }
//   storageService.store(STORAGE_KEY, gContacts);
//   return Promise.resolve(contactToSave);
// }

// function _update(contactToSave) {
//     const idx = gContacts.findIndex(contact => contact._id === contactToSave._id)
//     gContacts.splice(idx, 1, contactToSave)
//     return Promise.resolve(contactToSave)
// }

// function _add(contactToSave) {

// }

// function getEmptyContact() {
//   return {
//     name: "",
//     phone: "",
//     email: "",
//   };
// }
