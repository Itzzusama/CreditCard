import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import PageThree from "./src/screens/PageThree";
import PageOne from "./src/screens/PageOne";
import PageTwo from "./src/screens/PageTwo";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="PageTwo" component={PageTwo} />
        <Stack.Screen name="PageThree" component={PageThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
