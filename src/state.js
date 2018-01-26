
class ManageAppState {
  constructor() {
    this.state = {
      // this array contains an array of objects [[{}],[{}]]
      jobApps: [],
    };

    this.addOrEditNote = this.addOrEditNote.bind(this);
  }

  getJobAppNote(index) {
    return this.state.jobApps[index].notes;
  }

  addOrEditNote(index, valueObj) {
    this.state.jobApps[index] = Object.assign({}, this.state.jobApps[index], valueObj);
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
}

module.exports = ManageAppState;
