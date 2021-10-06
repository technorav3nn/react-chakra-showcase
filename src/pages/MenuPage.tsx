import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as cookieUtils from "../utils/cookies";

export default function MenuPage() {
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>Lol</>;
}
