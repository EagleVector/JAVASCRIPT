function calculateTotalSalesWithTax(products, taxRate) {
  
  const totalSales = products
  .reduce((acc, product) => acc + product.price * product.quantity, 0);
  
  const totalSalesWithTax = totalSales + totalSales * (taxRate / 100);
  
  return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;
