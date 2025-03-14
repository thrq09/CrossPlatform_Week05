import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, returnKeyType = "done" }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.inputan}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={"done"} 
      />
    </View>
  );
};

const Input02 = ({ label, value, onChangeText, placeholder, returnKeyType = "done" }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.inputan}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        returnKeyType={"done"} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputan: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: 250,
  },
});

export {Input, Input02};
