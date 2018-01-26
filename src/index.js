
/* global document */

const { renderTableHead, renderTableData } = require('./job-app-table');

const { renderTextArea, addNoteEvent, removeNote } = require('./add-note');

const { returnElement, returnIndex } = require('./helpers');

const ManageAppState = require('./state');

const State = new ManageAppState();

// todo move this to job app table file
const renderTable = (state) => {
  const tableElement = returnElement('job-app-table', 'id');
  const appsWithoutNotes = state.getJobAppsWithoutNotes();
  if (appsWithoutNotes.length > 0) {
    tableElement.innerHTML =
      renderTableHead(appsWithoutNotes[0]) +
      renderTableData(appsWithoutNotes);
  } else {
    tableElement.innerHTML = '';
  }
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

const noteEvents = (index) => {
  const noteElement = returnElement('job-app-note', 'id');
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
};

const addNoteHandler = () => {
  const element = returnElement('job-app-table', 'id');

  element.addEventListener('click', (e) => {
    const index = returnIndex(e.target.id);
    if (e.target.value === 'notes') {
      noteEvents(index);
    } else {
      State.removeJobApp(index);
      renderTable(State);
    }
  });
};

const renderContactTypeSelection = () => {
  const selectElementContainer = returnElement('contact-type', 'id');
  selectElementContainer.innerHTML = State.getContactType().map((item) => {
    return (
      `
      <option value="${item}">${item}</option>
      `
    );
  }).join('');
};

document.addEventListener('DOMContentLoaded', () => {
  renderContactTypeSelection();
  addApplicationFormSubmit();
  addNoteHandler();
});

