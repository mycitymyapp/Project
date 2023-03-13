// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList } from 'react-native';

// const API_URL = 'https://6fcd-103-117-61-41.in.ngrok.io/testing';

// const Exam1 = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setMessages(data.messages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addMessage = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: newMessage }),
//       });
//       const data = await response.json();
//       setMessages([...messages, data.message]);
//       setNewMessage('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{top:100}}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item}</Text>
//           </View>
//         )}
//       />
//       <TextInput
//         value={newMessage}
//         onChangeText={setNewMessage}
//         placeholder="Enter a message"
//       />
//       <Button title="Add Message" onPress={addMessage} />
//     </View>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// const MessageList = ({ messages, sender, recipient }) => {
//   const [messageList, setMessageList] = useState([]);

//   useEffect(() => {
//     fetch(`https://6fcd-103-117-61-41.in.ngrok.io/messages/${sender}/${recipient}`)
//       .then(response => response.json())
//       .then(data => setMessageList(data.messages))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <FlatList
//       data={messageList}
//       keyExtractor={item => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.messageContainer}>
//           <Text style={styles.sender}>{item.sender}:</Text>
//           <Text style={styles.message}>{item.message}</Text>
//         </View>
//       )}
//     />
//   );
// };

// const Exam1 = () => {
//   return (
//     <View style={styles.container}>
//       <MessageList
//         messages={[{ sender: 'vendor', message: 'Hello, how can I help you today?' }]}
//         sender="vendor"
//         recipient="customer"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   messageContainer: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10
//   },
//   sender: {
//     fontWeight: 'bold'
//   },
//   message: {
//     paddingLeft: 10
//   }
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';

// const Exam1 = () => {
//   const [likes, setLikes] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://api.example.com/posts/1/likes`);
//       const data = await response.json();
//       setLikes(data.likes);
//     };
//     fetchData();
//   }, []);

//   const handleLikePress = async () => {
//     await fetch(`https://api.example.com/posts/1/likes`, {
//       method: 'POST',
//     });
//     setLikes(likes + 1);
//   };

//   return (
//     <View>
//       {/* <Image source={{ uri: 'https://example.com/post1.jpg' }} /> */}
//       <Text>{likes} likes</Text>
//       <TouchableOpacity onPress={handleLikePress}>
//         <Text>Like</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Exam1 = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => {
        const starSource =
          star <= rating
            ? require('../assets/icons-star-filled.png')
            : require('../assets/icons-star-empty.png');

        return (
          <Image
            key={star}
            style={styles.star}
            source={starSource}
            onTouchStart={() => setRating(star)}
          />

        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 40,
    height: 40,
    margin: 8,
    top: 100,
    left: 30,   
  },
});



// import React, {useState} from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';

// const Exam1 = ({name, price, description, image}) => {
//   return (
//     <View style={styles.container}>
//       {/* <Image source={{uri: image}} style={styles.image} /> */}
//       <View style={styles.productInfo}>
//         <Text style={styles.name}>{name}</Text>
//         <Text style={styles.price}>${price}</Text>
//         <Text style={styles.description}>{description}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     margin: 10,
    
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10
//   },
//   productInfo: {
//     flex: 1
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 18
//   },
//   price: {
//     color: 'green',
//     fontWeight: 'bold',
//     fontSize: 16
//   },
//   description: {
//     marginTop: 10
//   }
// });

// import React, {useEffect, useState } from 'react';
// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const Exam1 = () => {
//     const route = useRoute();
//     const { selectedId } = route.params;
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://87e5-103-117-61-41.in.ngrok.io/testing')
//             .then(response => response.json())
//             .then(json => {
//                 setData(json);
//                 setIsLoading(false);
//             })
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <View style={{paddingBottom:2, paddingRight: 2, top: 100}}>
//             {isLoading ? (
//                 <ActivityIndicator size='large' />
//             ) : (
//                 <FlatList
//                     data={data.filter(item => item.id === selectedId)}
//                     keyExtractor={item => item.id.toString()}
//                     renderItem={({ item }) => (
//                         <View>
//                             <Text>{item.name}</Text>
//                             <Text>{item.surname}</Text>
//                         </View>
//                     )}
//                 />
//             )}
//         </View>
//     );
// };

export default Exam1;
