require("file-loader?name=index.html!./index.html");

require('./validation');

require('./client/index.js');

require('./client/state');

require('./client/job-app-table');

require('./client/add-note');

require('./client/add-note');

require('./client/helpers');

require('./client/list-selection');

require('file-loader?name=index.css!./client/styles/index.css');

// "file-loader?name=house-stats.css!./styles/house-stats.css"
