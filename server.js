const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.urlencoded({ extended: true }));

app.get('/submit-get', (req, res) => {
  const { name, branch, semester } = req.query;

  res.send(`
    <h2>Student Information (GET)</h2>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
    <a href="/">Go Back</a>
  `);
});

app.post('/submit-post', (req, res) => {
  const { name, branch, semester } = req.body;

  res.send(`
    <h2>Student Information (POST)</h2>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
    <a href="/">Go Back</a>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
