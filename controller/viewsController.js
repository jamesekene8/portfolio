exports.homePage = (req, res, next) => {
  res.render("base", { title: "Home" });
};
