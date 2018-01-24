
/* global document */

const { renderTableHead } = require('./job-app-table');

const ManageAppState = require('./state');

const State = new ManageAppState();

const returnElement = (id) => {
  return document.getElementById(id);
};

const renderTable = () => {
  const tableElement = returnElement('job-app-table');
  tableElement.innerHTML = renderTableHead(State.getJobApps()[0]);
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

    State.addJobApp(formObjArray);

    // put here for now
    renderTable();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addApplicationFormSubmit();
});

