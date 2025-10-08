import { COLORS } from '@/constants/Colors';
import { useCreateProduct } from '@/hooks/useCreateProduct';
import { ProductPayload } from '@/types/product.type';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Button from './Button';

type Props = {
  visible:         boolean;
  onClose:         () => void;
  refetchProducts: () => void;
}

export default function CreateProductModal({ visible, onClose, refetchProducts }: Props) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [imgUri, setImgUri] = useState<string>('');

  const { createProduct, error } = useCreateProduct();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImgUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!name || !description || !price || !imgUri) return;
    const productToCreate: ProductPayload = {name, description, price: `$${price}`, img: imgUri};
    await createProduct(productToCreate); 
    refetchProducts();
    closeSelf();
  };

  const closeSelf = () => {
    setName('');
    setDescription('');
    setImgUri('');
    onClose();
  };

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView 
      style={{flex:1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <View style={styles.container}>
          <Text style={styles.title}>Create Product</Text>

          <TextInput
            placeholderTextColor={COLORS.darkGreen}
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholderTextColor={COLORS.darkGreen}
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />

          <TextInput
            placeholderTextColor={COLORS.darkGreen}
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            <Text style={styles.imagePickerText}>
              {imgUri ? 'Change Image' : 'Pick Image'}
            </Text>
          </TouchableOpacity>

          {imgUri ? (
            <Image source={{ uri: imgUri }} style={styles.imagePreview} />
          ) : null}

          <View style={styles.buttonRow}>
            <Button width={80} color={COLORS.darkGreen} text="Cancel" onPressFunction={closeSelf} />
            <Button width={80} text="Create" onPressFunction={handleSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },
  imagePicker: {
    backgroundColor: COLORS.green,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePickerText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: "100%",
    height: 360,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});