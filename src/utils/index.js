export const formatCurrency = (amount) =>
  Number(amount).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
