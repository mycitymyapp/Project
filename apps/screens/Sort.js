import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

function Sort() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://thapatechnical.github.io/userapi/users.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => b.id - a.id);
    setProducts(sortedProducts);
  };

  const sortProductsByPricess = () => {
    const sortedProducts = [...products].sort((a, b) => {
        return a.email.localeCompare(b.email);
      });
    setProducts(sortedProducts);
  };

  const sortProductsByPrices = () => {
    const sortedProducts = [...products].sort((a, b) =>{ const aFirstName = a.name.split(' ')[0];
    const bFirstName = b.name.split(' ')[0];
    return bFirstName.localeCompare(aFirstName);
  });
    setProducts(sortedProducts);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.id}</Text>
        <Text style={styles.itemPrice}>{item.email}</Text>

      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sortProductsByPricess}>
        <Text style={styles.sortButton}>Sort by email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sortProductsByPrices}>
        <Text style={styles.sortButton}>Sort by name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sortProductsByPrice}>
        <Text style={styles.sortButton}>Sort by price</Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    top: 100
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  list: {
    flexGrow: 1,
  },
  sortButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Sort;