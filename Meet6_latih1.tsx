import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Switch} from "react-native";
import PropTypes from "prop-types";
// import { TextInput } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Meet6_latih1 = () => {
    const Tampil_data = ({nama, umur}) => {
        return (
            <View>
                <Text>Nama : {nama}</Text>
                <Text>Umur : {umur}</Text>
            </View>
        );
    };
    const [selectedLanguage, setSelectedLanguage] = useState();

    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    Tampil_data.propTypes = {
        nama:PropTypes.string,
        umur:PropTypes.number,
    };

    return (
        <View style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text>Hai</Text>
            <Tampil_data nama="Wira" umur={15} />

           <TextInput placeholder="Ini Input" keyboardType="default" returnKeyType="search" style={styles.inputan}/>
           <TextInput placeholder="Ini Umur" keyboardType="numeric" style={styles.inputan}/>
           <TextInput placeholder="Ini Email" keyboardType="email-address" style={styles.inputan}/>
           <TextInput placeholder="Ini Url" keyboardType="url" style={styles.inputan}/>
           <TextInput placeholder="Ini Password" keyboardType="visible-password" style={styles.inputan}/>

           <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }style={{width:200}}
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <RNDateTimePicker mode="time" value={new Date()} display="spinner"/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputan: {
        borderColor:"Black",
        borderWidth:1,
        width:200,
    }
});

export default Meet6_latih1