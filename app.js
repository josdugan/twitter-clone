const path = require("path");
const express = require("express");
const middleware = require("./middleware");
const loginRoute = require("./routes/loginRoutes");

const PORT = 3000;

const app = express();

app.set("view engine", "pug");
app.set("views", "views");
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/login", loginRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {
  const payload = {
    pageTitle: "Home",
  };
  res.status(200).render("home", payload);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
