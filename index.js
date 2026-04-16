const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from EC2 via GitHub Actions 🚀 - Updated!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});