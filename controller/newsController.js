function NewsController(
  headlineList,
  headlineListView,
  summaryRequest,
  summaryRequestView
) {
  this.headlineList = headlineList;
  this.headlineListView = headlineListView;
  this.summaryRequest = summaryRequest;
  this.summaryRequestView = summaryRequestView;
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

NewsController.prototype.returnStorySentences = function() {
  return this.summaryRequest.pullSummaryViaUrl(this.getStoryUrlFromId());
};

// NewsController.prototype.displayStorySentences = function() {
//   var self = this;
//   window.addEventListener("hashchange", function(){
//     var headline = self.
//   })
// };
