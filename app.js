window.addEventListener("load", function() {
  var headlineList = new HeadlineList();
  var headlineListView = new HeadlineListView(headlineList);
  var summaryRequest = new SummaryRequest();
  var summaryRequestView = new SummaryRequestView(summaryRequest);
  var controller = new NewsController(
    headlineList,
    headlineListView,
    summaryRequest
  );

  controller.listHeadlinesOnPage();
});
