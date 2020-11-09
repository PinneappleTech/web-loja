export const currency = value => {
  value = value.replace(/([^\d+,])+/gim, '').replace(',', '.');
  return Number(value);
};

export const unMaskedTextValue = value => {
  value = value.replace(/([^\d+,])+/gim, '');
  return Number(value);
};
