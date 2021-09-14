export const formatAmount = (amount: number) => {
  return amount ? `R$ ${amount.toFixed(2)}` : 'Grátis';
};