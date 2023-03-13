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
import { Picker } from '@react-native-picker/picker';


// import React from 'react';
// import { StyleSheet, Text, TextInput, Button, Alert, Image, View, TouchableOpacity } from 'react-native';


// import * as ImagePicker from 'react-native-image-picker';



const SelectImage = ({ navigation }) => {


  // const [image, setImage] = useState(null);
  // const [video, setVideo] = useState(null);
  const [isLoading,setIsLoading]= useState(true);
  const [myUserdata,setMyUserdata]= useState();

  const [selectedId, setSelectedId] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [imageURI, setImageURI] = useState(null);
  const [Base64Image, setBase64Image] = useState(null);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       // const result = await ImagePicker.launchCameraAsync({

  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });
  //     console.log(result);
  //     if (!result.canceled) { 
  //       setSelectedImage(result);
  //       navigation.navigate('DisplayImage', { imageUri: result });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const selectImages = async () => {
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
    console.log(result.assets[0].base64);
    if (!result.canceled) {
      // Set the image URI and base64 string in state
      setImageURI(result.assets[0].uri);
      setBase64Image(result.assets[0].base64);
      navigation.navigate('DisplayImage', { Base64Image: result.assets[0].base64 });
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


  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 5],
  //     quality: 1,
  //     multiple: true,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  // const pickVideo = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Videos,
  //     allowsEditing: true,
  //     aspect: [4, 5],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setVideo(result.assets[0].uri);
  //   }
  // };

  useEffect(() => {
    const getUserdata = async () => {
      try {
        const mobileNumber = await AsyncStorage.getItem('mobileNumber');
        setMobileNumber(mobileNumber);
        console.log(mobileNumber);
        // const response = await fetch(`https://fc4a-2402-e280-3d33-4a8-d4d5-6810-5d5e-38db.in.ngrok.io/GetVendor/${mobileNumber}`, {
        const response = await fetch(`https://thapatechnical.github.io/userapi/users.json`, {

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


//   const getUserdata = async () => {
//     try {
//         const response = await fetch('https://7538-2402-e280-3d33-4a8-ad48-d2f5-46b1-56f6.in.ngrok.io/GetVendor/9167267216');
//         const myData = await response.json();
//         setMyUserdata(myData);
//         setIsLoading(false);
//         console.log(myData);
//     }
//     catch (error) {
//         console.log(error);
//     }
// };


// useEffect(()=>{
//     getUserdata();
//  },[]);

 const submit = () => {
  
  navigation.navigate('EditProfile'); 
 
 }

//  const selectimg = () => {
  
//   navigation.navigate('ProductList', {selectedId: item.id}); 
//  }


    return (
<View style={{}}>
<View style={styles.containernavbar}>
        <Text style={{fontSize: 20, fontWeight: "bold", top: 5, left: 20}}>OTO - Shopname </Text>
        </View>
        
        <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://p.kindpng.com/picc/s/109-1095065_camera-cam-device-photo-shot-mode-mobile-phone.png',
          }}
        />
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
    
    <View style={{width: 150, height: 100, backgroundColor: "#ebe8e8", top:-210, left: 20}}>
        <TouchableOpacity onPress={() => {selectImages();}}>
        {/* <TouchableOpacity> */}
        <Image
          style={{width: 70, height:70, left: 40, top: 5}}
          source={require("../assets/upload.png")}
        />
        <Text style={{fontSize: 20,fontWeight: "200", textAlign: "center"}}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: 150, height: 100, backgroundColor: "#ebe8e8", top:-310, left: 190}}>
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
    <ScrollView style={{top:-300}}>
    <FlatList 
     style={styles.containerimage}
                    data={myUserdata}
                    keyExtractor= {(index) => {return index.id;}}
                    // ListEmptyComponent={<Text>No profiles found.</Text>}
                      numColumns={3}
                    // nestedScrollEnabled={true}
                    // contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={({ item }) => {
                      return(
    // style={styles.containerimage}
    // data={myUserdata}
    // numColumns={3}
    // keyExtractor={(item) => item.id}
    // nestedScrollEnabled={true}
    // renderItem={({ item }) => {
        // return (
                        
                      <View style={{paddingBottom:10, paddingRight:2, flexWrap: 'wrap'}}>
                      
                     
                                {/* <Text style={{fontSize:20}}>{item.id}</Text>
                                <Text style={{fontSize:20}}>{item.name}</Text> */}
                                {/* <Text>{item.surname}</Text> */}
                                {/* <TouchableOpacity onPress={() => selectimg()}> */}
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList', {selectedId: item.id})}>
                                  {/* <Text style={{fontSize:20}}>{item.id}</Text>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                               <Text>{item.surname}</Text> */}
                               

                               {/* <Text style={{fontSize:20}}>{item.Message}</Text> */}
                                <Image source={{uri: item.image}} style={{width: 118, height: 118, top: 0}}/>
                                
                                 {/* <Image source={{uri: item.ImageURl}} style={{width: 118, height: 118}}/> */}
                                  {/* brand name */}
                                  {/* {item.Products.map((product) => (
      <View style={{paddingBottom:10, paddingRight:2, flexWrap: 'wrap'}} key={product.ID}>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Category}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.SubCategory}</Text>
       <Image source={{uri: product.ImageURL}} style={{width: 118, height: 118}}/> 
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Brand}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Description}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Price}</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>{product.Discount}</Text>
      </View>
      ))} */}
                               {/* <Text style={{fontSize:12, textAlign: 'center'}}>{item.OwnerName}</Text> */}

                               
                               {/* category name */}
                               {/* <Text style={{fontSize:12, textAlign: 'center'}}>Category</Text> */}
                               {/* sub category name */}
                               {/* <Text style={{fontSize:12, textAlign: 'center'}}>sub Category</Text> */}
                               {/* price and discount */}
                               {/* <View style={{flexDirection: "row"}}>
                               <Text style={{fontSize:12, textAlign: 'center', fontWeight: "600"}}> ₹ 280 </Text>
                               <Text style={{fontSize:12, textAlign: 'center', textDecorationLine: 'line-through', fontStyle: "italic"}}> ₹ 299 </Text>
                               <Text style={{fontSize:12, textAlign: 'center', fontWeight: "600"}}>(5% off)</Text>

                                </View> */}
                                </TouchableOpacity>
                                
                            </View>
                            );
                    }}
                    />
                    
                    </ScrollView>
  )} 
                    {/* </View> */}
      
      </View>
      
    );
}

