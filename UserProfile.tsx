import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  UserProfile: { user: { id: string; name: string }; images: Record<string, any>; isDarkMode: boolean };
};

type Props = NativeStackScreenProps<RootStackParamList, "UserProfile">;

const UserProfile: React.FC<Props> = ({ route, navigation }) => {
  const { user, images, isDarkMode } = route.params;
  const userImage = images[user.name] || images["Default"];

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>

      <View style={styles.content}>
        <Image source={userImage} style={styles.avatar} />
        <Text style={[styles.name, { color: isDarkMode ? "white" : "black" }]}>{user.name}</Text>
        <Text style={[styles.text, { color: isDarkMode ? "#bbb" : "black" }]}>ID: {user.id}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Back" color={isDarkMode ? "#bbb" : "#007AFF"} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default UserProfile;
