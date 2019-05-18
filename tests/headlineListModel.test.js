const {
  guarantee,
  check,
  xcheck,
  end,
  group
} = require("../node_modules/wemtester");
const HeadlineList = require("../src/headlineList");

group("headlineList object", () => {
  headlineList = new HeadlineList();
  headlineList.pullPolitics;
  check("is initialised with empty array", () => {
    guarantee(headlineList._headlines === []);
  });
});
