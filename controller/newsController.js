function NewsController(headlineList, headlineListView) {
  this.headlineList = headlineList;
  this.headlineListView = headlineListView;
}

NewsController.prototype.listHeadlinesOnPage = function() {
  document.getElementById(
    "headlines"
  ).innerHTML = this.headlineListView.listInHTML();
};
