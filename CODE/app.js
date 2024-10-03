const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.get('/main-blog', async(req, res) =>{
  res.render('main-blog');
})
app.get('/single-blog-1', async(req, res) =>{
  res.render('single-blog-1');
})

app.get('/single-blog-2', async(req, res) =>{
  res.render('single-blog-2');
})

app.get('/single-blog-3', async(req, res) =>{
  res.render('single-blog-3');
})
app.get('/single-blog-4', async(req, res) =>{
  res.render('single-blog-4');
})

app.get('/gallery', async(req, res) =>{
  res.render('gallery');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});