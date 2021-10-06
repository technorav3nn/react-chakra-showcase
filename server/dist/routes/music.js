"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = tslib_1.__importDefault(require("axios"));
const path_1 = tslib_1.__importDefault(require("path"));
exports.router = express_1.Router();
const client = require(path_1.default.resolve("C:\\Users\\User\\Desktop\\lavaclient-test\\lava-client-demo\\src\\index"));
exports.router.get("/api/queue/:guildId", (req, res) => {
    const guildId = req.params.guildId;
    if (!guildId)
        return res.json({ response: "You need a guild id!" });
    const player = client.music.players.get(guildId);
    if (!player)
        return res.json({ response: "That player doesnt exist!" });
    if (!player?.queue || !player?.channelId)
        return res.json({
            response: "That player doesnt have a a channel or queue!",
        });
    return res.json({ response: player.queue.tracks, status: "OK" });
});
exports.router.get("/players/:guildId", async (req, res) => {
    const guildId = req.params.guildId;
    const data = await axios_1.default.get(`http://localhost:3333/api/queue/${guildId}/`);
    res.send("ok");
});
