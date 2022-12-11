const scanner = require("sonarqube-scanner");
require("dotenv").config();
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: process.env.REACT_APP_SONAR_TOKEN,
    login: "admin",
    password: "admin",
    options: {
      "sonar.sources": "./src",
      "sonar.projectKey": process.env.REACT_APP_PROJECT_KEY,
      "sonar.projectName": process.env.REACT_APP_PROJECT_NAME,
    },
  },
  () => process.exit()
);
