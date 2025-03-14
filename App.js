import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import {Input, Input02} from "./Input";

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  return (
    <View style={styles.container}>
      <Text>Masukkan Data Anda</Text>

      {/* Input untuk Nama (Default Keyboard) */}
      <Input
        label="Nama"
        value={name}
        onChangeText={setName}
        placeholder="Masukkan Nama"
        keyboardType="default"
        returnKeyType="search"
      />

      {/* Input untuk NIM (Numeric Keyboard) */}
      <Input02
        label="NIM"
        value={nim}
        onChangeText={setNim}
        placeholder="Masukkan NIM"
        keyboardType="numeric"
      />

      <Text>Nama: {name}</Text>
      <Text>NIM: {nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 10, // Memberikan jarak antar elemen
  },
});
