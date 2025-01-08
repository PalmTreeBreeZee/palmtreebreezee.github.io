

try {
  const clothes = axios.get("https://fakestoreapi.com/products");
  console.log(clothes);
} catch (err) {
  console.log(err);
}
return ('hello')