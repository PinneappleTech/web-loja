export const currency = event => {
  let valueInput = event.target.value;
  valueInput = valueInput.replace(/\D/g, '');
  valueInput = valueInput.replace(/(\d)(\d{2})$/, '$1,$2');
  valueInput = valueInput.replace(/(?=(\d{3})+(\D))\B/g, '.');

  event.currentTarget.value = valueInput;
  return event;
};

export const RG = event => {
  let valueMasked = event.target.value;
  valueMasked = valueMasked.replace(/\D/g, '');
  valueMasked = valueMasked.replace(/(\d{10})(\d{1})$/, '$1-$2');
  event.currentTarget.value = valueMasked;
  return event;
};

export const CPF = event => {
  let valueMasked = event.target.value;
  valueMasked = valueMasked.replace(/\D/g, '');
  valueMasked = valueMasked.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4',
  );
  event.currentTarget.value = valueMasked;
  return event;
};

export const CEP = event => {
  let valueMasked = event.target.value;
  valueMasked = valueMasked.replace(/\D/g, '');
  valueMasked = valueMasked.replace(/(\d{5})(\d{2})/, '$1-$2');
  event.currentTarget.value = valueMasked;
  return event;
};
