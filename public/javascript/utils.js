module.exports.log = (location, message) => {
  const date = new Date().toLocaleString();
  console.log(`[${date}] [Sonara] [${location}] ${message}`);
};
