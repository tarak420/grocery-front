import axios from 'axios';
import { getToken } from '../../utils/getToken';
import { BASE_URL } from '../../utils/constants';


export const fetchProductsApi = async () => {
  const response = await axios.get(`${BASE_URL}/products`, {
    headers: {
      Authorization: `Bearer ${getToken()}`, // Include the token in the header
    },
  });
  return response?.data; // Return the data directly
};

export const createProductApi = async (productData) => {
  // Create a FormData object to handle file uploads
  const formData = new FormData();

  // Manually append fields to the FormData
  formData.append('name', productData?.name);
  formData.append('price', productData?.price);
  formData.append('description', productData?.description);
  formData.append('stock', productData?.stock);
  formData.append('category', productData?.category);

  // Append image file if available
  if (productData?.productImage) {
    formData.append('file', productData.productImage);
  }
  formData.forEach((value, key) => {
    console.log(key, value);
  });
  console.log('form datatt :', formData);
  const response = await axios.post(`${BASE_URL}/products`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
      Authorization: `Bearer ${getToken()}`, // Include the token in the header
    },
  });
  return response.data; // Return the created product
};

export const editProductApi = async (productId, updatedData) => {
  // Create a FormData object to handle file uploads
  const formData = new FormData();

  // Manually append fields to the FormData
  formData.append('name', updatedData?.name);
  formData.append('price', updatedData?.price);
  formData.append('description', updatedData?.description);
  formData.append('stock', updatedData?.stock);
  formData.append('category', updatedData?.category);
  
  // Append image file if available
  if (updatedData?.productImage) {
    formData.append('file', updatedData.productImage);
  }

  formData.forEach((value, key) => {
    console.log(key, value);
  });

  console.log(updatedData)
  const response = await axios.put(`${BASE_URL}/products/${productId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
      Authorization: `Bearer ${getToken()}`, // Include the token in the header
    },
  });
  return response.data; // Return the updated product
};

export const deleteProductApi = async (productId) => {
  await axios.delete(`${BASE_URL}/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`, // Include the token in the header
    },
  });
  return productId; // Return the product ID to confirm deletion
};
