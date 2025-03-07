import React from "react";
import {View, Text, Button} from "react-native";

const Meet5_profile = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent:"center", alignItems :"center"}}>
            <Text>Profile</Text>
             <Button title="Pindah ke Home" onPress={()=>navigation.navigate("Home")}></Button>
        </View>
    );
};

export default Meet5_profile