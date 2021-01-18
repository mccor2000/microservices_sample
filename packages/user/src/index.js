const app = require("express")();

app.use(require("cors")());
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: true }));

app
  .route("/")
  .get(async (_req, res) => {
    res.send("Get all users");
  })
  .post(async (_req, res) => {
    res.send("Add user");
  });

app
  .route("/:id")
  .get(async (req, res) => {
    res.send(`Get user ${req.params.id}`);
  })
  .put(async (req, res) => {
    res.send(`Update user ${req.params.id}`);
  })
  .delete(async (req, res) => {
    res.send(`Delete user ${req.params.id}`);
  });

app.listen(3000, () => {
  console.log(`User service is running..`);
});
