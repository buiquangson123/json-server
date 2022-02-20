var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
