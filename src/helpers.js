
/* global document */

const returnElement = (name, type) => {
  if (type === 'id') {
    return document.getElementById(name);
  }
  return '';
};

const returnIndex = idString => idString.substring(idString.indexOf('-') + 1);

module.exports = { returnElement, returnIndex };
