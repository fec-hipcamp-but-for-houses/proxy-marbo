const express = require('express');

const app = express();
const port = 3010;
const cors = require('cors');


app.use(cors());

app.use(express.static('public'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
