const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

const api = {
  base: "https://api.openweathermap.org/data/2.5",
};

app.get('/weather', async (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    try {
        const response = await fetch(
          `${api.base}/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
        );
        if (!response.ok) throw new Error("fetch response not ok");
        const result = await response.json();
        res.json(result);
      } catch (error) {
        res.json(error);
    }
})

app.get('/weather/location', async (req, res) => {
    const location = req.query.city;
    try {
      const response = await fetch(
        `${api.base}/weather?q=${location}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) throw new Error("fetch response not ok");
      const result = await response.json();
      res.json(result);
    } catch (error) {
      res.json(error);
    }
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))