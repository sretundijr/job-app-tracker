
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
    </tr>
  `;
};

const renderTableData = (list) => {
  let tableData;
  list.forEach((item) => {
    tableData = item.map((obj) => {
      return (
        `
        <td>${Object.values(obj)}</td>
      `
      );
    }).join('');
  });

  return `
    <tr>
      ${tableData}
    </tr>
  `;
};


module.exports = { renderTableHead, renderTableData };
