
class ManageAppState {
  constructor() {
    this.state = {
      // this array contains an array of objects [[{}],[{}]]
      jobApps: [],
      'contact-type': [
        'online-application',
        'in-person',
        'email',
      ],
      noteVisible: false,
    };

    this.addOrEditNote = this.addOrEditNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    // this.noteVisible = this.noteVisible.bind(this);
  }

  getContactType() {
    return this.state['contact-type'];
  }

  getJobAppNote(index) {
    return this.state.jobApps[index].notes;
  }

  addOrEditNote(index, valueObj) {
    this.state.jobApps[index] = Object.assign({}, this.state.jobApps[index], valueObj);
  }

  removeNote(index) {
    if (this.state.jobApps[index].notes) {
      this.state.jobApps[index].notes = '';
    }
  }

  getJobAppsWithoutNotes() {
    return this.state.jobApps.map((item) => {
      const clone = Object.assign({}, item);
      delete clone.notes;
      return clone;
    });
  }

  getJobApp(index) {
    return this.state.jobApps[index];
  }

  getJobApps() {
    return this.state.jobApps;
  }

  addJobApp(application) {
    this.state.jobApps.push(application);
  }

  removeJobApp(index) {
    this.state.jobApps.splice(index, 1);
  }
}

module.exports = ManageAppState;
