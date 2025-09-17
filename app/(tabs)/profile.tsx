import Button from '@/components/Button';
import { COLORS } from '@/constants/Colors';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Profile() {

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("Pablo Lamela");
  const [newName, setNewName] = useState<string>("");

  const updateName = ():void => {
    if (!newName.trim()){
      Alert.alert("Enter a valid name");
      return;
    }

    setName(newName);
    setNewName("");
    closeModal();
  };

  const closeModal = ():void => {
    setNewName("");
    setModalVisible(false);
  };

  const openModal = ():void => {
    setModalVisible(true);
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput value={newName} onChangeText={setNewName} placeholder="Enter new name" autoFocus />
              <View style={styles.actions}>
                <Button width={60} text='save' onPressFunction={updateName} />
                <Button width={60} text='cancel' onPressFunction={closeModal} />
              </View>
            </View>
          </View>
        </Modal>
      <Text style={styles.currentName}>Name: { name }</Text>
      <Button width={140} text='update name' onPressFunction={openModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  currentName: {
    fontSize: 20,
    marginBottom: 20,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalView: {
    width: "60%",
    height: 140,
    justifyContent: "space-around",
    backgroundColor: COLORS.white,
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
});