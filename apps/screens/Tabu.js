import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Tabu = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setProductImage(response);
      }
    });
  };

  const handleUploadProduct = () => {
    if (!productName || !productDescription || !productPrice || !productImage) {
      Alert.alert('Please fill in all the product details!');
    } else {
      // code to upload product to server
    }
  };

  return (
    <View>
      <Text>Product Name</Text>
      <TextInput
        value={productName}
        onChangeText={text => setProductName(text)}
      />
      <Text>Product Description</Text>
      <TextInput
        value={productDescription}
        onChangeText={text => setProductDescription(text)}
      />
      <Text>Product Price</Text>
      <TextInput
        value={productPrice}
        onChangeText={text => setProductPrice(text)}
        keyboardType='numeric'
      />
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Text>Choose Photo</Text>
      </TouchableOpacity>
      {productImage && (
        <Image
          source={{ uri: productImage.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <TouchableOpacity onPress={handleUploadProduct}>
        <Text>Upload Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabu;





<FlatList 
     style={styles.containerimage}
                    data={myUserdata}
                    keyExtractor= {(index) => {return index.id;}}
                    numColumns={3}
                    renderItem={({ item }) => {
                      return(
                      <View style={{paddingBottom:10, paddingRight:2, flexWrap: 'wrap'}}>
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList', {selectedId: item.id})}>
                                <Image source={{uri: item.image}} style={{width: 118, height: 118, top: 0}}/>
                                </TouchableOpacity>    
                            </View>
                            );
                    }}
                    />


                    export function Product({navigation}) {
                      // Declare a new state variable, which we'll call "count"
                        const route = useRoute();
                        const { selectedId } = route.params.selectedId;
                        const [EditId, setEditId] = useState(1);
                        const [count, setCount] = useState(0);
                        const [isLoading,setIsLoading]= useState(true);
                        const [myUserdata,setMyUserdata]= useState([]);
                    
                        const getUserdata = async () => {
                            try {
                                const {id} = route.params;
                                const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
                                const myData = await response.json();
                                setMyUserdata(myData);
                                setIsLoading(false);
                                console.log(myData);
                            }
                            catch (error) {
                                console.log(error);
                            }
                        };
                    
                        useEffect(()=>{
                            getUserdata();
                         },[]);
                    
                         const submit = () => {
                            navigation.navigate("Post"); 
                        }
                    
                        const returnback = () => {
                            navigation.navigate("Home"); 
                        }
                    
                    //   useEffect(() => {
                    //     // Update the document title using the browser API
                    //     document.title = `You clicked ${count} times`;
                    //   });
                    
                      return (
                        
                                        <FlatList
                                        data={myUserdata}
                                        keyExtractor={(item) => item.id.toString()}
                                        // keyExtractor= {(index) => {return index.id;}}
                                        pagingEnabled
                                        renderItem={({ item }) => {
                                            return(
                                                
                                                <View >
                                                    <View style={styles.containernavbar2}>
                          <TouchableOpacity style={{left: 10}} onPress={() => returnback()}>
                          <Ionicons name="ios-arrow-back" size={30} color="#000" />
                        </TouchableOpacity>
                            <Text style={{fontSize: 20, fontWeight: "bold", left:40}}>Posts </Text>
                            <TouchableOpacity style={{left: 220}} onPress={() => navigation.navigate('Post', {EditId: item.id})}>
                          <Text style={{fontSize: 20, color:"tomato"}}>Edit</Text>
                        </TouchableOpacity>
                            </View>
                                                    
                                                    <View style={{borderBottomColor: "white", borderBottomWidth: 1}}>
                                                    <Image source={{uri: item.image}} style={{width: 300, height: 250, left : 30,top: 0}}/>
                                                    </View>
                                                    {/* <View style={{top:10, left: 10}}> */}
                                                    <View style={styles.container}>
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Category:</Text> {item.name}
                                                    </Text>  
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Sub Category:</Text> {item.email}</Text> 
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Sub Category:</Text> {item.id}</Text>
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Brand:</Text> {item.website}</Text>
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Price:</Text> {item.mobile}</Text>
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Discount:</Text> {item.id}</Text>
                                                    <Text style={{fontSize:18}}>
                                                    <Text style={{fontWeight: "600"}}>Description:</Text> {item.description}</Text>
                                                    
                                
                                                    
                    
                                                    </View>
                                                </View>
                                                
                                            );
                                        }}
                                        />
                                 );
                              }        

