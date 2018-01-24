
const renderTableHead = (list) => {
  const tableHeaders = list.map((item) => {
    return (
      `
        <th>${Object.keys(item)}</th>
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
  const tableData = list.map((item, index) => {
    const data = item.map((obj) => {
      return (
        `
        <td>${Object.values(obj)}</td>
      `
      );
    }).join('');
    return (
      `
      <tr>
        ${data}
        <td><button id="note-${index}">Notes</button></td>
      </tr>
    `
    );
  }).join('');
  return tableData;
};


module.exports = { renderTableHead, renderTableData };
