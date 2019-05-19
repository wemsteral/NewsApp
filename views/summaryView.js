function SummaryView(summaryRequest) {
  this._summaryRequest = summaryRequest;
}

SummaryView.prototype.viewSummary = function() {
  return this._summaryRequest._summary;
};

SummaryView.prototype.returnSentencesHTML = function() {
  var string = `<p>`;
  this.viewSummary().forEach(function(sentence) {
    string += sentence;
  });
  string += "</p>";
  return string;
};
