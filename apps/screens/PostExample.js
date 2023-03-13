import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { encode as btoa } from 'base-64';


const PostExample = ({navigation}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    // const [Data, setData] = useState("");
    const [Ownername, setOwnername] = useState("");
    const [image,setImage] = useState(null);
    const [ImageString,setImageString] = useState(null);

    const [Data, setData] = useState(null);
    // const [emailid, setEmailid] = useState("");
    // console.log(id, Ownername, Data);
    console.log(id,Ownername,ImageString);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 5],
          quality: 1,
          base64: true,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].base64);
        }
      };
    
    const submit = () => {
        if(id!="" && Ownername!="" && image!="")
        {
        let data = {id, Ownername, image };
        fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)

        }).then((result)=>{
            result.json().then((resp)=>{
            console.warn("resp", resp)
            })
        })
        navigation.navigate("Shop2"); 
        }
        else{
         Alert.alert('Please fill all details');
        }
    }

    // const uploadImage = async () => {
    //     let formData = new FormData();
    // formData.append('name', name);
    // // formData.append('price', price);
    // formData.append('image', {
    //   uri: image,
    //   type: 'image/jpeg',  
    //   name: 'image.jpg',
    // });

    
    //     try {
    //       let response = await fetch('https://22ab-2402-e280-3d33-4a8-cc5e-d59a-466b-f139.in.ngrok.io', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //         body: formData,
    //       });
    
    //       let responseJson = await response.json();
    //       console.log(responseJson);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

      const handleUpload = () => {
        const base64Image = btoa(image.base64);
       console.log(base64Image);
        // let data = {id, Ownername, base64Image };
    
        fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({image: base64Image}),
        })
          .then(response => response.json())
          .then(result => {
            console.log('Image uploaded successfully:', result);
          })
          .catch(error => {
            console.error('Error uploading image:', error);
          });
      };

      const uploadImages = async (base64Image) => {
        try {
          const response = await fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ImageString : base64Image,
            }),
          });
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
// }

// function Shop1(props) {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30,}}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        {/* {image && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${image.base64}` }}
          style={{ width: 200, height: 200 }}
        />
      )} */}
        {/* <TextInput style={styles.input} value={id} onChangeText={ (actualdata) => setId(actualdata)} placeholder="Enter Owner Name"/>
        <TextInput style={styles.input} value={Ownername} onChangeText={ (actualdata) => setOwnername(actualdata)}placeholder="Enter Shop Name"/>
        {/* <TextInput style={styles.input} value={Data} onChangeText={ (actualdata) => setData(actualdata)}placeholder="Enter Contact Number"/> */}
        {/* <TextInput style={styles.input} value={name} onChangeText={ (actualdata) => setName(actualdata)}placeholder="Enter Shop Name"/> */}
        <TextInput style={styles.input} value={id} onChangeText={ (actualdata) => setId(actualdata)} placeholder="Enter Owner Name"/>
        <TextInput style={styles.input} value={Ownername} onChangeText={ (actualdata) => setOwnername(actualdata)}placeholder="Enter Shop Name"/>
        <TouchableOpacity onPress={() => { pickImage();}}>
        <TextInput style={styles.input} value={ImageString} onChangeText={(actualdata) => setImageString(actualdata)} placeholder="Upload"/>
        </TouchableOpacity>

        {/* <TextInput style={styles.input} value={emailid} onChangeText={ (actualdata) => setEmailid   (actualdata)}placeholder="Enter Email Id"/> */}
        <TouchableOpacity style={styles.button} onPress={() => handleUpload()}>
    <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Proceed</Text>
    </TouchableOpacity>
      
        {/* <Button
        title="Proceed"
        onPress={() => submit()}
        /> */}
        </View>
    );
}

// return (
// <View style={{top:100}}>
//       {image && (
//         <Image
//           source={{ uri: `data:image/jpeg;base64,${image.base64}` }}
//           style={{ width: 200, height: 200 }}
//         />
//       )}
//       <Button title="Select Image" onPress={pickImage} />
//       {image && <Button title="Upload" onPress={handleUpload} />}
//     </View>
//   );
// };

// return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     {ImageString && (
//       <Image source={{ uri: ImageString }} style={{ width: 200, height: 200 }} />
//     )}
//     <Button title="Pick an image" onPress={pickImage} />
//   </View>
// );
    // }
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
      },

      button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        backgroundColor: "#E4715A",
           
    },

})

// export default PostExample;

// import React, { useState } from 'react';
// import { View, Button, Image, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function PostExample() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = async () => {
//     let base64Image = null;

//     try {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission required', 'You need to grant permission to access the camera roll');
//         return;
//       }

//       const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         quality: 1,
//         base64: true,
//       });

//       if (!imagePickerResult.canceled) {
//         base64Image = imagePickerResult.assets[0].base64;
//         setSelectedImage(imagePickerResult.assets[0].uri);
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     if (base64Image) {
//       try {
//         const response = await fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ image: base64Image }),
//         });
//         const responseData = await response.json();
//         console.log(responseData);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <View style={{top:100}}>
//       {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
//       <Button title="Select Image" onPress={handleImageUpload} />
//     </View>
//   );
// }

// import React, { useState } from 'react';
// import { View, Button, Image, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { encode as btoa } from 'base-64';

// export default function PostExample() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = async () => {
//     let base64Image = null;
//     try {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission required', 'You need to grant permission to access the camera roll');
//         return;
//       }

//       const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         quality: 1,
//         base64: true,
//       });

//       if (!imagePickerResult.canceled) {
//         base64Image = btoa(imagePickerResult.assets[0].base64);
//         setSelectedImage(imagePickerResult.assets[0].uri);
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     if (base64Image) {
//       console.log(base64Image);
//       try {
//         const response = await fetch('https://a427-2402-e280-3d33-4a8-8019-c4dc-c33-a56b.in.ngrok.io', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ image: { base64: base64Image } }),
//         });
//         const responseData = await response.json();
//         console.log(responseData);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <View style={{top:100}}>
//       {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
//       <Button title="Select Image" onPress={handleImageUpload} />
//     </View>
//   );
// }

export default PostExample;