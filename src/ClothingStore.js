import React from "react";

try {
  const clothes = axios.get("https://fakestoreapi.com/products");
  console.log(clothes);
  return clothes;
} catch (err) {
  console.log(err);
}
return clothes.forEach((clothing) => {
  <div>{clothing.title}</div>;
});
