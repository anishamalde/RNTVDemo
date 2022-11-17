import React from "react";
import { VideoDataProvider } from "./src/Context/VideoDataContext";
import { VideoLandingPage, LandingPage, VideoPage } from "./src/Screens";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/data/types";

export default function App() {
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
    <VideoDataProvider>
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
    </VideoDataProvider>
  );
}
