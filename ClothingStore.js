
async function getData (){
  try {
    const res = await fetch("https://fakestoreapi.com/products")
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
  }
  const products = await res.json(); // Parse JSON data
        displayProducts(products)
} catch (error) {
  console.log(error)
}
}

function displayProducts(products) {
  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = ''; // Clear existing content

  products.forEach(product => {
      console.log(product)
      const productItem = document.createElement('div');
      productItem.className = 'product-item';
      productItem.innerHTML = `<h3>${product.title}</h3><p>Price: ${product.price}</p>`;
      productListElement.appendChild(productItem);
  });
}
 
getData()