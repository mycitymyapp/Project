// import React, { useState } from 'react';
// import { View, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { encode as btoa, encode } from 'base-64';

// const PostExample2 = () => {
//   const [image, setImage] = useState(null);

//   const handlePickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: true,
//     });

//     if (!result.canceled) {
//         const base64Image = btoa(result.assets[0].base64);
//         setImage(base64Image);
      
//     }
//   };

//   const handleUpload = () => {
//     const base64Image = `data:image/jpg;base64,${encodeURIComponent(image)}`;
//     console.log(base64Image);
//     fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ image: base64Image }),
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('Image uploaded:', result);
//         Alert.alert('Image uploaded!');
//       })
//       .catch(error => {
//         console.error('Error uploading image:', error);
//         Alert.alert('Error uploading image!');
//       });
//   };

//   return (
//     <View style={{top:100}}>
//       {image && <Image source={{ uri: `data:image/png;base64,${image}` }} style={{ width: 200, height: 200 }} />}
//       <Button title="Pick an image" onPress={handlePickImage} />
//       <Button title="Upload" onPress={handleUpload} disabled={!image} />
//     </View>
//   );
// };

// export default PostExample2;

// import React, { useState } from 'react';
// import { View, Image, Button, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const PostExample2 = () => {
//     const [image, setImage] = useState(null);
  
//     const handlePickImage = async () => {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         quality: 1,
//         base64: true,
//       });
  
//       if (!result.canceled) {
//         const base64Image = result.assets[0].uri;
//         setImage(base64Image);
//       }
//     };
  
//     const handleUpload = async () => {
//       const base64Image = `data:image/jpg;base64,${image}`;
//       console.log(base64Image);
  
//       try {
//         const response = await fetch('https://example.com/upload', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ image: base64Image }),
//         });
  
//         const result = await response.json();
//         console.log('Image uploaded:', result);
//         Alert.alert('Image uploaded!');
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         Alert.alert('Error uploading image!');
//       }
//     };
  
//     return (
//       <View style={{top:100}}>
//         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//         <Button title="Pick an image" onPress={handlePickImage} />
//         <Button title="Upload" onPress={handleUpload} disabled={!image} />
//       </View>
//     );
//   };
  
 

// export default PostExample2;
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const PostExample2 = () => {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       base64: true,
//       imageBase64: true,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].base64);
//     }
//   };

//   const uploadImage = async (imageBase64) => {
//     imageBase64 = `data:image/jpg;base64,${image}`;
//     const url = 'https://example.com/upload'; // replace with your server URL
//     console.log(imageBase64);
//     try {
//           const response = await fetch(url, {
//               method: 'POST',
//               headers: {
//                   Accept: 'application/json',
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                   image: imageBase64,
//               }),
//           });
//           const responseJson = await response.json();
//           console.log('Image upload response:', responseJson);
//       } catch (error) {
//           console.error('Error uploading image:', error);
//       }
//   };

//   const handleUploadPress = () => {
//     uploadImage(image);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={pickImage}>
//         <Text style={styles.buttonText}>Choose Image</Text>
//       </TouchableOpacity>

//       {image && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={styles.image} />
//         </View>
//       )}

//       {image && (
//         <TouchableOpacity style={styles.button} onPress={handleUploadPress}>
//           <Text style={styles.buttonText}>Upload Image</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 20,
//   },
//   imageContainer: {
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     padding: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });
// export default PostExample2;


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function App() {
//   const [imageUri, setImageUri] = useState(null);
//   const [imageBase64, setImageBase64] = useState(null);

//   const handleChooseImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       base64: true,
//     });

//     if (!result.canceled) {
//       setImageUri(result.assets[0].uri);
//       setImageBase64(result.assets[0].base64);
//     }
//   };

//   const handleUpload = () => {
//     if (!imageBase64) {
//       alert('Please select an image to upload');
//       return;
//     }

//     fetch('https://example.com/api/upload', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ image: imageBase64 }),
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('Image uploaded successfully:', result);
//         alert('Image uploaded successfully');
//       })
//       .catch(error => {
//         console.error('Error uploading image:', error);
//         alert('Error uploading image');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Choose Image" onPress={handleChooseImage} />
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//       <Button title="Upload" onPress={handleUpload} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//   },
// });


// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';

// const MyComponent = () => {
//   const [inputText, setInputText] = useState('');

//   const handleUpload = () => {
//     const encodedText = btoa(inputText);

//     const formData = new FormData();
//     formData.append('file', { uri: `data:text/plain;base64,${encodedText}`, name: 'data.txt', type: 'text/plain' });

//     fetch('https://example.com/api/upload', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('File uploaded:', result);
//         Alert.alert('File uploaded!');
//       })
//       .catch(error => {
//         console.error('Error uploading file:', error);
//         Alert.alert('Error uploading file!');
//       });
//   };

//   return (
//     <View>
//       <TextInput
//         value={inputText}
//         onChangeText={setInputText}
//         placeholder="Enter some text to upload"
//       />
//       <Button title="Upload" onPress={handleUpload} />
//     </View>
//   );
// };

// export default MyComponent;


// import React, { useState } from 'react';
// import { View, Image, Button, Alert, Text } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';

// const PostExample2 = () => {
//   const [image, setImage] = useState(null);
//   const [base64Image, setBase64Image] = useState(null);

//   const handlePickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     });

//     if (!result.canceled) {
//       setImage(result);
//       const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       setBase64Image(base64);
//     }
//   };

//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append('image', {
//       uri: image.uri,
//       name: 'image.jpg',
//       type: 'image/jpeg',
//     });

//     fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('Image uploaded:', result);
//         Alert.alert('Image uploaded!');
//       })
//       .catch(error => {
//         console.error('Error uploading image:', error);
//         Alert.alert('Error uploading image!');
//       });
//   };

//   return (
//     <View style={{top:100}}>
//       {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
//       <Button title="Pick an image" onPress={handlePickImage} />
//       <Button title="Upload" onPress={handleUpload} disabled={!image} />
//       {base64Image && <Text>{base64Image}</Text>}
//     </View>
//   );
// };

// export default PostExample2;

// import React, { useState } from 'react';
// import { Button, Image, StyleSheet, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';

// const PostExample2 = () => {
// //   const [image, setImage] = useState(null);
//   const [imageUri, setImageUri] = useState(null);

// console.log(imageUri)
//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       base64: true, // set this to true to get the image data as a Base64-encoded string
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].base64);
//       uploadImage(result.assets[0].base64);
//     }
//   };

