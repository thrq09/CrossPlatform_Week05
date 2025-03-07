import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Switch as PaperSwitch } from "react-native-paper";
import userData from "./data.json";
import styles from "./styles";
import UserCard from "./UserCard";
import UserProfile from "./UserProfile";

const Drawer = createDrawerNavigator();

const images = {
  "Reynata Prajnadi T": require("./assets/Rey.jpeg"),
  "Louis Gabriel H": require("./assets/Louis.jpeg"),
  "Mohammad Rasyedo M": require("./assets/Edo.jpeg"),
  "Richard Paskah": require("./assets/Icad.jpeg"),
  "Michael Tio": require("./assets/Tio.jpeg"),
  "Calvin Rustiano": require("./assets/akiong.png"),
  "M Rafi Caesy Susanto": require("./assets/Keshi.jpeg"),
};

const HomeScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "black" : "white" }]}>
      <PaperSwitch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} style={{ margin: 20 }} />

      <ScrollView style={{ backgroundColor: isDarkMode ? "#111" : "white" }}>
        {userData.map((user) => (
          <UserCard key={user.id} user={user} isDarkMode={isDarkMode} images={images} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
