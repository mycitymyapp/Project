import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const categoryy =  [
        {label: 'Apparel and Fashion', value: '1'},
        {label: 'Beauty and Personal Care', value: '2'},
        {label: 'Electronics and Technology', value: '3'},
    ];


const subcategoryy =  {
    '1': [
        {label: 'Clothing', value: '1'},
        {label: 'Shoes', value: '2'},
        {label: 'Accessories', value: '3'},
    ],
    '2': [
        {label: 'Skin Care', value: '4'},
        {label: 'Makeup', value: '5'},
        {label: 'Hair Care', value: '6'},
    ],
    '3': [
        {label: 'Computers', value: '7'},
        {label: 'Phones', value: '8'},
        {label: 'TVs', value: '9'},
    ],
};


const DropDown = ({navigation}) => {
    const [gender, setGender] = useState([]);
    const [Category, setCategory] = useState([]);
    const [Subcategory, setSubcategory] = useState({});
    const [isFocus, setIsFocus] = useState(false);
    const [ID, setID] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);


    console.log(Category, Subcategory, ID);
    
    // const handleSelectCategory = (item) => {
    //     const index = Category.findIndex((cat) => cat.value === item.value);
    //     if (index === -1) {
    //       setCategory([...Category, item]);
    //     } else {
    //       setCategory(Category.filter((val) => val.value !== item.value));
    //     }
    //     console.log('Category:', Category);
    //     // Remove subcategory when category is deselected
    //     const { [item.value]: removedCategory, ...rest } = Subcategory;
    //     setSubcategory(rest);
    //     // Render subcategory dropdowns for selected categories
    //     renderSubcategoryDropdowns([...Category, item]);
    //   };

const handleSelectCategory = (item) => {
      const index = Category.indexOf(item);
      if (index === -1) {
        setCategory([...Category, item]);
      } else {
        setCategory(Category.filter((val) => val !== item));
        console.log(item);
      }
      // renderSubcategoryDropdowns([...Category, item]);
      
    };
// const handleSelectCategory = (item) => {
//     const index = Category.findIndex((cat) => cat.value === item.value);
//     if (index === -1) {
//         setCategory([...Category, item]);
//     } else {
//         const newCategory = [...Category];
//         newCategory.splice(index, 1);
//         setCategory(newCategory);
//     }
//     console.log('Category:', Category);

//     // Remove subcategory when category is deselected
//     const { [item.value]: removedCategory, ...rest } = Subcategory;
//     setSubcategory(rest);

