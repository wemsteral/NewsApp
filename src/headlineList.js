function HeadlineList() {
  this._headlines = [];
  this.pullHeadlines();
}

HeadlineList.prototype.all = function() {
  return this._headlines;
};

HeadlineList.prototype.pullPolitics = function() {
  var newReq = new XMLHttpRequest();
  newReq.open(
    "GET",
    `https://content.guardianapis.com/search?section=politics&show-fields=thumbnail&api-key=43d5913e-d211-4aa8-a866-b8621398500e`,
    false
  );
  newReq.send();
  var response = newReq.response;
  var jsonText = JSON.parse(response);
  return jsonText.response.results;
};

HeadlineList.prototype.pullHeadlines = function() {
  results = this.pullPolitics();
  for (var i = 0; i < 10; i++) {
    this._headlines.push(results[i].webTitle);
  }
};
