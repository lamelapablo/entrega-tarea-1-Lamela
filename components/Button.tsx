import { COLORS } from '@/constants/Colors';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  width:            number;
  height?:          number;
  text:             string;
  onPressFunction?: () => void;
}

export default function Button(buttonProps: ButtonProps) {
  const { width, height = 40, text, onPressFunction } = buttonProps;
  return (
    <Pressable style={[styles.button, {width, height}]} onPress={onPressFunction}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },

  buttonText: {
    color: COLORS.beige,
    fontSize: 16,
    fontWeight: "500"
  }
});