import { COLORS } from '@/constants/Colors';
import { Product } from '@/types/product.type';
import { resolveImageSource } from '@/utils/utilities';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ProductModal from './ProductModal';

export default function ProductCard({product}:{product: Product}) {
  
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [productModalVisible, setProductModalVisible] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openProductModal = () => {
    setProductModalVisible(true);
  };

  const closeProductModal = () => {
    setProductModalVisible(false);
  };

  return (
    <>
      <Pressable onLongPress={toggleFavorite} onPress={openProductModal} style={styles.card}>
        <View style={styles.cardHeader}>
          <View>  
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          {
            isFavorite ? 
              <FontAwesome name="star" size={24} color={COLORS.beige} /> : 
              <FontAwesome name="star-o" size={24} color={COLORS.beige} />
          }
        </View>
        <Image style={styles.image} source={resolveImageSource(product.img)} />
      </Pressable>

      <ProductModal product={product} visible={productModalVisible} onClose={closeProductModal} />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: COLORS.green,
  },

  productName: {
    fontSize: 22,
    color: COLORS.beige,
  },

  price: {
    color: COLORS.white,
    fontSize: 16,
  },

  cardHeader: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    resizeMode: "contain",
  },
});