import Button from '@/components/Button';
import CreateProductModal from '@/components/CreateProductModal';
import ProductCard from '@/components/ProductCard';
import { COLORS } from '@/constants/Colors';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/product.type';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Gallery() {

  const [searchText, setSearchText] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { products, loading, error, refetch } = useProducts();

  if (loading) return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={60} color={COLORS.darkGreen} />
    </View>
  );
  if (error) return <Text>Error: {error.message}</Text>;


  const filteredProducts: Product[] = products.filter(product =>
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
      <View style={styles.createButtonContainer}>
        <Button text='create' width={80} onPressFunction={() => setModalVisible(true)} />
      </View>
      <FlatList 
        keyExtractor={item => item.id.toString()}
        data={filteredProducts}
        renderItem={({item}) => <ProductCard product={item} />} 
        contentContainerStyle={styles.container} 
        refreshing={loading}
        onRefresh={refetch}
        />

      <CreateProductModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        refetchProducts={refetch}
      />
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

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  createButtonContainer: {
    alignItems: "center",
    marginBottom: 4,
  },
});
