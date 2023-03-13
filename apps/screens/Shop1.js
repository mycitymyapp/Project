import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, Button, Alert, View, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker';


const States = [
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

const categoryy = [
    {label: 'Apparel and Fashion', value: '1'},
    {label: 'Beauty and Personal Care', value: '2'},
    {label: 'Electronics and Technology', value: '3'},
];


const subcategoryy =  {
    'Apparel and Fashion': [
        {label: 'Clothing', value: '1'},
        {label: 'Shoes', value: '2'},
        {label: 'Accessories', value: '3'},
    ],
    'Beauty and Personal Care': [
        {label: 'Skin Care', value: '4'},
        {label: 'Makeup', value: '5'},
        {label: 'Hair Care', value: '6'},
    ],
    'Electronics and Technology': [
        {label: 'Computers', value: '7'},
        {label: 'Phones', value: '8'},
        {label: 'TVs', value: '9'},
    ],
};

const Shop1 = ({navigation}) => {
    const [OwnerName, setOwnerName] = useState("");
    const [ShopName, setShopName] = useState("");
    const [ID, setID] = useState("");
    const [EmailID, setEmailID] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [State, setState] = useState([]);
    const [isFocus, setIsFocus] = useState(false);
    const [pincode, setPincode] = useState("");
    const [Categories, setCategories] = useState([]);
    const [SubCategories, setSubCategories] = useState([]);
    const [imageURI, setImageURI] = useState(null);
    const [Base64Image, setBase64Image] = useState(null);
    console.log(OwnerName,ShopName,ID,EmailID,Categories,SubCategories,State);

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
    
    const submit = () => {
        // if(OwnerName!="" && ShopName!="" && ID!="" && EmailID!="")
        // {
        navigation.navigate("Exam1"); 
    //     }
    //     else{
    //      Alert.alert('Please fill all details');
    //     }
     }

    const uploadImage = async () => {
      const apiUrl = 'https://fc4a-2402-e280-3d33-4a8-d4d5-6810-5d5e-38db.in.ngrok.io/AddVendor';
  
      try {
        // Set up request parameters
        const requestData = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ OwnerName, ID, EmailID, Categories, SubCategories, Base64Image }),
        };
  
        // Send request to server
        const response = await fetch(apiUrl, requestData);
        const json = await response.json();
        console.log('Upload successful:', json);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };

    const handleSelectCategory = (item) => {
        const index = Categories.indexOf(item);
        if (index === -1) {
          setCategories([...Categories, item]);
        } else {
          setCategories(Categories.filter((val) => val !== item));
        }
      };
  
      const handleSelectsubcategory = (category, item) => {
          setSubCategories({
            ...SubCategories,
            [category]: SubCategories[category] ? [...SubCategories[category], item.label] : [item.label],
      });
       };

       const handleSelectSubcat = (item) => {
        const index = SubCategories.indexOf(item);
        if (index === -1) {
          setSubCategories([...SubCategories, item]);
        } else {
          setSubCategories(SubCategories.filter((val) => val !== item));
        }
      };
  
      const renderSubcategoryDropdowns = (selectedCategories) => {
        return selectedCategories.map((category) => (
          <View key={category}>
            <Text style={styles.input}>{category}</Text>
            <Dropdown
              style={[styles.input, isFocus]}
            //   data={subcategoryy[category]}
            data={subcategoryy[category]}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Subcategory' : '...'}
              label={SubCategories[category]}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              multiple={true}
            //   onChange={item => {
            //     if (subcategory.includes(item.label)) {
            //       setSubcategory(subcategory.filter(label => label !== item.label));
            //     } else {
            //       setSubcategory(subcategory.concat(item.label));
            //     //   setSubcategory(subcategory);
            //     }
            //   }}
              onChange={item => handleSelectsubcategory(category, item)}
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {SubCategories[category]?.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.selectedItem}
                  onPress={() => handleSelectsubcategory(category, item)}
                >
                  <Text style={styles.input3}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ));
      };

    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30}}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        <ScrollView>
        <TextInput style={styles.input} value={OwnerName} onChangeText={ (actualdata) => setOwnerName(actualdata)} placeholder="Enter Owner Name"/>
        <TextInput style={styles.input} value={ShopName} onChangeText={ (actualdata) => setShopName(actualdata)}placeholder="Enter Shop Name"/>
        <TextInput maxLength={10} style={styles.input} value={ID} onChangeText={ (actualdata) => setID(actualdata)}placeholder="Enter Contact Number" keyboardType="numeric"/>
        <TextInput style={styles.input} value={EmailID} onChangeText={ (actualdata) => setEmailID   (actualdata)}placeholder="Enter Email Id"/>
        <TextInput style={styles.input} value={address} onChangeText={ (actualdata) => setAddress(actualdata)} placeholder="Enter Address"/>
        <TextInput style={styles.input} value={city} onChangeText={ (actualdata) => setCity(actualdata)} placeholder="Enter City"/>
        <Dropdown
          style={[styles.input, isFocus]}
          data={States}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select State' : '...'}
          label={State}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setState(item.label);
            setIsFocus(false);
          }}
        />
        <TextInput style={styles.input} value={pincode} onChangeText={ (actualdata) => setPincode(actualdata)} placeholder="Enter Pincode" keyboardType='numeric'/>
        <Dropdown
          style={[styles.input, isFocus]}
        //   placeholderStyle={styles.placeholderStyle}
        //   selectedTextStyle={styles.selectedTextStyle}
        //   inputSearchStyle={styles.inputSearchStyle}
        //   iconStyle={styles.iconStyle}
          data={categoryy}
        //   search 
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Item Category' : '...'}
          searchPlaceholder="Search..."
          label={Categories}
        //   label={category.join(', ')}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          multiple={true}
        //   onChangeText={ (actualdata) => setValue(actualdata)}
          // 
          onChange={item => {
            if (Categories.includes(item.label)) {
              setCategories(Categories.filter(label => label !== item.label));
            } else {
              setCategories(Categories.concat(item.label));
            }
          }}
        />
        {renderSubcategoryDropdowns(Categories)}
        {/* {imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={selectImage} />
      {Base64Image && <Button title="Upload Image" onPress={uploadImage} />} */}
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
    <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Proceed</Text>
    </TouchableOpacity>
        {/* <Button
        title="Proceed"
        onPress={() => submit()}
        /> */}
        </ScrollView>
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
        paddingTop: 38,
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
    input3: {
      height: 40,
      margin: 6,
      borderWidth: 1,
      padding: 10,
      width: 80,
      borderRadius: 10,
      flexDirection: 'column',
      left: 5,
    },

})

export default Shop1;