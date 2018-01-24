
/* global document */

const { renderTableHead, renderTableData } = require('./job-app-table');

const ManageAppState = require('./state');

const State = new ManageAppState();

const returnElement = id => document.getElementById(id);

const renderTable = (state) => {
  const tableElement = returnElement('job-app-table');
  tableElement.innerHTML =
    renderTableHead(state.getJobApps()[0]) + renderTableData(state.getJobApps());
};

const addApplicationFormSubmit = () => {
  const formElement = returnElement('app-form');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formObjArray = Array.from(e.target).map((item) => {
      return {
        [item.name]: item.value,
      };
    });

    // the input type submit also gets stored here, remove with pop
    // todo revisit this
    formObjArray.pop();
    State.addJobApp(formObjArray);

    // put here for now
    renderTable(State);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addApplicationFormSubmit();
});

