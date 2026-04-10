const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const HOST = "localhost";

// MIME types
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  // Remove query string from URL
  let filePath = req.url.split("?")[0];

  // Default to index.html
  if (filePath === "/") {
    filePath = "/index.html";
  }

  // Get the full file path
  const fullPath = path.join(__dirname, filePath);

  // Security: prevent directory traversal
  const realPath = path.resolve(fullPath);
  if (!realPath.startsWith(path.resolve(__dirname))) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("403 Forbidden");
    return;
  }

  // Try to read the file
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>404 - Page Not Found</title>
                        <style>
                            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                            h1 { color: #333; }
                            p { color: #666; }
                            a { color: #007bff; text-decoration: none; }
                        </style>
                    </head>
                    <body>
                        <h1>404 - Page Not Found</h1>
                        <p>Sorry, the page you're looking for doesn't exist.</p>
                        <a href="/">← Go back home</a>
                    </body>
                    </html>
                `);
      } else {
        // Server error
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`500 Server Error: ${err.message}`);
      }
      return;
    }

    // Get content type
    const ext = path.extname(fullPath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";

    // Set response headers
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache",
    });

    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║   Tech Solutions Uganda - Portfolio Server                 ║
╚════════════════════════════════════════════════════════════╝

✅ Server running at: http://${HOST}:${PORT}

📂 Portfolio Location: ${path.resolve(__dirname)}

🌐 Features:
   • Auto-refresh (F5 to reload)
   • Mobile-responsive design
   • Interactive animations
   • Contact form (client-side)

📝 How to use:
   1. Open your browser and navigate to: http://${HOST}:${PORT}
   2. Click through sections: Home, About, Products, Team, Financials, Contact
   3. Press Ctrl+C to stop the server

📊 Files served:
   • HTML: ${path.join(__dirname, "index.html")}
   • CSS: ${path.join(__dirname, "assets/css/style.css")}
   • JS: ${path.join(__dirname, "assets/js/main.js")}

💡 Pro Tips:
   • Use Ctrl+Shift+I to open browser DevTools
   • Try F12 for responsive design testing
   • Click social links to customize URLs

═════════════════════════════════════════════════════════════
`);
});

// Handle server errors
server.on("error", (err) => {
  console.error("Server Error:", err);
  process.exit(1);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n\n👋 Server shutting down...");
  server.close(() => {
    console.log("✅ Server stopped.");
    process.exit(0);
  });
});