//   const uploadImage = async (base64ImageData) => {
//     const apiUrl = 'https://example.com/upload';
//     const fileName = 'image.png';

//     // convert Base64-encoded image data to binary data
//     const binaryImageData = atob(base64ImageData);

//     // create a Uint8Array from the binary data
//     const uint8Array = new Uint8Array(binaryImageData.length);
//     for (let i = 0; i < binaryImageData.length; i++) {
//       uint8Array[i] = binaryImageData.charCodeAt(i);
//     }

//     // create a Blob from the Uint8Array
//     const blob = new Blob([uint8Array], { type: 'image/png' });

//     // create a FormData object to send the Blob as a file
//     const formData = new FormData();
//     formData.append('file', blob, fileName);

//     // send the FormData to the server using the fetch API
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       console.log('Image uploaded successfully');
//     } else {
//       console.log('Image upload failed');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: `data:image/png;base64,${image}` }} style={styles.image} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginVertical: 20,
//   },
// });

// const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       base64: true,
//     });

//     if (!result.canceled) {
//       setImageUri(result.assets[0].uri);
//     }
//   };

//   const uploadImage = async (uri) => {
//     const apiUrl = 'https://example.com/upload-image';
  
//     try {
//       // Fetch image data and convert to base64
//       const response = await fetch(uri);
//       const blob = await response.blob();
  
//       const base64Image = await new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = reject;
//         reader.readAsDataURL(blob);
//       });
  
//       console.log('Base64 image:', base64Image);
  
//       // Set up request parameters
//       const requestData = {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ image: base64Image }),
//       };
  
//       // Send request to server
//       const apiresponse = await fetch(apiUrl, requestData);
//       const json = await response.json();
//       console.log('Upload successful:', json);
//     } catch (error) {
//       console.error('Upload failed:', error);
//     }
//   };
  
//   // Example usage: call uploadImage() function with image URI
//   uploadImage('file:///path/to/image.jpg');

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {imageUri && <Button title="Upload image" onPress={uploadImage} />}
//     </View>
//   );
// };

// export default PostExample2;

import React, { useState } from 'react';
import { View, Image, Button, Text, ScrollView, TextInput } from 'react-native';

