import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity, axios } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Dropdown } from 'react-native-element-dropdown';

// function Shop2(props) {

//     const [seleted, setSelected]= React.useState("");

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

    const Shop2 = ({navigation}) => {
        const [address, setAddress] = useState("");
        const [city, setCity] = useState("");
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
        const [pincode, setPincode] = useState("");
        
        
        const submit = () => {
            if(address!="" && city!="" && value!="" && pincode!="")
            {
            navigation.navigate("Shop3"); 
            }
            else{
             Alert.alert('Please fill all details');
            }
        }

        // useEffect ( () => {
        //     var axios = require('axios');
        //     var config = {
        //         method: 'get',
        //         url: 'https://api.countrystatecity.in/v1/states',
        //          headers: {
        //          'X-CSCAPI-KEY': 'API_KEY'
        //          }
        //         };
        
        //         axios(config)
        //         .then(function (response) {
        //          console.log(JSON.stringify(response.data));
        //         })
        //         .catch(function (error) {
        //         console.log(error);
        //         });
        
        // }, []);

        

    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30 }}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        <TextInput style={styles.input} value={address} onChangeText={ (actualdata) => setAddress(actualdata)} placeholder="Enter Address"/>
        <TextInput style={styles.input} value={city} onChangeText={ (actualdata) => setCity(actualdata)} placeholder="Enter City"/>
        {/* <TextInput style={styles.input} placeholder="Select State"/> */}
        
        <Dropdown
          style={[styles.input, isFocus]}
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


        <TextInput style={styles.input} value={pincode} onChangeText={ (actualdata) => setPincode(actualdata)} placeholder="Enter Pincode" keyboardType='numeric'/>
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
    <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Proceed</Text>
    </TouchableOpacity>
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

    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 10,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
    //   placeholderStyle: {
    //     fontSize: 16,
    //   },
    //   selectedTextStyle: {
    //     fontSize: 16,
    //   },
    //   iconStyle: {
    //     width: 20,
    //     height: 20,
    //   },
    //   inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    //   },
})

export default Shop2;
