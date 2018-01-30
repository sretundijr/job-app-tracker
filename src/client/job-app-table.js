
const { removeHyphen, capitalizeFirstLetterOfEachWord } = require('./helpers');

const { renderTypeSelection } = require('./list-selection');

const renderTableHead = (obj) => {
  const tableHeaders = Object.keys(obj).map((item) => {
    const tableHeader = capitalizeFirstLetterOfEachWord(removeHyphen(item));
    return (
      `
        <th>${tableHeader}</th>
      `
    );
  }).join('');

  return `
    <tr>
      ${tableHeaders}
      <th>Change Status</th>    
      <th>Notes/Actions/Research</th>
      <th>Delete</th>
    </tr>
  `;
};

const renderTableData = (list, selectList) => {
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
        <td>
          <select name="app-status" id="appStatus-${index}">
            ${renderTypeSelection(selectList)}
          </select>
        </td>
        <td><button value="notes" id="note-${index}">Notes</button></td>
        <td><button value="remove" id="note-${index}">Remove</button></td> 
      </tr>
    `
    );
  }).join('');
  return tableData;
};

module.exports = { renderTableHead, renderTableData };
