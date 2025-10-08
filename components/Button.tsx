import { COLORS } from '@/constants/Colors';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  width:            number;
  height?:          number;
  text:             string;
  color?:            string;
  onPressFunction?: () => void;
}

export default function Button(buttonProps: ButtonProps) {
  const { width, height = 40, text, onPressFunction, color = COLORS.green } = buttonProps;
  return (
    <Pressable style={[styles.button, {width, height, backgroundColor: color}]} onPress={onPressFunction}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
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