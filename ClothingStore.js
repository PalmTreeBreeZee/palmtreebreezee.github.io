
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
      let button =
   `<label class="label">
    <p>Add To Cart  :</p>
    <div class="toggle">
        <input class="toggle-state" type="checkbox" name="check" value="check">
        
        <div class="indicator"></div>
    </div>
</label>`;
      productItem.innerHTML = `<img src=${product.image} width="100px" height="100px"><h3>${product.title}</h3><p>Price: ${product.price}$</p> ${button}`;
      
      productListElement.appendChild(productItem);
  });
}
 
getData()