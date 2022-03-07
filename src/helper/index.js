const filterListById = (list, id) => list.filter((item) => item.id !== id);
const createUniqueId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

export { createUniqueId, filterListById }