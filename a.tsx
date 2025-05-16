import React, { useEffect, useState } from "react";
import {View, Text} from "react-native";



const Meet8 = () => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>response.json())
        .then((json)=>{
            setData(json);
        })
        .catch((error)=> {
            console.error("Ini ada error", error)
        });
    }, []);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Hi</Text>
          {data ? (
            <>
              <Text>{data.userId}</Text>
              <Text>{data.id}</Text>
              <Text>{data.title}</Text>
              <Text>{data.body}</Text>
            </>
          ) : (
            <Text>Error</Text>  
          )}
        </View>
      );
    };
    export default Meet8;