import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View, TouchableOpacity,document, FlatList } from 'react-native';

export function Example({navigation}) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isLoading,setIsLoading]= useState(true);
    const [myUserdata,setMyUserdata]= useState();
    const [selectedId, setSelectedId] = useState(1);

    const getUserdata = async () => {
        try {
            const response = await fetch('https://87e5-103-117-61-41.in.ngrok.io/testing');
            const myData = await response.json();
            setMyUserdata(myData);
            setIsLoading(false);
            console.log(myData);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getUserdata();
     },[]);

//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

  return (
    <View>
                    <FlatList 
                    data={myUserdata}
                    renderItem={({ item }) => {
                        return(
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList', { selectedId })}>
                                <Text style={{fontSize:20}}>{item.id}</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                                <Text style={{fontSize:20}}>{item.surname}</Text>
                                {/* <Text>{item.surname}</Text> */}
                                {/* <Image source={{uri: item.img}} style={{width: 50,
      height: 50,
      top: -70,
      // left:15,
      borderRadius: 180}}/>  */}
                            </View>
                        );
                    }}
                    />
                    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        textAlign: "center",
         justifyContent: "center",
         alignItems: "center",

    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        top: 100,
      },

      button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        backgroundColor: "#E4715A",
        top: 100,
        
        
        
    },

})

export default Example;