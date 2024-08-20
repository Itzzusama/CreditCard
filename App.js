import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import React from "react";

import Routes from "./src/Routes";

import { persistor, store } from "./src/store";
import { COLORS } from "./src/utils/COLORS";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
