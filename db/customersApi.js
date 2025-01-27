export {host} from '../config'
const API = 'http://localhost:3000' + '/customers'

export const getCustomers = async () => {
  const res = await fetch(API)
  return await res.json();
};

export const getCustomer = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveCustomer = async (object) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return await res.json();
};

export const deleteCustomer = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updateCustomer = async (id, object) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return res;
};