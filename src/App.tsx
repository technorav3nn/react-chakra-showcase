import * as React from "react";
import { ChakraProvider, Box, Button, Grid, theme } from "@chakra-ui/react";
//import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Navbar from "./components/Navbar";
import { ThemeEditorProvider, HyperThemeEditor } from "@hypertheme-editor/chakra-ui";
import Section from "./components/Section";
import Heros from "./components/Heros";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Navbar />
        <ThemeEditorProvider>
            <HyperThemeEditor pos="fixed" bottom={4} right={2} />
        </ThemeEditorProvider>
        <Box textAlign="center" minH="50vh" fontSize="xl" p={4}>
            <Heros />
        </Box>
    </ChakraProvider>
);
