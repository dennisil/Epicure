import axios from "axios";

export const dishService = {
  query,
  // save,
  // remove,
  // getById,
  // getEmptyContact,
};
const API_URL = "http://localhost:2718/api/dish";
const STORAGE_KEY = "dishes";

async function query() {
  try {
    let res = await axios.get(API_URL);
    let dishes = res.data;
    return dishes;
  } catch (err) {
    console.log(err);
  }
}

// function getById(id: string) {
//   const dish = gDishes.find((dish) => dish._id === id);
//   return Promise.resolve({ ...dish });
// }

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

// function _loadDishes() {
//   let dishes = storageService.load(STORAGE_KEY);
//   if (!dishes || !dishes.length) dishes = gDefaultDishes;
//   storageService.store(STORAGE_KEY, dishes);
//   return dishes;
// }
