const http = require("http");
const server = http.createServer((req, res) => {
  // res.write("Welcome to our home page. Naomi pink");
  if (req.url === "/") {
    res.end("Welcome to our page");
    return;
  }
  if (req.url === "/about") {
    res.end(" Here is our short history ABOUT ");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seen to find the page you are looking for.</p>
  <a href="/">Back Home</a>
   `);
});
server.listen(5000);
