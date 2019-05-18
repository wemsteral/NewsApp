const wemtester = require("../node_modules/wemtester");
const matchers = require("../node_modules/wemtester/src/matchers/index");

require("./test.test.js");
require("./headlineListModel.test.js");

wemtester.end();
