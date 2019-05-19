function HeadlineList() {
  this._stories = [];
  this.pullPolitics();
}

HeadlineList.prototype.all = function() {
  return this._stories;
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
  this._stories = jsonText.response.results;
};

// HeadlineList.prototype.pullHeadlines = function() {
//   results = this.pullPolitics();
//   for (var i = 0; i < 10; i++) {
//     this._headlines.push(results[i].webTitle);
//   }
// };

HeadlineList.prototype.searchById = function(searchterm) {
  var found = this._stories.find(function(story) {
    if (story.id === searchterm) {
      return story;
    }
  });
  return found;
};
