import React, { useState, useEffect } from "react";
import axios from "axios";
import useAsyncEffect from "use-async-effect";

import { IPlayerResponse } from "../types/types";
import Card from "../components/ui/Card";
import {
  Badge,
  Box,
  Center,
  chakra,
  Grid,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

// import * as cookieUtils from "../utils/cookies";

export default function MenuPage() {
  const [user, setUser] = useState<any>(null);
  const [players, setPlayers] = useState<Partial<IPlayerResponse>[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const getUserPromise = () =>
    axios.get("http://localhost:4000/user", {
      withCredentials: true,
    });
  const getPlayerPromise = (guildId: any) =>
    axios.get(`http://localhost:4000/player/${guildId}`);

  useAsyncEffect(async (isMounted) => {
    const { data: userData } = (await getUserPromise()) as any;
    const guildIds = userData.guilds.map((guild: any) => guild.id);

    for (const guildId of guildIds) {
      let idx = 0;
      const result = await getPlayerPromise(guildId);
      const data = result.data as IPlayerResponse;

      if ((result.data as IPlayerResponse).info !== null) {
        console.log(guildId);
        setPlayers(() => [
          {
            ...data,
            avatar: `https://cdn.discordapp.com/icons/${guildId}/${
              userData.guilds.find((e: any) => e.id === guildId).icon
            }`,
          },
        ]);
      }
      idx++;
    }
    setLoading(false);
  }, []);
  if (loading)
    return (
      <>
        <Center>
          <Heading as="h2" fontSize={["2xl", "2xl", "3xl", "4xl"]}>
            Loading players...
          </Heading>
        </Center>
        <br />
        <Center>
          <Spinner size="xl" />
        </Center>
      </>
    );
  if (!players)
    return (
      <Center>
        <Heading as="h2" fontSize={["2xl", "2xl", "3xl", "4xl"]}>
          There are no current players inside the guilds you are in.
        </Heading>
      </Center>
    );
  return (
    <Center>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX="40px" spacingY="20px">
        {players.map((player) => (
          <Card
            title={`Player for Bot`}
            description="Click view to view the player"
            image={player.avatar!}
            buttonLink={"google.com"}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
}
