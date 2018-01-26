
/* global document */

const { renderTableHead, renderTableData } = require('./job-app-table');

const { renderTextArea, addNoteEvent, removeNote } = require('./add-note');

const { returnElement, returnIndex } = require('./helpers');

const ManageAppState = require('./state');

const State = new ManageAppState();

// todo move this to job app table file
const renderTable = (state) => {
  const tableElement = returnElement('job-app-table', 'id');
  tableElement.innerHTML =
    renderTableHead(state.getJobAppsWithoutNotes()[0]) + renderTableData(state.getJobAppsWithoutNotes());
};

const addApplicationFormSubmit = () => {
  const formElement = returnElement('app-form', 'id');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let formObj = {};
    Array.from(e.target).forEach((item) => {
      if (item.name !== '') {
        formObj = Object.assign({}, formObj, { [item.name]: item.value });
      }
    });

    State.addJobApp(formObj);

    renderTable(State);
    formObj.notes = '';
  });
};

const addNoteHandler = () => {
  const element = returnElement('job-app-table', 'id');

  element.addEventListener('click', (e) => {
    const noteElement = returnElement('job-app-note', 'id');
    const index = returnIndex(e.target.id);
    const notes = State.getJobAppNote(parseInt(index, 10));
    if (notes) {
      noteElement.innerHTML = renderTextArea(notes, index);
      addNoteEvent(State.addOrEditNote, index);
      removeNote(State.removeNote, index);
    } else {
      noteElement.innerHTML = renderTextArea('', index);
      addNoteEvent(State.addOrEditNote, index);
      removeNote(State.removeNote, index);
    }
  });

  console.log(State);
};

document.addEventListener('DOMContentLoaded', () => {
  addApplicationFormSubmit();
  addNoteHandler();
});

