const products = [
  {
    id: "1",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "2",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProduct(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newProductReview);
    return matchedProduct;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProduct,
  addNewProduct,
  addNewProductReview,
};
