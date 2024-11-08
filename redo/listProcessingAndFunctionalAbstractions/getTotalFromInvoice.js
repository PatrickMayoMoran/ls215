function getTotalFromInvoice(invoice) {
  let total = Object.values(invoice).reduce((total, value) => total + value);
  return {total: total}
}

console.log(getTotalFromInvoice({phone: 10000, internet: 8000, tax: 3000}));
