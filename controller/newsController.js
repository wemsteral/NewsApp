function NewsController(headlineList, headlineListView) {
  this.headlineList = headlineList;
  this.headlineListView = headlineListView;
}

NewsController.prototype.listHeadlinesOnPage = function() {
  document.getElementById(
    "headlines"
  ).innerHTML = this.headlineListView.listInHTML();
};

NewsController.prototype.getIdFromUrl = function() {
  return window.location.hash.split("#")[1];
};

NewsController.prototype.getStoryUrlFromId = function() {
  var story = this.headlineList.searchById(this.getIdFromUrl());
  return story.webUrl;
};

NewsController.prototype.displayStoryFromUrl = function() {
  summaryRequest = new SummaryRequest();
  summaryRequest.pullSummaryViaUrl(this.getStoryUrlFromId());
  srView = new SummaryView(summaryRequest);
  document.getElementById("sentences").innerHTML = srView.returnSentencesHTML();
};
