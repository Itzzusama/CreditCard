import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//screen
import CreateCard from "../screens/CreateCard";
import PageOne from "../screens/PageOne";
import PageTwo from "../screens/PageTwo";
import PageThree from "../screens/PageThree";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >

      <Stack.Screen name="PageOne" component={PageOne} />
      <Stack.Screen name="PageTwo" component={PageTwo} />
      <Stack.Screen name="PageThree" component={PageThree} />
      {/* <Stack.Screen name="PageOne" component={PageOne} /> */}
      <Stack.Screen name="CreateCard" component={CreateCard} />
    </Stack.Navigator>
  );
};

export default Routes;
