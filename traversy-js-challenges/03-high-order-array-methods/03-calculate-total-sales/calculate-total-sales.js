function calculateTotalSalesWithTax(products, taxRate) {
  let totalSales = 0;
  for (let i = 0; i < products.length; i++) {
   totalSales = totalSales + (products[i].price * products[i].quantity);
  }
  totalSalesWithTax = totalSales + totalSales * (taxRate / 100);
  
  return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;
