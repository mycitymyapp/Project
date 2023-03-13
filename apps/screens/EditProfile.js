import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';


const EditProfile = ({ navigation }) => {

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
      navigation.navigate("Home"); 
  }

  const returnback = () => {
    navigation.navigate("Home"); 
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



const styles = StyleSheet.create({
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

export default EditProfile;

