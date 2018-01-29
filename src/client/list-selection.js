
const { returnElement } = require('./helpers');

const renderTypeSelection = (list) => {
  return list.map((item) => {
    return (
      `
      <option value="${item}">${item}</option>
      `
    );
  }).join('');
};

const handleSelectEvent = (name, id, callback, index, render) => {
  const element = returnElement(name, id);

  element.addEventListener('change', (e) => {
    callback(index, e.target.value);
    render();
  });
};

module.exports = { renderTypeSelection, handleSelectEvent };
