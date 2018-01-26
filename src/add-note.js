
/* global document */

const renderTextArea = (note, index) => {
  return (
    `
  <div id="app-notes-container">
    <textarea id="note-content-${index}">${note}</textarea>
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

const addNoteEvent = (callback, index) => {
  const addNoteElement = document.getElementById('save-note');
  const noteContentElement = document.getElementById(`note-content-${index}`);
  addNoteElement.addEventListener('click', () => {
    const note = {
      notes: noteContentElement.value,
    };
    callback(index, note);
    document.getElementById('job-app-note').innerHTML = '';
  });
};

const removeNote = (callback, index) => {
  const noteElement = document.getElementById('remove-note');
  console.log('here');
  noteElement.addEventListener('click', () => {
    console.log('here 2');
    callback(index);
    document.getElementById('job-app-note').innerHTML = '';
  });
};

module.exports = { renderTextArea, addNoteEvent, removeNote };
