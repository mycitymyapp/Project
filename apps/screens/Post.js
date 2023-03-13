import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View, TouchableOpacity,document, FlatList, ScrollView } from 'react-native';
import Home from './Home';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export function Post({navigation}) {
  // Declare a new state variable, which we'll call "count"
    const route = useRoute();
    const { EditId } = route.params;
    const [count, setCount] = useState(0);
    const [isLoading,setIsLoading]= useState(true);
    const [myUserdata,setMyUserdata]= useState([]);

    const getUserdata = async () => {
        try {
            const {id} = route.params;
            const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
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

     const submit = () => {
        navigation.navigate("Post"); 
    }

//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

return (
    
    <FlatList
    data={myUserdata.filter(item => item.id === EditId)}
    // keyExtractor= {(index) => {return index.id;}}
    renderItem={({ item }) => {
        return(
            
            <View >
                <View style={styles.containernavbar2}>
<TouchableOpacity style={{left: 10}} onPress={() => returnback()}>
<Ionicons name="ios-arrow-back" size={30} color="#000" />
</TouchableOpacity>
<Text style={{fontSize: 20, fontWeight: "bold", left:40}}>Posts </Text>
<TouchableOpacity style={{left: 220}} onPress={() => navigation.navigate('Post', {EditId: item.id})}>
<Text style={{fontSize: 20, color:"tomato"}}>Edit</Text>
</TouchableOpacity>
</View>
                
                <View style={{borderBottomColor: "white", borderBottomWidth: 1}}>
                <Image source={{uri: item.image}} style={{width: 300, height: 250, left : 30,top: 0}}/>
                </View>
                {/* <View style={{top:10, left: 10}}> */}
                <View style={styles.container}>
                <View style={{flexDirection:"row", }}>
                <Text style={{fontSize:18, fontWeight: "600"}}>Category:</Text>
                <TextInput style={styles.input}>{item.name}</TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18, fontWeight: "600"}}>Sub Category:</Text>
                <TextInput style={styles.input}>{item.email}</TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18, fontWeight: "600"}}>Brand:</Text>
                <TextInput style={styles.input}>{item.website}</TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18, fontWeight: "600"}}>Price:</Text>
                <TextInput style={styles.input}>{item.mobile}</TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18, fontWeight: "600"}}>Discount:</Text>
                <TextInput style={styles.input}>{item.id}</TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18, fontWeight: "600"}}>Description:</Text>
                <TextInput style={styles.input}>{item.description}</TextInput>
                </View>
            
                </View>
            </View>
            
        );
    }}
    />
    
);
}
const styles = StyleSheet.create({
    container:{
        textAlign: "center",
         top: 10,
         left: 10,
         marginRight: 10,

    },
    containernavbar: {
        paddingTop: 50,
        left: 0,
        right: 20,
        paddingBottom: 20,
        overlayColor: "black",
        shadowColor: "black",
        borderEndColor : "black",
        backgroundColor: "white",
        
       },

       input: {
        fontSize:20, 
        fontWeight: "300", 
        borderBottomWidth: 1

      },

       containernavbar2: {
        paddingTop: 50,
        left: 0,
        right: 20,
        paddingBottom: 20,
        overlayColor: "black",
        shadowColor: "black",
        borderEndColor : "black",
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
      
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

export default Post;