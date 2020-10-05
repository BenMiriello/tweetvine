// const express = require('express');
// const path = require('path');

// const app = express();

// const apiRoot = 'http://localhost:3001'
// const fetchApi = (endpoint) => fetch(apiRoot + endpoint);

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', (req, res) => {
//     res.send(fetchApi('/'));
// });

// app.emit('api/v1/getList', (req, res) => {
//     const list = ['li1','li2','li3'];
//     res.json(list);
// });

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// const port = process.env.PORT || 5000;
// app.listen(port, (req, res) => {
//     console.log('Server is listening on port ' + port);
// });
