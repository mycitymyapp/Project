import React, { useState } from 'react';
import { Image, StyleSheet, View, Button,TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Photu = () => {
  const [id,setID] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
console.log(image);
  const handleImagePicker = async () => {
    // Code to pick an image from the device's library
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].base64);
    }
  };

  const handleUploadImage = () => {
    // Convert the base64 image to a Blob object
    const imageBlob = new Blob([image], { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('image', imageBlob, 'image.jpeg');

    fetch('https://fdb3-103-117-61-41.in.ngrok.io/cret', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Image successfully uploaded to database:', data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={caption} onChangeText={ (actualdata) => setCaption(actualdata)}placeholder="Enter Shop Name"/>
      <TextInput style={styles.input} value={id} onChangeText={ (actualdata) => setID(actualdata)}placeholder="Enter Contact Number"/>
      <Image
        source={{ uri: `data:image/jpeg;base64,${image}` }}
        style={styles.image}
      />
      <Button title="Pick Image" onPress={handleImagePicker} />
      <Button title="Upload Image" onPress={handleUploadImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});


// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

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

// const Photu = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SelectImage">
//         <Stack.Screen name="SelectImage" component={SelectImage} />
//         <Stack.Screen name="DisplayImage" component={DisplayImage} options={({ route }) => ({ title: `Image` })}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default Photu;
