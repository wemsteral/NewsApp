const {
  guarantee,
  check,
  xcheck,
  end,
  group
} = require("../node_modules/wemtester");

group("test", () => {
  var note = 1;
  check("1 equals 1", () => {
    guarantee(note === 1);
  });
});
