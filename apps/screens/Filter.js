// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const Filter = () => {
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     subCategory: '',
//     color: '',
//     price: '',
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const response = await fetch('https://your-api.com/products');
//     const data = await response.json();
//     setProducts(data);
//   };

//   const applyFilters = () => {
//     let filteredProducts = [...products];

//     if (filters.subCategory) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.subCategory === filters.subCategory
//       );
//     }

//     if (filters.color) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.color === filters.color
//       );
//     }

//     if (filters.price) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.price === filters.price
//       );
//     }

//     setProducts(filteredProducts);
//   };

//   return (
//     <View style={{top:100}}>
//       <View>
//         <Picker
//           selectedValue={filters.subCategory}
//           onValueChange={(value) =>
//             setFilters({ ...filters, subCategory: value })
//           }
//         >
//           <Picker.Item label="All" value="" />
//           <Picker.Item label="Subcategory 1" value="subcategory1" />
//           <Picker.Item label="Subcategory 2" value="subcategory2" />
//         </Picker>
//       </View>

//       <View>
//         <Picker
//           selectedValue={filters.color}
//           onValueChange={(value) =>
//             setFilters({ ...filters, color: value })
//           }
//         >
//           <Picker.Item label="All" value="" />
//           <Picker.Item label="Red" value="red" />
//           <Picker.Item label="Blue" value="blue" />
//         </Picker>
//       </View>

//       <View>
//         <Picker
//           selectedValue={filters.price}
//           onValueChange={(value) =>
//             setFilters({ ...filters, price: value })
//           }
//         >
//           <Picker.Item label="All" value="" />
//           <Picker.Item label="$0-$10" value="0-10" />
//           <Picker.Item label="$10-$20" value="10-20" />
//         </Picker>
//       </View>

//       <Button title="Apply Filters" onPress={applyFilters} />

//       <FlatList
//         data={products}
//         renderItem={({ item }) => <ProductItem product={item} />}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// function Filter() {
//   const [filterVisible, setFilterVisible] = useState(false);
//   const slideAnimation = useRef(new Animated.Value(0)).current;

//   const handleFilterToggle = () => {
//     setFilterVisible((prev) => !prev);
//     Animated.timing(slideAnimation, {
//       toValue: filterVisible ? 0 : 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const slideFromRight = {
//     transform: [
//       {
//         translateX: slideAnimation.interpolate({
//           inputRange: [0, 1],
//           outputRange: [400, 0],
//         }),
//       },
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleFilterToggle}>
//         <Text style={styles.button}>Toggle Filter</Text>
//       </TouchableOpacity>
//       <Animated.View style={[styles.filterContainer, slideFromRight]}>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Filter Option 1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Filter Option 2</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Filter Option 3</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     fontSize: 18,
//     color: '#007aff',
//   },
//   filterContainer: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     height: '100%',
//     width: 200,
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderBottomLeftRadius: 20,
//   },
//   filterButton: {
//     paddingVertical: 10,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: '#ccc',
//   },
//   filterText: {
//     fontSize: 16,
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// function Filter() {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product 1', price: 50, createdAt: '2022-02-01' },
//     { id: 2, name: 'Product 2', price: 100, createdAt: '2022-01-01' },
//     { id: 3, name: 'Product 3', price: 75, createdAt: '2022-03-01' },
//   ]);

//   const [sortOrder, setSortOrder] = useState('createdAt');

//   const handleSortOrderChange = (order) => {
//     setSortOrder(order);
//   };

//   useEffect(() => {
//     const sortedProducts = [...products].sort((a, b) => {
//       if (sortOrder === 'price') {
//         return a.price - b.price;
//       } else if (sortOrder === 'createdAt') {
//         return new Date(a.createdAt) - new Date(b.createdAt);
//       }
//     });
//     setProducts(sortedProducts);
//   }, [sortOrder]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemPrice}>${item.price}</Text>
//         <Text style={styles.itemDate}>{item.createdAt}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sortBar}>
//         <TouchableOpacity
//           onPress={() => handleSortOrderChange('createdAt')}
//           style={[styles.sortButton, sortOrder === 'createdAt' && styles.activeSortButton]}>
//           <Text style={styles.sortButtonText}>Sort by Date</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => handleSortOrderChange('price')}
//           style={[styles.sortButton, sortOrder === 'price' && styles.activeSortButton]}>
//           <Text style={styles.sortButtonText}>Sort by Price</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={products}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   sortBar: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   sortButton: {
//     marginRight: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   activeSortButton: {
//     backgroundColor: '#007aff',
//     borderColor: '#007aff',
//   },
//   sortButtonText: {
//     color: '#007aff',
//     fontSize: 16,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   itemName: {
//     flex: 1,
//     fontSize: 16,
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   itemDate: {
//     fontSize: 12,
//     color: '#999',
//   },
//   list: {
//     flexGrow: 1,
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const images = [
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/547593/pexels-photo-547593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const Filter = () => {
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <View style={styles.imageContainer} key={index}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width,
    height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: width / 25,
    color: '#888',
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 25,
    color: '#fff',
    margin: 3,
  },
});

// const products = [
//   { id: 1, name: 'Product 1', category: 'Category 1', price: '10' },
//   { id: 2, name: 'Product 2', category: 'Category 2', price: '20' },
//   { id: 3, name: 'Product 3', category: 'Category 1', price: '30' },
//   { id: 4, name: 'Product 4', category: 'Category 3', price: '40' },
// ];

// const Filter = () => {
//   const [filter, setFilter] = useState({ category: 'all', price: 'all' });

//   const handleCategoryChange = (value) => {
//     setFilter({ ...filter, category: value });
//   };

//   const handlePriceChange = (value) => {
//     setFilter({ ...filter, price: value });
//   };

//   const filteredProducts = products.filter((product) => {
//     if (filter.category !== 'all' && filter.category !== product.category) {
//       return false;
//     }

//     if (filter.price !== 'all' && filter.price !== product.price) {
//       return false;
//     }

//     return true;
//   });

//   const categories = [
//     'all',
//     ...new Set(products.map((product) => product.category)),
//   ];

//   const prices = [
//     'all',
//     ...new Set(products.map((product) => product.price)),
//   ];

//   console.log(categories, prices);
//   return (
//     <View style={{top:100}}>
//       <View>
//         <Text>Filter by Category:</Text>
//         <Picker
//           selectedValue={filter.category}
//           onValueChange={handleCategoryChange}
//         >
//           {categories.map((category) => (
//             <Picker.Item key={category} label={category} value={category} />
//           ))}
//         </Picker>
//       </View>
//       <View>
//         <Text>Filter by Price:</Text>
//         <Picker
//           selectedValue={filter.price}
//           onValueChange={handlePriceChange}
//         >
//           {prices.map((price) => (
//             <Picker.Item key={price} label={price} value={price} />
//           ))}
//         </Picker>
//       </View>
//       {filteredProducts.map((product) => (
//         <View key={product.id}>
//           <Text>{product.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// }

export default Filter;