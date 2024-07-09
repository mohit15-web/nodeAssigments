const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    console.log("method:", req.method);
    console.log("url:", req.url);
    console.log("timestamp:", Date.now());
    console.log("response time:", req.responseTime);
    res.json({
        success: true,
        message:'request success'
    })
});

app.listen(8000 , () => console.log('Listening on port 8000'))