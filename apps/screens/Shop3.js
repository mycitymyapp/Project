import React, { useEffect, useState }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const categoryy = [
    {label: 'Apparel and Fashion', value: '1'},
    {label: 'Beauty and Personal Care', value: '2'},
    {label: 'Electronics and Technology', value: '3'},
    // {label: 'Bihar', value: '4'},
    // {label: 'Chhattisgarh', value: '5'},
    // {label: 'Goa', value: '6'},
    // {label: 'Gujarat', value: '7'},
    // {label: 'Haryana', value: '8'},
    // {label: 'Himachal Pradesh', value: '9'},
    // {label: 'Jharkhand', value: '10'},
    // {label: 'Karnataka', value: '11'},
    // {label: 'Kerala', value: '12'},
    // {label: 'Madhya Pradesh', value: '13'},
    // {label: 'Maharashtra', value: '14'},
    // {label: 'Manipur', value: '15'},
    // {label: 'Meghalaya', value: '16'},
    // {label: 'Mizoram', value: '17'},
    // {label: 'Nagaland', value: '18'},
    // {label: 'Odisha', value: '19'},
    // {label: 'Punjab', value: '20'},
    // {label: 'Rajasthan', value: '21'},
    // {label: 'Sikkim', value: '22'},
    // {label: 'Tamil Nadu', value: '23'},
    // {label: 'Telangana', value: '24'},
    // {label: 'Tripura', value: '25'},
    // {label: 'Uttar Pradesh', value: '26'},
    // {label: 'Uttarakhand', value: '27'},
    // {label: 'West Bengal', value: '28'},
    
];

const genderr = [
    {label: 'Gents', value: '1'},
    {label: 'Ladies', value: '2'},
    {label: 'Kids', value: '3'},
    {label: 'All', value: '4'},
    
];

const Shop3 = ({navigation}) => {
    const [gender, setGender] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcat, setSubcat] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    console.log(gender);

    const handleSelectGender = (item) => {
      const index = gender.indexOf(item);
      if (index === -1) {
        setGender([...gender, item]);
      } else {
        setGender(gender.filter((val) => val !== item));
      }
    };

    const handleSelectCategory = (item) => {
      const index = category.indexOf(item);
      if (index === -1) {
        setCategory([...category, item]);
      } else {
        setCategory(category.filter((val) => val !== item));
      }
    };

    const handleSelectSubcat = (item) => {
      const index = gender.indexOf(item);
      if (index === -1) {
        setGender([...gender, item]);
      } else {
        setGender(gender.filter((val) => val !== item));
      }
    };

    const submit = () => {
      if(category!="")
      {
      // let data = {category};
      fetch('https://7538-2402-e280-3d33-4a8-ad48-d2f5-46b1-56f6.in.ngrok.io..', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json'
          },
          // body: JSON.stringify(data)

      }).then((result)=>{
          result.json().then((resp)=>{
          console.warn("resp", resp)
          })
      })
      navigation.navigate("Exam1"); 
      }
      else{
       Alert.alert('Please fill all details');
      }
  }
    
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30 }}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        
        <Dropdown
          style={[styles.input, isFocus]}
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
          label={gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          multiple={true}
        //   onChangeText={ (actualdata) => setValue(actualdata)}
          // 
          onChange={item => {
            if (gender.includes(item.label)) {
              setGender(gender.filter(label => label !== item.label));
            } else {
              setGender(gender.concat(item.label));
            }
          }}
        />

    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {gender.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.selectedItem}
            onPress={() => handleSelectGender(item)}
          >
            <Text style={styles.input3}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

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
          label={category}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          multiple={true}
        //   onChangeText={ (actualdata) => setValue(actualdata)}
          // 
          onChange={item => {
            if (category.includes(item.label)) {
              setCategory(category.filter(label => label !== item.label));
            } else {
              setCategory(category.concat(item.label));
            }
          }}
        />

    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {category.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.selectedItem}
            onPress={() => handleSelectCategory(item)}
          >
            <Text style={styles.input3}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>







{/* <Dropdown
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
          placeholder={!isFocus ? 'Select Category' : '...'}
          searchPlaceholder="Search..."
          value={category}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          // onChange={ (actualdata) => setCategory(actualdata)}
          onChange={label => {
            setCategory(label.category);
            setIsFocus(false);
          }}
        />
         */}

{/* <Dropdown
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
        /> */}

        <TextInput style={styles.input} placeholder="Enter shop timing"/>
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
    <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Proceed</Text>
    </TouchableOpacity>
        {/* <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
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
      input3: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        width: 80,
        borderRadius: 10,
        flexDirection: 'column'
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

export default Shop3;