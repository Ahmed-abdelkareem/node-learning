const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT||3000;

app.set('views engine' ,hbs);
app.use((req,res,next)=>{
    res.render('index.hbs');
    });
    app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
res.send({
    title:'website',
    content:'dummy content',
    auther:'ahmed mahmoud'
})
});


app.use(express.static(__dirname+'/public'));




app.listen(port);