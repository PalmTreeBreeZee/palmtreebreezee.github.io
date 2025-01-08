try {
  axios.get("https://fakestoreapi.com/products").then(res => {
    console.log(res.json());
  });
} catch (err) {
  console.log(err);
}

let hello = "Hello from js";
return hello;
