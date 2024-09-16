const initialState = {
    products: {
      productDetails: [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          brand: "Apple",
          stock: 94,
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/product/products/1/1.jpg",
            "https://i.dummyjson.com/product/products/1/2.jpg",
            "https://i.dummyjson.com/product/products/1/3.jpg",
            "https://i.dummyjson.com/product/products/1/4.jpg",
            "https://i.dummyjson.com/product/products/1/thumbnail.jpg",
          ],
          quantity: 1,
          shipping: "Free",
        },
        {
          id: 2,
          title: "iPhone X",
          description:
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          price: 899,
          brand: "Apple",
          stock: 34,
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/product/products/2/1.jpg",
            "https://i.dummyjson.com/product/products/2/2.jpg",
            "https://i.dummyjson.com/product/products/2/3.jpg",
            "https://i.dummyjson.com/product/products/2/thumbnail.jpg",
          ],
          quantity: 1,
          shipping: "Free",
        },
        {
          id: 3,
          title: "Samsung Universe 9",
          description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
          price: 1249,
          brand: "Samsung",
          stock: 36,
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          images: ["https://i.dummyjson.com/product/products/3/1.jpg"],
          quantity: 1,
          shipping: "Free",
        },
        {
          id: 4,
          title: "OPPOF19",
          description: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          brand: "OPPO",
          stock: 123,
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/product/products/4/1.jpg",
            "https://i.dummyjson.com/product/products/4/2.jpg",
            "https://i.dummyjson.com/product/products/4/3.jpg",
            "https://i.dummyjson.com/product/products/4/4.jpg",
            "https://i.dummyjson.com/product/products/4/thumbnail.jpg",
          ],
          quantity: 1,
          shipping: "Free",
        },
        {
          id: 5,
          title: "Huawei P30",
          description:
            "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          price: 499,
          brand: "Huawei",
          stock: 32,
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/product/products/5/1.jpg",
            "https://i.dummyjson.com/product/products/5/2.jpg",
            "https://i.dummyjson.com/product/products/5/3.jpg",
          ],
          quantity: 1,
          shipping: 50,
        },
      ],
    },
  };
  
  const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
      case "REMOVE_PRODUCT":
        return {
          ...state,
          productDetails: state.productDetails.filter(
            (product) => product.id !== action.payload
          ),
        };
      case "UPDATE_QUANTITY":
        return {
          ...state,
          productDetails: state.productDetails.map((product) =>
            product.id === action.payload.productId
              ? { ...product, quantity: action.payload.quantity }
              : product
          ),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;