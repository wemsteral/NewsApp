function HeadlineListView(headlineList) {
  this._headlineList = headlineList;
}

HeadlineListView.prototype.listInHTML = function() {
  var string = "<ul>";
  this._headlineList.all().map(function(headline) {
    string +=
      "<li><div><a href=#" +
      headline.id +
      ">" +
      headline.webTitle +
      "</a></li></div>";
  });
  string += "</ul>";
  return string;
};
