import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import TestPage from "./pages/MenuPage";
import Navbar from "./components/ui/Navbar";

import {
  ThemeEditorProvider,
  HyperThemeEditor,
} from "@hypertheme-editor/chakra-ui";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <ThemeEditorProvider>
        <HyperThemeEditor pos="fixed" bottom={4} right={2} />
      </ThemeEditorProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/menu">
            <TestPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
