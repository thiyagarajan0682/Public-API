import express from "express";
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
        console.log(result.data);
        res.render("../views/index.ejs", { joke1: result.data.setup , joke2: result.data.delivery, joke3: result.data.joke });
      } catch (error) {
        console.log(error.message);
        res.status(500);
      }
  
});

app.post('/post', async (req, res) => {
   res.redirect("/");
  
});

app.get('/cat', async (req, res) => {
    try {
        const result = await axios.get("https://cat-fact.herokuapp.com/facts");
        console.log(result.data);
        res.render("../views/index.ejs", { joke1: result.data.setup , joke2: result.data.delivery, joke3: result.data[4].text });
      } catch (error) {
        console.log(error.message);
        res.status(500);
      }
  
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
