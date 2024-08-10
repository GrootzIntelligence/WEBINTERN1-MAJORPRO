const express = require('express');
const path = require('path'); 

const app = express();
PORT = 8000

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res)=>{
      res.render("home")
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})