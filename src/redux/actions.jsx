export const removeProduct = (productId) => ({
    type: "REMOVE_PRODUCT",
    payload: productId,
  });
  
  export const updateQuantity = (productId, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { productId, quantity },
  });