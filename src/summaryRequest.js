function SummaryRequest() {}

SummaryRequest.prototype.pullSummaryViaUrl = function(url) {
  var summaryReq = new XMLHttpRequest();
  summaryReq.open(
    "GET",
    `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`,
    false
  );
  summaryReq.send();
  var response = summaryReq.response;
  var jsonText = JSON.parse(response);
  return jsonText.sentences;
};
