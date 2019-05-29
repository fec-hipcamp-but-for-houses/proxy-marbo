const express = require('express');
const app = express();
const port = 3010;
const request = require('request');
const cors = require('cors');


app.use(cors());

app.use(express.static('public'));

// app.get('/listing', (req, res) => {
//     console.log('get listing');
//     request('http://localhost:3005/listing').pipe(res);
//     console.log('got listing');
// });
  
// app.get('/bookings', (req, res) => {
//     console.log('get calendar');
//     request('http://localhost:3000/bookings').pipe(res);
//     console.log('got calendar');
// });
  
// app.get('/reviews', (req, res) => {
//   console.log('get reviews');
//   request('http://localhost:3001/reviews').pipe(res);
//   console.log('got reviews');
// });
  
// app.get('/photoGallery', (req, res) => {
//   console.log('get photos');
//   request('http://localhost:3003/photoGallery').pipe(res);
//   console.log('got photos');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))