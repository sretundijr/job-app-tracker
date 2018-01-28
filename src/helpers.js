
/* global document */

const returnElement = (name, type) => {
  if (type === 'id') {
    return document.getElementById(name);
  }
  return '';
};

const returnIndex = idString => parseInt(idString.substring(idString.indexOf('-') + 1), 10);

const removeHyphen = (tableHeading) => {
  return tableHeading.replace(/-/g, ' ');
};

const capitalizeFirstLetterOfEachWord = (tableHeading) => {
  return tableHeading.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

module.exports = {
  returnElement,
  returnIndex,
  removeHyphen,
  capitalizeFirstLetterOfEachWord,
};
