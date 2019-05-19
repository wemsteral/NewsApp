function SummaryView(summaryRequest) {
  this._summaryRequest = summaryRequest;
}

SummaryView.prototype.returnSentencesHTML = function() {
  var string = `<p id="sentences">`;
  this.summaryRequest._summary.forEach(function(sentence) {
    string += sentence + "\n";
  });
  string += "</p>";
  return string;
};
