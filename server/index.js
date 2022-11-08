const http = require("http");
const { PORT = 8000 } = process.env; // Ambil port dari environment variable
const HOST = "localhost";

const fs = require("fs");
const path = require("path");

// START SWITCH
function onRequest(req, res) {
    const url = req.url;
//     switch(url) {
//         case "/" :
//             fs.readFile("./public/index.html", "UTF-8", function(err, html) {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(html);
//             });
//             return;
//         case "/cari_mobil.html" :
//             fs.readFile("./public/cari_mobil.html", "UTF-8", function(err, html) {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(html); 
//             });
//             return;
//         case "/index.html" :
//             fs.readFile("./public/index.html", "UTF-8", function(err, html) {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(html);
//             });
//             return;
//         case "/getcars" :
//             var dataPath = path.join(__dirname, "../data", "/cars.json");
//             var fileStream = fs.createReadStream(dataPath, "UTF-8");
//             res.writeHead(200, { "Content-Type": "application/json" });
//             fileStream.pipe(res);
//             return;
//         case ".css$" :
//             var cssPath = path.join(__dirname, "../public", url);
//             var fileStream = fs.createReadStream(cssPath, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/css" });
//             fileStream.pipe(res);
//             return;
//         case ".png$" :
//             var imagePath = path.join(__dirname, "../public", url);
//             var fileStream = fs.createReadStream(imagePath);
//             res.writeHead(200, { "Content-Type": "image/png" });
//             fileStream.pipe(res);
//             return;
//         case ".jpg$" :
//             var imagePath = path.join(__dirname, "../public", url);
//             var fileStream = fs.createReadStream(imagePath);
//             res.writeHead(200, { "Content-Type": "image/jpg" });
//             fileStream.pipe(res);
//             return;
//         case ".js$" :
//             var jsPath = path.join(__dirname, "../public", url);
//             var fileStream = fs.createReadStream(jsPath);
//             res.writeHead(200, { "Content-Type": "application/javascript" });
//             fileStream.pipe(res);
//             return;
//         default:
//             fs.readFile("./public/404.html", "UTF-8", function(err, html) {
//                 res.writeHead(404, { "Content-Type": "text/html" });
//                 res.end(html);
//                 return;
//             });
//     }
// }
// ENDING SWITCH

// START IF ELSE
    if (url === "/") {
        fs.readFile("./public/index.html", "UTF-8", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (url === "/cari_mobil.html" || url === "/cari_mobil") {
        fs.readFile("./public/cari_mobil.html", "UTF-8", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (url === "/getcars") {
        const dataPath = path.join(__dirname, "../data", "/car.json");
        const fileStream = fs.createReadStream(dataPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "application/json" });
        fileStream.pipe(res);
    } else if (url.match(".css$")) {
        const cssPath = path.join(__dirname, "../public", url);
        const fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    } else if (url.match(".png$")) {
        const imagePath = path.join(__dirname, "../public", url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    } else if (url.match(".jpg$")) {
        const imagePath = path.join(__dirname, "../public", url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    } else if (url.match(".js$")) {
        const jsPath = path.join(__dirname, "../public", url);
        const fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fileStream.pipe(res);
    } else {
        fs.readFile("./public/404.html", "UTF-8", (err, html) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(html);
        });
    };
    // ENDING IF ELSE
};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}/`);
});