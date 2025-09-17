import ProductCard from '@/components/ProductCard';
import { dummyProducts } from '@/data/dummyProducts';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

export default function Gallery() {
  return (
    <FlatList 
      data={dummyProducts}
      renderItem={({item}) => <ProductCard product={item} />} 
      contentContainerStyle={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  }
});