const DisplayImage = ({ route, navigation }) => {
  const { Base64Image } = route.params;
  const [Category, setCategory] = useState("");
  const [Subcategory, setSubcategory] = useState("");
  const [Brand, setBrand] = useState("");
  const [Price, setPrice] = useState("");
  const [Discount, setDiscount] = useState("");
  const [Description, setDescription] = useState("");
  const [mobileNumber, setMobileNumber] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [isLoading,setIsLoading]= useState(true);
    const [myUserdata,setMyUserdata]= useState([]);

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

  console.log(selectedCategory);

  const uploadImage = async () => {
    console.log('uploadImage called');
    const apiUrl = 'https://fc4a-2402-e280-3d33-4a8-d4d5-6810-5d5e-38db.in.ngrok.io/UploadProducts';
    const mobileNumber = await AsyncStorage.getItem('mobileNumber');
    setMobileNumber(mobileNumber);
    let ID = mobileNumber;
    let Category = selectedCategory;
    let Subcategory = selectedSubcategory;
    try {
      // Set up request parameters
      const requestData = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID, Base64Image, Category, Subcategory, Price, Discount, Description, Brand}),
      };
         
      // Send request to server
      const response = await fetch(apiUrl, requestData);
      const json = await response.json();
      console.log('Upload successful:', json);
      navigation.navigate("SelectImage");
    } catch (error) {
      console.error('Upload failed:', error);
      console.log('Error:', error);
    }
  };

  const returnback = () => {
    navigation.navigate("SelectImage"); 
  }
  // const selectedImage = route.params.selectedImage;
  // if (!imageUri) return null;
  return (
    <View>
      <View style={styles.containernavbar2}>
      <TouchableOpacity style={{left: 10}} onPress={() => returnback()}>
      <Ionicons name="ios-arrow-back" size={30} color="#000" />
    </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: "bold", left: 40}}>New Product </Text>
        <TouchableOpacity style={{left: 165}} onPress={() => uploadImage()}>
      <Ionicons name="ios-checkmark-sharp" size={30} color="tomato" />
    </TouchableOpacity>
        </View>
      <View style={styles.container3}>
      {Base64Image && (
          <Image source={{ uri: `data:image/png;base64,${Base64Image}` }} style={{ width: '100%', height: '40%' }} />
        )}
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
          />
      {/* <View  style={styles.container2}>
      <Text style={styles.label}>Category :</Text>
      <TextInput style={styles.input} value={Category} onChangeText={ (actualdata) => setCategory(actualdata)} placeholder="Select Category"/>
      </View>
      <View  style={styles.container2}>
      <Text style={styles.label}>Sub Category :</Text>
      <TextInput style={styles.input} value={Subcategory} onChangeText={ (actualdata) => setSubcategory(actualdata)} placeholder="Select Sub Category"/>
      </View> */}
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

