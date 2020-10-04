const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.send('root routes');
    console.log('root routes')
})

app.emit('api/v1/getList', (req, res) => {
    const list = ['1','2','3'];
    res.json(list);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log('Server is listening on port ' + port);
});
