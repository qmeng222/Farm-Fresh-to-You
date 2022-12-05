module.exports = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  // mutate the output after it has been created:
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  if (!product.organic)
    // .not-organic {display: none;} in template-product.html:
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};
