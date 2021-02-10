const express = require("express");
const app = express();


app.use("/other", (req, res, next)=>{

  express.static("./other")(req, res, next);

})

app.use((req, res, next) => {
  console.log(req.path);
  if (req.path.startsWith("/other"))
  {
    console.log("Match")
  }
  else
    express.static("./dist")(req, res, next);
});

app.listen(8888, err => {
  if (err) return console.log(err);
})