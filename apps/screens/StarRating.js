import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const StarRating = () => {
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

export default StarRating;



//******************************post api code***************************************************

// import React, { useState } from 'react';
// import { View, Image, Button, StyleSheet } from 'react-native';

// const StarRating = () => {
//   const [rating, setRating] = useState(3);

//   const saveRating = () => {
//     fetch('https://your-api.com/products/123/ratings', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ rating }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       {[1, 2, 3, 4, 5].map((star) => {
//         const starSource =
//           star <= rating
//             ? require('./assets/filled_star.png')
//             : require('./assets/empty_star.png');

//         return (
//           <Image
//             key={star}
//             style={styles.star}
//             source={starSource}
//             onTouchStart={() => setRating(star)}
//           />
//         );
//       })}
//       <Button title="Save" onPress={saveRating} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   star: {
//     width: 40,
//     height: 40,
//     margin: 8,
//   },
// });

// export default StarRating;

// *********************************get api code************************************************8

// import React, { useState, useEffect } from 'react';
// import { View, Image, Text, StyleSheet } from 'react-native';

// const ProductRatings = () => {
//   const [ratings, setRatings] = useState([]);

//   useEffect(() => {
//     fetch('https://your-api.com/products/123/ratings')
//       .then((response) => response.json())
//       .then((data) => {
//         setRatings(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       {ratings.map((rating) => (
//         <View key={rating.id} style={styles.ratingContainer}>
//           {[1, 2, 3, 4, 5].map((star) => {
//             const starSource =
//               star <= rating.value
//                 ? require('./assets/filled_star.png')
//                 : require('./assets/empty_star.png');

//             return (
//               <Image
//                 key={star}
//                 style={styles.star}
//                 source={starSource}
//               />
//             );
//           })}
//           <Text style={styles.ratingText}>{rating.value}/5</Text>
//         </View>
//       ))}
//     </View>