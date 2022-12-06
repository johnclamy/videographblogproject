export default function uuid(text) {
  const bigInt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const id = text.substring(0, 8).toLowerCase().replace(/\s+/g, "") + "-";
  return id + bigInt
}