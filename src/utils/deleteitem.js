const deleteItem = (array, index) => {
  const itensCopy = Array.from(array);
  itensCopy.splice(index, 1);
  return itensCopy;
};

export default deleteItem;
