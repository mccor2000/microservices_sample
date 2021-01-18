const app = require("express")();

app.use(require("cors")());
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: true }));

app
  .route("/")
  .get(async (_req, res) => {
    res.send("Get all projects");
  })
  .post(async (_req, res) => {
    res.send("Add projects");
  });

app
  .route("/:id")
  .get(async (req, res) => {
    res.send(`Get project ${req.params.id}`);
  })
  .put(async (req, res) => {
    res.send(`Update project ${req.params.id}`);
  })
  .delete(async (req, res) => {
    res.send(`Delete project ${req.params.id}`);
  });

app.listen(3000, () => {
  console.log(`Project service is running..`);
});
