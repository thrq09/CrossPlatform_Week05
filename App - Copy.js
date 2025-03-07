import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Meet5_home from './Meet5_home';
import Meet5_profile from './Meet5_profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigasiDasar />
    // <NavigasiBottom />
    <NavigasiDrawer />
  );
}

const NavigasiDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Meet5_home} />
        <Drawer.Screen name="Profile" component={Meet5_profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const NavigasiBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Meet5_home} />
        <Tab.Screen name="Profile" component={Meet5_profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const NavigasiDasar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Meet5_home} />
        <Stack.Screen name="Profile" component={Meet5_profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
