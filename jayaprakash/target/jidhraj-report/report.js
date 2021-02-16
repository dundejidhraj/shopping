$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("raj.feature");
formatter.feature({
  "line": 2,
  "name": "test google Homepage",
  "description": "       i want to test google homepage through google chrome",
  "id": "test-google-homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Google homepage testing",
  "description": "",
  "id": "test-google-homepage;google-homepage-testing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@current"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch google chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open google Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Google homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Goolge search button is present",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});