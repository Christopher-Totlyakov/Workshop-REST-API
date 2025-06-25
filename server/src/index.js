import express from 'express';

const app = express();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})


app.get('/data/catalog', (req,res) =>{
    res.json({});
});

app.listen(3030, () => console.log("Server listening on http://localhost:3030"));