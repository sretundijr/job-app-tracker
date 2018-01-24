
const renderTableHead = (obj) => {
  const tableHeaders = Object.keys(obj).map((item) => {
    return (
      `
        <th>${item}</th>
      `
    );
  }).join('');

  return `
    <tr>
      ${tableHeaders}
      <th>Notes</th>
    </tr>
  `;
};

const renderTableData = (list) => {
  console.log(list);
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
        <td><button id="note-${index}">Notes</button></td>
      </tr>
    `
    );
  }).join('');
  return tableData;
};

module.exports = { renderTableHead, renderTableData };
