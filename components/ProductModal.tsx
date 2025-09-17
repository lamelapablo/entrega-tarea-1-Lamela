import { COLORS } from '@/constants/Colors';
import { Product } from '@/types/product.type';
import { resolveImageSource } from '@/utils/utilities';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

type Props = {
  product: Product;
  visible: boolean;
  onClose: () => void;
}

type ResizeMode = "cover" | "contain" | "stretch";

export default function ProductModal(props: Props) {
  const { product, visible, onClose } = props;

  const [imageResizeMode, setImageResizeMode] = useState<ResizeMode>("contain");
  
  return (
    <Modal animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Image style={[styles.modalImage, {resizeMode: imageResizeMode}]} source={resolveImageSource(product.img)} />
          <View style={styles.buttonsContainer}>
            <Button text='cover' width={80} onPressFunction={() => setImageResizeMode("cover")} />
            <Button text='contain' width={80} onPressFunction={() => setImageResizeMode("contain")} />
            <Button text='stretch' width={80} onPressFunction={() => setImageResizeMode("stretch")} />
          </View>
          <Button text='close' width={80} onPressFunction={onClose} />
        </View>
      </View>
    </Modal>
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
    color: COLORS.white,
  },

  productDescription: {
    fontSize: 12,
    color: COLORS.white,
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
  },

  modalImage: {
    width: 130,
    height: 100,
  },
});