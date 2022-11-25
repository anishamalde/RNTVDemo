import React from "react";
import { VideoLandingPage, LandingPage, VideoPage } from "./src/Screens";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/data/types";
// import { withIAPContext, useIAP } from 'react-native-iap';

const App = () => {
  
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#232F3E",
      text: "white",
    },
  };

  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Videos" component={VideoLandingPage} />
          <Stack.Screen name="VideoPlayerPage" component={VideoPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
// export default withIAPContext(App);
export default App