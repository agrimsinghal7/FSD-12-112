import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("<h2>hello client</h2>");
  console.log("server hit");
});
server.listen(4444, () => console.log("server is not running..."));

