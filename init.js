import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000; // process.env.PORT를 못 찾으면 4000번으로 연결
const handleListening = () => console.log(`>>>> Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);