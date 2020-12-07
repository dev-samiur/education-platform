const express= require('express');
const app= express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

//course routes
const courseRoutes= require('./routes/course')
app.use('/api/course', courseRoutes)

app.use(express.static(__dirname + '/public'));

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

const PORT= process.env.PORT || 5000;

app.listen(PORT, () => console.log('Serving..'));