import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SelectImage = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [isLoading,setIsLoading]= useState(true);
  const [myUserdata,setMyUserdata]= useState();
  const [selectedId, setSelectedId] = useState(1);


  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        // const result = await ImagePicker.launchCameraAsync({

        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) { 
        setSelectedImage(result);
        navigation.navigate('DisplayImage', { imageUri: result });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        // const result = await ImagePicker.launchCameraAsync({

        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) { 
        setSelectedVideo(result);
        navigation.navigate('DisplayImage', { imageUri: result });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserdata = async () => {
    try {
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
  
  navigation.navigate("EditProfile"); 
 
 }

 const selectimg = () => {
  
  navigation.navigate("ProductList"); 
 }


  return (
    <View>
<View style={styles.containernavbar}>
        <Text style={{fontSize: 20, fontWeight: "bold", top: 5, left: 20}}>OTO - Shopname </Text>
        </View>
        <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => { pickImage();}}>
        {/* <TouchableOpacity> */}
        <Image
          style={styles.tinyLogo}
          source={{
            // uri: 'https://p.kindpng.com/picc/s/109-1095065_camera-cam-device-photo-shot-mode-mobile-phone.png',
          }}
        />
        </TouchableOpacity>
        {/* {image && <Image source={{ uri: image }} style={{width: 100,
      height: 100,
      top: -70,
      // left:15,
      borderRadius: 180}} />} */}
    {/* <View> */}
    <View style={{alignItems:"center"}}>
        
        <Text style={{fontSize: 25, fontWeight: "bold", top: -76, left: -10,}}>10</Text>
        <Text style={{fontSize: 25, fontWeight: "bold", top: -110, left: 85}}>2000</Text>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize: 20, top: -115, left: -10}}>Posts</Text>
        <Text style={{fontSize: 20, top: -142, left: 85}}>Followers</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
    <Text style={{textAlign: "center", fontWeight: "bold"}}>Edit Profile</Text>
    </TouchableOpacity>
    </View>
    
    <View style={{width: 150, height: 100, backgroundColor: "#ebe8e8", top:-190, left: 20}}>
        <TouchableOpacity onPress={() => {selectImage();}}>
        {/* <TouchableOpacity> */}
        <Image
          style={{width: 70, height:70, left: 40, top: 5}}
          source={require("../assets/upload.png")}
        />
        <Text style={{fontSize: 20,fontWeight: "200", textAlign: "center"}}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: 150, height: 100, backgroundColor: "#ebe8e8", top:-290, left: 190}}>
        <TouchableOpacity onPress={() => { selectVideo();}}>
        {/* <TouchableOpacity> */}
        <Image
          style={{width: 70, height:70, top: 0, right: -40}}
          source={require("../assets/video-call.png")}
        />
        <Text style={{fontSize: 20, fontWeight: "200" ,textAlign: "center"}}>Upload Video</Text>
        </TouchableOpacity>
    </View>
    {isLoading ? (<View><ActivityIndicator/></View>) : 
  (
    <View>
    <FlatList 
    style={styles.containerimage}
                    data={myUserdata}
                    keyExtractor= {(index) => {return index.id;}}
                    numColumns={3}
                    renderItem={({ item }) => {
                      return(
                        
                      <View style={{paddingBottom:2, paddingRight: 2}}>
                        
                       
                                {/* <Text style={{fontSize:20}}>{item.id}</Text>
                                <Text style={{fontSize:20}}>{item.name}</Text> */}
                                {/* <Text>{item.surname}</Text> */}
                                {/* <TouchableOpacity onPress={() => selectimg()}> */}
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList', {selectedId: item.id})}>
                                  {/* <Text style={{fontSize:20}}>{item.id}</Text>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                               <Text>{item.surname}</Text> */}
                                <Image source={{uri: item.image}} style={{width: 118, height: 118, top: 0}}/> 
                                </TouchableOpacity>
                            </View>
                            );
                    }}
                    />
                    </View>
  )} 
                    {/* </View> */}
                    </ScrollView>
      </View>
  );
};

