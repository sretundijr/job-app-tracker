
/* global document */

const returnElement = (name, type) => {
  if (type === 'id') {
    return document.getElementById(name);
  }
  return '';
};

const returnIndex = idString => idString.substring(idString.indexOf('-') + 1);

const removeHypen = (tableHeading) => {
  return tableHeading.replace(/-/g, ' ');
};

const capitalizeFirstLetterOfEachWord = (tableHeading) => {
  return removeHypen(tableHeading).replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

module.exports = { returnElement, returnIndex, capitalizeFirstLetterOfEachWord };
