import * as React from "react";
import { Box, Fade } from "@chakra-ui/react";
import HeroLandingPage from "../components/sections/HeroLandingPage";
import MainInviteSection from "../components/sections/MainInviteSection";
import VizSensor from "react-visibility-sensor";
import Feature from "../components/features/Feature";

import { useState } from "react";

export default function HomePage() {
  let [active, setActive] = useState(false);
  return (
    <>
      <Box textAlign="center" minH="50vh" fontSize="xl" p={4}>
        <MainInviteSection />
        <VizSensor
          onChange={(isVisible) => {
            if (active) return;
            console.log("visible");
            setActive(isVisible);
          }}
          offset={{ bottom: -250 }}
        >
          <Fade in={active} unmountOnExit={false}>
            <HeroLandingPage
              title="The most advanced music bot, ever."
              subtitle="Level up your server, for free, and listen to your favorite music at the same time."
            />
          </Fade>
        </VizSensor>
        <Feature />
      </Box>
    </>
  );
}
