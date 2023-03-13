import React,{Component, useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View, ScrollView, TouchableOpacity, FlatList, ActivityIndicator, RootTagContext } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';   
import { launchImageLibraryAsync } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfile from './EditProfile';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';


const Fetch = () => {
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [isLoading,setIsLoading]= useState(true);
    const [myUserdata,setMyUserdata]= useState([]);
    const [selectedId, setSelectedId] = useState(1);
    const [isFocus, setIsFocus] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    const getUserdata = async () => {
      try {
        const mobileNumber = await AsyncStorage.getItem('mobileNumber');
        setMobileNumber(mobileNumber);
        console.log(mobileNumber);
        const response = await fetch(`https://fc4a-2402-e280-3d33-4a8-d4d5-6810-5d5e-38db.in.ngrok.io/GetVendor/${mobileNumber}`, {
          // Add any headers or auth tokens needed to access the API
        });
        const myData = await response.json();
        setMyUserdata(myData);
        setIsLoading(false);
        console.log(myData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserdata();
  }, []);

  const getSubcategories = () => {
    if (selectedCategory) {
      const selectedVendor = myUserdata.find((vendor) =>
        vendor.Categories.includes(selectedCategory)
      );
      if (selectedVendor) {
        return selectedVendor.SubCategories[selectedCategory].map((subcategory) => (
          <Picker.Item label={subcategory} value={subcategory} key={subcategory} />
        ));
      }
    }
    return null;
  };


//   return (
//     <View>
//       {isLoading ? (
//         <View>
//           <ActivityIndicator />
//         </View>
//       ) : (
        
        
//         <View style={{ top: 400 }}>
//           <FlatList
//             style={styles.containerimage}
//             data={myUserdata.filter(
//                 (item) => item.Categories.includes(selectedCategory) &&
//                          (!selectedSubcategory || item.SubCategories[selectedCategory]?.includes(selectedSubcategory))
//               )}
//             keyExtractor={(item) => item.ID}
//             ListHeaderComponent={
//               <Picker
//                 selectedValue={selectedCategory}
//                 onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
//               >
//                 <Picker.Item label="Select a category" value={null} />
//                 {myUserdata.map((item) =>
//                   item.Categories.map((category) => (
//                     <Picker.Item label={category} value={category} key={category} />
//                   ))
//                 )}
//               </Picker>
              
//             }
return (
    <View>
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{ top: 400 }}>
          <FlatList
            style={styles.containerimage}
            data={myUserdata.filter((item) => item.Categories.includes(selectedCategory))}
            keyExtractor={(item) => item.ID}
            ListHeaderComponent={
              <>
                <Picker
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedCategory(itemValue);
                    setSelectedSubcategory(null);
                  }}
                >
                  <Picker.Item label="Select a category" value={null} />
                  {myUserdata.map((item) =>
                    item.Categories.map((category) => (
                      <Picker.Item label={category} value={category} key={category} />
                    ))
                  )}
                </Picker>
                {selectedCategory && (
                  <Picker
                    selectedValue={selectedSubcategory}
                    onValueChange={(itemValue, itemIndex) => setSelectedSubcategory(itemValue)}
                  >
                    <Picker.Item label="Select a subcategory" value={null} />
                    {getSubcategories()}
                  </Picker>
                )}
              </>
            }
            
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 2, paddingRight: 2, flexWrap: 'wrap' }}>

                <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.ID}</Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.OwnerName}</Text>
                <Image source={{uri: item.ImageURL}} style={{width: 118, height: 118}}/> 

                {item.Products.map((product) => (
      <View key={product.ID}>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Category}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.SubCategory}</Text>
       <Image source={{uri: product.ImageURL}} style={{width: 118, height: 118}}/> 
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Brand}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Description}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Price}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Discount}</Text>
      </View>
    ))}

                <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.Categories.join(", ")}</Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.NewSubCategories}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
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
      top: -70,
     },
  
     container3: {
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
      top: -340,
      
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
      left: 20,
  },
  
    
  
  
  })

export default Fetch;