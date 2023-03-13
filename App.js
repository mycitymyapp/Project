import React,{ useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Shop1 from './apps/screens/Shop1';
import Shop2 from './apps/screens/Shop2';
import Shop3 from './apps/screens/Shop3';
import Login from './apps/screens/Login';
import Home from './apps/screens/Home';
import Otp from './apps/screens/Otp';
import Tabu from './apps/screens/Tabu';
import Example from './apps/screens/Example';
import PostExample from './apps/screens/PostExample';
import EditProfile from './apps/screens/EditProfile';
import Product from './apps/screens/Product';
import Sampleotp from './apps/screens/Sampleotp';
import PostExample2 from './apps/screens/PostExample2';
// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthOTP from './apps/screens/AuthOTP';
import Exam2 from './apps/screens/Exam2';
import Exam1 from './apps/screens/Exam1';
import Iimage from './apps/screens/Iimage';
import Photu from './apps/screens/Photu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from './apps/screens/Post';
import DropDown from './apps/screens/DropDown';
import DropDown2 from './apps/screens/DropDown2';
import Fetch from './apps/screens/Fetch';
import Filter from './apps/screens/Filter';
import Sort from './apps/screens/Sort';
import Popup from './apps/screens/Popup';


// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // import React, { useState } from 'react';
// // import { View, Image, TouchableOpacity, Text } from 'react-native';
// // import * as ImagePicker from 'expo-image-picker';
// // import { createStackNavigator } from '@react-navigation/stack';

// // const MyComponent = ({ navigation }) => {
// //   const [image, setImage] = useState(null);

// //   const handleSelectImage = () => {
// //     ImagePicker.showImagePicker({}, (response) => {
// //       if (response.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else {
// //         setImage(response);
// //         navigation.navigate('Image', { imageUri: response.uri });
// //       }
// //     });
// //   };

// //   return (
// //     <View>
// //       <TouchableOpacity onPress={handleSelectImage}>
// //         <Text>Select Image</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const ImageScreen = ({ navigation }) => {
// //   return (
// //     <View>
// //       <Image
// //         source={{ uri: navigation.getParam('imageUri') }}
// //         style={{ width: 200, height: 200 }}
// //       />
// //     </View>
// //   );
// // };

// // const App = createStackNavigator({
// //   Main: {
// //     screen: MyComponent
// //   },
// //   Image: {
// //     screen: ImageScreen
// //   },
// // });

// // export default App;



// const SelectImage = ({ navigation }) => {
//   const [selectedImage, setSelectedImage] = useState(null);



//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         // const result = await ImagePicker.launchCameraAsync({

//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         aspect: [4, 3],
//         quality: 1,
//       });
//       console.log(result);
//       if (!result.canceled) { 
//         setSelectedImage(result);
//         navigation.navigate('DisplayImage', { imageUri: result });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   return (
//     <View>
//       <Button title="Select Image" onPress={selectImage} />
//     </View>
//   );
// };

// const DisplayImage = ({ route }) => {
//   const { imageUri } = route.params;
//   // const selectedImage = route.params.selectedImage;
//   // if (!imageUri) return null;
//   return (
//     <View>
//       <Image source={{ uri: imageUri.uri }} style={{ width: '80%', height: '80%' }} />
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SelectImage">
//         <Stack.Screen name="SelectImage" component={SelectImage} />
//         <Stack.Screen name="DisplayImage" component={DisplayImage} options={({ route }) => ({ title: `Image` })}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// import React, { useState } from 'react';
// import { View, Image, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const MainScreen = ({ navigation }) => {
//   const [image, setImage] = useState(null);

//     const selectImage = async () => {
//     try {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
//       console.log(result);

//       if (!result.canceled) {
//         setImage(result.assets[0].uri);
//         navigation.navigate('ImageScreen', { image });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Select Image" onPress={selectImage} />
//     </View>
//   );
// };

// const ImageScreen = ({ route }) => {
//   const { image } = route.params;
//   return (
//     <View>
//       <Image source={{ uri: image.uri }} style={{ width: '100%', height: '100%' }} />
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="Main" component={MainScreen} />
//         <Stack.Screen name="ImageScreen" component={ImageScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { View, Button, Image, TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { createStackNavigator } from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';


// const App = () => {
//   const [image, setImage] = useState(null);

//   const handleChooseImage = async () => {
//     try {
      
//         let result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           allowsEditing: true,
//           aspect: [4, 3],
//           quality: 1,
//         });
//         if (!result.canceled) {
//           setImage(result.assets[0].uri);
        
//       }
//     } catch (E) {
//       console.log(E);
//     }
//   };

//   const Stack = createStackNavigator();

//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         initialParams={{ image, handleChooseImage }}
//       />
//       <Stack.Screen name="ImageScreen" component={ImageScreen} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const HomeScreen = ({ navigation, route }) => {
//   const { image, handleChooseImage } = route.params;
//   return (
//     <View>
//       <Button title="Choose Image" onPress={handleChooseImage} />
//       {image && (
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ImageScreen', { image })}>
//           <Image
//             source={{ uri: image}}
//             style={{ width: 200, height: 200 }}
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const ImageScreen = ({ route }) => {
//   const { image } = route.params;
//   return <Image source={{ uri: image }} style={{ flex: 1 }} resizeMode="contain" />;
// };

// export default App;

export function NavTab() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'OTO - Shopname') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'ios-calculator' : 'ios-calculator-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Support') {
              iconName = focused ? 'ios-chatbox' : 'ios-chatbox';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Payment" component={Otp} />
        <Tab.Screen name="Settings" component={Example} />
        <Tab.Screen name="Support" component={Login} />
      </Tab.Navigator>
  );
}

export function App (){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const mobileNumber = await AsyncStorage.getItem('mobileNumber');
      const loginStatus = await AsyncStorage.getItem('isLoggedIn');
      if (mobileNumber && loginStatus === 'true') {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    // Clear the auth token from local storage or AsyncStorage
    await AsyncStorage.removeItem('mobileNumber');
    setIsLoggedIn(false);
  };

  const Stack = createNativeStackNavigator();

  
  return (

    <NavigationContainer>
      
       <Stack.Navigator initialRouteName= "Login" >
      {/* {isLoggedIn ? (
        <Stack.Screen name="Home" component={Login} options={{ headerShown: false }}/>
      ) : (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      )}
      <Stack.Screen name="ProductList" component={Product} options={{ headerShown: false }}/>
      <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="Home2" component={NavTab} options={{ headerShown: false }}/> */}


        <Stack.Screen name="Home" component= {Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Exam1" component={NavTab} options={{ headerShown: false }} />
        <Stack.Screen name="Home2" component={Shop1} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductList" component={Product} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>

    
     
  );
};

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkSession = async () => {
//       const session = await AsyncStorage.getItem('session');
//       if (session) {
//         setIsLoggedIn(true);
//       }
//     };
//     checkSession();
//   }, []);

//   return (
//     <View style={{top: 200}}>
//       {isLoggedIn ? <HomePage /> : <Login />}
//     </View>
//   );
// };

export default App;


// export default function App() {
//   console.log("App Executed")

//   return (
//      <Shop1/>
    // <Shop2/>
    // <Shop3/>,
    // <Login/>
    // <FetchAPIExample/>
    
//   );
// }
  