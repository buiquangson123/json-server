var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
const host = "0.0.0.0";
app.listen(PORT, host, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
