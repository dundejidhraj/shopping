$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jidh.feature");
formatter.feature({
  "line": 3,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@current"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "some other precondition",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "check more outcomes",
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