//     // Render subcategory dropdowns for selected categories
//     renderSubcategoryDropdowns([...Category, item]);
// };
    

    const handleSelectSubcategory = (categoryValue, item) => {
      setSubcategory({
          ...Subcategory,
          [categoryValue]: Subcategory[categoryValue] ? [...Subcategory[categoryValue], item.label] : [item.label],
      });
  };

      const renderSubcategoryDropdowns = (selectedCategories) => {
        return selectedCategories.map((Category) => (
          <View key={Category.value}>
            <Text style={styles.input}>{Category}</Text>
            <Dropdown
              style={[styles.input, isFocus]}
              data={subcategoryy[Category.value]}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Subcategory' : '...'}
            //   searchPlaceholder="Search..."
              label={Subcategory[Category.value]?.join(', ')}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              multiple={true}
              onChange={item => {
                if (Subcategory.includes(item.label)) {
                  setSubcategory(Subcategory.filter(label => label !== item.label));
                } else {
                  setSubcategory(Subcategory.concat(item.label));
                }
              }}
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {Subcategory[Category.value]?.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.selectedItem}
                  onPress={() =>
                    setSubcategory({
                      ...Subcategory,
                      [Category.value]: Subcategory[Category.value].filter((val) => val !== item),
                    })
                  }
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
            <Text style={styles.input}>Category</Text>
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
          label={Category}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          multiple={true}
        //   onChangeText={ (actualdata) => setValue(actualdata)}
          // 
          onChange={item => {
            if (Category.includes(item.label)) {
              setCategory(Category.filter(label => label !== item.label));
            } else {
              setCategory(Category.concat(item.label));
            }
            setSelectedValue(null);
          }}
          value={selectedValue}
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

            {/* {renderSubcategoryDropdowns(Category)} */}
            <Button title="Submit" onPress={() => console.log(Category, Subcategory)} />
        </View>
    );
};
    

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
    export default DropDown;






























// import React, { useEffect, useState }from 'react';
// import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';

// const categoryy =  [
//     {label: 'Apparel and Fashion', value: '1'},
//     {label: 'Beauty and Personal Care', value: '2'},
//     {label: 'Electronics and Technology', value: '3'},
// ];

// const genderr = [
//     {label: 'Gents', value: '1'},
//     {label: 'Ladies', value: '2'},
//     {label: 'Kids', value: '3'},
//     {label: 'All', value: '4'},
    
// ];


// const DropDown = ({navigation}) => {
//     const [gender, setGender] = useState([]);
//     const [Category, setCategory] = useState([]);
//     const [subcat, setSubcat] = useState([]);
//     const [isFocus, setIsFocus] = useState(false);
//     const [ID, setID] = useState("");

//     console.log(Category, ID);
//     const submit = () => {
//         if(Category!="")
//         {
//          let data = {Category, ID};
//         fetch('https://7538-2402-e280-3d33-4a8-ad48-d2f5-46b1-56f6.in.ngrok.io/AddVendor', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type':'application/json'
//             },
//              body: JSON.stringify(data)
  
//         }).then((result)=>{
//             result.json().then((resp)=>{
//             console.warn("resp", resp)
//             })
//         })
//         navigation.navigate("Exam1"); 
//         }
//         else{
//          Alert.alert('Please fill all details');
//         }
//     }
    

//     const handleSelectCategory = (item) => {
//       const index = Category.indexOf(item);
//       if (index === -1) {
//         setCategory([...Category, item]);
//       } else {
//         setCategory(Category.filter((val) => val !== item));
//         console.log(item);
//       }
      
//     };
    
//     return (
//         <View style={styles.container}>
        
        
//       <Dropdown
//           style={[styles.input, isFocus]}
//         //   placeholderStyle={styles.placeholderStyle}
//         //   selectedTextStyle={styles.selectedTextStyle}
//         //   inputSearchStyle={styles.inputSearchStyle}
//         //   iconStyle={styles.iconStyle}
//           data={categoryy}
//         //   search 
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Item Category' : '...'}
//           searchPlaceholder="Search..."
//           label={Category}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           multiple={true}
//         //   onChangeText={ (actualdata) => setValue(actualdata)}
//           // 
//           onChange={item => {
//             if (Category.includes(item.label)) {
//               setCategory(Category.filter(label => label !== item.label));
//             } else {
//               setCategory(Category.concat(item.label));
//             }
//           }}
//         />

//     <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//         {Category.map((item) => (
//           <TouchableOpacity
//             key={item}
//             style={styles.selectedItem}
//             onPress={() => handleSelectCategory(item)}
//           >
//             <Text style={styles.input3}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//         <TouchableOpacity style={styles.button} onPress={() => submit()}>
//     <Text style={{color:"white" , textAlign: "center", fontWeight: "bold"}}>Proceed</Text>
//     </TouchableOpacity>
//         {/* <Button
//         title="Press me"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       /> */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: "#fff",
//         textAlign: "center",
//          justifyContent: "center",
//          alignItems: "center",

//     },

//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         width: 300,
//         borderRadius: 10,
//       },
//       input3: {
//         height: 40,
//         margin: 6,
//         borderWidth: 1,
//         padding: 10,
//         width: 80,
//         borderRadius: 10,
//         flexDirection: 'column'
//       },

//       button: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         width: 300,
//         borderRadius: 10,
//         backgroundColor: "#E4715A",  
//     },

// })

// export default DropDown;









// import React, { useEffect, useState }from 'react';
// import { StyleSheet, Text, TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { Picker } from '@react-native-picker/picker';
// import { Checkbox } from 'react-native-paper';



// const items = {
//       fruits: ['Apple', 'Banana', 'Mango'],
//       vegetables: ['Carrot', 'Potato', 'Tomato'],
//       meats: ['Chicken', 'Beef', 'Pork'],
//     };
    
//     const DropDown = ({navigation}) => {
//       const [selectedItem, setSelectedItem] = useState('fruits');
//       const [selectedSubItems, setSelectedSubItems] = useState([]);
//       console.log(selectedItem, selectedSubItems);
    
//       const subItems = items[selectedItem];
    
//       const handleItemChange = (itemValue) => {
//         setSelectedItem(itemValue);
//         setSelectedSubItems([]);
//       };
    
//       const handleSubItemChange = (subItemValue) => {
//         const index = selectedSubItems.indexOf(subItemValue);
//         if (index === -1) {
//           setSelectedSubItems([...selectedSubItems, subItemValue]);
//         } else {
//           setSelectedSubItems(selectedSubItems.filter((val) => val !== subItemValue));
//         }
//       };
    
//       return (
//         <View style={styles.container}>
//           <View style={styles.dropdownContainer}>
//             <Text style={styles.label}>Select an item:</Text>
//             <Picker
//               selectedValue={selectedItem}
//               onValueChange={handleItemChange}
//               style={styles.dropdown}
//             >
//               {Object.keys(items).map((item) => (
//                 <Picker.Item key={item} label={item} value={item} />
//               ))}
//             </Picker>
//           </View>
    
//           {subItems && (
//             <View style={styles.dropdownContainer}>
//               <Text style={styles.label}>Select sub-items:</Text>
//               <View style={styles.checkboxes}>
//                 {subItems.map((subItem) => (
//                   <View key={subItem} style={styles.checkboxContainer}>
//                     <Checkbox
//                       value={selectedSubItems.includes(subItem)}
//                       onValueChange={() => handleSubItemChange(subItem)}
//                     />
//                     <Text>{subItem}</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           )}
//         </View>
//       );
//     }
    
//     const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         },
//         dropdownContainer: {
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginBottom: 20,
//         },
//         label: {
//           fontSize: 16,
//           marginRight: 10,
//         },
//         dropdown: {
//           width: 200,
//         },
//         checkboxes: {
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//         },
//         checkboxContainer: {
//           flexDirection: 'row',
//           alignItems:'center'
//           },
//     });

// export default DropDown;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { CheckBox } from '@react-native-community/checkbox';


// const items = {
//   fruits: ['Apple', 'Banana', 'Mango'],
//   vegetables: ['Carrot', 'Potato', 'Tomato'],
//   meats: ['Chicken', 'Beef', 'Pork'],
// };

// const DropDown = ({navigation}) => {
//   const [selectedItem, setSelectedItem] = useState('fruits');
//   const [selectedSubItems, setSelectedSubItems] = useState([]);
//   console.log(selectedItem, selectedSubItems);

//   const subItems = items[selectedItem];

//   const handleItemChange = (itemValue) => {
//     setSelectedItem(itemValue);
//     setSelectedSubItems([]);
//   };

//   const handleSubItemChange = (subItemValue) => {
//     const index = selectedSubItems.indexOf(subItemValue);
//     if (index === -1) {
//       setSelectedSubItems([...selectedSubItems, subItemValue]);
//     } else {
//       setSelectedSubItems(selectedSubItems.filter((val) => val !== subItemValue));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.dropdownContainer}>
//         <Text style={styles.label}>Select an item:</Text>
//         <Picker
//           selectedValue={selectedItem}
//           onValueChange={handleItemChange}
//           style={styles.dropdown}
//         >
//           {Object.keys(items).map((item) => (
//             <Picker.Item key={item} label={item} value={item} />
//           ))}
//         </Picker>
//       </View>

//       {subItems && (
//         <View style={styles.dropdownContainer}>
//           <Text style={styles.label}>Select sub-items:</Text>
//           <View style={styles.checkboxes}>
//             {subItems.map((subItem) => (
//               <View key={subItem} style={styles.checkboxContainer}>
//                 <CheckBox
//                   value={selectedSubItems.includes(subItem)}
//                   onValueChange={() => handleSubItemChange(subItem)}
//                 />
//                 <Text>{subItem}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     dropdownContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 20,
//     },
//     label: {
//       fontSize: 16,
//       marginRight: 10,
//     },
//     dropdown: {
//       width: 200,
//     },
//     checkboxes: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     checkboxContainer: {
//       flexDirection: 'row',
//       alignItems:'center'
//       },
// });

// export default DropDown;
