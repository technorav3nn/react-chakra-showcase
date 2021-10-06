"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const express_1 = tslib_1.__importDefault(require("express"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const music_1 = require("./routes/music");
const passport_discord_1 = require("passport-discord");
const app = express_1.default();
app.use(express_session_1.default({
    secret: "test",
    resave: false,
    saveUninitialized: false,
}));
app.use("/music", music_1.router);
app.use(cors_1.default({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(cookie_parser_1.default());
const prompt = "consent";
const scope = ["identify", "email", "guilds", "guilds.join"];
const callbackURL = "http://localhost:4000/callback";
passport_1.default.use(new passport_discord_1.Strategy({
    clientID: "861271636907917322",
    clientSecret: "ylMvTie5cpccS0gNcYKRNe0fQKAwVbAz",
    callbackURL,
    scope,
}, function (_accessToken, _refreshToken, profile, done) {
    process.nextTick(function () {
        return done(null, profile);
    });
}));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (obj, done) {
    done(null, obj);
});
app.get("/login", passport_1.default.authenticate("discord", { scope: scope, prompt: prompt }), function (_req, _res) { });
app.get("/callback", passport_1.default.authenticate("discord", { failureRedirect: "/" }), function (_req, res) {
    res.redirect("http://localhost:3000/menu");
});
app.get("/user", (req, res) => {
    if (req.user) {
        res.send(req.user);
    }
    else {
        res.status(401).send("Unauthorized");
    }
});
app.listen(4000, () => console.log("Port 4000 listening lol"));
