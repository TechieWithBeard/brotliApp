
const port = process.env.PORT||9223;

var express = require("express");
var path=require("path");
var expressStaticGzip = require("express-static-gzip");
var app = express();

//app.use("/", expressStaticGzip("./dist/"));
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];
  


app.use("/", expressStaticGzip(".", {
    redirect: false,
    enableBrotli: true,
    customCompressions: [{
        encodingName: 'deflate',
        fileExtension: 'zz'
    }],
    orderPreference: ['br']
}));
app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`public/${req.url}`));
    } else {
      res.sendFile(path.resolve('./dist/index.html'));
    }
  });
app.listen(port,()=>{
    console.log("Hello from Master Collection," +port);
})