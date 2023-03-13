import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View, TouchableOpacity,document, FlatList, ScrollView } from 'react-native';
import Home from './Home';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export function Product({navigation}) {
  // Declare a new state variable, which we'll call "count"
    const route = useRoute();
    // const { selectedId } = route.params.selectedId;
    // const [EditId, setEditId] = useState(selectedId);
    const [count, setCount] = useState(0);
    const [isLoading,setIsLoading]= useState(true);
    const [myUserdata,setMyUserdata]= useState([]);
   
    const getUserdata = async () => {
        try {
            const {id} = route.params;
            const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
            const myData = await response.json();
            const filteredData = myData.filter(item => item.id === route.params.selectedId);
            setMyUserdata(filteredData);
            setIsLoading(false);
            console.log(filteredData);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getUserdata();
     },[route.params.selectedId]);

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
    
    //                 <FlatList
    //                 // data={myUserdata.filter(item => item.id === selectedId)}
    //                 data={myUserdata}
    //                 keyExtractor={(item) => item.id.toString()}
    //                 // keyExtractor= {(index) => {return index.id;}}
    //                 pagingEnabled
    //                 renderItem={({ item }) => {
    //                     return(
                            
    //                         <View >
    //                             <View style={styles.containernavbar2}>
    //   <TouchableOpacity style={{left: 10}} onPress={() => returnback()}>
    //   <Ionicons name="ios-arrow-back" size={30} color="#000" />
    // </TouchableOpacity>
    //     <Text style={{fontSize: 20, fontWeight: "bold", left:40}}>Posts </Text>
    //     {/* <TouchableOpacity style={{left: 220}} onPress={() => navigation.navigate('Post', {EditId: EditId})}>
    //   <Text style={{fontSize: 20, color:"tomato"}}>Edit</Text>
    // </TouchableOpacity> */}
    //     </View>
                                
    //                             <View style={{borderBottomColor: "white", borderBottomWidth: 1}}>
    //                             <Image source={{uri: item.image}} style={{width: 300, height: 250, left : 30,top: 0}}/>
    //                             </View>
    //                             {/* <View style={{top:10, left: 10}}> */}
    //                             <View style={styles.container}>
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Category:</Text> {item.name}
    //                             </Text>  
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Sub Category:</Text> {item.email}</Text> 
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Sub Category:</Text> {item.id}</Text>
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Brand:</Text> {item.website}</Text>
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Price:</Text> {item.mobile}</Text>
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Discount:</Text> {item.id}</Text>
    //                             <Text style={{fontSize:18}}>
    //                             <Text style={{fontWeight: "600"}}>Description:</Text> {item.description}</Text>
                                
            
                                

    //                             </View>
    //                         </View>
                            
    //                     );
    //                 }}
    //                 />
    <FlatList
    data={myUserdata}
    keyExtractor={(item) => item.id.toString()}
    pagingEnabled
    initialNumToRender={7}
    renderItem={({ item, index }) => {
        const prevIndex = index > 0 ? index - 1 : null;
        const nextIndex = index < myUserdata.length - 1 ? index + 1 : null;

        return (
            <View>
                {prevIndex !== null && (
                    <View>
                        <Image
                            source={{ uri: myUserdata[prevIndex].image }}
                            style={{ width: 300, height: 250, left: 30, top: 0 }}
                        />
                    </View>
                )}

                <View style={styles.containernavbar2}>
                    <TouchableOpacity
                        style={{ left: 10 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="ios-arrow-back" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', left: 40 }}>
                        Posts{' '}
                    </Text>
                    <TouchableOpacity
                        style={{ left: 220 }}
                        onPress={() => navigation.navigate('Post', { EditId: item.id })}
                    >
                        <Text style={{ fontSize: 20, color: 'tomato' }}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 300, height: 250, left: 30, top: 0 }}
                    />
                </View>

                {nextIndex !== null && (
                    <View>
                        <Image
                            source={{ uri: myUserdata[nextIndex].image }}
                            style={{ width: 300, height: 250, left: 30, top: 0 }}
                        />
                    </View>
                )}

                <View style={styles.container}>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Category:</Text> {item.name}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Sub Category:</Text> {item.email}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Sub Category:</Text> {item.id}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Brand:</Text> {item.website}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Price:</Text> {item.mobile}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Discount:</Text> {item.id}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: '600' }}>Description:</Text> {item.description}
                    </Text>
                </View>
            </View>
        );
    }}
    getItemLayout={(data, index) => ({
        length: 250,
        offset: 250 * index,
        index,
    })}
/>
                    
  );
}
const styles = StyleSheet.create({
    container:{
        textAlign: "center",
         top: 10,
         left: 10,
         marginRight: 10,

    },
    containernavbar: {
        paddingTop: 50,
        left: 0,
        right: 20,
        paddingBottom: 0,
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

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        top: 100,
      },

      button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        backgroundColor: "#E4715A",
        top: 100,
        
        
        
    },

})


// import React, { useState, useEffect } from 'react';
// import { View, Image, Text, FlatList, StyleSheet } from 'react-native';

// const Product = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('https://thapatechnical.github.io/userapi/users.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const renderPost = ({ item }) => (
//     <View style={styles.postContainer}>
//       <Image
//         style={styles.postImage}
//         source={{ uri: item.image }}
//       />
//       <Text style={styles.postText}>{item.name}</Text>
//       <Text style={styles.postDate}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       data={posts}
//       renderItem={renderPost}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
//   postContainer: {
//     marginVertical: 8,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     marginVertical: 16,
//   },
//   postText: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   postDate: {
//     fontSize: 12,
//     color: '#999',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// const Product = ({ navigation }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('https://thapatechnical.github.io/userapi/users.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const renderPost = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('Post', { post: item })}
//       style={styles.postContainer}
//     >
//       <Image
//         style={styles.postImage}
//         source={{ uri: item.image }}
//       />
//       <Text style={styles.postText}>{item.name}</Text>
      
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={posts}
//       renderItem={renderPost}
//       keyExtractor={(item) => item.id}
//       style={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
//   postContainer: {
//     marginVertical: 8,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     marginVertical: 16,
//   },
//   postText: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   postDate: {
//     fontSize: 12,
//     color: '#999',
//   },
// });

//************************Pagination code *******************************************************
// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     if (loading) return;

//     setLoading(true);

//     // Fetch the posts for the current page
//     const response = await fetch(`https://my-api.com/posts?page=${page}`);
//     const data = await response.json();

//     setPosts([...posts, ...data.posts]);
//     setLoading(false);
//   };

//   const renderPost = ({ item }) => (
//     <View style={styles.postContainer}>
//       <Image
//         style={styles.postImage}
//         source={{ uri: item.imageUrl }}
//       />
//       <Text style={styles.postText}>{item.text}</Text>
//       <Text style={styles.postDate}>{item.date}</Text>
//     </View>
//   );

//   const handleEndReached = () => {
//     setPage(page + 1);
//   };

//   return (
//     <FlatList
//       data={posts}
//       renderItem={renderPost}
//       keyExtractor={(item) => item.id}
//       onEndReached={handleEndReached}
//       onEndReachedThreshold={0.5}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   postContainer: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     marginVertical: 16,
//   },
//   postText: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   postDate: {
//     fontSize: 12,
//     color: '#999',
//   },
// });


export default Product;