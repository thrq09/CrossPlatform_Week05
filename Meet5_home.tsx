import React from "react";
import {View, Text, Button} from "react-native";

const Meet5_home = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent:"center", alignItems :"center"}}>
            <Text>Home</Text>
            <Button title="Pindah ke profile" onPress={()=>navigation.navigate("Profile")}></Button>
        </View>
    );
};

export default Meet5_home