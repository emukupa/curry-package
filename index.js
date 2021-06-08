const name =
  (firstName = '') =>
  (lastName = '') =>
    `${firstName} ${lastName}`.trim();

module.exports = name;
