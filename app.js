// var express = require('express');
// var path = require('path');
// var ejs = require('ejs');

// var app = express();


// app.get('/', function(req, res) {
//     res.render('index');
//     res.send("node启动成功")
// });

// // app.listen(3000, () => {
// //     console.log('node服务器监听3000端口成功');
// // })
// var server = app.listen(8888, function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Listening at http://%s:%s', host, port);
// }); 
var express = require('express');
var app = express();
const proxy = require('http-proxy-middleware');
const options = {
    target: "http://localhost:7001",
    changeOrigin: true,
    xfwd: true
};
const newProxy  = proxy( options );
app.use( '/api/*', newProxy );

module.exports = app;