const fs = require("fs");

var srcBD = fs
.readFileSync("C:/Users/sulta/.postgresql/root.crt")
.toString();

export { srcBD };