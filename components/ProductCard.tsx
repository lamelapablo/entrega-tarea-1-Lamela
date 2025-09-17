import { COLORS } from '@/constants/Colors';
import { Product } from '@/types/product.type';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

type ResizeMode = "cover" | "contain" | "stretch";

export default function ProductCard({product}:{product: Product}) {
  
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [productModalVisible, setProductModalVisible] = useState<boolean>(false);
  const [imageResizeMode, setImageResizeMode] = useState<ResizeMode>("contain");

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
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.img} 
          // contentFit={imageResizeMode} 
          />
        </View>
      </Pressable>

      <Modal animationType="fade"
        transparent={true}
        visible={productModalVisible}
        onRequestClose={closeProductModal}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <View style={styles.imageContainer}>
              <Image style={[ styles.image, {resizeMode: imageResizeMode}]} source={product.img} contentFit='cover' />
            </View>
            <View style={styles.buttonsContainer}>
              <Button text='cover' width={80} onPressFunction={() => setImageResizeMode("cover")} />
              <Button text='contain' width={80} onPressFunction={() => setImageResizeMode("contain")} />
              <Button text='stretch' width={80} onPressFunction={() => setImageResizeMode("stretch")} />

            </View>
            <Button text='close' width={80} onPressFunction={closeProductModal} />
          </View>
        </View>
      </Modal>
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
    // flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalView: {
    width: "80%",
    height: 340,
    justifyContent: "space-around",
    backgroundColor: COLORS.darkGreen,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
  
});