import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files correctly
app.use(express.static(path.join(__dirname, "public")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Local only
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Required for Vercel
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

