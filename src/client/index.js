
/* global document */

require('./styles/index.css');

const { renderTableHead, renderTableData } = require('./job-app-table');

const { renderTypeSelection, handleSelectEvent } = require('./list-selection');

const {
  renderTextArea,
  addNoteEvent,
  removeNote,
  removeNoteTextArea,
} = require('./add-note');

const { returnElement, returnIndex } = require('./helpers');

const ManageAppState = require('./state');

const State = new ManageAppState();

const renderTable = (state) => {
  const tableElement = returnElement('job-app-table', 'id');
  const appsWithoutNotes = state.getJobAppsWithoutNotes();
  if (appsWithoutNotes.length > 0) {
    tableElement.innerHTML =
      renderTableHead(appsWithoutNotes[0]) +
      renderTableData(appsWithoutNotes, state.getApplicationStatus());
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

    formElement.reset();

    renderTable(State);
  });
};

const addAndRemoveNoteHandler = (index) => {
  addNoteEvent(State.addOrEditNote, State.toggleNoteVisible, index);
  removeNote(State.removeNote, State.toggleNoteVisible, index);
};

const noteEvents = (index) => {
  const noteElement = returnElement('job-app-note', 'id');
  const notes = State.getJobAppNote(index);
  State.toggleNoteVisible();
  if (!State.getNoteStatus()) {
    removeNoteTextArea();
  } else if (notes) {
    noteElement.innerHTML = renderTextArea(notes, index);
    addAndRemoveNoteHandler(index);
  } else {
    noteElement.innerHTML = renderTextArea('', index);
    addAndRemoveNoteHandler(index);
  }
};

const addTableHandler = () => {
  const element = returnElement('job-app-table', 'id');

  element.addEventListener('click', (e) => {
    const index = returnIndex(e.target.id);

    if (e.target.name === 'app-status') {
      handleSelectEvent(
        e.target.id,
        'id',
        State.addOrEditApplicationStatus,
        index,
        () => { renderTable(State); },
      );
    } else if (e.target.value === 'notes') {
      noteEvents(index);
    } else if (!State.getNoteStatus() && e.target.value === 'remove') {
      State.removeJobApp(index);
      renderTable(State);
    } else if (State.getNoteStatus()) {
      alert('Please finish adding or removing a note before deleting an item');
    }
  });
};

const contactTypeContainer = () => {
  returnElement('contact-type', 'id').innerHTML =
    renderTypeSelection(State.getContactType());
};

const applicationStatusContainer = () => {
  returnElement('app-status', 'id').innerHTML =
    renderTypeSelection(State.getApplicationStatus());
};

document.addEventListener('DOMContentLoaded', () => {
  contactTypeContainer();
  applicationStatusContainer();
  addApplicationFormSubmit();
  addTableHandler();
});

