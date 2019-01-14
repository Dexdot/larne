export default number => {
  // Visa
  let re = new RegExp('^4');
  if (number.match(re) != null) return 'visa';

  // Mir
  re = new RegExp('^2');
  if (number.match(re) != null) return 'mir';

  // Mastercard
  // re = new RegExp('^5[1-5]');
  re = new RegExp('^5');
  if (number.match(re) != null) return 'mastercard';

  return '';
};
