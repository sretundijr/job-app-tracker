
const renderTextArea = () => {
  return (
    `
  <div id="app-notes-container">
    <textarea>
    
    </textarea>
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

module.exports = { renderTextArea };
