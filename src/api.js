import axios from "axios";

// export const getAllBooks = async () => {
//   const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);

//   if (!response.ok) {
//     throw new Error("Something went wrong.");
//   }

//   return response.json();
// };

// Method rewritten to use Axios
export const getAllBooks = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/books`);
  return response.data;
};

// export const getBook = async ({ queryKey }) => {
//   /* eslint-disable no-unused-vars */
//   const [_key, { id }] = queryKey;
//   const response = await fetch(
//     `${process.env.REACT_APP_API_SERVER}/books/${id}`
//   );
//   if (!response.ok) {
//     throw new Error(response.json().message);
//   }

//   return response.json();
// };

// Methor rewritten to use Axios
export const getBook = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;
  const response = await axios.get(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`
  );

  return response.data;
};

// export const updateBook = async ({ id, ...data }) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_API_SERVER}/books/${id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   if (!response.ok) {
//     throw new Error(response.json().message);
//   }

//   console.log(response);

//   return response.json();
// };

// Rewritten method using Axios
export const updateBook = async ({ id, ...data }) => {
  console.log({ id, ...data });
  const response = await axios.put(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    { id, ...data }
  );
  return response.data;
};

// export const createBook = async ({ ...data }) => {
//   const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error(response.json().message);
//   }

//   return response.json();
// };

// Rewritten methon using Axios
export const createBook = async ({ ...data }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_SERVER}/books`,
    data
  );
  return response.data;
};

// export const removeBook = async (id) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_API_SERVER}/books/${id}`,
//     {
//       method: "DELETE",
//     }
//   );

//   if (!response.ok) {
//     throw new Error(response.json().message);
//   }

//   return true;
// };

// Rewritten method using Axios
export const removeBook = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`
  );
  return true;
};
