const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express()
const port = 4000;
app.use(cors());

app.get('/races/:count', (req, res) => {
  axios.get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=" + req.params.count)
    .then(response => res.send(Object.values(response.data.data.race_summaries)));
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})