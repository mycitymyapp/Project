import React, { useEffect, useState }from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

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

const DropDown2 = ({navigation}) => {
    const [Categories, setCategories] = useState([]);
    const [SubCategories, setSubCategories] = useState([]);
    const [isFocus, setIsFocus] = useState(false);
    const [ID, setID] = useState("");
    const [Ownername, setOwnername] = useState("");
    // const [dropdownItems, setDropdownItems] = useState([]); 

    console.log(Categories,SubCategories);
    

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

    // const handleSelectsubcategory = (category, item) => {
    //   setSubcategory(prevState => {
    //     // Create an array of objects that contains both the category and item
    //     const updatedSubcategory = [...prevState, { category, label: item.label }];
    //     return updatedSubcategory;
    //   });
    // };

      const handleSelectSubcat = (item) => {
        const index = SubCategories.indexOf(item);
        if (index === -1) {
          setSubCategories([...SubCategories, item]);
        } else {
          setSubCategories(SubCategories.filter((val) => val !== item));
        }
      };

      const submit = () => {
        if(Categories!="")
        {
         let data = {Categories, SubCategories, ID, Ownername};
        fetch('https://8146-2402-e280-3d33-4a8-8da4-f396-dfa6-6149.in.ngrok.io/AddVendor', {
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
        navigation.navigate("Exam1"); 
        }
        else{
         Alert.alert('Please fill all details');
        }
    }

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
        <Text style={{fontSize: 30 }}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        
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
        <TextInput style={styles.input} value={ID} onChangeText={ (actualdata) => setID(actualdata)} placeholder="Enter Owner Name"/>
        <TextInput style={styles.input} value={Ownername} onChangeText={ (actualdata) => setOwnername(actualdata)}placeholder="Enter Shop Name"/>
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

export default DropDown2;