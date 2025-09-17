import ProductCard from '@/components/ProductCard';
import { COLORS } from '@/constants/Colors';
import { dummyProducts } from '@/data/dummyProducts';
import { Product } from '@/types/product.type';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';

export default function Gallery() {

  const [searchText, setSearchText] = useState<string>('');

  const filteredProducts: Product[] = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList 
        keyExtractor={item => item.id.toString()}
        data={filteredProducts}
        renderItem={({item}) => <ProductCard product={item} />} 
        contentContainerStyle={styles.container} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  input: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.white,
  },
});
