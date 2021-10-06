import { Router } from "express";
import axios from "axios";
import path from "path";

export const router = Router();

router.get("/api/queue/:guildId", (req, res) => {});

// Main page routes

router.get("/players/:guildId", async (req, res) => {
    const data = await axios.get(`http://localhost:5000/`);
});
