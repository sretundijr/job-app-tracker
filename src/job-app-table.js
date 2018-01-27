
const { capitalizeFirstLetterOfEachWord } = require('./helpers');

const renderTableHead = (obj) => {
  const tableHeaders = Object.keys(obj).map((item) => {
    const tableHeader = capitalizeFirstLetterOfEachWord(item);
    return (
      `
        <th>${tableHeader}</th>
      `
    );
  }).join('');

  return `
    <tr>
      ${tableHeaders}
      <th>Notes</th>
      <th>Delete</th>
    </tr>
  `;
};

const renderTableData = (list) => {
  const tableData = list.map((item, index) => {
    const tableRow = Object.values(item).map((value) => {
      return (
        `
          <td>${value}</td>
        `
      );
    }).join('');
    return (
      `
      <tr>
        ${tableRow}
        <td><button value="notes" id="note-${index}">Notes</button></td>
        <td><button value="remove" id="note-${index}">Remove</button></td> 
      </tr>
    `
    );
  }).join('');
  return tableData;
};

module.exports = { renderTableHead, renderTableData };
