
/* global document */

const { returnElement } = require('./helpers');

const renderTextArea = (note, index) => {
  return (
    `
  <div id="app-notes-container">
    <textarea id="noteContent-${index}">${note}</textarea>
    <div>
      <button id="save-note">
        Save
      </button>
      <button id="remove-note">
        Remove
      </button>
    </div>
  </div>
    `
  );
};

const removeNoteTextArea = () => {
  returnElement('job-app-note', 'id').innerHTML = '';
};

const addNoteEvent = (callback, toggleNote, index) => {
  const addNoteElement = returnElement('save-note', 'id');
  const noteContentElement = returnElement(`noteContent-${index}`, 'id');
  addNoteElement.addEventListener('click', () => {
    const note = {
      notes: noteContentElement.value,
    };
    callback(index, note);
    toggleNote();
    removeNoteTextArea();
  });
};

const removeNote = (callback, toggleNote, index) => {
  const noteElement = document.getElementById('remove-note');
  noteElement.addEventListener('click', () => {
    callback(index);
    toggleNote();
    removeNoteTextArea();
  });
};

module.exports = {
  renderTextArea,
  addNoteEvent,
  removeNote,
  removeNoteTextArea,
};
