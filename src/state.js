
class ManageAppState {
  constructor() {
    this.state = {
      // this array contains an array of objects [[{}],[{}]]
      jobApps: [],
    };

    // saved for later so I don't have to look it up, just incase
    // this.addJobApp = this.addJobApp.bind(this);
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