const EditProfiless = ({ navigation }) => {

  const [ownername, setOwnername] = useState("");
  const [shopname, setShopname] = useState("");
  const [number, setNumber] = useState("");
  const [emailid, setEmailid] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [pincode, setPincode] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [subcat, setSubcat] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        // const result = await ImagePicker.launchCameraAsync({

        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) { 
        setSelectedImage(result.assets[0].uri);
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const data = [
      {label: 'Andhra Pradesh', value: '1'},
      {label: 'Arunachal Pradesh', value: '2'},
      {label: 'Assam', value: '3'},
      {label: 'Bihar', value: '4'},
      {label: 'Chhattisgarh', value: '5'},
      {label: 'Goa', value: '6'},
      {label: 'Gujarat', value: '7'},
      {label: 'Haryana', value: '8'},
      {label: 'Himachal Pradesh', value: '9'},
      {label: 'Jharkhand', value: '10'},
      {label: 'Karnataka', value: '11'},
      {label: 'Kerala', value: '12'},
      {label: 'Madhya Pradesh', value: '13'},
      {label: 'Maharashtra', value: '14'},
      {label: 'Manipur', value: '15'},
      {label: 'Meghalaya', value: '16'},
      {label: 'Mizoram', value: '17'},
      {label: 'Nagaland', value: '18'},
      {label: 'Odisha', value: '19'},
      {label: 'Punjab', value: '20'},
      {label: 'Rajasthan', value: '21'},
      {label: 'Sikkim', value: '22'},
      {label: 'Tamil Nadu', value: '23'},
      {label: 'Telangana', value: '24'},
      {label: 'Tripura', value: '25'},
      {label: 'Uttar Pradesh', value: '26'},
      {label: 'Uttarakhand', value: '27'},
      {label: 'West Bengal', value: '28'},
      
  ];

  const genderr = [
      {label: 'Gents', value: '1'},
      {label: 'Ladies', value: '2'},
      {label: 'Kids', value: '3'},
      {label: 'All', value: '4'},
      
  ];

  const submit = () => {
    navigation.navigate("SelectImage"); 
}

const returnback = () => {
  navigation.navigate("SelectImage"); 
  console.log(navigation.navigate);
}



// function Shop1(props) {
  return (
      <View style={styles.Editcontainer}>
          <View style={styles.Editcontainernavbar2}>
    <TouchableOpacity style={{left: -85}} onPress={() => returnback()}>
    <Ionicons name="ios-arrow-back" size={30} color="#000" />
  </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: "bold", left:-60}}>Edit Profile </Text>
      <TouchableOpacity style={{left: 80}} onPress={() => submit()}>
    <Ionicons name="ios-checkmark-sharp" size={30} color="tomato" />
  </TouchableOpacity>
      </View>
      <ScrollView>
      <TouchableOpacity onPress={() => { selectImage();}}>
      <Ionicons style={styles.EdittinyLogo} name="ios-camera-outline" size={90} color="tomato" />
      {Image && <Image source={{ uri: selectedImage }} style={styles.EdittinyLogo2} />}
      </TouchableOpacity>
      <Text style={styles.Editdisplay} >Owner name</Text>
      <TextInput style={styles.Editinput}  value={ownername} onChangeText={ (actualdata) => setOwnername(actualdata)} placeholder="Enter Owner Name"/>
      <Text style={styles.Editdisplay}>Shop name</Text>
      <TextInput style={styles.Editinput} value={shopname} onChangeText={ (actualdata) => setShopname(actualdata)}placeholder="Enter Shop Name"/>
      <Text style={styles.Editdisplay}>Contact Number</Text>
      <TextInput maxLength={10} style={styles.Editinput} value={number} onChangeText={ (actualdata) => setNumber(actualdata)}placeholder="Enter Contact Number" keyboardType="numeric"/>
      <Text style={styles.Editdisplay} >Email</Text>
      <TextInput style={styles.Editinput} value={emailid} onChangeText={ (actualdata) => setEmailid   (actualdata)}placeholder="Enter Email Id"/>
      <Text style={styles.Editdisplay} >Address</Text>
      <TextInput style={styles.Editinput} value={address} onChangeText={ (actualdata) => setAddress(actualdata)} placeholder="Enter Address"/>
      <Text style={styles.Editdisplay} >City</Text>
      <TextInput style={styles.Editinput} value={city} onChangeText={ (actualdata) => setCity(actualdata)} placeholder="Enter City"/>
      <Text style={styles.Editdisplay} >State</Text>
      {/* <TextInput style={styles.input} placeholder="Select State"/> */}
      
      <Dropdown
        style={[styles.Editinput, isFocus]}
      //   placeholderStyle={styles.placeholderStyle}
      //   selectedTextStyle={styles.selectedTextStyle}
      //   inputSearchStyle={styles.inputSearchStyle}
      //   iconStyle={styles.iconStyle}
        data={data}
      //   search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select state' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      //   onChangeText={ (actualdata) => setValue(actualdata)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />

      <Text style={styles.Editdisplay} >Pincode</Text>
      <TextInput style={styles.Editinput} value={pincode} onChangeText={ (actualdata) => setPincode(actualdata)} placeholder="Enter Pincode" keyboardType='numeric'/>
      <Text style={styles.Editdisplay} >Item Gender</Text>
      
      <Dropdown
        style={[styles.Editinput, isFocus]}
      //   placeholderStyle={styles.placeholderStyle}
      //   selectedTextStyle={styles.selectedTextStyle}
      //   inputSearchStyle={styles.inputSearchStyle}
      //   iconStyle={styles.iconStyle}
        data={genderr}
      //   search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Item Gender' : '...'}
        searchPlaceholder="Search..."
        value={gender}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      //   onChangeText={ (actualdata) => setValue(actualdata)}
        onChange={item => {
          setGender(item.gender);
          setIsFocus(false);
        }}
      />