export default function PostExample2() {
  const [imageURI, setImageURI] = useState(null);
  const [Ownername, setOwnername] = useState("");
  const [ID, setID] = useState("");
  const [Base64Image, setBase64Image] = useState(null);
console.log(imageURI);
console.log(Base64Image);

  const selectImage = async () => {
    // Request permission to access the camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch the image picker and wait for the user to select an image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      // Set the image URI and base64 string in state
      setImageURI(result.assets[0].uri);
      setBase64Image(result.assets[0].base64);
    }
  };

  const uploadImage = async () => {
    const apiUrl = 'https://7538-2402-e280-3d33-4a8-ad48-d2f5-46b1-56f6.in.ngrok.io';

    try {
      // Set up request parameters
      const requestData = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID, Ownername, Base64Image }),
      };

      // Send request to server
      const response = await fetch(apiUrl, requestData);
      const json = await response.json();
      console.log('Upload successful:', json);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput  value={ID} onChangeText={ (actualdata) => setID(actualdata)} placeholder="Enter Owner Name"/>
      <TextInput value={Ownername} onChangeText={ (actualdata) => setOwnername(actualdata)}placeholder="Enter Shop Name"/>
      {imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={selectImage} />
      {Base64Image && <Button title="Upload Image" onPress={uploadImage} />}
      {/* <Text>{base64Image}</Text> */}
    </View>
  );

// const [imageURI, setImageURI] = useState(null);
// const [base64Image, setBase64Image] = useState(null);
// console.log(base64Image);
// const selectImage = async () => {
//   // Request permission to access the camera roll
//   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   if (status !== 'granted') {
//     alert('Sorry, we need camera roll permissions to make this work!');
//     return;
//   }

//   // Launch the image picker and wait for the user to select an image
//   const result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     allowsEditing: true,
//     quality: 1,
//     base64: true,
//   });

//   if (!result.canceled) {
//     // Set the image URI and base64 string in state
//     setImageURI(result.assets[0].uri);
//     setBase64Image(btoa(result.assets[0].base64));
//   }
// };

// const uploadImage = async () => {
//   const apiUrl = 'https://cdbf-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io';

//   try {
//     // Set up request parameters
//     const requestData = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ image: base64Image }),
//     };

//     // Send request to server
//     const response = await fetch(apiUrl, requestData);
//     const json = await response.json();
//     console.log('Upload successful:', json);
//   } catch (error) {
//     console.error('Upload failed:', error);
//   }
// };

// const renderBase64Text = () => {
//   if (!base64Image) {
//     return null;
//   }

//   // Split the base64 string into smaller chunks
//   const chunkSize = 100;
//   const chunks = [];

//   for (let i = 0; i < base64Image.length; i += chunkSize) {
//     chunks.push(base64Image.substring(i, i + chunkSize));
//   }

//   // Render each chunk in a separate Text component
//   return chunks.map((chunk, index) => <Text key={index}>{chunk}</Text>);
// };

// return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     {imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
//     <Button title="Select Image" onPress={selectImage} />
//     {base64Image && (
//       <>
//         <Button title="Upload Image" onPress={uploadImage} />
//         {/* <ScrollView>{renderBase64Text()}</ScrollView> */}
//       </>
//     )}
//   </View>
// );

// const [imageURI, setImageURI] = useState(null);
// const [base64Chunks, setBase64Chunks] = useState([]);

// const selectImage = async () => {
//   // Request permission to access the camera roll
//   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   if (status !== 'granted') {
//     alert('Sorry, we need camera roll permissions to make this work!');
//     return;
//   }

//   // Launch the image picker and wait for the user to select an image
//   const result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     allowsEditing: true,
//     quality: 1,
//     base64: true,
//   });

//   if (!result.canceled) {
//     // Set the image URI in state
//     setImageURI(result.assets[0].uri);

//     // Split the base64 string into smaller chunks
//     const chunkSize = 100;
//     const chunks = [];
//     for (let i = 0; i < result.assets[0].base64.length; i += chunkSize) {
//       chunks.push(result.assets[0].base64.substring(i, i + chunkSize));
//     }

//     // Set the base64 chunks in state
//     setBase64Chunks(chunks);
//   }
// };

// const sendBase64Chunks = async () => {
//   const apiUrl = 'https://cdbf-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io';
//   try {
//     // Set up request parameters
//     const requestData = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ base64Chunks }),
//     };

//     // Send request to server
//     const response = await fetch(apiUrl, requestData);
//     const json = await response.json();
//     console.log('Upload successful:', json);
//   } catch (error) {
//     console.error('Upload failed:', error);
//   }
// };

// return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top:100 }}>
//     {imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
//     <Button title="Select Image" onPress={selectImage} />
//     {base64Chunks.length > 0 && <Button title="Send Base64 Chunks" onPress={sendBase64Chunks} />}
//     <ScrollView>
//       {base64Chunks.map((chunk, index) => (
//         <Text key={index}>{chunk}</Text>
//       ))}
//     </ScrollView>
//   </View>
// );

 }
