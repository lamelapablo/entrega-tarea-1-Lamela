import { COLORS } from '@/constants/Colors';
import { Product } from '@/types/product.type';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({product}:{product: Product}) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Pressable onLongPress={toggleFavorite} style={styles.card}>
      <View style={styles.cardHeader}>
        <View>  
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        {
          isFavorite ? 
            <FontAwesome style={styles.star} name="star" size={24} color="black" /> : 
            <FontAwesome style={styles.star} name="star-o" size={24} color="black" />
        }
        
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={product.img} contentFit='cover' />
      </View>
    </Pressable>
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
    // flex: 1,
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
  },

  imageContainer: {
    flex: 1,
  },

  star: {
    
  }
});