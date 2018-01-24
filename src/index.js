
/* global document */

const { renderTableHead, renderTableData } = require('./job-app-table');

const { renderTextArea } = require('./add-note');

const ManageAppState = require('./state');

const State = new ManageAppState();

const returnElement = id => document.getElementById(id);

// todo move this to job app table file
const renderTable = (state) => {
  const tableElement = returnElement('job-app-table');
  tableElement.innerHTML =
    renderTableHead(state.getJobApps()[0]) + renderTableData(state.getJobApps());
};

const addApplicationFormSubmit = () => {
  const formElement = returnElement('app-form');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formObj = {};
    Array.from(e.target).forEach((item) => {
      if (item.name !== '') {
        formObj = Object.assign({}, formObj, { [item.name]: item.value });
      }
    });

    State.addJobApp(formObj);

    console.log(State);

    // put here for now
    renderTable(State);
  });
};

const addNoteHandler = () => {
  const element = returnElement('job-app-table');

  element.addEventListener('click', (e) => {
    const noteElement = returnElement('job-app-note');
    const index = e.target.id.substring(e.target.id.indexOf('-') + 1);
    noteElement.innerHTML = renderTextArea();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addApplicationFormSubmit();
  addNoteHandler();
});

