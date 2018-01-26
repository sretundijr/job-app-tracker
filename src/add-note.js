
/* global document */

const renderTextArea = (note) => {
  return (
    `
  <div id="app-notes-container">
    <textarea id="note-content">${note}</textarea>
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
  const noteContentElement = document.getElementById('note-content');
  addNoteElement.addEventListener('click', () => {
    const note = {
      notes: noteContentElement.value,
    };
    callback(index, note);
    document.getElementById('job-app-note').innerHTML = '';
  });
};

module.exports = { renderTextArea, addNoteEvent };
