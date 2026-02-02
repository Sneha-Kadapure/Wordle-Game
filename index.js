import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

// ✅ LOCAL ONLY: listen on port
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// ✅ REQUIRED for Vercel
export default app;



























// import express from "express";

// const app = express();
// const port = 3000;

// app.use(express.static("public"));

// app.get("/",(req,res)=>{
//     res.render("index.ejs");
// });

// app.listen(port,()=>{
//     console.log(`Server Running at ${port}`);
// });

