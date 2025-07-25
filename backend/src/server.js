import express from "express"
import "dotenv/config"
import { ENV } from "./config/env.js";

const app = express();
const PORT = ENV.PORT || 5001;


app.get("/", (req,res) => res.send("Hello world"))

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})