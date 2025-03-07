import React from "react";
import { View, Text, Image, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";

type User = {
  id: string;
  name: string;
};

type Props = {
  user: User;
  isDarkMode: boolean;
  navigation: NativeStackNavigationProp<any>;
  images: Record<string, any>;
};

const UserCard: React.FC<Props> = ({ user, isDarkMode, navigation, images }) => {
  const userImage = images[user.name] || images["Default"];

  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? "#222" : "#fff" }]}>
      <Image source={userImage} style={styles.avatar} />
      <View>
        <Text style={[styles.boldText, { color: isDarkMode ? "white" : "black" }]}>{user.name}</Text>
        <Text style={{ color: isDarkMode ? "white" : "black" }}>ID: {user.id}</Text>

        <Button 
          title="Learn More" 
          color={isDarkMode ? "#bbb" : "#007AFF"}
          onPress={() => navigation.navigate("UserProfile", { user, images, isDarkMode })}
        />
      </View>
    </View>
  );
};

export default UserCard;
