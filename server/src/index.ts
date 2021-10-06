import session from "express-session";
import passport from "passport";
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { router as MusicRouter } from "./routes/music";

//@ts-ignore
import { Strategy as DiscordStrategy } from "passport-discord";

const app: Express = express();
app.use(
    session({
        secret: "test",
        resave: false,
        saveUninitialized: false,
    })
);

app.use("/music", MusicRouter);

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

const prompt = "consent";
const scope = ["identify", "email", "guilds", "guilds.join"];

const callbackURL = "http://localhost:4000/callback";

passport.use(
    new DiscordStrategy(
        {
            clientID: "861271636907917322",
            clientSecret: "ylMvTie5cpccS0gNcYKRNe0fQKAwVbAz",
            callbackURL,
            scope,
        },
        function (
            _accessToken: any,
            _refreshToken: any,
            profile: any,
            done: (arg0: null, arg1: any) => any
        ) {
            process.nextTick(function () {
                //@ts-ignore
                return done(null, profile);
            });
        }
    )
);

passport.serializeUser(function (user: any, done: (arg0: null, arg1: any) => void) {
    done(null, user);
});
passport.deserializeUser(function (obj: any, done: (arg0: null, arg1: any) => void) {
    // @ts-ignore
    done(null, obj);
});

app.get(
    "/login",
    passport.authenticate("discord", { scope: scope, prompt: prompt }),
    function (_req, _res) {}
);
app.get(
    "/callback",
    passport.authenticate("discord", { failureRedirect: "/" }),
    function (_req, res) {
        res.redirect("http://localhost:3000/menu");
    } // auth success
);

app.get("/user", (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send("Unauthorized");
    }
});

app.listen(4000, () => console.log("Port 4000 listening lol"));

declare global {
    namespace Express {
        interface User {
            id: `${bigint}`;
            guilds: any[];
            username: string;
        }
    }
}
