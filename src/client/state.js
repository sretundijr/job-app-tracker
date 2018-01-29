
class ManageAppState {
  constructor() {
    this.state = {
      jobApps: [],
      contactType: [
        'select one',
        'online-application',
        'in-person',
        'email',
      ],
      applicationStatus: [
        'select one',
        'discovered',
        'applied',
        'phone screen',
        'interview',
        'offer',
        'inactive',
        'rejected',
      ],
      noteVisible: false,
    };

    this.addOrEditNote = this.addOrEditNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.toggleNoteVisible = this.toggleNoteVisible.bind(this);
    this.addOrEditApplicationStatus = this.addOrEditApplicationStatus.bind(this);
  }

  addOrEditApplicationStatus(index, value) {
    const appStatus = {
      status: value,
    };
    this.state.jobApps[index] = Object.assign({}, this.state.jobApps[index], appStatus);
  }

  getApplicationStatus() {
    return this.state.applicationStatus;
  }

  getNoteStatus() {
    return this.state.noteVisible;
  }

  toggleNoteVisible() {
    this.state.noteVisible = !this.state.noteVisible;
  }

  getContactType() {
    return this.state.contactType;
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