<Text style={styles.Editdisplay} >Category</Text>
<Dropdown
        style={[styles.Editinput, isFocus]}
      //   placeholderStyle={styles.placeholderStyle}
      //   selectedTextStyle={styles.selectedTextStyle}
      //   inputSearchStyle={styles.inputSearchStyle}
      //   iconStyle={styles.iconStyle}
        data={data}
      //   search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Category' : '...'}
        searchPlaceholder="Search..."
        value={category}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      //   onChangeText={ (actualdata) => setValue(actualdata)}
        onChange={item => {
          setCategory(item.category);
          setIsFocus(false);
        }}
      />
<Text style={styles.Editdisplay} >Sub Category</Text>
<Dropdown
        style={[styles.Editinput, isFocus]}
      //   placeholderStyle={styles.placeholderStyle}
      //   selectedTextStyle={styles.selectedTextStyle}
      //   inputSearchStyle={styles.inputSearchStyle}
      //   iconStyle={styles.iconStyle}
        data={data}
      //   search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select sub Category' : '...'}
        searchPlaceholder="Search..."
        value={subcat}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      //   onChangeText={ (actualdata) => setValue(actualdata)}
        onChange={item => {
          setSubcat(item.subcat);
          setIsFocus(false);
        }}
      />
<Text style={styles.Editdisplay} >Timings</Text>
      <TextInput style={styles.Editinput} placeholder="Enter shop timing"/>
      </ScrollView>
      </View>
  );
}

const Stack = createStackNavigator();

const Home = () => {
  return (
    
      <Stack.Navigator initialRouteName="SelectImage">
        <Stack.Screen name="SelectImage" component={SelectImage} options={{ headerShown: false }} />
        <Stack.Screen name="DisplayImage" component={DisplayImage} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfiless} options={{ headerShown: false }}/>
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
      paddingTop: 10,
      left: 1,
      
          
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
      top: -50,
      left: 20,
  },

  Editcontainer:{
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
     justifyContent: "center",
     alignItems: "center",
     

},

Editcontainernavbar: {
    paddingTop: 50,
    left: 0,
    right: 20,
    paddingBottom: 20,
    overlayColor: "black",
    shadowColor: "black",
    borderEndColor : "black",
    backgroundColor: "white",
    
   },

   Editcontainernavbar2: {
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

Editinput: {
    
    borderBottomWidth: 1,
    margin: 12,
    width: 300,
    top:-100,
  },

  Editdisplay: {
    left: 12,
    top: -90,
    
  },

  Editbutton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#E4715A",
       
},

EdittinyLogo: {
  width: 100,
  height: 100,
  left: 100,
  borderRadius: 180,
  borderColor: 'black',
  borderWidth: 1,
  
  
},
EdittinyLogo2: {
  width: 100,
  height: 100,
  left: 100,
  borderRadius: 180,  
  top:-100,
},
  
    
  
  
  })

export default Home;