import React, { useEffect, useState } from "react";
import {View, Text, Dimensions, Alert, Platform} from "react-native";
import Animated, {useSharedValue, withSpring, useAnimatedStyle, withTiming, Easing, ReduceMotion} from "react-native-reanimated";

const Meet7_lat1 = () => {
    const lebarScreen = Dimensions.get("window").width;
    const panjangScreen = Dimensions.get("window").height;
    const [infoOrientasi, setInfoOrientasi] = useState("potrait");

    const posXtiming = useSharedValue(-200);
    const posXspring = useSharedValue(200);

    const AnimasiStyle1 = useAnimatedStyle(()=> ({
        transform:[{translateX:posXtiming.value}],
    }));

    const AnimasiStyle2 = useAnimatedStyle(()=> ({
        transform:[{translateX:posXspring.value}],
    }));

    useEffect(()=>{
        const orientasiBerubah = () => {
            // Alert.alert("berubah orientasi");
            const {width, height} = Dimensions.get("window");
            if(width > height) {
                setInfoOrientasi("Layar kamu landscape !!!");
            } else {
                setInfoOrientasi("Layar kamu potrait !!!");
            }
        };

        Dimensions.addEventListener("change", orientasiBerubah)

        posXspring.value = withSpring(0, ({ damping:10, stiffness:100 }))
        posXtiming.value = withTiming(0, {
            duration: 3000,
            easing: Easing.bounce,
            reduceMotion: ReduceMotion.System,
        })
    });

    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text>Hallo</Text>
            <Text>Lebar Screen : {lebarScreen}</Text>
            <Text>Panjang Screen : {panjangScreen}</Text>
            <Text>Orientasi Device : {infoOrientasi}</Text>
            <Animated.Text style={AnimasiStyle2}>Your OS : {Platform.OS}</Animated.Text>
            <Animated.Text style={AnimasiStyle1}>OS Version : {Platform.Version}</Animated.Text>
        </View>
    );
};

export default Meet7_lat1;