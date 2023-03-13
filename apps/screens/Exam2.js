import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View, TouchableOpacity,document, FlatList } from 'react-native';

const Exam2 = () => {
    const [selectedId, setSelectedId] = useState(1);
    const navigation = useNavigation();
    const [myUserdata,setMyUserdata]= useState();

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

    return (
        <View style={{paddingBottom:2, paddingRight: 2, top: 100}} >
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setSelectedId(text)}
                value={selectedId}
                keyboardType='numeric'
            />
            <Button
                title='Go to Example'
                onPress={() => navigation.navigate('Exam1', { selectedId })}
            />
            <FlatList 
                    data={myUserdata}
                    renderItem={({ item }) => {
                        return(
                            <View >
                                <TouchableOpacity onPress={() => navigation.navigate('Exam1', { selectedId : item.id })}>
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
            
    )
};

export default Exam2;