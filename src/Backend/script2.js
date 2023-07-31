const express = require('express');
const app = express();
app.use(express.json())
const axios = require('axios');
const urll = "http://20.244.56.144/train/trains";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA4MDQyMzAsImNvbXBhbnlOYW1lIjoiTG9nZXNoLVRyYXZlbC1UaW1lIiwiY2xpZW50SUQiOiIxNTBlZmIxZi1hM2I2LTRmYjktODFiZS1iYjA0ODExMTBhYTYiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjBFVUlUMDc1In0.VdsGZKhk2UghZlz7MH6vSiLbGKduHcZyfp-3rBevD3I";
const restemp1 =[];
const ress =[{}];
app.get('/api/data', async (req, res) => {
    try {
      const url2 = urll; 
      const headers = { Authorization: `Bearer ${token}` };
      const resp = await axios.get(url2, { headers });
      restemp = resp.data;
      res.json(restemp);
      console.log(JSON.stringify(restemp));
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Error fetching data from the server.' });
    }
  });
  app.listen(7000 , () =>{
    console.log('server is Running')
})
 