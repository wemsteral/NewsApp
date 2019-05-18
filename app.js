window.addEventListener("load", function() {
  var headlineList = new HeadlineList();
  var headlineListView = new HeadlineListView(headlineList);
  var controller = new NewsController(headlineList, headlineListView);

  controller.listHeadlinesOnPage();
});
