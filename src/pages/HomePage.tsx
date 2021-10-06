import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Fade,
  chakra,
  Text
} from "@chakra-ui/react";
import Navbar from ".././components/Navbar";
import {
  ThemeEditorProvider,
  HyperThemeEditor
} from "@hypertheme-editor/chakra-ui";
import HeroRight from ".././components/HeroRight";
import HeroLeft from ".././components/HeroLeft";
import Heros from ".././components/Heros";
import VizSensor from "react-visibility-sensor"; // or use any other 3rd party plugin or define your own
import Feature from "../components/features/Feature";

import { useState } from "react";

export default function HomePage() {
  let [active, setActive] = useState(false);
  return (
    <>
      <Box textAlign="center" minH="50vh" fontSize="xl" p={4}>
        <Heros />
        <VizSensor
          onChange={(isVisible) => {
            if (active) return;
            console.log("visible");
            setActive(isVisible);
          }}
          offset={{ bottom: -250 }}
        >
          <Fade in={active} unmountOnExit={false}>
            <HeroRight
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
