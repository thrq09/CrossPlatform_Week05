import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getPosts } from './services/axios';
import Forms from './form';

const Stack = createNativeStackNavigator();

function Posts({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      if (res && res.data) {
        setPosts(res.data);
      }
    });
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Forms', { post: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Forms" component={Forms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    alignSelf: 'center',
  },
});