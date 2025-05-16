import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { updatePost } from './services/axios';

export default function Forms() {
  type RouteParams = {
    params: {
      post: {
        id: number;
        title: string;
        body: string;
      };
    };
  };

  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const navigation = useNavigation();
  const { post } = route.params;

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = async () => {
    try {
      const response = await updatePost(post.id, { title, body });
      if (response.status === 200) {
        Alert.alert('Success', 'Post updated successfully!', [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update post.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        multiline
      />
      <View style={styles.button}>
        <Button title="UPDATE POST" onPress={handleUpdate} />
      </View>
      <View style={styles.button}>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
  button: {
    marginBottom: 10,
  },
});