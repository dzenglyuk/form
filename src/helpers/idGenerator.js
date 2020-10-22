const generateId = (text) => {
  return text.replace(/\s+/g, "").toLowerCase();
};

export default generateId;
