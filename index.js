import express from 'express';

var app=express();

app.get('/',function (req,res) {
    res.send('hello world');
});
app.listen(9001,function () {
    console.log('server is running at 9001');
});