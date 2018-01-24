
const renderTableHead = (list) => {
  console.log(list);
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

module.exports = { renderTableHead };