const DisplayImage = ({ route }) => {
  const { imageUri } = route.params;
  const [Category, setCategory] = useState("");
  const [Subcategory, setSubcategory] = useState("");
  const [Brand, setBrand] = useState("");
  const [Price, setPrice] = useState("");
  const [Discount, setDiscount] = useState("");
  const [Description, setDescription] = useState("");

  // const selectedImage = route.params.selectedImage;
  // if (!imageUri) return null;
  return (
    <View>
      <View style={styles.containernavbar2}>
      <TouchableOpacity style={{left: 10}}>
      <Ionicons name="ios-arrow-back" size={30} color="#000" />
    </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: "bold", left: 40}}>New Product </Text>
        <TouchableOpacity style={{left: 165}}>
      <Ionicons name="ios-checkmark-sharp" size={30} color="tomato" />
    </TouchableOpacity>
        </View>
      <View style={styles.container3}>
      <Image source={{ uri: imageUri.uri }} style={{ width: '100%', height: '40%' }} />
      <View  style={styles.container2}>
      <Text style={styles.label}>Category :</Text>
      <TextInput style={styles.input} value={Category} onChangeText={ (actualdata) => setCategory(actualdata)} placeholder="Select Category"/>
      </View>
      <View  style={styles.container2}>
      <Text style={styles.label}>Sub Category :</Text>
      <TextInput style={styles.input} value={Subcategory} onChangeText={ (actualdata) => setSubcategory(actualdata)} placeholder="Select Sub Category"/>
      </View>
      <View  style={styles.container2}>
      <Text style={styles.label}>Brand :</Text>
      <TextInput style={styles.input} value={Brand} onChangeText={ (actualdata) => setBrand(actualdata)} placeholder="Enter Brand name"/>
      </View>
      <View  style={styles.container2}>
      <Text style={styles.label}>Price :</Text>
      <TextInput style={styles.input} value={Price} onChangeText={ (actualdata) => setPrice(actualdata)} placeholder="Enter Price"/>
      </View>
      <View  style={styles.container2}>
        <Text style={styles.label}>Discount :</Text>
      <TextInput style={styles.input} value={Discount} onChangeText={ (actualdata) => setDiscount(actualdata)} placeholder="Enter Discount"/>
      </View>
      <View  style={styles.container2}>
      <Text style={styles.label}>Description :</Text>
      <TextInput style={styles.input} value={Description} onChangeText={ (actualdata) => setDescription(actualdata)} placeholder="Enter Description" multiline={true} numberOfLines={4}/>
      </View>
    </View>
    </View>
  );
};

const Stack = createStackNavigator();

const AuthOTP = () => {
  return (
    
      <Stack.Navigator initialRouteName="SelectImage">
        <Stack.Screen name="SelectImage" component={SelectImage} options={{ headerShown: false }} />
        <Stack.Screen name="DisplayImage" component={DisplayImage} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DisplayImage" component={DisplayImage} options={({ route }) => ({ title: `Image` })}/> */}

      </Stack.Navigator>
    
  );
};

const styles = StyleSheet.create({
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
   container: {
    paddingTop: 50,
    left: 20,
    right: 20,
    top: -50,
   },

   container3: {
    padding: 20,
    top:-20,
   },

   label: {
    fontWeight: 'bold',
  },
   containerHeader: {
    paddingBottom: 50,
    bottom: 140,
    backgroundColor: "white",
    
   },

   containerimage: {
    paddingTop: 50,
    left: 1,
    top: -330,
    
   },

  tinyLogo: {
    width: 100,
    height: 100,
    top: 30,
    // left:15,
    borderRadius: 180,
    borderColor: 'black',
    borderWidth: 2,
  },
  
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
    borderRadius: 10,
    // backgroundColor: "#E4715A",
    top: -144,
    alignItems: "center",
    left: 137,
    
    
},

input: {
  height: 40,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        width: 200,
        borderRadius: 10,
        left: 10,
        
},

container2: {
  flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    top: 10,
    
},

  


})

export default AuthOTP;
